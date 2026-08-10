# Domain migration manifest

Template extracted from the **Users** domain (PR [#671](https://github.com/swan-io/docs/pull/671), branch `DOC-1834/migration`), the finalized reference slice.
Apply it systematically to each remaining product domain (Cards, Payments, and the Accounts reconciliation).

This manifest covers STRUCTURE and PROCESS only. Prose-level rules live elsewhere and apply on top: the Swan Style Guide and Glossary (terminology, casing, plain English), and the house-style hard rules in the IA playbook. This document intentionally does not restate them.

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
    sandbox-<thing>.mdx              # Sandbox simulation guides
  reference/
    index.mdx                        # Reference hub (lanes flowmap by lookup group)
    <lookup>.mdx or <lookup>/        # Terse lookup tables
  partials/_<name>.mdx               # Domain-local shared fragments (underscore prefix)
```

Rules:

- The **folder types the page**: `/concepts/`, `/guides/`, `/reference/` drive the Concept/Guide/Reference chip and icon. No page-type frontmatter key exists.
- Partials have THREE tiers (all `_`-prefixed, excluded from routing), scoped as narrowly as possible:
  - Cross-domain: `docs/_shared/partials/` (e.g. `_identifications-table.mdx`, imported by `users/reference/identity-methods/index.mdx`).
  - Cross-section within a domain: `<domain>/partials/` (e.g. `users/partials/_deactivate-reqs.mdx`, imported by all three deactivate pages).
  - Sibling-only: colocated next to its consumers (e.g. `users/guides/consent/_s2s-replace-key.mdx`, `users/reference/identity-methods/_intro-id.mdx`).

  Relocate any partial imported from `docs/topics/` **before** deleting the legacy folder.
- Status machines: the full state machine (diagram + definitions table) lives on ONE page; concept and guide pages link to it, never duplicate it.

## 2. Sidebar block (`sidebars.ia.js`)

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
- Keep slugs stable; a moved live URL needs a hand-added entry in `redirects.js` (no chained redirects).

## 3. Frontmatter contract

Only these keys, ever: `title`, `audience` (dev/ops, scalar or list), `related` (list of resolving routes), `counterpart` (single route, optional `counterpart_label`), `rail: false`. Never `sidebar_label`, `sidebar_position`, or a page-type key.

`counterpart_label`: default to OMITTING it. Without a label, the rail's "Also available" card shows the target's title plus an automatic context line (the target's parent page title), which is exactly right for dual-path siblings. Setting a label replaces the title AND suppresses the context line (`src/components/rail/Counterpart.jsx`), so a label must be a self-contained phrase naming action and medium ("Deactivate with the API", never "Using the API"). Use it only when the counterpart is not a sibling or the target title can't stand as a card title. Never exercised in Users; first use pilots it.

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

Any page with rail metadata needs at least one real h2/h3 (build throws otherwise).

## 4. Page shapes (copy from Users)

### Domain overview (`<domain>/index.mdx`) — model: `docs/users/index.mdx`
1. Frontmatter title = domain name; no H1 in body (or H1 == title).
2. `<p className="ia-lede">` one-sentence identity of the domain, with `<Term>` on first jargon.
3. `## Concepts` + a `graph`/`spokes` flowmap of the domain's main concepts.
4. `## Find your path` + a `tracks` flowmap: one track per audience (`Developers`/`dev`, `Operators`/`ops`), each item typed `Concept`/`Guide`/`Ref` with a one-line desc.

   Tracks are CURATED (settled and enforced 6 August 2026): aim for 5–7 items per track, hard ceiling 7; order as a first-session journey (ALL concepts, then guides, then AT MOST one reference, last — no interleaving; a track with no first-session lookup table has no Ref item, like the Users operators track); select by "needed in the first session" and "highest-traffic tasks"; every item must also be reachable through the section hubs (tracks are a shortcut, never coverage). All four existing domain overviews comply.

### Concepts hub (`concepts/index.mdx`) — model: `docs/users/concepts/index.mdx`
H1 "<Domain> concepts" → ia-lede → one section per model cluster, each with its own heading and a flowmap that fits the content (Users: `spine` layout, one node per concept sub-hub with its leaves as `branches`). Never leave a flowmap headingless.

### Guides hub and Reference hub — models: `docs/users/guides/index.mdx`, `docs/users/reference/index.mdx`
H1 → ia-lede → `## In this section` → a `lanes` flowmap, one lane per task/lookup group. These are honest nav cards; don't dress them as a flow. Coverage is CURATED, not mechanical: list what a reader would look up directly; leaves under a sub-hub may be represented by the sub-hub entry (the Users reference hub lists Identity methods + Recommendations, not Expert/PVID/QES individually). Curation still needs a completeness check: every sidebar leaf must be reachable from a hub entry either directly or through its listed sub-hub.

Section-hub `title` is the bare section name (`Concepts`, `Guides`, `Reference`); the H1 is domain-qualified (`# Users concepts`). They intentionally differ.

### Concept sub-hub (`concepts/<concept>/index.mdx`) — models: `docs/users/concepts/{user,consent,identifications}/index.mdx`
H1 == title → ia-lede → the concept's own model in prose (this page OWNS the shared facts; facet h2s preview in 1–3 sentences and link to the leaf page) → a CLOSING `## In this section` pathway flowmap listing the leaves. All three Users sub-hubs end with this pathway. Hub with only one leaf: no pathway (30 July 2026 decision).

### Statuses page — model: `docs/users/concepts/user/statuses.mdx`
One Mermaid `flowchart` + one definitions table per status machine; diagram nodes and table rows must agree. Backticked statuses are real GraphQL enum values (verify against the schema, never diagrams/prose). Node styling: start grey `#D4D3D5`, final-status subgraph amber `#fffdf4`, canceled red. Access/side-effect caveats go in an admonition after the table.

Page shape (settled 7 August 2026; Accounts complies): H1 → one-line lede → a single `## Statuses {#anchor}` section holding the diagram and table. Pages tracking several machines use one named h2 per machine, and any page-level overview flowmap gets its own h2 — never left headingless under the H1. No API sequence diagrams on statuses pages: a flow diagram lives on the page that owns the flow (the concept sub-hub or the flow's leaf concept, e.g. `accounts/concepts/onboarding/index.mdx`, `accounts/concepts/memberships/inviting.mdx`), with a one-line cross-link from the statuses page. Cards' legacy "Status flow"/"Status definitions" split predates this rule and is retrofitted during the Cards pass (DOC-1880).

### Dual-path guide (Dashboard + API)
Three pages, always:
- **Chooser index** — model: `docs/users/guides/user-operations/deactivate/index.mdx`: ia-lede → `## Choose how to deactivate` with `ia-path-picker`/`ia-path-option` cards (audience tag + name + desc) → `## Before you start` with shared prerequisites imported from a partial → link to the backing concept.
- **`using-the-api`** — model: `.../deactivate/using-the-api.mdx`: prerequisites in a `:::tip Prerequisites` admonition (importing the same partial) → `## Guide` numbered steps → `## Mutation` with the `explorer-badge` link directly above the `graphql` fence (`showLineNumbers`, highlight the lines the steps reference).
- **`from-the-dashboard`** — mirror shape with Dashboard steps and screenshots.

Shared prerequisites live in ONE partial imported by all three pages; never restated.

### Single-path API guide (get-list, get-info, ...)
Lede → prerequisites → numbered steps → query/mutation fence with explorer badge. State Sandbox vs Live in every example.

### Reference table page
Terse. Field tables: `<Req/><Opt/><Cnd/>` on every row + one `<FieldRequirementsLegend/>` near first use. Feature/support tables: `<Supported/><Unsupported/>` + `<SupportStatusLegend/>`; `<Yes/><No/>` for binary cells. Tabs for per-variant content (country, process, Sandbox vs Live).

Eligibility and other binary markers are ALWAYS a table column with `<Yes/>`/`<No/>` cells and a column header naming the property; never a bespoke inline symbol on list items (settled 6 August 2026: the former ⮂ marker in `users/reference/sensitive-operations.mdx` was converted to a "Server-to-server" column). The same applies to requirement badges: the `<Req/><Opt/><Cnd/>` column is headed "Requirement", never left with an empty header (settled 6 August 2026; empty-header tables in Payments predate the rule and are retrofitted during that domain's pass). Badge components are global via `MDXComponents.js`; no import needed.

### External embeds
Do not carry external iframes (Figma and similar) into migrated pages for new domains; replace with a Mermaid diagram or an image. The remaining Figma embed in `users/concepts/identifications/index.mdx` is scheduled for removal in a separate later task.

## 5. Finished-page floor (per type)

- **Every page:** `audience`, (almost always) `related`, ≥1 `<Term>` at the first UNLINKED jargon mention (register new ids in the glossary FIRST; if the first mention is already a cross-link, keep the link, no Term). If a page's jargon has no glossary entry, either register the id or make the first mention a cross-link to its owning concept page (`accounts/concepts/closure/communications.mdx` is the precedent, 7 August 2026). Thin operational leaves (export, get-list, Dashboard variants) with no unwrapped jargon legitimately carry zero Terms.
- **Domain overview:** concepts spokes flowmap + audience tracks flowmap.
- **Concepts hub:** relationship flowmap of the domain model.
- **Guide showing a mutation/query:** explorer-badge link above the fence (no API call → no link).
- **Reference field table:** badge on every row + one legend.
- **Guides/reference hubs:** lanes flowmap from which every sidebar leaf is reachable (directly or via its listed sub-hub).

## 6. Cross-linking rules (SRP + DRY)

- One canonical home per fact: concepts → reference for tables; guides → concepts for the why; restrictions live on the owning concept.
- Chooser pages and counterpart pages link both ways (`counterpart` frontmatter drives the rail).
- Link text names the target page; never "above/below/previously".
- Sub-hub previews its leaves in one line each, then links; leaves link back to the parent and sideways to guides/reference via `related`.
- Sibling section hubs cross-reference each other in `related` (concepts ↔ guides ↔ reference).
- When content moves between pages, re-audit `<Term>` wrapping on BOTH pages: the move can strip the source page's only wrap of a term or duplicate the target's. Wrap the new first mention on the source; unwrap the now-duplicate mention on the target. Also re-check inbound `#anchor` links to any heading the move removes or renames (anchors only WARN in the build).

## 7. No-loss gate (run per domain, before deleting `topics/`)

1. **Inventory the legacy source:** list every file under `docs/topics/<domain>/` plus every shared partial/definition it imports.
2. **Map every heading:** for each legacy page, map each h2/h3 (and each table, admonition, diagram, footnote) to its destination route + anchor. Unmapped item = blocker, not a judgment call.
3. **Diff-read after the move:** compare the migrated page against its source; flag anything dropped, weakened, or merged away. Facts needing verification become comments on the domain's Linear ticket, not silent edits.
4. **Partials audit:** every `import ... from '..._*.mdx'` in the new tree resolves after the `topics/` cutover (all three partial tiers).
5. **Image audit:** resolve every relative image path by hand or script; broken image paths do NOT fail the build.
6. **Redirects:** every legacy live URL has a redirect to its new canonical home.
7. Only then delete the legacy folder.

## 8. Per-domain order of operations

Pre-flight: confirm canonical branch; confirm the authoritative migration map (the csv may not exist in the repo — verify, don't assume); confirm legacy source under `docs/topics/<domain>/`; decide the partial-relocation target; confirm `sidebars.ia.js` will get the full tree; confirm a `concepts/<domain>/index.mdx` hub exists (create before the flowmap pass); confirm needed glossary terms are registered.

**Accounts variant:** Accounts is already migrated (no `topics/` source), so it follows a RECONCILIATION pass instead: diff every Accounts page shape against the Users template (hub shapes, closing pathways, frontmatter, floors) and bring it into line; the no-loss gate (section 7) applies to any content moved during reconciliation, minus the `topics/` steps.

**Pass 1 — structural IA:**
1. Build the sidebar block (section 2) and the folder skeleton (section 1).
2. Move content near-verbatim into the correct folder (folder types the page).
3. Fix links to resolving routes; align terminology with the Glossary.
4. Set frontmatter per the contract (section 3).
5. Add redirects for every moved live URL.
6. `yarn build` green after every change (broken links, unresolvable related/counterpart, and rail pages without h2/h3 all THROW). Two silent-loss vectors the build does NOT catch: broken image paths, and `#anchor` mismatches (WARN only) — verify both by hand whenever content moves. Vale style linting (`.vale.ini` + `styles/`) applies on top of the build; run it before handing pages to review.

**Pass 2 — Content Pass (rollout by leverage):**
1. Rail-metadata backfill (audience first, then related).
2. Explorer links + Tabs on API guides.
3. Reference-table badges + legends.
4. Term pass: wrap the first unlinked jargon mention per page across the domain.
5. Hubs: create/upgrade concept hubs and flowmaps (recipes in section 4).
6. Clearer phrasing with ZERO information loss; DRY enforcement via cross-links; SRP splits where a page mixes concerns.
7. Quality sweep (lede problems, heading/content mismatch, admonitions splitting lists, house-style misses, contradictions, enum casing verified live, malformed Mermaid).

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

Leaf concept pages need no flowmap; only hubs and the domain overview do.
