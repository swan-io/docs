const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const sidebars = require("../../sidebars.ia.js");

// Phase 0 of the AI-as-reader blueprint: emit a root /llms.txt listing the
// docs' canonical URLs in reading order, for LLM consumers (the llmstxt.org /
// Anthropic convention: an H1, a blockquote summary, then `##` sections of
// `[title](url): description` links).
//
// Lifecycle: runs in postBuild like plugins/md-mirror, so the final outDir
// exists and we can drop llms.txt next to the built HTML.
//
// Source of truth: sidebars.ia.js — the same file plugins/ia-nav reads. The six
// sidebars (in this order) ARE the reading order; a routable page that isn't in
// any sidebar is intentionally excluded (the sidebar is the canonical set).
//
// id -> URL: routeBasePath is "/", and no sidebar'd page overrides its `slug`,
// so a doc id maps directly to its route via idToRoute() — identical to the
// resolution in plugins/ia-nav. The matching source file (docs/<id>.mdx|md) is
// read with gray-matter for the page title and optional description.
const DOCS_DIR = path.join(__dirname, "..", "..", "docs");

// Top-level sidebars, in reading order, with their sentence-case section
// headings. Explicit (not derived from object-key order) so the output order is
// pinned regardless of how sidebars.ia.js is authored.
const SECTIONS = [
  ["getStartedSidebar", "Get started"],
  ["accountsSidebar", "Accounts"],
  ["cardsSidebar", "Cards"],
  ["paymentsSidebar", "Payments"],
  ["usersSidebar", "Users"],
  ["buildSidebar", "Build"],
];

const SUMMARY =
  "Swan is a European banking-as-a-service platform for embedding financial " +
  "features into your product. This documentation covers Swan's core products " +
  "— accounts, cards, and payments — along with how to onboard users and build " +
  "on the GraphQL API. Pages are grouped by product and by content type " +
  "(concepts, guides, and reference).";

// doc id -> route. Mirrors plugins/ia-nav idToRoute: "/" + id, drop a trailing
// "/index", collapse a bare trailing slash.
function idToRoute(id) {
  let r = "/" + String(id);
  r = r.replace(/\/index$/, "");
  return r.length > 1 ? r.replace(/\/+$/, "") : r;
}

// Depth-first walk of a sidebar, collecting doc ids in reading order. A category
// contributes its hub page (link.id) first, then its children. Pure grouping
// categories (no link) contribute only their children. De-duplicated per
// section so a hub that also appears as a doc isn't listed twice.
function collectIds(items, acc, seen) {
  for (const item of items || []) {
    if (!item || typeof item !== "object") continue;
    if (item.type === "doc" && item.id) {
      if (!seen.has(item.id)) {
        seen.add(item.id);
        acc.push(item.id);
      }
    } else if (item.type === "category") {
      const hubId = item.link && item.link.id;
      if (hubId && !seen.has(hubId)) {
        seen.add(hubId);
        acc.push(hubId);
      }
      collectIds(item.items, acc, seen);
    }
  }
  return acc;
}

// doc id -> absolute source path, or null if neither .mdx nor .md exists.
function sourceFor(id) {
  for (const ext of [".mdx", ".md"]) {
    const p = path.join(DOCS_DIR, `${id}${ext}`);
    if (fs.existsSync(p)) return p;
  }
  return null;
}

// "accounts/concepts/card-formats" -> "Card formats". Uses the last non-index
// path segment; only a fallback when frontmatter title and an H1 are both absent.
function humanizeId(id) {
  const segments = String(id).split("/").filter(Boolean);
  let last = segments.pop() || id;
  if (last === "index" && segments.length) last = segments.pop();
  const spaced = last.replace(/[-_]+/g, " ").trim();
  return spaced.charAt(0).toUpperCase() + spaced.slice(1);
}

// First ATX H1 in the body, anchor suffix stripped. null if none.
function firstH1(content) {
  for (const line of content.split("\n")) {
    const m = /^#\s+(.+?)\s*$/.exec(line);
    if (m) return m[1].replace(/\s*\{#[\w-]+\}\s*$/, "").trim();
  }
  return null;
}

// Resolve a doc id to { route, title, description }, or null (warned) if its
// source file is missing — we don't list URLs that won't exist on the site.
function resolveEntry(id, warnings) {
  const src = sourceFor(id);
  if (!src) {
    warnings.push(`no source file for sidebar id "${id}"`);
    return null;
  }
  const { data, content } = matter(fs.readFileSync(src, "utf8"));
  const title =
    (typeof data.title === "string" && data.title.trim()) ||
    firstH1(content) ||
    humanizeId(id);
  const description =
    typeof data.description === "string" && data.description.trim()
      ? data.description.trim()
      : null;
  return { route: idToRoute(id), title, description };
}

function buildLlmsTxt(siteConfig, warnings) {
  const base = (siteConfig.url || "").replace(/\/$/, "");
  const baseUrl = (siteConfig.baseUrl || "/").replace(/\/$/, "");
  const abs = (route) => `${base}${baseUrl}${route}`;

  const lines = ["# Swan documentation", "", `> ${SUMMARY}`];
  let sectionCount = 0;
  let linkCount = 0;

  for (const [key, heading] of SECTIONS) {
    const sidebar = sidebars[key];
    if (!Array.isArray(sidebar)) {
      warnings.push(`sidebar "${key}" missing or not an array`);
      continue;
    }
    const ids = collectIds(sidebar, [], new Set());
    const entries = ids
      .map((id) => resolveEntry(id, warnings))
      .filter(Boolean);
    if (!entries.length) continue;

    sectionCount++;
    lines.push("", `## ${heading}`, "");
    for (const e of entries) {
      const tail = e.description ? `: ${e.description}` : "";
      lines.push(`- [${e.title}](${abs(e.route)})${tail}`);
      linkCount++;
    }
  }

  return { text: lines.join("\n") + "\n", sectionCount, linkCount };
}

module.exports = function llmsTxt() {
  return {
    name: "llms-txt",
    async postBuild({ siteConfig, outDir }) {
      const warnings = [];
      const { text, sectionCount, linkCount } = buildLlmsTxt(siteConfig, warnings);

      fs.writeFileSync(path.join(outDir, "llms.txt"), text);
      console.log(
        `[llms-txt] wrote llms.txt: ${sectionCount} section(s), ${linkCount} link(s)`
      );
      if (warnings.length) {
        const unique = [...new Set(warnings)];
        console.warn(
          `[llms-txt] ${unique.length} warning(s):\n  ` + unique.join("\n  ")
        );
      }
    },
  };
};

// Exported for unit tests / ad-hoc inspection without a full build.
module.exports.buildLlmsTxt = buildLlmsTxt;
module.exports.collectIds = collectIds;
module.exports.idToRoute = idToRoute;
