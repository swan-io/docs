/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation
 The sidebars can be generated from the filesystem, or explicitly defined here.
 Create as many sidebars as you want.
 */

module.exports = {
  docs: [
  'about-swan',
    {
      type: 'category',
      label: 'PARTNERSHIP WITH SWAN',
      collapsible: true,
      collapsed: false,
      items: [
        'partnership/intro',
        'partnership/use-cases/intro',
      ],
    },
    {
      type: 'category',
      label: 'USE THE SWAN API',
      collapsible: true,
      collapsed: false,
      items: [
        'swan-api/intro',
        {
          type: 'link',
          label: 'API Explorer', // The link label
          href: 'https://explorer.swan.io/', // The external URL
        },
        {
          type: 'link',
          label: 'API Reference', // The link label
          href: 'https://api-reference.swan.io/', // The external URL
        },
        'swan-api/endpoints',
      ],
    },
    {
      type: 'category',
      label: 'GUIDES',
      collapsible: true,
      collapsed: false,
      items: [
        'guides/starter-guides/intro',
        'guides/accounts/intro',
        {
          type: "category",
          label: "Payments",
          link: {type: 'doc', id: 'guides/payments/intro'},
          collapsed: true,
          items: [
            {
              type: "category",
              label: "Credit transfers",
              link: {type: 'doc', id: 'guides/payments/credit-transfers/concepts'},
              collapsed: true,
              items: [
                'guides/payments/credit-transfers/guide-receive-transfers',
                'guides/payments/credit-transfers/refund-transfer',
                'guides/payments/credit-transfers/transfer-money',
                'guides/payments/credit-transfers/set-up-recurring-transfer',
              ],
            },
            'guides/payments/direct-debit/intro',
            'guides/payments/card-payments/intro',
            'guides/payments/checks/intro',
            'guides/payments/open-banking/intro',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'RESOURCES',
      collapsible: true,
      collapsed: false,
      items: [
        'changelog',
        {
          type: 'link',
          label: 'Status page', // The link label
          href: 'https://status.swan.io/', // The external URL
        },
        {
          type: 'link',
          label: 'Roadmap', // The link label
          href: 'https://swanio.notion.site/Swan-Public-Roadmap-385e4b2e91b3409786a6c8e885654a22', // The external URL
        },
        'contact',
        {
          type: 'link',
          label: 'Support center', // The link label
          href: 'https://support.swan.io/hc/en-150', // The external URL
        },
      ],
    },
  ],
};