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
  items,
});
const top = (label, items, link) =>
  cat(label, items, { collapsible: true, collapsed: false, link });
const doc = (id, label) => ({ type: "doc", id, label });

module.exports = {
  getStartedSidebar: [
    doc("get-started/index", "Overview"),
    top("Become a partner", [
      doc("get-started/become-a-partner/index", "Overview"),
      doc("get-started/become-a-partner/country-coverage", "Country coverage"),
      doc("get-started/become-a-partner/licence-regulatory-status", "Licence & regulatory status"),
      doc("get-started/become-a-partner/orias-registration", "ORIAS registration"),
      doc("get-started/become-a-partner/rates-billing", "Rates & billing"),
      doc("get-started/become-a-partner/brand-communication", "Brand & communication rules"),
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
  ],

  accountsSidebar: [
    doc("accounts/index", "Overview"),
    top("Concepts", [
      doc("accounts/concepts/memberships", "Memberships"),
      doc("accounts/concepts/multiple-accounts", "Multiple accounts"),
      doc("accounts/concepts/ibans", "IBANs"),
      doc("accounts/concepts/billing", "Billing"),
      doc("accounts/concepts/closure", "Closure"),
      doc("accounts/concepts/documents", "Documents"),
      doc("accounts/concepts/funding", "Funding"),
    ]),
    top("Guides", [
      cat("Onboarding", [
        doc("accounts/guides/onboarding/index", "Overview"),
        doc("accounts/guides/onboarding/company", "Company onboarding"),
        doc("accounts/guides/onboarding/individual", "Individual onboarding"),
        doc("accounts/guides/onboarding/account-holders", "Account holders"),
        cat("Capital deposits", [
          doc("accounts/guides/onboarding/capital-deposits/index", "Overview"),
          doc("accounts/guides/onboarding/capital-deposits/create-case", "Create a case"),
          doc("accounts/guides/onboarding/capital-deposits/upload-documents", "Upload documents"),
          doc("accounts/guides/onboarding/capital-deposits/update-company", "Update company"),
          doc("accounts/guides/onboarding/capital-deposits/update-shareholder-amount", "Update shareholder amount"),
          doc("accounts/guides/onboarding/capital-deposits/cancel", "Cancel a case"),
        ], { link: "accounts/guides/onboarding/capital-deposits/index" }),
      ], { link: "accounts/guides/onboarding/index" }),
      cat("Memberships", [
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
      ]),
      cat("Account operations", [
        doc("accounts/guides/account-operations/export", "Export accounts"),
        doc("accounts/guides/account-operations/generate-statement", "Generate a statement"),
        doc("accounts/guides/account-operations/bank-details", "Get bank details"),
      ]),
      cat("IBANs", [
        doc("accounts/guides/ibans/add-virtual", "Add a virtual IBAN"),
        doc("accounts/guides/ibans/cancel-virtual", "Cancel a virtual IBAN"),
        doc("accounts/guides/ibans/get-info", "Get IBAN info"),
        doc("accounts/guides/ibans/validate", "Validate an IBAN"),
      ]),
      cat("Closure", [
        doc("accounts/guides/closure/close-unlimited", "Close an unlimited account"),
        doc("accounts/guides/closure/close-limited", "Close a limited account"),
        doc("accounts/guides/closure/close-link", "Close via link"),
        doc("accounts/guides/closure/get-closure-info", "Get closure info"),
      ]),
      cat("Documents", [
        doc("accounts/guides/documents/upload-onboarding", "Upload onboarding documents"),
        doc("accounts/guides/documents/upload-transaction", "Upload transaction documents"),
        doc("accounts/guides/documents/request-collection-review", "Request a collection review"),
        doc("accounts/guides/documents/get-info", "Get document info"),
        doc("accounts/guides/documents/delete", "Delete a document"),
      ]),
      cat("Funding", [
        doc("accounts/guides/funding/add-source", "Add a funding source"),
        doc("accounts/guides/funding/initiate-request", "Initiate a funding request"),
        doc("accounts/guides/funding/cancel-source", "Cancel a funding source"),
        doc("accounts/guides/funding/get-info", "Get funding info"),
      ]),
      cat("Billing", [
        doc("accounts/guides/billing/get-details", "Get billing details"),
        doc("accounts/guides/billing/get-list", "Get billing list"),
        doc("accounts/guides/billing/compliant-billing", "Compliant billing"),
      ]),
    ]),
    top("Reference", [
      doc("accounts/reference/membership-permissions", "Membership permissions"),
      doc("accounts/reference/membership-fields", "Membership fields"),
      doc("accounts/reference/multiple-accounts-requirements", "Multiple-accounts requirements"),
      doc("accounts/reference/country-requirements", "Country requirements"),
      doc("accounts/reference/proof-of-address", "Proof of address"),
      doc("accounts/reference/sandbox-billing", "Sandbox: billing"),
      doc("accounts/reference/sandbox-documents", "Sandbox: documents"),
      doc("accounts/reference/sandbox-funding", "Sandbox: funding"),
    ]),
  ],

  cardsSidebar: [
    doc("cards/index", "Overview"),
    top("Concepts", [
      doc("cards/concepts/virtual", "Virtual cards"),
      doc("cards/concepts/physical", "Physical cards"),
      doc("cards/concepts/digital", "Digital cards"),
      doc("cards/concepts/card-packages", "Card packages"),
      doc("cards/concepts/design", "Card design"),
    ]),
    top("Guides", [
      cat("Lifecycle", [
        doc("cards/guides/lifecycle/issue", "Issue a card"),
        doc("cards/guides/lifecycle/update", "Update a card"),
        doc("cards/guides/lifecycle/export", "Export cards"),
      ]),
      cat("Virtual", [
        doc("cards/guides/virtual/add", "Add a virtual card"),
        doc("cards/guides/virtual/cancel", "Cancel a virtual card"),
        doc("cards/guides/virtual/view-info", "View card info"),
      ]),
      cat("Physical", [
        doc("cards/guides/physical/activate", "Activate a card"),
        doc("cards/guides/physical/block-unblock", "Block or unblock a card"),
        doc("cards/guides/physical/cancel", "Cancel a card"),
        doc("cards/guides/physical/print", "Print a card"),
        doc("cards/guides/physical/renew", "Renew a card"),
        doc("cards/guides/physical/view-info", "View card info"),
      ]),
      cat("Digital", [
        doc("cards/guides/digital/add", "Add to a wallet"),
        doc("cards/guides/digital/cancel", "Cancel a digital card"),
      ]),
      cat("Design", [
        doc("cards/guides/design/standard", "Standard design"),
        doc("cards/guides/design/custom", "Custom design"),
      ]),
    ]),
    top("Reference", [
      doc("cards/reference/sandbox-physical", "Sandbox: physical cards"),
      doc("cards/reference/sandbox-digital", "Sandbox: digital cards"),
      doc("cards/reference/card-fraud-types", "Card fraud types"),
    ]),
  ],

  paymentsSidebar: [
    doc("payments/index", "Overview"),
    top("Concepts", [
      doc("payments/concepts/transactions", "Transactions"),
      doc("payments/concepts/credit-transfers", "Credit transfers"),
      doc("payments/concepts/verification-of-payee", "Verification of payee (VoP)"),
      doc("payments/concepts/direct-debit", "Direct debit"),
      doc("payments/concepts/cards", "Card payments"),
      doc("payments/concepts/merchants", "Merchants"),
    ]),
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
      cat("Overview", [
        doc("payments/guides/overview/export", "Export payments"),
        doc("payments/guides/overview/generate-transaction-statement", "Generate a transaction statement"),
        doc("payments/guides/overview/get-payment-id", "Get a payment ID"),
        doc("payments/guides/overview/get-transaction-id", "Get a transaction ID"),
        doc("payments/guides/overview/get-transaction-info", "Get transaction info"),
      ]),
      cat("Merchants", [
        doc("payments/guides/merchants/index", "Overview"),
        doc("payments/guides/merchants/onboarding-overview", "Onboarding overview"),
        doc("payments/guides/merchants/missing-information", "Missing information"),
        cat("Profiles", [
          doc("payments/guides/merchants/profiles/request", "Request a profile"),
          doc("payments/guides/merchants/profiles/get-info", "Get profile info"),
          doc("payments/guides/merchants/profiles/update", "Update a profile"),
        ]),
        cat("Online", [
          doc("payments/guides/merchants/online/cards", "Cards"),
          doc("payments/guides/merchants/online/sdd", "SEPA Direct Debit"),
          doc("payments/guides/merchants/online/idd", "International Direct Debit"),
        ]),
        cat("In-person", [
          doc("payments/guides/merchants/in-person/cards", "Cards"),
          doc("payments/guides/merchants/in-person/checks", "Checks"),
        ]),
      ], { link: "payments/guides/merchants/index" }),
    ]),
    top("Reference", [
      doc("payments/reference/sandbox", "Sandbox"),
      doc("payments/reference/schemes", "Scheme tables"),
      doc("payments/reference/transaction-fraud-types", "Transaction fraud types"),
    ]),
  ],

  usersSidebar: [
    doc("users/index", "Overview"),
    top("Concepts", [
      doc("users/concepts/consent", "Consent"),
      doc("users/concepts/identifications", "Identifications"),
    ]),
    top("Guides", [
      cat("Consent", [
        doc("users/guides/consent/create-multiconsent", "Create a multiconsent"),
        doc("users/guides/consent/configure-notifications", "Configure notifications"),
        doc("users/guides/consent/implement-s2s", "Implement server-to-server"),
        doc("users/guides/consent/integrate-sca", "Integrate SCA"),
        doc("users/guides/consent/cancel", "Cancel a consent"),
      ]),
      cat("Identifications", [
        doc("users/guides/identifications/get-identifications", "Get identifications"),
        doc("users/guides/identifications/get-latest-id", "Get the latest identification"),
      ]),
      cat("Overview", [
        doc("users/guides/overview/deactivate", "Deactivate a user"),
        doc("users/guides/overview/export", "Export users"),
        doc("users/guides/overview/get-info-one", "Get info on one user"),
        doc("users/guides/overview/get-info-multiple", "Get info on multiple users"),
        doc("users/guides/overview/get-list", "Get a user list"),
      ]),
    ]),
    top("Reference", [
      doc("users/reference/identity-methods", "Identity methods (Expert, PVID, QES)"),
      doc("users/reference/sandbox-identifications", "Sandbox: identifications"),
    ]),
  ],

  devToolsSidebar: [
    doc("dev-tools/index", "Overview"),
    top("Tools", [
      doc("dev-tools/tools/api-explorer", "API Explorer"),
      doc("dev-tools/tools/event-simulator", "Event simulator"),
      doc("dev-tools/tools/postman-collection", "Postman collection"),
      doc("dev-tools/tools/sandbox-users", "Sandbox users"),
      doc("dev-tools/tools/testing-api", "Testing the API"),
      doc("dev-tools/tools/mcp-servers", "MCP servers"),
      doc("dev-tools/tools/test-tools-guide", "Test tools guide"),
    ]),
    top("Using the API", [
      doc("dev-tools/using-api/authentication", "Authentication"),
      doc("dev-tools/using-api/errors-rejections", "Errors & rejections"),
      doc("dev-tools/using-api/idempotency", "Idempotency"),
      doc("dev-tools/using-api/pagination", "Pagination"),
      doc("dev-tools/using-api/payment-control", "Payment control"),
      doc("dev-tools/using-api/webhooks", "Webhooks"),
    ]),
    top("GraphQL", [
      doc("dev-tools/graphql/index", "Overview"),
    ]),
  ],
};