const ia = require("./sidebars.ia.js");

module.exports = {
  ...ia,
  docSidebar: [
    {
      type: "category",
      label: "Introduction",
      collapsible: false,
      collapsed: false,
      items: [
        "index",
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
            "topics/cards/overview/guide-export",
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
          ],
        },
        {
          type: "category",
          label: "Card packages",
          link: { type: "doc", id: "topics/cards/card-packages/index" },
          collapsed: true,
          items: [
            "topics/cards/card-packages/guide-product-configuration",
            "topics/cards/card-packages/guide-get-card-package-tier",
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
            "topics/cards/physical/sandbox",
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
            "topics/merchants/guide-onboarding-overview",
            "topics/merchants/profiles/guide-request",
            "topics/merchants/guide-missing-information",
            "topics/merchants/profiles/guide-update",
            "topics/merchants/profiles/guide-get-info",
            "topics/merchants/sandbox",
          ],
        },
        {
          type: "category",
          label: "Accepting online payments",
          link: { type: "doc", id: "topics/merchants/online/index" },
          collapsed: true,
          items: [
            {
              type: "category",
              label: "Cards",
              link: { type: "doc", id: "topics/merchants/online/cards/index" },
              collapsed: true,
              items: [
                "topics/merchants/online/cards/guide-cards",
                "topics/merchants/online/cards/guide-request",
                "topics/merchants/online/cards/guide-create-link",
                "topics/merchants/online/cards/sandbox",
              ],
            },
            {
              type: "category",
              label: "SEPA Direct Debit",
              link: { type: "doc", id: "topics/merchants/online/sdd/index" },
              collapsed: true,
              items: [
                "topics/merchants/online/sdd/guide-sdd",
                "topics/merchants/online/sdd/guide-request",
                "topics/merchants/online/sdd/guide-declare",
                "topics/merchants/online/sdd/guide-get-mandate",
                "topics/merchants/online/sdd/guide-initiate",
                "topics/merchants/online/sdd/guide-update",
                "topics/merchants/online/sdd/guide-create-link",
                "topics/merchants/online/sdd/sandbox",
              ],
            },
            {
              type: "category",
              label: "Internal Direct Debit",
              link: { type: "doc", id: "topics/merchants/online/idd/index" },
              collapsed: true,
              items: [
                "topics/merchants/online/idd/guide-idd",
                "topics/merchants/online/idd/guide-request",
                "topics/merchants/online/idd/guide-declare",
                "topics/merchants/online/idd/guide-initiate",
                "topics/merchants/online/idd/guide-refund",
                "topics/merchants/online/idd/sandbox",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Accepting in-person payments",
          link: { type: "doc", id: "topics/merchants/in-person/index" },
          collapsed: true,
          items: [
            {
              type: "category",
              label: "In-person cards",
              link: { type: "doc", id: "topics/merchants/in-person/cards/index" },
              collapsed: true,
              items: [
                "topics/merchants/in-person/cards/guide-setup",
                "topics/merchants/in-person/cards/guide-request-method",
                "topics/merchants/in-person/cards/guide-accept",
                "topics/merchants/in-person/cards/guide-initialize",
                "topics/merchants/in-person/cards/guide-create-payments",
                "topics/merchants/in-person/cards/sandbox",
              ],
            },
            {
              type: "category",
              label: "French checks",
              link: { type: "doc", id: "topics/merchants/in-person/checks/index" },
              collapsed: true,
              items: [
                "topics/merchants/in-person/checks/guide-checks",
                "topics/merchants/in-person/checks/guide-request",
                "topics/merchants/in-person/checks/guide-initiate",
                "topics/merchants/in-person/checks/sandbox",
              ],
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Payments",
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: "category",
          label: "Payments overview",
          link: { type: "doc", id: "topics/payments/index" },
          collapsed: true,
          items: [
            "topics/payments/overview/guide-get-payment-info",
            "topics/payments/overview/guide-get-payment-id",
            "topics/payments/overview/guide-get-transaction-info",
            "topics/payments/overview/guide-get-transaction-id",
            "topics/payments/overview/guide-get-transaction-list",
            "topics/payments/overview/guide-generate-transaction-statement",
            "topics/payments/overview/guide-export",
          ],
        },
        {
          type: "category",
          label: "Card payments",
          link: { type: "doc", id: "topics/payments/cards/index" },
          collapsed: true,
          items: [
            "topics/payments/cards/guide-get-list",
            "topics/payments/cards/guide-get-enriched-info",
            "topics/payments/cards/sandbox",
          ],
        },
        {
          type: "category",
          label: "Credit transfers",
          link: { type: "doc", id: "topics/payments/credit-transfers/index" },
          collapsed: true,
          items: [
            {
              type: "category",
              label: "SEPA Credit Transfers",
              link: {
                type: "doc",
                id: "topics/payments/credit-transfers/sepa/index",
              },
              collapsed: true,
              items: [
                "topics/payments/credit-transfers/sepa/guide-initiate-ct",
                "topics/payments/credit-transfers/sepa/guide-cancel-ct",
                "topics/payments/credit-transfers/sepa/guide-refund-ct",
                {
                  type: "category",
                  label: "Verification of Payee (VoP)",
                  link: { type: "doc", id: "topics/payments/credit-transfers/sepa/vop/verification-of-payee" },
                  collapsed: true,
                  items: [
                    'topics/payments/credit-transfers/sepa/vop/guide-verify-beneficiary',
                    'topics/payments/credit-transfers/sepa/vop/bulk-credit-transfers',
                    'topics/payments/credit-transfers/sepa/vop/incoming-vop-requests',
                  ],
                },
                "topics/payments/credit-transfers/sepa/guide-add-beneficiary",
                "topics/payments/credit-transfers/sepa/guide-schedule-so",
                "topics/payments/credit-transfers/sepa/guide-cancel-so",
                "topics/payments/credit-transfers/sepa/sandbox",
              ],
            },
            {
              type: "category",
              label: "International Credit Transfers",
              link: {
                type: "doc",
                id: "topics/payments/credit-transfers/international/index",
              },
              collapsed: true,
              items: [
                "topics/payments/credit-transfers/international/guide-quote",
                "topics/payments/credit-transfers/international/guide-beneficiary",
                "topics/payments/credit-transfers/international/guide-transaction-details",
                "topics/payments/credit-transfers/international/guide-initiate",
                "topics/payments/credit-transfers/international/guide-add-beneficiary",
                "topics/payments/credit-transfers/international/guide-get-info",
                "topics/payments/credit-transfers/international/sandbox",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Direct debit",
          link: { type: "doc", id: "topics/payments/direct-debit/index" },
          collapsed: true,
          items: [
            "topics/payments/direct-debit/guide-return",
            "topics/payments/direct-debit/guide-add-mandate",
            "topics/payments/direct-debit/guide-update-mandate",
            "topics/payments/direct-debit/guide-suspend-mandate",
            "topics/payments/direct-debit/guide-enable-mandate",
            "topics/payments/direct-debit/sandbox",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Users",
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: "category",
          label: "Users overview",
          link: { type: "doc", id: "topics/users/index" },
          collapsed: true,
          items: [
            "topics/users/overview/guide-get-list",
            "topics/users/overview/guide-get-info-multiple",
            "topics/users/overview/guide-get-info-one",
            "topics/users/overview/guide-export",
            "topics/users/overview/guide-deactivate",
          ],
        },
        {
          type: "category",
          label: "Consent",
          link: { type: "doc", id: "topics/users/consent/index" },
          collapsed: true,
          items: [
            "topics/users/consent/guide-configure-notifications",
            "topics/users/consent/guide-create-multiconsent",
            "topics/users/consent/guide-implement-s2s",
            "topics/users/consent/guide-integrate-sca",
          ],
        },
        {
          type: "category",
          label: "Identifications",
          link: { type: "doc", id: "topics/users/identifications/index" },
          collapsed: true,
          items: [
            "topics/users/identifications/guide-get-identifications",
            "topics/users/identifications/guide-get-latest-id",
            "topics/users/identifications/sandbox",
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
          label: "Status page",
          href: "https://status.swan.io/",
        },
        {
          type: "link",
          label: "Trust Center",
          href: "https://trust.swan.io/",
        },
        {
          type: "link",
          label: "Support Center",
          href: "https://support.swan.io/hc/en-150",
        },
        {
          type: "link",
          label: "Roadmap",
          href: "https://swanio.notion.site/Swan-Public-Roadmap-385e4b2e91b3409786a6c8e885654a22",
        },
        "topics/contact",
      ],
    },
  ],
  // DOC-1814 batch 2: partnership migrated to get-started/become-a-partner (+ accounts/users reference).
  // Remnant only — identity documents are deferred to the users batch.
  partnershipSidebar: [
    {
      type: "category",
      label: "Document center",
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: "category",
          label: "Identity documents",
          link: { type: "doc", id: "partnership/document-center/identity/index" },
          collapsed: true,
          items: [
            "partnership/document-center/identity/expert",
            "partnership/document-center/identity/pvid",
            "partnership/document-center/identity/qes",
          ],
        },
      ],
    },
  ],
  previewSidebar: [
    {
      type: 'doc',
      id: 'preview/index',
      label: 'Upcoming features',
      className: 'sidebar-preview-notice',
    },
    {
      type: "category",
      label: "Preview",
      collapsible: false,
      collapsed: false,
      link: { type: "doc", id: "preview/index" },
      items: [],
    },
    {
      type: "category",
      label: "Beta",
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: "category",
          label: "Account onboarding enhancements",
          link: { type: "doc", id: "preview/new-onboarding/index" },
          collapsed: true,
          items: [
            "preview/new-onboarding/individual",
            "preview/new-onboarding/company",
            {
              type: "category",
              label: "Legacy reference (deprecated)",
              link: { type: "doc", id: "preview/new-onboarding/legacy-onboarding/index" },
              collapsed: true,
              items: [
                {
                  type: "category",
                  label: "Individual",
                  link: { type: "doc", id: "preview/new-onboarding/legacy-onboarding/individual/index" },
                  collapsed: true,
                  items: [
                    "preview/new-onboarding/legacy-onboarding/individual/guide-create",
                    "preview/new-onboarding/legacy-onboarding/individual/guide-update",
                  ],
                },
                {
                  type: "category",
                  label: "Company",
                  link: { type: "doc", id: "preview/new-onboarding/legacy-onboarding/company/index" },
                  collapsed: true,
                  items: [
                    "preview/new-onboarding/legacy-onboarding/company/guide-create",
                    "preview/new-onboarding/legacy-onboarding/company/guide-update",
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};