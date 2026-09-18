"use client";

import { useBi } from "@/lib/i18n";
import { bookAccessLabel } from "@/lib/content";

type BookButtonProps = {
  variant?: "solid" | "outline";
  className?: string;
};

/**
 * Single shared CTA. Every "Reservar Acceso" entry point (About,
 * Experiencias, Gallery) and this button all point at the same #reservar
 * anchor — one conversion point, multiple entries, per the copy deck note
 * on CTA hierarchy.
 */
export function BookButton({ variant = "solid", className = "" }: BookButtonProps) {
  const t = useBi();
  const base =
    "inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-medium tracking-default transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-copper-2 focus-visible:ring-offset-2 focus-visible:ring-offset-navy";
  const solid = "bg-copper-2 text-white hover:bg-copper-3";
  const outline = "border border-white/40 text-white hover:border-copper-1 hover:text-copper-1";

  return (
    <a href="#reservar" className={`${base} ${variant === "solid" ? solid : outline} ${className}`}>
      {t(bookAccessLabel)}
    </a>
  );
}
