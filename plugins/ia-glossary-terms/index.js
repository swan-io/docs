const fs = require("fs");
const path = require("path");

// Single source of truth for <Term> tooltips: the Glossary page and the
// definition partials it already imports. We parse glossary.mdx at build time,
// resolve each term heading to the partial it renders, and use that partial's
// first sentence as the tooltip blurb. Adding/editing a glossary term therefore
// updates the tooltips automatically — no parallel map to maintain.
//
// Mirrors plugins/ia-rail-meta: read files in loadContent, setGlobalData in
// contentLoaded. Zero new dependencies.
const DOCS_DIR = path.join(__dirname, "..", "..", "docs");
const GLOSSARY = path.join(
  DOCS_DIR,
  "get-started",
  "set-up-swan",
  "glossary.mdx"
);
const GLOSSARY_ROUTE = "/get-started/set-up-swan/glossary";

// Ergonomic singular/short aliases authors are likely to type, mapped to the
// real glossary anchor. Generated entries are duplicated under each alias so
// the <Term> component can stay a dumb lookup.
const ALIASES = {
  iban: "ibans",
  "payment-mandate": "payment-mandates",
  card: "cards",
  project: "projects",
  payment: "payments",
  transaction: "transactions",
  merchant: "merchants",
  "account-onboarding-company": "account-onboarding-company",
  "account-onboarding-individual": "account-onboarding-individual",
};

// Strip markdown/MDX noise down to plain prose, then return the first sentence.
function firstSentence(md) {
  const body = md
    .split("\n")
    .filter((l) => !/^\s*import\s/.test(l) && !/^\s*export\s/.test(l))
    .join("\n")
    .trim();
  // First non-empty paragraph.
  const para = body.split(/\n\s*\n/).find((p) => p.trim().length) || "";
  const plain = para
    .replace(/`([^`]+)`/g, "$1") // inline code
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1") // [text](link) -> text
    .replace(/<[^>]+>/g, "") // stray JSX/HTML tags
    .replace(/[*_]{1,3}([^*_]+)[*_]{1,3}/g, "$1") // bold/italic
    .replace(/^[>\s]+/, "") // leading blockquote markers
    .replace(/\s+/g, " ")
    .trim();
  // First sentence: up to a period/!/? that ends a clause. Tolerate decimals
  // and common abbreviations by requiring the terminator be followed by a
  // space + capital letter or end-of-string.
  const m = plain.match(/^(.*?[.!?])(?:\s+[A-Z(]|\s*$)/);
  return (m ? m[1] : plain).trim();
}

function buildTerms() {
  const src = fs.readFileSync(GLOSSARY, "utf8");
  const dir = path.dirname(GLOSSARY);

  // import ComponentName from './path/_partial.mdx';
  const imports = {};
  const importRe = /import\s+(\w+)\s+from\s+['"]([^'"]+)['"]\s*;?/g;
  let im;
  while ((im = importRe.exec(src))) {
    const resolved = path.resolve(dir, im[2]);
    // Path-traversal guard (CWE-22): only partials inside docs/ may be read.
    if (resolved.startsWith(DOCS_DIR + path.sep)) imports[im[1]] = resolved;
  }

  // Split the body into segments per heading carrying an explicit {#anchor}.
  const headingRe = /^#{1,4}\s+(.+?)\s*\{#([a-z0-9-]+)\}\s*$/gm;
  const heads = [];
  let h;
  while ((h = headingRe.exec(src))) {
    heads.push({ raw: h[1], anchor: h[2], start: h.index, end: src.length });
  }
  for (let i = 0; i < heads.length; i++) {
    if (i + 1 < heads.length) heads[i].end = heads[i + 1].start;
  }

  const terms = {};
  for (const head of heads) {
    const segment = src.slice(head.start, head.end);
    // The first <Component /> in this segment is the term's definition.
    const comp = segment.match(/<(\w+)\s*\/?>/);
    if (!comp || !imports[comp[1]]) continue; // section grouper, no definition
    const partial = imports[comp[1]];
    let tip;
    try {
      tip = firstSentence(fs.readFileSync(partial, "utf8"));
    } catch {
      continue;
    }
    if (!tip) continue;
    // Label = heading text with any [text](link) reduced to text.
    const label = head.raw.replace(/\[([^\]]+)\]\([^)]*\)/g, "$1").trim();
    terms[head.anchor] = {
      label,
      tip,
      href: `${GLOSSARY_ROUTE}#${head.anchor}`,
    };
  }

  // Duplicate canonical entries under their aliases.
  for (const [alias, canonical] of Object.entries(ALIASES)) {
    if (terms[canonical] && !terms[alias]) terms[alias] = terms[canonical];
  }

  return terms;
}

module.exports = function iaGlossaryTerms() {
  return {
    name: "ia-glossary-terms",
    async loadContent() {
      return buildTerms();
    },
    async contentLoaded({ content, actions }) {
      actions.setGlobalData({ terms: content });
      console.log(
        `[ia-glossary-terms] ${Object.keys(content).length} terms mapped`
      );
    },
  };
};
