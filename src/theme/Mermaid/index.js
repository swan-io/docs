/**
 * Swizzle (eject) of @theme/Mermaid.
 *
 * Adds a zoom affordance to every Mermaid diagram: a hover-revealed "full screen"
 * button (top right) that opens the diagram in a full-viewport overlay so large
 * sequence/flow diagrams stay readable. Close with the button, Escape, or a
 * backdrop click. All styling lives in src/css/ia-shell.css (per the styles.css
 * guardrail); the render path mirrors the upstream component.
 */
import React, {useEffect, useRef, useState} from 'react';
import ErrorBoundary from '@docusaurus/ErrorBoundary';
import {ErrorBoundaryErrorMessageFallback} from '@docusaurus/theme-common';
import {
  MermaidContainerClassName,
  useMermaidRenderResult,
} from '@docusaurus/theme-mermaid/client';
import DOMPurify from 'dompurify';

function ExpandIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true">
      <path d="M8 3H5a2 2 0 0 0-2 2v3" />
      <path d="M16 3h3a2 2 0 0 1 2 2v3" />
      <path d="M8 21H5a2 2 0 0 1-2-2v-3" />
      <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

function MermaidRenderResult({renderResult}) {
  const ref = useRef(null);
  const overlayRef = useRef(null);
  const [expanded, setExpanded] = useState(false);

  // foreignObject is not in DOMPurify's SVG profile but Mermaid uses it to
  // render HTML labels (e.g. nodes containing <br/>). Adding it here lets
  // DOMPurify still sanitize the HTML inside it via its HTML rules.
  const safeSvg = DOMPurify.sanitize(renderResult.svg, {
    USE_PROFILES: { svg: true, svgFilters: true },
    ADD_TAGS: ['foreignObject'],
  });

  // Bind any interactive handlers mermaid attached (e.g. clickable nodes).
  useEffect(() => {
    renderResult.bindFunctions?.(ref.current);
  }, [renderResult]);

  // While expanded: rebind on the overlay copy, lock body scroll, close on Escape.
  useEffect(() => {
    if (!expanded) {
      return undefined;
    }
    if (overlayRef.current) {
      renderResult.bindFunctions?.(overlayRef.current);
    }
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setExpanded(false);
      }
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [expanded, renderResult]);

  return (
    <div className="ia-mermaid">
      <button
        type="button"
        className="ia-mermaid__expand"
        aria-label="View diagram full screen"
        data-ia-tip="Full screen"
        onClick={() => setExpanded(true)}>
        <ExpandIcon />
      </button>
      <div
        ref={ref}
        className={`${MermaidContainerClassName} ia-mermaid__diagram`}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{__html: safeSvg}}
      />
      {expanded && (
        <div
          className="ia-mermaid-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Diagram, full screen view"
          onClick={() => setExpanded(false)}>
          <button
            type="button"
            className="ia-mermaid-overlay__close"
            aria-label="Close full screen view"
            data-ia-tip="Close (Esc)"
            onClick={() => setExpanded(false)}>
            <CloseIcon />
          </button>
          <div
            ref={overlayRef}
            className={`${MermaidContainerClassName} ia-mermaid-overlay__stage`}
            onClick={(e) => e.stopPropagation()}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{__html: safeSvg}}
          />
        </div>
      )}
    </div>
  );
}

function MermaidRenderer({value}) {
  const renderResult = useMermaidRenderResult({text: value});
  if (renderResult === null) {
    return null;
  }
  return <MermaidRenderResult renderResult={renderResult} />;
}

export default function Mermaid(props) {
  return (
    <ErrorBoundary
      fallback={(params) => <ErrorBoundaryErrorMessageFallback {...params} />}>
      <MermaidRenderer {...props} />
    </ErrorBoundary>
  );
}
