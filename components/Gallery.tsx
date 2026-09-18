"use client";

import Image from "next/image";
import { withBasePath } from "@/lib/base-path";
import { useBi } from "@/lib/i18n";
import { gallery } from "@/lib/content";
import { BookButton } from "./ui/BookButton";
import { Reveal } from "./ui/Reveal";

export function Gallery() {
  const t = useBi();

  return (
    <section className="bg-navy">
      {/* Modo 2 — full bleed, single-hue (white) type over photography, no
          background color block, no copper rose here per sec. 2.3. */}
      <div className="-mx-grid flex snap-x snap-mandatory gap-0 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        {gallery.photos.map((photo, i) => (
          <div key={i} className="relative aspect-[4/5] w-[85vw] shrink-0 snap-center sm:aspect-video sm:w-[70vw] lg:w-[45vw]">
            <Image
              src={withBasePath(photo.src)}
              alt={t(photo.alt)}
              fill
              sizes="(min-width: 1024px) 45vw, (min-width: 640px) 70vw, 85vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <Reveal className="px-grid py-14 text-center sm:py-16">
        <p className="eyebrow text-copper-1">{t(gallery.hoursHeadline)}</p>
        <p className="mt-3 font-display text-lg text-white sm:text-xl" style={{ fontWeight: "var(--fw-body)" }}>
          {t(gallery.hoursText)}
        </p>
        <div className="mt-7">
          <BookButton variant="outline" />
        </div>
      </Reveal>
    </section>
  );
}
