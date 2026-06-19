import React from "react";
import Link from "@docusaurus/Link";
import { useRouteMap, resolveRoute, typeChip, areaKind, failOrWarn } from "./resolve";
import ContentTypeIcon, { LABELS as TYPE_LABELS } from "@site/src/components/ContentTypeIcon";
import AreaIcon, { LABELS as AREA_LABELS } from "@site/src/components/AreaIcon";

// Fixed display order for the type subheadings: Diátaxis content first, then
// cross-area pointers. Routes keep their authored order within each group.
const GROUP_ORDER = ["Concept", "Guide", "Ref", "area:product", "area:build", "area:get-started"];

// Map a route to its group: a Diátaxis content type when typeChip matches,
// otherwise an area bucket. Carries the plain-text label and the per-item icon
// so rendering stays identical to before (icon + tooltip next to each link).
function groupFor(route) {
  const chip = typeChip(route);
  if (chip) {
    return {
      key: chip,
      label: TYPE_LABELS[chip],
      indicator: <ContentTypeIcon type={chip} className="ia-rail__typeicon" />,
    };
  }
  const kind = areaKind(route);
  return {
    key: `area:${kind}`,
    label: AREA_LABELS[kind],
    indicator: <AreaIcon kind={kind} className="ia-rail__typeicon" />,
  };
}

export default function Related({ routes, sourcePage }) {
  if (!routes || routes.length === 0) return null;
  const map = useRouteMap();

  // Bucket routes by group, preserving authored order within each group.
  const buckets = new Map();
  routes.forEach((route) => {
    const group = groupFor(route);
    const resolved = resolveRoute(map, route);
    if (!resolved) {
      failOrWarn(sourcePage, "related", route, "does not resolve to a known route");
    }
    const item = {
      route,
      indicator: group.indicator,
      title: resolved ? resolved.meta.title || route : route,
    };
    if (!buckets.has(group.key)) {
      buckets.set(group.key, { key: group.key, label: group.label, items: [] });
    }
    buckets.get(group.key).items.push(item);
  });

  // Order groups: known groups by GROUP_ORDER, any unknown appended after.
  const groups = [...buckets.values()].sort((a, b) => {
    const ia = GROUP_ORDER.indexOf(a.key);
    const ib = GROUP_ORDER.indexOf(b.key);
    return (ia === -1 ? GROUP_ORDER.length : ia) - (ib === -1 ? GROUP_ORDER.length : ib);
  });

  return (
    <div className="ia-rail__block ia-rail__related">
      <p className="ia-rail__label">Related</p>
      {groups.map((g) => (
        <div className="ia-rail__related-group" key={g.key}>
          <p className="ia-rail__related-type">{g.label}</p>
          <ul className="ia-rail__list">
            {g.items.map((it) => (
              <li key={it.route}>
                {it.indicator}
                <Link to={it.route} className="ia-rail__link">
                  {it.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
