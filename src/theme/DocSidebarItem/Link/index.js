import React from "react";
import Link from "@theme-original/DocSidebarItem/Link";

// DOC-1834 — audience badge on single-audience pages.
// ia-sidebar-audience.js stamps ia-aud-* classNames; ia-shell.css renders the
// icon pill AND the hover tooltip (hosted on the <li> — anchor-hosted bubbles
// are clipped by .menu__link's overflow:hidden). This wrapper only gives the
// anchor an aria-label so screen readers hear what sighted users hover; the
// original Link spreads unknown props onto its anchor. Sentences must match
// the CSS tooltip content in ia-shell.css.
const TIPS = {
  "ia-aud-dev": "This article is meant for developers.",
  "ia-aud-ops": "This article is meant for Dashboard operators.",
};

export default function LinkWrapper(props) {
  const classes = ((props.item && props.item.className) || "").split(/\s+/);
  const tip = TIPS[classes.find((c) => TIPS[c])];
  const extra = tip ? { "aria-label": `${props.item.label}. ${tip}` } : {};
  return <Link {...props} {...extra} />;
}
