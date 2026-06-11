# Batch 4C composition spec (funding + billing + documents)

VERBATIM + rider-1 chrome. Standing rules (now permanent): RELATIVE image paths (not `/images/`);
trailing-slash route form ONLY for directory-index targets (none here — concepts/guides/reference are leaf docs → `#X` no slash); absolute links carry NO `.mdx`/`/index.mdx`.
Chrome refs: memberships concept (`docs/accounts/concepts/memberships.mdx`), guide (`add-one.mdx`), reference (`membership-permissions.mdx`).

## Destinations (18) + landing

CONCEPTS (memberships concept-shape: model/lifecycle hub, lede, verbatim body, drop `## Guides`→`## Related`, keep reference-grade tables that have no reference node, cross-link sandbox-*):
- concepts/funding ⇐ funding/index
- concepts/billing ⇐ billing/index
- concepts/documents ⇐ documents/index

GUIDES (1:1 exact, verbatim + chrome, `--dev` unless Dashboard/ops; preserve every `{#anchor}`):
- guides/funding/{add-source,cancel-source,get-info,initiate-request} ⇐ funding/guide-*
- guides/billing/{compliant-billing,get-details,get-list} ⇐ billing/guide-*
- guides/documents/{delete,get-info,request-collection-review,upload-onboarding,upload-transaction} ⇐ documents/guide-*

REFERENCE (flat sandbox 1:1 rename — overwrite the Shell-stub, NO stub text may remain):
- reference/sandbox-funding ⇐ funding/sandbox
- reference/sandbox-billing ⇐ billing/sandbox
- reference/sandbox-documents ⇐ documents/sandbox
  (frontmatter title e.g. "Sandbox: funding"; keep H1; `--dev`/ops as content dictates; lede; `## Related` → the matching concept.)

LANDING (NOT this cluster's job to delete): `topics/accounts/index` stays LIVE. Do not migrate its prose. (Its account-overview anchors are referenced repo-wide.)

## Repath map

WITHIN-4C:
- /topics/accounts/funding -> /accounts/concepts/funding ; .../guide-add-source->/accounts/guides/funding/add-source ; guide-cancel-source->.../cancel-source ; guide-get-info->.../get-info ; guide-initiate-request->.../initiate-request ; .../sandbox->/accounts/reference/sandbox-funding
- /topics/accounts/billing -> /accounts/concepts/billing ; guide-compliant-billing->/accounts/guides/billing/compliant-billing ; guide-get-details->.../get-details ; guide-get-list->.../get-list ; .../sandbox->/accounts/reference/sandbox-billing
- /topics/accounts/documents -> /accounts/concepts/documents ; guide-delete->/accounts/guides/documents/delete ; guide-get-info->.../get-info ; guide-request-collection-review->.../request-collection-review ; guide-upload-onboarding->.../upload-onboarding ; guide-upload-transaction->.../upload-transaction ; .../sandbox->/accounts/reference/sandbox-documents

ALREADY-MIGRATED (use new path): /accounts/concepts/{memberships,closure,ibans,multiple-accounts} ; /accounts/guides/onboarding/* (account-holders, company, capital-deposits) ; /accounts/reference/{country-requirements,proof-of-address,multiple-accounts-requirements} ; /dev-tools/* ; /get-started/* .

KEEP LIVE /topics/… (route form, no .mdx): /topics/accounts/ (index + #account-country,#statuses,#balances,#account-type-level,#bank-details,#language) — landing, deferred ; /topics/cards/… ; /topics/payments/… ; /topics/users/… ; /topics/merchants/… .

IMAGES: relative. From a concepts/ page → `../../images/topics/accounts/<file>` ; from a guides/<g>/ page → `../../../images/topics/accounts/<file>` ; from a reference/ page → `../../images/topics/accounts/<file>`.

PARTIALS / DEFINITIONS (shared, NOT promoted — reference relatively; each such reference is a hard dependency for final topics/ retirement, will be globally promoted by the batch consuming the last legacy user):
- funding/index imports: `_account-funding`, `_payment-mandate`, `_rolling-reserve` (definitions), `_day-time` (partial). From concepts/funding.mdx: `../../topics/definitions/_x.mdx` and `../../topics/partials/_day-time.mdx`.
- documents/index, billing/index: import whatever they import — point at `../../topics/definitions/…` / `../../topics/partials/…` and REPORT each shared partial/definition referenced.
- funding/_guide-cancel-request.mdx is a DEAD orphan (unused, not a route) — do NOT migrate it.

## Report-back: { file, sources, h1, audience_tag, anchors_preserved, dropped/renamed, links_repathed, images, shared_partials_referenced, carve_notes, schema_claims_to_verify, related }
