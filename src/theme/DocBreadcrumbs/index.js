import React from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
import {useSidebarBreadcrumbs} from '@docusaurus/plugin-content-docs/client';
import {useHomePageRoute} from '@docusaurus/theme-common/internal';
import {useLocation} from '@docusaurus/router';
import Link from '@docusaurus/Link';
import {translate} from '@docusaurus/Translate';
import HomeBreadcrumbItem from '@theme/DocBreadcrumbs/Items/Home';
import {typeChip, areaKind} from '@site/src/components/rail/resolve';
import ContentTypeIcon from '@site/src/components/ContentTypeIcon';
import AreaIcon from '@site/src/components/AreaIcon';
import styles from './styles.module.css';

// DOC-1814: a content-type (Concept/Guide/Reference) or area (product/build/
// get-started) icon before each crumb — same primitives as the rail and the
// prev/next page cards, so breadcrumbs read in the same visual language.
function CrumbIcon({route}) {
  if (!route) return null;
  const chip = typeChip(route);
  return chip ? (
    <ContentTypeIcon type={chip} className="ia-bc-typeicon" />
  ) : (
    <AreaIcon kind={areaKind(route)} className="ia-bc-typeicon" />
  );
}

// Identity of the icon a route would render — used to show the icon only on the
// topmost crumb that introduces a content type, not on each nested same-type crumb.
function typeKey(route) {
  if (!route) return null;
  return typeChip(route) || `area:${areaKind(route)}`;
}

function BreadcrumbsItemLink({children, href, isLast}) {
  const className = 'breadcrumbs__link';
  if (isLast) {
    return (
      <span className={className} itemProp="name">
        {children}
      </span>
    );
  }
  return href ? (
    <Link className={className} href={href} itemProp="item">
      <span itemProp="name">{children}</span>
    </Link>
  ) : (
    <span className={className}>{children}</span>
  );
}
function BreadcrumbsItem({children, active, index, addMicrodata}) {
  return (
    <li
      {...(addMicrodata && {
        itemScope: true,
        itemProp: 'itemListElement',
        itemType: 'https://schema.org/ListItem',
      })}
      className={clsx('breadcrumbs__item', {
        'breadcrumbs__item--active': active,
      })}>
      {children}
      <meta itemProp="position" content={String(index + 1)} />
    </li>
  );
}
export default function DocBreadcrumbs() {
  const breadcrumbs = useSidebarBreadcrumbs();
  const homePageRoute = useHomePageRoute();
  const {pathname} = useLocation();
  if (!breadcrumbs) {
    return null;
  }
  // Show the type icon only on the topmost crumb that introduces a content type;
  // suppress it on nested crumbs of the same type (a 4-deep Concept trail shows
  // the concept icon once, on the section crumb).
  let prevKey = null;
  const rows = breadcrumbs.map((item, idx) => {
    const isLast = idx === breadcrumbs.length - 1;
    const href =
      item.type === 'category' && item.linkUnlisted ? undefined : item.href;
    // Route to derive the type icon from: the crumb's own href, or the current
    // page path for the active (last, link-less) crumb.
    const route = href || (isLast ? pathname : undefined);
    const key = typeKey(route);
    const showIcon = !!key && key !== prevKey;
    if (key) prevKey = key;
    return {item, idx, isLast, href, route, showIcon};
  });
  // Immediate parent (one level up) for the right-floating up button; skip if the
  // page is top-level or the parent is a link-less category.
  const parent = breadcrumbs.length >= 2 ? breadcrumbs[breadcrumbs.length - 2] : null;
  const upHref =
    parent && !(parent.type === 'category' && parent.linkUnlisted)
      ? parent.href
      : undefined;
  return (
    <nav
      className={clsx(
        ThemeClassNames.docs.docBreadcrumbs,
        styles.breadcrumbsContainer,
      )}
      aria-label={translate({
        id: 'theme.docs.breadcrumbs.navAriaLabel',
        message: 'Breadcrumbs',
        description: 'The ARIA label for the breadcrumbs',
      })}>
      <ul
        className="breadcrumbs"
        itemScope
        itemType="https://schema.org/BreadcrumbList">
        {homePageRoute && <HomeBreadcrumbItem />}
        {rows.map(({item, idx, isLast, href, route, showIcon}) => (
          <BreadcrumbsItem
            key={idx}
            active={isLast}
            index={idx}
            addMicrodata={!!href}>
            <BreadcrumbsItemLink href={href} isLast={isLast}>
              {showIcon && <CrumbIcon route={route} />}
              {item.label}
            </BreadcrumbsItemLink>
          </BreadcrumbsItem>
        ))}
      </ul>
      {upHref && (
        <Link
          to={upHref}
          className="ia-bc-up"
          aria-label={`Up to the parent page: ${parent.label}`}
          data-ia-tip={`Up to the parent page: ${parent.label}`}>
          ↑
        </Link>
      )}
    </nav>
  );
}
