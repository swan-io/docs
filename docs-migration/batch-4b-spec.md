# Batch 4B composition spec (account-operations + closure + multiple-accounts + IBANs)

VERBATIM migration + rider-1 chrome only. Standing template rules (now including the three 4A lessons):
1. **Images**: use a RELATIVE path to `docs/images/…` (NOT absolute `/images/…`, which maps to `static/`).
   From a page at `docs/accounts/concepts/X.mdx` → `../../images/…`; from `docs/accounts/guides/G/Y.mdx` → `../../../images/…`.
2. **Cross-page anchor links to an index.mdx page** need the trailing-slash route form: `/accounts/concepts/closure/#X` is WRONG (concepts/closure is a LEAF doc, no slash) — but `/accounts/guides/onboarding/#get-info` style applies to *directory index* docs only. concepts/* and reference/* and the guide leaves here are all LEAF docs → use `#X` with NO trailing slash. (No index.mdx targets in 4B except none.)
3. **Absolute `/topics/…` or `/accounts/…` links must NOT carry `.mdx` or `/index.mdx`** — use the clean route form.

Chrome: see `docs/accounts/guides/memberships/add-one.mdx` (guide) + `docs/accounts/concepts/memberships.mdx` (concept-hub shape) + `docs/accounts/reference/membership-permissions.mdx` (reference shape).
- Guides: frontmatter `title` (sidebar label), short verb `# H1`, `<span className="ia-audience-tag ia-audience-tag--dev">Developer</span>` (API) or `--ops` "Partner ops" (Dashboard/Support), 1-line `ia-lede`, verbatim body, `## Related`.
- Concepts: `# H1`, lede, verbatim concept body, `## Related` (→ guides + reference + sibling concepts). No audience tag.
- Reference: `# H1`, lede, the tables, `## Related`.
- Preserve every explicit `{#anchor}`; preserve admonitions/tables/`<Tabs>`/`<TabItem>`/mermaid/code fences/explorer-badges verbatim.
- `## Related` → routed targets only.

## Repath map (convert ALL relative ./ ../ links to absolute; drop .mdx/index.mdx)

WITHIN-4B new homes:
- /topics/accounts/closure                         -> /accounts/concepts/closure
- /topics/accounts/closure/guide-close-api         -> /accounts/guides/closure/close-link#api   (content folds into close-link)
- /topics/accounts/closure/guide-close-limited     -> /accounts/guides/closure/close-limited
- /topics/accounts/closure/guide-close-link        -> /accounts/guides/closure/close-link
- /topics/accounts/closure/guide-close-unlimited   -> /accounts/guides/closure/close-unlimited
- /topics/accounts/closure/guide-get-closure-info  -> /accounts/guides/closure/get-closure-info
- /topics/accounts/ibans                           -> /accounts/concepts/ibans
- /topics/accounts/ibans/guide-add-virtual         -> /accounts/guides/ibans/add-virtual
- /topics/accounts/ibans/guide-cancel-virtual      -> /accounts/guides/ibans/cancel-virtual
- /topics/accounts/ibans/guide-get-info            -> /accounts/guides/ibans/get-info
- /topics/accounts/ibans/guide-validate            -> /accounts/guides/ibans/validate
- /topics/accounts/multiple-accounts               -> /accounts/concepts/multiple-accounts
- /topics/accounts/multiple-accounts/guide-multiple-accounts-integration -> /accounts/concepts/multiple-accounts#create
- /topics/accounts/overview/guide-export           -> /accounts/guides/account-operations/export
- /topics/accounts/overview/guide-generate-statement -> /accounts/guides/account-operations/generate-statement
- /topics/accounts/overview/guide-get-bank-details -> /accounts/guides/account-operations/bank-details

ANCHOR RETARGETS (tables carved to the requirements reference page):
- /accounts/concepts/multiple-accounts#requirements / #legal-rep-requirements / #account-holder-requirements / #rejections
  -> /accounts/reference/multiple-accounts-requirements#<same-anchor>

ALREADY-MIGRATED EXTERNAL (use new path, keep anchors):
- /accounts/guides/onboarding/company (incl #related-individuals), /accounts/guides/onboarding/account-holders, /accounts/guides/onboarding (capital-deposits)
- /accounts/concepts/memberships, /accounts/reference/country-requirements, /accounts/reference/proof-of-address
- /dev-tools/using-api/{authentication,webhooks,pagination}, /get-started/set-up-swan/glossary

NOT-YET-MIGRATED (keep LIVE /topics/… route form, NO .mdx):
- /topics/accounts/ (index + #statuses,#account-type-level,#account-country,#bank-details,#balances,#language) — 4C/landing, KEEP
- /topics/accounts/{funding,billing,documents}/… — 4C
- /topics/cards/…, /topics/payments/…, /topics/users/…, /topics/merchants/…

IMAGES: `topics/accounts/...` images (e.g. virtual-ibans.png) → relative `../../images/topics/accounts/<file>` from a concepts/ page.

## Per-page composition

CONCEPTS (concept-shape, verbatim + chrome; keep reference-grade tables that have no reference node):
- concepts/closure ⇐ closure/index. Keep reason-code tables + the `<Tabs>` comms block + processes. Anchors: #closure-begins,#processes,#closure-partner,#closure-legal-rep,#closure-account-holder,#closure-swan,#closure-third-party,#closure-reason-codes,#closure-reason-timeline,#general-reasons,#kyc-capital-deposit-reasons,#compliance-reasons,#deprecated-reasons,#comms. Its `## Guides` list → drop, fold into ## Related (link the 4 guides).
- concepts/ibans ⇐ ibans/index. Keep per-country IBAN `<Tabs>` tables (no ibans reference node). Anchors #overview,#main,#local,#virtual. Drop `## Guides` → ## Related. import IbanDefinition from `../../topics/definitions/_iban.mdx`. virtual-ibans.png → `../../images/topics/accounts/virtual-ibans.png`.
- concepts/multiple-accounts ⇐ multiple-accounts/index concept body + the integration guide's openAccount procedure folded as `## Create additional accounts {#create}` (Guide/Mutation/Payload, demote inner headings, drop generic #guide/#mutation/#payload). CARVE OUT the requirement tables to the reference page (below) and leave a 1-line lead-in + link where they were. Keep #overview,#eligibility,#key-benefits,#feature-activation,#implementation,#account-conditions,#shared-account-details,#account-management,#billing,#web-banking-access. Membership section keeps its link to /accounts/concepts/memberships.

REFERENCE (must FULLY replace the Shell-stub — no stub text may remain):
- reference/multiple-accounts-requirements ⇐ from multiple-accounts/index: the `## Requirements {#requirements}` section (incl `### Legal representative requirements {#legal-rep-requirements}` + `### Account holder requirements {#account-holder-requirements}` table), the `## Rejections {#rejections}` table, and the `## Account conditions {#account-conditions}` + `### Account creation limit {#account-creation-limit}` (plus the integration guide's `## Check your account creation limit` projectInfo query/payloads as `## Check your account creation limit {#check-limit}`). Lede + ## Related → /accounts/concepts/multiple-accounts.

CLOSURE GUIDES:
- guides/closure/close-limited ⇐ guide-close-limited (1:1). `--ops`. imports `./partials/_partner-close-account.mdx`. Anchors #limited,#limited-submit,#limited-review,#limited-status. Links `./index.mdx#comms`->/accounts/concepts/closure#comms, `../index.mdx#statuses`->/topics/accounts/#statuses.
- guides/closure/close-unlimited ⇐ guide-close-unlimited (1:1). `--ops`. imports `./partials/_partner-close-account.mdx`. Anchors #unlimited,#unlimited-submit,#unlimited-review,#unlimited-initiate.
- guides/closure/close-link ⇐ guide-close-link (legal-rep LINK method) + FOLD guide-close-api under `## Close with the API {#api}` (legal-rep API method; demote its ##Guide/##Mutation/##Payload to ### and drop those generic anchors). `--ops` top (link method) but the #api section is dev. Anchors #send-link,#complete-process,#api. close-api links: `../index.mdx#statuses`->/topics/accounts/#statuses, `../../users/consent/index.mdx#sca`->/topics/users/consent/#sca, `/dev-tools/using-api/authentication#tokens-user` keep.
- guides/closure/get-closure-info ⇐ guide-get-closure-info (1:1). `--dev`. Anchors #guide,#query,#payload. Links `./index.mdx#closure-reason-codes`->/accounts/concepts/closure#closure-reason-codes.

IBANS GUIDES (1:1, `--dev`): add-virtual ⇐ guide-add-virtual; cancel-virtual ⇐ guide-cancel-virtual; get-info ⇐ guide-get-info; validate ⇐ guide-validate. Repath `./index.mdx#X`->/accounts/concepts/ibans#X, `../index.mdx#X`->/topics/accounts/#X.

ACCOUNT-OPERATIONS GUIDES (1:1 rename): export ⇐ overview/guide-export; bank-details ⇐ overview/guide-get-bank-details; generate-statement ⇐ overview/guide-generate-statement (FUZZY — note H1/title vs sidebar; report any mismatch). `--dev` unless Dashboard-only. Repath `../index.mdx#X`->/topics/accounts/#X, `../ibans/…`->/accounts/concepts/ibans, `../closure/…`->/accounts/concepts/closure.

## Report-back: { file, sources_merged, h1, audience_tag, anchors_preserved, anchors_renamed/dropped, links_repathed_count, images, partials, carve_notes, schema_claims_to_verify, related_block, final_anchors }
