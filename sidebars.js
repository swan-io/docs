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
          link: { type: "doc", id: "topics/onboarding/about" },
          collapsed: true,
          items: [
            "topics/onboarding/overview/guide-retrieve-onboarding-id",
            "topics/onboarding/overview/guide-monitor-onboarding",
            "topics/onboarding/overview/guide-finalize-onboarding",
          ],
        },
        {
          type: "category",
          label: "Individual accounts",
          link: { type: "doc", id: "topics/onboarding/individual/about" },
          collapsed: true,
          items: [
            "topics/onboarding/individual/guide-create-onboarding",
            "topics/onboarding/individual/guide-update-onboarding",
          ],
        },
        {
          type: "category",
          label: "Company accounts",
          link: { type: "doc", id: "topics/onboarding/company/about" },
          collapsed: true,
          items: [
            "topics/onboarding/company/guide-create-onboarding",
            "topics/onboarding/company/guide-update-onboarding",
          ],
        },
        {
          type: "category",
          label: "Onboarding documents",
          link: { type: "doc", id: "topics/onboarding/documents/about" },
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
          link: { type: "doc", id: "topics/onboarding/account-holders/about" },
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
      label: "Payments",
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: "category",
          label: "Payments overview",
          link: { type: "doc", id: "topics/payments/about" },
          collapsed: true,
          items: [
            "topics/payments/overview/guide-get-payment-info",
            "topics/payments/overview/guide-retrieve-payment-id",
            "topics/payments/overview/guide-get-transaction-info",
            "topics/payments/overview/guide-retrieve-transaction-id",
          ],
        },
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
};
