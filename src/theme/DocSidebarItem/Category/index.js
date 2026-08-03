import React from "react";
import Category from "@theme-original/DocSidebarItem/Category";
import { useHistory, useLocation } from "@docusaurus/router";
import { DESCRIPTIONS } from "@site/src/components/ContentTypeIcon";

// Add a native hover tooltip to the typed top sections (Concepts / Guides /
// Reference). The original Category spreads unknown props onto its label <Link>,
// so passing `title` lands on the section header link only (not child items).
const CLASS_TO_TYPE = {
  "ia-type-concept": "Concept",
  "ia-type-guide": "Guide",
  "ia-type-ref": "Ref",
};

const stripSlash = (path) => path.replace(/\/+$/, "") || "/";

export default function CategoryWrapper(props) {
  const history = useHistory();
  const location = useLocation();
  const classes = ((props.item && props.item.className) || "").split(/\s+/);
  const match = Object.keys(CLASS_TO_TYPE).find((c) => classes.includes(c));
  const tip = match ? DESCRIPTIONS[CLASS_TO_TYPE[match]] : undefined;

  // DOC-1834 — categories without an index page carry the route of the index
  // that holds their context (customProps.iaIndexTarget, stamped by
  // ia-sidebar-index-targets.js). Navigate there on click while letting the
  // original handler run and fold/unfold the category. Capture phase, so the
  // navigation isn't affected by the original's preventDefault; like the tip,
  // the prop spreads onto this category's label <Link> only.
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

  return <Category {...props} {...redirect} {...(tip ? { "data-ia-tip": tip } : {})} />;
}
