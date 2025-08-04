import React from 'react';
import './styles.css';

// Helper function to find closest legend by type
const scrollToClosestLegend = (className) => {
  const legends = document.querySelectorAll(`.${className}`);
  if (legends.length === 0) return;
  
  if (legends.length === 1) {
    legends[0].scrollIntoView({ behavior: 'smooth', block: 'start' });
    return;
  }
  
  // Find closest legend to current scroll position
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  let closestLegend = legends[0];
  let closestDistance = Math.abs(legends[0].getBoundingClientRect().top + scrollTop - scrollTop);
  
  legends.forEach(legend => {
    const distance = Math.abs(legend.getBoundingClientRect().top + scrollTop - scrollTop);
    if (distance < closestDistance) {
      closestDistance = distance;
      closestLegend = legend;
    }
  });
  
  closestLegend.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

// Optimized scroll functions
const scrollToFieldLegend = () => scrollToClosestLegend('field-requirements-legend');
const scrollToSupportLegend = () => scrollToClosestLegend('support-status-legend');

// Field requirement badges
export const Req = () => (
  <span 
    className="field-req-badge field-req-badge--required" 
    onClick={scrollToFieldLegend}
    title="Required field - click to view legend"
  >
    ● REQ
  </span>
);

export const Opt = () => (
  <span 
    className="field-req-badge field-req-badge--optional" 
    onClick={scrollToFieldLegend}
    title="Optional field - click to view legend"
  >
    ○ OPT
  </span>
);

export const Cnd = () => (
  <span 
    className="field-req-badge field-req-badge--conditional" 
    onClick={scrollToFieldLegend}
    title="Conditional field - click to view legend"
  >
    ◐ CND
  </span>
);

// Support status badges
export const Supported = () => (
  <span 
    className="field-req-badge field-req-badge--supported" 
    onClick={scrollToSupportLegend}
    title="Supported feature - click to view legend"
  >
    SUPPORTED
  </span>
);

export const Unsupported = () => (
  <span 
    className="field-req-badge field-req-badge--unsupported" 
    onClick={scrollToSupportLegend}
    title="Unsupported feature - click to view legend"
  >
    UNSUPPORTED
  </span>
);

// Legend components with distinct classes
export const FieldRequirementsLegend = () => (
  <div className="field-req-legend field-requirements-legend">
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
  <div className="field-req-legend support-status-legend">
    <h4>Support Status Legend</h4>
    <div className="field-req-legend-item">
      <Supported /> <strong>Supported:</strong> Feature is fully available
    </div>
    <div className="field-req-legend-item">
      <Unsupported /> <strong>Unsupported:</strong> Feature is not available
    </div>
  </div>
);