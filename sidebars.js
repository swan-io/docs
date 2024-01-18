module.exports = {
  docSidebar: [
    {
      type: "category",
      label: "Introduction",
      collapsible: false,
      collapsed: false,
      items: ["index", "glossary"],
    },
    {
      type: "category",
      label: "Account onboarding",
      collapsible: false,
      link: { type: "doc", id: "topics/onboarding/index" },
      collapsed: false,
      items: [
        {
          type: "category",
          label: "Account onboarding overview",
          link: { type: "doc", id: "topics/onboarding/index" },
          collapsed: true,
          items: [
            "topics/onboarding/overview/guide-get-info",
            "topics/onboarding/overview/guide-finalize",
          ],
        },
        {
          type: "category",
          label: "Individual accounts",
          link: { type: "doc", id: "topics/onboarding/individual/index" },
          collapsed: true,
          items: [
            "topics/onboarding/individual/guide-create",
            "topics/onboarding/individual/guide-update",
          ],
        },
        {
          type: "category",
          label: "Company accounts",
          link: { type: "doc", id: "topics/onboarding/company/index" },
          collapsed: true,
          items: [
            "topics/onboarding/company/guide-create",
            "topics/onboarding/company/guide-update",
          ],
        },
        {
          type: "category",
          label: "Supporting documents",
          link: { type: "doc", id: "topics/onboarding/documents/index" },
          collapsed: true,
          items: [
            "topics/onboarding/documents/guide-get-list",
            "topics/onboarding/documents/guide-upload",
            "topics/onboarding/documents/guide-get-info",
            "topics/onboarding/documents/guide-request-collection-review",
            "topics/onboarding/documents/guide-delete",
            "topics/onboarding/documents/sandbox",
          ],
        },
        {
          type: "category",
          label: "Account holders",
          link: { type: "doc", id: "topics/onboarding/account-holders/index" },
          collapsed: true,
          items: [
            "topics/onboarding/account-holders/guide-add-additional-account",
            "topics/onboarding/account-holders/sandbox",
          ],
        },
        "topics/onboarding/support",
      ],
    },
    {
      type: "category",
      label: "Accounts",
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: "category",
          label: "Accounts overview",
          link: { type: "doc", id: "topics/accounts/index" },
          collapsed: true,
          items: [
            "topics/accounts/overview/guide-close",
            "topics/accounts/overview/guide-generate-statement",
            "topics/accounts/overview/guide-get-bank-details",
          ],
        },
        {
          type: "category",
          label: "Account memberships",
          link: { type: "doc", id: "topics/accounts/memberships/index" },
          collapsed: true,
          items: [
            "topics/accounts/memberships/guide-add-one",
            "topics/accounts/memberships/guide-add-multiple",
            "topics/accounts/memberships/guide-update",
            "topics/accounts/memberships/guide-suspend-resume",
            "topics/accounts/memberships/guide-disable",
          ],
        },{
          type: "category",
          label: "Account funding",
          link: { type: "doc", id: "topics/accounts/funding/index" },
          collapsed: true,
          items: [
            "topics/accounts/funding/guide-add-source",
            "topics/accounts/funding/guide-initiate-request",
            "topics/accounts/funding/guide-cancel-source",
            "topics/accounts/funding/guide-cancel-request",
            "topics/accounts/funding/guide-get-info",
            "topics/accounts/funding/sandbox",
          ],
        },
        {
          type: "category",
          label: "Billing",
          link: { type: "doc", id: "topics/accounts/billing/index" },
          collapsed: true,
          items: [
            "topics/accounts/billing/guide-compliant-billing",
            "topics/accounts/billing/guide-get-list",
            "topics/accounts/billing/guide-get-details",
            "topics/accounts/billing/sandbox",
          ],
        },
        {
          type: "category",
          label: "IBANs",
          link: { type: "doc", id: "topics/accounts/ibans/index" },
          collapsed: true,
          items: [
            "topics/accounts/ibans/guide-get-info",
            "topics/accounts/ibans/guide-validate",
            "topics/accounts/ibans/guide-add-virtual",
            "topics/accounts/ibans/guide-add-virtual-local",
            "topics/accounts/ibans/guide-manage-virtual", 
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Authentication & Consent",
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: "category",
          label: "Authentication",
          link: { type: "doc", id: "topics/authentication/index" },
          collapsed: true,
          items: [
            "topics/authentication/guide-get-token-user",
            "topics/authentication/guide-get-token-project",
            "topics/authentication/guide-impersonate",
          ],
        },
        {
          type: "category",
          label: "Consent",
          link: { type: "doc", id: "topics/consent/index" },
          collapsed: true,
          items: [
            "topics/consent/guide-configure-notifications",
            "topics/consent/guide-create-multiconsent",
            "topics/consent/guide-implement-s2s",
            "topics/consent/guide-integrate-sca",
            "topics/consent/support",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Capital deposits",
      collapsible: false,
      collapsed: false,
      items: [
        "topics/capital-deposits/index",
        {
          type: "category",
          label: "France",
          link: { type: "doc", id: "topics/capital-deposits/france/guide" },
          collapsed: true,
          items: [
            "topics/capital-deposits/france/guide-create-case",
            "topics/capital-deposits/france/guide-upload-documents",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Cards",
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: "category",
          label: "Cards overview",
          link: { type: "doc", id: "topics/cards/index" },
          collapsed: true,
          items: [
            "topics/cards/overview/guide-issue",
            "topics/cards/overview/guide-update",
          ],
        },
        {
          type: "category",
          label: "Card design",
          link: { type: "doc", id: "topics/cards/design/index" },
          collapsed: true,
          items: [
            "topics/cards/design/guide-standard",
            "topics/cards/design/guide-custom",
            "topics/cards/design/guide-logo",
          ],
        },
        {
          type: "category",
          label: "Virtual cards",
          link: { type: "doc", id: "topics/cards/virtual/index" },
          collapsed: true,
          items: [
            "topics/cards/virtual/guide-add",
            "topics/cards/virtual/guide-view-info",
            "topics/cards/virtual/guide-cancel",
          ],
        },
        {
          type: "category",
          label: "Physical cards",
          link: { type: "doc", id: "topics/cards/physical/index" },
          collapsed: true,
          items: [
            "topics/cards/physical/guide-print",
            "topics/cards/physical/guide-activate",
            "topics/cards/physical/guide-view-info",
            "topics/cards/physical/guide-block-unblock",
            "topics/cards/physical/guide-renew",
            "topics/cards/physical/guide-cancel",
          ],
        },
        {
          type: "category",
          label: "Digital cards",
          link: { type: "doc", id: "topics/cards/digital/index" },
          collapsed: true,
          items: [
            "topics/cards/digital/guide-add",
            "topics/cards/digital/guide-cancel",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Merchants",
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: "category",
          label: "Merchants overview",
          link: { type: "doc", id: "topics/merchants/index" },
          collapsed: true,
          items: [
            "topics/merchants/profiles/guide-add",
            "topics/merchants/profiles/guide-update",
            "topics/merchants/profiles/guide-get-info",
            "topics/merchants/sandbox",
          ],
        },
        {
          type: "category",
          label: "SEPA Direct Debit for merchants",
          link: { type: "doc", id: "topics/merchants/sdd/index" },
          collapsed: true,
          items: [
            "topics/merchants/sdd/guide-sdd",
            "topics/merchants/sdd/guide-request",
            "topics/merchants/sdd/guide-declare",
            "topics/merchants/sdd/guide-initiate",
            "topics/merchants/sdd/sandbox",
          ],
        },
        {
          type: "category",
          label: "Internal Direct Debit for merchants",
          link: { type: "doc", id: "topics/merchants/idd/index" },
          collapsed: true,
          items: [
            "topics/merchants/idd/guide-idd",
            "topics/merchants/idd/guide-request",
            "topics/merchants/idd/guide-declare",
            "topics/merchants/idd/guide-initiate",
            "topics/merchants/idd/guide-refund",
            "topics/merchants/idd/sandbox",
          ],
        },
        {
          type: "category",
          label: "French checks for merchants",
          link: { type: "doc", id: "topics/merchants/checks/index" },
          collapsed: true,
          items: [
            "topics/merchants/checks/guide-checks",
            "topics/merchants/checks/guide-request",
            "topics/merchants/checks/guide-initiate",
            "topics/merchants/checks/sandbox",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Projects",
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: "category",
          label: "Projects overview",
          link: { type: "doc", id: "topics/projects/index" },
          collapsed: true,
          items: ["topics/projects/guide-activate"],
        },
        "topics/projects/support",
      ],
    },
    {
      type: "category",
      label: "Resources",
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: "link",
          label: "API reference",
          href: "https://api-reference.swan.io/",
        },
        {
          type: "link",
          label: "Status page", // The link label
          href: "https://status.swan.io/", // The external URL
        },
        {
          type: "link",
          label: "Support Center", // The link label
          href: "https://support.swan.io/hc/en-150", // The external URL
        },
        "topics/contact",
      ],
    },
  ],
  partnershipSidebar: [
    {
      type: "category",
      label: "Overview",
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: "category",
          label: "Partnership with Swan",
          link: { type: "doc", id: "partnership/index" },
          collapsed: true,
          items: [
            "partnership/overview/guide-orias",
          ],
        },
        "partnership/overview/protections",
        "partnership/overview/rules-regulations",
        "partnership/overview/country-coverage",
      ],
    },
    {
      type: "category",
      label: "Document center",
      collapsible: false,
      collapsed: false,
      items: [
        "partnership/document-center/index",
        {
          type: "category",
          label: "Company registration",
          collapsed: true,
          items: [
            "partnership/document-center/company-registration/france",
            "partnership/document-center/company-registration/germany",
            "partnership/document-center/company-registration/spain",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Resources",
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: "link",
          label: "Status page", // The link label
          href: "https://status.swan.io/", // The external URL
        },
        {
          type: "link",
          label: "Support Center", // The link label
          href: "https://support.swan.io/hc/en-150", // The external URL
        },
        "partnership/contact",
      ],
    },
  ],
  developersSidebar: [
    {
      type: "category",
      label: "Overview",
      collapsible: false,
      collapsed: false,
      items: [
        "developers/index",
        "developers/graphql",
        {
          type: "link",
          label: "API Reference",
          href: "https://api-reference.swan.io/",
        },
      ],
    },
    {
      type: "category",
      label: "Tools",
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: "category",
          label: "Tools overview",
          link: { type: "doc", id: "developers/tools/index" },
          collapsed: true,
          items: [
            "developers/tools/api-explorer",
            "developers/tools/testing-api",
            "developers/tools/event-simulator",
            "developers/tools/sandbox-users",
            "developers/tools/postman-collection",
          ],
        },
        "developers/tools/guide-test-tools",
      ],
    },
    {
      type: "category",
      label: "Using the API",
      collapsible: false,
      collapsed: false,
      items: [
        "developers/using-api/errors-rejections",
        "developers/using-api/pagination",
        "developers/using-api/payment-control",
        "developers/using-api/webhooks",
      ],
    },
    {
      type: "category",
      label: "Open Source",
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: "link",
          label: "Swan Banking Frontend",
          href: "https://swan-io.github.io/swan-partner-frontend/getting-started",
        },
      ],
    },
    {
      type: "category",
      label: "Resources",
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: "link",
          label: "Status page", // The link label
          href: "https://status.swan.io/", // The external URL
        },
        {
          type: "link",
          label: "Support Center", // The link label
          href: "https://support.swan.io/hc/en-150", // The external URL
        },
        "developers/contact",
      ],
    },
  ],
};
