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

// Area kind for related links that aren't Diátaxis content (cross-product or
// cross-section pointers), so every Related item carries an icon (see AreaIcon):
//   /build/*            → "build"  (wrench)
//   /get-started/*          → "get-started" (rocket)
//   product root / topics/* / other → "product" (package)
export function areaKind(route) {
  const r = String(route || "").split("#")[0].replace(/^\/+|\/+$/g, "");
  if (!r) return null;
  const seg = r.split("/");
  if (seg[0] === "build") return "build";
  if (seg[0] === "get-started") return "get-started";
  return "product";
}

const IS_PROD = process.env.NODE_ENV === "production";

// Production build must fail loudly on an unresolved route / unknown value; dev warns
// and lets the caller fall back to a raw render.
export function failOrWarn(sourcePage, field, value, message) {
  const full = `[ia-rail] ${sourcePage}: ${field} "${value}" ${message}`;
  if (IS_PROD) throw new Error(full);
  console.warn(full);
}
