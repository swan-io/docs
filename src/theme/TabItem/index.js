import React from 'react';
import TabItem from '@theme-original/TabItem';

// Thin wrap of the stock TabItem that lets authors give a tab panel a stable,
// server-rendered anchor id — e.g. <TabItem value="close" label="⚠️ Close match"
// id="vop-close">. This makes headingless tabs addressable (link to
// `page#vop-close`) and crawler-visible. TabAnchorFix reads the id, opens the
// owning tab, and scrolls.
//
// The id is injected as the panel's first child (not a wrapping element) so it
// lives INSIDE the [role="tabpanel"] — TabAnchorFix locates the panel via
// target.closest('[role="tabpanel"]'), which only walks ancestors. All other
// props pass through unchanged, so we inherit stock TabItem behavior on upgrade.
export default function TabItemWrapper(props) {
  const { id, children, ...rest } = props;
  return (
    <TabItem {...rest}>
      {id ? <span id={id} className="tab-anchor" aria-hidden="true" /> : null}
      {children}
    </TabItem>
  );
}
