import React from "react";
import Link from "@docusaurus/Link";
import { useRouteMap, resolveRoute, typeChip, areaKind, failOrWarn } from "./resolve";
import ContentTypeIcon from "@site/src/components/ContentTypeIcon";
import AreaIcon from "@site/src/components/AreaIcon";

export default function Related({ routes, sourcePage }) {
  if (!routes || routes.length === 0) return null;
  const map = useRouteMap();

  return (
    <div className="ia-rail__block ia-rail__related">
      <p className="ia-rail__label">Related</p>
      <ul className="ia-rail__list">
        {routes.map((route) => {
          const resolved = resolveRoute(map, route);
          const chip = typeChip(route);
          // Diátaxis content types show their type icon; cross-area links show an
          // area icon (package / wrench / rocket). Either way: an icon + tooltip.
          const indicator = chip ? (
            <ContentTypeIcon type={chip} className="ia-rail__typeicon" />
          ) : (
            <AreaIcon kind={areaKind(route)} className="ia-rail__typeicon" />
          );
          if (!resolved) {
            failOrWarn(sourcePage, "related", route, "does not resolve to a known route");
            return (
              <li key={route}>
                {indicator}
                <Link to={route} className="ia-rail__link">
                  {route}
                </Link>
              </li>
            );
          }
          return (
            <li key={route}>
              {indicator}
              <Link to={route} className="ia-rail__link">
                {resolved.meta.title || route}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
