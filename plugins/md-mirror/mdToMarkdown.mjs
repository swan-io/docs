// Core MDX -> plain-markdown transform for the .md mirror (Layer 2).
//
// Pure, side-effect-free (except optional FS reads for partials, injectable for
// tests). The Docusaurus plugin in ./index.js is the thin I/O wrapper around this.
//
// Approach: parse each page with the same mdast/MDX tooling Docusaurus 3 uses
// (micromark-extension-mdxjs + mdast-util-mdx, plus gfm/directive/frontmatter),
// walk the AST, apply the v1 render table, then serialise back with
// mdast-util-to-markdown. No regex over MDX bodies — the one exception is a
// fence-aware normalisation of admonition opener lines (see normalizeAdmonitions).

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

import { fromMarkdown } from "mdast-util-from-markdown";
import { toMarkdown } from "mdast-util-to-markdown";
import { toString as mdToString } from "mdast-util-to-string";
import { mdxjs } from "micromark-extension-mdxjs";
import { mdxFromMarkdown } from "mdast-util-mdx";
import { gfm } from "micromark-extension-gfm";
import { gfmFromMarkdown, gfmToMarkdown } from "mdast-util-gfm";
import { directive } from "micromark-extension-directive";
import { directiveFromMarkdown } from "mdast-util-directive";
import { frontmatter } from "micromark-extension-frontmatter";
import { frontmatterFromMarkdown } from "mdast-util-frontmatter";

// ---------------------------------------------------------------------------
// Render-table constants
// ---------------------------------------------------------------------------

// Field-requirement / support badges -> plain text. Meanings mirror
// src/components/FieldRequirements/index.js so the prose matches the rendered
// badge titles. <Req /> alone is bold; the rest are plain.
const BADGE = {
  Opt: () => [text("(optional)")],
  Cnd: () => [text("Conditional")],
  Yes: () => [text("Yes")],
  No: () => [text("No")],
  Supported: () => [text("Available")],
  Unsupported: () => [text("Not available")],
  Req: () => [strong([text("(required)")])],
};

// Docusaurus admonition name -> GFM alert type. success has no GFM equivalent;
// mapped to TIP (closest positive tone) per spec decision.
const ADMONITION = {
  note: "NOTE",
  tip: "TIP",
  info: "IMPORTANT",
  warning: "WARNING",
  caution: "CAUTION",
  danger: "CAUTION",
  success: "TIP",
};

// Net-new mockup components, not built yet. Emit a visible marker rather than
// leaking JSX, and never crash if one appears. Slot real rules in here later.
const MOCKUP_COMPONENTS = new Set([
  "AudienceMetaBox",
  "LearningPathColumns",
  "PathPickerCards",
  "ConceptsGrid",
  "RelatedProductsGrid",
  "TypedRelTag",
]);

// HTML container tags whose wrapper is dropped, children rendered through.
const UNWRAP_BLOCK = new Set(["div", "center", "section", "article", "figure"]);
// Exotic/structural HTML we don't convert: preserved as raw HTML, but children
// are still transformed (so inner badges/Terms resolve).
const RAW_HTML_FALLBACK = new Set([
  "details",
  "summary",
  "iframe",
  "sup",
  "sub",
  "kbd",
  "figcaption",
]);

const ADMONITION_NAMES = Object.keys(ADMONITION).join("|");

// ---------------------------------------------------------------------------
// mdast node helpers
// ---------------------------------------------------------------------------

const text = (value) => ({ type: "text", value });
const strong = (children) => ({ type: "strong", children });
const emphasis = (children) => ({ type: "emphasis", children });
const inlineCode = (value) => ({ type: "inlineCode", value });
const paragraph = (children) => ({ type: "paragraph", children });
const heading = (depth, children) => ({ type: "heading", depth, children });
const blockquote = (children) => ({ type: "blockquote", children });
const html = (value) => ({ type: "html", value });
const code = (lang, value) => ({ type: "code", lang, value });
const link = (url, children) => ({ type: "link", url, children });
const image = (url, alt) => ({ type: "image", url, alt: alt || "" });
const brk = () => ({ type: "break" });

const BLOCK_TYPES = new Set([
  "paragraph",
  "heading",
  "list",
  "table",
  "code",
  "blockquote",
  "thematicBreak",
  "html",
  "mdxJsxFlowElement",
  "containerDirective",
  "leafDirective",
]);
const isBlock = (n) => BLOCK_TYPES.has(n.type);

// ---------------------------------------------------------------------------
// Parsing
// ---------------------------------------------------------------------------

function parseMdx(content) {
  return fromMarkdown(content, {
    extensions: [mdxjs(), gfm(), directive(), frontmatter(["yaml"])],
    mdastExtensions: [
      mdxFromMarkdown(),
      gfmFromMarkdown(),
      directiveFromMarkdown(),
      frontmatterFromMarkdown(["yaml"]),
    ],
  });
}

// Line-level normalisation done before AST parsing. Both rewrites are needed
// because the standard mdast/MDX tooling chokes on Docusaurus-specific syntax
// that its own remark pipeline handles upstream. Fence-aware so neither touches
// content inside code blocks. This is the only place we touch raw MDX text;
// everything else is AST-based.
//
//   1. Heading-id anchors `## Foo {#bar}` — MDX reads `{#bar}` as a JS
//      expression and acorn rejects it. Drop the anchor (GFM regenerates one).
//   2. Admonition titles — micromark-extension-directive only recognises the
//      bracketed form `:::note[Title]`; the corpus authors `:::note Title`
//      (space), which otherwise leaks as literal text. Rewrite to brackets.
export function normalizeAdmonitions(content) {
  const lines = content.split("\n");
  const opener = new RegExp(
    `^(\\s*):::(${ADMONITION_NAMES})[ \\t]+(?!\\[)(\\S.*?)[ \\t]*$`
  );
  const headingId = /[ \t]*\{#[A-Za-z0-9_-]+\}[ \t]*$/;
  let inFence = false;
  let marker = "";
  for (let i = 0; i < lines.length; i++) {
    const fence = /^\s*(`{3,}|~{3,})/.exec(lines[i]);
    if (fence) {
      if (!inFence) {
        inFence = true;
        marker = fence[1][0];
      } else if (lines[i].trim().startsWith(marker)) {
        inFence = false;
      }
      continue;
    }
    if (inFence) continue;
    if (/^\s*#{1,6}\s/.test(lines[i])) lines[i] = lines[i].replace(headingId, "");
    const m = opener.exec(lines[i]);
    if (m) lines[i] = `${m[1]}:::${m[2]}[${m[3]}]`;
  }
  return lines.join("\n");
}

// import Alias from './_partial.mdx'  ->  { Alias: '/abs/_partial.mdx' }
// Read from the resolved estree, not by regex.
function buildImportMap(tree, dir) {
  const map = {};
  const visit = (node) => {
    if (node.type === "mdxjsEsm") {
      for (const decl of node.data?.estree?.body ?? []) {
        if (decl.type !== "ImportDeclaration") continue;
        const src = decl.source?.value;
        if (!src) continue;
        const resolved = src.startsWith(".") ? path.resolve(dir, src) : src;
        for (const spec of decl.specifiers ?? []) {
          if (spec.local?.name) map[spec.local.name] = resolved;
        }
      }
    }
    for (const child of node.children ?? []) visit(child);
  };
  visit(tree);
  return map;
}

// ---------------------------------------------------------------------------
// Attribute + explorer helpers
// ---------------------------------------------------------------------------

// Raw expression source of an attribute, e.g. the `require(...)` in src={...}.
function exprAttr(node, name) {
  for (const a of node.attributes ?? []) {
    if (a.type === "mdxJsxAttribute" && a.name === name && a.value && typeof a.value === "object")
      return a.value.value;
  }
  return undefined;
}

// Only a literal string attribute value (not an expression, not a boolean).
function stringAttr(node, name) {
  for (const a of node.attributes ?? []) {
    if (a.type === "mdxJsxAttribute" && a.name === name && typeof a.value === "string")
      return a.value;
  }
  return undefined;
}

// An <a> is an API Explorer link if it points at explorer.swan.io with a
// ?query= param. Key off ?query= (catches inline prose examples), not the class.
function explorerDecoded(href) {
  if (!/explorer\.swan\.io/.test(href)) return null;
  const m = /[?&]query=([^&]*)/.exec(href);
  if (!m) return null;
  try {
    const b64 = decodeURIComponent(m[1]);
    const decoded = Buffer.from(b64, "base64").toString("utf8").trim();
    return decoded || null;
  } catch {
    return null;
  }
}

function reconstructTag(node, { close = false, selfClose = false } = {}) {
  if (close) return `</${node.name}>`;
  const attrs = (node.attributes ?? [])
    .map((a) => {
      if (a.type !== "mdxJsxAttribute") return null;
      if (a.value == null) return a.name;
      if (typeof a.value === "string") return `${a.name}="${a.value}"`;
      return `${a.name}={${a.value.value}}`;
    })
    .filter(Boolean)
    .join(" ");
  const head = attrs ? `<${node.name} ${attrs}` : `<${node.name}`;
  return selfClose ? `${head} />` : `${head}>`;
}

// ---------------------------------------------------------------------------
// Transform
// ---------------------------------------------------------------------------

// Returns { inline: node[], blocks: node[] }. Inline-natural components fill
// `inline`; block-natural ones fill `blocks`; the explorer link fills both
// (a link inline + a trailing graphql code block).
function renderElement(node, ctx) {
  const name = node.name;
  const empty = { inline: [], blocks: [] };

  // Field-requirement / support badges.
  if (BADGE[name]) return { inline: BADGE[name](), blocks: [] };

  // Legends -> plain-prose sentence (badge meanings spelled out).
  if (name === "FieldRequirementsLegend")
    return {
      inline: [],
      blocks: [
        paragraph([
          text(
            "Field requirements: (required) fields must be completed; conditional fields are required only in specific situations; (optional) fields aren't required and may have a default value."
          ),
        ]),
      ],
    };
  if (name === "SupportStatusLegend")
    return {
      inline: [],
      blocks: [
        paragraph([
          text(
            'Support status: "Available" means the feature is available; "Not available" means it is not.'
          ),
        ]),
      ],
    };

  // <Term>inner</Term> -> inner text, tooltip dropped.
  if (name === "Term") {
    const r = transformInline(node.children, ctx);
    return { inline: r.nodes, blocks: r.blocks };
  }

  // <Link to="X">children</Link> -> [children](X).
  if (name === "Link") {
    const to = stringAttr(node, "to") ?? stringAttr(node, "href") ?? "";
    const r = transformInline(node.children, ctx);
    const label = r.nodes.length ? r.nodes : [text(mdToString(node) || to)];
    return { inline: [link(to, label)], blocks: r.blocks };
  }

  // <Tabs><TabItem label="X">...</TabItem></Tabs> -> ## X sections, preceded by
  // a lead-in so an AI reader sees the sections as alternatives, not sequential
  // content. The lead-in is an emphasis paragraph, not a heading, so it stays
  // out of the page's heading outline/TOC. Only emitted for 2+ tabs: a single
  // tab isn't a choice. groupId/value are intentionally dropped (out of scope).
  if (name === "Tabs") {
    const blocks = [];
    // Count TabItems via descendants so the lead-in fires whether MDX parsed
    // them as flow children (block-separated, the common case) or inline
    // elements (tight, no blank lines between them).
    const tabCount = descendantsNamed(node, new Set(["TabItem"]), new Set(["Tabs"])).length;
    if (tabCount >= 2)
      blocks.push(
        paragraph([emphasis([text(`Choose one of the following ${tabCount} options:`)])])
      );
    for (const child of node.children ?? []) {
      if (child.type === "mdxJsxFlowElement" && child.name === "TabItem") {
        blocks.push(...renderTabItem(child, ctx));
      } else {
        blocks.push(...transformBlock(child, ctx));
      }
    }
    return { inline: [], blocks };
  }
  if (name === "TabItem") return { inline: [], blocks: renderTabItem(node, ctx) };

  // Net-new mockup components: visible TODO marker, no JSX leak.
  if (MOCKUP_COMPONENTS.has(name))
    return { inline: [], blocks: [html(`<!-- TODO: render ${name} -->`)] };

  // Imported partial (.md/.mdx) -> inline its transformed content. String-valued
  // attributes become props so the partial's {props.x} expressions resolve.
  const target = ctx.imports[name];
  if (target && /\.mdx?$/.test(target)) {
    const props = {};
    for (const a of node.attributes ?? [])
      if (a.type === "mdxJsxAttribute" && typeof a.value === "string") props[a.name] = a.value;
    const blocks = inlinePartial(target, ctx, props);
    return { inline: [], blocks };
  }

  // Raw HTML elements.
  if (name === "a") return renderAnchor(node, ctx);
  if (name === "br")
    return ctx.inTableCell ? { inline: [html("<br>")], blocks: [] } : { inline: [brk()], blocks: [] };
  if (name === "b" || name === "strong") {
    const r = transformInline(node.children, ctx);
    return { inline: [strong(r.nodes)], blocks: r.blocks };
  }
  if (name === "i" || name === "em") {
    const r = transformInline(node.children, ctx);
    return { inline: [emphasis(r.nodes)], blocks: r.blocks };
  }
  if (name === "code") return { inline: [inlineCode(mdToString(node))], blocks: [] };
  if (name === "span") {
    const r = transformInline(node.children, ctx);
    return { inline: r.nodes, blocks: r.blocks };
  }
  if (name === "img") {
    const alt = stringAttr(node, "alt");
    const src = stringAttr(node, "src");
    if (src) return { inline: [image(src, alt)], blocks: [] };
    // <img src={require('./x.png').default} /> -> best-effort path extraction.
    const expr = exprAttr(node, "src");
    const m = expr && /require\(\s*['"]([^'"]+)['"]\s*\)/.exec(expr);
    if (m) return { inline: [image(m[1], alt)], blocks: [] };
    return rawFallback(node, ctx);
  }
  if (name === "p") {
    const r = transformInline(node.children, ctx);
    return { inline: [], blocks: [paragraph(r.nodes), ...r.blocks] };
  }
  if (name === "ul" || name === "ol")
    return { inline: [], blocks: [renderHtmlList(node, ctx)] };
  if (name === "table")
    return { inline: [], blocks: [renderHtmlTable(node, ctx)] };
  if (UNWRAP_BLOCK.has(name))
    return { inline: [], blocks: transformChildrenAuto(node.children, ctx) };
  if (RAW_HTML_FALLBACK.has(name)) return rawFallback(node, ctx);

  // Unknown PascalCase component with no import: warn, render children.
  if (/^[A-Z]/.test(name)) {
    ctx.warnings.push(`Unhandled component <${name}> in ${ctx.sourceLabel}`);
    return { inline: [], blocks: transformChildrenAuto(node.children, ctx) };
  }

  // Unknown lowercase tag: preserve as raw HTML, transform children.
  return rawFallback(node, ctx);
}

function renderTabItem(node, ctx) {
  const label = stringAttr(node, "label") ?? stringAttr(node, "value") ?? "";
  return [heading(2, [text(label)]), ...transformBlocks(node.children, ctx)];
}

function renderAnchor(node, ctx) {
  const href = stringAttr(node, "href") ?? "";
  const decoded = explorerDecoded(href);
  if (decoded) {
    return {
      inline: [link(href, [text("Open in API Explorer")])],
      blocks: [code("graphql", decoded)],
    };
  }
  const r = transformInline(node.children, ctx);
  const label = r.nodes.length ? r.nodes : [text(href)];
  return { inline: [link(href, label)], blocks: r.blocks };
}

function renderHtmlList(node, ctx) {
  const ordered = node.name === "ol";
  const items = (node.children ?? [])
    .filter((c) => c.type === "mdxJsxFlowElement" && c.name === "li")
    .map((li) => ({ type: "listItem", spread: false, children: transformChildrenAuto(li.children, ctx) }));
  return { type: "list", ordered, spread: false, children: items };
}

// Collect descendant JSX elements (flow OR inline) whose name is in `names`,
// without descending into a matched element or into a `stop` boundary. Needed
// because MDX parses `<td>` inside `<tr>` as an inline element wrapped in a
// paragraph, not as a flow child.
function descendantsNamed(node, names, stop) {
  const out = [];
  const walk = (n) => {
    for (const c of n.children ?? []) {
      const isEl = c.type === "mdxJsxFlowElement" || c.type === "mdxJsxTextElement";
      if (isEl && names.has(c.name)) {
        out.push(c);
        continue;
      }
      if (isEl && stop && stop.has(c.name)) continue;
      walk(c);
    }
  };
  walk(node);
  return out;
}

function renderHtmlTable(node, ctx) {
  const cellCtx = { ...ctx, inTableCell: true };
  const rows = descendantsNamed(node, new Set(["tr"]), new Set(["table"])).map((tr) => ({
    type: "tableRow",
    children: descendantsNamed(tr, new Set(["td", "th"]), new Set(["tr", "table"])).map((cell) => ({
      type: "tableCell",
      children: transformInline(cell.children, cellCtx).nodes,
    })),
  }));
  const width = rows.reduce((m, r) => Math.max(m, r.children.length), 0);
  // GFM tables require every row to have the same number of cells.
  for (const r of rows) while (r.children.length < width) r.children.push({ type: "tableCell", children: [] });
  return { type: "table", align: new Array(width).fill(null), children: rows };
}

function rawFallback(node, ctx) {
  const children = node.children ?? [];
  if (!children.length)
    return { inline: [], blocks: [html(reconstructTag(node, { selfClose: true }))] };
  const inner = transformChildrenAuto(children, ctx);
  return {
    inline: [],
    blocks: [html(reconstructTag(node)), ...inner, html(reconstructTag(node, { close: true }))],
  };
}

// Resolve, parse and transform an imported partial; wrap definition partials in
// a blockquote to match how the page renders them. Cycle-guarded.
function inlinePartial(absPath, ctx, props = {}) {
  const label = path.basename(absPath);
  if (ctx.stack.includes(absPath))
    return [html(`<!-- skipped recursive partial: ${label} -->`)];
  // Path-traversal guard (CWE-22): only read partials inside the content root.
  if (
    ctx.root &&
    absPath !== ctx.root &&
    !absPath.startsWith(ctx.root + path.sep)
  )
    return [html(`<!-- partial outside content root: ${label} -->`)];
  let raw;
  try {
    raw = ctx.readFile(absPath);
  } catch {
    return [html(`<!-- missing partial: ${label} -->`)];
  }
  const { content: body } = matter(raw);
  const tree = parseMdx(normalizeAdmonitions(body));
  const childCtx = {
    ...ctx,
    dir: path.dirname(absPath),
    imports: buildImportMap(tree, path.dirname(absPath)),
    stack: [...ctx.stack, absPath],
    sourceLabel: label,
    props,
  };
  const blocks = transformBlocks(tree.children, childCtx);
  const isDefinition = absPath.replace(/\\/g, "/").includes("/_shared/definitions/");
  return isDefinition ? [blockquote(blocks)] : blocks;
}

// Resolve a `{props.x}` expression against the current partial's props.
function propValue(exprValue, ctx) {
  if (!ctx.props) return undefined;
  const m = /^\s*props(?:\?\.|\.)([A-Za-z_$][\w$]*)\s*$/.exec(exprValue || "");
  return m ? ctx.props[m[1]] : undefined;
}

function transformChildrenAuto(children, ctx) {
  const kids = children ?? [];
  if (kids.some(isBlock)) return transformBlocks(kids, ctx);
  const r = transformInline(kids, ctx);
  if (!r.nodes.length) return r.blocks;
  return [paragraph(r.nodes), ...r.blocks];
}

function transformInline(nodes, ctx) {
  const out = [];
  const blocks = [];
  for (const n of nodes ?? []) {
    switch (n.type) {
      case "mdxTextExpression":
      // A lone `{props.x}` inside e.g. <th> parses as a flow expression even in
      // an inline slot; resolve it as a prop here too.
      case "mdxFlowExpression": {
        const v = propValue(n.value, ctx);
        if (v != null) out.push(text(String(v)));
        break; // other {expressions} dropped
      }
      case "mdxJsxTextElement":
      case "mdxJsxFlowElement": {
        const r = renderElement(n, ctx);
        out.push(...r.inline);
        blocks.push(...r.blocks);
        break;
      }
      case "text":
      case "inlineCode":
      case "break":
      case "image":
      case "html":
        out.push(n);
        break;
      case "link": {
        // Markdown-syntax explorer links (not just <a> badges) get decoded too.
        const decoded = explorerDecoded(n.url);
        const r = transformInline(n.children, ctx);
        out.push({ ...n, children: r.nodes });
        blocks.push(...r.blocks);
        if (decoded) blocks.push(code("graphql", decoded));
        break;
      }
      case "emphasis":
      case "strong":
      case "delete":
      case "linkReference": {
        const r = transformInline(n.children, ctx);
        out.push({ ...n, children: r.nodes });
        blocks.push(...r.blocks);
        break;
      }
      default:
        if (n.children) {
          const r = transformInline(n.children, ctx);
          out.push({ ...n, children: r.nodes });
          blocks.push(...r.blocks);
        } else {
          out.push(n);
        }
    }
  }
  return { nodes: out, blocks };
}

function renderAdmonition(node, ctx) {
  const type = ADMONITION[node.name];
  if (!type) return transformBlocks(node.children, ctx); // unknown directive: unwrap
  let children = node.children ?? [];
  let title;
  if (children[0]?.data?.directiveLabel) {
    title = mdToString(children[0]);
    children = children.slice(1);
  }
  const inner = transformBlocks(children, ctx);
  // html node, not text: the `[!TYPE]` marker must not be escaped to `\[!TYPE]`.
  const bq = [paragraph([html(`[!${type}]`)])];
  if (title) bq.push(paragraph([strong([text(title)])]));
  bq.push(...inner);
  return [blockquote(bq)];
}

function transformBlock(node, ctx) {
  switch (node.type) {
    case "yaml":
    case "mdxjsEsm":
      return [];
    case "mdxFlowExpression": {
      const v = propValue(node.value, ctx);
      return v != null ? [paragraph([text(String(v))])] : [];
    }
    case "mdxJsxFlowElement": {
      const r = renderElement(node, ctx);
      const out = [];
      if (r.inline.length) out.push(paragraph(r.inline));
      out.push(...r.blocks);
      return out;
    }
    case "containerDirective":
    case "leafDirective":
      return renderAdmonition(node, ctx);
    case "paragraph":
    case "heading": {
      const r = transformInline(node.children, ctx);
      return [{ ...node, children: r.nodes }, ...r.blocks];
    }
    case "blockquote":
      return [{ ...node, children: transformBlocks(node.children, ctx) }];
    case "list":
      return [
        {
          ...node,
          children: (node.children ?? []).map((li) => ({
            ...li,
            children: transformBlocks(li.children, ctx),
          })),
        },
      ];
    case "table":
      return [
        {
          ...node,
          children: (node.children ?? []).map((row) => ({
            ...row,
            children: (row.children ?? []).map((cell) => ({
              ...cell,
              children: transformInline(cell.children, { ...ctx, inTableCell: true }).nodes,
            })),
          })),
        },
      ];
    case "code":
    case "thematicBreak":
    case "html":
    case "definition":
      return [node];
    default:
      if (node.children)
        return [{ ...node, children: transformBlocks(node.children, ctx) }];
      return [node];
  }
}

function transformBlocks(nodes, ctx) {
  const out = [];
  for (const n of nodes ?? []) out.push(...transformBlock(n, ctx));
  return out;
}

// ---------------------------------------------------------------------------
// Serialisation
// ---------------------------------------------------------------------------

// Last-resort net: strip any residual MDX node so mdast-util-to-markdown (which
// throws on unknown nodes) can't crash a build. The transform should leave none;
// this just guarantees it.
const RESIDUAL_MDX = new Set([
  "mdxjsEsm",
  "mdxFlowExpression",
  "mdxTextExpression",
  "mdxJsxFlowElement",
  "mdxJsxTextElement",
]);
function sanitize(node) {
  if (!node.children) return node;
  node.children = node.children
    .filter((c) => !RESIDUAL_MDX.has(c.type))
    .map(sanitize);
  return node;
}

function serialize(root) {
  return toMarkdown(root, {
    extensions: [gfmToMarkdown()],
    bullet: "-",
    listItemIndent: "one",
    rule: "-",
    fence: "`",
    fences: true,
    emphasis: "_",
    strong: "*",
    resourceLink: true,
  });
}

function renderFrontmatter(data) {
  if (!data || Object.keys(data).length === 0) return "";
  // gray-matter passes every key straight through (uses js-yaml under the hood).
  return matter.stringify("", data).trimEnd();
}

const defaultReadFile = (p) => fs.readFileSync(p, "utf8");

/**
 * Render an MDX page source to plain markdown.
 * @param {string} source raw .mdx file contents (with frontmatter)
 * @param {object} [opts]
 * @param {string} [opts.dir] directory of the source file (for partial imports)
 * @param {(absPath:string)=>string} [opts.readFile] FS reader (injectable for tests)
 * @param {string} [opts.root] Content root; partials resolving outside it are refused (CWE-22 guard)
 * @param {string[]} [opts.warnings] sink for unhandled-component warnings
 * @param {string} [opts.sourceLabel] label used in warnings
 * @returns {string} markdown with a YAML frontmatter head
 */
export function render(source, opts = {}) {
  const { data, content: body } = matter(source);
  const tree = parseMdx(normalizeAdmonitions(body));
  const ctx = {
    dir: opts.dir || ".",
    root: opts.root ? path.resolve(opts.root) : null,
    readFile: opts.readFile || defaultReadFile,
    imports: buildImportMap(tree, opts.dir || "."),
    stack: [],
    warnings: opts.warnings || [],
    sourceLabel: opts.sourceLabel || "(page)",
    inTableCell: false,
  };
  const blocks = transformBlocks(tree.children, ctx);
  const md = serialize(sanitize({ type: "root", children: blocks }));
  const head = renderFrontmatter(data);
  return (head ? head + "\n\n" : "") + md.trim() + "\n";
}
