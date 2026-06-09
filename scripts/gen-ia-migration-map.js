// Build-once migration blueprint for DOC-1814.
// Inventories every routed LEGACY docs page and proposes its new IA path +
// redirect, flagging low-confidence rows. Moves NOTHING.
// Outputs: docs-migration/ia-migration-map.csv, docs-migration/redirects.generated.js
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const DOCS = path.join(ROOT, "docs");
const OUT = path.join(ROOT, "docs-migration");

const LEGACY_TOP = ["topics", "developers", "partnership"];
const ROOT_LEGACY = ["glossary.mdx"]; // root-level pages that move
const SKIP_DIR = new Set(["preview", "partials", "definitions", "node_modules"]);
const isPartial = (b) => b.startsWith("_");

function walk(dir, acc = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) { if (!SKIP_DIR.has(e.name)) walk(full, acc); }
    else if (/\.mdx?$/.test(e.name) && !isPartial(e.name)) acc.push(full);
  }
  return acc;
}
const idOf = (f) => path.relative(DOCS, f).replace(/\.mdx?$/, "");
const urlOf = (id) => "/" + id.replace(/\/index$/, "").replace(/^index$/, "");

const OVERRIDES = {
  "topics/contact": "get-started/contact",
  "developers/contact": "get-started/contact",
  "partnership/contact": "get-started/contact",
  "topics/accounts/memberships/admin-change": "accounts/guides/memberships/admin-change",
  "topics/payments/credit-transfers/sepa/vop/verification-of-payee": "payments/guides/credit-transfers/sepa/vop/verification-of-payee",
  "topics/payments/credit-transfers/sepa/vop/bulk-credit-transfers": "payments/guides/credit-transfers/sepa/vop/bulk-credit-transfers",
  "topics/payments/credit-transfers/sepa/vop/incoming-vop-requests": "payments/guides/credit-transfers/sepa/vop/incoming-vop-requests",
};

// Ordered old->new prefix rules; first match wins.
const RULES = [
  [/^topics\/onboarding\/(.*)$/, "accounts/guides/onboarding/$1"],
  [/^topics\/capital-deposits\/(.*)$/, "accounts/guides/onboarding/capital-deposits/$1"],
  [/^topics\/accounts\/(.*)$/, "accounts/$1"],
  [/^topics\/merchants\/(.*)$/, "payments/guides/merchants/$1"],
  [/^topics\/payments\/(.*)$/, "payments/$1"],
  [/^topics\/cards\/(.*)$/, "cards/$1"],
  [/^topics\/users\/(.*)$/, "users/$1"],
  [/^topics\/projects\/(.*)$/, "get-started/set-up-swan/projects/$1"],
  [/^topics\/get-started\/(.*)$/, "get-started/set-up-swan/$1"],
  [/^glossary$/, "get-started/set-up-swan/glossary"],
  [/^developers\/tools\/(.*)$/, "dev-tools/tools/$1"],
  [/^developers\/using-api\/(.*)$/, "dev-tools/using-api/$1"],
  [/^developers\/graphql$/, "dev-tools/graphql/index"],
  [/^developers\/(.*)$/, "dev-tools/$1"],
  [/^partnership\/document-center\/identity\/(.*)$/, "users/reference/identity/$1"],
  [/^partnership\/document-center\/(.*)$/, "accounts/reference/$1"],
  [/^partnership\/protections\/(.*)$/, "get-started/become-a-partner/protections/$1"],
  [/^partnership\/overview\/(.*)$/, "get-started/become-a-partner/$1"],
  [/^partnership\/(.*)$/, "get-started/become-a-partner/$1"],
];

const PRODUCTS = ["accounts", "cards", "payments", "users"];
function classify(newId) {
  const seg = newId.split("/");
  if (!PRODUCTS.includes(seg[0])) return { newId, confidence: "high" };
  if (["guides", "concepts", "reference"].includes(seg[1])) return { newId, confidence: "high" };
  const base = seg[seg.length - 1];
  let layer, confidence;
  if (base === "sandbox" || base === "fields") { layer = "reference"; confidence = "high"; }
  else if (base.startsWith("guide-")) { layer = "guides"; confidence = "high"; }
  else if (base === "index") return { newId, confidence: "med" };
  else { layer = "guides"; confidence = "low"; }
  seg[seg.length - 1] = base.replace(/^guide-/, "");
  seg.splice(1, 0, layer);
  return { newId: seg.join("/"), confidence };
}
function map(oldId) {
  if (OVERRIDES[oldId]) return { newId: OVERRIDES[oldId], confidence: "high" };
  for (const [re, rep] of RULES) if (re.test(oldId)) return classify(oldId.replace(re, rep));
  return { newId: null, confidence: "unmapped" };
}

const files = walk(DOCS).filter((f) => {
  const id = idOf(f);
  return LEGACY_TOP.includes(id.split("/")[0]) || (ROOT_LEGACY.includes(path.basename(f)) && !id.includes("/"));
});

const rows = files.map((f) => {
  const oldId = idOf(f);
  const { newId, confidence } = map(oldId);
  return { oldId, oldUrl: urlOf(oldId), newId: newId || "", newUrl: newId ? urlOf(newId) : "", confidence };
});

const ia = require(path.join(ROOT, "sidebars.ia.js"));
const newIds = new Set();
(function collect(n){ if(Array.isArray(n))return n.forEach(collect); if(!n||typeof n!=="object")return; if(n.type==="doc"&&n.id)newIds.add(n.id); if(n.type==="category"){ if(n.link&&n.link.id)newIds.add(n.link.id); collect(n.items);} })(Object.values(ia));
const targets = new Set(rows.map((r) => r.newId).filter(Boolean));
const netNew = [...newIds].filter((id) => !targets.has(id));

fs.mkdirSync(OUT, { recursive: true });
fs.writeFileSync(path.join(OUT, "ia-migration-map.csv"),
  ["oldPath,oldUrl,newPath,newUrl,confidence",
    ...rows.map((r) => [r.oldId, r.oldUrl, r.newId, r.newUrl, r.confidence].map((v) => `"${v}"`).join(","))].join("\n"));
const redirects = rows.filter((r) => r.newUrl && r.oldUrl !== r.newUrl).map((r) => ({ from: r.oldUrl, to: r.newUrl }));
fs.writeFileSync(path.join(OUT, "redirects.generated.js"),
  "// Generated — review before merging into redirects.js\nmodule.exports = " + JSON.stringify(redirects, null, 2) + ";\n");

const byConf = rows.reduce((m, r) => ((m[r.confidence] = (m[r.confidence] || 0) + 1), m), {});
console.log("Legacy routed pages:", rows.length, "| confidence:", byConf);
console.log("Redirects proposed:", redirects.length, "| net-new pages:", netNew.length);
console.log("\nNeeds a decision (low / unmapped):");
rows.filter((r) => r.confidence === "low" || r.confidence === "unmapped").forEach((r) => console.log(`  [${r.confidence}] ${r.oldUrl} -> ${r.newUrl || "??"}`));
console.log("\nNet-new (new stubs with no legacy source):");
netNew.forEach((id) => console.log("  + " + urlOf(id)));
