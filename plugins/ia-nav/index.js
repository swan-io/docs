const sidebars = require("../../sidebars.ia.js");

// Derive the top-nav dropdown tree from sidebars.ia.js — the single source of
// truth — so the nav never needs a second hand-maintained index. Mirrors the
// sidebar's type-first shape (Concepts / Guides / Reference → domains → pages).
// Exposed via setGlobalData and consumed by src/components/SectionDropdown.js.
// Same lifecycle pattern as plugins/ia-rail-meta. Zero new dependencies.

function idToRoute(id) {
  let r = "/" + String(id);
  r = r.replace(/\/index$/, "");
  return r.length > 1 ? r.replace(/\/+$/, "") : r;
}

function firstDocRoute(node) {
  for (const it of node.items || []) {
    if (it.type === "doc") return idToRoute(it.id);
    if (it.type === "category") {
      const r = firstDocRoute(it);
      if (r) return r;
    }
  }
  return null;
}

function deriveItem(it) {
  if (it.type === "doc") return { label: it.label, to: idToRoute(it.id) };
  if (it.type === "category") {
    const hub = !!(it.link && it.link.id);
    return {
      label: it.label,
      to: hub ? idToRoute(it.link.id) : firstDocRoute(it),
      hub,
      children: (it.items || []).map(deriveItem).filter(Boolean),
    };
  }
  return null; // html separators etc.
}

function deriveSidebar(sb) {
  const overview = sb.find((x) => x.type === "doc");
  const root = overview ? idToRoute(overview.id) : null;
  // Top-level categories are the content-type groups (Concepts/Guides/Reference,
  // or Tools/Using the API/GraphQL for dev-tools).
  const groups = sb
    .filter((x) => x.type === "category")
    .map(deriveItem)
    .filter(Boolean);
  return { root, groups };
}

module.exports = function iaNav() {
  return {
    name: "ia-nav",
    async loadContent() {
      const nav = {};
      for (const sb of Object.values(sidebars)) {
        if (!Array.isArray(sb)) continue;
        const { root, groups } = deriveSidebar(sb);
        if (root && groups.length) nav[root] = groups;
      }
      return nav;
    },
    async contentLoaded({ content, actions }) {
      actions.setGlobalData({ nav: content });
      console.log(`[ia-nav] ${Object.keys(content).length} product nav trees derived`);
    },
  };
};
