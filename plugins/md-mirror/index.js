const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

// Layer 2 of the AI-as-reader blueprint: emit a plain-markdown mirror of every
// docs page at {URL}.md, served alongside the HTML, and make those URLs
// crawler-discoverable.
//
// Lifecycle: the heavy lifting runs in postBuild (we need the final outDir).
// The actual MDX->markdown transform lives in ./mdToMarkdown.mjs (ESM, shared
// with the vitest suite); we load it with a dynamic import since this plugin
// file is CommonJS, like the sibling ia-* plugins.
//
// Sitemap discovery is ORDER-INDEPENDENT by design. Docusaurus runs every
// plugin's postBuild concurrently (build.js: `await Promise.all(plugins.map(
// ... plugin.postBuild ...))`), so @docusaurus/plugin-sitemap's sitemap.xml may
// not exist yet — or ever, at a deterministic moment — while this hook runs.
// Mutating sitemap.xml is therefore a race (it was: the file was usually absent
// and all .md URLs silently dropped). Instead we write our OWN sitemap-mirrors
// .xml and advertise both it and the preset sitemap.xml via robots.txt. We only
// ever write our own files, never read the preset's output, so the result is
// the same regardless of which postBuild wins the race.
//
// Path mapping: routeBasePath is "/", so a page's permalink maps directly to a
// sibling markdown file — permalink "/accounts/concepts" -> build/accounts/
// concepts.md, served at /accounts/concepts.md next to /accounts/concepts/.
const DOCS_DIR = path.join(__dirname, "..", "..", "docs");
const MIRROR_SITEMAP_FILE = "sitemap-mirrors.xml";
const PRESET_SITEMAP_FILE = "sitemap.xml";
const ROBOTS_FILE = "robots.txt";

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

// Write a standalone sitemap listing the .md mirror URLs. We own this file
// outright, so there's no dependency on the preset sitemap's timing.
function writeMirrorSitemap(outDir, urls) {
  const entries = urls
    .map(
      (u) =>
        `<url><loc>${u}</loc><changefreq>weekly</changefreq><priority>0.5</priority></url>`
    )
    .join("");
  const xml =
    '<?xml version="1.0" encoding="UTF-8"?>' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' +
    entries +
    "</urlset>";
  fs.writeFileSync(path.join(outDir, MIRROR_SITEMAP_FILE), xml);
}

// Advertise the given sitemaps in robots.txt so crawlers discover them no
// matter which postBuild ran first. Docusaurus generates no robots.txt of its
// own, so normally we create a permissive one (identical in effect to having no
// robots.txt) carrying the Sitemap: hints. If one already exists, we only
// append the Sitemap: lines we're missing — idempotent, never clobbering.
function ensureRobotsSitemaps(outDir, sitemapUrls) {
  const robotsPath = path.join(outDir, ROBOTS_FILE);
  const lines = sitemapUrls.map((u) => `Sitemap: ${u}`);
  const existing = fs.existsSync(robotsPath)
    ? fs.readFileSync(robotsPath, "utf8")
    : "";
  if (!existing.trim()) {
    fs.writeFileSync(
      robotsPath,
      `User-agent: *\nAllow: /\n\n${lines.join("\n")}\n`
    );
    return;
  }
  const toAdd = lines.filter((l) => !existing.includes(l));
  if (toAdd.length) {
    const sep = existing.endsWith("\n") ? "" : "\n";
    fs.writeFileSync(robotsPath, existing + sep + toAdd.join("\n") + "\n");
  }
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

      writeMirrorSitemap(outDir, urls);
      const mirrorSitemapUrl = `${base}${baseUrl}/${MIRROR_SITEMAP_FILE}`;
      ensureRobotsSitemaps(outDir, [
        `${base}${baseUrl}/${PRESET_SITEMAP_FILE}`,
        mirrorSitemapUrl,
      ]);
      console.log(
        `[md-mirror] wrote ${written} .md mirror(s); ` +
          `added ${urls.length} URL(s) to ${MIRROR_SITEMAP_FILE}; ` +
          `advertised it + ${PRESET_SITEMAP_FILE} in ${ROBOTS_FILE}`
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
