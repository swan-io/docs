const ia = require("./sidebars.ia.js");

// Empty sidebar sections are handled automatically. Docusaurus rejects a
// category with no items and no link, so before the config is exported we walk
// the tree and drop a muted "Nothing here yet" placeholder into any empty
// grouping (styled via .sidebar-empty-hint in custom.css). Leave a section's
// `items: []` and it self-labels — no per-section boilerplate. (Sections that
// have a link but no children are already covered by the CSS :empty rule.)
const EMPTY_HINT = { type: "html", value: "Nothing here yet", className: "sidebar-empty-hint" };
const fillEmptySections = (items) =>
  Array.isArray(items)
    ? items.map((item) => {
        if (item && item.type === "category") {
          const filled = fillEmptySections(item.items || []);
          return { ...item, items: filled.length === 0 && !item.link ? [EMPTY_HINT] : filled };
        }
        return item;
      })
    : items;

const sidebars = {
  ...ia,
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
      // Empty grouping: leave items empty and fillEmptySections (above) injects
      // the "Nothing here yet" placeholder. Add real pages here when a feature
      // enters preview.
      type: "category",
      label: "Preview",
      collapsible: false,
      collapsed: false,
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

module.exports = Object.fromEntries(
  Object.entries(sidebars).map(([key, value]) => [key, fillEmptySections(value)]),
);