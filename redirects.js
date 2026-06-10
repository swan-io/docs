// redirects from original doc pathnames
module.exports = [
  // DOC-1814 cutover — batch 3B: developers -> dev-tools
  { from: "/developers", to: "/dev-tools" },
  { from: "/developers/contact", to: "/get-started" },
  { from: "/developers/graphql", to: "/dev-tools/graphql" },
  { from: "/developers/tools", to: "/dev-tools" },
  { from: "/developers/tools/api-explorer", to: "/dev-tools/tools/api-explorer" },
  { from: "/developers/tools/event-simulator", to: "/dev-tools/tools/event-simulator" },
  { from: "/developers/tools/guide-test-tools", to: "/dev-tools/tools/test-tools-guide" },
  { from: "/developers/tools/mcp-servers", to: "/dev-tools/tools/mcp-servers" },
  { from: "/developers/tools/postman-collection", to: "/dev-tools/tools/postman-collection" },
  { from: "/developers/tools/sandbox-users", to: "/dev-tools/tools/sandbox-users" },
  { from: "/developers/tools/testing-api", to: "/dev-tools/tools/testing-api" },
  { from: "/developers/using-api/authentication", to: "/dev-tools/using-api/authentication" },
  { from: "/developers/using-api/authentication/guide-get-token-project", to: "/dev-tools/using-api/authentication#get-token-project" },
  { from: "/developers/using-api/authentication/guide-get-token-user", to: "/dev-tools/using-api/authentication#get-token-user" },
  { from: "/developers/using-api/authentication/guide-impersonate", to: "/dev-tools/using-api/authentication#impersonate" },
  { from: "/developers/using-api/errors-rejections", to: "/dev-tools/using-api/errors-rejections" },
  { from: "/developers/using-api/idempotency", to: "/dev-tools/using-api/idempotency" },
  { from: "/developers/using-api/pagination", to: "/dev-tools/using-api/pagination" },
  { from: "/developers/using-api/payment-control", to: "/dev-tools/using-api/payment-control" },
  { from: "/developers/using-api/webhooks", to: "/dev-tools/using-api/webhooks" },
  // end batch 3B
  // DOC-1814 cutover — batch 3A: get-started/set-up-swan
  { from: "/glossary", to: "/get-started/set-up-swan/glossary" },
  { from: "/topics/get-started/choose-integration", to: "/get-started/set-up-swan/choose-integration" },
  { from: "/topics/get-started/quickstart", to: "/get-started/set-up-swan/quickstart" },
  { from: "/topics/get-started/step-by-step", to: "/get-started/set-up-swan/step-by-step" },
  { from: "/topics/projects", to: "/get-started/set-up-swan/create-project" },
  { from: "/topics/projects/guide-activate", to: "/get-started/set-up-swan/create-project" },
  // end batch 3A
  // DOC-1814 cutover — batch 2: partnership → become-a-partner
  { from: "/partnership", to: "/get-started/become-a-partner" },
  { from: "/partnership/overview/country-coverage", to: "/get-started/become-a-partner/country-coverage" },
  { from: "/partnership/overview/guide-orias", to: "/get-started/become-a-partner/orias-registration" },
  { from: "/partnership/overview/rules-regulations", to: "/get-started/become-a-partner/brand-communication" },
  { from: "/partnership/protections/data", to: "/get-started/become-a-partner/protections/data-protection" },
  { from: "/partnership/protections/financial", to: "/get-started/become-a-partner/protections/financial-protections" },
  { from: "/partnership/protections/report-vulnerability", to: "/get-started/become-a-partner/protections#vulnerability-disclosure" },
  { from: "/partnership/protections/fraud", to: "/get-started/become-a-partner/protections/fraud-obligations" },
  { from: "/partnership/protections/fraud/types", to: "/get-started/become-a-partner/protections/fraud-obligations#types" },
  { from: "/partnership/contact", to: "/get-started" },
  { from: "/partnership/document-center/company-registration", to: "/accounts/reference/country-requirements" },
  { from: "/partnership/document-center/company-registration/france", to: "/accounts/reference/country-requirements#france" },
  { from: "/partnership/document-center/company-registration/germany", to: "/accounts/reference/country-requirements#germany" },
  { from: "/partnership/document-center/company-registration/italy", to: "/accounts/reference/country-requirements#italy" },
  { from: "/partnership/document-center/company-registration/spain", to: "/accounts/reference/country-requirements#spain" },
  { from: "/partnership/document-center/company-registration/netherlands", to: "/accounts/reference/country-requirements#netherlands" },
  { from: "/partnership/document-center/company-registration/belgium", to: "/accounts/reference/country-requirements#belgium" },
  { from: "/partnership/document-center/proof-address", to: "/accounts/reference/proof-of-address" },
  // end batch 2
  // DOC-1814 cutover — batch 1: accounts/memberships
  { from: "/topics/accounts/memberships", to: "/accounts/concepts/memberships" },
  { from: "/topics/accounts/memberships/admin-change", to: "/accounts/guides/memberships/change-admin" },
  { from: "/topics/accounts/memberships/guide-add-multiple", to: "/accounts/guides/memberships/add-multiple" },
  { from: "/topics/accounts/memberships/guide-add-one", to: "/accounts/guides/memberships/add-one" },
  { from: "/topics/accounts/memberships/guide-disable", to: "/accounts/guides/memberships/disable" },
  { from: "/topics/accounts/memberships/guide-export", to: "/accounts/guides/memberships/export" },
  { from: "/topics/accounts/memberships/guide-fix-binding-error", to: "/accounts/guides/memberships/fix-binding-error" },
  { from: "/topics/accounts/memberships/guide-resend-invitation", to: "/accounts/guides/memberships/resend-invitation" },
  { from: "/topics/accounts/memberships/guide-suspend-resume", to: "/accounts/guides/memberships/suspend-resume" },
  { from: "/topics/accounts/memberships/guide-update", to: "/accounts/guides/memberships/update" },
  // end batch 1
  {
    from: "/topics/merchants/profiles/guide-add",
    to: "/topics/merchants/profiles/guide-request/",
  },
  { from: "/api/api-explorer", to: "/dev-tools/tools/api-explorer" },
  { from: "/api/authentication", to: "/dev-tools/using-api/authentication" },
  { from: "/api/consent", to: "/topics/users/consent/" },
  { from: "/api/endpoints", to: "/dev-tools#endpoints" },
  { from: "/api/errors", to: "/dev-tools/using-api/errors-rejections" },
  { from: "/api/event-simulator", to: "/dev-tools/tools/event-simulator" },
  { from: "/api/overview", to: "/dev-tools" },
  { from: "/api/pagination", to: "/dev-tools/using-api/pagination" },
  { from: "/api/payment-control", to: "/dev-tools/using-api/payment-control" },
  {
    from: "/api/sample-implementation",
    to: "/dev-tools/tools/postman-collection",
  },
  { from: "/api/testing-api", to: "/dev-tools/tools/testing-api" },
  { from: "/api/webhook", to: "/dev-tools/using-api/webhooks" },
  { from: "/concept/account", to: "/topics/accounts/" },
  { from: "/concept/account-funding", to: "/topics/accounts/funding/" },
  {
    from: "/concept/account-holder",
    to: "/topics/onboarding/account-holders/",
  },
  { from: "/concept/account-membership", to: "/accounts/concepts/memberships" }, // DOC-1814 batch 1: chain-rewrite (was /topics/accounts/memberships/)
  { from: "/concept/capital-deposit", to: "/topics/capital-deposits/" },
  { from: "/concept/card", to: "/topics/cards/" },
  { from: "/concept/iban", to: "/topics/accounts/ibans/" },
  { from: "/concept/merchants-accepting-payments", to: "/topics/merchants/" },
  { from: "/concept/overview", to: "/get-started/set-up-swan/glossary" },
  { from: "/concept/payment", to: "/topics/payments/" },
  { from: "/concept/projects", to: "/get-started/set-up-swan/create-project" },
  { from: "/concept/user", to: "/topics/users/" },
  { from: "/guide/accept-payments-merchants", to: "/topics/merchants/" },
  {
    from: "/guide/choose-integration",
    to: "/get-started/set-up-swan/choose-integration",
  },
  { from: "/guide/control-card-usage", to: "/topics/payments/cards/sandbox" },
  {
    from: "/guide/create-a-capital-deposit",
    to: "/topics/capital-deposits/france/guide",
  },
  { from: "/guide/create-a-new-account", to: "/topics/onboarding/#links" },
  { from: "/guide/fund-an-account", to: "/topics/accounts/funding/" },
  {
    from: "/guide/give-access-to-your-account",
    to: "/accounts/concepts/memberships", // DOC-1814 batch 1: chain-rewrite (was /topics/accounts/memberships/)
  },
  { from: "/guide/issue-cards", to: "/topics/cards/overview/guide-issue" },
  { from: "/guide/make-a-transaction", to: "/topics/payments/" },
  { from: "/guide/manage-accounts-and-ibans", to: "/topics/accounts/ibans/" },
  { from: "/guide/quickstart", to: "/get-started/set-up-swan/step-by-step" },
  { from: "/guide/use-our-api", to: "/dev-tools" },
  { from: "/guide/use-our-webhooks", to: "/dev-tools/using-api/webhooks" },
  { from: "/help/changelog", to: "/changelog/" },
  { from: "/help/contact-us", to: "/topics/contact" },
  {
    from: "/help/countries-coverage",
    to: "/get-started/become-a-partner/country-coverage",
  },
  { from: "/help/faq", to: "/" },
  {
    from: "/help/vulnerability-disclosure",
    to: "/get-started/become-a-partner/protections#vulnerability-disclosure",
  },
  {
    from: "/regulatory/build-a-compliant-billing-offer",
    to: "/topics/accounts/billing/guide-compliant-billing",
  },
  {
    from: "/regulatory/go-live-process",
    to: "/get-started/set-up-swan/create-project",
  },
  { from: "/regulatory/partnership-with-swan", to: "/get-started/become-a-partner" },
  {
    from: "/regulatory/registration-process",
    to: "/get-started/become-a-partner/orias-registration",
  },
  {
    from: "/regulatory/required-kyb-documents-for-company-accounts",
    to: "/accounts/reference/country-requirements",
  },
  { from: "/regulatory/status-options", to: "/get-started/become-a-partner/licence-regulatory-status#legal-status" },
  {
    from: "/user-flow-diagrams/consent",
    to: "/topics/users/consent/#consent-diagrams-end-user",
  },
  {
    from: "/user-flow-diagrams/identity-verification-process",
    to: "/topics/users/identifications/#diagrams",
  },
  {
    from: "/user-flow-diagrams/onboardings",
    to: "/topics/onboarding/company/#diagrams",
  },
  { from: "/user-flow-diagrams/passcode-reset", to: "/topics/users/#login" },
  { from: "/user-flow-diagrams/sign-in", to: "/topics/users/#signup" },
  { from: "/user-flow-diagrams/sign-up", to: "/topics/users/#login" },
  {
    from: "/api/authentication/project-access-token",
    to: "/dev-tools/using-api/authentication#tokens-project",
  },
  {
    from: "/api/authentication/user-access-token",
    to: "/dev-tools/using-api/authentication#tokens-user",
  },
  {
    from: "/api/consent/integrate-strong-customer-authentication-sca",
    to: "/topics/users/consent/guide-integrate-sca",
  },
  {
    from: "/api/consent/multiple-consent",
    to: "/topics/users/consent/#multi-consent",
  },
  {
    from: "/api/consent/preferred-channel",
    to: "/topics/users/consent/#notifications",
  },
  {
    from: "/api/consent/server-to-server-consent",
    to: "/topics/users/consent/#s2s",
  },
  {
    from: "/api/consent/workflows",
    to: "/topics/users/consent/#consent-diagrams",
  },
  {
    from: "/concept/account-funding/funding-source",
    to: "/topics/accounts/funding/#sources",
  },
  {
    from: "/concept/account-funding/payment-mandate",
    to: "/topics/accounts/funding/#mandates",
  },
  {
    from: "/concept/account-funding/rolling-reserve",
    to: "/topics/accounts/funding/#rolling-reserve",
  },
  {
    from: "/concept/account-holder/country-requirements",
    to: "/topics/onboarding/#country-reqs",
  },
  { from: "/concept/account-holder/onboarding", to: "/topics/onboarding/" },
  {
    from: "/concept/account-holder/supporting-documents",
    to: "/topics/accounts/documents/",
  },
  { from: "/concept/account/balances", to: "/topics/accounts/#balances" },
  { from: "/concept/account/billing", to: "/topics/accounts/billing/" },
  {
    from: "/concept/account/transactions",
    to: "/topics/accounts/#transactions",
  },
  { from: "/concept/iban/iban-issuing", to: "/topics/accounts/ibans/#main" },
  {
    from: "/concept/iban/iban-validation",
    to: "/topics/accounts/ibans/guide-validate",
  },
  { from: "/concept/iban/local-ibans", to: "/topics/accounts/ibans/#local" },
  {
    from: "/concept/merchants-accepting-payments/french-checks-for-merchants",
    to: "/topics/merchants/in-person/checks/",
  },
  {
    from: "/concept/merchants-accepting-payments/internal-direct-debit-for-merchants",
    to: "/topics/merchants/online/idd/",
  },
  {
    from: "/concept/merchants-accepting-payments/sepa-direct-debit-for-merchants",
    to: "/topics/merchants/online/sdd/",
  },
  { from: "/concept/payment/card-payment", to: "/topics/payments/cards/" },
  {
    from: "/concept/payment/credit-transfer",
    to: "/topics/payments/credit-transfers/",
  },
  {
    from: "/concept/payment/direct-debit",
    to: "/topics/payments/direct-debit/",
  },
  {
    from: "/concept/payment/instant-credit-transfer",
    to: "/topics/payments/credit-transfers/sepa/#instant",
  },
  {
    from: "/concept/payment/international-credit-transfers",
    to: "/topics/payments/credit-transfers/international/",
  },
  {
    from: "/concept/payment/standing-orders",
    to: "/topics/payments/credit-transfers/sepa/#standing-orders",
  },
  {
    from: "/guide/accept-payments-merchants/accept-payments-with-french-checks",
    to: "/topics/merchants/in-person/checks/guide-checks",
  },
  {
    from: "/guide/accept-payments-merchants/accept-payments-with-internal-direct-debit",
    to: "/topics/merchants/online/idd/guide-idd",
  },
  {
    from: "/guide/accept-payments-merchants/accept-payments-with-sepa-direct-debit",
    to: "/topics/merchants/online/sdd/guide-sdd",
  },
  {
    from: "/guide/fund-an-account/sdd-b2b",
    to: "/topics/accounts/funding/#methods-dd",
  },
  { from: "/help/faq/account-membership", to: "/accounts/concepts/memberships" }, // DOC-1814 batch 1: chain-rewrite (was /topics/accounts/memberships/)
  { from: "/help/faq/accounts", to: "/topics/accounts/" },
  { from: "/help/faq/api", to: "/dev-tools" },
  { from: "/help/faq/cards", to: "/topics/cards/" },
  { from: "/help/faq/consent", to: "/topics/users/consent/" },
  {
    from: "/help/faq/kyc-and-verification-process",
    to: "/topics/onboarding/account-holders/",
  },
  { from: "/help/faq/onboarding", to: "/topics/onboarding/" },
  { from: "/help/faq/sepa-transactions", to: "/topics/payments/#sepa" },
  {
    from: "/concept/payment/international-credit-transfers/get-a-quote",
    to: "/topics/payments/credit-transfers/international/guide-quote",
  },
  {
    from: "/concept/payment/international-credit-transfers/get-beneficiary-information",
    to: "/topics/payments/credit-transfers/international/guide-beneficiary",
  },
  {
    from: "/concept/payment/international-credit-transfers/get-transaction-details",
    to: "/topics/payments/credit-transfers/international/guide-transaction-details",
  },
  {
    from: "/concept/payment/international-credit-transfers/initiate-an-international-credit-transfer",
    to: "/topics/payments/credit-transfers/international/guide-initiate",
  },
  {
    from: "/concept/payment/international-credit-transfers/simulate-incoming-international-transfer",
    to: "/topics/payments/credit-transfers/international/sandbox",
  },
  {
    from: "/help/faq/account-membership/do-i-need-to-consent-every-single-time-a-new-membership-is-created",
    to: "/accounts/reference/membership-permissions#permissions-none", // DOC-1814 batch 1: chain-rewrite (was /topics/accounts/memberships/#permissions-none)
  },
  {
    from: "/help/faq/accounts/can-i-create-my-own-account-statement",
    to: "/topics/accounts/overview/guide-generate-statement",
  },
  {
    from: "/help/faq/accounts/how-can-i-add-account-members-to-an-account",
    to: "/accounts/guides/memberships/add-one", // DOC-1814 batch 1: chain-rewrite (was /topics/accounts/memberships/guide-add-one)
  },
  {
    from: "/help/faq/accounts/how-is-my-users-money-guaranteed",
    to: "/get-started/become-a-partner/protections/financial-protections",
  },
  {
    from: "/help/faq/accounts/is-my-company-responsible-if-something-happens-with-a-swan-account",
    to: "/get-started/become-a-partner/protections/financial-protections",
  },
  {
    from: "/help/faq/accounts/which-currencies-are-available",
    to: "/topics/accounts/",
  },
  {
    from: "/help/faq/api/can-i-use-the-same-onboarding-url-i-generated-with-the-api-several-times",
    to: "/topics/onboarding/#links",
  },
  {
    from: "/help/faq/api/how-can-i-use-the-state-field-during-the-onboarding",
    to: "/topics/onboarding/#links",
  },
  {
    from: "/help/faq/api/i-encountered-a-bug-while-using-the-api-what-should-i-do",
    to: "/dev-tools#troubleshooting",
  },
  {
    from: "/help/faq/api/i-get-a-cors-error-when-using-the-api-what-can-i-do",
    to: "/dev-tools#backend",
  },
  {
    from: "/help/faq/api/i-get-an-error-500-at-the-end-of-onboarding.-why",
    to: "/topics/onboarding/#links",
  },
  {
    from: "/help/faq/api/to-enter-the-list-of-uri-redirects-can-i-use-a-domain-instead-of-an-absolute-uri",
    to: "/dev-tools/using-api/authentication#tokens-user-uri",
  },
  {
    from: "/help/faq/api/when-i-request-a-list-via-the-api-is-the-number-of-results-limited",
    to: "/dev-tools/using-api/pagination#elements",
  },
  {
    from: "/help/faq/api/why-isnt-the-api-working-in-the-live-environment-when-it-worked-great-in-sandbox",
    to: "/dev-tools#environments",
  },
  {
    from: "/help/faq/cards/after-uploading-my-logo-i-see-a-black-or-white-rectangle-instead-of-my-logo",
    to: "/topics/cards/design/guide-standard#logo",
  },
  {
    from: "/help/faq/cards/can-i-define-or-change-my-pin-code",
    to: "/topics/cards/physical/#pin",
  },
  { from: "/help/faq/cards/can-i-pay-everywhere", to: "/topics/cards/" },
  {
    from: "/help/faq/cards/can-i-provide-a-pin-code-to-someone-other-than-the-cardholder-for-example-a-helper-agency",
    to: "/topics/cards/physical/#pin",
  },
  {
    from: "/help/faq/cards/can-swan-issue-cards-with-my-companys-custom-design",
    to: "/topics/cards/design/guide-custom",
  },
  {
    from: "/help/faq/cards/can-there-be-several-cards-attached-to-a-natural-persons-account",
    to: "/topics/cards/#cards-account-memberships",
  },
  {
    from: "/help/faq/cards/do-cards-come-with-insurance",
    to: "/topics/cards/",
  },
  {
    from: "/help/faq/cards/does-3ds-work-for-single-use-virtual-cards-suvc",
    to: "/topics/payments/cards/#3ds",
  },
  {
    from: "/help/faq/cards/how-do-card-payments-work",
    to: "/topics/payments/cards/#authorization-clearing",
  },
  {
    from: "/help/faq/cards/the-logo-appears-smaller-than-it-should-be-even-with-a-100-zoom",
    to: "/topics/cards/design/guide-standard#logo",
  },
  {
    from: "/help/faq/cards/what-are-the-guidelines-to-add-a-custom-logo-on-cards",
    to: "/topics/cards/design/guide-standard#logo",
  },
  {
    from: "/help/faq/cards/what-does-a-declined-payment-with-the-reason-merchant-should-resubmit-authorization-mean",
    to: "/topics/payments/cards/#3ds",
  },
  {
    from: "/help/faq/cards/what-is-3ds-and-when-users-need-to-use-it",
    to: "/topics/payments/cards/#3ds",
  },
  {
    from: "/help/faq/cards/what-is-the-exchange-rate-when-i-make-a-payment-outside-the-eea",
    to: "/topics/payments/cards/#3ds",
  },
  {
    from: "/help/faq/cards/what-type-of-cards-does-swan-provide",
    to: "/topics/payments/cards/#3ds",
  },
  {
    from: "/help/faq/consent/can-i-disable-consent",
    to: "/dev-tools/tools/sandbox-users#settings",
  },
  {
    from: "/help/faq/consent/can-i-handle-consent",
    to: "/topics/users/consent/#overview",
  },
  {
    from: "/help/faq/kyc-and-verification-process/how-can-i-entice-my-user-to-verify-their-identity",
    to: "/topics/users/identifications/#encourage",
  },
  {
    from: "/help/faq/kyc-and-verification-process/how-can-i-track-my-customers-verification-process",
    to: "/topics/users/identifications/#tracking",
  },
  {
    from: "/help/faq/kyc-and-verification-process/which-types-of-businesses-does-swan-restrict",
    to: "/get-started/become-a-partner/licence-regulatory-status#restricted-businesses",
  },
  {
    from: "/help/faq/kyc-and-verification-process/why-do-my-users-need-to-go-through-kyc",
    to: "/topics/users/identifications/",
  },
  {
    from: "/help/faq/onboarding/is-the-kyc-process-over-after-identity-document-verification-and-liveness-detection",
    to: "/topics/users/identifications/#overview",
  },
  {
    from: "/help/faq/sepa-transactions/what-are-the-countries-reachable-on-the-sepa-network",
    to: "/topics/payments/#sepa-locations",
  },
  {
    from: "/help/faq/sepa-transactions/what-are-the-reference-and-label-fields-describing-a-transaction",
    to: "/topics/payments/credit-transfers/#label-reference",
  },
  {
    from: "/help/faq/sepa-transactions/what-happens-if-a-debtor-enters-the-wrong-bic-when-making-a-sepa-credit-transfer",
    to: "/topics/payments/credit-transfers/sepa/",
  },
  {
    from: "/help/faq/sepa-transactions/when-is-the-sepa-network-open",
    to: "/topics/payments/#sepa-availability",
  },
  {
    from: "/help/faq/sepa-transactions/why-cant-i-view-the-label-or-the-reference-on-my-bank-account",
    to: "/topics/payments/credit-transfers/#label-reference",
  },
  {
    from: "/help/faq/sepa-transactions/why-is-my-sepa-credit-transfer-still-pending",
    to: "/topics/payments/credit-transfers/#statuses",
  },
  {
    from: "/topics/cards/physical/guide-renew",
    to: "/topics/cards/physical/#renew",
  },
  {
    from: "/topics/accounts/overview/guide-close",
    to: "/topics/accounts/closure",
  },
  {
    from: "/topics/merchants/sdd",
    to: "/topics/merchants/online/sdd/",
  },
  {
    from: "/topics/merchants/idd",
    to: "/topics/merchants/online/idd/",
  },
  {
    from: "/topics/merchants/checks",
    to: "/topics/merchants/in-person/checks/",
  },
  {
    from: "/partnership/document-center",
    to: "/accounts/reference/country-requirements",
  },
  {
    from: "/topics/onboarding/documents",
    to: "/topics/accounts/documents/",
  },
  {
    from: "/topics/onboarding/documents/guide-get-list",
    to: "/topics/onboarding/overview/guide-get-list",
  },
  {
    from: "/topics/accounts/documents/guide-upload",
    to: "/topics/accounts/documents/guide-upload-onboarding",
  },
  {
    from: "/topics/accounts/funding/guide-cancel-request",
    to: "/topics/accounts/funding/",
  },
  {
    from: "/partnership/overview/protections",
    to: "/get-started/become-a-partner/protections/financial-protections",
  },
  {
    from: '/preview/belgian-ibans',
    to: '/topics/accounts/ibans/#local',
  },
  {
    from: '/preview/card-insurance/',
    to: '/topics/cards/card-packages',
  },
  {
    from: '/preview/card-insurance/guide-insurance-integration',
    to: '/topics/cards/card-packages/guide-product-configuration',
  },
  {
    from: '/preview/belgian-ibans/belgian-ibans',
    to: '/topics/accounts/ibans/#local',
  },
  {
    from: '/preview/belgian-ibans/partnership_document-center_company-registration_belgium',
    to: '/accounts/reference/country-requirements#belgium',
  },
  {
    from: '/preview/verification-of-payee',
    to: '/topics/payments/credit-transfers/sepa/vop/verification-of-payee',
  },
  {
    from: '/preview/vop/verification-of-payee',
    to: '/topics/payments/credit-transfers/sepa/vop/verification-of-payee',
  },
  {
    from: '/preview/vop/guide-verify-beneficiary',
    to: '/topics/payments/credit-transfers/sepa/vop/guide-verify-beneficiary',
  },
  {
    from: '/preview/vop/bulk-credit-transfers',
    to: '/topics/payments/credit-transfers/sepa/vop/bulk-credit-transfers',
  },
  {
    from: '/preview/vop/incoming-vop-requests',
    to: '/topics/payments/credit-transfers/sepa/vop/incoming-vop-requests',
  },
  // In-person cards: preview → production
  {
    from: '/preview/in-person/cards',
    to: '/topics/merchants/in-person/cards',
  },
  {
    from: '/preview/in-person/cards/guide-accept',
    to: '/topics/merchants/in-person/cards/guide-accept',
  },
  {
    from: '/preview/in-person/cards/guide-setup',
    to: '/topics/merchants/in-person/cards/guide-setup',
  },
  {
    from: '/preview/in-person/cards/guide-request-method',
    to: '/topics/merchants/in-person/cards/guide-request-method',
  },
  {
    from: '/preview/in-person/cards/guide-initialize',
    to: '/topics/merchants/in-person/cards/guide-initialize',
  },
  {
    from: '/preview/in-person/cards/guide-create-payments',
    to: '/topics/merchants/in-person/cards/guide-create-payments',
  },
  {
    from: '/preview/in-person/cards/sandbox',
    to: '/topics/merchants/in-person/cards/sandbox',
  },
  // French checks: online → in-person
  {
    from: '/topics/merchants/online/checks',
    to: '/topics/merchants/in-person/checks/',
  },
  {
    from: '/topics/merchants/online/checks/guide-checks',
    to: '/topics/merchants/in-person/checks/guide-checks',
  },
  {
    from: '/topics/merchants/online/checks/guide-request',
    to: '/topics/merchants/in-person/checks/guide-request',
  },
  {
    from: '/topics/merchants/online/checks/guide-initiate',
    to: '/topics/merchants/in-person/checks/guide-initiate',
  },
  {
    from: '/topics/merchants/online/checks/sandbox',
    to: '/topics/merchants/in-person/checks/sandbox',
  },
];
