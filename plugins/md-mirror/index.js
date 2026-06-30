const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

// Layer 2 of the AI-as-reader blueprint: emit a plain-markdown mirror of every
// docs page at {URL}.md, served alongside the HTML, and add those URLs to
// sitemap.xml.
//
// Lifecycle: the heavy lifting runs in postBuild (we need the final outDir and
// the sitemap to already be written). The actual MDX->markdown transform lives
// in ./mdToMarkdown.mjs (ESM, shared with the vitest suite); we load it with a
// dynamic import since this plugin file is CommonJS, like the sibling ia-*
// plugins.
//
// Path mapping: routeBasePath is "/", so a page's permalink maps directly to a
// sibling markdown file — permalink "/accounts/concepts" -> build/accounts/
// concepts.md, served at /accounts/concepts.md next to /accounts/concepts/.
const DOCS_DIR = path.join(__dirname, "..", "..", "docs");
const SITEMAP_FILE = "sitemap.xml";

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
  let r = String(route).trim();
  if (!r.startsWith("/")) r = "/" + r;
  if (r.length > 1) r = r.replace(/\/+$/, "");
  return r;
}

// Mirrors plugins/ia-rail-meta and the docs plugin (routeBasePath "/"):
// index.* -> trailing-slash dir route, honouring an explicit `slug`.
function permalinkFor(file, frontMatter) {
  const rel = path
    .relative(DOCS_DIR, file)
    .replace(/\\/g, "/")
    .replace(/\.mdx?$/, "");
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

// permalink ("/a/b" or "/") -> relative .md path ("a/b.md" / "index.md").
function mdRelPath(permalink) {
  const rel = permalink === "/" ? "index" : permalink.replace(/^\//, "");
  return rel + ".md";
}

// Insert <url> entries for the .md mirrors before </urlset>. Returns false if
// the sitemap isn't there yet (plugin-order issue) so the caller can warn.
function appendToSitemap(outDir, urls) {
  const sitemapPath = path.join(outDir, SITEMAP_FILE);
  if (!fs.existsSync(sitemapPath)) return false;
  const xml = fs.readFileSync(sitemapPath, "utf8");
  const close = "</urlset>";
  const idx = xml.lastIndexOf(close);
  if (idx === -1) return false;
  const entries = urls
    .map(
      (u) =>
        `<url><loc>${u}</loc><changefreq>weekly</changefreq><priority>0.5</priority></url>`
    )
    .join("");
  fs.writeFileSync(sitemapPath, xml.slice(0, idx) + entries + xml.slice(idx));
  return true;
}

module.exports = function mdMirror() {
  return {
    name: "md-mirror",
    async postBuild({ siteConfig, outDir }) {
      const { render } = await import("./mdToMarkdown.mjs");
      const base = (siteConfig.url || "").replace(/\/$/, "");
      const baseUrl = (siteConfig.baseUrl || "/").replace(/\/$/, "");

      const files = walk(DOCS_DIR, []);
      const warnings = [];
      const urls = [];
      let written = 0;

      for (const file of files) {
        const source = fs.readFileSync(file, "utf8");
        const { data } = matter(source);
        const permalink = permalinkFor(file, data);
        const rel = mdRelPath(permalink);
        const sourceLabel = path.relative(DOCS_DIR, file);

        let markdown;
        try {
          markdown = render(source, {
            dir: path.dirname(file),
            warnings,
            sourceLabel,
          });
        } catch (err) {
          // Never fail the build over one page; log and skip it.
          console.warn(`[md-mirror] ${sourceLabel}: ${err.message}`);
          continue;
        }

        const outPath = path.join(outDir, rel);
        fs.mkdirSync(path.dirname(outPath), { recursive: true });
        fs.writeFileSync(outPath, markdown);
        urls.push(`${base}${baseUrl}/${rel}`);
        written++;
      }

      const sitemapOk = appendToSitemap(outDir, urls);
      console.log(
        `[md-mirror] wrote ${written} .md mirror(s); ` +
          (sitemapOk
            ? `added ${urls.length} URL(s) to ${SITEMAP_FILE}`
            : `WARNING: ${SITEMAP_FILE} not found, .md URLs not added (check plugin order)`)
      );
      if (warnings.length) {
        const unique = [...new Set(warnings)];
        console.warn(
          `[md-mirror] ${unique.length} unhandled-component warning(s):\n  ` +
            unique.join("\n  ")
        );
      }
    },
  };
};
