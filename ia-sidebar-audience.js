/**
 * DOC-1834 — audience badges in the sidebar.
 *
 * Reads each doc's `audience` frontmatter and stamps `ia-aud-dev` /
 * `ia-aud-ops` classNames on sidebar items: every single-audience doc carries
 * its stamp, and a category is stamped too when every doc under it declares
 * the same single audience. Children inside a uniform category KEEP their own
 * stamps — badges are hover-revealed (ia-shell.css), so hovering any row
 * answers "who is this for" without wallpapering the tree. Dual-audience and
 * audience-less docs are never stamped and make every ancestor non-uniform.
 *
 * A category's own index does NOT count toward its uniformity: hub indexes
 * are deliberately dual entry points (merchant guides, sandbox hubs), while
 * the badge speaks for the section's contents — the pages opened inside it.
 *
 * Consumers:
 *  - sidebars.ia.js → annotateAudience() adds the classNames.
 *  - src/css/ia-shell.css → renders the icon-only pill off the className.
 *  - src/theme/DocSidebarItem/{Link,Category} → sentence tooltip + aria-label.
 */
const fs = require("fs");
const path = require("path");

const AUDIENCE_CLASS = { dev: "ia-aud-dev", ops: "ia-aud-ops" };

const DOCS_DIR = path.join(__dirname, "docs");

// audience frontmatter of a doc id: array of values, or null when the doc
// declares none (unknown makes ancestors non-uniform; missing files too).
const readAudience = (id) => {
  for (const ext of [".mdx", ".md"]) {
    const file = path.join(DOCS_DIR, `${id}${ext}`);
    if (!fs.existsSync(file)) continue;
    const head = fs.readFileSync(file, "utf8").match(/^---\r?\n([\s\S]*?)\r?\n---/);
    if (!head) return null;
    const clean = (v) => v.trim().replace(/^['"]|['"]$/g, "");
    const inline = head[1].match(/^audience:[ \t]*(?:\[([^\]]*)\]|(\S[^\n]*))[ \t]*$/m);
    if (inline) {
      const raw = inline[1] !== undefined ? inline[1].split(",") : [inline[2]];
      return raw.map(clean).filter(Boolean);
    }
    const block = head[1].match(/^audience:[ \t]*\r?\n((?:[ \t]+-[^\n]*\r?\n?)+)/m);
    if (block) {
      return block[1]
        .split(/\r?\n/)
        .map((line) => clean(line.replace(/^[ \t]*-\s*/, "")))
        .filter(Boolean);
    }
    return null;
  }
  return null;
};

const addClass = (item, cls) => {
  item.className = [item.className, cls].filter(Boolean).join(" ");
};

// Walk an item, stamping as it returns. Returns the item's audience as a Set,
// null when unknown/mixed-with-unknown, or undefined for items that carry no
// audience semantics at all (html/external links — they don't poison a
// category the way an audience-less doc does).
const walk = (item) => {
  if (!item) return undefined;
  if (item.type === "doc") {
    const audience = readAudience(item.id);
    if (audience && audience.length === 1 && AUDIENCE_CLASS[audience[0]]) {
      addClass(item, AUDIENCE_CLASS[audience[0]]);
    }
    return audience && audience.length > 0 ? new Set(audience) : null;
  }
  if (item.type === "category") {
    // The linked index is intentionally not consulted (see header comment).
    const sets = (item.items || []).map(walk);
    const real = sets.filter((s) => s !== undefined);
    if (real.length === 0 || real.some((s) => s === null)) return null;
    const union = new Set(real.flatMap((s) => [...s]));
    const only = [...union][0];
    // Typed top sections (ia-type-*) already draw a type icon with the same
    // ::before — leave them unstamped; their children keep their own badges.
    const typed = /(^|\s)ia-type-/.test(item.className || "");
    if (union.size === 1 && AUDIENCE_CLASS[only] && !typed) {
      addClass(item, AUDIENCE_CLASS[only]);
    }
    return union;
  }
  return undefined;
};

// Stamp every sidebar (in place). Top-level items are walked individually —
// a whole sidebar is never treated as one badgeable node.
const annotateAudience = (sidebars) => {
  for (const items of Object.values(sidebars)) {
    if (!Array.isArray(items)) continue;
    for (const item of items) walk(item);
  }
  return sidebars;
};

module.exports = { annotateAudience, AUDIENCE_CLASS };
