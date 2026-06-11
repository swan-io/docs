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

// Type chip derived from the route's section segment.
export function typeChip(route) {
  if (route.includes("/concepts/")) return "Concept";
  if (route.includes("/guides/")) return "Guide";
  if (route.includes("/reference/")) return "Ref";
  return null;
}

const IS_PROD = process.env.NODE_ENV === "production";

// Production build must fail loudly on an unresolved route / unknown value; dev warns
// and lets the caller fall back to a raw render.
export function failOrWarn(sourcePage, field, value, message) {
  const full = `[ia-rail] ${sourcePage}: ${field} "${value}" ${message}`;
  if (IS_PROD) throw new Error(full);
  console.warn(full);
}
