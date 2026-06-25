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