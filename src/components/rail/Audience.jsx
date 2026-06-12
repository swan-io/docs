import React from "react";
import { AUDIENCE_LABELS, failOrWarn } from "./resolve";

export default function Audience({ value, sourcePage }) {
  if (!value) return null;
  const values = Array.isArray(value) ? value : [value];
  if (values.length === 0) return null;

  return (
    <div className="ia-rail__block ia-rail__audience">
      <p className="ia-rail__label">For</p>
      <div className="ia-rail__chips">
        {values.map((v) => {
          const label = AUDIENCE_LABELS[v];
          if (!label) {
            failOrWarn(sourcePage, "audience", v, "is not a known audience value");
            return (
              <span key={v} className="ia-audience-tag">
                {String(v)}
              </span>
            );
          }
          return (
            <span key={v} className={`ia-audience-tag ia-audience-tag--${v}`}>
              {label}
            </span>
          );
        })}
      </div>
    </div>
  );
}
