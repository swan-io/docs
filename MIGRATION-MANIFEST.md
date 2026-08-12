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

## 10. Content Pass surgery catalog (settled 11–12 August 2026, Accounts round)

Detection heuristics and the settled fix for each recurring page disease. Precedents are all in Accounts.

### Splits and merges
- **And-title smell:** a concept page titled "X and Y" over two unrelated objects splits into one page per object, each paired with its guide via `related`. Precedent: "Statements and bank details" → `account/statements` + `account/bank-details`. Redirect the old URL to the PRIMARY successor; a redirect carries the fragment, so old deep links to the secondary's anchors land at the primary's top — retarget every internal deep link precisely before relying on the redirect.
- **Embedded status machine:** a status diagram + table living mid-page in a concept narrative extracts to its own statuses leaf (shape per section 4); the flow-owning page keeps its sequence diagram; the two pages exchange one-line pointers. Precedent: `account-holders/verification` → `verification-statuses` (auxiliary tables tightly coupled to one status, like `WaitingForInformation` requirements, move WITH the statuses).
- **Stub leaf:** a leaf of only bullet lists (~20 lines) merges into its hub with a redirect; hubs are the home of "why use this" content. Precedent: `multiple-accounts/benefits` → hub.
- **Model facts squatting on operational pages** move to the owning concept or hub: `versioning` → memberships hub; `remove-identification` → permissions; "Company accounts"/"Unlimited memberships" → memberships hub.
- **Reframed pages keep their slug** (rename title/H1/labels only) — a slug change would chain the legacy `topics/` redirect. Precedent: `resend-invitation` reframed "Send or resend...". Titles name the precise API object (invitation **notification**, not invitation).

### Misplacement detectors
- **Link-graph inversion:** if the concept that OWNS a fact links out "for all details" to a page that doesn't own it, the content is on the wrong page. Precedent: Limited-account transfer restrictions lived on `first-transfer`; moved to `type-and-level`.
- **Repeated per-item boilerplate:** N sections each restating trigger/configuration/template collapse to ONE shared section up front + a per-item delta line. Precedent: verification notifications (4 emails → `## Configuration` table + "Account information included" per email). Zero information loss: every varying cell must map to a delta line or an exception note.

### Anchor and retarget rules
- **Never delete an existing anchor**, even a no-op h1 anchor — readers share them (user rule, 12 August 2026). Keep section anchors stable on moves; when a section moves pages, it keeps its `{#anchor}` at the destination.
- **Batch retargets:** replace the LONGEST anchor first, and beware `\b` in regex — it matches before a hyphen, so `#verification-process\b` also hits `#verification-process-diagram`. Grep the sweep's own output for self-inflicted mangling, and remember changelog/ lives outside docs/ (grep both).
- After a retarget, re-read the LINK TEXT: text promising content the new target lacks ("limited accounts *and verification*") gets renamed to name the target.

### Meaning-preservation audit (end of every surgery round)
`git diff <session-start-sha>` and re-read every reworded hunk against the original. Known failure modes: softened consequences (dropping "automatically rejected"), narrowed/widened claims (options lists), flattened role names ("Account Manager" → "Contact us"), resend-vs-send semantics on limits. Deliberate deviations get flagged to the user and the domain ticket, never applied silently.

### Schema checks (expanded rule, 12 August 2026)
Any question the schema can answer gets checked proactively, not deferred to the ticket: status-to-object attribution (`Verified` is `AccountHolder.verificationStatus`, NOT an `AccountStatus`), field names and plurality (`Account.statements`, not `statement`), mutation/rejection existence, enum values. Fast path: grep the local clone `~/Documents/api-reference/docs/{enums,objects,mutations,queries,unions}/*.mdx` (values sit as `<b>Value</b>` between "Values" and "Member Of"). The clone LAGS live — an absence or discrepancy is only real after confirming on `api-reference.swan.io` via WebFetch (curl is blocked). Watch deprecation notes: live may hold BOTH a deprecated shape (`status: StatementStatus`) and its replacement (`statusInfo`); docs should match the NEW one.

### Freshness checks
- Future-tense feature sections ("will be available", "released in <year>") get cross-checked: against the schema (the object may already exist — `WebBankingSettings.canOpenAccount` does) and against the docs themselves (a "coming up" item whose page already shipped is an unambiguous fix).
- Past-dated "upcoming" notices (breaking-change dates that have passed) need confirmation the change actually happened before removal — deploys slip.

### Pending verification — DOC-1879 (as of 12 August 2026)
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

## 11. Platform contracts (mined from the full branch diff, 12 August 2026)

Mechanisms in `plugins/` and `src/theme` that impose authoring obligations. Each amends the cited section.

### Sidebar and category wiring (amends §2)
- Every domain sidebar MUST begin with a `doc(...)` overview item: `ia-nav` derives the navbar dropdown from it, `ia-sidebar-index-targets` uses it as the last-resort click target, and the `custom-sectionDropdown` `to:` in `docusaurus.config.js` must equal its route.
- A category with no `link:` is auto-wired by `ia-sidebar-index-targets.js`: click (and direct URL, via generated redirects) resolves to the category's own `<dir>/index` child if listed, else the nearest ancestor index. NEVER hand-write a redirect for a category URL — `categoryRedirects()` generates them (§8.5's "add redirects for every moved live URL" applies to moved PAGES only).
- All children of an index-less category must share ONE directory, or the generated redirect degrades (fires from the shallower common path, or not at all — the direct URL then 404s).
- To give a category a real landing page without `link:`, list its index as a child labeled "Overview" (get-started/become-a-partner precedent).

### AI-reader layer: llms.txt + .md mirrors
- The sidebar is the canonical set for `llms.txt`: a routable page in no sidebar is invisible to LLM readers (warns, never fails). A NEW top-level sidebar must also be added to the hardcoded `SECTIONS` list in `plugins/llms-txt/index.js`.
- Every non-underscore `.md(x)` under `docs/` is republished at `{URL}.md`, sitemapped, and advertised in robots.txt — no opt-out key. A draft page committed under `docs/` becomes a crawlable artifact.
- Any NEW MDX component needs a renderer in `plugins/md-mirror/mdToMarkdown.mjs` (+ `yarn test`), else mirrors degrade with "Unhandled component" warnings. Six mockup component names (AudienceMetaBox, LearningPathColumns, PathPickerCards, ConceptsGrid, RelatedProductsGrid, TypedRelTag) render as TODO comments — do not use them.
- Explorer badges must carry the REAL base64 query: the mirror decodes `?query=` into a `graphql` fence, so a stale badge ships a wrong example to AI readers.

### Glossary / Term mechanics (amends §5)
- Registration contract: the glossary heading needs an explicit `{#anchor}` (that anchor IS the `<Term id>`), the section's first `<Component />` must be the imported definition partial, and the partial's FIRST SENTENCE becomes the tooltip — write it to stand alone. Singular aliases (`iban`→`ibans`, ...) are hand-registered in `plugins/ia-glossary-terms/index.js`.
- `docs/_shared/definitions/` is its own tier: one file per term, dual-consumed by the glossary AND the owning concept page so the two can't drift.
- An unknown or typo'd `<Term id>` renders as PLAIN TEXT — no link, no tooltip, no build error. A Term pass ends with a grep audit of ids against glossary anchors, not just a green build.

### Silent-failure audit (run at the end of every pass)
Beyond §8's images and anchors, the production build does NOT catch: unknown `<Term id>` (plain text); malformed flowmap JSON (page-level error box — visually check every flowmap); a partial imported from outside `docs/` (silently dropped by mirror and glossary); llms.txt resolution warnings; md-mirror "Unhandled component" warnings; Vale (advisory only — no CI hook, no yarn script; run `vale` manually and extend `styles/Google/vocab.txt` for Swan nouns instead of rewording them). Rail/route errors THROW only in production builds — `yarn start` merely warns, so all gates run on `yarn build`.

### Rendering facts worth knowing
- `related` rail links are re-bucketed by type in a fixed order and each renders the TARGET page's `title` — authored order survives only within a bucket; to change how a related link reads, retitle the target.
- The site is light-mode only (toggle removed): one set of screenshots and diagram colors.
- Mermaid gets a built-in full-screen affordance (large sequence diagrams need no splitting) and output is DOMPurify-sanitized to the SVG profile (+`foreignObject` for `<br/>` labels).
- Headingless tab panels become linkable with `<TabItem id="...">` — anchors into inactive tabs work.
- Any RETAINED iframe needs an explicit `sandbox` allowlist; the two legacy Figma embeds (company `requirements.mdx`, user `sign-up.mdx`) have none — delete rather than migrate (extends §4 external embeds).
- `FlowMap` and `Term` are global via `MDXComponents.js` like the badges — no import needed.

## 12. Content Pass doctrine additions (branch mine, 12 August 2026)

### Partials doctrine (amends §1)
- Extraction criterion: verbatim duplication on ≥2 pages, at ANY size (one sentence up to a 73-line prose+Mermaid+tables block). Near-identical-but-for-a-noun → ONE parameterized props partial (`{props.fullprocess}`), never two files.
- FOUR tiers: `docs/_shared/partials/` (cross-domain) → `<domain>/partials/` → `<task-group>/partials/` (e.g. `guides/merchants/partials/`, may nest) → colocated `_x.mdx` sibling (single consumer group). The folder is named `partials/`, underscore on FILES only; `get-started/_partials/` is the outlier to rename during its pass.
- Extract the WHOLE block — admonition wrapper, headings WITH their anchors, `<Term>` wraps — so anchors survive extraction; then re-run the §6 Term rebalance on every consumer page.
- Imports sit inline directly above their render point; only `_shared/definitions/` imports group at the top of the file.
- Placeholder pages use the shared `_wip-placeholder.mdx` (+ `{/* TODO:SME */}` marker), never bespoke wording.

### Detectors (extends §10)
- **Fat hub:** an overgrown concept hub sheds facet leaves, split by page TYPE — prose model → concept leaf, long API-object list → reference page — and keeps one-line pointers. Precedent: consent hub → `sca.mdx`, `server-to-server.mdx`, `reference/sensitive-operations.mdx`.
- **"When to use X" h2 on a guide** is conceptual exposition: move it to the owning concept; the guide's lede keeps a one-line pointer (SCA precedent).
- **Enum list outside its statuses page:** three or more backticked enum members in a bullet or cell collapse to a link to the statuses page. Deprecated values get one prose line under the statuses table — never a table row or diagram node.
- **Ops-guide candidate:** a single-path API guide whose task also exists in the Dashboard → `git mv` to `<task>/using-the-api.mdx`, add the chooser as `<task>/index.mdx` (the legacy URL then resolves to the chooser — NO redirect needed), add `from-the-dashboard.mdx`.
- **Tail pointer:** never append a "Review X" sentence after a sentence that already states the fact — make the fact itself the link. Amends §6: navigational links name the target; tail pointers link the restated fact.
- **Prerequisite self-sufficiency:** a guide leaf that links to another page for its prerequisites is a defect — import the shared partial locally under `## Before you start`.
- **`related` precision:** point `related` at the narrowest owning leaf, not the concept hub; reference leaves also list their parent hub.
- **Author short explicit `{#anchor}`s on every h2/h3** (short slug, not the heading's auto-slug) — this is what makes §10's anchor stability mechanically safe. If a section is genuinely rewritten, rename the anchor to match.
- **Sandbox pages are Guides, never Reference.** Two or fewer sandbox guides stay flat files; three or more get a `sandbox/` folder with its own hub.

### Open platform decisions (to settle with the team)
1. Frontmatter `description`: §3 bans it, but llms-txt and the rail read it — either keep the ban (llms.txt ships bare links) or admit `description` to the contract deliberately.
2. Flowmap and Mermaid fences pass into the `.md` mirrors as raw JSON/code — hubs whose navigation lives only in a flowmap are unreadable to AI readers; decide whether hubs need a prose equivalent.
3. Vale enforcement: currently advisory with a near-empty vocab (2 entries); decide blocking levels and grow `vocab.txt`.
4. Path-picker audience tag labels: "Operators" (plural) vs "Developer" (singular) — pick one.
5. The two legacy Figma iframes: delete or add `sandbox` allowlists.
