import React from "react";
import Category from "@theme-original/DocSidebarItem/Category";
import { useHistory, useLocation } from "@docusaurus/router";

const stripSlash = (path) => path.replace(/\/+$/, "") || "/";

// DOC-1834 — audience badge on single-audience sections (ia-aud-* stamped by
// ia-sidebar-audience.js). The pill AND the hover tooltip render in
// ia-shell.css, hosted on .menu__list-item-collapsible — anchor-hosted
// data-ia-tip bubbles are clipped by the label's overflow:hidden and get
// rotated by Infima's collapsed-state ::after transform (the typed-section
// tooltips moved to the same CSS mechanism for the same reason). This wrapper
// only adds an aria-label so screen readers hear what sighted users hover;
// the original Category spreads unknown props onto its label <Link>.
// Sentences must match the CSS tooltip content in ia-shell.css.
const AUDIENCE_TIPS = {
  "ia-aud-dev": "For developers",
  "ia-aud-ops": "For Dashboard operators",
};

export default function CategoryWrapper(props) {
  const history = useHistory();
  const location = useLocation();
  const classes = ((props.item && props.item.className) || "").split(/\s+/);
  const audienceTip = AUDIENCE_TIPS[classes.find((c) => AUDIENCE_TIPS[c])];
  const aria = audienceTip
    ? { "aria-label": `${props.item.label}. ${audienceTip}` }
    : {};

  // DOC-1834 — categories without an index page carry the route of the index
  // that holds their context (customProps.iaIndexTarget, stamped by
  // ia-sidebar-index-targets.js). Navigate there on click while letting the
  // original handler run and fold/unfold the category. Capture phase, so the
  // navigation isn't affected by the original's preventDefault; like the
  // aria-label, the prop spreads onto this category's label <Link> only.
  const indexTarget = !props.item.href && props.item.customProps?.iaIndexTarget;
  const redirect = indexTarget
    ? {
        onClickCapture: (e) => {
          if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
          if (stripSlash(location.pathname) !== stripSlash(indexTarget)) {
            history.push(indexTarget);
          }
        },
      }
    : {};

  return <Category {...props} {...redirect} {...aria} />;
}
