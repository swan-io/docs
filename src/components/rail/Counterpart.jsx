import React from "react";
import Link from "@docusaurus/Link";
import { useRouteMap, resolveRoute, audienceText, failOrWarn } from "./resolve";

export default function Counterpart({ route, label, sourcePage }) {
  if (!route) return null;
  const map = useRouteMap();
  const resolved = resolveRoute(map, route);

  if (!resolved) {
    failOrWarn(sourcePage, "counterpart", route, "does not resolve to a known route");
    return (
      <div className="ia-rail__block ia-rail__counterpart">
        <p className="ia-rail__label">Also available</p>
        <Link to={route} className="ia-rail__card">
          <span className="ia-rail__card-title">{route}</span>
        </Link>
      </div>
    );
  }

  const text = label || resolved.meta.title || route;
  const sub = audienceText(resolved.meta.audience);
  return (
    <div className="ia-rail__block ia-rail__counterpart">
      <p className="ia-rail__label">Also available</p>
      <Link to={route} className="ia-rail__card">
        <span className="ia-rail__card-title">{text}</span>
        {sub && <span className="ia-rail__card-sub">{sub}</span>}
      </Link>
    </div>
  );
}
