import React from "react";
import { failOrWarn } from "./resolve";

const LABELS = { dev: "Developers", ops: "Partner ops" };

export default function Audience({ value, sourcePage }) {
  if (!value) return null;
  const values = Array.isArray(value) ? value : [value];
  if (values.length === 0) return null;

  return (
    <div className="ia-rail__block ia-rail__audience">
      <div className="ia-rail__chips">
        {values.map((v) => {
          const label = LABELS[v];
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
