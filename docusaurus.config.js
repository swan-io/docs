const prism = require("prism-react-renderer");
const redirects = require("./redirects");

const url = "https://docs.swan.io";

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Swan Docs",
  tagline:
    "Discover the features that power Swan. Unlock your integration’s full potential with Swan’s comprehensive documentation.",
  url,
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",
  organizationName: "swan-io", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.

  themeConfig: {
    algolia: {
      appId: "PWGO6EETLK",
      apiKey: "55d34883c659e60e4d4d625f78c01fbc",
      indexName: "swan-ioio",
      contextualSearch: true,
      searchParameters: {},
      searchPagePath: "search",
      externalUrlRegex: "api-reference\\.swan\\.io",
    },
    matomo: {
      matomoUrl: "https://swan.matomo.cloud/",
      siteId: "5",
      phpLoader: "matomo.php",
      jsLoader: "matomo.js",
    },
    navbar: {
      logo: {
        alt: "Swan",
        src: "img/logo-swan.svg",
        width: 152,
      },
      items: [
        { type: "doc", docId: "get-started/index", position: "left", label: "Get started" },
        { type: "html", position: "left", value: "<span class=\"navbar__sep\" aria-hidden=\"true\">•</span>" },
        // Accounts/Cards/Payments/Users dropdowns are auto-derived from
        // sidebars.ia.js by the ia-nav plugin (no hand-maintained items here).
        { type: "custom-sectionDropdown", position: "left", label: "Accounts", to: "/accounts" },
        { type: "custom-sectionDropdown", position: "left", label: "Cards", to: "/cards" },
        { type: "custom-sectionDropdown", position: "left", label: "Payments", to: "/payments" },
        { type: "custom-sectionDropdown", position: "left", label: "Users", to: "/users" },
        {
          // DOC-1814 — "Developer resources" dropdown: bundles the developer
          // resources (Documentation = the Build hierarchy, auto-derived from
          // sidebars.ia.js; Tools & references = the live tools that used to be
          // standalone buttons).
          type: "custom-developersDropdown",
          position: "right",
          label: "Developer resources",
          to: "/build",
          resources: [
            { label: "API Reference", icon: "apiref", href: "https://api-reference.swan.io", desc: "Full GraphQL schema" },
            { label: "API Explorer", icon: "explorer", href: "https://explorer.swan.io/", desc: "Run queries live" },
          ],
        },
        {
          // DOC-1814 — Changelog/Preview restored as standalone navbar buttons
          // (pulled back out of the Developer resources dropdown).
          type: "html",
          position: "right",
          value: `<div class="swan-unified-nav">
            <a class="swan-tip swan-icon-btn" href="/changelog"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l3 2"/></svg><span class="swan-tip__label" aria-hidden="true">Changelog</span></a>
            <div class="separator"></div>
            <a class="swan-tip swan-icon-btn" href="/preview"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg><span class="swan-tip__label" aria-hidden="true">Preview</span></a>
          </div>`
        },
        { type: "html", position: "right", value: `<span class="navbar__vr" aria-hidden="true"></span>` },
        { type: "search", position: "right" },
        {
          type: "html",
          position: "right",
          value: `<a class="swan-support swan-tip swan-tip--right" href="https://support.swan.io/hc/en-150" aria-label="Support"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m4.93 4.93 4.24 4.24"/><path d="m14.83 9.17 4.24-4.24"/><path d="m14.83 14.83 4.24 4.24"/><path d="m9.17 14.83-4.24 4.24"/><circle cx="12" cy="12" r="4"/></svg><span class="swan-tip__label" aria-hidden="true">Support</span></a>`
        }
      ],
    },
    // footer: {
    //   // style: "dark",
    //   copyright: `Copyright © ${new Date().getFullYear()} Swan`,
    // },
    prism: {
      theme: prism.themes.palenight,
      darkTheme: prism.themes.oceanicNext,
    },
    metadata: [
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: `${url}/img/share.jpg` },
      { property: "og:image:width", content: `1500` },
      { property: "og:image:height", content: `777` },
      { name: "twitter:image", content: `${url}/img/share.jpg` },
    ],
  },
  markdown: {
    mermaid: true,
    parseFrontMatter: async (params) => {
      const result = await params.defaultParseFrontMatter(params);
      if (
        result != null &&
        result.frontMatter != null &&
        result.frontMatter.type === "release"
      ) {
        return {
          ...result,
          frontMatter: {
            ...result.frontMatter,
            slug: String(result.frontMatter.title)
              .normalize("NFKD") // split accented characters into their base characters and diacritical marks
              .replace(/[\u0300-\u036f]/g, "") // remove all the accents, which happen to be all in the \u03xx UNICODE block.
              .trim() // trim leading or trailing whitespace
              .toLowerCase() // convert to lowercase
              .replace(/[^a-z0-9 -]/g, "") // remove non-alphanumeric characters
              .replace(/\s+/g, "-") // replace spaces with hyphens
              .replace(/-+/g, "-"), // remove consecutive hyphens
          },
        };
      }
      return result;
    },
  },
  themes: ["@docusaurus/theme-mermaid"],
  scripts: [],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        googleTagManager: {
          containerId: 'GTM-NWPK43X',
        },
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/swan-io/docs/edit/main/",
        },
        theme: {
          customCss: [
            require.resolve("./src/css/custom.css"),
            require.resolve("./src/css/ia-shell.css"),
          ],
        },
      },
    ],
  ],
  plugins: [
    require.resolve("./plugins/ia-rail-meta"),
    require.resolve("./plugins/ia-glossary-terms"),
    require.resolve("./plugins/ia-nav"),
    // Layer 2: emit {URL}.md mirrors + add them to sitemap.xml. Listed after the
    // preset's sitemap so sitemap.xml exists when this plugin's postBuild runs.
    require.resolve("./plugins/md-mirror"),
    "docusaurus-plugin-matomo",
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: redirects,
      },
    ],
    [
      "@docusaurus/plugin-content-blog",
      {
        blogTitle: "Changelog",
        postsPerPage: 10,
        blogSidebarTitle: "All releases",
        blogSidebarCount: "ALL",
        id: "changelog",
        routeBasePath: "changelog",
        path: "./changelog",
        exclude: ["coming-up.mdx"], // Exclude preview folder
        feedOptions: {
          type: "all",
          copyright: `Copyright © ${new Date().getFullYear()} Swan.`,
          createFeedItems: async (params) => {
            const { blogPosts, defaultCreateFeedItems, ...rest } = params;
            return defaultCreateFeedItems({
              blogPosts: blogPosts.filter((item, index) => index < 10),
              ...rest,
            });
          },
        },
      },
    ],
  ],
};
