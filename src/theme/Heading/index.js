import React from "react";
import Heading from "@theme-original/Heading";
import { useLocation } from "@docusaurus/router";
import { typeChip } from "@site/src/components/rail/resolve";
import ContentTypeIcon from "@site/src/components/ContentTypeIcon";

// Prepend the content-type icon to the page title (h1) on Concept/Guide/Reference
// routes, so [Concept] Memberships vs [Guide] Memberships are unmistakable.
// All other headings pass through untouched.
export default function HeadingWrapper({ children, ...props }) {
  const { pathname } = useLocation();
  const type = props.as === "h1" ? typeChip(pathname) : null;
  return (
    <Heading {...props}>
      {type && <ContentTypeIcon type={type} className="ia-h1-type" />}
      {children}
    </Heading>
  );
}
