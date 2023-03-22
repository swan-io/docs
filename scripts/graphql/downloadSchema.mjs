import { buildClientSchema, getIntrospectionQuery, printSchema } from "graphql";
import fs from "node:fs";
import path from "node:path";

const introspectionQuery = getIntrospectionQuery();

fetch(`https://api.swan.io/live-partner/graphql`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ query: introspectionQuery }),
})
  .then((res) => res.json())
  .then((res) =>
    buildClientSchema({ __schema: { ...res.data.__schema, directives: [] } })
  )
  .then((res) => printSchema(res))
  .then((schema) =>
    fs.writeFileSync(
      path.join(process.cwd(), "scripts/graphql/dist/partner-schema.gql"),
      schema,
      "utf-8"
    )
  )
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
