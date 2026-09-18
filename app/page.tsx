"use client";

import { useState } from "react";

type Lang = "es" | "en";

const copy: Record<
  Lang,
  {
    network: string;
    badge: string;
    tagline: string;
    location: string;
    exclusive: string;
    note: string;
    switchLabel: string;
  }
> = {
  es: {
    network: "The Grand Lounge Elite",
    badge: "Próximamente",
    tagline: "Un refugio para quienes viajan distinto.",
    location: "VIP Lounge · Ciudad de México",
    exclusive: "Exclusivo para tarjetahabientes VISA Infinite",
    note: "Estamos preparando la experiencia. El sitio estará listo muy pronto.",
    switchLabel: "English",
  },
  en: {
    network: "The Grand Lounge Elite",
    badge: "Coming Soon",
    tagline: "A refuge for those who travel differently.",
    location: "VIP Lounge · Mexico City",
    exclusive: "Exclusively for VISA Infinite cardholders",
    note: "We're crafting the experience. The site will be ready very soon.",
    switchLabel: "Español",
  },
};

export default function Home() {
  const [lang, setLang] = useState<Lang>("es");
  const t = copy[lang];

  return (
    <main className="relative flex min-h-dvh flex-col items-center justify-between overflow-hidden bg-background px-6 py-10 text-foreground sm:px-10">
      {/* ambient gold glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[120px]"
      />

      {/* language toggle */}
      <div className="relative z-10 flex w-full max-w-6xl items-center justify-end">
        <button
          type="button"
          onClick={() => setLang(lang === "es" ? "en" : "es")}
          className="cursor-pointer rounded-full border border-border px-4 py-2 text-xs font-medium uppercase tracking-widest text-foreground/80 transition-colors duration-200 hover:border-accent hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          aria-label={`${lang === "es" ? "Switch to English" : "Cambiar a español"}`}
        >
          {t.switchLabel}
        </button>
      </div>

      {/* centerpiece */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center gap-8 text-center">
        <p className="text-[0.7rem] font-medium uppercase tracking-widest2 text-muted sm:text-xs">
          {t.network}
        </p>

        {/* placeholder monogram — swap for the real Sala HAVEN mark */}
        <div className="flex h-20 w-20 items-center justify-center rounded-full border border-accent/60 sm:h-24 sm:w-24">
          <span className="font-display text-3xl text-accent sm:text-4xl">H</span>
        </div>

        <div className="space-y-3">
          <h1 className="font-display text-5xl font-medium tracking-wide text-foreground sm:text-7xl">
            Sala HAVEN
          </h1>
          <p className="font-display text-lg italic text-foreground/70 sm:text-xl">
            {t.tagline}
          </p>
        </div>

        <div className="flex flex-col items-center gap-1 text-sm text-foreground/70 sm:text-base">
          <p>{t.location}</p>
          <p>{t.exclusive}</p>
        </div>

        <span className="mt-2 rounded-full border border-accent/50 px-5 py-2 text-[0.65rem] font-semibold uppercase tracking-widest2 text-accent sm:text-xs">
          {t.badge}
        </span>

        <p className="max-w-md text-balance text-sm text-foreground/60">{t.note}</p>
      </div>

      <footer className="relative z-10 flex w-full max-w-6xl flex-col items-center gap-1 text-center text-[0.65rem] uppercase tracking-widest text-muted sm:text-xs">
        <p>Sala HAVEN &middot; {t.network}</p>
      </footer>
    </main>
  );
}
