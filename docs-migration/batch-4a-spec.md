# Batch 4A composition spec (onboarding + capital-deposits)

Authoritative conventions + repath map for composing the 4A destination `.mdx` files.
VERBATIM migration: move source prose/code/tables byte-for-byte; the only allowed diffs are the
"rider-1" chrome below, link/image repaths, anchor retargets, and reference carves named here.

## Chrome conventions (mirror the memberships cluster)

Realized examples to copy: `docs/accounts/guides/memberships/add-one.mdx` (guide) and
`docs/accounts/guides/memberships/export/index.mdx` (View-3 parent hub).

A GUIDE page is shaped:
```
---
title: <sidebar label = current shell title, keep it>
---

# <short H1 verb form>

<span className="ia-audience-tag ia-audience-tag--dev">Developer</span>   (or --ops "Partner ops")

<one-or-two-line lede sentence>

<verbatim body, sections with explicit {#anchor}>

## Related
- [Link](/new/path) — short reason.
- ...
```
- Audience tag: API/GraphQL guides → `--dev` "Developer"; Dashboard/portal procedures → `--ops` "Partner ops". If a page mixes, pick the dominant; you may omit the tag on a hub/concept page.
- `## Related` lists ONLY routed pages (new IA paths or live /topics paths). Link to the concept hub, relevant reference, and sibling guides.
- Preserve EVERY explicit `{#anchor}` verbatim. When two merged sources would collide on an anchor, keep the first and rename the second minimally (note it in your report).
- Keep all `:::info/:::tip/:::caution/:::warning/:::note` admonitions, mermaid blocks, `<table>`, GraphQL/JSON code fences, and API Explorer `<a ... className="explorer-badge">` verbatim.

## Link repath rules (convert ALL relative ./ ../ links to absolute)

WITHIN-CLUSTER (new homes) — anchored where the source was folded into a section:
- /topics/onboarding                                  -> /accounts/guides/onboarding
- /topics/onboarding/account-holders[/index]          -> /accounts/guides/onboarding/account-holders
- /topics/onboarding/account-holders/guide-add-additional-account -> /accounts/guides/onboarding/account-holders#add-additional-account
- /topics/onboarding/account-holders/guide-get-status            -> /accounts/guides/onboarding/account-holders#get-status
- /topics/onboarding/account-holders/guide-request-first-transfer-> /accounts/guides/onboarding/account-holders#request-first-transfer
- /topics/onboarding/account-holders/guide-export                -> /accounts/guides/onboarding/account-holders#export
- /topics/onboarding/account-holders/sandbox                     -> /accounts/guides/onboarding/account-holders#sandbox
- /topics/onboarding/company[/index]                  -> /accounts/guides/onboarding/company
- /topics/onboarding/company/fields                   -> /accounts/guides/onboarding/company#fields
- /topics/onboarding/company/guide-create             -> /accounts/guides/onboarding/company#create
- /topics/onboarding/company/guide-update             -> /accounts/guides/onboarding/company#update
- /topics/onboarding/individual[/index]               -> /accounts/guides/onboarding/individual
- /topics/onboarding/individual/fields                -> /accounts/guides/onboarding/individual#fields
- /topics/onboarding/individual/guide-create          -> /accounts/guides/onboarding/individual#create
- /topics/onboarding/individual/guide-update          -> /accounts/guides/onboarding/individual#update
- /topics/onboarding/overview/guide-migrate           -> /accounts/guides/onboarding#migrate
- /topics/onboarding/overview/guide-get-info          -> /accounts/guides/onboarding#get-info
- /topics/onboarding/overview/guide-get-list          -> /accounts/guides/onboarding#get-list
- /topics/onboarding/overview/guide-export            -> /accounts/guides/onboarding#export-onboarding-data
- /topics/onboarding/overview/guide-finalize          -> /accounts/guides/onboarding#finalize
- /topics/capital-deposits[/index]                    -> /accounts/guides/onboarding/capital-deposits
- /topics/capital-deposits/france/guide               -> /accounts/guides/onboarding/capital-deposits#france
- /topics/capital-deposits/france/guide-create-case   -> /accounts/guides/onboarding/capital-deposits/create-case
- /topics/capital-deposits/france/guide-upload-documents -> /accounts/guides/onboarding/capital-deposits/upload-documents
- /topics/capital-deposits/guide-cancel               -> /accounts/guides/onboarding/capital-deposits/cancel
- /topics/capital-deposits/guide-update-company       -> /accounts/guides/onboarding/capital-deposits/update-company
- /topics/capital-deposits/guide-update-shareholder-amount -> /accounts/guides/onboarding/capital-deposits/update-shareholder-amount

ALREADY-MIGRATED EXTERNAL (use the new absolute path, keep anchors):
- /accounts/reference/country-requirements , /accounts/reference/proof-of-address
- /accounts/concepts/memberships , /accounts/reference/membership-permissions , /accounts/reference/membership-fields
- /dev-tools/using-api/authentication , /dev-tools/using-api/webhooks , /dev-tools/using-api/pagination
- /get-started/set-up-swan/create-project
- /preview/new-onboarding (note: source path was /preview/new-onboarding — keep as-is, page exists)

NOT-YET-MIGRATED (keep pointing at LIVE /topics/... — their own batch will sweep):
- topics/accounts/*  (documents, multiple-accounts, closure, funding, billing, ibans, index, overview) -> keep /topics/accounts/...
- topics/users/*     (identifications, consent, overview) -> keep /topics/users/...
- topics/payments/*  -> keep /topics/payments/...
Resolve relative ../../accounts/... etc. to the absolute /topics/accounts/... form (NOT the new IA path) for these.

IMAGES: normalize every image ref to absolute `/images/topics/onboarding/<file>.png` (or the source's
existing /images/... path). The absolute /images/... form already builds green elsewhere.

## Partials (shared-partial promotion)

The destinations import partials from `docs/topics/onboarding/partials/`, `docs/topics/partials/`,
`docs/topics/capital-deposits/partials/`, and definition blurbs from `docs/topics/definitions/`.
`topics/onboarding` and `topics/capital-deposits` will be DELETED at cluster end, so their partials
must be PROMOTED. Rule:
- Promote onboarding + capital-deposit local partials into a `partials/` dir beside the destination:
  `docs/accounts/guides/onboarding/partials/` and `docs/accounts/guides/onboarding/capital-deposits/partials/`.
  Copy the partial file there (cp), rewrite its internal links per the repath rules, and point the
  destination `import` at the local `./partials/_x.mdx`.
- `docs/topics/partials/_*.mdx` and `docs/topics/definitions/_*.mdx` are SHARED and NOT deleted this
  cluster — leave them in place and reference via a correct RELATIVE path from the new file
  (e.g. from `docs/accounts/guides/onboarding/company.mdx`: `../../../topics/definitions/_x.mdx`).
  Do not solo-promote shared partials.

## Reference carves (this cluster)

EXISTING reference pages only (sidebars.ia.js is LOCKED — do NOT create new reference nodes):
- `accounts/reference/country-requirements` (proof-of-company-registration docs, per country) — REAL.
- `accounts/reference/proof-of-address` — REAL.
Onboarding **field-requirement matrices** (`company/fields`, `individual/fields`) are reference-grade
but there is NO reference node for them. DECISION: keep them as a `## Field requirements {#fields}`
section ON the company/individual guide page (content stays reachable via the `…#fields` redirect),
and the parent records a ledger [C] flag proposing dedicated reference nodes. Preserve the fields
sub-anchors. Do NOT try to merge field matrices into country-requirements (different axis).
Do NOT delete or thin country-requirements/proof-of-address; only CROSS-LINK to them.

## Report-back format (return, do not print to a user)

Return JSON-ish: { file, sources_merged:[{source, section_titles_with_anchors}], h1, audience_tag,
anchors_preserved:[...], anchors_renamed:[{from,to,why}], links_repathed_count, images_repathed:[...],
partials_promoted:[...], carve_notes, schema_claims_to_verify:[...], related_block:[...] }.
