import React from 'react';

// Marker for related links that point OUTSIDE the Diátaxis structure (cross-product,
// dev-tools, get-started). Same mechanism as ContentTypeIcon — a .ia-type-icon glyph
// recolored via CSS mask + currentColor, with a [data-ia-tip] tooltip — so these chips
// read consistently with the Concept/Guide/Reference icons. Glyphs: package / wrench / rocket.
const LABELS = { product: 'Product', 'dev-tools': 'Dev tools', 'get-started': 'Get started' };
const DESCRIPTIONS = {
  product: 'Another Swan product.',
  'dev-tools': 'Developer tools and API reference.',
  'get-started': 'Getting started and partner setup.',
};

export default function AreaIcon({ kind, className }) {
  if (!kind || !LABELS[kind]) return null;
  return (
    <span
      className={['ia-type-icon', `ia-type-icon--area-${kind}`, className].filter(Boolean).join(' ')}
      role="img"
      aria-label={LABELS[kind]}
      data-ia-tip={DESCRIPTIONS[kind]}
    />
  );
}
