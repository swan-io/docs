import React from "react";
import OriginalTOCDesktop from "@theme-original/DocItem/TOC/Desktop";
import { useDoc } from "@docusaurus/plugin-content-docs/client";
import Audience from "@site/src/components/rail/Audience";
import Counterpart from "@site/src/components/rail/Counterpart";
import Related from "@site/src/components/rail/Related";
import ContentTypeIcon from "@site/src/components/ContentTypeIcon";
import { typeChip } from "@site/src/components/rail/resolve";

// Hand-written wrapper (not swizzled — `yarn swizzle` is interactive). Renders the
// custom rail blocks around the original desktop TOC for pages that opt in. Pages
// with `rail: false`, or with no rail frontmatter at all, fall through to the
// original component bare — zero DOM difference.
export default function TOCDesktopWrapper(props) {
  const { frontMatter, metadata, toc, contentTitle } = useDoc();
  const hasCustom = frontMatter.audience || frontMatter.counterpart || frontMatter.related;

  if (frontMatter.rail === false || !hasCustom) {
    return <OriginalTOCDesktop {...props} />;
  }

  const sourcePage = metadata.permalink || metadata.unversionedId || metadata.id;
  const hasToc = Array.isArray(toc) && toc.length > 0;
  const pageTitle = contentTitle || metadata.title || frontMatter.title;
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="ia-rail">
      {(pageTitle || frontMatter.audience) && (
        <header className="ia-rail__head">
          {pageTitle && (
            <a href={metadata.permalink} className="ia-rail__title" onClick={scrollToTop}>
              <ContentTypeIcon type={typeChip(sourcePage)} className="ia-title-type" />
              {pageTitle}
            </a>
          )}
          <Audience value={frontMatter.audience} sourcePage={sourcePage} />
        </header>
      )}
      {hasToc ? (
        <div className="ia-rail__toc">
          <p className="ia-rail__label">On this page</p>
          <OriginalTOCDesktop {...props} />
        </div>
      ) : (
        <OriginalTOCDesktop {...props} />
      )}
      {(frontMatter.counterpart || frontMatter.related) && (
        <div className="ia-rail__group">
          <Counterpart
            route={frontMatter.counterpart}
            label={frontMatter.counterpart_label}
            sourcePage={sourcePage}
          />
          <Related routes={frontMatter.related} sourcePage={sourcePage} />
        </div>
      )}
    </div>
  );
}
