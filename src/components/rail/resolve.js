import { usePluginData } from "@docusaurus/useGlobalData";

// Normalize to a leading-slash, trailing-slash-stripped form. The plugin stores map
// keys the same way, so stripping on both sides neutralizes trailing-slash variance.
export function normalizeRoute(route) {
  if (!route) return route;
  let r = String(route).trim();
  if (!r.startsWith("/")) r = "/" + r;
  if (r.length > 1) r = r.replace(/\/+$/, "");
  return r;
}

export function useRouteMap() {
  return usePluginData("ia-rail-meta").routes;
}

// Returns { key, meta } or null. Tolerant of trailing-slash variance on the input.
export function resolveRoute(map, route) {
  const key = normalizeRoute(route);
  if (map[key]) return { key, meta: map[key] };
  const withSlash = key === "/" ? key : key + "/";
  if (map[withSlash]) return { key: withSlash, meta: map[withSlash] };
  return null;
}

export const AUDIENCE_LABELS = { dev: "Developers", ops: "Operators" };

// Diátaxis type chip derived from the route's section segment. Matches both
// nested pages (/concepts/x) and the section hub itself (.../concepts).
export function typeChip(route) {
  const r = String(route).split("#")[0].replace(/\/+$/, "");
  if (r.includes("/concepts/") || r.endsWith("/concepts")) return "Concept";
  if (r.includes("/guides/") || r.endsWith("/guides")) return "Guide";
  if (r.includes("/reference/") || r.endsWith("/reference")) return "Ref";
  return null;
}

const cap = (s) => (s ? s.charAt(0).toUpperCase() + s.slice(1) : s);
const SECTION_LABEL = { "dev-tools": "Dev tools", "get-started": "Get started" };

// Fallback chip for related links that aren't Diátaxis content (cross-product
// or cross-section pointers), so every Related item carries a label:
//   product root (/cards)        → "Product"
//   /dev-tools/* , /get-started/*→ section name
//   legacy /topics/<area>/*      → that area
//   otherwise                    → capitalized first segment
export function areaLabel(route) {
  const r = String(route || "").split("#")[0].replace(/^\/+|\/+$/g, "");
  if (!r) return null;
  const seg = r.split("/");
  if (seg.length === 1) return "Product";
  if (seg[0] === "topics" && seg[1]) return cap(seg[1]);
  return SECTION_LABEL[seg[0]] || cap(seg[0]);
}

const IS_PROD = process.env.NODE_ENV === "production";

// Production build must fail loudly on an unresolved route / unknown value; dev warns
// and lets the caller fall back to a raw render.
export function failOrWarn(sourcePage, field, value, message) {
  const full = `[ia-rail] ${sourcePage}: ${field} "${value}" ${message}`;
  if (IS_PROD) throw new Error(full);
  console.warn(full);
}
