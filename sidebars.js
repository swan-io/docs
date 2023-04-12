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
    {
      type: 'category',
      label: 'START HERE',
      collapsible: true,
      collapsed: false,
      items: [
        'about-swan',
        {
          type: 'category',
          label: 'Starter guides',
          collapsible: true,
          collapsed: true,
          items: [
            'guides/starter-guides/intro',
          ],
        },
        {
          type: 'category',
          label: 'Use cases',
          collapsible: true,
          collapsed: true,
          items: [
            'guides/use-cases/intro',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'SWAN API',
      collapsible: true,
      collapsed: false,
      items: [
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
        {
          type: 'category',
          label: 'Use the API',
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: 'category',
              label: 'Access tokens',
              link: {type: 'doc', id: 'swan-api/access-tokens/concepts'},
              collapsible: true,
              collapsed: true,
              items: [
                'swan-api/access-tokens/get-token-project',
                'swan-api/access-tokens/get-token-user',
              ],
            },
            {
              type: 'category',
              label: 'Errors and rejections',
              link: {type: 'doc', id: 'swan-api/rejections/concepts'},
              collapsible: true,
              collapsed: true,
              items: [
                'swan-api/rejections/using-rejections',
              ],
            },
            {
              type: 'category',
              label: 'Webhooks',
              link: {type: 'doc', id: 'swan-api/webhooks/concepts'},
              collapsible: true,
              collapsed: true,
              items: [
                'swan-api/webhooks/using-webhooks',
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'PARTNERSHIP WITH SWAN',
      collapsible: true,
      collapsed: true,
      items: [
        'partnership/intro',
        'partnership/rules',
        {
          type: 'category',
          label: 'Guide by country',
          collapsible: true,
          collapsed: true,
          items: [
            'partnership/country-guides/france',
            'partnership/country-guides/spain',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'GUIDES',
      collapsible: true,
      collapsed: true,
      items: [
        'guides/starter-guides/intro',
        'guides/accounts/concepts',
        {
          type: "category",
          label: "Payments",
          link: {type: 'doc', id: 'guides/payments/concepts'},
          collapsed: true,
          items: [
            {
              type: "category",
              label: "Credit transfers",
              link: {type: 'doc', id: 'guides/payments/credit-transfers/concepts'},
              collapsed: true,
              items: [
                'guides/payments/credit-transfers/guide-receive-transfers',
                'guides/payments/credit-transfers/guide-refund-transfers',
                'guides/payments/credit-transfers/guide-set-up-recurring-transfers',
                'guides/payments/credit-transfers/guide-transfer-money',
              ],
            },
            'guides/payments/direct-debit/concepts',
            'guides/payments/card-payments/concepts',
            'guides/payments/checks/concepts',
            'guides/payments/open-banking/concepts',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'RESOURCES',
      collapsible: true,
      collapsed: true,
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