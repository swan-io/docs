import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import { usePluginData } from "@docusaurus/useGlobalData";

// DOC-1814 — "Developers" right-cluster dropdown (Treatment C).
// Two columns: Documentation (the Build hierarchy, derived from sidebars.ia.js
// via the ia-nav plugin — its groups open hover flyouts exactly like the
// product nav) + Tools & references (the live tools that used to be standalone
// top-nav buttons: API Reference, Explorer, Changelog, Preview).

const norm = (s) => {
  let r = String(s || "").trim();
  if (!r.startsWith("/")) r = "/" + r;
  return r.length > 1 ? r.replace(/\/+$/, "") : r;
};

const isExternal = (u) => /^https?:\/\//.test(u || "");
const linkProps = (n) => {
  const href = n.href || (isExternal(n.to) ? n.to : null);
  if (href) {
    return { href, ...(isExternal(href) ? { target: "_blank", rel: "noopener noreferrer" } : {}) };
  }
  return { to: n.to };
};

const svg = (children) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    {children}
  </svg>
);

// pre-picked icons, one per resource / doc group
const ICONS = {
  apiref: svg(<><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></>),
  explorer: svg(<><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></>),
  changelog: svg(<><path d="M3 12a9 9 0 1 0 3-6.7L3 8" /><path d="M3 3v5h5" /><path d="M12 7v5l3 2" /></>),
  preview: svg(<><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></>),
  tools: svg(<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />),
  usingapi: svg(<><circle cx="7.5" cy="15.5" r="5.5" /><path d="m21 2-9.6 9.6" /><path d="m15.5 7.5 3 3L22 7l-3-3" /></>),
  graphql: svg(<><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" /></>),
  doc: svg(<><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></>),
};

// map a Documentation group label to one of the icons above
const groupIcon = (label) => {
  const k = String(label).toLowerCase();
  if (k.includes("tool")) return "tools";
  if (k.includes("using")) return "usingapi";
  if (k.includes("graphql")) return "graphql";
  return "doc";
};

export default function DevelopersDropdown({ to = "/build", label = "Developer resources", resources = [], position, mobile }) {
  const { nav = {} } = usePluginData("ia-nav") || {};
  const groups = nav[norm(to)] || [];
  // master-detail: the hovered Documentation group's pages fill the 3rd column,
  // defaulting to the first group (Tools).
  const [active, setActive] = React.useState(0);

  if (mobile) {
    return (
      <li className="menu__list-item">
        <Link className="menu__link" to={to}>{label}</Link>
        <ul className="menu__list">
          {resources.map((r, i) => (
            <li className="menu__list-item" key={`r${i}`}>
              <Link className="menu__link" {...linkProps(r)}>{r.label}</Link>
            </li>
          ))}
          {groups.map((g, i) => (
            <li className="menu__list-item" key={`g${i}`}>
              <Link className="menu__link" to={g.to}>{g.label}</Link>
              {g.children && g.children.length > 0 && (
                <ul className="menu__list">
                  {g.children.map((c, j) => (
                    <li className="menu__list-item" key={j}>
                      <Link className="menu__link" {...linkProps(c)}>{c.label}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </li>
    );
  }

  const activeGroup = groups[active] || groups[0];
  return (
    <div className={clsx("navbar__item", "dropdown", "dropdown--hoverable", "dropdown--nocaret", position === "right" && "dropdown--right")}>
      <Link className="navbar__link dev-trigger" to={to}>
        <span className="dev-trigger__lead" aria-hidden="true">{ICONS.explorer}</span>
        {label}
        <span className="dev-trigger__caret" aria-hidden="true">▾</span>
      </Link>
      <div className="dropdown__menu dev-panel">
        {/* col 1 — Tools & references (the ex-top-nav buttons) */}
        <div className="dev-col">
          <div className="dev-col__title">Tools &amp; references</div>
          <ul className="dev-list">
            {resources.map((r, i) => (
              <li key={i}>
                <Link className="dev-row" {...linkProps(r)}>
                  <span className="dev-ic" aria-hidden="true">{ICONS[r.icon] || ICONS.doc}</span>
                  <span className="dev-row__text">
                    {r.label}
                    {r.desc && <small className="dev-row__desc">{r.desc}</small>}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* col 2 — Documentation groups; hovering one fills the detail column */}
        <div className="dev-col">
          <div className="dev-col__title">Documentation</div>
          <ul className="dev-list">
            {groups.map((g, i) => {
              const exp = g.children && g.children.length > 0;
              return (
                <li key={i}>
                  <Link
                    className={clsx("dev-row", i === active && "dev-row--active")}
                    to={g.to}
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                  >
                    <span className="dev-ic" aria-hidden="true">{ICONS[groupIcon(g.label)]}</span>
                    <span className="dev-row__text">{g.label}</span>
                    {exp && <span className="ia-flyout__caret" aria-hidden="true">›</span>}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        {/* col 3 — pages of the hovered/active group */}
        <div className="dev-col dev-col--detail">
          <div className="dev-col__title">{activeGroup ? activeGroup.label : ""}</div>
          <ul className="dev-list">
            {(activeGroup && activeGroup.children ? activeGroup.children : []).map((c, j) => (
              <li key={j}>
                <Link className="dev-row dev-row--leaf" {...linkProps(c)}>
                  <span className="dev-row__text">{c.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
