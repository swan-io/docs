// DOC-1814 Phase 0 — rebase the migration map onto the REAL stub tree.
// Deterministic & idempotent. Reads ia-migration-map.csv + the live stub tree;
// resolves every row's newPath to a canonical route via exact|rule|fold|fuzzy.
// Writes ONLY the four Phase-0 artifacts. Touches nothing else.
//
// Outputs:
//   docs-migration/ia-migration-map.v2.csv
//   docs-migration/redirects.v2.generated.js
//   docs-migration/redirects.chain-rewrites.generated.js
//   docs-migration/rebase-report.md
//
// Run:  node scripts/rebase-ia-migration-map.js   (exits nonzero on any invariant break)

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const DOCS = path.join(ROOT, "docs");
const OUT = path.join(ROOT, "docs-migration");
const NEW_DIRS = ["get-started", "accounts", "cards", "payments", "users", "dev-tools"];
const PRODUCTS = new Set(["accounts", "cards", "payments", "users"]);

// Copied verbatim from scripts/gen-ia-tree.js (not exported there). Source of truth
// for known acronym/multi-word slugs; do not edit gen-ia-tree.js. Used here only to
// protect these slugs from being torn apart during fuzzy token matching.
const ACRONYMS = { ibans: "IBANs", iban: "IBAN", vop: "Verification of payee (VoP)", api: "API", sepa: "SEPA", idd: "International Direct Debit", sdd: "SEPA Direct Debit", s2s: "Server-to-server", sca: "SCA", orias: "ORIAS", kyc: "KYC", graphql: "GraphQL", "dev-tools": "Dev Tools", mcp: "MCP" };
const ACRONYM_SLUGS = new Set(Object.keys(ACRONYMS));

// ---------------------------------------------------------------------------
// 1. CANONICAL ROUTES — the only legal redirect-target space.
// ---------------------------------------------------------------------------
function walkMdx(dir, acc = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walkMdx(full, acc);
    else if (/\.mdx?$/.test(e.name)) acc.push(full);
  }
  return acc;
}
const idOf = (f) => path.relative(DOCS, f).replace(/\.mdx?$/, "");
const urlOf = (id) => "/" + id.replace(/\/index$/, "").replace(/^index$/, "");
// route key used for matching: url form, no trailing slash, no /index
const keyOf = (idOrPath) => {
  let u = "/" + String(idOrPath).replace(/^\/+|\/+$/g, "");
  u = u.replace(/\/index$/, "");
  return u === "" ? "/" : u;
};

const canonIds = [];
for (const d of NEW_DIRS) {
  const p = path.join(DOCS, d);
  if (fs.existsSync(p)) for (const f of walkMdx(p)) canonIds.push(idOf(f));
}
canonIds.sort();
// map: route key -> canonical id (assert no collisions)
const byKey = new Map();
for (const id of canonIds) {
  const k = keyOf(id);
  if (byKey.has(k) && byKey.get(k) !== id) {
    console.error(`FATAL: route collision at ${k}: ${byKey.get(k)} vs ${id}`);
    process.exit(1);
  }
  byKey.set(k, id);
}
const canonKeys = new Set(byKey.keys());
const resolveKey = (p) => byKey.get(keyOf(p)) || null; // -> canonical id or null

// ---------------------------------------------------------------------------
// Resolution pipeline helpers
// ---------------------------------------------------------------------------
const stripIndex = (p) => p.replace(/\/index$/, "");
const lastSeg = (p) => stripIndex(p).split("/").pop() || "";

// (b) RULES — rewrite the stale newPath toward the tree's real scheme, then retry.
// Each returns a rewritten path (id-form) or null. Order matters; first hit wins.
const RULES = [
  ["strip-guide-prefix", (p) => {
    // strip guide- / how-to- on the final slug
    const segs = stripIndex(p).split("/");
    const base = segs[segs.length - 1];
    const stripped = base.replace(/^(guide-|how-to-)/, "");
    if (stripped === base) return null;
    segs[segs.length - 1] = stripped;
    return segs.join("/");
  }],
  ["concept-shape", (p) => {
    // <product>/<slug>[/index]  ->  <product>/concepts/<slug>
    const segs = stripIndex(p).split("/");
    if (segs.length !== 2) return null;
    const [prod, slug] = segs;
    if (!PRODUCTS.has(prod)) return null;
    if (["guides", "concepts", "reference"].includes(slug)) return null;
    return `${prod}/concepts/${slug}`;
  }],
  ["collapse-index", (p) => {
    // <x>/index -> <x>  (only meaningful if it changes the path)
    const s = stripIndex(p);
    return s === p ? null : s;
  }],
  ["strip-guide-then-concept", (p) => {
    // combine: strip guide- on final slug AND lift a 2-seg product page to concepts
    const segs = stripIndex(p).split("/");
    segs[segs.length - 1] = segs[segs.length - 1].replace(/^(guide-|how-to-)/, "");
    if (segs.length === 2 && PRODUCTS.has(segs[0]) && !["guides", "concepts", "reference"].includes(segs[1])) {
      return `${segs[0]}/concepts/${segs[1]}`;
    }
    return segs.join("/");
  }],
];

// (c) FOLD — nearest existing ancestor stub (the collapsed-child cases).
// Reject degenerate folds to a bare product index (route depth < 2): those are
// give-ups, not genuine collapsed-child relationships.
function fold(p) {
  const segs = stripIndex(p).split("/");
  for (let i = segs.length - 1; i >= 1; i--) {
    const anc = segs.slice(0, i).join("/");
    const k = keyOf(anc);
    if (k.split("/").filter(Boolean).length < 2) break; // don't fold to "/<product>"
    const hit = resolveKey(anc);
    if (hit) return hit;
  }
  return null;
}

// (d) FUZZY — token overlap on product root + final slug. Auto-accept only a
// unique strong match; else unresolved with top-3 candidates.
function tokenize(p) {
  const out = [];
  for (const seg of stripIndex(p).split("/")) {
    if (seg === "index") continue;
    if (ACRONYM_SLUGS.has(seg)) { out.push(seg); continue; }
    for (const t of seg.split("-")) if (t) out.push(t);
  }
  return out;
}
const jaccard = (a, b) => {
  const A = new Set(a), B = new Set(b);
  if (!A.size && !B.size) return 0;
  let inter = 0;
  for (const x of A) if (B.has(x)) inter++;
  const uni = new Set([...A, ...B]).size;
  return uni ? inter / uni : 0;
};
function fuzzy(p) {
  const prod = p.split("/")[0];
  const slugTok = tokenize(lastSeg(p));
  const fullTok = tokenize(p);
  const scored = canonIds
    .filter((id) => id.split("/")[0] === prod)
    .map((id) => ({
      id,
      route: urlOf(id),
      slug: jaccard(slugTok, tokenize(lastSeg(id))),
      full: jaccard(fullTok, tokenize(id)),
    }))
    .sort((a, b) => b.slug - a.slug || b.full - a.full || a.id.localeCompare(b.id));
  const top3 = scored.slice(0, 3);
  const best = scored[0], second = scored[1];
  const strong = best && best.slug >= 0.5;
  const unique = best && (!second || best.slug - second.slug >= 0.2);
  if (strong && unique) return { id: best.id, candidates: top3 };
  return { id: null, candidates: top3 };
}

// ---------------------------------------------------------------------------
// 2. Resolve every CSV row.
// ---------------------------------------------------------------------------
function parseCsv(text) {
  const lines = text.replace(/\r/g, "").split("\n").filter((l) => l.length);
  const header = splitCsvLine(lines[0]);
  return { header, rows: lines.slice(1).map((l) => { const c = splitCsvLine(l); const o = {}; header.forEach((h, i) => (o[h] = c[i])); return o; }) };
}
function splitCsvLine(line) {
  const out = []; let cur = "", q = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (q) { if (ch === '"') { if (line[i + 1] === '"') { cur += '"'; i++; } else q = false; } else cur += ch; }
    else if (ch === '"') q = true;
    else if (ch === ",") { out.push(cur); cur = ""; }
    else cur += ch;
  }
  out.push(cur);
  return out;
}
const csvCell = (v) => `"${String(v == null ? "" : v).replace(/"/g, '""')}"`;

const { header: srcHeader, rows: srcRows } = parseCsv(fs.readFileSync(path.join(OUT, "ia-migration-map.csv"), "utf8"));
const REQUIRED = ["oldPath", "oldUrl", "newPath", "newUrl", "confidence"];
for (const h of REQUIRED) if (!srcHeader.includes(h)) { console.error(`FATAL: source CSV missing column ${h}`); process.exit(1); }

function resolveRow(newPath) {
  // a. exact
  let hit = resolveKey(newPath);
  if (hit) return { id: hit, resolution: "exact", candidates: [] };
  // b. rules
  for (const [name, fn] of RULES) {
    const rw = fn(newPath);
    if (rw && (hit = resolveKey(rw))) return { id: hit, resolution: `rule:${name}`, candidates: [] };
  }
  // best structural rewrite (for fold ancestry): prefer concept/guide rewrite if it changed the path
  let rewritten = newPath;
  for (const [, fn] of RULES) { const rw = fn(newPath); if (rw) { rewritten = rw; break; } }
  // c. fold (try both original and rewritten ancestry)
  hit = fold(rewritten) || fold(newPath);
  if (hit) return { id: hit, resolution: "fold", candidates: [] };
  // d. fuzzy
  const f = fuzzy(newPath);
  if (f.id) return { id: f.id, resolution: "fuzzy", candidates: [] };
  return { id: null, resolution: "unresolved", candidates: f.candidates };
}

const out = srcRows.map((r) => {
  const res = resolveRow(r.newPath);
  const resolvedNewPath = res.id || "";
  const resolvedNewUrl = res.id ? urlOf(res.id) : "";
  const candidates = res.candidates.map((c) => c.route).join(" | ");
  return { ...r, resolvedNewPath, resolvedNewUrl, resolution: res.resolution, candidates };
});

// ---------------------------------------------------------------------------
// 1.5 OVERRIDES — agreed manual decisions, applied AFTER the pipeline.
// Keyed by oldPath. Targets are validated against canonical routes like
// everything else. Deterministic: a plain keyed lookup, no ordering effects.
// ---------------------------------------------------------------------------
const OVR_PATH = path.join(OUT, "map-overrides.csv");
const overrides = new Map();
if (fs.existsSync(OVR_PATH)) {
  const { header: oh, rows: orows } = parseCsv(fs.readFileSync(OVR_PATH, "utf8"));
  for (const c of ["oldPath", "overrideNewPath", "reason"]) {
    if (!oh.includes(c)) { console.error(`FATAL: map-overrides.csv missing column ${c}`); process.exit(1); }
  }
  for (const o of orows) if (o.oldPath) overrides.set(o.oldPath, { target: o.overrideNewPath, reason: o.reason });
}
const byOldPath = new Map(out.map((r) => [r.oldPath, r]));
let appliedOverrides = 0;
for (const [oldPath, ovr] of [...overrides].sort((a, b) => a[0].localeCompare(b[0]))) {
  const row = byOldPath.get(oldPath);
  if (!row) { console.error(`WARN: override oldPath not in map (ignored): ${oldPath}`); continue; }
  const canonId = resolveKey(ovr.target);
  if (!canonId) { console.error(`FATAL: override target not a canonical route: ${ovr.target} (oldPath ${oldPath})`); process.exit(1); }
  row.resolvedNewPath = ovr.target;          // task: resolvedNewPath = overrideNewPath (verbatim)
  row.resolvedNewUrl = urlOf(canonId);       // canonical route for the target
  row.resolution = `override:${ovr.reason}`;
  row.candidates = "";
  appliedOverrides++;
}

// ---------------------------------------------------------------------------
// 4a. VALIDATE — every emitted target is canonical; no row lost data.
// ---------------------------------------------------------------------------
let fatal = 0;
if (out.length !== srcRows.length) { console.error(`FATAL: row count changed ${srcRows.length} -> ${out.length}`); fatal++; }
for (const r of out) {
  for (const h of REQUIRED) if (r[h] === undefined) { console.error(`FATAL: row lost column ${h}: ${JSON.stringify(r)}`); fatal++; }
  if (r.resolvedNewUrl && !canonKeys.has(keyOf(r.resolvedNewUrl))) {
    console.error(`FATAL: emitted target not a canonical route: ${r.resolvedNewUrl} (row ${r.oldPath})`); fatal++;
  }
}

// ---------------------------------------------------------------------------
// 3a. ia-migration-map.v2.csv
// ---------------------------------------------------------------------------
const V2_HEADER = [...REQUIRED, "resolvedNewPath", "resolvedNewUrl", "resolution", "candidates"];
fs.writeFileSync(path.join(OUT, "ia-migration-map.v2.csv"),
  [V2_HEADER.join(","), ...out.map((r) => V2_HEADER.map((h) => csvCell(r[h])).join(","))].join("\n") + "\n");

// ---------------------------------------------------------------------------
// 3b. redirects.v2.generated.js — resolved rows only, old->new, deduped.
// ---------------------------------------------------------------------------
const resolvedRows = out.filter((r) => r.resolvedNewUrl);
const v2seen = new Set();
const v2redirects = [];
for (const r of resolvedRows) {
  if (r.oldUrl === r.resolvedNewUrl) continue;
  if (v2seen.has(r.oldUrl)) continue;
  v2seen.add(r.oldUrl);
  v2redirects.push({ from: r.oldUrl, to: r.resolvedNewUrl });
}
for (const e of v2redirects) if (!canonKeys.has(keyOf(e.to))) { console.error(`FATAL: v2 redirect to non-canonical ${e.to}`); fatal++; }
const resCounts = out.reduce((m, r) => ((m[r.resolution] = (m[r.resolution] || 0) + 1), m), {});
const v2map = new Map(v2redirects.map((e) => [keyOf(e.from), e.to]));
fs.writeFileSync(path.join(OUT, "redirects.v2.generated.js"),
  `// Generated by scripts/rebase-ia-migration-map.js — DO NOT EDIT BY HAND.\n` +
  `// old->new redirects for RESOLVED rows only. Every "to" is a real stub route.\n` +
  `// Source rows: ${out.length} | resolved: ${resolvedRows.length} | redirect entries (deduped, non-self): ${v2redirects.length}\n` +
  `// Resolution mix: ${JSON.stringify(resCounts)}\n` +
  `module.exports = ${JSON.stringify(v2redirects, null, 2)};\n`);

// ---------------------------------------------------------------------------
// 3c. redirects.chain-rewrites.generated.js
// live redirects.js entries whose "to" is a "from" in v2 -> repoint to final v2 "to".
// ---------------------------------------------------------------------------
const live = require(path.join(ROOT, "redirects.js"));
const FAMILIES = [
  ["/api/*", (f) => f.startsWith("/api/")],
  ["/concept/*", (f) => f.startsWith("/concept/")],
  ["/guide/*", (f) => f.startsWith("/guide/")],
  ["/help/faq/*", (f) => f.startsWith("/help/faq/")],
  ["/help/*", (f) => f.startsWith("/help/")],
  ["/regulatory/*", (f) => f.startsWith("/regulatory/")],
  ["/preview/*", (f) => f.startsWith("/preview/")],
  ["other", () => true],
];
const chainEntries = [];
for (const e of live) {
  // Match IGNORING any #anchor on the live "to"; carry the anchor onto the final URL.
  const hashIdx = String(e.to).indexOf("#");
  const anchor = hashIdx >= 0 ? e.to.slice(hashIdx) : "";
  const toPath = hashIdx >= 0 ? e.to.slice(0, hashIdx) : e.to;
  const finalBase = v2map.get(keyOf(toPath));
  if (finalBase) chainEntries.push({ from: e.from, to: finalBase + anchor, _liveTo: e.to, anchor });
}
const byFamily = FAMILIES.map(([label, test]) => ({ label, items: [] }));
for (const e of chainEntries) {
  const fam = byFamily.find((g, i) => FAMILIES[i][1](e.from));
  fam.items.push(e);
}
let chainBody = "";
for (const g of byFamily) {
  if (!g.items.length) continue;
  g.items.sort((a, b) => a.from.localeCompare(b.from));
  chainBody += `\n  // ${g.label} (${g.items.length})\n`;
  for (const e of g.items) {
    const cmt = e.anchor ? ` // verify anchor after migration` : "";
    chainBody += `  { from: ${JSON.stringify(e.from)}, to: ${JSON.stringify(e.to)} },${cmt}\n`;
  }
}
// Canonical check ignores any carried #anchor (anchors aren't part of the route table).
for (const e of chainEntries) if (!canonKeys.has(keyOf(String(e.to).split("#")[0]))) { console.error(`FATAL: chain rewrite to non-canonical ${e.to}`); fatal++; }
fs.writeFileSync(path.join(OUT, "redirects.chain-rewrites.generated.js"),
  `// Generated by scripts/rebase-ia-migration-map.js — DO NOT EDIT BY HAND.\n` +
  `// Live redirects.js entries whose "to" is itself a "from" in redirects.v2.generated.js.\n` +
  `// Repointed directly to the FINAL new-IA route to avoid 2-hop chains on flip.\n` +
  `// Count: ${chainEntries.length}\n` +
  `module.exports = [${chainBody}];\n`);

// ---------------------------------------------------------------------------
// 3d. rebase-report.md
// ---------------------------------------------------------------------------
const md = [];
const P = (s = "") => md.push(s);
P(`# DOC-1814 Phase 0 — IA migration map rebase report`);
P();
P(`Canonical stub routes: **${canonIds.length}** · source rows: **${out.length}** · overrides applied: **${appliedOverrides}**`);
P();
P(`## Resolution counts`);
P();
P(`| resolution | rows |`);
P(`|---|---|`);
for (const k of Object.keys(resCounts).sort()) P(`| ${k} | ${resCounts[k]} |`);
const resolvedCount = out.filter((r) => r.resolvedNewPath).length;
P(`| **resolved total** | **${resolvedCount}** |`);
P(`| **unresolved** | **${out.length - resolvedCount}** |`);
P();

// unresolved with candidates
const unresolved = out.filter((r) => r.resolution === "unresolved");
P(`## Unresolved rows (${unresolved.length}) — top-3 candidates`);
P();
if (!unresolved.length) P(`_none_`);
for (const r of unresolved.sort((a, b) => a.newPath.localeCompare(b.newPath))) {
  P(`- \`${r.oldPath}\` → newPath \`${r.newPath}\``);
  P(`  - candidates: ${r.candidates ? r.candidates.split(" | ").map((c) => `\`${c}\``).join(", ") : "_none_"}`);
}
P();

// stubs with zero inbound after rebase (true net-new)
const inbound = new Set(out.map((r) => r.resolvedNewPath).filter(Boolean));
const netNew = canonIds.filter((id) => !inbound.has(id)).sort();
const grouped = {};
for (const id of netNew) {
  const segs = id.split("/");
  const sec = segs.slice(0, 2).join("/");
  (grouped[sec] = grouped[sec] || []).push(id);
}
P(`## Net-new stubs — ZERO inbound after rebase (${netNew.length})`);
P(`Real net-new pages: present in the tree, no legacy source routes to them.`);
P();
for (const sec of Object.keys(grouped).sort()) {
  P(`- **${sec}/** (${grouped[sec].length})`);
  for (const id of grouped[sec]) P(`  - \`${urlOf(id)}\``);
}
P();

// classify rows whose ORIGINAL newPath did not exist
const wasMissing = out.filter((r) => !canonKeys.has(keyOf(r.newPath)));
const renamedResolved = wasMissing.filter((r) => r.resolvedNewPath);
const treeOmits = wasMissing.filter((r) => !r.resolvedNewPath);
P(`## Stale targets (original newPath not a real route): ${wasMissing.length}`);
P();
P(`- **renamed → resolved** (rule/fold/fuzzy found a real home): ${renamedResolved.length}`);
P(`- **tree omits this content** (still unresolved): ${treeOmits.length}`);
P();
P(`### "tree omits this content" — grouped by sub-tree (check sidebars.ia.js intent)`);
P();
const omitGroups = {};
for (const r of treeOmits) {
  const segs = r.newPath.replace(/\/index$/, "").split("/");
  const key = segs.slice(0, Math.min(4, segs.length - 1)).join("/") || segs[0];
  (omitGroups[key] = omitGroups[key] || []).push(r);
}
if (!treeOmits.length) P(`_none_`);
for (const k of Object.keys(omitGroups).sort()) {
  P(`- **${k}/** (${omitGroups[k].length})`);
  for (const r of omitGroups[k].sort((a, b) => a.newPath.localeCompare(b.newPath)))
    P(`  - \`${r.oldPath}\` → \`${r.newPath}\` (candidates: ${r.candidates || "none"})`);
}
P();

// merge sets
const byTarget = {};
for (const r of resolvedRows) (byTarget[r.resolvedNewPath] = byTarget[r.resolvedNewPath] || []).push(r.oldPath);
const merges = Object.entries(byTarget).filter(([, v]) => v.length > 1).sort((a, b) => a[0].localeCompare(b[0]));
P(`## Merge sets — resolvedNewPath with >1 oldPath (${merges.length})`);
P();
if (!merges.length) P(`_none_`);
for (const [t, olds] of merges) {
  P(`- \`${urlOf(t)}\` ⇐ ${olds.length} sources`);
  for (const o of olds.sort()) P(`  - \`${o}\``);
}
P();

// 2 live/generated from-collisions
P(`## Live ↔ generated "from" collisions`);
P();
const liveByFrom = new Map(live.map((e) => [keyOf(e.from), e.to]));
const collisions = v2redirects.filter((e) => liveByFrom.has(keyOf(e.from)));
if (!collisions.length) P(`_none_`);
for (const e of collisions.sort((a, b) => a.from.localeCompare(b.from))) {
  P(`- \`${e.from}\``);
  P(`  - live redirects.js → \`${liveByFrom.get(keyOf(e.from))}\``);
  P(`  - redirects.v2 → \`${e.to}\``);
}
P();
P(`## Chain rewrites`);
P(`${chainEntries.length} live alias(es) whose target is now a v2 source — repointed to final route in \`redirects.chain-rewrites.generated.js\`.`);
P();

// fuzzy resolutions still in effect (need a human glance before flip)
const fuzzyRows = out.filter((r) => r.resolution === "fuzzy").sort((a, b) => a.oldPath.localeCompare(b.oldPath));
P(`## Fuzzy resolutions still in effect (${fuzzyRows.length}) — review before flip`);
P();
if (!fuzzyRows.length) P(`_none_`);
for (const r of fuzzyRows) {
  P(`- \`${r.oldPath}\` → \`${r.resolvedNewUrl}\``);
}
P();

fs.writeFileSync(path.join(OUT, "rebase-report.md"), md.join("\n"));

// ---------------------------------------------------------------------------
// Console summary + exit code
// ---------------------------------------------------------------------------
const SUMMARY = `Rebase: ${out.length} rows | resolved ${resolvedCount} (${JSON.stringify(resCounts)}) | overrides ${appliedOverrides} | unresolved ${out.length - resolvedCount} | v2 redirects ${v2redirects.length} | chain rewrites ${chainEntries.length} | net-new stubs ${netNew.length} | merges ${merges.length}`;
console.log(SUMMARY);
if (fatal) { console.error(`VALIDATION FAILED: ${fatal} fatal issue(s).`); process.exit(1); }
console.log("VALIDATION OK — all emitted targets are canonical routes; no row lost data.");
