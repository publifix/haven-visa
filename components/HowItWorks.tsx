"use client";

import { useBi } from "@/lib/i18n";
import { howItWorks } from "@/lib/content";
import { Reveal } from "./ui/Reveal";

export function HowItWorks() {
  const t = useBi();

  return (
    <section className="bg-white px-grid py-16 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="eyebrow text-center text-copper-2">{t(howItWorks.eyebrow)}</p>
          <h2
            className="mt-3 text-center font-display text-navy"
            style={{ fontSize: "var(--fs-h1)", lineHeight: "var(--lh-h1)", fontWeight: "var(--fw-body)" }}
          >
            {t(howItWorks.headline)}
          </h2>
        </Reveal>

        <Reveal delayMs={120}>
          <ol className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6">
            {howItWorks.steps.map((step, i) => (
              <li key={i} className="text-center">
                <span
                  className="mx-auto flex h-12 w-12 items-center justify-center rounded-full font-display text-lg text-white"
                  style={{ background: "var(--visa-copper-gradient)" }}
                >
                  {i + 1}
                </span>
                <h3 className="mt-4 font-display text-lg text-navy" style={{ fontWeight: "var(--fw-body)" }}>
                  {t(step.title)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-ink">{t(step.description)}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
