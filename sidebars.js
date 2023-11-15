module.exports = {
  docSidebar: [
    {
      type: "category",
      label: "Introduction",
      collapsible: false,
      collapsed: false,
      link: { type: "doc", id: "index" },
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
      link: { type: "doc", id: "topics/onboarding/index" },
      items: [
        {
          type: "category",
          label: "Account onboarding overview",
          link: { type: "doc", id: "topics/onboarding/index" },
          collapsed: true,
          items: [
            "topics/onboarding/overview/guide-get-onboarding-info",
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
      label: "Capital deposits",
      collapsible: false,
      collapsed: false,
      link: { type: "doc", id: "topics/capital-deposits/index" },
      items: [
        "topics/capital-deposits/index",
        {
          type: "category",
          label: "France",
          link: { type: "doc", id: "topics/capital-deposits/france/guide" },
          collapsed: true,
          items : [
            "topics/capital-deposits/france/guide-create-case",
            "topics/capital-deposits/france/guide-upload-documents",
        ]
        },
      ],
    },
    {
      type: "category",
      label: "Projects",
      collapsible: false,
      collapsed: false,
      link: { type: "doc", id: "topics/projects/index" },
      items: [
        {
          type: "category",
          label: "Projects overview",
          link: { type: "doc", id: "topics/projects/index" },
          collapsed: true,
          items: [
            "topics/projects/guide-activate-project",
          ],
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
};
