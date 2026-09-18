// GitHub Pages serves this app under /haven-visa/; Vercel serves it at the
// domain root. next/image doesn't consistently prefix `src` with basePath
// in static export mode, so asset paths route through this helper instead.
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function withBasePath(path: string): string {
  return `${BASE_PATH}${path}`;
}
