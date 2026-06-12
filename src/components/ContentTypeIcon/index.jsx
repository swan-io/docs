import React from 'react';

// Content-type marker icon (lightbulb / compass / card index). One source of truth:
// the SVGs live in static/img/type-*.svg and are recolored via CSS mask + currentColor,
// so the same asset powers this component AND the sidebar ::before icons.
const LABELS = { Concept: 'Concept', Guide: 'Guide', Ref: 'Reference' };

export default function ContentTypeIcon({ type, className }) {
  if (!type || !LABELS[type]) return null;
  const mod = type.toLowerCase(); // concept | guide | ref
  return (
    <span
      className={['ia-type-icon', `ia-type-icon--${mod}`, className].filter(Boolean).join(' ')}
      role="img"
      aria-label={LABELS[type]}
    />
  );
}
