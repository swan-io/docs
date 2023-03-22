import { createGraphiQLFetcher } from "@graphiql/toolkit";
import { GraphiQL } from "graphiql";
import BrowserOnly from "@docusaurus/BrowserOnly";
import * as React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import "graphiql/graphiql.css";
import { useExplorerPlugin } from "@graphiql/plugin-explorer";

const fetcher = createGraphiQLFetcher({
  url: "https://dashboard.swan.local:8080/api/sandbox-partner",
});

const DEFAULT_QUERY = `query {
	__typename
	# this doesn't work yet
}`;

const Explorer = () => {
  const { siteConfig } = useDocusaurusContext();

  const [query, setQuery] = React.useState(DEFAULT_QUERY);
  const explorerPlugin = useExplorerPlugin({
    query,
    onEdit: setQuery,
  });

  return (
    <Layout
      title={`Swan Docs: ${siteConfig.tagline}`}
      description="GraphQL Explorer"
    >
      <BrowserOnly fallback={<div>Loading...</div>}>
        {() => (
          <GraphiQL
            fetcher={fetcher}
            query={query}
            onEditQuery={setQuery}
            plugins={[explorerPlugin]}
          />
        )}
      </BrowserOnly>
    </Layout>
  );
};

export default Explorer;
