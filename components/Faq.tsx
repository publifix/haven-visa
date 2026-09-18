"use client";

import { useState } from "react";
import { useBi } from "@/lib/i18n";
import { faq } from "@/lib/content";
import { Reveal } from "./ui/Reveal";

export function Faq() {
  const t = useBi();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-navy px-grid py-16 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="eyebrow text-center text-copper-1">FAQ</p>
          <h2
            className="mt-3 text-center font-display text-white"
            style={{ fontSize: "var(--fs-h1)", lineHeight: "var(--lh-h1)", fontWeight: "var(--fw-body)" }}
          >
            {t({ es: "Preguntas frecuentes", en: "Frequently asked questions" })}
          </h2>
        </Reveal>

        <Reveal delayMs={120}>
          <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
            {faq.map((item, i) => {
              const open = openIndex === i;
              return (
                <div key={i}>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? null : i)}
                    aria-expanded={open}
                    className="flex w-full cursor-pointer items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className="font-display text-sm text-white sm:text-base" style={{ fontWeight: "var(--fw-body)" }}>
                      {t(item.question)}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`shrink-0 text-xl text-copper-1 transition-transform duration-200 ${open ? "rotate-45" : ""}`}
                    >
                      +
                    </span>
                  </button>
                  {open && (
                    <p className="pb-5 text-sm leading-relaxed text-gray-light">{t(item.answer)}</p>
                  )}
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
