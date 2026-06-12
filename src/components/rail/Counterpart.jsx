import React from "react";
import Link from "@docusaurus/Link";
import { useRouteMap, resolveRoute, normalizeRoute, AUDIENCE_LABELS, failOrWarn } from "./resolve";

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
  // Parent-section context so a bare counterpart title ("Using the API") reads clearly.
  let context = null;
  if (!label) {
    const norm = normalizeRoute(route);
    const parentRoute = norm.replace(/\/[^/]+$/, "");
    if (parentRoute && parentRoute !== norm) {
      const parent = resolveRoute(map, parentRoute);
      const parentTitle = parent && parent.meta && parent.meta.title;
      if (parentTitle && parentTitle !== text) context = parentTitle;
    }
  }
  const audience = resolved.meta.audience;
  const values = audience ? (Array.isArray(audience) ? audience : [audience]) : [];
  return (
    <div className="ia-rail__block ia-rail__counterpart">
      <p className="ia-rail__label">Also available</p>
      <Link to={route} className="ia-rail__card">
        {context && <span className="ia-rail__card-context">{context}</span>}
        <span className="ia-rail__card-title">{text}</span>
        {values.length > 0 && (
          <span className="ia-rail__card-tags">
            {values.map((v) => (
              <span
                key={v}
                className={
                  AUDIENCE_LABELS[v]
                    ? `ia-audience-tag ia-audience-tag--${v}`
                    : "ia-audience-tag"
                }
              >
                {AUDIENCE_LABELS[v] || String(v)}
              </span>
            ))}
          </span>
        )}
      </Link>
    </div>
  );
}
