import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import { useLocation } from "@docusaurus/router";
import { usePluginData } from "@docusaurus/useGlobalData";

const norm = (s) => {
  let r = String(s || "").trim();
  if (!r.startsWith("/")) r = "/" + r;
  return r.length > 1 ? r.replace(/\/+$/, "") : r;
};

const linkProps = (n) => (n.href ? { href: n.href } : { to: n.to });

// Deepest flyout level. Level 1 = the panel under the product (content-type
// groups); level 2 = a group's domains/pages; level 3 = a hub-less domain's
// pages. Complete domains (with a hub) stop at level 2 — you land on the hub.
const MAX_LEVEL = 3;
const expandable = (node, level) =>
  node.children &&
  node.children.length > 0 &&
  level < MAX_LEVEL &&
  (level === 1 || !node.hub);

function DesktopNodes({ nodes, level }) {
  return (
    <ul className={level === 1 ? "dropdown__menu ia-nav-menu" : "ia-flyout__menu"}>
      {nodes.map((node, i) => {
        const exp = expandable(node, level);
        return (
          <li key={i} className={clsx(exp && "ia-flyout")}>
            <Link className={clsx("dropdown__link", exp && "ia-flyout__parent")} {...linkProps(node)}>
              {node.label}
              {exp && <span className="ia-flyout__caret" aria-hidden="true">›</span>}
            </Link>
            {exp && <DesktopNodes nodes={node.children} level={level + 1} />}
          </li>
        );
      })}
    </ul>
  );
}

function MobileNodes({ nodes, level }) {
  return (
    <ul className="menu__list">
      {nodes.map((node, i) => (
        <li className="menu__list-item" key={i}>
          <Link className="menu__link" {...linkProps(node)}>{node.label}</Link>
          {expandable(node, level) && <MobileNodes nodes={node.children} level={level + 1} />}
        </li>
      ))}
    </ul>
  );
}

export default function SectionDropdown({ to, label, items = [], position, mobile }) {
  // Auto-derived nested tree (from sidebars.ia.js via the ia-nav plugin) takes
  // precedence. Items passed in config render the legacy flat list (e.g. Build).
  const { nav = {} } = usePluginData("ia-nav") || {};
  const tree = items.length ? null : nav[norm(to)];

  if (mobile) {
    return (
      <li className="menu__list-item">
        <Link className="menu__link" to={to}>{label}</Link>
        {tree ? (
          <MobileNodes nodes={tree} level={1} />
        ) : (
          <ul className="menu__list">
            {items.map((item, i) => (
              <li className="menu__list-item" key={i}>
                <Link className="menu__link" {...linkProps(item)}>{item.label}</Link>
              </li>
            ))}
          </ul>
        )}
      </li>
    );
  }

  const { pathname } = useLocation();
  const base = to.replace(/\/$/, "");
  const active = pathname === to || pathname.startsWith(base + "/");
  return (
    <div className={clsx("navbar__item", "dropdown", "dropdown--hoverable", "dropdown--nocaret", position === "right" && "dropdown--right")}>
      <Link className={clsx("navbar__link", active && "navbar__link--active")} to={to}>{label}</Link>
      {tree ? (
        <DesktopNodes nodes={tree} level={1} />
      ) : (
        <ul className="dropdown__menu">
          {items.map((item, i) => (
            <li key={i}>
              <Link className="dropdown__link" {...linkProps(item)}>{item.label}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
