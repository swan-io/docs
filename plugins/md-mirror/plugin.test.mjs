import { describe, it, expect, beforeAll } from "vitest";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { createRequire } from "node:module";

// The plugin file is CommonJS (like the sibling ia-* plugins); load it as such.
const require = createRequire(import.meta.url);
const mdMirror = require("./index.js");

// End-to-end smoke: run the plugin's postBuild against the real docs tree into a
// throwaway outDir and confirm it emits .md mirrors and a discoverable sitemap.
// This exercises the glob -> permalink -> render -> write -> sitemap path without
// a full (slow) Docusaurus/webpack build.
describe("md-mirror plugin postBuild", () => {
  let outDir;

  beforeAll(async () => {
    outDir = fs.mkdtempSync(path.join(os.tmpdir(), "md-mirror-"));
    // Stub a sitemap as the preset's sitemap plugin would have written, to prove
    // we leave it untouched (postBuild hooks race; we never mutate it).
    fs.writeFileSync(
      path.join(outDir, "sitemap.xml"),
      '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>https://docs.swan.io/</loc></url></urlset>'
    );
    await mdMirror().postBuild({
      siteConfig: { url: "https://docs.swan.io", baseUrl: "/" },
      outDir,
    });
  });

  it("emits a sibling .md for a representative page", () => {
    const file = path.join(outDir, "accounts", "concepts.md");
    expect(fs.existsSync(file)).toBe(true);
    const md = fs.readFileSync(file, "utf8");
    expect(md.startsWith("---\n")).toBe(true); // frontmatter head
    expect(md).not.toContain("<Req"); // components resolved
  });

  it("emits many mirrors across the corpus", () => {
    const count = (dir) =>
      fs.readdirSync(dir, { withFileTypes: true }).reduce((n, e) => {
        const f = path.join(dir, e.name);
        if (e.isDirectory()) return n + count(f);
        return n + (e.name.endsWith(".md") ? 1 : 0);
      }, 0);
    expect(count(outDir)).toBeGreaterThan(100);
  });

  it("writes .md URLs to its own sitemap-mirrors.xml (order-independent)", () => {
    const xml = fs.readFileSync(path.join(outDir, "sitemap-mirrors.xml"), "utf8");
    expect(xml).toContain("https://docs.swan.io/accounts/concepts.md");
    expect(xml.startsWith("<?xml")).toBe(true);
    expect(xml.trim().endsWith("</urlset>")).toBe(true);
  });

  it("leaves the preset sitemap.xml untouched", () => {
    const xml = fs.readFileSync(path.join(outDir, "sitemap.xml"), "utf8");
    expect(xml).not.toContain(".md</loc>");
  });

  it("advertises both sitemaps in robots.txt", () => {
    const robots = fs.readFileSync(path.join(outDir, "robots.txt"), "utf8");
    expect(robots).toContain("Sitemap: https://docs.swan.io/sitemap.xml");
    expect(robots).toContain("Sitemap: https://docs.swan.io/sitemap-mirrors.xml");
  });
});
