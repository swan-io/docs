import React from "react";
import OriginalContent from "@theme-original/DocItem/Content";
import { useDoc } from "@docusaurus/plugin-content-docs/client";
import Audience from "@site/src/components/rail/Audience";
import Counterpart from "@site/src/components/rail/Counterpart";
import Related from "@site/src/components/rail/Related";

// Hand-written wrapper (not swizzled). Renders the mobile chrome around the doc
// content for opted-in pages: a compact strip (audience + counterpart) before the
// content, and the Related block after it. Both are hidden >= 997px (the desktop
// rail owns that range). Pages with `rail: false`, or no rail frontmatter, fall
// through to the original component bare — zero added DOM.
export default function ContentWrapper(props) {
  const { frontMatter, metadata } = useDoc();
  const hasCustom = frontMatter.audience || frontMatter.counterpart || frontMatter.related;

  if (frontMatter.rail === false || !hasCustom) {
    return <OriginalContent {...props} />;
  }

  const sourcePage = metadata.permalink || metadata.unversionedId || metadata.id;
  return (
    <>
      {frontMatter.audience && (
        <div className="ia-rail-strip">
          <Audience value={frontMatter.audience} sourcePage={sourcePage} />
        </div>
      )}
      <OriginalContent {...props} />
      {(frontMatter.counterpart || frontMatter.related) && (
        <div className="ia-rail-end">
          <Counterpart
            route={frontMatter.counterpart}
            label={frontMatter.counterpart_label}
            sourcePage={sourcePage}
          />
          <Related routes={frontMatter.related} sourcePage={sourcePage} />
        </div>
      )}
    </>
  );
}
