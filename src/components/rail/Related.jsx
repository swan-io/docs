import React from "react";
import Link from "@docusaurus/Link";
import { useRouteMap, resolveRoute, typeChip, areaLabel, failOrWarn } from "./resolve";
import ContentTypeIcon from "@site/src/components/ContentTypeIcon";

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
          const label = chip || areaLabel(route);
          if (!resolved) {
            failOrWarn(sourcePage, "related", route, "does not resolve to a known route");
            return (
              <li key={route}>
                {label && (
                  <span className="ia-rail__type">
                    {chip && <ContentTypeIcon type={chip} />}
                    {label}
                  </span>
                )}
                <Link to={route} className="ia-rail__link">
                  {route}
                </Link>
              </li>
            );
          }
          return (
            <li key={route}>
              {label && <span className="ia-rail__type">{label}</span>}
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
