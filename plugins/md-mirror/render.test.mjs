import { describe, it, expect } from "vitest";
import { render, normalizeAdmonitions } from "./mdToMarkdown.mjs";

// A render() that resolves partial imports from an in-memory map keyed by the
// absolute path the import resolves to (dir + relative specifier).
function renderWith(source, files = {}, dir = "/repo/docs/x") {
  return render(source, {
    dir,
    readFile: (p) => {
      if (p in files) return files[p];
      throw new Error("no such file " + p);
    },
  });
}

describe("badge mappings", () => {
  it("maps every field-requirement / support badge to its text", () => {
    const out = render(
      "<Req /> <Opt /> <Cnd /> <Yes /> <No /> <Supported /> <Unsupported />"
    );
    expect(out).toContain("**(required)**");
    expect(out).toContain("(optional)");
    expect(out).toContain("Conditional");
    expect(out).toContain("Yes");
    expect(out).toContain("No");
    expect(out).toContain("Available");
    expect(out).toContain("Not available");
  });

  it("replaces badges inside GFM table cells", () => {
    const out = render("| f | v |\n|---|---|\n| `country` | <Req /> |");
    expect(out).toContain("`country`");
    expect(out).toContain("**(required)**");
    expect(out).not.toContain("<Req");
  });

  it("renders the legends as plain prose, not a component", () => {
    const out = render("<FieldRequirementsLegend />\n\n<SupportStatusLegend />");
    expect(out).toContain("Field requirements:");
    expect(out).toContain("Support status:");
    expect(out).not.toContain("Legend />");
  });
});

describe("Tabs -> H2 sections", () => {
  it("turns each TabItem label into an H2 followed by its content", () => {
    const out = render(
      `<Tabs>\n<TabItem value="a" label="Dashboard">First body.</TabItem>\n<TabItem value="b" label="API">Second body.</TabItem>\n</Tabs>`
    );
    expect(out).toContain("## Dashboard");
    expect(out).toContain("First body.");
    expect(out).toContain("## API");
    expect(out).toContain("Second body.");
    expect(out).not.toContain("<TabItem");
  });

  it("prepends a non-heading lead-in so tabs read as alternatives", () => {
    const out = render(
      `<Tabs>\n<TabItem value="a" label="Dashboard">First body.</TabItem>\n<TabItem value="b" label="API">Second body.</TabItem>\n</Tabs>`
    );
    // Lead-in names the choice and counts the options.
    expect(out).toContain("_Choose one of the following 2 options:_");
    // Both tabs still emit as H2.
    expect(out).toContain("## Dashboard");
    expect(out).toContain("## API");
    // The lead-in line itself must not be a heading (keeps it out of the TOC).
    const leadIn = out
      .split("\n")
      .find((l) => l.includes("Choose one of the following"));
    expect(leadIn).toBeDefined();
    expect(leadIn.startsWith("#")).toBe(false);
  });

  it("omits the lead-in for a single tab (not a choice)", () => {
    const out = render(`<Tabs>\n<TabItem value="a" label="Only">Body.</TabItem>\n</Tabs>`);
    expect(out).toContain("## Only");
    expect(out).not.toContain("Choose one of the following");
  });
});

describe("explorer badge decoding", () => {
  it("decodes the ?query= base64 into a graphql fence (both <a> and markdown links)", () => {
    const q = Buffer.from("query { me { id } }").toString("base64");
    const href = `https://explorer.swan.io?query=${q}&tab=api`;

    const fromAnchor = render(`<a href="${href}" className="explorer-badge">Open</a>`);
    expect(fromAnchor).toContain("[Open in API Explorer](https://explorer.swan.io?query=");
    expect(fromAnchor).toContain("```graphql");
    expect(fromAnchor).toContain("query { me { id } }");

    const fromMarkdown = render(`See the [example](${href}).`);
    expect(fromMarkdown).toContain("query { me { id } }");
  });

  it("handles &tab=test-api too", () => {
    const q = Buffer.from("mutation { x }").toString("base64");
    const out = render(`<a href="https://explorer.swan.io?query=${q}&tab=test-api">Try</a>`);
    expect(out).toContain("mutation { x }");
  });
});

describe("admonitions -> GFM alerts", () => {
  it("maps types and preserves the space-form title", () => {
    const out = render(":::warning Heads up\nBe careful here.\n:::");
    expect(out).toContain("> [!WARNING]");
    expect(out).toContain("**Heads up**");
    expect(out).toContain("Be careful here.");
    expect(out).not.toContain(":::");
  });

  it("maps :::success to [!TIP] and :::danger to [!CAUTION]", () => {
    expect(render(":::success Yay\nDone.\n:::")).toContain("> [!TIP]");
    expect(render(":::danger Stop\nNo.\n:::")).toContain("> [!CAUTION]");
  });
});

describe("definition partials -> blockquote", () => {
  it("wraps a topics/definitions partial in a blockquote", () => {
    const defPath = "/repo/docs/topics/definitions/_account.mdx";
    const out = renderWith(
      "import AccountDefinition from '../topics/definitions/_account.mdx';\n\n<AccountDefinition />",
      { [defPath]: "A Swan account holds euros." },
      "/repo/docs/accounts"
    );
    expect(out).toContain("> A Swan account holds euros.");
  });
});

describe("recursive partial resolution", () => {
  it("inlines a partial that itself imports another partial", () => {
    const aPath = "/repo/docs/x/_a.mdx";
    const bPath = "/repo/docs/x/_b.mdx";
    const out = renderWith(
      "import A from './_a.mdx';\n\n<A />",
      {
        [aPath]: "Outer start.\n\nimport B from './_b.mdx';\n\n<B />",
        [bPath]: "Inner content here.",
      }
    );
    expect(out).toContain("Outer start.");
    expect(out).toContain("Inner content here.");
  });

  it("resolves {props.x} when a partial is invoked with string props", () => {
    const pPath = "/repo/docs/x/_p.mdx";
    const out = renderWith(
      'import P from \'./_p.mdx\';\n\n<P scheme="SEPA Core" />',
      { [pPath]: "Scheme is **{props.scheme}**." }
    );
    expect(out).toContain("**SEPA Core**");
  });
});

describe("normalizeAdmonitions", () => {
  it("brackets space-form titles and strips heading-id anchors", () => {
    expect(normalizeAdmonitions(":::note Hello world")).toBe(":::note[Hello world]");
    expect(normalizeAdmonitions("## A heading {#my-id}")).toBe("## A heading");
  });

  it("leaves fenced content and bare/bracketed forms untouched", () => {
    expect(normalizeAdmonitions(":::tip")).toBe(":::tip");
    expect(normalizeAdmonitions(":::note[Kept]")).toBe(":::note[Kept]");
    const fenced = "```\n:::note Inside code\n```";
    expect(normalizeAdmonitions(fenced)).toBe(fenced);
  });
});

describe("frontmatter passthrough", () => {
  it("emits a YAML head with the page's keys", () => {
    const out = render(
      "---\ntitle: Hello\naudience:\n  - dev\n---\n\nBody text."
    );
    expect(out.startsWith("---\n")).toBe(true);
    expect(out).toContain("title: Hello");
    expect(out).toContain("audience:");
    expect(out).toContain("Body text.");
  });
});

describe("mockup components", () => {
  it("emits a TODO marker instead of leaking JSX", () => {
    const out = render("<ConceptsGrid items={[]} />");
    expect(out).toContain("<!-- TODO: render ConceptsGrid -->");
    expect(out).not.toContain("<ConceptsGrid");
  });
});
