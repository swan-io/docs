import React from 'react';
import './styles.css';

// Field requirement badges
export const Req = () => (
  <span className="field-req-badge field-req-badge--required">● REQ</span>
);

export const Opt = () => (
  <span className="field-req-badge field-req-badge--optional">○ OPT</span>
);

export const Cnd = () => (
  <span className="field-req-badge field-req-badge--conditional">◐ CND</span>
);

// Support status badges
export const Supported = () => (
  <span className="field-req-badge field-req-badge--supported">SUPPORTED</span>
);

export const Unsupported = () => (
  <span className="field-req-badge field-req-badge--unsupported">UNSUPPORTED</span>
);

// Legend component for documentation
export const FieldRequirementsLegend = () => (
  <div className="field-req-legend">
    <h4>Field Requirements Legend</h4>
    <div className="field-req-legend-item">
      <Req /> <strong>Required:</strong> Field must be completed
    </div>
    <div className="field-req-legend-item">
      <Cnd /> <strong>Conditional:</strong> Field is required only in specific situations
    </div>
    <div className="field-req-legend-item">
      <Opt /> <strong>Optional:</strong> Field can be left blank; may have a default value
    </div>
  </div>
);

export const SupportStatusLegend = () => (
  <div className="field-req-legend">
    <h4>Support Status Legend</h4>
    <div className="field-req-legend-item">
      <Supported /> <strong>Supported:</strong> Feature is fully available
    </div>
    <div className="field-req-legend-item">
      <Unsupported /> <strong>Unsupported:</strong> Feature is not available
    </div>
  </div>
);