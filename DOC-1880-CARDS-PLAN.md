# DOC-1880 — Cards Content Pass: reconciliation plan

Produced 1 September 2026 from a full pre-pass audit: 3 parallel page-by-page reviews (concepts 16 pages, guides 31 pages + 11 partials, reference 5 pages + overview + wiring), live schema verification via the Swan Partner GQL MCP, live v2 comparison via the Swan Docs MCP, git-history no-loss checks, and the mechanical sweeps from MIGRATION-MANIFEST.md §8. Execute per the manifest's reconciliation variant (§8); this file holds only Cards-specific state.

**Where Cards stands.** Pass 1 (structural IA) is done and healthy: sidebar complete and correctly shaped, 25/25 legacy redirects, frontmatter contract near-perfect (one stub excepted), images clean (20/20), llms-txt registered, md-mirror fully covered, no iframes, both dual-path trios wired with correct counterparts. The Content Pass has NOT started: **zero `<Term>` in the entire domain**, zero requirement/support badges, all three statuses pages on the retired "Status flow"/"Status definitions" split, both trios failing the §4 dual-path contract, and ~45 h2/h3 anchors missing (the 21 Aug anchor sweep covered Users+Accounts only).

**Verified no-loss note:** the two stub guides (`digital/cancel`, `sandbox-digital`) were equally thin in the legacy `topics/` source (checked via git at the deletion commit) — inherited debt, not migration regressions.

---

## Phase 0 — Decisions to settle (user/team) before the dependent phases

1. **Statuses node styling doctrine.** §4 says "canceled red"; Cards (virtual+physical) instead paints an "Irreversible" subgraph (`Canceling`) red with `Canceled` in the amber final subgraph, and digital has no red at all. The same red pair is an established idiom in `users/identifications/statuses.mdx` and `build/using-api/webhooks.mdx`, and 25 Aug sweep open item 10 already flags users' unstyled `Canceled` nodes. Bless the Irreversible idiom (and amend §4) or enforce the literal rule. Blocks part of Phase 3.
2. **Multi-variant API-guide shape** — the manifest's recorded open retrofit #1, now blocking four Cards pages (`virtual/add`, `physical/print`, `digital/add`, `physical/view-info`). Two conventions are live in the same domain: print anchors its per-variant h3s (`{#print-one-mutation}`), the others leave `### Mutation`/`### Payload` unanchored. Settle one shape (per-variant h2 + anchored h3 pairs, or Tabs). Blocks Phase 4.
3. **SRP splits scope.** Candidates, strongest first: `physical/print` (4 endpoints, 389 lines, 3 duplicated prereq blocks, 2 reference tables), `virtual/add` (4 endpoints, 2 of them fence-less), `digital/add` (two unrelated tasks: add-to-wallet vs rescue-stuck-provisioning). Recommend splitting these three per the task-family pattern (manifest §Appendix audience-coherence precedent); keep `physical/view-info` and `block-unblock` single-page with fixes. Note: card write mutations are user-token + consent-gated → **structurally Dashboard-locked (funding-guides precedent)** — the splits are SRP-driven, not audience-driven; no from-the-dashboard leaves for add/print.
4. **Cancel chooser promotions.** Live v2's "Navigate your Dashboard" (Johanna's P9, now published on live) confirms card cancelation is shipped Dashboard self-service: **Data > Cards > select the card > Cancel**, permanent, all card types — and explicitly states digital-card deletion is API-only. Promote `virtual/cancel` and `physical/cancel` to dual-path choosers (pathway is live-documented, so the from-the-dashboard leaves can be written directly, not seeded placeholders; screenshots pending the images decision). `digital/cancel` stays API-only, live-verbatim.
5. **`card-fraud-types` stub.** No schema enum exists (fraud appears only as transaction reason codes: `FraudSuspected`, `Fraudulent`); no live standalone page (live's fraud content sits in the Payments-owned "Card payments" page, plus a "Card disputes and chargebacks" support surface). Needs SME-sourced content or removal from nav until it exists (it currently ships to crawlers and llms.txt as a 5-line stub, violating §11). Settle together with the two Payments stubs (schemes, transaction-fraud-types). Interim if kept: convert to the shared `_wip-placeholder` + `TODO:SME` + `audience`/`related` frontmatter (§1 rule; the current bespoke blockquote also cites the wrong ticket, DOC-1814). **CORRECTION (11 September 2026): the "no live standalone page" premise was wrong** — live's "Common types of fraud" (`/partnership/protections/fraud/types`, Card section) already migrated to `get-started/become-a-partner/protections/fraud-obligations.mdx#card`. Decision superseded: leaf dissolved (see the execution record below and MIGRATION-MANIFEST.md appendix, same date).
6. **`sandbox-digital` stub.** Empty on live too (two heading-only sections). Either the Testing API supports digital-provisioning simulation (SME question) and the page gets real steps, or remove the leaf + hub entry until it does. The guides hub currently advertises content that doesn't exist.
7. **`reference/spending-limits` split.** The page is majority concept prose (definition, rolling-vs-calendar semantics, worked examples, hour-level aggregation mechanics) around a small lookup core. Recommend: new concept leaf (e.g. `concepts/spending-limits.mdx`, flat leaf next to card-formats) owning the model; reference keeps the terse tables (Swan-imposed limits, periods, affected-periods). The 25 Aug changelog links into `#hour-level-aggregation` — anchors move with their sections (§6).
8. **`configure-card-product` vs `design/standard` near-duplication.** Same four Dashboard steps written twice with conflicting button labels ("+ New card product" vs "Create a new card product"; "Submit for review" vs "Save") — at most one is right. Merge or re-split by axis, but the labels must be verified against the real Dashboard first (Dashboard-operations-pass class; note Settings > Cards may itself have changed — the Cap Dep revamp shipped 1 Sep 2026 proves Dashboard UI drift is live).
9. **`lifecycle/issue.mdx` classification.** Six `## Step N:` headings, zero own steps, bespoke `→` link convention — a nav page wearing a guide's clothes. Recommend folding into `lifecycle/index.mdx` (which is currently unreachable from the guides-hub flowmap — folding fixes both); legacy URL `/topics/cards/overview/guide-issue` redirect then retargets to the lifecycle hub.
10. **Emoji policy edge.** Country flags in prose are established (Accounts country-requirements, expert.mdx). Emoji in **tab labels** (`🖥️ Dashboard`, `🛡️ Identity protection` — 10 instances) and **headings** (`### 🇫🇷 France hub`) exist only in Cards; Users/Accounts have none. Recommend: strip from labels/headings, keep flags in prose; record the rule in manifest §4.

### SME items (push to DOC-1880 as ticket comments)
1. **Contradiction:** `physical/statuses.mdx:63` "use digital cards (**not virtual cards**)" vs `pin.mdx:68` "continue to use **both virtual and digital** cards" while a physical card is suspended. Schema can't arbitrate.
2. `physical/renew.mdx` payload semantics: example says the card "expires on 09/21" (a past date) and status stays `ToRenew` after a successful `confirmPhysicalCardRenewal` — both smell wrong.
3. `IncorrectPinCodeAttemptsExceeded` reason string on `PhysicalCardSuspendedStatusInfo` — not schema-resolvable; confirm value and the 24-hour unblock wait (`pin.mdx:66`).
4. Testing API: does digital-card provisioning simulation exist (for decision 6)?
5. `viewCardNumbersWithConsent` (iframe variant, "Conditions apply" in schema, undocumented on live too) — GA or gated? Document or explicitly skip (public-onboarding-mutations class, manifest pending-verification #12).
6. `InvalidShippingProviderRejection` appears only inside the renew explorer badge, nowhere in visible docs — confirm and disclose or re-encode.
7. Sandbox-vs-Live statements: the domain-wide sweep is blocked on the standard phrasing (manifest SME item 1); only `design/standard` states environments today.

---

## Phase 1 — Mechanical fixes (autonomous; no decisions needed)

**Schema-name errors (all live-verified):**
- `single-use-cards.mdx:36,58` — `AccountHolderSpendingLimit` → `SpendingLimit` (values `Monthly/Weekly/Daily/Always` are correct).
- `renewal.mdx:36` — `PhysicalCardRenewedStatus` → `PhysicalCardRenewedStatusInfo` (fields `estimatedDeliveryDate/shippingProvider/trackingNumber` are correct).
- `pin.mdx:26` — `ViewPhysicalCardPin` → `viewPhysicalCardPin`.
- `physical/view-info.mdx` badge encodes `mutation ViewPin` vs fence `mutation viewPin` — align (and re-encode).
- `virtual/add.mdx:35` — `CanManageCards` → `canManageCards`.
- NOT a bug: `digital/add.mdx:97` `status: "Pending"` — `DigitalCardFiltersInput.status` is a `String` in the schema; quoted string is correct.

**Typos/grammar:** `paramater` ×7 (`pin.mdx:35,36,38,41`; `print.mdx:31,107,216`); `delivery-and-shipping.mdx:82` "bring printed"→"being"; `_adding-cards-use-case-alert.mdx` "if they they"; `design.mdx:55` "want customize"; `design/standard.mdx:63` "guidelines to when"; `print.mdx:19` "physical cards help your users"; `physical/cancel.mdx:24` "cancelling"→"canceling"; `renewal.mdx:118` comma splice.

**Line-number citations vs fences (counted):** `print.mdx:105` line 4→5; `print.mdx:111` line 22→36 (copy-paste from the first variant); `activate.mdx:43` line 17→18, and both `activate` fences use `title="Mutation"` with NO highlight set while three steps cite lines — add highlights, drop the one-off `title=` form; `physical/cancel.mdx:53` prose cites lines 8+9, highlight is `{8}` only; `print.mdx:106` "lines 6-12" off by one (block closes line 13).

**Badge/fence drift (Class A):** `virtual/add.mdx:40` badge `$YOUR_REDIRECT_URL` vs fence `$REDIRECT_URL` — pick one, re-encode. Placeholder operation names: `physical/cancel.mdx:33` and the sandbox-physical badge both say `mutation MyMutation` — name them.

**redirects.js:** line 480 (`exchange-rate-outside-EEA`) and 484 (`what-type-of-cards`) both land on `/payments/concepts/cards/#3ds` — wrong; retarget 484 → `/cards/concepts/card-formats`, 480 → the exchange-rate home (live: Mastercard rate fact lives on the card payments page — find the precise anchor). Line 456 (SUVC 3DS question) better served by `/cards/concepts/virtual/single-use-cards`. Line 452 (insurance FAQ) → `/cards/reference/insurance-and-claims`. Move the stray `guide-renew` entry (line 539) into the DOC-1814 Cards block. Fix `insurance-and-claims.mdx:32` absolute self-link whose `#phishing` fragment is destroyed by the redirect — use the internal route `/get-started/become-a-partner/protections/fraud-obligations#phishing`.

**Anchor pass (~45):** all missing h2/h3 anchors per the audit inventories — concepts 6 (incl. `design.mdx` `### Black/Silver/Metal`, where `delivery-and-shipping.mdx:102` already links the `#black` auto-slug — add `{#black}` etc. to freeze them), guides ~37 (both `## Choose how to …` chooser h2s, six `## Step N:` h2s if issue.mdx survives, all bare `### Mutation`/`### Payload` per decision 2's shape, `cards/index.mdx` `## Concepts`/`## Find your path`, sandbox-digital's two h2s if kept), reference 1 (`insurance-and-claims.mdx:108`). Also convert raw-HTML headings to markdown: `get-card-package-tier.mdx` `<h3 id="query-main">`, `spending-limits.mdx` `<h3>🟣 Example…` mockups (see Phase 5).

**House style sweep (one pass, all 65 files):** "Note that"/"Please note that" ×9; italics-for-emphasis (~12, incl. two fully-italicized ledes/sentences on statuses pages); lowercase admonition titles (`:::tip card payments`, `:::warning renewal statuses`, `:::caution cancellation is irreversible` ×2, `:::info subject to approval`); empty `:::tip ` (`physical/cancel.mdx:76`); plain-future where present fits (~10); bold-vs-backtick status values (`activate.mdx` **ToActivate**/**Activated** → backticks); bare `$YOUR_CARD_ID`/`$YOUR_REDIRECT_URL` in prose (`virtual/view-info.mdx:30`); unbolded UI controls (`design/standard.mdx:42-43`, `configure-card-product.mdx:22`); package enums as prose ("Standard, Essential, or Premium" → backticked, matching `get-card-package-tier`); `## Step N:` heading style; broken ordered-list numbering (`update/from-the-dashboard`, `configure-card-product`, `design/standard` ×2, `renewal.mdx:127-132` where unindented bullets terminate the `<ol>`); missing blank lines around fences/h2s (`export/using-the-api:42`, `renew:64`); trailing whitespace (10 lines); `sandbox-physical` raw `<ol>/<li>` with markdown bold inside + `<img src={require()}` → markdown image; emoji per decision 10; sentence-case `# Sandbox: Digital cards` → "digital".

**Import placement:** `export/index.mdx` and `update/using-the-api.mdx` imports moved directly above render points.

## Phase 2 — Glossary + Term pass

1. **Fix the dead `{#cards}` id first** — the glossary heading (`glossary.mdx:152`) is followed by bare imports, so the plugin skips it as a section grouper and both `cards` and the hand-registered `card` alias silently resolve to nothing. Create `docs/_shared/definitions/_cards.mdx` (first sentence = tooltip), render it as the section's first component, dual-consume on the owning page (`cards/index.mdx` or `card-formats.mdx`) per §5.
2. **Register new ids** (definition partial + glossary section + explicit anchor + dual-consumption): `card-product`, `card-package`, `single-use-virtual-card`, `spending-limit` (home moves with decision 7), probably `digital-wallet`. `_card-product.mdx` (currently a single-consumer partial) becomes the `card-product` definition — retier to `_shared/definitions/`, don't inline (this resolves its partials-doctrine flag). Remaining jargon (cardholder, card contract, provisioning, shipping hub, PIN) uses the §5 cross-link escape hatch to the owning concept.
3. **Domain Term pass:** wrap the first unlinked mention per page across all ~54 content pages (ids `cards`, `cards-virtual/physical/digital`, `consent`, `sca`, `account-membership`, plus the new ids). SCA is unwrapped on at least 4 guides. Rebalance on every Phase 3/4 move (§5).

## Phase 3 — Statuses retrofit (§4 shape)

- All three pages: merge `## Status flow {#status-flow}` + `## Status definitions {#status-definitions}` → single `## Statuses {#statuses}`. Never-delete-anchors rule: keep the two legacy anchors attached to the diagram/table blocks; sweep inbound `#status-flow`/`#status-definitions` links (grep both slash variants + changelog, per §6).
- `digital/statuses.mdx`: add a lede (only Cards concepts page with none); split the single table into the two real enums with object attribution — `PendingDigitalCardStatus` (`ConsentPending/Pending/Declined`, on `PendingDigitalCard.statusInfo`) and `CompleteDigitalCardStatus` (`Enabled/Suspended/Canceled`, on `CompleteDigitalCard.statusInfo`) — schema-verified; drop the duplicate unlabeled `P -.-> E` edge; harmonize table-cell punctuation.
- `physical/statuses.mdx`: move the `ToRenew`/`Renewed` admonition after the table (§4); fix mixed arrow syntax (`<-.->` vs `<-..->`) and out-of-order edge; **absorb the renewal status machine from `renewal.mdx`** (§10 embedded-machine extraction — `ToRenew`/`Renewed` are real `PhysicalCardStatus` members currently absent from this page's table); add `cancelPhysicalCardRenewal` to the `ToRenew` next steps (16 July semantics, live-verbatim: called during `ToRenew`, card stays active until expiry then expires instead of renewing).
- `virtual/statuses.mdx`: real orienting lede (current one is an italicized side-fact); document the `Processing → Canceling` edge in the `Processing` row's next steps (only row without them, and the edge exists in the diagram).
- Styling per decision 1. Both virtual and digital statuses pages add the §4 one-line cross-link to the flow-owning page.

## Phase 4 — SRP surgery + dual-path retrofit (needs decisions 2-4, 7-9)

**Dual-path trios (both FAIL the §4 contract today):**
- Create shared prereq partials (`lifecycle/update/partials/_update-prereqs.mdx` or cards/partials tier): update trio's prereqs currently masquerade as steps 2-3 on the API leaf only; export trio has none anywhere. All three pages of each trio import the same partial under `## Before you start` (chooser) / `:::tip Prerequisites` (leaves).
- Chooser fixes: `{#choose}` anchors; update ops-card copy naming medium + use case; backing-concept links (`update` → `concepts/card-products` — today it links only the reference; `export` related lists a guide); kill the triple-restated card-settings pointer sentence (the partial + one chooser line replace it); export lede echo + same-page tail pointer.
- API leaves: `## Guide {#guide}` + `## Mutation {#mutation}` shape; move `## Spending limit updates` conceptual h2 off `update/using-the-api` (→ spending-limits concept per decision 7); align export slugs (`{#api-mutation}` → `{#mutation}`, keep old anchors); steps cite highlighted lines.
- Dashboard leaves: real ledes, mirror shape, one steps-anchor convention (`{#steps}` per Users).
- Rename export chooser `## Next steps {#next}` → the family's `## After you export {#after-you-export}` keeping `{#next}` (two same-domain inbound links).

**Concept surgery:**
- `renewal.mdx`: machine → statuses (above); dedupe the six restatements of the 10-week/8-week rule down to the table + one worked example; numbered steps in the table cell → pointer to `guides/physical/renew`; move `## Subscriptions` (ABU niche) last; fix H1 (gerund guide-voice) per title.
- `delivery-and-shipping.mdx`: and-title split — Netherlands Maestro fallback out (own leaf or the physical hub); resolve the provider-tables link-graph inversion with `reference/shipping-and-delivery` (one owner; recommend reference owns provider/hub lookup, concept keeps the model — also fixes the confusable near-identical page names); dangling `∗` on Nacex; orphan support line.
- `digital/index.mdx`: troubleshooting section (bold pseudo-headings) → `guides/digital/add` (it duplicates the statuses tip); certification procedure de-duplicated (stated 3×) and moved after the model; provisioning-options list stays.
- `concepts/index.mdx`: rebuild as spine-with-branches (§4/§5 — today it's a leaf-less pathway, wrong hub type, hiding all 9 leaves); `<CardsOverview />` prose gets a named heading.
- `cards/index.mdx` (overview): `## Concepts` → chain + spokes fence pair with intro prose (card product precedes/owns the card, so spokes' true-feeder condition fails — Accounts precedent); add missing `card-formats` sub-hub to a fence; fix both tracks' interleaving (concepts → guides → ≤1 ref last); one-sentence lede with Terms.
- `card-products.mdx` / `card-packages.mdx`: collapse the two near-empty pointer h2s to one-line prose pointers; dedupe the bundle sentence (3 copies); fix the `## Configure a card product {#card-product-configuration}` heading/anchor/content mismatch on the packages page; per-tier pricing table → badges or reference (with decision 7); `CardInsuranceSubscriptionStatus` inline machine gets a one-line home (values verified, no statuses leaf warranted — record as deliberate).
- `card-formats.mdx`: reorder (`## Card formats` first); drop the `## Card statuses` tail-pointer h2 (link inline instead).
- `single-use-cards.mdx`: fix "see warning above" link text + the duplicated 30-day fact (one home); keep `{#renewal-suv}` anchor (load-bearing) while renaming inbound text.
- `design.mdx`: resolve "two standard designs" vs Black/Silver/**Metal** (Metal is Premium-gated — restructure or reword); anchors from Phase 1.

**Guide surgery:**
- Splits per decision 3; cancel choosers per decision 4 (+ cascade fact: `physical/cancel`'s digital-cascade h2 content moves to the owning concept, matching how `virtual/cancel` already delegates).
- `physical/activate.mdx`: `## Methods` + `## Activation reminder notifications` conceptual h2s → owning concepts (activation model → physical statuses/concept; reminder config is a partner-notifications fact — nearest owner `get-started` notifications table, keep a pointer).
- `block-unblock.mdx`: add real fences + explorer badges (today: zero fences, 3 inline base64 links — invisible to the md-mirror); ATM outcome table stays but gets reference-table treatment; and-title accepted (operations are a true pair) — record as deliberate if kept.
- `physical/view-info.mdx`: fence + badge + payload for `viewPhysicalCardNumbers` (sibling parity); parameterize `_after-consent.mdx` (props: mutation name) — it currently states the wrong mutation on this consumer.
- `virtual/add.mdx`: fences + badges for the two SUV mutations (or their own leaves under the decision-3 split); drop the pure tail-pointer `## Print physical cards…` section; badge the two spending-limit-config fences (the `:288` fragment fence becomes a full operation or loses line numbers).
- `physical/renew.mdx`: badge + `showLineNumbers` for the `<details>` address query; import `_deliver-address-callout.mdx` instead of the inline near-duplicate (also clears that partial's single-consumer flag); **document `cancelPhysicalCardRenewal`** (new h2 or its own leaf: mutation + fence + badge + payload; 16 July semantics).
- `digital/add.mdx`: **document `addDigitalCards`** (batch, single consent flow — 16 July); split per decision 3; anchors + payloads for the rescue flow.
- `digital/cancel.mdx`: write the real guide (steps + fence + badge + payload for `cancelDigitalCard`; live-verbatim fact that Dashboard deletion doesn't exist).
- `print.mdx`: collapse the three prereq restatements to one shared partial + per-variant deltas (§10).
- Badge supersets (Class B ×6): apply the settled Accounts convention — keep the superset badge, ensure the "rejections (not shown)" disclosure line on every one (SME item 6 for the renew badge's unknown rejection).
- Partials: merge `_add-cards-use-cases` + `_adding-cards-use-case-alert` (footnote pair, same two consumers) and convert its `∗` marker per §4; hand-check `_packaging.mdx`'s partial-relative image path (§7.5).

## Phase 5 — Reference floors + hub polish

- `card-settings.mdx`: `<Req/><Opt/><Cnd/>` + `FieldRequirementsLegend` on the field table; "Update with" free-text column → two `<Yes/>/<No/>` columns (Dashboard / API); conceptual h2s (`International`, `Non-main currency`) fold into the table or the owning concept; `## Manage settings` Dashboard steps → `update/from-the-dashboard`.
- `shipping-and-delivery.mdx`: the `∗` optionality markers (3 encodings on one table) → a "Requirement" column with badges + one legend (the group-delivery-overridable fields are the `<Cnd/>` case, footnote → row detail or `<TableTip>`); consider Tabs for the France/Spain hub axis.
- `insurance-and-claims.mdx`: `—` negative cells → `<No />` (the md-mirror maps `<No/>` to "No"; a dash ships ambiguity to AI readers); one `SupportStatusLegend` near first use; fix the 4-space-indented tables inside TabItems; the 37-line claims-portal how-to → judgment (ops lookup vs guide leaf) — flag, don't force.
- `spending-limits.mdx`: per decision 7; replace the raw-HTML/emoji example mockups (silent md-mirror degradation) with standard markdown sections or Tabs.
- Reference hub: `desc` on all five lane items; Term in the lede. Guides hub: make the lifecycle sub-hub reachable (resolves with decision 9); revisit the "Across all cards" lane label. Sub-hub grids: add `desc` per item (six hubs; currently bare titles).
- `card-fraud-types` per decision 5.

## Phase 6 — Gates and closing sweeps

Production build green (three gates) after each phase; full §8 silent-failure checklist (images by resolver, inbound-anchor greps both slash variants + changelog, Term-id grep vs glossary anchors, flowmap visual check, mirror warnings, redirects fragment sweep, rail reciprocity, orphan sweep, dev-server restart discipline); §8 meaning-preservation checklist over every reworded hunk; freshness re-check of Slack `#announcements-product` + Linear "In Production" for cards items at pass end; then a residual page-by-page sweep mirroring the 25 Aug Users+Accounts one before handing the domain over.

**Sequencing:** Phases 1-2 are unblocked now and independent; Phase 3 needs only decision 1 (and can land the rest meanwhile); Phase 4 is the bulk and needs decisions 2-4 + 7-9; Phase 5 depends on decisions 5 + 7; SME answers can land any time. Everything routes through the standing rules: migrate-don't-rewrite (phrasing may improve, meaning and coverage never shrink), schema-check every API value (GQL MCP fast path), never commit — the user handles all git.

---

# EXECUTION RECORD — 1 September 2026

All six phases executed on branch `DOC-1834/migration`. **Production build green**: zero broken links, zero broken anchors, zero invalid redirect targets; ia-glossary-terms 45 terms, ia-rail-meta 450 routes, llms-txt 439 links, md-mirror 450 mirrors. 67 files modified, 4 deleted, 12 added (888 insertions / 1,016 deletions). Nothing committed — commits are the user's.

## Decisions as made (Phase 0, resolved autonomously per instruction, Users/Accounts as reference)

1. **Kept the Irreversible-red idiom** (virtual+physical statuses): it matches `users/identifications/statuses.mdx` and `webhooks.mdx`; manifest §4 amendment deferred to the user (manifest is user-owned).
2. **Multi-variant shape settled as print's convention**: per-variant h2/h3 with anchored `### Mutation {#x-mutation}` / `### Payload {#x-payload}` pairs — applied to `virtual/add`, `physical/print`, `physical/view-info`, `digital/add`. No Tabs.
3. **No task-family splits.** `print`, `virtual/add` kept single-page (variants are one task family); only `digital/add`'s genuinely unrelated second task was extracted → new `digital/transition-provisioning.mdx` (also absorbed the hub's stray troubleshooting block).
4. **Both cancel guides promoted to dual-path trios** (`virtual/cancel/`, `physical/cancel/`: chooser + from-the-dashboard + using-the-api), Dashboard leaves written directly from live's published pathway (Data > Cards > select the card > Cancel; shared `partials/_cancel-dashboard-steps.mdx`). `digital/cancel` rewritten as a real API-only guide with live-verbatim "only possible through the API".
5. **`card-fraud-types` converted to the shared `_wip-placeholder` + `TODO:SME` sourcing note** (kept in nav with "In development" desc; no `audience`/`related` — a placeholder with no h2 would trip the rail gate). **SUPERSEDED 11 September 2026: leaf dissolved** (page deleted, sidebar entry and hub Fraud lane removed, lede trimmed, `fraud-obligations` added to the reference hub's `related`; no redirect, URL never shipped). Reason: the fact already has a canonical home at `fraud-obligations#card` (migrated from live `/partnership/protections/fraud/types`), so the leaf violated Base rule 2; no schema enum or Linear work supports a standalone table. Details in MIGRATION-MANIFEST.md appendix.
6. **`sandbox-digital` same treatment**: `_wip-placeholder` + `TODO:SME` + the two section anchors preserved as empty h2s (`{#simulate-manual}`, `{#simulate-in-app}`).
7. **Spending limits split executed**: new `concepts/spending-limits.mdx` owns the model (periods, hour-level aggregation + examples as markdown h4s, lifetime); `reference/spending-limits.mdx` reduced to the terse lookup tables. All inbound (25 Aug changelog `#hour-level-aggregation`, `update/using-the-api`, `virtual/add`, `single-use-cards`) retargeted.
8. **No `configure-card-product`/`design/standard` merge** — the conflicting Dashboard button labels can't be verified from here (Dashboard-operations-pass class). Both pages polished in place; label conflict left intact and listed under SME.
9. **`lifecycle/issue.mdx` folded into `lifecycle/index.mdx`** as `## Issue cards end to end {#issue}` (+ per-step h3 anchors); page deleted; `/guide/issue-cards` and `/topics/cards/overview/guide-issue` redirects retargeted to `/cards/guides/lifecycle#issue`; guides-hub "Across all cards" lane now leads with the lifecycle hub (fixes its unreachability).
10. **Emoji policy applied**: stripped from all tab labels and headings; country flags kept in prose. Manifest §4 rule recording deferred to the user.

## Deliberate deviations from the plan text (all judgment calls, recorded per §10)

- **Retired zero-inbound anchors** (deviation class, inbound verified zero by grep both slash variants + changelog): `#status-flow`/`#status-definitions` (×3 statuses pages), `virtual/add#methods`, `card-products#packages`/`#insurance`, `card-packages#card-product-configuration`, `card-settings` International/currency h2s (folded into table cells). Anchors WITH inbound were kept or moved-with-section and every inbound retargeted (`#renew-statuses`/`#renew-suspended` → physical/statuses, `#maestro` → maestro-fallback, `#hour-level-aggregation`/`#limits-periods` → concept, `#activation-reminders` kept, export `{#next}` kept under renamed heading, `#black` given an explicit anchor, `#print-with-virtual` kept on virtual/add).
- **`_add-cards-use-cases` + `_adding-cards-use-case-alert` NOT merged** (plan suggested merging): they render at different points in their consumers; merged output would change page order. Both cleaned in place.
- **Print's reference tables kept on the page** (plan flagged for judgment): they're per-variant deltas, not standalone lookups.
- **`block-unblock` and-title kept**: suspend/resume are one toggle task (§4 task-family rule).
- **Insurance claims-portal how-to kept as reference section** (ops lookup, not a guide leaf) with anchors added.
- **Export leaves' `{#api-mutation}`/`{#api-payload}` slugs kept** (pre-existing, inbound unknown-external; renaming buys nothing).
- **Badge supersets (Class B) kept** with the "Add rejections (not shown)" disclosure step on each.
- **Renewal page**: statuses/suspended content absorbed by `physical/statuses.mdx`; `renewal.mdx` kept as the process concept with new `{#renew-opt-out}`; `maestro-fallback.mdx` extracted from delivery-and-shipping (and-title split).

## Schema-verified corrections applied (Swan Partner GQL MCP)

`addCard` permission = `canManageCards` (was wrongly canManageAccountMembership); post-SCA virtual status = `Enabled` (was nonexistent `Activated`); `SpendingLimit`, `PhysicalCardRenewedStatusInfo`, `viewPhysicalCardPin` type/field-name fixes; digital statuses table split by owning enum (`PendingDigitalCardStatus` vs `CompleteDigitalCardStatus`); shipping-and-delivery Requirement column verified against `CompleteAddressInput`; **NOT-a-bug confirmed**: `status: "Pending"` digital filter is a String in schema — quoted form is correct, do not "fix". New coverage: `addDigitalCards` (batch, single consent, 1-hour validity), `cancelPhysicalCardRenewal` guide section + fence + badge, `viewPhysicalCardNumbers` fence + badge, real suspend/resume fences.

## SME items — final list (plan items 1-7 all still open, plus one new)

8. **Nacex lost footnote**: legacy delivery-and-shipping had a `∗` on Nacex whose footnote text was already missing pre-migration; the dangling marker was removed — the original qualification needs SME recovery.

(Existing items unchanged: suspended-card virtual-usability contradiction pin.mdx:68 vs physical/statuses — both texts left as-is; renew payload "09/21"/`ToRenew` semantics; `IncorrectPinCodeAttemptsExceeded` + 24-hour wait; Testing API digital simulation; `viewCardNumbersWithConsent` scope; `InvalidShippingProviderRejection` disclosure; sandbox-vs-live phrasing sweep; configure-card-product vs design/standard Dashboard labels → Dashboard-operations pass.)

## Gates + sweeps (Phase 6, all run 1 Sep)

Build green (see header). Term-id grep: all 9 ids used in Cards resolve to glossary anchors (5 new definition partials in `_shared/definitions/`, glossary Card section rebuilt — dead `{#cards}` id fixed). Orphan sweep: zero. Flowmap JSON: all Cards fences parse. Redirect fragment sweep: all 3 `/cards` fragment targets exist. Stale-reference greps: zero hits for deleted pages/partials and retired anchors. Content-absorption spot checks (11 markers): all pass. Freshness re-check at pass end: Slack `#announcements-product` — nothing card-related since 20 Aug; Linear — only CARD-3102 (renewal prevention = already-documented `cancelPhysicalCardRenewal`).

## Remaining opens (user-owned)

- Commit/push (user handles all git).
- Manifest amendments (Irreversible-red idiom blessing, emoji rule, multi-variant shape) — manifest is user-owned this branch.
- SME items 1-8 → DOC-1880 ticket comments.
- Screenshots for the new from-the-dashboard cancel leaves (pending the images decision).
- Dashboard-operations pass for the configure-card-product / design/standard label conflict.
