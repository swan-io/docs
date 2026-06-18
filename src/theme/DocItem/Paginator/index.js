import React from "react";
import Link from "@docusaurus/Link";
import { useDoc } from "@docusaurus/theme-common/internal";
import { typeChip, areaKind } from "@site/src/components/rail/resolve";
import ContentTypeIcon from "@site/src/components/ContentTypeIcon";
import AreaIcon from "@site/src/components/AreaIcon";

// DOC-1814 page card — replaces the stock prev/next pagination with a compact
// card pair, auto-derived from sidebar order (metadata.previous/next). The arrow
// carries direction; the content-type icon (Concept/Guide/Reference) or area icon
// (product/build/get-started) carries the label — no redundant "Previous/Next" word
// (kept as aria-label for screen readers). Reuses the rail's type primitives.
function Indicator({ route }) {
  const chip = typeChip(route);
  return chip ? (
    <ContentTypeIcon type={chip} />
  ) : (
    <AreaIcon kind={areaKind(route)} />
  );
}

function PageCard({ item, dir }) {
  if (!item) return <span aria-hidden="true" />; // hold the grid cell so the sibling keeps its side
  return (
    <Link
      className={`ia-page-card${dir === "next" ? " ia-page-card--next" : ""}`}
      to={item.permalink}
      aria-label={dir === "prev" ? "Previous page" : "Next page"}
    >
      <span className="ia-page-card__arrow" aria-hidden="true">
        {dir === "prev" ? "←" : "→"}
      </span>
      <span className="ia-page-card__body">
        <span className="ia-page-card__title">
          <Indicator route={item.permalink} /> {item.title}
        </span>
      </span>
    </Link>
  );
}

export default function DocItemPaginator() {
  const { metadata } = useDoc();
  const { previous, next } = metadata;
  if (!previous && !next) return null;
  return (
    <nav className="ia-page-nav" aria-label="Docs pages">
      <PageCard item={previous} dir="prev" />
      <PageCard item={next} dir="next" />
    </nav>
  );
}
