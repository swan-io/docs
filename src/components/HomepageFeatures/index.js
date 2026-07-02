import * as React from "react";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

void React;

// Section glyphs (Swan-purple, stroke style matching the navbar icons).
// Defined once and reused at card size (styles.svg) and row size (styles.rowSvg).
const ICONS = {
  getStarted: (
    <>
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </>
  ),
  accounts: (
    <>
      <line x1="3" x2="21" y1="22" y2="22" />
      <line x1="6" x2="6" y1="18" y2="11" />
      <line x1="10" x2="10" y1="18" y2="11" />
      <line x1="14" x2="14" y1="18" y2="11" />
      <line x1="18" x2="18" y1="18" y2="11" />
      <polygon points="12 2 20 7 4 7" />
    </>
  ),
  cards: (
    <>
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </>
  ),
  payments: (
    <>
      <path d="M8 3 4 7l4 4" />
      <path d="M4 7h16" />
      <path d="m16 21 4-4-4-4" />
      <path d="M20 17H4" />
    </>
  ),
  users: (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
  build: (
    <>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </>
  ),
};

function Icon({ className, children }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--ifm-color-primary)"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  );
}

// The four product sections, stacked as thin rows inside a single card slot.
const products = [
  {
    title: "Accounts",
    url: "/accounts",
    icon: ICONS.accounts,
    description: "Accounts, IBANs, memberships, funding",
  },
  {
    title: "Cards",
    url: "/cards",
    icon: ICONS.cards,
    description: "Virtual, physical, and digital debit cards",
  },
  {
    title: "Payments",
    url: "/payments",
    icon: ICONS.payments,
    description: "Transfers, direct debits, card payments",
  },
  {
    title: "Users",
    url: "/users",
    icon: ICONS.users,
    description: "Identification, consent, verification",
  },
];

const chevron = (
  <svg
    className={styles.rowArrow}
    width="18"
    height="18"
    fill="none"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.704 4.284a1 1 0 1 0-1.403 1.424L17.67 11H4a1 1 0 1 0 0 2h13.665L12.3 18.285a1 1 0 0 0 1.403 1.424l6.925-6.822a1.25 1.25 0 0 0 0-1.78l-6.925-6.823Z"
      fill="#212121"
    />
  </svg>
);

// A full-height card that links to a single destination (Get started, Build).
function Feature({ icon, url, title, description, index }) {
  return (
    <Link
      to={url}
      className={styles.featureBlock}
      style={{ animationDelay: `${200 + index * 100}ms` }}
    >
      <div className={styles.svgContainer}>
        <Icon className={styles.svg}>{icon}</Icon>
      </div>
      <div className="text--center padding-horiz--md" style={{ flexGrow: 1 }}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      {chevron}
    </Link>
  );
}

// A single card slot holding the four product sections as thin rows.
function ProductsCard({ index }) {
  return (
    <div
      className={styles.productsBlock}
      style={{ animationDelay: `${200 + index * 100}ms` }}
    >
      <div className={styles.productsHeading}>Products</div>
      <div className={styles.productList}>
        {products.map((p) => (
          <Link key={p.url} to={p.url} className={styles.productRow}>
            <span className={styles.rowIconWrap}>
              <Icon className={styles.rowSvg}>{p.icon}</Icon>
            </span>
            <span className={styles.productRowText}>
              <span className={styles.productRowTitle}>{p.title}</span>
              <span className={styles.productRowDesc}>{p.description}</span>
            </span>
            {chevron}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.featuresRows}>
          <Feature
            index={0}
            title="Get started"
            url="/get-started"
            icon={ICONS.getStarted}
            description="Evaluate the partnership, set up your integration, and follow segment-specific recipes."
          />
          <ProductsCard index={1} />
          <Feature
            index={2}
            title="Build with GraphQL"
            url="/build"
            icon={ICONS.build}
            description="Swan's API, the tools to test your integration, and the conventions for calling it."
          />
        </div>
      </div>
    </section>
  );
}
