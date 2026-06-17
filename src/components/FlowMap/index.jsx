import React from 'react';
import Link from '@docusaurus/Link';
import ContentTypeIcon from '../ContentTypeIcon';

/**
 * FlowMap — a single data-driven module for navigation hubs AND concept diagrams.
 * Authored inline as a ```flowmap fenced block (JSON spec), like ```mermaid.
 * Modes: lanes (lifecycle phases) · pathway (ordered sequence) · graph (chain/lifecycle/spokes)
 *        · tracks (side-by-side audience reading paths) · grid.
 */

const AUDIENCE = { dev: 'Developers', ops: 'Operators' };

function AudienceChips({ audience }) {
  if (!audience) return null;
  const codes = Array.isArray(audience) ? audience : [audience];
  return codes
    .filter((c) => AUDIENCE[c])
    .map((c) => (
      <span key={c} className={`ia-audience-tag ia-audience-tag--${c} flowmap__chip`}>
        {AUDIENCE[c]}
      </span>
    ));
}

function NodeBody({ title, desc }) {
  return (
    <>
      <span className="flowmap__t">{title}</span>
      {desc ? <span className="flowmap__d">{desc}</span> : null}
    </>
  );
}

function Card({ item, className }) {
  const { title, to, desc, audience } = item;
  const body = (
    <>
      <NodeBody title={title} desc={desc} />
      <AudienceChips audience={audience} />
    </>
  );
  return to ? (
    <Link className={className} to={to}>{body}</Link>
  ) : (
    <div className={className}>{body}</div>
  );
}

function Grid({ items = [] }) {
  return (
    <div className="flowmap flowmap--grid">
      {items.map((it, i) => (
        <Card key={i} item={it} className="flowmap-gcard" />
      ))}
    </div>
  );
}

function Lanes({ lanes = [] }) {
  return (
    <div className="flowmap flowmap--lanes">
      {lanes.map((lane, i) => (
        <div className="flowmap-lane" key={i}>
          <div className="flowmap-lane__h">
            <span className="flowmap-lane__n">{i + 1}</span>
            {lane.label}
          </div>
          {(lane.items || []).map((it, j) => (
            <Card key={j} item={it} className="flowmap-lcard" />
          ))}
        </div>
      ))}
    </div>
  );
}

function Pathway({ items = [] }) {
  return (
    <div className="flowmap flowmap--pathway">
      {items.map((it, i) => (
        <div className="flowmap-prow" key={i}>
          <span className="flowmap-prow__dot">{i + 1}</span>
          <div className="flowmap-prow__body">
            <span className="flowmap-prow__head">
              {it.type ? <ContentTypeIcon type={it.type} className="flowmap-prow__type" /> : null}
              {it.to ? (
                <Link to={it.to} className="flowmap-prow__t">{it.title}</Link>
              ) : (
                <span className="flowmap-prow__t">{it.title}</span>
              )}
              <AudienceChips audience={it.audience} />
            </span>
            {it.desc ? <div className="flowmap-prow__d">{it.desc}</div> : null}
          </div>
        </div>
      ))}
    </div>
  );
}

// tracks — parallel reading paths shown side by side for comparison (e.g. per
// audience). Each track is a colored column card containing a Pathway: the same
// numbered rail + type-tagged, clickable steps, just laid out for comparison.
function Tracks({ tracks = [] }) {
  return (
    <div className="ia-path-columns flowmap flowmap--tracks">
      {tracks.map((track, i) => (
        <div className="ia-path-column" key={i}>
          <div className="ia-path-column__head">
            {track.audience ? (
              <span className={`ia-audience-tag ia-audience-tag--${track.audience}`}>{track.label}</span>
            ) : (
              <span className="ia-step__name">{track.label}</span>
            )}
            {track.sub ? <span className="ia-path-column__sub">{track.sub}</span> : null}
          </div>
          <Pathway items={track.items} />
        </div>
      ))}
    </div>
  );
}

function arrowBetween(a, b, edges) {
  const e = edges.find(
    (x) => (x.from === a.id && x.to === b.id) || (x.from === b.id && x.to === a.id),
  );
  return e && e.dir === 'both' ? '⇄' : '→';
}

function Graph({ layout = 'chain', nodes = [], edges = [] }) {
  if (layout === 'spokes') {
    const [root, ...rest] = nodes;
    return (
      <div className="flowmap flowmap--graph flowmap--spokes">
        {root ? <Card item={root} className="flowmap-node flowmap-node--root" /> : null}
        <span className="flowmap-arrow" aria-hidden="true">→</span>
        <div className="flowmap-spokegrid">
          {rest.map((n, i) => (
            <Card key={n.id || i} item={n} className="flowmap-node" />
          ))}
        </div>
      </div>
    );
  }
  // chain / lifecycle: nodes in order with connectors
  return (
    <div className="flowmap flowmap--graph flowmap--chain">
      {nodes.map((n, i) => (
        <React.Fragment key={n.id || i}>
          <Card item={n} className="flowmap-node" />
          {i < nodes.length - 1 ? (
            <span className="flowmap-arrow" aria-hidden="true">
              {arrowBetween(n, nodes[i + 1], edges)}
            </span>
          ) : null}
        </React.Fragment>
      ))}
    </div>
  );
}

export default function FlowMap({ spec, children }) {
  const raw = spec != null ? spec : children;
  let data;
  if (typeof raw === 'string') {
    try {
      data = JSON.parse(raw);
    } catch (e) {
      return (
        <div className="flowmap flowmap--error">
          <strong>FlowMap:</strong> invalid JSON spec — {e.message}
        </div>
      );
    }
  } else {
    data = raw;
  }

  if (!data || typeof data !== 'object') {
    return <div className="flowmap flowmap--error"><strong>FlowMap:</strong> empty spec</div>;
  }

  switch (data.mode) {
    case 'grid':
      return <Grid {...data} />;
    case 'lanes':
      return <Lanes {...data} />;
    case 'pathway':
      return <Pathway {...data} />;
    case 'tracks':
      return <Tracks {...data} />;
    case 'graph':
      return <Graph {...data} />;
    default:
      return (
        <div className="flowmap flowmap--error">
          <strong>FlowMap:</strong> unknown mode "{String(data.mode)}"
        </div>
      );
  }
}
