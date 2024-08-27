// redirects from original doc pathnames
module.exports = [
  { from: "/api/api-explorer", to: "/developers/tools/api-explorer" },
  { from: "/api/authentication", to: "/developers/using-api/authentication/" },
  { from: "/api/consent", to: "/topics/users/consent/" },
  { from: "/api/endpoints", to: "/developers/#endpoints" },
  { from: "/api/errors", to: "/developers/using-api/errors-rejections" },
  { from: "/api/event-simulator", to: "/developers/tools/event-simulator" },
  { from: "/api/overview", to: "/developers/" },
  { from: "/api/pagination", to: "/developers/using-api/pagination" },
  { from: "/api/payment-control", to: "/developers/using-api/payment-control" },
  {
    from: "/api/sample-implementation",
    to: "/developers/tools/postman-collection",
  },
  { from: "/api/testing-api", to: "/developers/tools/testing-api" },
  { from: "/api/webhook", to: "/developers/using-api/webhooks" },
  { from: "/concept/account", to: "/topics/accounts/" },
  { from: "/concept/account-funding", to: "/topics/accounts/funding/" },
  {
    from: "/concept/account-holder",
    to: "/topics/onboarding/account-holders/",
  },
  { from: "/concept/account-membership", to: "/topics/accounts/memberships/" },
  { from: "/concept/capital-deposit", to: "/topics/capital-deposits/" },
  { from: "/concept/card", to: "/topics/cards/" },
  { from: "/concept/iban", to: "/topics/accounts/ibans/" },
  { from: "/concept/merchants-accepting-payments", to: "/topics/merchants/" },
  { from: "/concept/overview", to: "/glossary" },
  { from: "/concept/payment", to: "/topics/payments/" },
  { from: "/concept/projects", to: "/topics/projects/" },
  { from: "/concept/user", to: "/topics/users/" },
  { from: "/guide/accept-payments-merchants", to: "/topics/merchants/" },
  {
    from: "/guide/choose-integration",
    to: "/topics/get-started/choose-integration",
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
    to: "/topics/accounts/memberships/",
  },
  { from: "/guide/issue-cards", to: "/topics/cards/overview/guide-issue" },
  { from: "/guide/make-a-transaction", to: "/topics/payments/" },
  { from: "/guide/manage-accounts-and-ibans", to: "/topics/accounts/ibans/" },
  { from: "/guide/quickstart", to: "/topics/get-started/step-by-step" },
  { from: "/guide/use-our-api", to: "/developers/" },
  { from: "/guide/use-our-webhooks", to: "/developers/using-api/webhooks" },
  { from: "/help/changelog", to: "/changelog/" },
  { from: "/help/contact-us", to: "/topics/contact" },
  {
    from: "/help/countries-coverage",
    to: "/partnership/overview/country-coverage",
  },
  { from: "/help/faq", to: "/" },
  {
    from: "/help/vulnerability-disclosure",
    to: "/partnership/overview/protections#vulnerability-disclosure",
  },
  {
    from: "/regulatory/build-a-compliant-billing-offer",
    to: "/topics/accounts/billing/guide-compliant-billing",
  },
  {
    from: "/regulatory/go-live-process",
    to: "/topics/projects/guide-activate",
  },
  { from: "/regulatory/partnership-with-swan", to: "/partnership/" },
  {
    from: "/regulatory/registration-process",
    to: "/partnership/overview/guide-orias",
  },
  {
    from: "/regulatory/required-kyb-documents-for-company-accounts",
    to: "/partnership/document-center/company-registration/",
  },
  { from: "/regulatory/status-options", to: "/partnership/#legal-status" },
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
    to: "/developers/using-api/authentication/#tokens-project",
  },
  {
    from: "/api/authentication/user-access-token",
    to: "/developers/using-api/authentication/#tokens-user",
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
    to: "/topics/merchants/online/checks/",
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
    to: "/topics/merchants/online/checks/guide-checks",
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
  { from: "/help/faq/account-membership", to: "/topics/accounts/memberships/" },
  { from: "/help/faq/accounts", to: "/topics/accounts/" },
  { from: "/help/faq/api", to: "/developers/" },
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
    to: "/topics/accounts/memberships/#permissions-none",
  },
  {
    from: "/help/faq/accounts/can-i-create-my-own-account-statement",
    to: "/topics/accounts/overview/guide-generate-statement",
  },
  {
    from: "/help/faq/accounts/how-can-i-add-account-members-to-an-account",
    to: "/topics/accounts/memberships/guide-add-one",
  },
  {
    from: "/help/faq/accounts/how-is-my-users-money-guaranteed",
    to: "/partnership/overview/protections",
  },
  {
    from: "/help/faq/accounts/is-my-company-responsible-if-something-happens-with-a-swan-account",
    to: "/partnership/overview/protections#protecting-funds",
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
    to: "/developers/#troubleshooting",
  },
  {
    from: "/help/faq/api/i-get-a-cors-error-when-using-the-api-what-can-i-do",
    to: "/developers/#backend",
  },
  {
    from: "/help/faq/api/i-get-an-error-500-at-the-end-of-onboarding.-why",
    to: "/topics/onboarding/#links",
  },
  {
    from: "/help/faq/api/to-enter-the-list-of-uri-redirects-can-i-use-a-domain-instead-of-an-absolute-uri",
    to: "/developers/using-api/authentication/#tokens-user-uri",
  },
  {
    from: "/help/faq/api/when-i-request-a-list-via-the-api-is-the-number-of-results-limited",
    to: "/developers/using-api/pagination#elements",
  },
  {
    from: "/help/faq/api/why-isnt-the-api-working-in-the-live-environment-when-it-worked-great-in-sandbox",
    to: "/developers/#environments",
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
    to: "/developers/tools/sandbox-users#settings",
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
    to: "/partnership/overview/rules-regulations#restricted-businesses",
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
    to: "/topics/merchants/online/checks/",
  },
  {
    from: "/partnership/document-center",
    to: "/partnership/document-center/company-registration/",
  },
];
