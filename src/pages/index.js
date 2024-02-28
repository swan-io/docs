import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import CodeBlock from "@theme/CodeBlock";
import Layout from "@theme/Layout";
import clsx from "clsx";
import React from "react";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className={styles.heroCenter}>
        <h1 className={styles.heroTitle}>
          <img
            alt={"Swan Docs"}
            src="/img/logo-swan.svg"
            className={styles.heroTitleLogo}
          />
        </h1>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      description={`Discover the features that power Swan. Unlock your integration’s full potential with Swan’s comprehensive documentation.`}
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
