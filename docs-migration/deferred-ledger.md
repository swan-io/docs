# DOC-1814 — deferred ledger

Items intentionally not finished in their originating batch, with what unblocks them and where they land.

| Item | Waits on | Target batch |
|---|---|---|
| `partnership/document-center/identity/*` (index, expert, pvid, qes) — kept live under `/partnership/`, sidebar remnant, 4 v2 redirects NOT spliced, inbound/chains untouched | users IA being built out (identity-methods reference) | users |
| Fraud-type detail (`#ato/#card/#ceo/#invoice-billing/#phishing`) currently verbatim on `become-a-partner/protections/fraud-obligations` | `cards/reference/card-fraud-types` + `payments/reference/transaction-fraud-types` pages authored | cards / payments |
| `_report-fraud` partial — promoted to `become-a-partner/_partials/`; needed again by the fraud-type carve | promote to a **global** shared partial location when the fraud-type carve runs (don't move solo) | cards / payments |
| `#restricted-businesses` [C] — carved onto `licence-regulatory-status` (~48 lines, 2 tables); page-worthiness flagged | N16 preview/IA question on whether it becomes a standalone page + sidebar lift | N16 decision |
| `language-cards` — "Physical cards & membership language" 3-step procedure left on `accounts/concepts/memberships#language-cards` | decision to spin out a dedicated card guide | cards (idea) |
| `cards/card-packages/index` self-domain URL `https://docs.swan.io/partnership/protections/fraud/types/#phishing` left as-is (redirect-covered) | cards batch (repoint to `…/become-a-partner/protections/fraud-obligations#phishing`) | cards |
| **PM flags — partnership/compliance owner:** F1 (export CSV column set, no "role"), F2 (7-day download link, "five invitations/day", `InvitationSent`, forked-WB **March 12 2026** date); batch-2 compliance (per-country company-registration docs, proof-of-address table, ORIAS steps, FGDR €100k, 5-yr retention, GPG key) | owner confirmation of currency | n/a (review) |
| **PM flags — dev-tools (batch 3B):** API infra/product claims not in GraphQL schema — endpoint URLs, rate limit (2,000 req / 5 min), Sandbox operation limits (complexity 1000 / depth 15 / concurrency 5), session TTLs (Dashboard 72h, Web Banking 5min), webhook event-type names, idempotency-key behavior | engineering/PM confirmation | n/a (review) |
| SME ×6 — `set-up-swan/{connect-mobile,data-model,swan-access}` + `integration-by-segment/{accounting-platforms,expense-management,meal-cards}` (SME admonition + `{/* TODO:SME */}`) | subject-matter experts; content lands during private beta | owners TBD |
| Get Started landing copy finalization (`get-started/index` lede + path framing) | content pass on the section landing | get-started polish |
| `test-tools-guide` fuzzy — `developers/tools/guide-test-tools` → `dev-tools/tools/test-tools-guide`; H1 retitled "Test tools guide" (was "Work with Swan tools") | sanity-checked, looks correct; confirm title preference | n/a (note) |
| Auth 4→1 merge duplicate step anchors (`#get-token`, `#request-token`, `#get-credentials` appear in both project & user guide sections) — auto-deduped by Docusaurus, not externally referenced | de-conflict if ever linked deep | dev-tools polish |
