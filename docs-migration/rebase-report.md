# DOC-1814 Phase 0 — IA migration map rebase report

Canonical stub routes: **187** · source rows: **246** · overrides applied: **37**

## Resolution counts

| resolution | rows |
|---|---|
| exact | 110 |
| fold | 60 |
| fuzzy | 14 |
| override:fold-section-overview | 1 |
| override:hub-judgment-at-migration | 2 |
| override:hub-merge | 2 |
| override:hub-split-3-close-guides | 1 |
| override:hub-split-feeds-requirements-ref | 1 |
| override:ia-collapse-ct-landing | 2 |
| override:ia-collapse-identity | 3 |
| override:ia-collapse-per-country | 7 |
| override:ia-collapse-project-setup | 2 |
| override:new-vop-concept | 1 |
| override:new-vop-guide | 1 |
| override:no-contact-page | 3 |
| override:preserve-live-redirect-specificity | 1 |
| override:rename-account-operations | 2 |
| override:rename-flat-sandbox | 5 |
| override:rename-granular-home | 2 |
| override:retarget-vop-concept | 1 |
| rule:concept-shape | 17 |
| rule:strip-guide-prefix | 8 |
| **resolved total** | **246** |
| **unresolved** | **0** |

## Unresolved rows (0) — top-3 candidates

_none_

## Net-new stubs — ZERO inbound after rebase (26)
Real net-new pages: present in the tree, no legacy source routes to them.

- **accounts/guides/** (8)
  - `/accounts/guides/memberships/export/from-the-dashboard`
  - `/accounts/guides/memberships/export/using-the-api`
  - `/accounts/guides/memberships/partials/_add-member-bind`
  - `/accounts/guides/memberships/partials/_add-member-prereq`
  - `/accounts/guides/memberships/partials/_update-prereqs`
  - `/accounts/guides/memberships/partials/_user-binding-error-list`
  - `/accounts/guides/onboarding/capital-deposits/create-case`
  - `/accounts/guides/onboarding/capital-deposits/upload-documents`
- **accounts/reference/** (2)
  - `/accounts/reference/membership-permissions`
  - `/accounts/reference/multiple-accounts-requirements`
- **cards/reference/** (1)
  - `/cards/reference/card-fraud-types`
- **get-started/become-a-partner/** (6)
  - `/get-started/become-a-partner/brand-communication`
  - `/get-started/become-a-partner/licence-regulatory-status`
  - `/get-started/become-a-partner/orias-registration`
  - `/get-started/become-a-partner/protections/data-protection`
  - `/get-started/become-a-partner/protections/fraud-obligations`
  - `/get-started/become-a-partner/rates-billing`
- **get-started/integration-by-segment/** (3)
  - `/get-started/integration-by-segment/accounting-platforms`
  - `/get-started/integration-by-segment/expense-management`
  - `/get-started/integration-by-segment/meal-cards`
- **get-started/set-up-swan/** (3)
  - `/get-started/set-up-swan/connect-mobile`
  - `/get-started/set-up-swan/data-model`
  - `/get-started/set-up-swan/swan-access`
- **payments/concepts/** (1)
  - `/payments/concepts/merchants`
- **payments/reference/** (2)
  - `/payments/reference/schemes`
  - `/payments/reference/transaction-fraud-types`

## Stale targets (original newPath not a real route): 135

- **renamed → resolved** (rule/fold/fuzzy found a real home): 135
- **tree omits this content** (still unresolved): 0

### "tree omits this content" — grouped by sub-tree (check sidebars.ia.js intent)

_none_

## Merge sets — resolvedNewPath with >1 oldPath (27)

- `/accounts/concepts/closure` ⇐ 2 sources
  - `topics/accounts/closure/guide-close-api`
  - `topics/accounts/closure/index`
- `/accounts/concepts/multiple-accounts` ⇐ 2 sources
  - `topics/accounts/multiple-accounts/guide-multiple-accounts-integration`
  - `topics/accounts/multiple-accounts/index`
- `/accounts/guides/onboarding/account-holders` ⇐ 6 sources
  - `topics/onboarding/account-holders/guide-add-additional-account`
  - `topics/onboarding/account-holders/guide-export`
  - `topics/onboarding/account-holders/guide-get-status`
  - `topics/onboarding/account-holders/guide-request-first-transfer`
  - `topics/onboarding/account-holders/index`
  - `topics/onboarding/account-holders/sandbox`
- `/accounts/guides/onboarding/capital-deposits` ⇐ 4 sources
  - `topics/capital-deposits/france/guide`
  - `topics/capital-deposits/france/guide-create-case`
  - `topics/capital-deposits/france/guide-upload-documents`
  - `topics/capital-deposits/index`
- `/accounts/guides/onboarding/company` ⇐ 4 sources
  - `topics/onboarding/company/fields`
  - `topics/onboarding/company/guide-create`
  - `topics/onboarding/company/guide-update`
  - `topics/onboarding/company/index`
- `/accounts/guides/onboarding` ⇐ 6 sources
  - `topics/onboarding/index`
  - `topics/onboarding/overview/guide-export`
  - `topics/onboarding/overview/guide-finalize`
  - `topics/onboarding/overview/guide-get-info`
  - `topics/onboarding/overview/guide-get-list`
  - `topics/onboarding/overview/guide-migrate`
- `/accounts/guides/onboarding/individual` ⇐ 4 sources
  - `topics/onboarding/individual/fields`
  - `topics/onboarding/individual/guide-create`
  - `topics/onboarding/individual/guide-update`
  - `topics/onboarding/individual/index`
- `/accounts/reference/country-requirements` ⇐ 7 sources
  - `partnership/document-center/company-registration/belgium`
  - `partnership/document-center/company-registration/france`
  - `partnership/document-center/company-registration/germany`
  - `partnership/document-center/company-registration/index`
  - `partnership/document-center/company-registration/italy`
  - `partnership/document-center/company-registration/netherlands`
  - `partnership/document-center/company-registration/spain`
- `/cards/concepts/card-packages` ⇐ 3 sources
  - `topics/cards/card-packages/guide-get-card-package-tier`
  - `topics/cards/card-packages/guide-product-configuration`
  - `topics/cards/card-packages/index`
- `/dev-tools/using-api/authentication` ⇐ 4 sources
  - `developers/using-api/authentication/guide-get-token-project`
  - `developers/using-api/authentication/guide-get-token-user`
  - `developers/using-api/authentication/guide-impersonate`
  - `developers/using-api/authentication/index`
- `/get-started/become-a-partner` ⇐ 3 sources
  - `partnership/index`
  - `partnership/overview/guide-orias`
  - `partnership/overview/rules-regulations`
- `/get-started/become-a-partner/protections` ⇐ 5 sources
  - `partnership/protections/data`
  - `partnership/protections/financial`
  - `partnership/protections/fraud/index`
  - `partnership/protections/fraud/types`
  - `partnership/protections/report-vulnerability`
- `/get-started` ⇐ 3 sources
  - `developers/contact`
  - `partnership/contact`
  - `topics/contact`
- `/get-started/set-up-swan/create-project` ⇐ 2 sources
  - `topics/projects/guide-activate`
  - `topics/projects/index`
- `/payments/concepts/credit-transfers` ⇐ 3 sources
  - `topics/payments/credit-transfers/index`
  - `topics/payments/credit-transfers/international/index`
  - `topics/payments/credit-transfers/sepa/index`
- `/payments/concepts/transactions` ⇐ 2 sources
  - `topics/payments/overview/guide-get-payment-info`
  - `topics/payments/overview/guide-get-transaction-list`
- `/payments/concepts/verification-of-payee` ⇐ 2 sources
  - `topics/payments/credit-transfers/sepa/vop/bulk-credit-transfers`
  - `topics/payments/credit-transfers/sepa/vop/verification-of-payee`
- `/payments/guides/credit-transfers/international/add-beneficiary` ⇐ 2 sources
  - `topics/payments/credit-transfers/international/guide-add-beneficiary`
  - `topics/payments/credit-transfers/international/guide-beneficiary`
- `/payments/guides/credit-transfers/international/get-info` ⇐ 2 sources
  - `topics/payments/credit-transfers/international/guide-get-info`
  - `topics/payments/credit-transfers/international/guide-transaction-details`
- `/payments/guides/merchants/in-person/cards` ⇐ 7 sources
  - `topics/merchants/in-person/cards/guide-accept`
  - `topics/merchants/in-person/cards/guide-create-payments`
  - `topics/merchants/in-person/cards/guide-initialize`
  - `topics/merchants/in-person/cards/guide-request-method`
  - `topics/merchants/in-person/cards/guide-setup`
  - `topics/merchants/in-person/cards/index`
  - `topics/merchants/in-person/cards/sandbox`
- `/payments/guides/merchants/in-person/checks` ⇐ 5 sources
  - `topics/merchants/in-person/checks/guide-checks`
  - `topics/merchants/in-person/checks/guide-initiate`
  - `topics/merchants/in-person/checks/guide-request`
  - `topics/merchants/in-person/checks/index`
  - `topics/merchants/in-person/checks/sandbox`
- `/payments/guides/merchants` ⇐ 4 sources
  - `topics/merchants/in-person/index`
  - `topics/merchants/index`
  - `topics/merchants/online/index`
  - `topics/merchants/sandbox`
- `/payments/guides/merchants/online/cards` ⇐ 5 sources
  - `topics/merchants/online/cards/guide-cards`
  - `topics/merchants/online/cards/guide-create-link`
  - `topics/merchants/online/cards/guide-request`
  - `topics/merchants/online/cards/index`
  - `topics/merchants/online/cards/sandbox`
- `/payments/guides/merchants/online/idd` ⇐ 7 sources
  - `topics/merchants/online/idd/guide-declare`
  - `topics/merchants/online/idd/guide-idd`
  - `topics/merchants/online/idd/guide-initiate`
  - `topics/merchants/online/idd/guide-refund`
  - `topics/merchants/online/idd/guide-request`
  - `topics/merchants/online/idd/index`
  - `topics/merchants/online/idd/sandbox`
- `/payments/guides/merchants/online/sdd` ⇐ 9 sources
  - `topics/merchants/online/sdd/guide-create-link`
  - `topics/merchants/online/sdd/guide-declare`
  - `topics/merchants/online/sdd/guide-get-mandate`
  - `topics/merchants/online/sdd/guide-initiate`
  - `topics/merchants/online/sdd/guide-request`
  - `topics/merchants/online/sdd/guide-sdd`
  - `topics/merchants/online/sdd/guide-update`
  - `topics/merchants/online/sdd/index`
  - `topics/merchants/online/sdd/sandbox`
- `/payments/reference/sandbox` ⇐ 4 sources
  - `topics/payments/cards/sandbox`
  - `topics/payments/credit-transfers/international/sandbox`
  - `topics/payments/credit-transfers/sepa/sandbox`
  - `topics/payments/direct-debit/sandbox`
- `/users/reference/identity-methods` ⇐ 4 sources
  - `partnership/document-center/identity/expert`
  - `partnership/document-center/identity/index`
  - `partnership/document-center/identity/pvid`
  - `partnership/document-center/identity/qes`

## Live ↔ generated "from" collisions

- `/partnership/overview/protections`
  - live redirects.js → `/partnership/protections/financial/`
  - redirects.v2 → `/get-started/become-a-partner/protections/financial-protections`
- `/topics/accounts/memberships`
  - live redirects.js → `/accounts/concepts/memberships`
  - redirects.v2 → `/accounts/concepts/memberships`
- `/topics/accounts/memberships/admin-change`
  - live redirects.js → `/accounts/guides/memberships/change-admin`
  - redirects.v2 → `/accounts/guides/memberships/change-admin`
- `/topics/accounts/memberships/guide-add-multiple`
  - live redirects.js → `/accounts/guides/memberships/add-multiple`
  - redirects.v2 → `/accounts/guides/memberships/add-multiple`
- `/topics/accounts/memberships/guide-add-one`
  - live redirects.js → `/accounts/guides/memberships/add-one`
  - redirects.v2 → `/accounts/guides/memberships/add-one`
- `/topics/accounts/memberships/guide-disable`
  - live redirects.js → `/accounts/guides/memberships/disable`
  - redirects.v2 → `/accounts/guides/memberships/disable`
- `/topics/accounts/memberships/guide-export`
  - live redirects.js → `/accounts/guides/memberships/export`
  - redirects.v2 → `/accounts/guides/memberships/export`
- `/topics/accounts/memberships/guide-fix-binding-error`
  - live redirects.js → `/accounts/guides/memberships/fix-binding-error`
  - redirects.v2 → `/accounts/guides/memberships/fix-binding-error`
- `/topics/accounts/memberships/guide-resend-invitation`
  - live redirects.js → `/accounts/guides/memberships/resend-invitation`
  - redirects.v2 → `/accounts/guides/memberships/resend-invitation`
- `/topics/accounts/memberships/guide-suspend-resume`
  - live redirects.js → `/accounts/guides/memberships/suspend-resume`
  - redirects.v2 → `/accounts/guides/memberships/suspend-resume`
- `/topics/accounts/memberships/guide-update`
  - live redirects.js → `/accounts/guides/memberships/update`
  - redirects.v2 → `/accounts/guides/memberships/update`
- `/topics/cards/physical/guide-renew`
  - live redirects.js → `/topics/cards/physical/#renew`
  - redirects.v2 → `/cards/guides/physical/renew`

## Chain rewrites
168 live alias(es) whose target is now a v2 source — repointed to final route in `redirects.chain-rewrites.generated.js`.

## Fuzzy resolutions still in effect (14) — review before flip

- `developers/tools/guide-test-tools` → `/dev-tools/tools/test-tools-guide`
- `partnership/document-center/identity/index` → `/users/reference/identity-methods`
- `partnership/document-center/proof-address/index` → `/accounts/reference/proof-of-address`
- `topics/accounts/memberships/admin-change` → `/accounts/guides/memberships/change-admin`
- `topics/accounts/overview/guide-generate-statement` → `/accounts/guides/account-operations/generate-statement`
- `topics/cards/overview/guide-export` → `/cards/guides/lifecycle/export`
- `topics/cards/overview/guide-issue` → `/cards/guides/lifecycle/issue`
- `topics/cards/overview/guide-update` → `/cards/guides/lifecycle/update`
- `topics/payments/cards/sandbox` → `/payments/reference/sandbox`
- `topics/payments/credit-transfers/international/sandbox` → `/payments/reference/sandbox`
- `topics/payments/credit-transfers/sepa/sandbox` → `/payments/reference/sandbox`
- `topics/payments/credit-transfers/sepa/vop/guide-verify-beneficiary` → `/payments/guides/credit-transfers/sepa/verify-beneficiary`
- `topics/payments/direct-debit/sandbox` → `/payments/reference/sandbox`
- `topics/users/identifications/sandbox` → `/users/reference/sandbox-identifications`
