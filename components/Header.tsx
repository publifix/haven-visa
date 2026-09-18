"use client";

import Image from "next/image";
import { withBasePath } from "@/lib/base-path";
import { useBi, useLanguage } from "@/lib/i18n";
import { langSwitchLabel } from "@/lib/content";

export function Header() {
  const t = useBi();
  const { lang, toggle } = useLanguage();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy/95 backdrop-blur">
      <div
        className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-grid"
        style={{ height: "clamp(56px, 8vw, 72px)" }}
      >
        <div className="flex min-w-0 items-center gap-3 sm:gap-5">
          <Image
            src={withBasePath("/brand/visa-logo-white.png")}
            alt="Visa"
            width={659}
            height={202}
            priority
            className="h-7 w-auto shrink-0"
          />
          <div aria-hidden="true" className="h-7 w-px shrink-0 bg-white/20" />
          <div className="flex min-w-0 items-center gap-2">
            <Image
              src={withBasePath("/brand/gle-emblem-white.png")}
              alt=""
              width={388}
              height={500}
              className="h-6 w-auto shrink-0 sm:h-8"
            />
            <span className="hidden truncate text-xs font-medium uppercase tracking-eyebrow text-gray-light sm:block">
              The Grand Lounge Elite
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={toggle}
          className="shrink-0 cursor-pointer rounded-full border border-white/25 px-3 py-1.5 text-xs font-medium uppercase tracking-eyebrow text-white transition-colors duration-200 hover:border-copper-1 hover:text-copper-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-copper-2 sm:px-4 sm:py-2"
          aria-label={lang === "es" ? "Switch to English" : "Cambiar a español"}
        >
          {t(langSwitchLabel)}
        </button>
      </div>
    </header>
  );
}
