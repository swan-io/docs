const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

// Docusaurus 3.1.0 has no `allContentLoaded` lifecycle (core only invokes
// loadContent / contentLoaded / postBuild), so we read the docs tree directly in
// loadContent: glob docs/**/*.{md,mdx}, parse frontmatter with gray-matter (resolved
// transitively, not installed), and compute permalinks from file paths.
const DOCS_DIR = path.join(__dirname, "..", "..", "docs");

function walk(dir, acc) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    // Docusaurus excludes `_`-prefixed files/dirs from routing (partials).
    if (entry.name.startsWith("_")) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, acc);
    else if (/\.mdx?$/.test(entry.name)) acc.push(full);
  }
  return acc;
}

function normalizeRoute(route) {
  if (!route) return route;
  let r = String(route).trim();
  if (!r.startsWith("/")) r = "/" + r;
  if (r.length > 1) r = r.replace(/\/+$/, "");
  return r;
}

// Mirrors the docs plugin (routeBasePath "/"): index.* -> trailing-slash dir route,
// honoring an explicit `slug` frontmatter. Keys are stored trailing-slash-stripped;
// the client resolver normalizes the same way so trailing-slash variance is moot.
function permalinkFor(file, frontMatter) {
  const rel = path.relative(DOCS_DIR, file).replace(/\\/g, "/").replace(/\.mdx?$/, "");
  const dir = path.dirname(rel) === "." ? "" : path.dirname(rel);
  const base = path.basename(rel);

  if (frontMatter.slug) {
    const slug = String(frontMatter.slug);
    if (slug.startsWith("/")) return normalizeRoute(slug);
    return normalizeRoute("/" + (dir ? dir + "/" : "") + slug);
  }
  if (base === "index" || base === "README") return normalizeRoute("/" + dir);
  return normalizeRoute("/" + rel);
}

function deriveTitle(frontMatter, body) {
  if (frontMatter.title) return String(frontMatter.title);
  const m = body.match(/^#\s+(.+?)\s*$/m);
  return m ? m[1] : undefined;
}

// True if the body has at least one h2/h3 once fenced code blocks are removed —
// the floor for a page that opts into the rail, since Docusaurus suppresses the
// desktop TOC (and with it the rail) when a page has no h2/h3 headings.
function hasRealHeading(body) {
  let inFence = false;
  for (const line of body.split("\n")) {
    if (/^\s*```/.test(line)) {
      inFence = !inFence;
      continue;
    }
    if (!inFence && /^#{2,3}\s/.test(line)) return true;
  }
  return false;
}

module.exports = function iaRailMeta() {
  return {
    name: "ia-rail-meta",
    async loadContent() {
      const files = walk(DOCS_DIR, []);
      const map = {};
      for (const file of files) {
        const { data, content } = matter(fs.readFileSync(file, "utf8"));
        const permalink = permalinkFor(file, data);

        // Floor rule: a doc that opts into the rail must keep a real heading.
        const optsIntoRail = data.audience || data.counterpart || data.related;
        if (optsIntoRail && data.rail !== false && !hasRealHeading(content)) {
          const msg =
            `[ia-rail] ${permalink}: rail frontmatter requires at least one real ` +
            `h2/h3 (TOC suppression would hide the rail); add a heading or set rail: false`;
          if (process.env.NODE_ENV === "production") throw new Error(msg);
          console.warn(msg);
        }

        map[permalink] = {
          title: deriveTitle(data, content),
          ...(data.audience ? { audience: data.audience } : {}),
          ...(data.description ? { description: data.description } : {}),
        };
      }
      return map;
    },
    async contentLoaded({ content, actions }) {
      actions.setGlobalData({ routes: content });
      console.log(`[ia-rail-meta] ${Object.keys(content).length} routes mapped`);
    },
  };
};
