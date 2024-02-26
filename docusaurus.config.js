const prism = require("prism-react-renderer");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Swan Docs",
  tagline: "Onboarding & Banking clients for Swan",
  url: "https://swan-io.github.io",
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
        },
        {
          position: "right",
          href: "https://docs.swan.io/help/changelog",
          label: "Changelog",
        },
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
  },
  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],
  scripts: [],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
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
  plugins: ["docusaurus-plugin-matomo"],
};
