"use client";

import { useState } from "react";
import Image from "next/image";
import { withBasePath } from "@/lib/base-path";
import { useBi } from "@/lib/i18n";
import { gallery } from "@/lib/content";
import { BookButton } from "./ui/BookButton";
import { Reveal } from "./ui/Reveal";
import { GalleryLightbox } from "./GalleryLightbox";

export function Gallery() {
  const t = useBi();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const resolvedPhotos = gallery.photos.map((photo) => ({ src: photo.src, alt: t(photo.alt) }));

  return (
    <section className="bg-navy">
      {/* Modo 2 — full bleed, single-hue (white) type over photography, no
          background color block, no copper rose here per sec. 2.3. */}
      <div className="flex snap-x snap-mandatory gap-0 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        {gallery.photos.map((photo, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setOpenIndex(i)}
            aria-label={t(photo.alt)}
            className="group relative aspect-[4/5] w-[85vw] shrink-0 cursor-pointer snap-center overflow-hidden sm:aspect-video sm:w-[70vw] lg:w-[45vw]"
          >
            <Image
              src={withBasePath(photo.src)}
              alt={t(photo.alt)}
              fill
              sizes="(min-width: 1024px) 45vw, (min-width: 640px) 70vw, 85vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-navy/0 transition-colors duration-300 group-hover:bg-navy/20" />
          </button>
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

      <GalleryLightbox
        photos={resolvedPhotos}
        openIndex={openIndex}
        onClose={() => setOpenIndex(null)}
        onNavigate={setOpenIndex}
      />
    </section>
  );
}
