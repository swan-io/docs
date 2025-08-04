import React from 'react';
import './styles.css';

// Find and scroll to closest legend of given type
const scrollToClosest = (className) => {
  const legends = [...document.querySelectorAll(`.${className}`)];
  if (!legends.length) return;
  
  const closest = legends.length === 1 ? legends[0] : 
    legends.reduce((prev, curr) => 
      Math.abs(curr.getBoundingClientRect().top) < Math.abs(prev.getBoundingClientRect().top) ? curr : prev
    );
  
  closest.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

// Badge components
export const Req = () => (
  <span className="badge req" onClick={() => scrollToClosest('field-requirements-legend')} title="Required field">
    ● REQ
  </span>
);

export const Opt = () => (
  <span className="badge opt" onClick={() => scrollToClosest('field-requirements-legend')} title="Optional field">
    ○ OPT
  </span>
);

export const Cnd = () => (
  <span className="badge cnd" onClick={() => scrollToClosest('field-requirements-legend')} title="Conditional field">
    ◐ CND
  </span>
);

export const Supported = () => (
  <span className="badge sup" onClick={() => scrollToClosest('support-status-legend')} title="Supported feature">
    ✓
  </span>
);

export const Unsupported = () => (
  <span className="badge unsup" onClick={() => scrollToClosest('support-status-legend')} title="Unsupported feature">
    ✗
  </span>
);

export const No = () => (
  <span className="badge unsup no-click" title="No">
    ✗
  </span>
);

export const Yes = () => (
  <span className="badge sup no-click" title="Yes">
    ✓
  </span>
);

// Legends
export const FieldRequirementsLegend = () => (
  <div className="legend field-requirements-legend">
    <h4>Field Requirements Legend</h4>
    <div className="legend-item"><Req /> <strong>Required:</strong> Field must be completed</div>
    <div className="legend-item"><Cnd /> <strong>Conditional:</strong> Field is required only in specific situations</div>
    <div className="legend-item"><Opt /> <strong>Optional:</strong> Field can be left blank; may have a default value</div>
  </div>
);

export const SupportStatusLegend = () => (
  <div className="legend support-status-legend">
    <h4>Support Status Legend</h4>
    <div className="legend-item"><Supported /> <strong>Supported:</strong> Feature is fully available</div>
    <div className="legend-item"><Unsupported /> <strong>Unsupported:</strong> Feature is not available</div>
  </div>
);