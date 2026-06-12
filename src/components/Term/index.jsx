import React from 'react';
import Link from '@docusaurus/Link';
import { usePluginData } from '@docusaurus/useGlobalData';

/**
 * Opt-in glossary term. Renders inline text with a dotted underline and a
 * hover/focus tooltip (reusing the shared `[data-ia-tip]` infra), linking to
 * the term's Glossary anchor.
 *
 *   <Term id="account-holder" />             → "account holder" (glossary label)
 *   <Term id="account-holder">holders</Term> → custom display text
 *   <Term id="iban" link={false}>IBAN</Term> → tooltip only, no link
 *
 * `id` is a Glossary anchor (or one of the singular aliases the plugin
 * registers, e.g. `iban` → `ibans`). The term map is built at build time by
 * `plugins/ia-glossary-terms` from glossary.mdx and its definition partials —
 * there is no hand-maintained list here.
 *
 * Use at the first meaningful mention of a genuinely jargony term on a page —
 * not every occurrence, and not where the surrounding prose already links the
 * concept elsewhere.
 */
export default function Term({ id, children, link = true }) {
  const { terms = {} } = usePluginData('ia-glossary-terms') || {};
  const entry = terms[id];

  if (!entry) {
    // Unknown id: render the text plainly rather than breaking the build.
    return <span>{children || id}</span>;
  }
  const text = children || entry.label;
  const common = { className: 'ia-term', 'data-ia-tip': entry.tip };

  if (link === false || !entry.href) {
    return (
      <span {...common} tabIndex={0}>
        {text}
      </span>
    );
  }
  return (
    <Link {...common} to={entry.href}>
      {text}
    </Link>
  );
}
