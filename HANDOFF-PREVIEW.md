# Handoff — Preview section candidates (11 September 2026)

For the session covering the Preview / Upcoming features topic. Produced from a check run on branch `DOC-1834/migration` while settling the Cards `card-fraud-types` stub (that page was NOT a preview candidate: it was unwritten documentation of a shipped domain, and it has since been dissolved into `fraud-obligations#card`).

Standing rules apply: read `MIGRATION-MANIFEST.md` first; verify every capability claim against the live schema (Swan Partner GQL MCP), Linear, and Slack — the docs lag the product; never commit, the user handles git.

## 1. What the Preview surface is today

| Surface | File | State |
|---|---|---|
| Upcoming features page | `docs/preview/index.mdx` | "Preview" table is a "Nothing is in preview right now" admonition with a commented-out table template (`Feature / Description / ETA`). "Beta" table has one row: Account onboarding enhancements → `/preview/new-onboarding`, ETA **Q1, 2026** (stale, see §4). |
| Preview sidebar | `sidebars.js` → `previewSidebar` | "Preview" category is an intentionally empty grouping (`fillEmptySections` injects the "Nothing here yet" placeholder); "Beta" holds the new-onboarding tree incl. `legacy-onboarding/` (deprecated reference). |
| Navbar entry | `docusaurus.config.js` ~line 77 | Standalone eye-icon button to `/preview` (restored in DOC-1814). |
| Coming up | `coming-up.mdx` (repo root, excluded from the docs plugin) | Roadmap tip + collapsible "Upcoming breaking changes" list of four dated notices. |

Definitions the page itself gives: **Preview** = "features in active development, sometimes open for early testing"; **Beta** = "available for testing, feedback refines functionality before full release". A docs placeholder awaiting SME content is neither.

Manifest touchpoints: §11 (preview tree is in no sidebar but crawlable via md-mirror and sitemap); Appendix housekeeping item 8 (three past-dated coming-up notices); Appendix line ~440 (the `docs/preview/new-onboarding/` tree, including `legacy-onboarding/`, is slated to retire with the onboarding mapping partials — DOC-1720 "Consolidate preview and live onboarding field reference pages" is Published, check what it already did on `origin/main`).

## 2. Candidates found

### 2a. Dashboard single sign-on (SSO) — clear Preview/Beta candidate

- **Linear DOC-1913 "SSO Documentation"** (status External review, updated 11 Sep 2026): Feature State **PRIVATE BETA**; feature live date **10 Aug 2026**; target publication **15 Sep 2026**; PM **Natalie Czyzowicz**. Task list asks for a new page, suggested at legacy path `/docs/dashboard/sso.mdx`, title "Single sign-on (SSO)" — that path does not exist in the IA; the new home must be decided (get-started / Set up Swan? a Dashboard-operations surface?) and the ticket's suggested path should not be taken literally.
- **Slack #team-pim, 7 Aug 2026 (Natalie Czyzowicz):** "start the SSO self-onboarding release in early Sep after a successful manual beta with Lucca … slow release before we announce this feature is available globally"; asks PIM for Tier 0/1 partners with teams abroad (SMS delivery issues) to seed the release.
- **Slack #proj-dashboard-sso, 11 Aug 2026 (Karine Larher):** asks whether GA is still planned for September; Lucca happy, no issues reported; Frontegg is the vendor (second contract year pending).
- Related Linear: SCA-2077 "Prepare Lucca SSO beta" (Done, 10 Jul), DSGN-311 "Dashboard SSO settings" (Completed), project "SSO & Dashboard Login" (SCA team), project "E2E Bypass for Lucca" (Completed 7 Sep).
- Nothing on the branch mentions SSO yet (`grep -rli "single sign-on\|\bSSO\b" docs` → empty).
- **Suggested handling:** when DOC-1913 publishes, add a Preview (or Beta — ask Natalie which label matches "private beta, slow release") row linking to the new SSO page, with the ETA Product gives for global availability. The Preview table row replaces the "Nothing is in preview" admonition per the in-file comment. Remove the row at GA.

### 2b. End-customer packages / pricing policies — borderline, no docs yet

- **Slack #proj-end-customer-packages, 3 Sep 2026 (Felix Guiony):** Abby is live in **closed beta** (~150 accounts, web-banking integration, no Packages yet); Abby plans to stay in closed beta until end of year and launch in January; tech side still delivering pricing differentiation.
- **Slack #module-end-customer-billing, 2 Jul 2026 (Felix Guiony):** "pilot phase due with our design partner starting September … no date for general availability, dependent on pilot success and approval of the General Pricing Framework".
- Linear: project "Pricing Policies" (PEX; PEX-1704 list pricing policies for an AccountHolder — Test Pending; PEX-1748 Ready to Go-Live), project "Multi-Account End Customer Fee" (PEX-1787 "Activate `AdditionalAccountSubscription` end to end for Abby (pilot partner)" — Backlog), PEX-1737 discovery on holder-level billing.
- No Documentation ticket exists. Partner-facing (affects what partners can bill end customers) but Product has not asked for public docs. **Suggested handling:** do not add a row unprompted; raise with Felix Guiony / Louis (Product Lead) whether a Preview row is wanted once the September pilot starts. Note distinct from the shipped **Card packages** (DOC-1611 epic Published; CARD-3084 "Remove feature flags" Done 19 Jun 2026) — those are GA and documented under `cards/`.

## 3. Things that look like preview but are not

- **Merchant payment methods gated per partner** (checks, online cards, Tap to Pay, SDD B2B, payment links): enabled per partner through **#merchant-beta-access** after approval by Louis-Alexandre Rosius plus one compliance approver (Marianna or Ambre), with intake questions (volumes, opt-in setup, KYM gate). Despite the channel name this is a permanent access model, not a rollout stage — Tap to Pay has been live at Indy and Accountable since June 2026 and is billed. **Docs gap, not a Preview item:** the branch's merchant pages barely say access is gated (only `payments/guides/merchants/in-person/cards/index.mdx:34` mentions requesting access). Worth a note to the Payments pass.
- **Digital card webhooks** — CARD-3259 "Introduce DigitalCard Webhooks", Ready to Go-Live (8 Sep 2026). Changelog material once shipped, not preview. Same for DOC-1925 "Add payment mandate webhooks to our docs" (Up Next).
- **KYC Autopilot** (beta opened 28 Aug 2026, #module-account-onboarding) and **Sardine** scoring (SCT pilot 17 Aug, Sardine SCT/SCT Inst go-live 7 Sep per #team-engineering) — internal ops tooling, invisible to partners.
- **Single Device Authentication** gradual rollout to OAuth2 flows from 25 May 2026 (changelog 7 May) — already announced as a rollout, check if complete rather than listing as preview.
- **Onboarding API / no-code onboarding** — already the Beta row; live since March 2026 (changelog 12 and 26 Mar). The 30 Sep 2026 legacy shutdown is in `coming-up.mdx` and is still future.

## 4. Stale items on the existing surfaces (fix candidates)

1. `docs/preview/index.mdx` Beta row ETA "Q1, 2026" has passed. Either drop the ETA, replace it with the GA/legacy-shutdown milestone (30 Sep 2026), or ask the onboarding PM for the real GA date. The `/preview/new-onboarding` link target is itself scheduled to retire (manifest Appendix ~line 440) — coordinate.
2. `coming-up.mdx`: three past-dated breaking-change notices (20 May, 21 May, 4 Jun 2026) — manifest housekeeping item 8, remove once confirmed shipped (check `origin/main` changelog and the schema for the `OnlineCard` rename).
3. `sidebars.js` comment above `previewSidebar` still says "Remnant only — identity documents are deferred to the users batch" — verify whether that deferral is done and drop the comment.

## 5. Not checked / to do

- **Public roadmap** (Notion, linked from both preview pages): the page is client-rendered and returned nothing headless. Open it in a browser and cross-check which items Product labels as beta/coming soon — that is the partner-facing source of truth for what belongs in the Preview table.
- Ask **Louis (Product Lead)** for the authoritative list of features currently live for a subset of partners; the Slack sweep above used keyword searches (beta, pilot, early access, general availability, feature flag) after 1 June 2026 and may have missed unlabelled staged rollouts.
- Nothing in this handoff has been applied to the branch. The only related change on the branch is the Cards `card-fraud-types` dissolution (recorded in `MIGRATION-MANIFEST.md` appendix and `DOC-1880-CARDS-PLAN.md`, 11 Sep 2026).
