// Lucide's icon set deliberately excludes brand/platform logos, so these are
// small generic outline glyphs drawn to match Lucide's stroke language
// (24x24, stroke=currentColor, strokeWidth 1.5) rather than any platform's
// proprietary logo artwork.
import type { SVGProps } from "react";

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function InstagramGlyph(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookGlyph(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M15 8.5h-2a2 2 0 0 0-2 2V21" />
      <path d="M9 13h4" />
      <rect x="3" y="3" width="18" height="18" rx="5" />
    </svg>
  );
}

export function XGlyph(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M5 5l14 14M19 5L5 19" />
    </svg>
  );
}

export function LinkedInGlyph(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="8" cy="8.5" r="0.9" fill="currentColor" stroke="none" />
      <path d="M8 11.5V17M12.5 17v-3.3a2 2 0 0 1 4 0V17" />
    </svg>
  );
}

export function TikTokGlyph(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M13 3v11.2a3 3 0 1 1-2.4-2.94" />
      <path d="M13 6.5a4.5 4.5 0 0 0 4.5 4.5" />
    </svg>
  );
}
