"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { withBasePath } from "@/lib/base-path";

type Photo = { src: string; alt: string };

export function GalleryLightbox({
  photos,
  openIndex,
  onClose,
  onNavigate,
}: {
  photos: Photo[];
  openIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}) {
  const open = openIndex !== null;
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const touchStartX = useRef<number | null>(null);

  const goPrev = () => {
    if (openIndex === null) return;
    onNavigate((openIndex - 1 + photos.length) % photos.length);
  };
  const goNext = () => {
    if (openIndex === null) return;
    onNavigate((openIndex + 1) % photos.length);
  };

  useEffect(() => {
    if (!open) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();
    document.body.style.overflow = "hidden";

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") goPrev();
      else if (e.key === "ArrowRight") goNext();
    }
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
      previouslyFocused?.focus();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- goPrev/goNext close over openIndex intentionally per open/index change
  }, [open, openIndex]);

  if (!open || openIndex === null) return null;

  const photo = photos[openIndex];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={photo.alt}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-navy/95 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      onTouchStart={(e) => {
        touchStartX.current = e.touches[0].clientX;
      }}
      onTouchEnd={(e) => {
        if (touchStartX.current === null) return;
        const delta = e.changedTouches[0].clientX - touchStartX.current;
        if (delta > 50) goPrev();
        else if (delta < -50) goNext();
        touchStartX.current = null;
      }}
    >
      <button
        ref={closeButtonRef}
        type="button"
        onClick={onClose}
        aria-label="Cerrar"
        className="absolute right-4 top-4 z-10 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-copper-1 sm:right-6 sm:top-6"
      >
        <X size={22} />
      </button>

      <button
        type="button"
        onClick={goPrev}
        aria-label="Anterior"
        className="absolute left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-copper-1 sm:left-6"
      >
        <ChevronLeft size={24} />
      </button>

      <div className="relative mx-16 my-20 aspect-[4/3] w-full max-w-4xl sm:mx-24">
        <Image
          key={photo.src}
          src={withBasePath(photo.src)}
          alt={photo.alt}
          fill
          sizes="(min-width: 1024px) 80vw, 90vw"
          className="object-contain"
          priority
        />
      </div>

      <button
        type="button"
        onClick={goNext}
        aria-label="Siguiente"
        className="absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-copper-1 sm:right-6"
      >
        <ChevronRight size={24} />
      </button>

      <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-gray-light">
        {openIndex + 1} / {photos.length}
      </p>
    </div>
  );
}
