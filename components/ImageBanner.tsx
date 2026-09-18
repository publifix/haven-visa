"use client";

import Image from "next/image";
import { withBasePath } from "@/lib/base-path";

/**
 * A pure full-bleed photography moment (Modo 2) used as a breather between
 * two Modo-3 card-led sections — no text or logo composited over it, so
 * the "single-hue type over photo" rule doesn't come into play at all.
 */
export function ImageBanner({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative h-[42vh] w-full min-h-[280px] max-h-[520px]">
      <Image
        src={withBasePath(src)}
        alt={alt}
        fill
        sizes="100vw"
        className="object-cover"
      />
    </div>
  );
}
