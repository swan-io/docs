# Domain migration manifest

Template extracted from the **Users** domain (PR [#671](https://github.com/swan-io/docs/pull/671), branch `DOC-1834/migration`), the finalized reference slice.
Apply it systematically to each remaining product domain (Cards, Payments, and the Accounts reconciliation).

This manifest covers STRUCTURE and PROCESS only. Prose-level rules live elsewhere and apply on top: the Swan Style Guide and Glossary (terminology, casing, plain English), and the house-style hard rules in the IA playbook. This document intentionally does not restate them.

**How to use this manifest.** Every section is self-contained — read the section for the work at hand and you have the complete, current rule set for it (consolidated 12 August 2026; earlier layered amendments are merged in place, dates kept on each rule).
- **Pass 1 (structural IA):** §1 structure and partials, §2 sidebar/nav/redirects, §3 frontmatter, §8 order of operations.
- **Content Pass:** §4 page shapes, §5 floor + Term/glossary, §6 cross-linking + anchors, §9 flowmaps, §10 surgery catalog.
- **Every pass, before handing over:** §7 no-loss gate (topics/ cutovers), §8 build gates + the two audit checklists.
- **Touching plugins, components, or a new sidebar:** §11 AI-reader layer.
- **Appendix** holds open items — state, not doctrine.

## Base rules (non-negotiable)

1. **No data or information loss.** Every fact, table row, admonition, footnote, and edge case in the legacy source must have a home in the new tree. Phrasing can improve; meaning and coverage never shrink.
2. **SRP with solid cross-linking.** One concern per page. Each fact has exactly one canonical home; every other page links to it instead of restating it (a one-line hub preview is the only allowed restatement).

## 1. Target structure

Every domain gets the same four-level skeleton. Users is the shape to copy:

```
docs/<domain>/
  index.mdx                          # Domain overview (dual-audience entry)
  concepts/
    index.mdx                        # Concepts hub (spine flowmap of the domain model)
    <concept>/index.mdx              # Concept sub-hub (one per major model)
    <concept>/<facet>.mdx            # Leaf concepts (sign-up, deactivation, ...)
    <concept>/statuses.mdx           # One statuses page per status machine
  guides/
    index.mdx                        # Guides hub (lanes flowmap by task group)
    <task-group>/<task>.mdx          # Single-path guides
    <task-group>/<task>/index.mdx    # Dual-path guides: chooser page
    <task-group>/<task>/from-the-dashboard.mdx
    <task-group>/<task>/using-the-api.mdx
    sandbox-<thing>.mdx              # ≤2 sandbox guides: flat files
    sandbox/                         # ≥3 sandbox guides: folder with its own hub
  reference/
    index.mdx                        # Reference hub (lanes flowmap by lookup group)
    <lookup>.mdx or <lookup>/        # Terse lookup tables
  partials/_<name>.mdx               # Domain-local shared fragments
```

- The **folder types the page**: `/concepts/`, `/guides/`, `/reference/` drive the Concept/Guide/Reference chip and icon. No page-type frontmatter key exists.
- **Sandbox simulation pages are Guides, never Reference** (relocated branch-wide; changelog links updated with them).
- **Status machines:** the full state machine (diagram + definitions table) lives on ONE page (shape in §4); concept and guide pages link to it, never duplicate it.

### Partials doctrine
- **Extraction criterion:** verbatim duplication on ≥2 pages, at ANY size — from a one-sentence ISO-8601 note to a 73-line prose+Mermaid+tables block (`_payment-object.mdx`). Near-identical-but-for-a-noun → ONE parameterized props partial (`{props.fullprocess}`, e.g. `identity-methods/_intro-id.mdx`), never two files.
- **FOUR tiers**, scoped as narrowly as possible, all `_`-prefixed files excluded from routing:
  1. Cross-domain: `docs/_shared/partials/` (e.g. `_identifications-table.mdx`).
  2. Cross-section within a domain: `<domain>/partials/` (e.g. `users/partials/_deactivate-reqs.mdx`, imported by all three deactivate pages).
  3. Task-group-local: `<task-group>/partials/` (e.g. `guides/merchants/partials/`; may nest, e.g. `partials/payment-links/`).
  4. Sibling-only: a colocated `_x.mdx` next to its single consumer group (e.g. `users/guides/consent/_s2s-replace-key.mdx`).

  The folder is always named `partials/` — underscore on FILES only (`get-started/_partials/` is the outlier; rename during its pass, see Appendix).
- **Extract the WHOLE block** — admonition wrapper, headings WITH their `{#anchor}`s, `<Term>` wraps — so anchors survive extraction unchanged. A partial's `<Term>` renders on every consumer page: re-run the §5 Term rebalance on each consumer after extraction.
- **Imports sit inline directly above their render point** (even inside an admonition); only `_shared/definitions/` imports group at the top of the file.
- **Placeholder pages** use the shared `docs/get-started/_partials/_wip-placeholder.mdx` (+ a `{/* TODO:SME */}` marker), never bespoke wording.
- A partial imported from OUTSIDE `docs/` is silently dropped by the md-mirror and the glossary (path-traversal guard, no build error) — partials must resolve inside `docs/`. Relocate any partial imported from `docs/topics/` **before** deleting the legacy folder.

## 2. Sidebar, nav, and redirects (`sidebars.ia.js`, `redirects.js`)

The nav tree is defined only in `sidebars.ia.js`; the file tree alone does nothing. Copy the Users block shape:

```js
<domain>Sidebar: [
  doc("<domain>/index", "<Domain> overview"),
  top("Concepts", [
    cat("<Concept>", [
      doc("<domain>/concepts/<concept>/<facet>", "<Facet label>"),
      ...
    ], { link: "<domain>/concepts/<concept>/index" }),
    ...
  ], "<domain>/concepts/index", "ia-type-concept"),
  top("Guides", [
    cat("<Task group>", [
      cat("<Dual-path task>", [
        doc(".../from-the-dashboard", "From the Dashboard"),
        doc(".../using-the-api", "Using the API"),
      ], { link: ".../index" }),
      doc("<single-path guide>", "<Label>"),
    ]),
    doc("<domain>/guides/sandbox-<thing>", "Sandbox: <thing>"),
  ], "<domain>/guides/index", "ia-type-guide"),
  top("Reference", [
    ...
  ], "<domain>/reference/index", "ia-type-ref"),
],
```

- Nav labels come from the sidebar node label, not `sidebar_label` or `title`.
- Statuses leaves are labeled plain "Statuses" (the category gives context).
- Dual-path guides always order "From the Dashboard" before "Using the API" and link the chooser index as the category link.
- **The leading `doc(...)` overview item is load-bearing for three systems** (12 August 2026): `ia-nav` derives the navbar dropdown from it (no leading doc → no dropdown), `ia-sidebar-index-targets` uses it as the last-resort click target, and the `custom-sectionDropdown` `to:` in `docusaurus.config.js` must equal its route.
- **Category-index wiring — ONE canonical pattern (settled 13 August 2026):** a category (or `top()` section) whose index page exists always sets `link:` to that index and NEVER lists it as a child. No "Overview" child rows. Verified: a linked index participates in prev/next pagination natively, `ia-nav` derives the dropdown target from `link.id` (hub path), and llms-txt contributes `link.id` hubs — nothing depends on the child row. Listing the index BOTH ways puts it twice in the pagination sequence ("next page" loops to itself); the former link-less-plus-"Overview"-child pattern is retired (all six instances converted 13 August 2026: Protections, Onboarding, Capital deposits, Memberships, Become a partner, GraphQL). The sidebar-LEADING overview doc (rule above) is a different construct — it stays, labeled "<Section> overview", never bare "Overview".
- **Categories without any index doc are auto-wired** by `ia-sidebar-index-targets.js`: click (and direct URL, via generated redirects) resolves to the nearest ancestor index. All children of an index-less category must share ONE directory, or the generated redirect degrades (fires from the shallower common path, or not at all — the direct URL then 404s). To give such a category a real landing page, create an index and `link:` it per the rule above.
- **Sidebar audience badges are fully derived — never hand-author them** (14 August 2026): `ia-sidebar-audience.js` (wired into the `sidebars.ia.js` export) reads each doc's `audience` frontmatter and stamps `ia-aud-dev`/`ia-aud-ops` classNames; `ia-shell.css` renders them as an icon-only pill (dev = code brackets, ops = control sliders) at the row's end, **shown only on row hover/focus** (always-on pills wallpaper the tree), with a tooltip below the row ("For developers" / "For Dashboard operators"); `DocSidebarItem/{Link,Category}` add the matching `aria-label`. Placement rule: every single-audience page carries its stamp (children inside a uniform section included — hover any row and it answers), and a category is stamped too when every doc under it shares one audience; dual-audience and audience-less pages are never badged and make ancestors non-uniform; counterpart halves (From the Dashboard / Using the API) badge like any other single-audience page. Two deliberate exclusions: a category's own `link:` index (hubs are deliberately dual entry points; the badge speaks for the section's contents), and `ia-type-*` top sections (their `::before` already draws the type icon). The same role icons replace the dot on every `.ia-audience-tag` (rail, path-picker, counterpart cards) via mask + currentColor, so the sidebar's bare icon is taught by the labeled badges on every page. Consequence for authors: narrowing or widening a page's `audience` frontmatter moves sidebar badges automatically — check the affected section after edits (dry-run: `node -e "require('./sidebars.ia.js')"` then inspect classNames).
- **Sidebar tooltips must be hosted on row containers, never on label anchors** (14 August 2026): `.menu__link`/theme-classic's `.categoryLink` have `overflow: hidden` (label ellipsis), which clips any anchor-hosted `[data-ia-tip]` bubble entirely, and Infima transforms `.menu__list-item--collapsed .menu__link--sublist::after` (a bubble hosted there rotates into the row as a dark smear on hover). Sidebar tooltips (audience + the typed-section Concept/Guide/Reference descriptions) are therefore pure-CSS `::after` bubbles with static `content`, hosted on `.menu__list-item-collapsible` (categories) or the leaf `<li>` — see the "Sidebar row tooltips" block in `ia-shell.css`. The typed-section `data-ia-tip` never painted for this reason; it was removed from `DocSidebarItem/Category`. Tooltip sentences live in TWO places that must stay in sync: `ia-shell.css` (visual) and `DocSidebarItem/{Link,Category}` (aria-label). `[data-ia-tip]` remains correct for non-sidebar hosts (navbar flyout, terms, breadcrumb).

### Redirects (all rules)
- Keep slugs stable. A **reframed** page keeps its slug — rename title/H1/labels only; a slug change would chain the legacy `topics/` redirect (precedent: `resend-invitation` reframed "Send or resend...").
- A moved live PAGE needs a hand-added entry in `redirects.js`; no chained redirects (retarget the old entry instead).
- **Never hand-write a redirect for a category URL** — `categoryRedirects()` generates them from `sidebars.ia.js` for categories with no index doc.
- A **split** page redirects to the PRIMARY successor. A redirect carries the URL fragment, so old deep links to the secondary's anchors land at the primary's top — retarget every internal deep link precisely before relying on the redirect.
- A **merged** stub redirects to the hub that absorbed it.
- An **ops-guide promotion** (`<task>.mdx` → `<task>/index.mdx` chooser, §10) needs NO redirect: the legacy URL resolves to the chooser.

## 3. Frontmatter contract

Only these keys, ever: `title`, `audience` (dev/ops, scalar or list), `related` (list of resolving routes), `counterpart` (single route, optional `counterpart_label`), `rail: false`. Never `sidebar_label`, `sidebar_position`, or a page-type key. (`description` is currently banned but read by llms-txt and the rail — open decision, see Appendix.) `audience` also drives the derived sidebar badges — see §2.

`counterpart_label`: default to OMITTING it. Without a label, the rail's "Also available" card shows the target's title plus an automatic context line (the target's parent page title), which is exactly right for dual-path siblings. Setting a label replaces the title AND suppresses the context line (`src/components/rail/Counterpart.jsx`), so a label must be a self-contained phrase naming action and medium ("Deactivate with the API", never "Using the API"). Use it only when the counterpart is not a sibling or the target title can't stand as a card title. Never exercised in Users; first use pilots it.

`related` rendering (12 August 2026): the rail re-buckets routes by type in a fixed order (Concept, Guide, Ref, then areas) and each link renders the TARGET page's `title` — authored order survives only within a bucket, and to change how a related link reads, retitle the target.

| Page shape | `audience` | `counterpart` | `related` (typical) |
|---|---|---|---|
| Domain overview | `[dev, ops]` | – | main concept + sibling domains |
| Section hub (concepts/guides/reference index) | `[dev, ops]` | – | the two sibling section hubs |
| Concept sub-hub | `[dev, ops]` | – | its facets + owning reference/guide pages |
| Leaf concept, statuses | `[dev, ops]` (narrow if truly one-audience) | – | parent concept + related guides |
| Dual-path chooser | `[dev, ops]` | – | the backing concept pages |
| `using-the-api` | `dev` | `.../from-the-dashboard` | chooser + counterpart + concepts |
| `from-the-dashboard` | `ops` | `.../using-the-api` | chooser + counterpart + concepts |
| Reference table | `[dev, ops]` or `dev` | – | concepts that use the table |

Any page with rail metadata needs at least one real h2/h3 (production build throws otherwise; see §8 gates).

## 4. Page shapes (copy from Users)

### Domain overview (`<domain>/index.mdx`) — model: `docs/users/index.mdx`
1. Frontmatter title = domain name; no H1 in body (or H1 == title).
2. `<p className="ia-lede">` one-sentence identity of the domain, with `<Term>` on first jargon.
3. `## Concepts` + a `graph`/`spokes` flowmap of the domain's main concepts — only when every non-root node truly hangs off the root (§9's true-feeder condition; Users qualifies). When some concepts precede or own the root instead, split into two fences under the same heading, each introduced by a line of prose: a `chain` for the lifecycle (creation → root → end-of-life) and a `spokes` of the root's real satellites (precedent: Accounts overview, 12 August 2026). Every concept sub-hub must appear in exactly one of the fences.
4. `## Find your path` + a `tracks` flowmap: one track per audience (`Developers`/`dev`, `Operators`/`ops`), each item typed `Concept`/`Guide`/`Ref` with a one-line desc.

   Tracks are CURATED (settled and enforced 6 August 2026): aim for 5–7 items per track, hard ceiling 7; order as a first-session journey (ALL concepts, then guides, then AT MOST one reference, last — no interleaving; a track with no first-session lookup table has no Ref item, like the Users operators track); select by "needed in the first session" and "highest-traffic tasks"; every item must also be reachable through the section hubs (tracks are a shortcut, never coverage). All four existing domain overviews comply.

### Concepts hub (`concepts/index.mdx`) — model: `docs/users/concepts/index.mdx`
H1 "<Domain> concepts" → ia-lede → one section per model cluster, each with its own heading and a flowmap that fits the content (Users: `spine` layout, one node per concept sub-hub with its leaves as `branches`). Never leave a flowmap headingless.

### Guides hub and Reference hub — models: `docs/users/guides/index.mdx`, `docs/users/reference/index.mdx`
H1 → ia-lede → `## In this section` → a `lanes` flowmap, one lane per task/lookup group. These are honest nav cards; don't dress them as a flow. Coverage is CURATED, not mechanical: list what a reader would look up directly; leaves under a sub-hub may be represented by the sub-hub entry (the Users reference hub lists Identity methods + Recommendations, not Expert/PVID/QES individually). Curation still needs a completeness check: every sidebar leaf must be reachable from a hub entry either directly or through its listed sub-hub.

Section-hub `title` is the bare section name (`Concepts`, `Guides`, `Reference`); the H1 is domain-qualified (`# Users concepts`). They intentionally differ.

**Nested guide sub-hub** (e.g. `guides/onboarding/`, blessed 12 August 2026; template settled 13 August 2026): verb-first lede → `## In this section` nav flowmap (`grid`/`lanes`/`pathway` per §9) → genuinely shared operational content after (cross-cutting notices, link mechanics). Nothing else sits between the lede and the nav. Shape precedents: onboarding, account-holders (lede → nav directly); capital-deposits, memberships (one orienting line after the nav). A concept-pointer paragraph BETWEEN lede and nav is the retrofit target: trimmed on Account operations, Memberships, and Billing (13 August 2026; the pointer survives in the `related` rail). Four Accounts hubs still carry it — closure, ibans, documents, funding — retrofit during DOC-1879 (correcting the earlier "one outlier" claim: a full sweep found six, not one). Billing's trim also registered the `billing` glossary id (partial `_billing.mdx`, prose lifted verbatim from the concept page) and wrapped the hub lede's first mention, because the trimmed pointer was that page's Term-floor escape hatch — check the same interaction on the remaining four. The leaf-coverage gate applies to the sub-hub's own leaves, including dual-path trios (each trio's chooser must appear in a lane).

### Concept sub-hub (`concepts/<concept>/index.mdx`) — models: `docs/users/concepts/{user,consent,identifications}/index.mdx`
H1 == title → ia-lede → the concept's own model in prose (this page OWNS the shared facts; facet h2s preview in 1–3 sentences and link to the leaf page) → a CLOSING `## In this section` pathway flowmap listing the leaves. All three Users sub-hubs end with this pathway. Hub with only one leaf: no pathway (30 July 2026 decision).

### Statuses page — model: `docs/users/concepts/user/statuses.mdx`
One Mermaid `flowchart` + one definitions table per status machine; diagram nodes and table rows must agree. Backticked statuses are real GraphQL enum values (verify per §10 schema checks, never against diagrams/prose). Node styling: start grey `#D4D3D5`, final-status subgraph amber `#fffdf4`, canceled red. Access/side-effect caveats go in an admonition after the table. **Deprecated enum values** get one prose line under the table ("The `ConsentStatus` enum also includes `CredentialRefused`, which is deprecated…") — never a table row, never a diagram node.

Page shape (settled 7 August 2026; Accounts complies): H1 → one-line lede → a single `## Statuses {#anchor}` section holding the diagram and table. EXCEPTION (codified 13 August 2026): an auxiliary table or reason-code list tightly coupled to ONE status may be a second h2 on the same page (precedents: `account-holders/verification-statuses.mdx` requirements table, `identifications/statuses.mdx` invalid reason codes). Pages tracking several machines use one named h2 per machine, and any page-level overview flowmap gets its own h2 — never left headingless under the H1. No API sequence diagrams on statuses pages: a flow diagram lives on the page that owns the flow (the concept sub-hub or the flow's leaf concept, e.g. `accounts/concepts/onboarding/index.mdx`, `accounts/concepts/memberships/inviting.mdx`), with a one-line cross-link from the statuses page. Cards' legacy "Status flow"/"Status definitions" split predates this rule and is retrofitted during the Cards pass (DOC-1880).

### In-page section ordering (codified 12 August 2026)
Within a page body, order sections by reader priority, not by the source's historical accretion:
1. **Orientation before detail:** every page opens with at least one orienting sentence under the H1 before the first h2 (precedents: `closure/processes.mdx`, `funding/settlement.mdx`).
2. **Current before historical:** the lookup content readers come for (tables, status machines, code lists) precedes timelines, migration notes, and change history. Deprecated material CLOSES the page, with any timeline/history section directly above the deprecated section it narrates (precedent: `closure/reason-codes.mdx`).
3. **Journey order for nav lists:** `pathway` items follow the reader's task sequence, never alphabetical or sidebar order (precedent: funding hub).
4. **Group lookups by kind:** related code/reference sections sit adjacent, not separated by unrelated content (precedent: `reference/capital-deposits` cancelation + document refusal codes).
Anchors move with their sections (§6); demoting a section is not deleting it.

### Dual-path guide (Dashboard + API)
Three pages, always:
- **Chooser index** — model: `docs/users/guides/user-operations/deactivate/index.mdx`: ia-lede → `## Choose how to deactivate` with `ia-path-picker`/`ia-path-option` cards (audience tag + name + desc) → `## Before you start` with shared prerequisites imported from a partial → link to the backing concept. Card copy names the concrete artifact and the reason to choose it: dev desc names the mutation, ops desc names the medium plus the use case ("Manual `.csv` export from the Dashboard. For ad-hoc reporting and audits.").
- **`using-the-api`** — model: `.../deactivate/using-the-api.mdx`: prerequisites in a `:::tip Prerequisites` admonition (importing the same partial) → `## Guide` numbered steps → `## Mutation` with the `explorer-badge` link directly above the `graphql` fence (`showLineNumbers`, highlight the lines the steps reference).
- **`from-the-dashboard`** — mirror shape with Dashboard steps and screenshots.

Shared prerequisites live in ONE partial imported by all three pages; never restated — and never outsourced: a guide leaf that links to ANOTHER page for its prerequisites is a defect; import the partial locally under `## Before you start` and point downstream references at the same-page anchor.

### Single-path API guide (get-list, get-info, ...)
Lede → prerequisites → numbered steps → query/mutation fence with explorer badge. State Sandbox vs Live in every example.

### Reference table page
Terse. Field tables: `<Req/><Opt/><Cnd/>` on every row + one `<FieldRequirementsLegend/>` near first use. Feature/support tables: `<Supported/><Unsupported/>` + `<SupportStatusLegend/>`; `<Yes/><No/>` for binary cells. Tabs for per-variant content (country, process, Sandbox vs Live).

Eligibility and other binary markers are ALWAYS a table column with `<Yes/>`/`<No/>` cells and a column header naming the property; never a bespoke inline symbol on list items (settled 6 August 2026: the former ⮂ marker in `users/reference/sensitive-operations.mdx` was converted to a "Server-to-server" column). The same applies to requirement badges: the `<Req/><Opt/><Cnd/>` column is headed "Requirement", never left with an empty header (settled 6 August 2026; empty-header tables in Payments predate the rule and are retrofitted during that domain's pass).

### External embeds and iframes
Do not carry external iframes (Figma and similar) into migrated pages; replace with a Mermaid diagram or an image. Any RETAINED iframe requires an explicit `sandbox` allowlist — all nine live Figma embeds were sandboxed on 12 August 2026. The delete-vs-replace decision for the legacy Figma embeds remains open (see Appendix).

### Rendering behaviors (12 August 2026)
- `FlowMap`, `Term`, `Tabs`, and all badge components are global via `MDXComponents.js` — no imports.
- Mermaid diagrams get a built-in full-screen affordance (large sequence diagrams need no splitting or image export); output is DOMPurify-sanitized to the SVG profile (+`foreignObject`, which is what allows `<br/>` in node labels).
- Headingless tab panels become linkable with `<TabItem id="...">` — anchors into inactive tabs work.
- The site is light-mode only (toggle removed): one set of screenshots and diagram colors.

## 5. Finished-page floor + Term and glossary mechanics

### Floor (per type)
- **Every page:** `audience`, (almost always) `related`, ≥1 `<Term>` at the first UNLINKED jargon mention (register new ids in the glossary FIRST; if the first mention is already a cross-link, keep the link, no Term). If a page's jargon has no glossary entry, either register the id or make the first mention a cross-link to its owning concept page (`accounts/concepts/closure/communications.mdx` is the precedent, 7 August 2026). Thin operational leaves (export, get-list, Dashboard variants) with no unwrapped jargon legitimately carry zero Terms.
- **Domain overview:** concepts spokes flowmap + audience tracks flowmap.
- **Concepts hub:** relationship flowmap of the domain model.
- **Guide showing a mutation/query:** explorer-badge link above the fence (no API call → no link). The badge's base64 must encode the REAL query shown — the md-mirror decodes it into an example (§11).
- **Reference field table:** badge on every row + one legend.
- **Guides/reference hubs:** lanes flowmap from which every sidebar leaf is reachable (directly or via its listed sub-hub).

### Glossary registration contract (12 August 2026)
- The glossary heading MUST carry an explicit `{#anchor}` — that anchor IS the `<Term id>`. The section's first `<Component />` must be the imported definition partial (else the heading is skipped as a section grouper). The partial's FIRST SENTENCE becomes the tooltip — write it to stand alone. Singular aliases (`iban`→`ibans`, `card`→`cards`, …) are hand-registered in `plugins/ia-glossary-terms/index.js`.
- `docs/_shared/definitions/` is its own tier: one file per term, definition prose only, dual-consumed by the glossary page AND the owning concept page (as opening definition, table cell, or blockquote) so the two can't drift.

### Term hygiene
- An unknown or typo'd `<Term id>` renders as PLAIN TEXT — no link, no tooltip, no build error. Every Term pass ends with a grep audit of `<Term id="...">` values against glossary anchors, not just a green build (§8 checklist).
- **Rebalance on every content move or partial extraction:** the move can strip the source page's only wrap of a term or duplicate the target's. Wrap the new first mention on the source; unwrap the now-duplicate mention on the target. A `<Term>` inside a partial renders on every consumer page and counts as that page's wrap.

## 6. Cross-linking and anchors (SRP + DRY)

### Links
- One canonical home per fact: concepts → reference for tables; guides → concepts for the why; restrictions live on the owning concept.
- Chooser pages and counterpart pages link both ways (`counterpart` frontmatter drives the rail).
- Link text: **navigational** links name the target page; never "above/below/previously". **Tail pointers** are different (12 August 2026): never append a "Review X" sentence after a sentence that already states the fact — make the fact itself the link text.
- Sub-hub previews its leaves in one line each, then links; leaves link back to the parent and sideways to guides/reference via `related`.
- Sibling section hubs cross-reference each other in `related` (concepts ↔ guides ↔ reference).
- `related` precision: point at the NARROWEST owning leaf, not the concept hub; reference leaves also list their parent hub.
- The cross-linking pass is body-wide: link first mentions inside admonitions, numbered steps, and partials too, across domains where the owner lives elsewhere.

### Anchors (all rules, 12 August 2026)
- **Author a short explicit `{#anchor}` on every h2/h3** — a short slug, not the heading's auto-slug (`## Card formats {#formats}`). This is what makes anchor stability mechanically safe: rewording a heading can't move a link. If a section is genuinely rewritten into something else, rename the anchor to match. EXEMPTION (settled 13 August 2026): `## In this section` headings carry no explicit anchor — the heading text is fixed by convention, so its auto-slug cannot drift; no such heading anywhere in the repo has one.
- **Never delete an existing anchor**, even a no-op h1 anchor — readers share them (user rule).
- Anchors are stable across moves: a section that moves pages (or into a partial) keeps its `{#anchor}` at the destination.
- **On every move/rename, re-check inbound `#anchor` links** — they only WARN in the build. Batch retargets: replace the LONGEST anchor first, and beware `\b` in regex (it matches before a hyphen: `#verification-process\b` also hits `#verification-process-diagram`); grep the sweep's own output for self-inflicted mangling; `changelog/` lives outside `docs/` — grep both. Grep BOTH slash variants (`page#anchor` AND `page/#anchor`) — the capital-deposits dissolution's plain grep missed three `capital-deposits/#france` links that only the build's anchor warnings caught (13 August 2026).
- After a retarget, re-read the LINK TEXT: text promising content the new target lacks ("limited accounts *and verification*") gets renamed to name the target.

## 7. No-loss gate (run per domain, before deleting `topics/`)

1. **Inventory the legacy source:** list every file under `docs/topics/<domain>/` plus every shared partial/definition it imports.
2. **Map every heading:** for each legacy page, map each h2/h3 (and each table, admonition, diagram, footnote) to its destination route + anchor. Unmapped item = blocker, not a judgment call.
3. **Diff-read after the move:** compare the migrated page against its source; flag anything dropped, weakened, or merged away. Facts needing verification become comments on the domain's Linear ticket, not silent edits.
4. **Partials audit:** every `import ... from '..._*.mdx'` in the new tree resolves after the `topics/` cutover (all four partial tiers, and always inside `docs/` — §1).
5. **Image audit:** resolve every relative image path by hand or script; broken image paths do NOT fail the build.
6. **Redirects:** every legacy live URL has a redirect to its new canonical home (rules in §2).
7. Only then delete the legacy folder.

## 8. Per-domain order of operations, build gates, and audits

Pre-flight: confirm canonical branch; confirm the authoritative migration map (the csv may not exist in the repo — verify, don't assume); confirm legacy source under `docs/topics/<domain>/`; decide the partial-relocation target; confirm `sidebars.ia.js` will get the full tree; confirm a `concepts/<domain>/index.mdx` hub exists (create before the flowmap pass); confirm needed glossary terms are registered.

**Accounts variant:** Accounts is already migrated (no `topics/` source), so it follows a RECONCILIATION pass instead: diff every Accounts page shape against the Users template (hub shapes, closing pathways, frontmatter, floors) and bring it into line; the no-loss gate (§7) applies to any content moved during reconciliation, minus the `topics/` steps.

**Pass 1 — structural IA:**
1. Build the sidebar block (§2) and the folder skeleton (§1).
2. Move content near-verbatim into the correct folder (folder types the page).
3. Fix links to resolving routes; align terminology with the Glossary.
4. Set frontmatter per the contract (§3).
5. Redirects per §2 (hand-add for moved pages only; categories are generated).
6. Build green after every change (gates below).

**Pass 2 — Content Pass (rollout by leverage):**
1. Rail-metadata backfill (audience first, then related).
2. Explorer links + Tabs on API guides.
3. Reference-table badges + legends.
4. Term pass: wrap the first unlinked jargon mention per page across the domain (mechanics in §5).
5. Hubs: create/upgrade concept hubs and flowmaps (recipes in §4, §9).
6. Clearer phrasing with ZERO information loss; DRY enforcement via cross-links (§6); SRP surgery where a page mixes concerns (§10).
7. Quality sweep (lede problems, heading/content mismatch, admonitions splitting lists, house-style misses, contradictions, enum casing verified per §10, malformed Mermaid).
8. Outward-freshness sweep (13 August 2026): check the domain against Slack `#announcements-product` and Linear "In Production" issues since the June 2026 fork — docs lag the product, and changelog-only sweeps miss Dashboard-side changes (precedent: the FRONT-1910 public-links split surfaced via Slack + Linear, not the docs). Findings feed the §10 freshness checks and the Appendix housekeeping list.

### Build gates
Run gates on `yarn build` — rail and route-resolution errors THROW only in production builds; `yarn start` merely warns. Production THROWS on: broken links, unresolvable `related`/`counterpart` routes, rail pages without a real h2/h3.

### Silent-failure checklist (end of every pass — the build catches NONE of these)
1. Broken relative image paths (resolve by hand or script).
2. `#anchor` mismatches (WARN only) — re-check inbound links per §6.
3. Unknown `<Term id>`s (render as plain text) — grep ids against glossary anchors.
4. Malformed flowmap JSON (page-level error box) — visually check every flowmap.
5. Partials imported from outside `docs/` (silently dropped by mirror and glossary).
6. `[llms-txt]` resolution warnings and `[md-mirror]` "Unhandled component" warnings in the build log.
7. Vale: advisory only — no CI hook, no yarn script. Run `vale` manually before review; extend `styles/Google/vocab.txt` for Swan nouns instead of rewording them.
8. **redirects.js `#anchor`-target sweep (13 August 2026):** grep `redirects.js` for `to:` values carrying a `#` fragment — each one is either the tell of a grab-bag merge awaiting dissolution (§10) or a split whose old deep links need precise retargets (§2). The sweep that found `account-holder-tasks` is the precedent.
9. **Rail-reciprocity check (13 August 2026):** `related` rails are not auto-reciprocal — when page A lists B, check whether B should list A back. Precedents: add-account ↔ create-additional-account, onboarding hub ↔ account-holders hub.
10. **Orphan-page sweep (13 August 2026):** a routable doc absent from every sidebar renders fine at its URL but is unreachable by navigation — no build error, no warning. Sweep per pass: compare all non-`_` `docs/**/*.mdx` ids against ids referenced in `sidebars.ia.js`/`sidebars.js` (no `slug`/`id` frontmatter overrides exist to complicate this). Found: `cards/reference/card-fraud-types` (stub listed in its hub's LEDE but missing from sidebar AND hub flowmap — when adding a leaf, sweep every enumerating surface: sidebar, hub flowmap, concepts-spine branches).
11. **Sidebar edits never hot-reload (13 August 2026):** `sidebars.ia.js` is `require()`d by the watched `sidebars.js`, and Docusaurus neither watches nor cache-busts transitive requires — a running `yarn start` serves the stale nav tree indefinitely while the new page's URL renders fine (looks like an orphaned doc). Restart the dev server after ANY `sidebars.ia.js` change, and verify new leaves by clicking the rendered sidebar, not by grepping the file. Found via `concepts/billing/regulated-fees` (invisible post-split until restart).

### Meaning-preservation checklist (end of every surgery round)
1. `git diff <session-start-sha>` and re-read every reworded hunk against the original.
2. Hunt the known failure modes: softened consequences (dropping "automatically rejected"), narrowed/widened claims (options lists), flattened role names ("Account Manager" → "Contact us"), send-vs-resend semantics on limits.
3. Deliberate deviations get flagged to the user and the domain ticket, never applied silently.

**Approval protocol:** apply clear fixes (phrasing, house style, DRY links, unambiguous bugs) autonomously and report; ask only for fact/API-value verification and contentious splits (as Linear ticket comments). Never commit or push; the user handles all git.

## 9. FlowMap recipe (guardrail)

Pick the layout from the content; never dress a list of sub-page cards as a fake flow.

| Content | Layout |
|---|---|
| Sequence of events | `graph` / `chain` (or `lifecycle` for statuses) |
| Hub + true feeders | `graph` / `spokes` (first node = root) |
| Domain model with facets | `graph` / `spine` (nodes with `branches`) |
| Flat ordered nav list | `pathway` |
| Guides/reference nav by group | `lanes` (or `grid`) |
| Audience-split entry | `tracks` |

Spokes' "true feeders" condition is strict: a node that precedes, creates, or owns the root is not a feeder. When a domain's concepts split between lifecycle and satellites, use a `chain` + `spokes` fence pair under one heading (§4, Accounts overview precedent).

Leaf concept pages need no flowmap; only hubs and the domain overview do. A malformed flowmap spec renders as a page-level error box, not a build failure (§8 checklist). Flowmap fences reach the `.md` mirrors as raw JSON (see Appendix, open decision).

## 10. Content Pass surgery catalog (settled 11–12 August 2026)

Detection heuristics and the settled fix for each recurring page disease. Precedents in Accounts unless noted.

### Splits and merges
- **And-title smell:** a concept page titled "X and Y" over two unrelated objects splits into one page per object, each paired with its guide via `related`. Precedent: "Statements and bank details" → `account/statements` + `account/bank-details`. Redirect per §2 (split → primary).
- **Embedded status machine:** a status diagram + table living mid-page in a concept narrative extracts to its own statuses leaf (shape per §4); the flow-owning page keeps its sequence diagram; the two pages exchange one-line pointers. Precedent: `account-holders/verification` → `verification-statuses` (auxiliary tables tightly coupled to one status, like `WaitingForInformation` requirements, move WITH the statuses).
- **Stub leaf:** a leaf of only bullet lists (~20 lines) merges into its hub with a redirect; hubs are the home of "why use this" content. Precedent: `multiple-accounts/benefits` → hub.
- **Fat hub:** an overgrown concept hub sheds facet leaves, split by page TYPE — prose model → concept leaf, long API-object list → reference page — and keeps one-line pointers. Precedent (Users): consent hub → `sca.mdx`, `server-to-server.mdx`, `reference/sensitive-operations.mdx`.
- **Model facts squatting on operational pages** move to the owning concept or hub: `versioning` → memberships hub; `remove-identification` → permissions; "Company accounts"/"Unlimited memberships" → memberships hub.
- **Ops-guide candidate:** a single-path API guide whose task also exists in the Dashboard → `git mv` to `<task>/using-the-api.mdx`, add the chooser as `<task>/index.mdx` (legacy URL resolves to the chooser — no redirect, §2), add `from-the-dashboard.mdx`, flip the sidebar entry to a `cat(...)`. Precedent (Users): export, deactivate.
- **Reframed pages keep their slug**; titles name the precise API object (invitation **notification**, not invitation). Precedent: `resend-invitation`.
- **Type-mixed guide:** a guide that is mostly regulatory/model exposition plus lookup tables sheds that block to ONE concept leaf — rules and their tightly-coupled classification tables move together (statuses-page logic), resisting a three-way concept+reference scatter of a single concern. The guide keeps its slug (no redirect), its task content, and states the boundary fact with the link as the text (§6 tail-pointer rule). Detection: the owning concept links OUT to the guide for the fact (§ Misplacement, link-graph inversion). Precedent: `guides/billing/compliant-billing` → `concepts/billing/regulated-fees` (13 August 2026; `fees.mdx` delegation un-inverted, "billing model" inbound link on card-packages retargeted to the concept hub).
- **Grab-bag dissolution:** a "tasks" page that is several legacy pages merged behind anchors (redirects.js targeting `page#anchor` is the tell) dissolves back into one leaf per task; tail-pointer sections (a one-liner linking to a dedicated chooser) are dropped, sandbox sections move to the domain `sandbox/` folder, and each legacy redirect repoints DIRECTLY at its new leaf (no chaining through the dead page). The dead URL needs no redirect if it never shipped to live. Precedents: `onboarding/account-holder-tasks` → `guides/account-holders/{add-account,get-verification-status,request-first-transfer}` + `sandbox/account-holders` + export chooser moved to `account-holders/export/` (13 August 2026); `guides/capital-deposits` hub `#france` walkthrough → `capital-deposits/deposit-capital` leaf, three tail-pointer sections dropped as verified duplication (13 August 2026 — the variant where the grab-bag is a HUB that stays: only the merged content moves out, the hub itself is trimmed, not deleted).

### Misplacement detectors
- **Link-graph inversion:** if the concept that OWNS a fact links out "for all details" to a page that doesn't own it, the content is on the wrong page. Precedent: Limited-account transfer restrictions lived on `first-transfer`; moved to `type-and-level`.
- **"When to use X" h2 on a guide** is conceptual exposition: move it to the owning concept; the guide's lede keeps a one-line pointer. Precedent (Users): SCA rework.
- **Enum list outside its statuses page:** three or more backticked enum members in a bullet or cell collapse to a link to the statuses page (deprecated-value handling in §4).
- **Repeated per-item boilerplate:** N sections each restating trigger/configuration/template collapse to ONE shared section up front + a per-item delta line. Precedent: verification notifications (4 emails → `## Configuration` table + "Account information included" per email). Zero information loss: every varying cell must map to a delta line or an exception note.

### Schema checks (expanded rule, 12 August 2026; tooling updated 13 August 2026)
Any question the schema can answer gets checked proactively, not deferred to the ticket: status-to-object attribution (`Verified` is `AccountHolder.verificationStatus`, NOT an `AccountStatus`), field names and plurality (`Account.statements`, not `statement`), mutation/rejection existence, enum values. **Fast path (preferred): the Swan Partner GQL Search MCP** — `introspect-graphql-type` returns live, verbatim SDL including `@deprecated` directives (no clone lag, no summarizer paraphrase); `search-graphql-schema` finds types by keyword. The Swan Docs MCP (`search-docs`) does the same for live v2 pages. Fallbacks when MCP is unavailable (headless/cron runs): grep the local clone `~/Documents/api-reference/docs/{enums,objects,mutations,queries,unions}/*.mdx` (values sit as `<b>Value</b>` between "Values" and "Member Of") — but the clone lags FAR beyond its snapshot date (22 May 2026 clone is missing the entire March-beta onboarding API); an absence or discrepancy is only real after confirming live, via MCP or `api-reference.swan.io` WebFetch (curl is blocked). Watch deprecation notes: live may hold BOTH a deprecated shape (`status: StatementStatus`) and its replacement (`statusInfo`); docs should match the NEW one.

### Freshness checks
- Future-tense feature sections ("will be available", "released in <year>") get cross-checked: against the schema (the object may already exist — `WebBankingSettings.canOpenAccount` does) and against the docs themselves (a "coming up" item whose page already shipped is an unambiguous fix).
- Past-dated "upcoming" notices (breaking-change dates that have passed) need confirmation the change actually happened before removal — deploys slip.

## 11. AI-reader layer (llms.txt + .md mirrors)

- The sidebar is the canonical set for `llms.txt`: a routable page in no sidebar is invisible to LLM readers (warns, never fails). A NEW top-level sidebar must also be added to the hardcoded `SECTIONS` list in `plugins/llms-txt/index.js`.
- Every non-underscore `.md(x)` under `docs/` is republished at `{URL}.md`, sitemapped, and advertised in robots.txt — no opt-out key. A draft page committed under `docs/` becomes a crawlable artifact.
- Any NEW MDX component needs a renderer in `plugins/md-mirror/mdToMarkdown.mjs` (+ `yarn test`), else mirrors degrade with "Unhandled component" warnings. Six mockup component names (AudienceMetaBox, LearningPathColumns, PathPickerCards, ConceptsGrid, RelatedProductsGrid, TypedRelTag) render as TODO comments — do not use them.
- Explorer badges must carry the REAL base64 query: the mirror decodes `?query=` into a `graphql` fence, so a stale badge ships a wrong example to AI readers.

## Appendix: open items — state, not doctrine

Transient. Review at the start of each domain pass; delete entries as they resolve. (Last reviewed 13 August 2026.)

### Get started — audience backfill done early (14 August 2026, ahead of DOC-1883)
All 17 content pages got `audience`: Become a partner = ops (except country-coverage = dual: devs scope the coverage tables too), Protections = ops throughout (subcategory badges as a section), Set up Swan = dev (choose-integration, quickstart, step-by-step) with create-project and glossary dual, overview and get-help dual (get-help also got `rail: false` — no h2, triage page). NOT stamped: the 6 WIP placeholders (connect-mobile, swan-access, data-model, 3 integration-by-segment pages) — no content to judge and no h2, so rail metadata would trip the build gate; stamp them when the SME content lands. `related` backfill for the domain remains open. Remaining audience gaps repo-wide: those 6 placeholders + all 19 Build pages (DOC-1884, likely near-uniform dev) + the 3 shell stubs.

### Pending verification — DOC-1879
Product facts the schema cannot answer, awaiting team confirmation:
1. Usage-metrics "Additional account fee" row — name contradicts its own explanation.
2. Invitation email daily limit — five total sends vs original+five resends (three doc statements aligned to "five emails/day"; rejection description gives no number).
3. Bank-details page vs `type-and-level`: does main-IBAN assignment require `Unlimited`, or can it exist at `Limited`?
4. Belgium local-IBAN bank codes (main + virtual) to replace the `ZZZZ` placeholder; distinguish the two "Check digits" rows.
5. Account-opened notification: three vs four routing options (consolidated table sides with the old template table = four).
6. Canonical contact term: "Strategic Account Manager (SAM)" (4 uses) vs "your Account Manager" (2 uses).
7. Web Banking `canOpenAccount`: API objects exist; Dashboard toggle + Web Banking creation-flow availability unconfirmed ("2026" claim in `multiple-accounts/shared-details-and-management`).
8. `coming-up.mdx`: three past-dated breaking-change notices (20 May, 21 May, 4 June 2026) — remove once confirmed shipped.
9. Billing hub's "billing module activated 1 March 2023" note — keep or retire (user decision).

### Pending verification — browser checks (not doable headless)
1. The nine sandboxed Figma embeds: confirm they still RENDER with `sandbox="allow-scripts allow-same-origin"` (attrs match the repo's own hardening precedent, but a blank frame would implicate the sandbox attribute). Separate from the delete-vs-replace decision above.
2. Visual density of the rebuilt flowmaps: the Accounts concepts spine (11 nodes, 41 branches) and the Accounts overview chain + spokes pair — JSON-valid and rule-correct, but three times larger than the Users model they follow. If either renders as visual soup, the fallback is trimming branches to sub-hub nodes only (record as a deliberate §4 deviation).

### Open platform decisions (to settle with the team)
1. Frontmatter `description`: §3 bans it, but llms-txt and the rail read it — either keep the ban (llms.txt ships bare links) or admit `description` to the contract deliberately.
2. Flowmap and Mermaid fences pass into the `.md` mirrors as raw JSON/code — hubs whose navigation lives only in a flowmap are unreadable to AI readers; decide whether hubs need a prose equivalent.
3. Vale enforcement: currently advisory with a near-empty vocab (2 entries); decide blocking levels and grow `vocab.txt`.
4. Path-picker audience tag labels: "Operators" (plural) vs "Developer" (singular) — pick one.
5. Figma iframes (nine repo-wide): ALL now carry `sandbox="allow-scripts allow-same-origin"` (interim security fix, 13 August 2026). The remaining decision is delete-and-replace vs keep — the Figma content can't be recreated as Mermaid without access to the designs.
6. Dashboard one-liner pages and promotions: the placeholder from-the-dashboard pages (closure/get-closure-info, ibans/get-info) AND the five Users get-* guides whose ledes name a Dashboard equivalent are ONE decision — promote to choosers, keep as pointers, or remove from nav. `accounts/guides/account-holders/get-verification-status` was PROMOTED to a chooser with a placeholder from-the-dashboard page (13 August 2026, user-approved) — the Dashboard equivalent is fully shipped (status details FRONT-281, `WaitingForInformation` requirements FRONT-1233, verification-requirements filter FRONT-1732) but undocumented, so the placeholder joins the others awaiting the same Dashboard-operations pass. Its steps are seeded from the FRONT tickets, not from a walkthrough — verify against the real Dashboard before publishing. `accounts/guides/documents/upload-transaction` was promoted the same way (13 August 2026, user-approved) — the Dashboard's transaction Supporting documents tab shipped August 2024 (FRONT-1068; Pennylane announcement October 2024) and its documentation debt was written off (DOC-728/DOC-776/DOC-651 all canceled). Caveat for the Dashboard-operations pass: the announced Dashboard flow uploads IN RESPONSE to a document request, while the API guide is proactive (`generateTransactionSupportingDocumentUploadUrl` creates the collection) — verify whether the Dashboard also allows unprompted upload before finalizing the chooser copy. Useful verified input for that pass: Johanna Maria Thies's "P9: Navigate your Dashboard" Notion article (pathways checked in the real Dashboard, August 2026). `ibans/add-virtual/from-the-dashboard` GRADUATED from placeholder using exactly that material (13 August 2026, user-approved): pathway Data > Accounts > [select] > Virtual IBANs > **+ New**, with the two `+ New` conditions as prerequisites (`dataAccount_write` Dashboard permission; account type `PaymentService` at payment level `Unlimited`); no screenshot yet (images decision pending). Current tally: FOUR placeholder pages (closure/get-closure-info, ibans/get-info, get-verification-status/from-the-dashboard, upload-transaction/from-the-dashboard). ALSO in this decision class: `accounts/guides/funding/get-info` (added 13 August 2026) — the Dashboard has listed funding sources with details since June 2022 (FRONT-83, In Production 3 June 2022; announced in the 7 June 2022 changelog as "Funding sources are listed in the dashboard"; support still routes partners there, e.g. the March 2025 Cegid thread), yet the guide's lede says "with the API" and no funding page mentions the Dashboard. Read surface only — the three funding WRITE guides are correctly API-only (add-source and initiate-request require user tokens, the former consent-gated: structurally Dashboard-locked; cancel-source is project-token-capable but the Dashboard offers no cancel action — FRONT has no ticket and Johanna's index lists none). Caveat for the pass: whether the Dashboard shows the funding transaction's release date (the rolling-reserve part of get-info) is unverified. Note Johanna's P9 article omits the Funding sources tab from its Accounts row — a second gap in her article alongside the missing closure-link copy action.

### Housekeeping tasks
- Rename `get-started/_partials/` → `get-started/partials/` during the Get Started pass (§1 naming rule).
- Several definition partials are glossary-only, not yet consumed on their owning concept pages per the §5 dual-consumption contract (e.g. `_iban`, `_account-funding`, `_billing` — the last added 13 August 2026 with prose lifted verbatim from `accounts/concepts/billing/index.mdx`, so no drift yet). Fold consumption into each domain's content pass; watch Term rebalance on insertion.
- Retrofit Cards' legacy "Status flow"/"Status definitions" split during DOC-1880 (§4 statuses shape).
- Retrofit Payments' empty-header badge tables during DOC-1881 (§4 reference tables).
- `_shared/partials/_transaction-statuses.mdx` now has a single consumer (`payments/concepts/transactions/statuses.mdx`) after the Accounts duplicate render was removed — retier during DOC-1881.
- Convert PVID/QES regional prose lists to the Expert-style country matrix during the identity-methods September edit (deferred 13 August 2026).
- Refresh or retire the local `~/Documents/api-reference` clone: its 22 May 2026 snapshot lags far beyond its date (entire March-beta onboarding API absent). Superseded as fast path by the GQL MCP (§10) — keep only if offline grep is still wanted.
- Capital-deposits guides hub: the three summary sections (update amount, update company, cancel) each render the same prereq partial as their leaf guide plus a one-line effect summary — deliberate dual-consumption, but first candidate for trimming if the hub is ever flagged as long (noted 13 August 2026).
- Onboarding requirements pages: `title` ("Requirements and fields") ≠ H1 ("Company/Individual onboarding requirements") — harmonize per the memberships precedent (title == H1, 13 August 2026) whichever way the team prefers.
- **Public onboarding links create/update split (18 June 2026 changelog, FRONT-1910):** Dashboard > Onboarding > Public links now has separate toggles for creating and updating accounts. Not yet reflected anywhere in the migrated tree — the onboarding hub links section (`accounts/guides/onboarding/index.mdx`), the `_public-onboarding-links.mdx` partial, and the create `from-the-dashboard` guides all predate the split (checked 13 August 2026). Internal review of FRONT-1910 (Nicolas Moreau) also flagged that the update-mode Dashboard wording lacks the data-exposure warning create mode has, and that the docs "Learn more" target should clarify it. Fold into the DOC-1879 Accounts content pass or the fork-alignment sweep below. Note the update mode is a *setting* in the Dashboard, but updating still happens via API or the shared onboarding link — there is deliberately no Dashboard UI for editing onboarding fields, so the update guides stay API-only.
- **Old onboarding API retirement (end of September 2026):** everything below retires with the previous onboarding mutations and queries. Per §10 freshness rules, confirm the removal actually shipped before deleting anything — deploys slip. The full list (inventoried 13 August 2026):
  - `accounts/guides/onboarding/migrate-api.mdx` — the migration guide itself; retarget its inbound entry in `redirects.js` when it goes.
  - The mapping tables — asymmetric homes: the company mapping is a standalone page, `accounts/reference/onboarding/company-onboarding-fields-api-mapping.mdx` (also listed in `company-onboarding-fields.mdx` `related`, the onboarding reference hub, and the domain reference hub — remove all three entries with it); the individual mapping is the `## API mapping {#api-mapping}` SECTION on the surviving `individual-onboarding-fields.mdx` page. Both render from partials `reference/onboarding/partials/_{company,individual}-api-mapping.mdx`, which retire with them (their only other consumers are in the preview tree below).
  - The `guides/onboarding/partials/_deprecated-mutation-timeline.mdx` partial and the deprecation admonitions on its six consumers: the onboarding hub, `manage-onboardings`, `company/update`, `individual/update`, and both create `using-the-api` guides.
  - The `docs/preview/new-onboarding/` tree (including `legacy-onboarding/`) — in no sidebar, but still crawlable via the md-mirror and sitemap (§11).
- **Docs v2/v3 fork alignment (deferred by decision, 12 August 2026):** this branch forked from live in June 2026; live Docs v2 kept evolving. Repo changelog stops at 7 May 2026; live has 18 June, 16 July, 30 July entries. During alignment, sweep ALL pages against live v2 and the post-May changelog entries. Drift found and already fixed in v3 (12 August 2026): `accounts/concepts/closure/reason-codes.mdx` June reversal (`DormantAccount` deprecated → `Inactivity` reinstated; `CapitalDepositCanceled` → `CapitalDepositWithdrawn` added; retroactive migration of pre–2 April closures). Fixed same day but absent from live v2 (inherited gaps, pre-fork): funding `FundingSourceStatus.Rejected` and `AccountVerificationStatus.PendingReview`, supporting-document reason-code table conflation — v2 needs these ported the other way.

### SME items (facts the docs can't state without confirmation)
1. Sandbox-vs-Live environment statements for every API example (§4 rule): applying the sweep requires per-mutation environment knowledge — currently only `accounts/guides/ibans/validate.mdx` carries a (data-provenance) note. Confirm a standard phrasing, then sweep Users and Accounts guides.
2. Export-user-data prerequisites: the trio has no prerequisites block because none are documented anywhere (mutation takes only `email`); confirm whether token-type or other prerequisites exist, then add the shared partial per §4.
3. Deactivate from-the-dashboard steps pending verification (`{/* TODO:SME */}` marker in place).
4. Create-onboarding prerequisites: the individual and company create `using-the-api` guides carry no prerequisites block, and neither does live v2 (checked 12 August 2026). The capital-deposits `create-case` guide has the same gap (checked 13 August 2026). Confirm the token requirements (project access token?), then add a shared partial per §4 — mirror of the export-prerequisites item above.
