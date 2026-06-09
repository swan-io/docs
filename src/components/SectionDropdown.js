import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import { useLocation } from "@docusaurus/router";

export default function SectionDropdown({ to, label, items = [], position, mobile }) {
  if (mobile) {
    return (
      <li className="menu__list-item">
        <Link className="menu__link" to={to}>{label}</Link>
        <ul className="menu__list">
          {items.map((item, i) => (
            <li className="menu__list-item" key={i}>
              <Link className="menu__link" {...(item.href ? { href: item.href } : { to: item.to })}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </li>
    );
  }
  const { pathname } = useLocation();
  const base = to.replace(/\/$/, "");
  const active = pathname === to || pathname.startsWith(base + "/");
  return (
    <div className={clsx("navbar__item", "dropdown", "dropdown--hoverable", "dropdown--nocaret", position === "right" && "dropdown--right")}>
      <Link className={clsx("navbar__link", active && "navbar__link--active")} to={to}>{label}</Link>
      <ul className="dropdown__menu">
        {items.map((item, i) => (
          <li key={i}>
            <Link className="dropdown__link" {...(item.href ? { href: item.href } : { to: item.to })}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
