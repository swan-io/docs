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