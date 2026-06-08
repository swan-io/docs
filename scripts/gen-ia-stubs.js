const fs = require("fs");
const path = require("path");
const ia = require("../sidebars.ia.js");
const DOCS = path.join(__dirname, "..", "docs");
const seen = new Map();
function walk(n) {
  if (Array.isArray(n)) return n.forEach(walk);
  if (!n || typeof n !== "object") return;
  if (n.type === "doc" && n.id) seen.set(n.id, n.label || n.id);
  if (n.type === "category") {
    if (n.link && n.link.id) seen.set(n.link.id, n.label);
    walk(n.items);
  }
}
Object.values(ia).forEach(walk);
let created = 0;
for (const [id, label] of seen) {
  const file = path.join(DOCS, id + ".mdx");
  if (fs.existsSync(file)) continue;
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, `---\ntitle: "${String(label).replace(/"/g, '\\"')}"\n---\n\n> **Shell stub** — structure only, no content yet (DOC-1814).\n`);
  created++;
}
console.log(`Created ${created} stub(s); ${seen.size} ids total.`);