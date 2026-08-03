/**
 * DOC-1834 — sidebar categories without their own index page.
 *
 * Clicking such a category still folds/unfolds it, but should also land the
 * reader on the index that carries the context: the category's own index when
 * it exists as a child item (e.g. Get started > Become a partner > Overview),
 * otherwise the nearest ancestor index (e.g. clicking Users > Guides > User
 * operations reads Guides). Navigating to the category's URL directly
 * (/users/guides/user-operations) redirects the same way.
 *
 * Consumers:
 *  - sidebars.ia.js → annotate() stamps customProps.iaIndexTarget, read by
 *    src/theme/DocSidebarItem/Category to navigate on click.
 *  - redirects.js → categoryRedirects() emits { from, to } pairs for the
 *    @docusaurus/plugin-client-redirects config.
 */

// Same id → route convention as plugins/ia-nav (docs routeBasePath "/",
// no slug overrides in the IA tree).
const idToRoute = (id) => {
  const r = "/" + String(id).replace(/\/index$/, "");
  return r.length > 1 ? r.replace(/\/+$/, "") : r;
};

// All doc ids reachable under a list of sidebar items (docs + category links).
const docIds = (items) =>
  (items || []).flatMap((item) =>
    item && item.type === "doc"
      ? [item.id]
      : item && item.type === "category"
        ? (item.link ? [item.link.id] : []).concat(docIds(item.items))
        : [],
  );

// Longest common directory of a list of doc ids ("" when they share none).
const commonDir = (ids) =>
  ids
    .map((id) => id.split("/").slice(0, -1))
    .reduce((a, b) => {
      let k = 0;
      while (k < a.length && k < b.length && a[k] === b[k]) k += 1;
      return a.slice(0, k);
    })
    .join("/");

// Walk every sidebar and, for each category without a `link`, resolve the
// index it should hand the reader to. `inheritedId` is the nearest ancestor
// index doc id (a linked category, an unlinked category's own index child, or
// the sidebar's root doc as a last resort).
const collect = (sidebars) => {
  const found = [];
  const walk = (items, inheritedId) => {
    for (const item of items || []) {
      if (!item || item.type !== "category") continue;
      const linkId = item.link && item.link.id;
      let nextInherited = linkId || inheritedId;
      if (!linkId) {
        const ids = docIds(item.items);
        if (ids.length > 0) {
          const dir = commonDir(ids);
          const ownIndexId = ids.includes(`${dir}/index`) ? `${dir}/index` : null;
          const targetId = ownIndexId || inheritedId;
          if (targetId) found.push({ item, dir, targetId, ownIndexId });
          nextInherited = ownIndexId || inheritedId;
        }
      }
      walk(item.items, nextInherited);
    }
  };
  for (const items of Object.values(sidebars)) {
    if (!Array.isArray(items)) continue;
    const rootDoc = items.find((item) => item && item.type === "doc");
    walk(items, rootDoc ? rootDoc.id : null);
  }
  return found;
};

// Stamp customProps.iaIndexTarget on every index-less category (in place).
const annotate = (sidebars) => {
  for (const { item, targetId } of collect(sidebars)) {
    item.customProps = { ...item.customProps, iaIndexTarget: idToRoute(targetId) };
  }
  return sidebars;
};

// Redirect pairs for categories whose directory has no index doc at all —
// their URL isn't a route, so direct navigation would 404 without these.
// Categories with an own index child (Overview pattern) already route.
const categoryRedirects = (sidebars) =>
  collect(sidebars)
    .filter(({ dir, targetId, ownIndexId }) => !ownIndexId && dir && `/${dir}` !== idToRoute(targetId))
    .map(({ dir, targetId }) => ({ from: `/${dir}`, to: idToRoute(targetId) }));

module.exports = { annotate, categoryRedirects, idToRoute };
