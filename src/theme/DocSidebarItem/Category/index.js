import React from "react";
import Category from "@theme-original/DocSidebarItem/Category";
import { DESCRIPTIONS } from "@site/src/components/ContentTypeIcon";

// Add a native hover tooltip to the typed top sections (Concepts / Guides /
// Reference). The original Category spreads unknown props onto its label <Link>,
// so passing `title` lands on the section header link only (not child items).
const CLASS_TO_TYPE = {
  "ia-type-concept": "Concept",
  "ia-type-guide": "Guide",
  "ia-type-ref": "Ref",
};

export default function CategoryWrapper(props) {
  const classes = ((props.item && props.item.className) || "").split(/\s+/);
  const match = Object.keys(CLASS_TO_TYPE).find((c) => classes.includes(c));
  const tip = match ? DESCRIPTIONS[CLASS_TO_TYPE[match]] : undefined;
  return <Category {...props} {...(tip ? { "data-ia-tip": tip } : {})} />;
}
