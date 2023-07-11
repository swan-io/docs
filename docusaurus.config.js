const lightCodeTheme = require("prism-react-renderer/themes/palenight");
const darkCodeTheme = require("prism-react-renderer/themes/oceanicNext");
const path = require("path");

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
    },
    navbar: {
      title: "Docs",
      logo: {
        alt: "Swan",
        src: "img/logo-swan.svg",
        width: 70,
      },
    },
    // footer: {
    //   // style: "dark",
    //   copyright: `Copyright © ${new Date().getFullYear()} Swan`,
    // },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
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
          editUrl: "https://github.com/swan-io/docs/edit/main/docs/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  plugins: [
    [
      "@graphql-markdown/docusaurus",
      {
        schema: path.join(
          process.cwd(),
          "scripts/graphql/dist/partner-schema.gql"
        ),
        rootPath: "./docs",
        baseURL: "api-reference",
        loaders: {
          GraphQLFileLoader: "@graphql-tools/graphql-file-loader",
        },
      },
    ],
  ],
};
