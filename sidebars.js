module.exports = {
  docSidebar: [
    {
      type: "category",
      label: "Introduction",
      collapsible: false,
      collapsed: false,
      items: [
        "about-swan",
        {
          type: "category",
          label: "Starter guides",
          link: { type: "doc", id: "starter-guides/intro" },
          collapsible: true,
          collapsed: true,
          items: ["starter-guides/activate"],
        },
        {
          type: "category",
          label: "Use cases",
          link: { type: "doc", id: "use-cases/intro" },
          collapsible: true,
          collapsed: true,
          items: [
            "use-cases/bnpl",
            "use-cases/expense",
            "use-cases/financial",
            "use-cases/rental",
            "use-cases/swan-solo",
            "use-cases/vertical",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Accounts",
      collapsible: false,
      collapsed: false,
      items: [
        "topics/accounts/about",
      ],
    },
    {
      type: "category",
      label: "Payments",
      collapsible: false,
      collapsed: false,
      items: [
        "topics/payments/about",
        {
          type: "category",
          label: "Card payments",
          link: { type: "doc", id: "topics/payments/card-payments/about" },
          collapsed: true,
          items: [
            "topics/payments/card-payments/guides/card-payment-initiate",
          ],
        },        
        {
          type: "category",
          label: "Credit transfers",
          link: { type: "doc", id: "topics/payments/credit-transfers/about" },
          collapsed: true,
          items: [
            "topics/payments/credit-transfers/guide-receive-transfers",
            "topics/payments/credit-transfers/guide-refund-transfers",
            "topics/payments/credit-transfers/guide-set-up-recurring-transfers",
            "topics/payments/credit-transfers/guide-transfer-money",
          ],
        },
        "topics/payments/direct-debit/about",
        "topics/payments/checks/about",
        "topics/payments/open-banking/about",
        "topics/payments/support",
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
        "topics/contact",
        {
          type: "link",
          label: "Help Center", // The link label
          href: "https://support.swan.io/hc/en-150", // The external URL
        },
      ],
    },
  ],

  partnershipSidebar: [
    {
      type: "category",
      label: "Partnership with Swan",
      collapsible: false,
      collapsed: false,
      items: [
        "partnership/intro",
        "partnership/rules",
        {
          type: "category",
          label: "Country guides",
          link: { type: "doc", id: "partnership/country-guides/index" },
          collapsible: true,
          collapsed: true,
          items: [
            "partnership/country-guides/france",
            "partnership/country-guides/spain",
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
        "partnership/contact",
        {
          type: "link",
          label: "Help Center", // The link label
          href: "https://support.swan.io/hc/en-150", // The external URL
        },
      ],
    },
  ],

  developersSidebar: [
    {
      type: "category",
      label: "Swan GraphQL API",
      collapsible: false,
      collapsed: false,
      items: [
        "developers/intro",
        {
          type: "category",
          label: "Webhooks",
          link: { type: "doc", id: "developers/webhooks/about" },
          collapsible: true,
          collapsed: true,
          items: [
            "developers/webhooks/using-webhooks",
          ],
        },
        {
          type: "category",
          label: "Access tokens",
          link: { type: "doc", id: "developers/access-tokens/about" },
          collapsible: true,
          collapsed: true,
          items: [
            "developers/access-tokens/get-token-project",
                "developers/access-tokens/get-token-user",
          ],
        },
        {
          type: "category",
          label: "Errors and rejections",
          link: { type: "doc", id: "developers/rejections/about" },
          collapsible: true,
          collapsed: true,
          items: ["developers/rejections/using-rejections"],
        },
      ],
    },
    {
      type: "category",
      label: "Open source",
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: "link",
          label: "Swan Banking Frontend", // The link label
          href: "https://swan-io.github.io/swan-partner-frontend/", // The external URL
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
        "partnership/contact",
        {
          type: "link",
          label: "Help Center", // The link label
          href: "https://support.swan.io/hc/en-150", // The external URL
        },
      ],
    },
  ],

  schemaSidebar: [
    {
      type: "category",
      label: "API Reference",
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: "autogenerated",
          dirName: "api-reference",
        },
      ],
    },
  ],
};
