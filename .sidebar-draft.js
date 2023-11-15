module.exports = {
  docSidebar: [
    {
      type: "category",
      label: "Introduction",
      collapsible: false,
      collapsed: false,
      items: [
        "index",
        "glossary",
      ],
    },
    {
      type: "category",
      label: "Account onboarding",
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: "category",
          label: "Onboarding overview",
          link: { type: "doc", id: "topics/onboarding/index" },
          collapsed: true,
          items: [
            "topics/onboarding/overview/guide-get-onboarding-info",
            "topics/onboarding/overview/guide-monitor-onboarding",
            "topics/onboarding/overview/guide-finalize-onboarding",
          ],
        },
        {
          type: "category",
          label: "Individual accounts",
          link: { type: "doc", id: "topics/onboarding/individual/index" },
          collapsed: true,
          items: [
            "topics/onboarding/individual/guide-create-onboarding",
            "topics/onboarding/individual/guide-update-onboarding",
          ],
        },
        {
          type: "category",
          label: "Company accounts",
          link: { type: "doc", id: "topics/onboarding/company/index" },
          collapsed: true,
          items: [
            "topics/onboarding/company/guide-create-onboarding",
            "topics/onboarding/company/guide-update-onboarding",
          ],
        },
        {
          type: "category",
          label: "Onboarding documents",
          link: { type: "doc", id: "topics/onboarding/documents/index" },
          collapsed: true,
          items: [
            "topics/onboarding/documents/guide-add-document-webhooks",
            "topics/onboarding/documents/guide-list-documents",
            "topics/onboarding/documents/guide-upload-document",
            "topics/onboarding/documents/guide-retrieve-info",
            "topics/onboarding/documents/guide-request-collection-review",
            "topics/onboarding/documents/guide-delete-document",
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
          link: { type: "doc", id: "developers/webhooks/index" },
          collapsible: true,
          collapsed: true,
          items: [
            "developers/webhooks/using-webhooks",
          ],
        },
        {
          type: "category",
          label: "Access tokens",
          link: { type: "doc", id: "developers/access-tokens/index" },
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
          link: { type: "doc", id: "developers/rejections/index" },
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
