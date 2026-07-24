/**
 * DOC-1814 — IA shell sidebars (presentation fork, no content).
 * Additive: merge into sidebars.js without touching the existing four exports.
 */
const cat = (label, items, opts = {}) => ({
  type: "category",
  label,
  collapsible: opts.collapsible ?? true,
  collapsed: opts.collapsed ?? true,
  ...(opts.link ? { link: { type: "doc", id: opts.link } } : {}),
  ...(opts.className ? { className: opts.className } : {}),
  items,
});
const top = (label, items, link, className) =>
  cat(label, items, { collapsible: true, collapsed: false, link, className });
const doc = (id, label) => ({ type: "doc", id, label });
// External sidebar link with an inline icon (html item — Docusaurus link items
// can't carry icons). Icon paths mirror the cards on the Resources page.
const svgIcon = (inner) =>
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">${inner}</svg>`;
const extLink = (label, href, iconInner) => ({
  type: "html",
  className: "menu-ext-link",
  value: `<a class="menu__link menu-ext-link__a" href="${href}" target="_blank" rel="noopener noreferrer">${svgIcon(iconInner)}<span>${label}</span><svg class="menu-ext-link__ext" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7" /><path d="M7 7h10v10" /></svg></a>`,
});

module.exports = {
  getStartedSidebar: [
    doc("get-started/index", "Overview"),
    top("Become a partner", [
      doc("get-started/become-a-partner/index", "Overview"),
      doc("get-started/become-a-partner/country-coverage", "Country coverage"),
      doc("get-started/become-a-partner/licence-regulatory-status", "Licence and regulatory status"),
      doc("get-started/become-a-partner/orias-registration", "ORIAS registration"),
      doc("get-started/become-a-partner/rates-billing", "Rates and billing"),
      doc("get-started/become-a-partner/brand-communication", "Brand and communication rules"),
      cat("Protections", [
        doc("get-started/become-a-partner/protections/index", "Overview"),
        doc("get-started/become-a-partner/protections/data-protection", "Data protection (GDPR)"),
        doc("get-started/become-a-partner/protections/financial-protections", "Financial protections"),
        doc("get-started/become-a-partner/protections/fraud-obligations", "Fraud obligations"),
      ]),
    ]),
    top("Set up Swan", [
      doc("get-started/set-up-swan/choose-integration", "Choose your integration"),
      doc("get-started/set-up-swan/quickstart", "Quickstart"),
      doc("get-started/set-up-swan/step-by-step", "Step-by-step"),
      doc("get-started/set-up-swan/connect-mobile", "Connect mobile"),
      doc("get-started/set-up-swan/create-project", "Create your project"),
      doc("get-started/set-up-swan/swan-access", "Swan access"),
      doc("get-started/set-up-swan/data-model", "Data model"),
      doc("get-started/set-up-swan/glossary", "Glossary"),
    ]),
    top("Integration by segment", [
      doc("get-started/integration-by-segment/accounting-platforms", "Accounting platforms"),
      doc("get-started/integration-by-segment/expense-management", "Expense management"),
      doc("get-started/integration-by-segment/meal-cards", "Meal cards"),
    ]),
    top("Resources & support", [
      extLink("Status", "https://status.swan.io/", '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />'),
      extLink("Trust Center", "https://trust.swan.io/", '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />'),
      extLink("Roadmap", "https://swanio.notion.site/Swan-Public-Roadmap-385e4b2e91b3409786a6c8e885654a22", '<polygon points="1 6 8 3 16 6 23 3 23 18 16 21 8 18 1 21 1 6" /><line x1="8" y1="3" x2="8" y2="18" /><line x1="16" y1="6" x2="16" y2="21" />'),
      // The three support channels are folded into one page that triages the
      // reader. Native doc item (not an html link) so the page keeps the
      // sidebar and gets in-app routing; the lifebuoy marker matches the
      // external links above (see .ia-help-link in ia-shell.css).
      { type: "doc", id: "get-started/get-help", label: "Get help", className: "ia-help-link" },
    ]),
  ],

  accountsSidebar: [
    doc("accounts/index", "Accounts overview"),
    top("Concepts", [
      cat("Onboarding", [
        doc("accounts/concepts/onboarding/statuses", "Statuses"),
        doc("accounts/concepts/onboarding/notifications", "Notifications"),
      ], { link: "accounts/concepts/onboarding/index" }),
      cat("Capital deposits", [
        doc("accounts/concepts/capital-deposits/process", "Process"),
        doc("accounts/concepts/capital-deposits/shareholders", "Shareholders"),
        doc("accounts/concepts/capital-deposits/statuses", "Statuses"),
      ], { link: "accounts/concepts/capital-deposits/index" }),
      cat("Account", [
        doc("accounts/concepts/account/country", "Account country"),
        doc("accounts/concepts/account/language", "Account language"),
        doc("accounts/concepts/account/type-and-level", "Account type and level"),
        doc("accounts/concepts/account/balances", "Balances"),
        doc("accounts/concepts/account/transactions", "Transactions"),
        doc("accounts/concepts/account/documents", "Statements and bank details"),
        doc("accounts/concepts/account/statuses", "Account statuses"),
      ], { link: "accounts/concepts/account/index" }),
      cat("Account holders", [
        doc("accounts/concepts/account-holders/verification", "Verification"),
        doc("accounts/concepts/account-holders/first-transfer", "First transfer"),
        doc("accounts/concepts/account-holders/notifications", "Notifications"),
        doc("accounts/concepts/account-holders/verification-renewal", "Verification renewal"),
      ], { link: "accounts/concepts/account-holders/index" }),
      cat("Memberships", [
        doc("accounts/concepts/memberships/inviting", "Inviting members"),
        doc("accounts/concepts/memberships/permissions", "Permissions"),
        doc("accounts/concepts/memberships/language", "Membership language"),
        doc("accounts/concepts/memberships/statuses", "Statuses and lifecycle"),
        doc("accounts/concepts/memberships/admin-change", "Administrator change"),
        doc("accounts/concepts/memberships/notifications", "Notifications"),
      ], { link: "accounts/concepts/memberships/index" }),
      cat("Multiple accounts", [
        doc("accounts/concepts/multiple-accounts/benefits", "Benefits and use cases"),
        doc("accounts/concepts/multiple-accounts/requirements-and-activation", "Requirements and activation"),
        doc("accounts/concepts/multiple-accounts/shared-details-and-management", "Shared details and management"),
      ], { link: "accounts/concepts/multiple-accounts/index" }),
      cat("IBANs", [
        doc("accounts/concepts/ibans/main", "Main IBANs"),
        doc("accounts/concepts/ibans/local", "Local IBAN details"),
        doc("accounts/concepts/ibans/virtual", "Virtual IBANs"),
      ], { link: "accounts/concepts/ibans/index" }),
      cat("Billing", [
        doc("accounts/concepts/billing/fees", "Fees"),
        doc("accounts/concepts/billing/usage-metrics", "Usage-based metrics"),
        doc("accounts/concepts/billing/invoices", "Invoices"),
      ], { link: "accounts/concepts/billing/index" }),
      cat("Closure", [
        doc("accounts/concepts/closure/processes", "Closure processes"),
        doc("accounts/concepts/closure/reason-codes", "Reason codes"),
        doc("accounts/concepts/closure/communications", "Email communications"),
      ], { link: "accounts/concepts/closure/index" }),
      cat("Documents", [
        doc("accounts/concepts/documents/statuses", "Statuses"),
        doc("accounts/concepts/documents/purposes-and-types", "Purposes and types"),
      ], { link: "accounts/concepts/documents/index" }),
      cat("Funding", [
        doc("accounts/concepts/funding/sources", "Funding sources"),
        doc("accounts/concepts/funding/payment-mandates", "Payment mandates"),
        doc("accounts/concepts/funding/account-verification", "Account verification"),
        doc("accounts/concepts/funding/status-interaction", "Interaction between statuses"),
        doc("accounts/concepts/funding/rolling-reserve", "Rolling reserve"),
        doc("accounts/concepts/funding/settlement", "Settlement and cancellation"),
      ], { link: "accounts/concepts/funding/index" }),
    ], "accounts/concepts/index", "ia-type-concept"),
    top("Guides", [
      cat("Onboarding", [
        doc("accounts/guides/onboarding/index", "Overview"),
        cat("Company onboarding", [
          doc("accounts/guides/onboarding/company/requirements", "Requirements and fields"),
          cat("Create a link", [
            doc("accounts/guides/onboarding/company/create/from-the-dashboard", "From the Dashboard"),
            doc("accounts/guides/onboarding/company/create/using-the-api", "Using the API"),
          ], { link: "accounts/guides/onboarding/company/create/index" }),
          doc("accounts/guides/onboarding/company/update", "Update"),
        ], { link: "accounts/guides/onboarding/company/index" }),
        cat("Individual onboarding", [
          doc("accounts/guides/onboarding/individual/requirements", "Requirements and fields"),
          cat("Create a link", [
            doc("accounts/guides/onboarding/individual/create/from-the-dashboard", "From the Dashboard"),
            doc("accounts/guides/onboarding/individual/create/using-the-api", "Using the API"),
          ], { link: "accounts/guides/onboarding/individual/create/index" }),
          doc("accounts/guides/onboarding/individual/update", "Update"),
        ], { link: "accounts/guides/onboarding/individual/index" }),
        doc("accounts/guides/onboarding/account-holder-tasks", "Account holder tasks"),
        cat("Export account holder data", [
          doc("accounts/guides/onboarding/account-holder-export/from-the-dashboard", "From the Dashboard"),
          doc("accounts/guides/onboarding/account-holder-export/using-the-api", "Using the API"),
        ], { link: "accounts/guides/onboarding/account-holder-export/index" }),
        doc("accounts/guides/onboarding/requirements", "Requirements"),
        doc("accounts/guides/onboarding/manage-onboardings", "Manage onboardings"),
        cat("Export onboarding data", [
          doc("accounts/guides/onboarding/export/from-the-dashboard", "From the Dashboard"),
          doc("accounts/guides/onboarding/export/using-the-api", "Using the API"),
        ], { link: "accounts/guides/onboarding/export/index" }),
        doc("accounts/guides/onboarding/migrate-api", "Migrate to the current API"),
      ], { link: "accounts/guides/onboarding/index" }),
      cat("Capital deposits", [
        doc("accounts/guides/capital-deposits/index", "Overview"),
        doc("accounts/guides/capital-deposits/create-case", "Create a case"),
        doc("accounts/guides/capital-deposits/upload-documents", "Upload documents"),
        doc("accounts/guides/capital-deposits/update-company", "Update company"),
        doc("accounts/guides/capital-deposits/update-shareholder-amount", "Update shareholder amount"),
        doc("accounts/guides/capital-deposits/cancel", "Cancel a case"),
      ], { link: "accounts/guides/capital-deposits/index" }),
      cat("Memberships", [
        doc("accounts/guides/memberships/index", "Overview"),
        doc("accounts/guides/memberships/add-one", "Add one member"),
        doc("accounts/guides/memberships/add-multiple", "Add multiple members"),
        doc("accounts/guides/memberships/update", "Update member"),
        doc("accounts/guides/memberships/disable", "Disable member"),
        doc("accounts/guides/memberships/suspend-resume", "Suspend or resume member"),
        doc("accounts/guides/memberships/resend-invitation", "Resend invitation"),
        doc("accounts/guides/memberships/fix-binding-error", "Fix binding error"),
        doc("accounts/guides/memberships/change-admin", "Change admin"),
        cat("Export memberships", [
          doc("accounts/guides/memberships/export/from-the-dashboard", "From the Dashboard"),
          doc("accounts/guides/memberships/export/using-the-api", "Using the API"),
        ], { link: "accounts/guides/memberships/export/index" }),
      ], { link: "accounts/guides/memberships/index" }),
      cat("Account operations", [
        cat("Export accounts", [
          doc("accounts/guides/account-operations/export/from-the-dashboard", "From the Dashboard"),
          doc("accounts/guides/account-operations/export/using-the-api", "Using the API"),
        ], { link: "accounts/guides/account-operations/export/index" }),
        cat("Generate a statement", [
          doc("accounts/guides/account-operations/generate-statement/from-the-dashboard", "From the Dashboard"),
          doc("accounts/guides/account-operations/generate-statement/using-the-api", "Using the API"),
        ], { link: "accounts/guides/account-operations/generate-statement/index" }),
        cat("Get bank details", [
          doc("accounts/guides/account-operations/bank-details/from-the-dashboard", "From the Dashboard"),
          doc("accounts/guides/account-operations/bank-details/using-the-api", "Using the API"),
        ], { link: "accounts/guides/account-operations/bank-details/index" }),
        doc("accounts/guides/account-operations/create-additional-account", "Create additional accounts"),
      ], { link: "accounts/guides/account-operations/index" }),
      cat("IBANs", [
        cat("Add a virtual IBAN", [
          doc("accounts/guides/ibans/add-virtual/from-the-dashboard", "From the Dashboard"),
          doc("accounts/guides/ibans/add-virtual/using-the-api", "Using the API"),
        ], { link: "accounts/guides/ibans/add-virtual/index" }),
        doc("accounts/guides/ibans/cancel-virtual", "Cancel a virtual IBAN"),
        cat("Get IBAN info", [
          doc("accounts/guides/ibans/get-info/from-the-dashboard", "From the Dashboard"),
          doc("accounts/guides/ibans/get-info/using-the-api", "Using the API"),
        ], { link: "accounts/guides/ibans/get-info/index" }),
        doc("accounts/guides/ibans/validate", "Validate an IBAN"),
      ], { link: "accounts/guides/ibans/index" }),
      cat("Closure", [
        doc("accounts/guides/closure/close-unlimited", "Close an unlimited account"),
        doc("accounts/guides/closure/close-limited", "Close a limited account"),
        cat("Close via link", [
          doc("accounts/guides/closure/close-link/from-the-dashboard", "From the Dashboard"),
          doc("accounts/guides/closure/close-link/using-the-api", "Using the API"),
        ], { link: "accounts/guides/closure/close-link/index" }),
        cat("Get closure information", [
          doc("accounts/guides/closure/get-closure-info/from-the-dashboard", "From the Dashboard"),
          doc("accounts/guides/closure/get-closure-info/using-the-api", "Using the API"),
        ], { link: "accounts/guides/closure/get-closure-info/index" }),
      ], { link: "accounts/guides/closure/index" }),
      cat("Documents", [
        cat("Upload onboarding documents", [
          doc("accounts/guides/documents/upload-onboarding/from-the-dashboard", "From the Dashboard"),
          doc("accounts/guides/documents/upload-onboarding/using-the-api", "Using the API"),
        ], { link: "accounts/guides/documents/upload-onboarding/index" }),
        doc("accounts/guides/documents/upload-transaction", "Upload transaction documents"),
        cat("Request a collection review", [
          doc("accounts/guides/documents/request-collection-review/from-the-dashboard", "From the Dashboard"),
          doc("accounts/guides/documents/request-collection-review/using-the-api", "Using the API"),
        ], { link: "accounts/guides/documents/request-collection-review/index" }),
        cat("Get document info", [
          doc("accounts/guides/documents/get-info/from-the-dashboard", "From the Dashboard"),
          doc("accounts/guides/documents/get-info/using-the-api", "Using the API"),
        ], { link: "accounts/guides/documents/get-info/index" }),
        cat("Delete a document", [
          doc("accounts/guides/documents/delete/from-the-dashboard", "From the Dashboard"),
          doc("accounts/guides/documents/delete/using-the-api", "Using the API"),
        ], { link: "accounts/guides/documents/delete/index" }),
      ], { link: "accounts/guides/documents/index" }),
      cat("Funding", [
        doc("accounts/guides/funding/add-source", "Add a funding source"),
        doc("accounts/guides/funding/initiate-request", "Initiate a funding request"),
        doc("accounts/guides/funding/cancel-source", "Cancel a funding source"),
        doc("accounts/guides/funding/get-info", "Get funding info"),
      ], { link: "accounts/guides/funding/index" }),
      cat("Billing", [
        cat("Get billing details", [
          doc("accounts/guides/billing/get-details/from-the-dashboard", "From the Dashboard"),
          doc("accounts/guides/billing/get-details/using-the-api", "Using the API"),
        ], { link: "accounts/guides/billing/get-details/index" }),
        cat("Get billing list", [
          doc("accounts/guides/billing/get-list/from-the-dashboard", "From the Dashboard"),
          doc("accounts/guides/billing/get-list/using-the-api", "Using the API"),
        ], { link: "accounts/guides/billing/get-list/index" }),
        doc("accounts/guides/billing/compliant-billing", "Compliant billing"),
      ], { link: "accounts/guides/billing/index" }),
    ], "accounts/guides/index", "ia-type-guide"),
    top("Reference", [
      cat("Onboarding", [
        cat("Country requirements", [
          doc("accounts/reference/onboarding/country-requirements/france", "🇫🇷 France"),
          doc("accounts/reference/onboarding/country-requirements/belgium", "🇧🇪 Belgium"),
          doc("accounts/reference/onboarding/country-requirements/netherlands", "🇳🇱 Netherlands"),
          doc("accounts/reference/onboarding/country-requirements/germany", "🇩🇪 Germany"),
          doc("accounts/reference/onboarding/country-requirements/italy", "🇮🇹 Italy"),
          doc("accounts/reference/onboarding/country-requirements/spain", "🇪🇸 Spain"),
        ], { link: "accounts/reference/onboarding/country-requirements/index" }),
        doc("accounts/reference/onboarding/company-onboarding-fields", "Company onboarding fields"),
        doc("accounts/reference/onboarding/company-onboarding-fields-api-mapping", "Company onboarding API mapping"),
        doc("accounts/reference/onboarding/individual-onboarding-fields", "Individual onboarding fields"),
        doc("accounts/reference/onboarding/proof-of-address", "Proof of address"),
      ], { link: "accounts/reference/onboarding/index" }),
      doc("accounts/reference/capital-deposits/index", "Capital deposits"),
      cat("Memberships", [
        doc("accounts/reference/memberships/membership-permissions", "Membership permissions"),
        doc("accounts/reference/memberships/membership-fields", "Membership fields"),
      ], { link: "accounts/reference/memberships/index" }),
      cat("Multiple accounts", [
        doc("accounts/reference/accounts/multiple-accounts-requirements", "Multiple-accounts requirements"),
      ], { link: "accounts/reference/accounts/index" }),
      cat("Sandbox", [
        doc("accounts/reference/sandbox/sandbox-billing", "Sandbox: billing"),
        doc("accounts/reference/sandbox/sandbox-documents", "Sandbox: documents"),
        doc("accounts/reference/sandbox/sandbox-funding", "Sandbox: funding"),
      ], { link: "accounts/reference/sandbox/index" }),
    ], "accounts/reference/index", "ia-type-ref"),
  ],

  cardsSidebar: [
    doc("cards/index", "Cards overview"),
    top("Concepts", [
      doc("cards/concepts/card-formats", "Card formats"),
      cat("Virtual cards", [
        doc("cards/concepts/virtual/single-use-cards", "Single-use cards"),
        doc("cards/concepts/virtual/statuses", "Statuses"),
      ], { link: "cards/concepts/virtual/index" }),
      cat("Physical cards", [
        doc("cards/concepts/physical/name-printing", "Name printing"),
        doc("cards/concepts/physical/pin", "PIN"),
        doc("cards/concepts/physical/delivery-and-shipping", "Delivery and shipping"),
        doc("cards/concepts/physical/renewal", "Renewal"),
        doc("cards/concepts/physical/statuses", "Statuses"),
      ], { link: "cards/concepts/physical/index" }),
      cat("Digital cards", [
        doc("cards/concepts/digital/statuses", "Statuses"),
      ], { link: "cards/concepts/digital/index" }),
      doc("cards/concepts/card-products", "Card products"),
      doc("cards/concepts/card-packages", "Card packages"),
      doc("cards/concepts/design", "Card design"),
    ], "cards/concepts/index", "ia-type-concept"),
    top("Guides", [
      cat("Lifecycle", [
        doc("cards/guides/lifecycle/issue", "Issue cards"),
        cat("Update card settings", [
          doc("cards/guides/lifecycle/update/from-the-dashboard", "From the Dashboard"),
          doc("cards/guides/lifecycle/update/using-the-api", "Using the API"),
        ], { link: "cards/guides/lifecycle/update/index" }),
        cat("Export card data", [
          doc("cards/guides/lifecycle/export/from-the-dashboard", "From the Dashboard"),
          doc("cards/guides/lifecycle/export/using-the-api", "Using the API"),
        ], { link: "cards/guides/lifecycle/export/index" }),
      ], { link: "cards/guides/lifecycle/index" }),
      cat("Products", [
        doc("cards/guides/products/configure-card-product", "Configure a card product"),
        doc("cards/guides/products/get-card-package-tier", "Get card package tier"),
      ], { link: "cards/guides/products/index" }),
      cat("Design", [
        doc("cards/guides/design/standard", "Standard design"),
        doc("cards/guides/design/custom", "Custom design"),
      ], { link: "cards/guides/design/index" }),
      cat("Virtual", [
        doc("cards/guides/virtual/add", "Add a virtual card"),
        doc("cards/guides/virtual/view-info", "View card info"),
        doc("cards/guides/virtual/cancel", "Cancel a virtual card"),
      ], { link: "cards/guides/virtual/index" }),
      cat("Physical", [
        doc("cards/guides/physical/print", "Print a card"),
        doc("cards/guides/physical/activate", "Activate a card"),
        doc("cards/guides/physical/view-info", "View card info"),
        doc("cards/guides/physical/block-unblock", "Block or unblock a card"),
        doc("cards/guides/physical/renew", "Renew a card"),
        doc("cards/guides/physical/cancel", "Cancel a card"),
      ], { link: "cards/guides/physical/index" }),
      cat("Digital", [
        doc("cards/guides/digital/add", "Add to a wallet"),
        doc("cards/guides/digital/cancel", "Cancel a digital card"),
      ], { link: "cards/guides/digital/index" }),
    ], "cards/guides/index", "ia-type-guide"),
    top("Reference", [
      doc("cards/reference/spending-limits", "Spending limits"),
      doc("cards/reference/card-settings", "Card settings"),
      doc("cards/reference/shipping-and-delivery", "Shipping and delivery"),
      doc("cards/reference/insurance-and-claims", "Insurance and claims"),
      doc("cards/reference/sandbox-physical", "Sandbox: physical cards"),
      doc("cards/reference/sandbox-digital", "Sandbox: digital cards"),
    ], "cards/reference/index", "ia-type-ref"),
  ],

  paymentsSidebar: [
    doc("payments/index", "Payments overview"),
    top("Concepts", [
      cat("Transactions", [
        doc("payments/concepts/transactions/statuses", "Statuses"),
      ], { link: "payments/concepts/transactions/index" }),
      cat("Credit transfers", [
        doc("payments/concepts/credit-transfers/sepa", "SEPA Credit Transfers"),
        doc("payments/concepts/credit-transfers/international", "International Credit Transfers"),
        doc("payments/concepts/credit-transfers/statuses", "Statuses"),
      ], { link: "payments/concepts/credit-transfers/index" }),
      cat("Verification of payee (VoP)", [
        doc("payments/concepts/verification-of-payee/bulk-transfers", "Bulk credit transfers"),
      ], { link: "payments/concepts/verification-of-payee/index" }),
      cat("Direct debit", [
        doc("payments/concepts/direct-debit/statuses", "Statuses"),
      ], { link: "payments/concepts/direct-debit/index" }),
      cat("Card payments", [
        doc("payments/concepts/cards/statuses", "Statuses"),
      ], { link: "payments/concepts/cards/index" }),
      doc("payments/concepts/merchants/index", "Merchants"),
    ], "payments/concepts/index", "ia-type-concept"),
    top("Guides", [
      cat("Credit transfers", [
        cat("SEPA", [
          doc("payments/guides/credit-transfers/sepa/initiate-ct", "Initiate a credit transfer"),
          doc("payments/guides/credit-transfers/sepa/cancel-ct", "Cancel a credit transfer"),
          doc("payments/guides/credit-transfers/sepa/refund-ct", "Refund a credit transfer"),
          doc("payments/guides/credit-transfers/sepa/add-beneficiary", "Add a beneficiary"),
          doc("payments/guides/credit-transfers/sepa/schedule-so", "Schedule a standing order"),
          doc("payments/guides/credit-transfers/sepa/cancel-so", "Cancel a standing order"),
          doc("payments/guides/credit-transfers/sepa/verify-beneficiary", "Verify a beneficiary (VoP)"),
          doc("payments/guides/credit-transfers/sepa/incoming-vop-requests", "Incoming VoP requests"),
        ]),
        cat("International", [
          doc("payments/guides/credit-transfers/international/quote", "Get a quote"),
          doc("payments/guides/credit-transfers/international/get-beneficiary-forms", "Get beneficiary information"),
          doc("payments/guides/credit-transfers/international/get-transaction-forms", "Get transaction details"),
          doc("payments/guides/credit-transfers/international/add-beneficiary", "Add a beneficiary"),
          doc("payments/guides/credit-transfers/international/initiate", "Initiate a transfer"),
          doc("payments/guides/credit-transfers/international/get-info", "Get transfer info"),
        ]),
      ]),
      cat("Direct debit", [
        doc("payments/guides/direct-debit/add-mandate", "Add a mandate"),
        doc("payments/guides/direct-debit/enable-mandate", "Enable a mandate"),
        doc("payments/guides/direct-debit/suspend-mandate", "Suspend a mandate"),
        doc("payments/guides/direct-debit/update-mandate", "Update a mandate"),
        doc("payments/guides/direct-debit/return", "Return a direct debit"),
      ]),
      cat("Payment cards", [
        doc("payments/guides/cards/get-list", "Get card payments"),
        doc("payments/guides/cards/get-enriched-info", "Get enriched info"),
      ]),
      cat("Payment operations", [
        doc("payments/guides/payment-operations/get-payment-id", "Get a payment ID"),
        doc("payments/guides/payment-operations/get-payment-info", "Get payment info"),
        doc("payments/guides/payment-operations/get-transaction-id", "Get a transaction ID"),
        doc("payments/guides/payment-operations/get-transaction-info", "Get transaction info"),
        doc("payments/guides/payment-operations/get-transaction-list", "Get a list of transactions"),
        doc("payments/guides/payment-operations/generate-transaction-statement", "Generate a transaction statement"),
        doc("payments/guides/payment-operations/export", "Export payments"),
      ]),
      cat("Merchants", [
        doc("payments/guides/merchants/onboarding-overview", "Onboarding overview"),
        doc("payments/guides/merchants/missing-information", "Missing information"),
        cat("Profiles", [
          doc("payments/guides/merchants/profiles/request", "Request a profile"),
          doc("payments/guides/merchants/profiles/get-info", "Get profile info"),
          doc("payments/guides/merchants/profiles/update", "Update a profile"),
        ]),
        cat("Accepting online payments", [
          cat("Cards", [
            doc("payments/guides/merchants/online/cards/accept", "Accept card payments"),
            doc("payments/guides/merchants/online/cards/request", "Request payment methods"),
            doc("payments/guides/merchants/online/cards/create-link", "Create a payment link"),
          ], { link: "payments/guides/merchants/online/cards/index" }),
          cat("SEPA Direct Debit", [
            doc("payments/guides/merchants/online/sdd/accept", "Accept SEPA Direct Debit"),
            doc("payments/guides/merchants/online/sdd/request", "Request payment methods"),
            doc("payments/guides/merchants/online/sdd/declare", "Declare a mandate"),
            doc("payments/guides/merchants/online/sdd/get-mandate", "Get a mandate"),
            doc("payments/guides/merchants/online/sdd/initiate", "Initiate a payment"),
            doc("payments/guides/merchants/online/sdd/update", "Update payment methods"),
            doc("payments/guides/merchants/online/sdd/create-link", "Create a payment link"),
          ], { link: "payments/guides/merchants/online/sdd/index" }),
          cat("Internal Direct Debit", [
            doc("payments/guides/merchants/online/idd/accept", "Accept Internal Direct Debit"),
            doc("payments/guides/merchants/online/idd/request", "Request payment methods"),
            doc("payments/guides/merchants/online/idd/declare", "Declare a mandate"),
            doc("payments/guides/merchants/online/idd/initiate", "Initiate a payment"),
            doc("payments/guides/merchants/online/idd/refund", "Refund a payment"),
          ], { link: "payments/guides/merchants/online/idd/index" }),
        ], { link: "payments/guides/merchants/online/index" }),
        cat("Accepting in-person payments", [
          cat("Cards", [
            doc("payments/guides/merchants/in-person/cards/setup", "Set up"),
            doc("payments/guides/merchants/in-person/cards/request-method", "Request payment methods"),
            doc("payments/guides/merchants/in-person/cards/accept", "Accept payments"),
            doc("payments/guides/merchants/in-person/cards/initialize", "Initialize the terminal"),
            doc("payments/guides/merchants/in-person/cards/create-payments", "Create payments"),
          ], { link: "payments/guides/merchants/in-person/cards/index" }),
          cat("French checks", [
            doc("payments/guides/merchants/in-person/checks/accept", "Accept checks"),
            doc("payments/guides/merchants/in-person/checks/request", "Request payment methods"),
            doc("payments/guides/merchants/in-person/checks/initiate", "Initiate a payment"),
          ], { link: "payments/guides/merchants/in-person/checks/index" }),
        ], { link: "payments/guides/merchants/in-person/index" }),
      ], { link: "payments/guides/merchants/index" }),
    ], "payments/guides/index", "ia-type-guide"),
    top("Reference", [
      cat("Sandbox", [
        doc("payments/reference/sandbox/sandbox-sepa", "Sandbox: SEPA Credit Transfers"),
        doc("payments/reference/sandbox/sandbox-direct-debit", "Sandbox: SEPA Direct Debit"),
        doc("payments/reference/sandbox/sandbox-international", "Sandbox: International Credit Transfers"),
        doc("payments/reference/sandbox/sandbox-cards", "Sandbox: card payments"),
        doc("payments/reference/sandbox/sandbox-merchants", "Sandbox: merchants"),
        doc("payments/reference/sandbox/sandbox-merchant-online-cards", "Sandbox: merchant online cards"),
        doc("payments/reference/sandbox/sandbox-merchant-sdd", "Sandbox: merchant SEPA Direct Debit"),
        doc("payments/reference/sandbox/sandbox-merchant-idd", "Sandbox: merchant Internal Direct Debit"),
        doc("payments/reference/sandbox/sandbox-merchant-in-person-cards", "Sandbox: merchant in-person cards"),
        doc("payments/reference/sandbox/sandbox-merchant-checks", "Sandbox: merchant French checks"),
      ], { link: "payments/reference/sandbox/index" }),
      doc("payments/reference/international-transfers", "International transfer countries and rails"),
      doc("payments/reference/card-payment-countries", "Card payment countries"),
      doc("payments/reference/card-rejection-reasons", "Card rejection reasons"),
      doc("payments/reference/schemes", "Scheme tables"),
      doc("payments/reference/transaction-fraud-types", "Transaction fraud types"),
    ], "payments/reference/index", "ia-type-ref"),
  ],

  usersSidebar: [
    doc("users/index", "Users overview"),
    top("Concepts", [
      cat("The user", [
        doc("users/concepts/user/sign-up", "Signing up"),
        doc("users/concepts/user/login", "Logging in"),
        doc("users/concepts/user/deactivation", "Deactivation"),
        doc("users/concepts/user/statuses", "Statuses"),
      ], { link: "users/concepts/user/index" }),
      cat("Consent", [
        doc("users/concepts/consent/server-to-server", "Server-to-server"),
        doc("users/concepts/consent/statuses", "Statuses"),
      ], { link: "users/concepts/consent/index" }),
      cat("Identifications", [
        doc("users/concepts/identifications/statuses", "Statuses"),
      ], { link: "users/concepts/identifications/index" }),
    ], "users/concepts/index", "ia-type-concept"),
    top("Guides", [
      cat("User operations", [
        doc("users/guides/user-operations/deactivate", "Deactivate a user"),
        doc("users/guides/user-operations/export", "Export users"),
        doc("users/guides/user-operations/get-info-one", "Get info on one user"),
        doc("users/guides/user-operations/get-info-multiple", "Get info on multiple users"),
        doc("users/guides/user-operations/get-list", "Get a user list"),
      ]),
      cat("Consent", [
        doc("users/guides/consent/create-multiconsent", "Create a multi-consent"),
        doc("users/guides/consent/configure-notifications", "Configure notifications"),
        doc("users/guides/consent/implement-s2s", "Implement server-to-server"),
        doc("users/guides/consent/integrate-sca", "Integrate SCA"),
        doc("users/guides/consent/cancel", "Cancel a consent"),
      ]),
      cat("Identifications", [
        doc("users/guides/identifications/get-identifications", "Get identifications"),
        doc("users/guides/identifications/get-latest-id", "Get the latest identification"),
      ]),
    ], "users/guides/index", "ia-type-guide"),
    top("Reference", [
      cat("Identity methods (Expert, PVID, QES)", [
        doc("users/reference/identity-methods/expert", "Expert"),
        doc("users/reference/identity-methods/pvid", "PVID"),
        doc("users/reference/identity-methods/qes", "QES"),
        doc("users/reference/identity-methods/recommendations", "Recommendations by country"),
      ], { link: "users/reference/identity-methods/index" }),
      doc("users/reference/sensitive-operations", "Sensitive operations"),
      doc("users/reference/sandbox-identifications", "Sandbox: identifications"),
    ], "users/reference/index", "ia-type-ref"),
  ],

  buildSidebar: [
    doc("build/index", "Build overview"),
    // Natural learning order: the API concept (GraphQL) → how to call it
    // (Using the API) → the utilities that support development (Tools).
    top("GraphQL", [
      doc("build/graphql/index", "Overview"),
      doc("build/graphql/schema", "Schema"),
      doc("build/graphql/queries", "Queries"),
      doc("build/graphql/mutations", "Mutations"),
      doc("build/graphql/types", "Types"),
    ]),
    top("Using the API", [
      doc("build/using-api/authentication", "Authentication"),
      doc("build/using-api/errors-rejections", "Errors and rejections"),
      doc("build/using-api/idempotency", "Idempotency"),
      doc("build/using-api/pagination", "Pagination"),
      doc("build/using-api/payment-control", "Payment control"),
      doc("build/using-api/webhooks", "Webhooks"),
    ]),
    top("Tools", [
      doc("build/tools/api-explorer", "API Explorer"),
      doc("build/tools/event-simulator", "Event simulator"),
      doc("build/tools/postman-collection", "Postman collection"),
      doc("build/tools/sandbox-users", "Sandbox users"),
      doc("build/tools/testing-api", "Testing the API"),
      doc("build/tools/mcp-servers", "MCP servers"),
      doc("build/tools/test-tools-guide", "Test tools guide"),
    ]),
  ],
};