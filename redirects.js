// redirects from original doc pathnames
module.exports = [
  // DOC-1814 — Capital deposits promoted to its own domain (out of onboarding)
  { from: "/accounts/guides/onboarding/capital-deposits", to: "/accounts/guides/capital-deposits" },
  { from: "/accounts/guides/onboarding/capital-deposits/create-case", to: "/accounts/guides/capital-deposits/create-case" },
  { from: "/accounts/guides/onboarding/capital-deposits/upload-documents", to: "/accounts/guides/capital-deposits/upload-documents" },
  { from: "/accounts/guides/onboarding/capital-deposits/update-company", to: "/accounts/guides/capital-deposits/update-company" },
  { from: "/accounts/guides/onboarding/capital-deposits/update-shareholder-amount", to: "/accounts/guides/capital-deposits/update-shareholder-amount" },
  { from: "/accounts/guides/onboarding/capital-deposits/cancel", to: "/accounts/guides/capital-deposits/cancel" },
  { from: "/accounts/reference/onboarding/capital-deposit-reference", to: "/accounts/reference/capital-deposits" },
  // DOC-1814 — Verification renewal moved from onboarding to account-holders
  { from: "/accounts/concepts/onboarding/verification-renewal", to: "/accounts/concepts/account-holders/verification-renewal" },
  // DOC-1814 cutover — batch 3B: developers -> build
  { from: "/developers", to: "/build" },
  { from: "/developers/contact", to: "/get-started/get-help" },
  { from: "/developers/graphql", to: "/build/graphql" },
  { from: "/developers/tools", to: "/build" },
  { from: "/developers/tools/api-explorer", to: "/build/tools/api-explorer" },
  { from: "/developers/tools/event-simulator", to: "/build/tools/event-simulator" },
  { from: "/developers/tools/guide-test-tools", to: "/build/tools/test-tools-guide" },
  { from: "/developers/tools/mcp-servers", to: "/build/tools/mcp-servers" },
  { from: "/developers/tools/postman-collection", to: "/build/tools/postman-collection" },
  { from: "/developers/tools/sandbox-users", to: "/build/tools/sandbox-users" },
  { from: "/developers/tools/testing-api", to: "/build/tools/testing-api" },
  { from: "/developers/using-api/authentication", to: "/build/using-api/authentication" },
  { from: "/developers/using-api/authentication/guide-get-token-project", to: "/build/using-api/authentication#get-token-project" },
  { from: "/developers/using-api/authentication/guide-get-token-user", to: "/build/using-api/authentication#get-token-user" },
  { from: "/developers/using-api/authentication/guide-impersonate", to: "/build/using-api/authentication#impersonate" },
  { from: "/developers/using-api/errors-rejections", to: "/build/using-api/errors-rejections" },
  { from: "/developers/using-api/idempotency", to: "/build/using-api/idempotency" },
  { from: "/developers/using-api/pagination", to: "/build/using-api/pagination" },
  { from: "/developers/using-api/payment-control", to: "/build/using-api/payment-control" },
  { from: "/developers/using-api/webhooks", to: "/build/using-api/webhooks" },
  // end batch 3B
  // DOC-1814 — "Dev Tools" section renamed to "Build" (/dev-tools -> /build)
  { from: "/dev-tools", to: "/build" },
  { from: "/dev-tools/graphql", to: "/build/graphql" },
  { from: "/dev-tools/tools/api-explorer", to: "/build/tools/api-explorer" },
  { from: "/dev-tools/tools/event-simulator", to: "/build/tools/event-simulator" },
  { from: "/dev-tools/tools/mcp-servers", to: "/build/tools/mcp-servers" },
  { from: "/dev-tools/tools/postman-collection", to: "/build/tools/postman-collection" },
  { from: "/dev-tools/tools/sandbox-users", to: "/build/tools/sandbox-users" },
  { from: "/dev-tools/tools/test-tools-guide", to: "/build/tools/test-tools-guide" },
  { from: "/dev-tools/tools/testing-api", to: "/build/tools/testing-api" },
  { from: "/dev-tools/using-api/authentication", to: "/build/using-api/authentication" },
  { from: "/dev-tools/using-api/errors-rejections", to: "/build/using-api/errors-rejections" },
  { from: "/dev-tools/using-api/idempotency", to: "/build/using-api/idempotency" },
  { from: "/dev-tools/using-api/pagination", to: "/build/using-api/pagination" },
  { from: "/dev-tools/using-api/payment-control", to: "/build/using-api/payment-control" },
  { from: "/dev-tools/using-api/webhooks", to: "/build/using-api/webhooks" },
  // end build rename
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
  { from: "/partnership/contact", to: "/get-started/get-help" },
  { from: "/partnership/document-center/company-registration", to: "/accounts/reference/onboarding/country-requirements" },
  { from: "/partnership/document-center/company-registration/france", to: "/accounts/reference/onboarding/country-requirements/france" },
  { from: "/partnership/document-center/company-registration/germany", to: "/accounts/reference/onboarding/country-requirements/germany" },
  { from: "/partnership/document-center/company-registration/italy", to: "/accounts/reference/onboarding/country-requirements/italy" },
  { from: "/partnership/document-center/company-registration/spain", to: "/accounts/reference/onboarding/country-requirements/spain" },
  { from: "/partnership/document-center/company-registration/netherlands", to: "/accounts/reference/onboarding/country-requirements/netherlands" },
  { from: "/partnership/document-center/company-registration/belgium", to: "/accounts/reference/onboarding/country-requirements/belgium" },
  { from: "/partnership/document-center/proof-address", to: "/accounts/reference/onboarding/proof-of-address" },
  // end batch 2
  // DOC-1814 — account-holders relocated from guides/onboarding to concepts
  { from: "/accounts/guides/onboarding/account-holders", to: "/accounts/concepts/account-holders" },
  // DOC-1814 — onboarding model pages relocated from guides to concepts
  { from: "/accounts/guides/onboarding/statuses", to: "/accounts/concepts/onboarding/statuses" },
  { from: "/accounts/guides/onboarding/notifications", to: "/accounts/concepts/onboarding/notifications" },
  { from: "/accounts/guides/onboarding/verification-renewal", to: "/accounts/concepts/account-holders/verification-renewal" },
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
    to: "/payments/guides/merchants/profiles/request",
  },
  { from: "/api/api-explorer", to: "/build/tools/api-explorer" },
  { from: "/api/authentication", to: "/build/using-api/authentication" },
  { from: "/api/consent", to: "/users/concepts/consent/" },
  { from: "/api/endpoints", to: "/build#endpoints" },
  { from: "/api/errors", to: "/build/using-api/errors-rejections" },
  { from: "/api/event-simulator", to: "/build/tools/event-simulator" },
  { from: "/api/overview", to: "/build" },
  { from: "/api/pagination", to: "/build/using-api/pagination" },
  { from: "/api/payment-control", to: "/build/using-api/payment-control" },
  {
    from: "/api/sample-implementation",
    to: "/build/tools/postman-collection",
  },
  { from: "/api/testing-api", to: "/build/tools/testing-api" },
  { from: "/api/webhook", to: "/build/using-api/webhooks" },
  { from: "/concept/account", to: "/accounts/concepts/account" }, // DOC-1814: chain-rewrite (was /topics/accounts/)
  { from: "/concept/account-funding", to: "/accounts/concepts/funding" },
  {
    from: "/concept/account-holder",
    to: "/accounts/concepts/account-holders",
  },
  { from: "/concept/account-membership", to: "/accounts/concepts/memberships" }, // DOC-1814 batch 1: chain-rewrite (was /topics/accounts/memberships/)
  { from: "/concept/capital-deposit", to: "/accounts/guides/capital-deposits" },
  { from: "/concept/card", to: "/cards" },
  { from: "/concept/iban", to: "/accounts/concepts/ibans" },
  { from: "/concept/merchants-accepting-payments", to: "/payments/concepts/merchants/" },
  { from: "/concept/overview", to: "/get-started/set-up-swan/glossary" },
  { from: "/concept/payment", to: "/payments/" },
  { from: "/concept/projects", to: "/get-started/set-up-swan/create-project" },
  { from: "/concept/user", to: "/users/concepts/user/" },
  { from: "/guide/accept-payments-merchants", to: "/payments/concepts/merchants/" },
  {
    from: "/guide/choose-integration",
    to: "/get-started/set-up-swan/choose-integration",
  },
  { from: "/guide/control-card-usage", to: "/payments/reference/sandbox/sandbox-cards" },
  {
    from: "/guide/create-a-capital-deposit",
    to: "/accounts/guides/capital-deposits#france",
  },
  { from: "/guide/create-a-new-account", to: "/accounts/guides/onboarding#links" },
  { from: "/guide/fund-an-account", to: "/accounts/concepts/funding" },
  {
    from: "/guide/give-access-to-your-account",
    to: "/accounts/concepts/memberships", // DOC-1814 batch 1: chain-rewrite (was /topics/accounts/memberships/)
  },
  { from: "/guide/issue-cards", to: "/cards/guides/lifecycle/issue" },
  { from: "/guide/make-a-transaction", to: "/payments/" },
  { from: "/guide/manage-accounts-and-ibans", to: "/accounts/concepts/ibans" },
  { from: "/guide/quickstart", to: "/get-started/set-up-swan/step-by-step" },
  { from: "/guide/use-our-api", to: "/build" },
  { from: "/guide/use-our-webhooks", to: "/build/using-api/webhooks" },
  { from: "/help/changelog", to: "/changelog/" },
  { from: "/help/contact-us", to: "/get-started/get-help" },
  { from: "/topics/contact", to: "/get-started/get-help" },
  { from: "/welcome", to: "/get-started" },
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
    to: "/accounts/guides/billing/compliant-billing",
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
    to: "/accounts/reference/onboarding/country-requirements",
  },
  { from: "/regulatory/status-options", to: "/get-started/become-a-partner/licence-regulatory-status#legal-status" },
  {
    from: "/user-flow-diagrams/consent",
    to: "/users/concepts/consent/#consent-diagrams-end-user",
  },
  {
    from: "/user-flow-diagrams/identity-verification-process",
    to: "/users/concepts/identifications/#diagrams",
  },
  {
    from: "/user-flow-diagrams/onboardings",
    to: "/accounts/guides/onboarding/company/requirements#diagrams",
  },
  { from: "/user-flow-diagrams/passcode-reset", to: "/users/concepts/user/#login" },
  { from: "/user-flow-diagrams/sign-in", to: "/users/concepts/user/#signup" },
  { from: "/user-flow-diagrams/sign-up", to: "/users/concepts/user/#login" },
  {
    from: "/api/authentication/project-access-token",
    to: "/build/using-api/authentication#tokens-project",
  },
  {
    from: "/api/authentication/user-access-token",
    to: "/build/using-api/authentication#tokens-user",
  },
  {
    from: "/api/consent/integrate-strong-customer-authentication-sca",
    to: "/users/guides/consent/integrate-sca",
  },
  {
    from: "/api/consent/multiple-consent",
    to: "/users/concepts/consent/#multi-consent",
  },
  {
    from: "/api/consent/preferred-channel",
    to: "/users/concepts/consent/#notifications",
  },
  {
    from: "/api/consent/server-to-server-consent",
    to: "/users/concepts/consent/#s2s",
  },
  {
    from: "/api/consent/workflows",
    to: "/users/concepts/consent/#consent-diagrams",
  },
  {
    from: "/concept/account-funding/funding-source",
    to: "/accounts/concepts/funding/sources",
  },
  {
    from: "/concept/account-funding/payment-mandate",
    to: "/accounts/concepts/funding/payment-mandates",
  },
  {
    from: "/concept/account-funding/rolling-reserve",
    to: "/accounts/concepts/funding/rolling-reserve",
  },
  {
    from: "/concept/account-holder/country-requirements",
    to: "/accounts/guides/onboarding#country-reqs",
  },
  { from: "/concept/account-holder/onboarding", to: "/accounts/guides/onboarding" },
  {
    from: "/concept/account-holder/supporting-documents",
    to: "/accounts/concepts/documents",
  },
  { from: "/concept/account/balances", to: "/accounts/concepts/account/balances" }, // DOC-1814: chain-rewrite (was /topics/accounts/#balances)
  { from: "/concept/account/billing", to: "/accounts/concepts/billing" },
  {
    from: "/concept/account/transactions",
    to: "/accounts/concepts/account/transactions", // DOC-1814: chain-rewrite (was /topics/accounts/#transactions)
  },
  { from: "/concept/iban/iban-issuing", to: "/accounts/concepts/ibans/main" },
  {
    from: "/concept/iban/iban-validation",
    to: "/accounts/guides/ibans/validate",
  },
  { from: "/concept/iban/local-ibans", to: "/accounts/concepts/ibans/local" },
  {
    from: "/concept/merchants-accepting-payments/french-checks-for-merchants",
    to: "/payments/guides/merchants/in-person/checks/",
  },
  {
    from: "/concept/merchants-accepting-payments/internal-direct-debit-for-merchants",
    to: "/payments/guides/merchants/online/idd/",
  },
  {
    from: "/concept/merchants-accepting-payments/sepa-direct-debit-for-merchants",
    to: "/payments/guides/merchants/online/sdd/",
  },
  { from: "/concept/payment/card-payment", to: "/payments/concepts/cards/" },
  {
    from: "/concept/payment/credit-transfer",
    to: "/payments/concepts/credit-transfers/",
  },
  {
    from: "/concept/payment/direct-debit",
    to: "/payments/concepts/direct-debit/",
  },
  {
    from: "/concept/payment/instant-credit-transfer",
    to: "/payments/concepts/credit-transfers/sepa#instant",
  },
  {
    from: "/concept/payment/international-credit-transfers",
    to: "/payments/concepts/credit-transfers/international",
  },
  {
    from: "/concept/payment/standing-orders",
    to: "/payments/concepts/credit-transfers/sepa#standing-orders",
  },
  {
    from: "/guide/accept-payments-merchants/accept-payments-with-french-checks",
    to: "/payments/guides/merchants/in-person/checks/accept",
  },
  {
    from: "/guide/accept-payments-merchants/accept-payments-with-internal-direct-debit",
    to: "/payments/guides/merchants/online/idd/accept",
  },
  {
    from: "/guide/accept-payments-merchants/accept-payments-with-sepa-direct-debit",
    to: "/payments/guides/merchants/online/sdd/accept",
  },
  {
    from: "/guide/fund-an-account/sdd-b2b",
    to: "/accounts/concepts/funding/sources#methods-dd",
  },
  { from: "/help/faq/account-membership", to: "/accounts/concepts/memberships" }, // DOC-1814 batch 1: chain-rewrite (was /topics/accounts/memberships/)
  { from: "/help/faq/accounts", to: "/accounts/concepts/account" }, // DOC-1814: chain-rewrite (was /topics/accounts/)
  { from: "/help/faq/api", to: "/build" },
  { from: "/help/faq/cards", to: "/cards" },
  { from: "/help/faq/consent", to: "/users/concepts/consent/" },
  {
    from: "/help/faq/kyc-and-verification-process",
    to: "/accounts/concepts/account-holders",
  },
  { from: "/help/faq/onboarding", to: "/accounts/guides/onboarding" },
  { from: "/help/faq/sepa-transactions", to: "/payments/concepts/transactions/#sepa" },
  {
    from: "/concept/payment/international-credit-transfers/get-a-quote",
    to: "/payments/guides/credit-transfers/international/quote",
  },
  {
    from: "/concept/payment/international-credit-transfers/get-beneficiary-information",
    to: "/payments/guides/credit-transfers/international/get-beneficiary-forms",
  },
  {
    from: "/concept/payment/international-credit-transfers/get-transaction-details",
    to: "/payments/guides/credit-transfers/international/get-transaction-forms",
  },
  {
    from: "/concept/payment/international-credit-transfers/initiate-an-international-credit-transfer",
    to: "/payments/guides/credit-transfers/international/initiate",
  },
  {
    from: "/concept/payment/international-credit-transfers/simulate-incoming-international-transfer",
    to: "/payments/reference/sandbox/sandbox-international",
  },
  {
    from: "/help/faq/account-membership/do-i-need-to-consent-every-single-time-a-new-membership-is-created",
    to: "/accounts/reference/memberships/membership-permissions#permissions-none", // DOC-1814 batch 1: chain-rewrite (was /topics/accounts/memberships/#permissions-none)
  },
  {
    from: "/help/faq/accounts/can-i-create-my-own-account-statement",
    to: "/accounts/guides/account-operations/generate-statement",
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
    to: "/accounts/concepts/account", // DOC-1814: chain-rewrite (was /topics/accounts/)
  },
  {
    from: "/help/faq/api/can-i-use-the-same-onboarding-url-i-generated-with-the-api-several-times",
    to: "/accounts/guides/onboarding#links",
  },
  {
    from: "/help/faq/api/how-can-i-use-the-state-field-during-the-onboarding",
    to: "/accounts/guides/onboarding#links",
  },
  {
    from: "/help/faq/api/i-encountered-a-bug-while-using-the-api-what-should-i-do",
    to: "/build#troubleshooting",
  },
  {
    from: "/help/faq/api/i-get-a-cors-error-when-using-the-api-what-can-i-do",
    to: "/build#backend",
  },
  {
    from: "/help/faq/api/i-get-an-error-500-at-the-end-of-onboarding.-why",
    to: "/accounts/guides/onboarding#links",
  },
  {
    from: "/help/faq/api/to-enter-the-list-of-uri-redirects-can-i-use-a-domain-instead-of-an-absolute-uri",
    to: "/build/using-api/authentication#tokens-user-uri",
  },
  {
    from: "/help/faq/api/when-i-request-a-list-via-the-api-is-the-number-of-results-limited",
    to: "/build/using-api/pagination#elements",
  },
  {
    from: "/help/faq/api/why-isnt-the-api-working-in-the-live-environment-when-it-worked-great-in-sandbox",
    to: "/build#environments",
  },
  {
    from: "/help/faq/cards/after-uploading-my-logo-i-see-a-black-or-white-rectangle-instead-of-my-logo",
    to: "/cards/guides/design/standard#logo",
  },
  {
    from: "/help/faq/cards/can-i-define-or-change-my-pin-code",
    to: "/cards/concepts/physical/pin",
  },
  { from: "/help/faq/cards/can-i-pay-everywhere", to: "/cards" },
  {
    from: "/help/faq/cards/can-i-provide-a-pin-code-to-someone-other-than-the-cardholder-for-example-a-helper-agency",
    to: "/cards/concepts/physical/pin",
  },
  {
    from: "/help/faq/cards/can-swan-issue-cards-with-my-companys-custom-design",
    to: "/cards/guides/design/custom",
  },
  {
    from: "/help/faq/cards/can-there-be-several-cards-attached-to-a-natural-persons-account",
    to: "/cards/concepts/card-formats#cards-account-memberships",
  },
  {
    from: "/help/faq/cards/do-cards-come-with-insurance",
    to: "/cards",
  },
  {
    from: "/help/faq/cards/does-3ds-work-for-single-use-virtual-cards-suvc",
    to: "/payments/concepts/cards/#3ds",
  },
  {
    from: "/help/faq/cards/how-do-card-payments-work",
    to: "/payments/concepts/cards/#authorization-clearing",
  },
  {
    from: "/help/faq/cards/the-logo-appears-smaller-than-it-should-be-even-with-a-100-zoom",
    to: "/cards/guides/design/standard#logo",
  },
  {
    from: "/help/faq/cards/what-are-the-guidelines-to-add-a-custom-logo-on-cards",
    to: "/cards/guides/design/standard#logo",
  },
  {
    from: "/help/faq/cards/what-does-a-declined-payment-with-the-reason-merchant-should-resubmit-authorization-mean",
    to: "/payments/concepts/cards/#3ds",
  },
  {
    from: "/help/faq/cards/what-is-3ds-and-when-users-need-to-use-it",
    to: "/payments/concepts/cards/#3ds",
  },
  {
    from: "/help/faq/cards/what-is-the-exchange-rate-when-i-make-a-payment-outside-the-eea",
    to: "/payments/concepts/cards/#3ds",
  },
  {
    from: "/help/faq/cards/what-type-of-cards-does-swan-provide",
    to: "/payments/concepts/cards/#3ds",
  },
  {
    from: "/help/faq/consent/can-i-disable-consent",
    to: "/build/tools/sandbox-users#settings",
  },
  {
    from: "/help/faq/consent/can-i-handle-consent",
    to: "/users/concepts/consent/#overview",
  },
  {
    from: "/help/faq/kyc-and-verification-process/how-can-i-entice-my-user-to-verify-their-identity",
    to: "/users/concepts/identifications/#encourage",
  },
  {
    from: "/help/faq/kyc-and-verification-process/how-can-i-track-my-customers-verification-process",
    to: "/users/concepts/identifications/#tracking",
  },
  {
    from: "/help/faq/kyc-and-verification-process/which-types-of-businesses-does-swan-restrict",
    to: "/get-started/become-a-partner/licence-regulatory-status#restricted-businesses",
  },
  {
    from: "/help/faq/kyc-and-verification-process/why-do-my-users-need-to-go-through-kyc",
    to: "/users/concepts/identifications/",
  },
  {
    from: "/help/faq/onboarding/is-the-kyc-process-over-after-identity-document-verification-and-liveness-detection",
    to: "/users/concepts/identifications/#overview",
  },
  {
    from: "/help/faq/sepa-transactions/what-are-the-countries-reachable-on-the-sepa-network",
    to: "/payments/concepts/transactions/#sepa-locations",
  },
  {
    from: "/help/faq/sepa-transactions/what-are-the-reference-and-label-fields-describing-a-transaction",
    to: "/payments/concepts/credit-transfers/#label-reference",
  },
  {
    from: "/help/faq/sepa-transactions/what-happens-if-a-debtor-enters-the-wrong-bic-when-making-a-sepa-credit-transfer",
    to: "/payments/concepts/credit-transfers/sepa",
  },
  {
    from: "/help/faq/sepa-transactions/when-is-the-sepa-network-open",
    to: "/payments/concepts/transactions/#sepa-availability",
  },
  {
    from: "/help/faq/sepa-transactions/why-cant-i-view-the-label-or-the-reference-on-my-bank-account",
    to: "/payments/concepts/credit-transfers/#label-reference",
  },
  {
    from: "/help/faq/sepa-transactions/why-is-my-sepa-credit-transfer-still-pending",
    to: "/payments/concepts/credit-transfers/statuses",
  },
  {
    from: "/topics/cards/physical/guide-renew",
    to: "/cards/guides/physical/renew",
  },
  // DOC-1814 — Cards migrated from /topics/cards to /cards (IA shell)
  { from: "/topics/cards", to: "/cards" },
  { from: "/topics/cards/overview/guide-issue", to: "/cards/guides/lifecycle/issue" },
  { from: "/topics/cards/overview/guide-update", to: "/cards/guides/lifecycle/update" },
  { from: "/topics/cards/overview/guide-export", to: "/cards/guides/lifecycle/export" },
  { from: "/topics/cards/design", to: "/cards/concepts/design" },
  { from: "/topics/cards/design/guide-standard", to: "/cards/guides/design/standard" },
  { from: "/topics/cards/design/guide-custom", to: "/cards/guides/design/custom" },
  { from: "/topics/cards/card-packages", to: "/cards/concepts/card-packages" },
  { from: "/topics/cards/card-packages/guide-product-configuration", to: "/cards/guides/products/configure-card-product" },
  { from: "/topics/cards/card-packages/guide-get-card-package-tier", to: "/cards/guides/products/get-card-package-tier" },
  { from: "/topics/cards/virtual", to: "/cards/concepts/virtual" },
  { from: "/topics/cards/virtual/guide-add", to: "/cards/guides/virtual/add" },
  { from: "/topics/cards/virtual/guide-view-info", to: "/cards/guides/virtual/view-info" },
  { from: "/topics/cards/virtual/guide-cancel", to: "/cards/guides/virtual/cancel" },
  { from: "/topics/cards/physical", to: "/cards/concepts/physical" },
  { from: "/topics/cards/physical/guide-print", to: "/cards/guides/physical/print" },
  { from: "/topics/cards/physical/guide-activate", to: "/cards/guides/physical/activate" },
  { from: "/topics/cards/physical/guide-view-info", to: "/cards/guides/physical/view-info" },
  { from: "/topics/cards/physical/guide-block-unblock", to: "/cards/guides/physical/block-unblock" },
  { from: "/topics/cards/physical/guide-cancel", to: "/cards/guides/physical/cancel" },
  { from: "/topics/cards/physical/sandbox", to: "/cards/reference/sandbox-physical" },
  { from: "/topics/cards/digital", to: "/cards/concepts/digital" },
  { from: "/topics/cards/digital/guide-add", to: "/cards/guides/digital/add" },
  { from: "/topics/cards/digital/guide-cancel", to: "/cards/guides/digital/cancel" },
  { from: "/topics/cards/digital/sandbox", to: "/cards/reference/sandbox-digital" },
  {
    from: "/topics/accounts/overview/guide-close",
    to: "/accounts/concepts/closure",
  },
  {
    from: "/topics/merchants/sdd",
    to: "/payments/guides/merchants/online/sdd/",
  },
  {
    from: "/topics/merchants/idd",
    to: "/payments/guides/merchants/online/idd/",
  },
  {
    from: "/topics/merchants/checks",
    to: "/payments/guides/merchants/in-person/checks/",
  },
  {
    from: "/partnership/document-center",
    to: "/accounts/reference/onboarding/country-requirements",
  },
  {
    from: "/topics/onboarding/documents",
    to: "/accounts/concepts/documents",
  },
  {
    from: "/topics/onboarding/documents/guide-get-list",
    to: "/accounts/guides/onboarding/manage-onboardings#get-list",
  },
  {
    from: "/topics/accounts/documents/guide-upload",
    to: "/accounts/guides/documents/upload-onboarding",
  },
  {
    from: "/topics/accounts/funding/guide-cancel-request",
    to: "/accounts/concepts/funding",
  },
  {
    from: "/partnership/overview/protections",
    to: "/get-started/become-a-partner/protections/financial-protections",
  },
  {
    from: '/preview/belgian-ibans',
    to: '/accounts/concepts/ibans/local',
  },
  {
    from: '/preview/card-insurance/',
    to: '/cards/concepts/card-packages',
  },
  {
    from: '/preview/card-insurance/guide-insurance-integration',
    to: '/cards/guides/products/configure-card-product',
  },
  {
    from: '/preview/belgian-ibans/belgian-ibans',
    to: '/accounts/concepts/ibans/local',
  },
  {
    from: '/preview/belgian-ibans/partnership_document-center_company-registration_belgium',
    to: '/accounts/reference/onboarding/country-requirements/belgium',
  },
  {
    from: '/preview/verification-of-payee',
    to: '/payments/concepts/verification-of-payee/',
  },
  {
    from: '/preview/vop/verification-of-payee',
    to: '/payments/concepts/verification-of-payee/',
  },
  {
    from: '/preview/vop/guide-verify-beneficiary',
    to: '/payments/guides/credit-transfers/sepa/verify-beneficiary',
  },
  {
    from: '/preview/vop/bulk-credit-transfers',
    to: '/payments/concepts/verification-of-payee/bulk-transfers',
  },
  {
    from: '/preview/vop/incoming-vop-requests',
    to: '/payments/guides/credit-transfers/sepa/incoming-vop-requests',
  },
  // In-person cards: preview → production
  {
    from: '/preview/in-person/cards',
    to: '/payments/guides/merchants/in-person/cards/',
  },
  {
    from: '/preview/in-person/cards/guide-accept',
    to: '/payments/guides/merchants/in-person/cards/accept',
  },
  {
    from: '/preview/in-person/cards/guide-setup',
    to: '/payments/guides/merchants/in-person/cards/setup',
  },
  {
    from: '/preview/in-person/cards/guide-request-method',
    to: '/payments/guides/merchants/in-person/cards/request-method',
  },
  {
    from: '/preview/in-person/cards/guide-initialize',
    to: '/payments/guides/merchants/in-person/cards/initialize',
  },
  {
    from: '/preview/in-person/cards/guide-create-payments',
    to: '/payments/guides/merchants/in-person/cards/create-payments',
  },
  {
    from: '/preview/in-person/cards/sandbox',
    to: '/payments/guides/merchants/in-person/cards/sandbox',
  },
  // French checks: online → in-person
  {
    from: '/topics/merchants/online/checks',
    to: '/payments/guides/merchants/in-person/checks/',
  },
  {
    from: '/topics/merchants/online/checks/guide-checks',
    to: '/payments/guides/merchants/in-person/checks/accept',
  },
  {
    from: '/topics/merchants/online/checks/guide-request',
    to: '/payments/guides/merchants/in-person/checks/request',
  },
  {
    from: '/topics/merchants/online/checks/guide-initiate',
    to: '/payments/guides/merchants/in-person/checks/initiate',
  },
  {
    from: '/topics/merchants/online/checks/sandbox',
    to: '/payments/guides/merchants/in-person/checks/sandbox',
  },
  {
    from: "/topics/onboarding",
    to: "/accounts/guides/onboarding",
  },
  {
    from: "/topics/onboarding/account-holders",
    to: "/accounts/concepts/account-holders",
  },
  {
    from: "/topics/onboarding/account-holders/guide-add-additional-account",
    to: "/accounts/guides/onboarding/account-holder-tasks#add-additional-account",
  },
  {
    from: "/topics/onboarding/account-holders/guide-get-status",
    to: "/accounts/guides/onboarding/account-holder-tasks#get-status",
  },
  {
    from: "/topics/onboarding/account-holders/guide-request-first-transfer",
    to: "/accounts/guides/onboarding/account-holder-tasks#request-first-transfer",
  },
  {
    from: "/topics/onboarding/account-holders/guide-export",
    to: "/accounts/guides/onboarding/account-holder-tasks#export",
  },
  {
    from: "/topics/onboarding/account-holders/sandbox",
    to: "/accounts/guides/onboarding/account-holder-tasks#sandbox",
  },
  {
    from: "/topics/onboarding/company",
    to: "/accounts/guides/onboarding/company",
  },
  {
    from: "/topics/onboarding/company/fields",
    to: "/accounts/reference/onboarding/company-onboarding-fields#fields",
  },
  {
    from: "/topics/onboarding/company/guide-create",
    to: "/accounts/guides/onboarding/company/create",
  },
  {
    from: "/topics/onboarding/company/guide-update",
    to: "/accounts/guides/onboarding/company/update",
  },
  {
    from: "/topics/onboarding/individual",
    to: "/accounts/guides/onboarding/individual",
  },
  {
    from: "/topics/onboarding/individual/fields",
    to: "/accounts/reference/onboarding/individual-onboarding-fields#fields",
  },
  {
    from: "/topics/onboarding/individual/guide-create",
    to: "/accounts/guides/onboarding/individual/create",
  },
  {
    from: "/topics/onboarding/individual/guide-update",
    to: "/accounts/guides/onboarding/individual/update",
  },
  {
    from: "/topics/onboarding/overview/guide-migrate",
    to: "/accounts/guides/onboarding/migrate-api",
  },
  {
    from: "/topics/onboarding/overview/guide-get-info",
    to: "/accounts/guides/onboarding/manage-onboardings#get-info",
  },
  {
    from: "/topics/onboarding/overview/guide-get-list",
    to: "/accounts/guides/onboarding/manage-onboardings#get-list",
  },
  {
    from: "/topics/onboarding/overview/guide-export",
    to: "/accounts/guides/onboarding/manage-onboardings#export-onboarding-data",
  },
  {
    from: "/topics/onboarding/overview/guide-finalize",
    to: "/accounts/guides/onboarding/manage-onboardings#finalize",
  },
  {
    from: "/topics/capital-deposits",
    to: "/accounts/guides/capital-deposits",
  },
  {
    from: "/topics/capital-deposits/france/guide",
    to: "/accounts/guides/capital-deposits#france",
  },
  {
    from: "/topics/capital-deposits/france/guide-create-case",
    to: "/accounts/guides/capital-deposits/create-case",
  },
  {
    from: "/topics/capital-deposits/france/guide-upload-documents",
    to: "/accounts/guides/capital-deposits/upload-documents",
  },
  {
    from: "/topics/capital-deposits/guide-cancel",
    to: "/accounts/guides/capital-deposits/cancel",
  },
  {
    from: "/topics/capital-deposits/guide-update-company",
    to: "/accounts/guides/capital-deposits/update-company",
  },
  {
    from: "/topics/capital-deposits/guide-update-shareholder-amount",
    to: "/accounts/guides/capital-deposits/update-shareholder-amount",
  },
  {
    from: "/topics/accounts",
    to: "/accounts/concepts/account",
  },
  {
    from: "/topics/accounts/closure",
    to: "/accounts/concepts/closure",
  },
  {
    from: "/topics/accounts/closure/guide-close-api",
    to: "/accounts/guides/closure/close-link#api",
  },
  {
    from: "/topics/accounts/closure/guide-close-limited",
    to: "/accounts/guides/closure/close-limited",
  },
  {
    from: "/topics/accounts/closure/guide-close-link",
    to: "/accounts/guides/closure/close-link",
  },
  {
    from: "/topics/accounts/closure/guide-close-unlimited",
    to: "/accounts/guides/closure/close-unlimited",
  },
  {
    from: "/topics/accounts/closure/guide-get-closure-info",
    to: "/accounts/guides/closure/get-closure-info",
  },
  {
    from: "/topics/accounts/ibans",
    to: "/accounts/concepts/ibans",
  },
  {
    from: "/topics/accounts/ibans/guide-add-virtual",
    to: "/accounts/guides/ibans/add-virtual",
  },
  {
    from: "/topics/accounts/ibans/guide-cancel-virtual",
    to: "/accounts/guides/ibans/cancel-virtual",
  },
  {
    from: "/topics/accounts/ibans/guide-get-info",
    to: "/accounts/guides/ibans/get-info",
  },
  {
    from: "/topics/accounts/ibans/guide-validate",
    to: "/accounts/guides/ibans/validate",
  },
  {
    from: "/topics/accounts/multiple-accounts",
    to: "/accounts/concepts/multiple-accounts",
  },
  {
    from: "/topics/accounts/multiple-accounts/guide-multiple-accounts-integration",
    to: "/accounts/guides/account-operations/create-additional-account",
  },
  {
    from: "/topics/accounts/overview/guide-export",
    to: "/accounts/guides/account-operations/export",
  },
  {
    from: "/topics/accounts/overview/guide-generate-statement",
    to: "/accounts/guides/account-operations/generate-statement",
  },
  {
    from: "/topics/accounts/overview/guide-get-bank-details",
    to: "/accounts/guides/account-operations/bank-details",
  },
  {
    from: "/topics/accounts/funding",
    to: "/accounts/concepts/funding",
  },
  {
    from: "/topics/accounts/funding/guide-add-source",
    to: "/accounts/guides/funding/add-source",
  },
  {
    from: "/topics/accounts/funding/guide-cancel-source",
    to: "/accounts/guides/funding/cancel-source",
  },
  {
    from: "/topics/accounts/funding/guide-get-info",
    to: "/accounts/guides/funding/get-info",
  },
  {
    from: "/topics/accounts/funding/guide-initiate-request",
    to: "/accounts/guides/funding/initiate-request",
  },
  {
    from: "/topics/accounts/funding/sandbox",
    to: "/accounts/reference/sandbox/sandbox-funding",
  },
  {
    from: "/topics/accounts/billing",
    to: "/accounts/concepts/billing",
  },
  {
    from: "/topics/accounts/billing/guide-compliant-billing",
    to: "/accounts/guides/billing/compliant-billing",
  },
  {
    from: "/topics/accounts/billing/guide-get-details",
    to: "/accounts/guides/billing/get-details",
  },
  {
    from: "/topics/accounts/billing/guide-get-list",
    to: "/accounts/guides/billing/get-list",
  },
  {
    from: "/topics/accounts/billing/sandbox",
    to: "/accounts/reference/sandbox/sandbox-billing",
  },
  {
    from: "/topics/accounts/documents",
    to: "/accounts/concepts/documents",
  },
  {
    from: "/topics/accounts/documents/guide-delete",
    to: "/accounts/guides/documents/delete",
  },
  {
    from: "/topics/accounts/documents/guide-get-info",
    to: "/accounts/guides/documents/get-info",
  },
  {
    from: "/topics/accounts/documents/guide-request-collection-review",
    to: "/accounts/guides/documents/request-collection-review",
  },
  {
    from: "/topics/accounts/documents/guide-upload-onboarding",
    to: "/accounts/guides/documents/upload-onboarding",
  },
  {
    from: "/topics/accounts/documents/guide-upload-transaction",
    to: "/accounts/guides/documents/upload-transaction",
  },
  {
    from: "/topics/accounts/documents/sandbox",
    to: "/accounts/reference/sandbox/sandbox-documents",
  },
  // DOC-1814: reference pages nested into topic subfolders
  { from: "/accounts/reference/membership-permissions", to: "/accounts/reference/memberships/membership-permissions" },
  { from: "/accounts/reference/membership-fields", to: "/accounts/reference/memberships/membership-fields" },
  { from: "/accounts/reference/multiple-accounts-requirements", to: "/accounts/reference/accounts/multiple-accounts-requirements" },
  { from: "/accounts/reference/country-requirements", to: "/accounts/reference/onboarding/country-requirements" },
  { from: "/accounts/reference/company-onboarding-fields", to: "/accounts/reference/onboarding/company-onboarding-fields" },
  { from: "/accounts/reference/company-onboarding-fields-api-mapping", to: "/accounts/reference/onboarding/company-onboarding-fields-api-mapping" },
  { from: "/accounts/reference/individual-onboarding-fields", to: "/accounts/reference/onboarding/individual-onboarding-fields" },
  { from: "/accounts/reference/capital-deposit-reference", to: "/accounts/reference/capital-deposits" },
  { from: "/accounts/reference/proof-of-address", to: "/accounts/reference/onboarding/proof-of-address" },
  { from: "/accounts/reference/sandbox-billing", to: "/accounts/reference/sandbox/sandbox-billing" },
  { from: "/accounts/reference/sandbox-documents", to: "/accounts/reference/sandbox/sandbox-documents" },
  { from: "/accounts/reference/sandbox-funding", to: "/accounts/reference/sandbox/sandbox-funding" },
  // DOC-1814 — Payments + Merchants migrated into the IA shell
  { from: "/topics/payments", to: "/payments/" },
  { from: "/topics/payments/overview/guide-get-payment-info", to: "/payments/guides/overview/get-payment-info" },
  { from: "/topics/payments/overview/guide-get-payment-id", to: "/payments/guides/overview/get-payment-id" },
  { from: "/topics/payments/overview/guide-get-transaction-info", to: "/payments/guides/overview/get-transaction-info" },
  { from: "/topics/payments/overview/guide-get-transaction-id", to: "/payments/guides/overview/get-transaction-id" },
  { from: "/topics/payments/overview/guide-get-transaction-list", to: "/payments/guides/overview/get-transaction-list" },
  { from: "/topics/payments/overview/guide-generate-transaction-statement", to: "/payments/guides/overview/generate-transaction-statement" },
  { from: "/topics/payments/overview/guide-export", to: "/payments/guides/overview/export" },
  { from: "/topics/payments/cards", to: "/payments/concepts/cards/" },
  { from: "/topics/payments/cards/guide-get-list", to: "/payments/guides/cards/get-list" },
  { from: "/topics/payments/cards/guide-get-enriched-info", to: "/payments/guides/cards/get-enriched-info" },
  { from: "/topics/payments/cards/sandbox", to: "/payments/reference/sandbox/sandbox-cards" },
  { from: "/topics/payments/credit-transfers", to: "/payments/concepts/credit-transfers/" },
  { from: "/topics/payments/credit-transfers/sepa", to: "/payments/concepts/credit-transfers/sepa" },
  { from: "/topics/payments/credit-transfers/sepa/guide-initiate-ct", to: "/payments/guides/credit-transfers/sepa/initiate-ct" },
  { from: "/topics/payments/credit-transfers/sepa/guide-cancel-ct", to: "/payments/guides/credit-transfers/sepa/cancel-ct" },
  { from: "/topics/payments/credit-transfers/sepa/guide-refund-ct", to: "/payments/guides/credit-transfers/sepa/refund-ct" },
  { from: "/topics/payments/credit-transfers/sepa/guide-add-beneficiary", to: "/payments/guides/credit-transfers/sepa/add-beneficiary" },
  { from: "/topics/payments/credit-transfers/sepa/guide-schedule-so", to: "/payments/guides/credit-transfers/sepa/schedule-so" },
  { from: "/topics/payments/credit-transfers/sepa/guide-cancel-so", to: "/payments/guides/credit-transfers/sepa/cancel-so" },
  { from: "/topics/payments/credit-transfers/sepa/sandbox", to: "/payments/reference/sandbox/sandbox-sepa" },
  { from: "/topics/payments/credit-transfers/sepa/vop/verification-of-payee", to: "/payments/concepts/verification-of-payee/" },
  { from: "/topics/payments/credit-transfers/sepa/vop/bulk-credit-transfers", to: "/payments/concepts/verification-of-payee/bulk-transfers" },
  { from: "/topics/payments/credit-transfers/sepa/vop/guide-verify-beneficiary", to: "/payments/guides/credit-transfers/sepa/verify-beneficiary" },
  { from: "/topics/payments/credit-transfers/sepa/vop/incoming-vop-requests", to: "/payments/guides/credit-transfers/sepa/incoming-vop-requests" },
  { from: "/topics/payments/credit-transfers/international", to: "/payments/concepts/credit-transfers/international" },
  { from: "/topics/payments/credit-transfers/international/guide-quote", to: "/payments/guides/credit-transfers/international/quote" },
  { from: "/topics/payments/credit-transfers/international/guide-beneficiary", to: "/payments/guides/credit-transfers/international/get-beneficiary-forms" },
  { from: "/topics/payments/credit-transfers/international/guide-transaction-details", to: "/payments/guides/credit-transfers/international/get-transaction-forms" },
  { from: "/topics/payments/credit-transfers/international/guide-initiate", to: "/payments/guides/credit-transfers/international/initiate" },
  { from: "/topics/payments/credit-transfers/international/guide-add-beneficiary", to: "/payments/guides/credit-transfers/international/add-beneficiary" },
  { from: "/topics/payments/credit-transfers/international/guide-get-info", to: "/payments/guides/credit-transfers/international/get-info" },
  { from: "/topics/payments/credit-transfers/international/sandbox", to: "/payments/reference/sandbox/sandbox-international" },
  { from: "/topics/payments/direct-debit", to: "/payments/concepts/direct-debit/" },
  { from: "/topics/payments/direct-debit/guide-add-mandate", to: "/payments/guides/direct-debit/add-mandate" },
  { from: "/topics/payments/direct-debit/guide-enable-mandate", to: "/payments/guides/direct-debit/enable-mandate" },
  { from: "/topics/payments/direct-debit/guide-suspend-mandate", to: "/payments/guides/direct-debit/suspend-mandate" },
  { from: "/topics/payments/direct-debit/guide-update-mandate", to: "/payments/guides/direct-debit/update-mandate" },
  { from: "/topics/payments/direct-debit/guide-return", to: "/payments/guides/direct-debit/return" },
  { from: "/topics/payments/direct-debit/sandbox", to: "/payments/reference/sandbox/sandbox-direct-debit" },
  { from: "/topics/merchants", to: "/payments/concepts/merchants/" },
  { from: "/topics/merchants/guide-onboarding-overview", to: "/payments/guides/merchants/onboarding-overview" },
  { from: "/topics/merchants/guide-missing-information", to: "/payments/guides/merchants/missing-information" },
  { from: "/topics/merchants/sandbox", to: "/payments/guides/merchants/sandbox" },
  { from: "/topics/merchants/profiles/guide-request", to: "/payments/guides/merchants/profiles/request" },
  { from: "/topics/merchants/profiles/guide-get-info", to: "/payments/guides/merchants/profiles/get-info" },
  { from: "/topics/merchants/profiles/guide-update", to: "/payments/guides/merchants/profiles/update" },
  { from: "/topics/merchants/online", to: "/payments/guides/merchants/online/" },
  { from: "/topics/merchants/online/cards", to: "/payments/guides/merchants/online/cards/" },
  { from: "/topics/merchants/online/cards/guide-cards", to: "/payments/guides/merchants/online/cards/accept" },
  { from: "/topics/merchants/online/cards/guide-request", to: "/payments/guides/merchants/online/cards/request" },
  { from: "/topics/merchants/online/cards/guide-create-link", to: "/payments/guides/merchants/online/cards/create-link" },
  { from: "/topics/merchants/online/cards/sandbox", to: "/payments/guides/merchants/online/cards/sandbox" },
  { from: "/topics/merchants/online/sdd", to: "/payments/guides/merchants/online/sdd/" },
  { from: "/topics/merchants/online/sdd/guide-sdd", to: "/payments/guides/merchants/online/sdd/accept" },
  { from: "/topics/merchants/online/sdd/guide-request", to: "/payments/guides/merchants/online/sdd/request" },
  { from: "/topics/merchants/online/sdd/guide-declare", to: "/payments/guides/merchants/online/sdd/declare" },
  { from: "/topics/merchants/online/sdd/guide-get-mandate", to: "/payments/guides/merchants/online/sdd/get-mandate" },
  { from: "/topics/merchants/online/sdd/guide-initiate", to: "/payments/guides/merchants/online/sdd/initiate" },
  { from: "/topics/merchants/online/sdd/guide-update", to: "/payments/guides/merchants/online/sdd/update" },
  { from: "/topics/merchants/online/sdd/guide-create-link", to: "/payments/guides/merchants/online/sdd/create-link" },
  { from: "/topics/merchants/online/sdd/sandbox", to: "/payments/guides/merchants/online/sdd/sandbox" },
  { from: "/topics/merchants/online/idd", to: "/payments/guides/merchants/online/idd/" },
  { from: "/topics/merchants/online/idd/guide-idd", to: "/payments/guides/merchants/online/idd/accept" },
  { from: "/topics/merchants/online/idd/guide-request", to: "/payments/guides/merchants/online/idd/request" },
  { from: "/topics/merchants/online/idd/guide-declare", to: "/payments/guides/merchants/online/idd/declare" },
  { from: "/topics/merchants/online/idd/guide-initiate", to: "/payments/guides/merchants/online/idd/initiate" },
  { from: "/topics/merchants/online/idd/guide-refund", to: "/payments/guides/merchants/online/idd/refund" },
  { from: "/topics/merchants/online/idd/sandbox", to: "/payments/guides/merchants/online/idd/sandbox" },
  { from: "/topics/merchants/in-person", to: "/payments/guides/merchants/in-person/" },
  { from: "/topics/merchants/in-person/cards", to: "/payments/guides/merchants/in-person/cards/" },
  { from: "/topics/merchants/in-person/cards/guide-setup", to: "/payments/guides/merchants/in-person/cards/setup" },
  { from: "/topics/merchants/in-person/cards/guide-request-method", to: "/payments/guides/merchants/in-person/cards/request-method" },
  { from: "/topics/merchants/in-person/cards/guide-accept", to: "/payments/guides/merchants/in-person/cards/accept" },
  { from: "/topics/merchants/in-person/cards/guide-initialize", to: "/payments/guides/merchants/in-person/cards/initialize" },
  { from: "/topics/merchants/in-person/cards/guide-create-payments", to: "/payments/guides/merchants/in-person/cards/create-payments" },
  { from: "/topics/merchants/in-person/cards/sandbox", to: "/payments/guides/merchants/in-person/cards/sandbox" },
  { from: "/topics/merchants/in-person/checks", to: "/payments/guides/merchants/in-person/checks/" },
  { from: "/topics/merchants/in-person/checks/guide-checks", to: "/payments/guides/merchants/in-person/checks/accept" },
  { from: "/topics/merchants/in-person/checks/guide-request", to: "/payments/guides/merchants/in-person/checks/request" },
  { from: "/topics/merchants/in-person/checks/guide-initiate", to: "/payments/guides/merchants/in-person/checks/initiate" },
  { from: "/topics/merchants/in-person/checks/sandbox", to: "/payments/guides/merchants/in-person/checks/sandbox" },
  // DOC-1814 — Users migrated from topics/users into the IA shell
  { from: "/topics/users", to: "/users/concepts/user/" },
  { from: "/topics/users/consent", to: "/users/concepts/consent/" },
  { from: "/topics/users/consent/guide-cancel", to: "/users/guides/consent/cancel" },
  { from: "/topics/users/consent/guide-configure-notifications", to: "/users/guides/consent/configure-notifications" },
  { from: "/topics/users/consent/guide-create-multiconsent", to: "/users/guides/consent/create-multiconsent" },
  { from: "/topics/users/consent/guide-implement-s2s", to: "/users/guides/consent/implement-s2s" },
  { from: "/topics/users/consent/guide-integrate-sca", to: "/users/guides/consent/integrate-sca" },
  { from: "/topics/users/identifications", to: "/users/concepts/identifications/" },
  { from: "/topics/users/identifications/guide-get-identifications", to: "/users/guides/identifications/get-identifications" },
  { from: "/topics/users/identifications/guide-get-latest-id", to: "/users/guides/identifications/get-latest-id" },
  { from: "/topics/users/identifications/sandbox", to: "/users/reference/sandbox-identifications" },
  { from: "/topics/users/overview/guide-deactivate", to: "/users/guides/overview/deactivate" },
  { from: "/topics/users/overview/guide-export", to: "/users/guides/overview/export" },
  { from: "/topics/users/overview/guide-get-info-one", to: "/users/guides/overview/get-info-one" },
  { from: "/topics/users/overview/guide-get-info-multiple", to: "/users/guides/overview/get-info-multiple" },
  { from: "/topics/users/overview/guide-get-list", to: "/users/guides/overview/get-list" },
  // DOC-1814 — Identity documents absorbed into users/reference/identity-methods
  { from: "/partnership/document-center/identity", to: "/users/reference/identity-methods/" },
  { from: "/partnership/document-center/identity/expert", to: "/users/reference/identity-methods/expert" },
  { from: "/partnership/document-center/identity/pvid", to: "/users/reference/identity-methods/pvid" },
  { from: "/partnership/document-center/identity/qes", to: "/users/reference/identity-methods/qes" },
];
