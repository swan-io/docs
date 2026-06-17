const fs = require("fs");
const path = require("path");
const ROOT = path.join(__dirname, "..");
const DOCS = path.join(ROOT, "docs");
const NEW_DIRS = ["get-started", "accounts", "cards", "payments", "users", "dev-tools"];
const MARKER = "**Shell stub**";
const ACRONYMS = { ibans: "IBANs", iban: "IBAN", vop: "Verification of payee (VoP)", api: "API", sepa: "SEPA", idd: "International Direct Debit", sdd: "SEPA Direct Debit", s2s: "Server-to-server", sca: "SCA", orias: "ORIAS", kyc: "KYC", graphql: "GraphQL", "dev-tools": "Dev Tools", mcp: "MCP" };
const tidy = (slug) => ACRONYMS[slug] || slug.replace(/^guide-/, "").replace(/-/g, " ").replace(/^\w/, (c) => c.toUpperCase());

// Canonical = curated IA only. The manifest CSV stays a separate migration blueprint.
const canonical = new Set();
const ia = require(path.join(ROOT, "sidebars.ia.js"));
(function collect(n){ if(Array.isArray(n)) return n.forEach(collect); if(!n||typeof n!=="object") return; if(n.type==="doc"&&n.id) canonical.add(n.id); if(n.type==="category"){ if(n.link&&n.link.id) canonical.add(n.link.id); collect(n.items);} })(Object.values(ia));

// Create missing canonical stubs
let created = 0;
for (const id of canonical) {
  const file = path.join(DOCS, id + ".mdx");
  if (fs.existsSync(file)) continue;
  fs.mkdirSync(path.dirname(file), { recursive: true });
  const base = id.split("/").pop();
  const title = tidy(base === "index" ? (id.split("/").slice(-2)[0] || "Overview") : base);
  fs.writeFileSync(file, `---\ntitle: "${title}"\n---\n\n> **Shell stub** — structure only, no content yet (DOC-1814).\n`);
  created++;
}

// Delete superseded shell stubs under the new dirs (marker-gated: never touches curated or legacy content)
let deleted = 0;
function delWalk(dir){ for (const e of fs.readdirSync(dir, { withFileTypes: true })) { const f = path.join(dir, e.name); if (e.isDirectory()) delWalk(f); else if (/\.mdx?$/.test(e.name)) { const id = path.relative(DOCS, f).replace(/\.mdx?$/, ""); if (!canonical.has(id) && fs.readFileSync(f, "utf8").includes(MARKER)) { fs.unlinkSync(f); deleted++; } } } }
for (const d of NEW_DIRS) { const p = path.join(DOCS, d); if (fs.existsSync(p)) delWalk(p); }

// Prune dirs left empty by the delete, and their orphaned _category_.json
let prunedCats = 0, prunedDirs = 0;
function hasMdx(dir){ return fs.readdirSync(dir, { withFileTypes: true }).some((e) => e.isDirectory() ? hasMdx(path.join(dir, e.name)) : /\.mdx?$/.test(e.name)); }
function prune(dir){ for (const e of fs.readdirSync(dir, { withFileTypes: true })) { if (!e.isDirectory()) continue; const sub = path.join(dir, e.name); prune(sub); if (fs.existsSync(sub) && !hasMdx(sub)) { const cj = path.join(sub, "_category_.json"); if (fs.existsSync(cj)) { fs.unlinkSync(cj); prunedCats++; } if (fs.readdirSync(sub).length === 0) { fs.rmdirSync(sub); prunedDirs++; } } } }
for (const d of NEW_DIRS) { const p = path.join(DOCS, d); if (fs.existsSync(p)) prune(p); }

console.log(`Canonical (curated) pages: ${canonical.size} | created: ${created} | deleted superseded stubs: ${deleted} | pruned _category_.json: ${prunedCats} | pruned empty dirs: ${prunedDirs}`);
