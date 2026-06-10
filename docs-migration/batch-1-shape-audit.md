# Batch 1 — shape audit: memberships cluster vs IA spirit

Scope: 13 batch-1 pages + `accounts/index` (View 2 landing). Read-only on all content; this file is the only write.
MCP note: the named **docs** and **schema** MCP servers are **not connected this session**. Substituted: local `api-reference/docs` (generated GraphQL reference) for schema, and `WebFetch` against live `api-reference.swan.io` where the local repo is stale. Citations point to those.

## Executive summary (≤15 lines)
1. The **export split is the model citizen**: decision-grade `index` (path-picker, "What's included", "Before/After you start") + two audience-tagged children with counterpart links and Related. It is exactly the mockup spirit.
2. The **8 operational guides are correctly small and single-concern**, but uniformly **lack chrome**: no `## Related`, no audience tag, no concept/reference back-links beyond a couple. That's the biggest gap — all [D] additions, no rewrites.
3. **`accounts/concepts/memberships` is a true concept hub but carries two reference-grade sections** — `#country-req` (per-IBAN field matrix) and `#validation` (name regex/format rules). These belong in Reference [B], not on the concept.
4. **`change-admin` is the one bloated guide**: walkthrough + statuses + reasons + documents + limitations + a full API-reference block — operational + reference fused. Reshape/carve [A]/[C].
5. **Schema-verified correction**: `AccountMembership` has **no `role`** (permission booleans + `legalRepresentative` only); "role" in `export/index` "What's included" and the `accounts/index` dev path step is schema-false [E].
6. **Schema verified-true**: `exportAccountMembershipData` (input/filters/`ExportDataSuccessPayload.exportId`), `addAccountMembership` args incl. `canManageCards` nullable (matches the "technically optional" note), and `sendAccountMembershipInviteNotification` **exists live** (absent from the stale local repo).
7. Mesh is mostly sound (concept↔reference both ways; concept→all guides); missing edges are reference→guides and most guide→Related.
8. **5-vs-7 concept-diagram question: findings are neutral.** Memberships is one of the 5 nodes shown and is correctly wired; carving `#country-req`/`#validation` to Reference adds **no** concept node, so nothing here pushes the diagram from 5 toward 7.

## Per-page verdict

| Page | Verdict | Why (one line) |
|---|---|---|
| `accounts/index` (View 2) | matches-spirit | Concept diagram + dual-audience paths + Related products; only "roles" wording [E2] and the 5-of-7 diagram are notable. |
| `accounts/concepts/memberships` | carve-to-reference (+ reshape) | True hub, but `#country-req` + `#validation` are reference-grade tables/rules. |
| `accounts/reference/membership-permissions` | matches-spirit | Clean reference (matrix + grant/cards/none) + Related→concept; add reference→guide edges [D3]. |
| `…/guides/memberships/add-one` | matches-spirit | Small, API-focused, prereq present; needs Related+tag [D], H1↔label [A]. |
| `…/add-multiple` | matches-spirit | Same shape as add-one; same gaps. |
| `…/update` | reshape-within-page | Generic `Guide/Mutation/Payload` headings; needs Related+tag [D], H1↔label [A]. |
| `…/disable` | matches-spirit | Cohesive; links to suspend-resume; add Related [D], H1↔label [A]. |
| `…/suspend-resume` | matches-spirit | Cohesive op-pair (one task); add Related [D], H1↔label [A]. |
| `…/resend-invitation` | matches-spirit | Well-formed; H1 verbose [A]; add Related+tag [D]. |
| `…/fix-binding-error` | matches-spirit | Concept link present; add Related [D], H1↔label [A]. |
| `…/change-admin` | reshape + propose-structure-change | Operational guide fused with statuses/reasons/docs/limitations + full API reference. |
| `…/export/index` | matches-spirit | Decision-grade landing; only "role" item [E1]. |
| `…/export/from-the-dashboard` | matches-spirit | ops tag + counterpart + Related. |
| `…/export/using-the-api` | matches-spirit | dev tag + counterpart + Related. |

## Tagged change list

| # | Tag | Effort | Page / WHICH text moves (heading paths quoted) | Action |
|---|---|---|---|---|
| A1 | [A] intra-page | M | `concepts/memberships › "## API reference"` does not apply — see change-admin: `guides/memberships/change-admin › "## API reference"` (`### Query`, `### Mutations`, `### Rejection types`) | Move the API-reference block to the page end (or stage for [C2]); it interleaves reference detail into a procedure. |
| A2 | [A] intra-page | S | `change-admin › "## Statuses" / "## Reasons for change" / "## Required supporting documents" / "## Limitations"` | Group these reference-grade tables together below the walkthrough (no sidebar change). |
| A3 | [A] heading-normalize | S | H1 vs sidebar label for the 8 guides: `"Add a membership"`→label "Add one member"; `"Update a membership"`→"Update member"; `"Disable a membership"`→"Disable member"; `"Resend membership invitation notification"`→"Resend invitation"; `"Fix a user binding error"`→"Fix binding error"; `"Change account administrator"`→"Change admin"; (`add-multiple`, `suspend-resume` near-match) | Align each H1 to the short sidebar verb. Wording-only on the H1 line; no body rewrite. |
| B1 | [B] carve→Reference + anchor retarget | M | `concepts/memberships › "## Country requirements for account memberships {#country-req}"` + `"### Detailed optional and conditional requirements"` | Move verbatim to Reference (co-locate in `reference/membership-permissions`, or new page per [C1]). Retarget inbound `…/concepts/memberships#country-req` → reference. |
| B2 | [B] carve→Reference + anchor retarget | S/M | `concepts/memberships › "## Validation rules {#validation}"` + `"### First name and last name {#validation-names}"` | Move verbatim to Reference alongside B1. Retarget `#validation*` anchors. |
| C1 | [C] sidebars.ia.js (proposal) | — | accountsSidebar › Reference | If B1+B2 form their own page, add `doc("accounts/reference/membership-fields", …)`; else fold into `membership-permissions` (no new node). Ours/N16 to decide. |
| C2 | [C] sidebars.ia.js (proposal) | — | accountsSidebar › Reference | Optional: lift change-admin's API-reference block to a reference entry. Proposal only. |
| D1 | [D] chrome | S each (M total) | All 8 guides: append `## Related` | Add Related → `concepts/memberships`, `reference/membership-permissions`, + sibling guides (disable↔suspend-resume already cross-link). Routed targets only. |
| D2 | [D] chrome | S | 8 guides single-audience | Add `ia-audience-tag` (dev for the API guides; ops for `change-admin`), matching the export children's pattern. |
| D3 | [D] chrome | S | `reference/membership-permissions › "## Related"` | Add onward edges to `guides/memberships/update` and `…/add-one` (reference→guide edge currently missing). |
| E1 | [E] schema correction | S | `export/index › "## What's included in an export"` list item "Membership ID, email, **role**, and permissions" | Drop/replace "role": `AccountMembership` has no role — only permission booleans + `legalRepresentative`. Cite `api-reference/docs/objects/account-membership.mdx`. |
| E2 | [E] schema correction | S | `accounts/index › "## Find your path"` dev step "How users access accounts, **roles**, and permissions." | Same "roles" issue; align to permissions/legal-rep wording. |
| F1 | [F] PM | — | `export/index` "What's included" column set | Export is async + emailed `.csv`; columns are product behavior, **not in schema**. Confirm actual columns (and honor E1: no "role"). |
| F2 | [F] PM | — | Product-behavior claims | 7-day download-link expiry; "five invitations/day"; "status must be `InvitationSent`"; forked-WB "March 12, 2026" date — schema can't settle; PM to confirm. |
| F3 | [F] PM / re-verify live | — | `resend-invitation › "## Rejection reasons"` | Mutation verified live; 3 of 4 rejection objects absent from the **stale** local schema (`MaximumDailyInvitationsReachedRejection`, `UserNotAllowedToSendAccountMembershipInvitationRejection`, `AccountMembershipCustomInvitationCannotBeCreatedRejection`). Re-verify names against live before publish. |

## FOCUS — deep-dive: `accounts/concepts/memberships` absorbed sections
Page covers >1 concern by design (concept hub). Judging the 7 non-core absorbed sections:

| Section (heading) | Nature | Belongs | Verdict |
|---|---|---|---|
| `## Changing the account administrator {#admin-change}` | conceptual lead-in + link to the guide | concept | **keep** (procedure already lives in `change-admin`). |
| `## Membership permissions {#permissions}` | now a 3-line lead-in (matrix already carved) | concept lead-in / reference | **keep lead-in**; matrix correctly in Reference. |
| `## Country requirements … {#country-req}` | per-IBAN **field matrix** (`<Req/Opt/Cnd>`) + detailed rules | **Reference** | **carve [B1]**. Distinct axis from `reference/country-requirements` (that's account-holder/KYB country reqs); this is membership-field requirements → co-locate with `membership-permissions` or new `membership-fields`. |
| `## Validation rules {#validation}` | name regex / field-format rules | **Reference** | **carve [B2]**. |
| `## Membership language {#language}` | model/behavior (+ a 3-step `### Physical cards & membership language` procedure) | concept (mostly) | **keep**; the physical-card steps are the only procedural bit — small, leave or fold into a card guide later. |
| `## Removing identification {#remove-identification}` | config/behavior, conceptual | concept | **keep**. |
| `## Notifications {#notifications}` | behavior + invitation-notification config | concept (conceptual) | **keep**; procedural home is `resend-invitation` (already cross-linked). |
Core model/lifecycle (`#overview/#invite/#company-members/#unlimited-memberships/#statuses/#binding-errors/#closed/#versioning/#diagrams-add`) → all correctly on the concept.

## SHAPE vs Views 2–4 (per guide)

| Guide | Before-you-start | Related | Audience tag | Counterpart | H1↔label |
|---|---|---|---|---|---|
| add-one | ✅ prereq | ❌ | ❌ | n/a (no Dashboard twin page) | ✗ "Add a membership"≠"Add one member" |
| add-multiple | ✅ | ❌ | ❌ | n/a | ~ "Add multiple memberships"≈"Add multiple members" |
| update | ✅ | ❌ | ❌ | n/a | ✗ "Update a membership"≠"Update member" |
| disable | ✅ | ❌ (only →suspend) | ❌ | n/a | ✗ |
| suspend-resume | ✅ | ❌ (only →disable) | ❌ | n/a | ✗ |
| resend-invitation | ✅ | ❌ | ❌ | n/a | ✗ (H1 verbose) |
| fix-binding-error | ✅ | ❌ (→concept#invite only) | ❌ | n/a | ✗ |
| change-admin | ~ (Eligibility, no explicit prereq) | ❌ | ❌ (ops candidate) | n/a | ✗ |
| export/index | ✅ Before+After | landing (picker) | ✅ (picker) | n/a | ok |
| export/from-the-dashboard | n/a | ✅ | ✅ ops | ✅ →API | ok (child) |
| export/using-the-api | n/a | ✅ | ✅ dev | ✅ →Dashboard | ok (child) |

Concept→guides: ✅ (`## Guides` lists all 8). Concept→reference: ✅ (`#permissions` lead-in + `#unlimited-memberships`).

## MESH — concept ↔ guides ↔ membership-permissions
- concept → reference ✅ · reference → concept ✅ (`## Related` + intro) — triangle base complete.
- concept → all 8 guides ✅ · export landing → 2 children ✅ · children ↔ each other + → concept ✅.
- guide → reference ✅ where relevant (add-one/add-multiple → `#permissions-none`).
- **Missing edges:** (a) `reference/membership-permissions` → any guide [D3]; (b) 6 of 8 guides have no `## Related` block at all [D1]; (c) `change-admin` → `resend-invitation` (it references resending but doesn't link).
- Related lists target **only routed pages** ✅ (reference Related → concept + `#country-req`; export children → routed siblings/concept).

## SCHEMA verification (citations)

| Claim | Result | Citation |
|---|---|---|
| `exportAccountMembershipData(input: ExportAccountMembershipDataInput!)` → `ExportDataPayload` | verified-true | `api-reference/docs/mutations/export-account-membership-data.mdx` |
| Input `{ email: String!, filters: ExportAccountMembershipDataFilters }` | verified-true | `…/inputs/export-account-membership-data-input.mdx` |
| Filters: `email, accountId, canInitiatePayments, canManageAccountMembership, canManageBeneficiaries, canManageCards, canViewAccount, status:[…], search` | verified-true (guide example all valid) | `…/inputs/export-account-membership-data-filters.mdx` |
| `ExportDataSuccessPayload { exportId: String! }` | verified-true | `…/objects/export-data-success-payload.mdx` |
| Export "What's included" includes a **role** column | **verified-false** | `…/objects/account-membership.mdx` — no `role`; permission booleans + `legalRepresentative` only. |
| `addAccountMembership` args (accountId, email, restrictedTo{firstName!,lastName!,birthDate,phoneNumber}, canViewAccount!…, consentRedirectUrl!, language) | verified-true | `…/inputs/add-account-membership-input.mdx`, `…/inputs/restricted-to-input.mdx` |
| `canManageCards` is "technically optional" | verified-true (only nullable Boolean) | `…/inputs/add-account-membership-input.mdx` (`canManageCards: Boolean`) |
| `account-memberships` query exists (the "memberships query") | verified-true | `…/queries/account-memberships.mdx` (export uses the **mutation**, not this query — earlier path-picker copy corrected in batch 1) |
| `sendAccountMembershipInviteNotification` mutation | verified-true **(live)**; **not-in-local-schema** (stale repo) | WebFetch `https://api-reference.swan.io/mutations/send-account-membership-invite-notification` → input `SendAccountMembershipInviteNotificationInput!`, returns `…Payload` union |
| resend rejection types (`MaximumDailyInvitationsReachedRejection`, `UserNotAllowedToSend…`, `AccountMembershipCustomInvitationCannotBeCreatedRejection`) | not-in-local-schema (stale); `AccountMembershipStatusNotEligibleRejection` present | `…/objects/account-membership-status-not-eligible-rejection.mdx`; others absent locally → re-verify live |
| 7-day download-link expiry; "five invitations/day" | not-in-schema (product behavior) → PM | — |

## ANCHOR HONESTY — kept-together vs belong-together
Anchors that survive only because content was kept physically together (retarget if the section moves):

| Anchor (current) | Honest home | Retarget after carve |
|---|---|---|
| `concepts/memberships#country-req` (+ detailed reqs) | Reference (field matrix) | → `reference/membership-permissions#country-req` (or new `membership-fields#country-req`) per [B1] |
| `concepts/memberships#validation`, `#validation-names` | Reference (format rules) | → `reference/membership-permissions#validation*` per [B2] |
| `concepts/memberships#permissions` | lead-in only; matrix is in Reference | inbound permission links already point to `reference/membership-permissions#permissions` (batch-1) — concept anchor is a continuity stub, legitimate |
| `concepts/memberships#language-cards` (physical-card steps) | borderline procedural | leave on concept; consider a card guide later (no retarget now) |
| `concepts/memberships#notifications`, `#notification-invitation` | conceptual on concept; procedure in `resend-invitation` | no retarget; ensure `change-admin`/guide cross-links |
| `concepts/memberships#binding-errors`, `#statuses` | legitimately on concept (model/lifecycle) | none — belong together |

_End of audit. No content changed; no commits._
