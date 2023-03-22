const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/oceanicNext");
const path = require("path");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Swan Partner Front-End",
  tagline: "Onboarding & Banking clients for Swan",
  url: "https://swan-io.github.io",
  baseUrl: "/docs/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",
  organizationName: "swan-io", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Docs",
      logo: {
        alt: "Swan",
        src: "img/logo-swan.svg",
        width: 70,
      },
      items: [
        {
          href: "/",
          label: "Getting started",
          position: "left",
        },
        {
          href: "/explorer",
          label: "GraphQL Explorer",
          position: "left",
        },
        {
          href: "/api",
          label: "API reference",
          position: "left",
        },
      ],
    },
    footer: {
      // style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} Swan`,
    },
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
        baseURL: "api",
        loaders: {
          GraphQLFileLoader: "@graphql-tools/graphql-file-loader",
        },
      },
    ],
  ],
};
