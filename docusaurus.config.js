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
        width: 130,
      },
      items: [
        {
          type: "doc",
          position: "left",
          docId: "index",
          label: "Documentation",
        },
        {
          type: "doc",
          position: "left",
          docId: "partnership/index",
          label: "Partnership",
        },
        {
          type: "doc",
          position: "left",
          docId: "developers/index",
          label: "Developers",
        },
        {
          to: "https://api-reference.swan.io",
          label: "API Reference",
          position: "left",
          target: "_self",
        },
        {
          position: "right",
          href: "https://explorer.swan.io/",
          label: "API Explorer", 
          className: "swan-api-explorer"
        },
        {
          type: "html",
          position: "right", 
          value: `<div class="swan-unified-nav">
            <a href="/changelog">Changelog</a>
            <div class="separator"></div>
            <a href="/preview">Preview</a>
          </div>`
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
  scripts: [
    {
      src: "https://app.outverse.com/widgetverse/swan.js",
      async: true,
      defer: true,
    },
  ],
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
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  plugins: [
    "docusaurus-plugin-matomo",
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          {
            from: '/preview/verification-of-payee',
            to: '/preview/vop/verification-of-payee',
          },
          {
            from: '/topics/payments/credit-transfers/sepa/verification-of-payee',
            to: '/preview/vop/verification-of-payee',
          },
        ]
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
