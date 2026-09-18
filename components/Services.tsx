"use client";

import {
  UtensilsCrossed,
  Wine,
  Sparkles,
  Coffee,
  Beer,
  GlassWater,
  CarFront,
  ShowerHead,
  Footprints,
  Luggage,
  MonitorPlay,
  ConciergeBell,
  PlaneTakeoff,
  type LucideIcon,
} from "lucide-react";
import { useBi } from "@/lib/i18n";
import { services, servicesIntro, type ServiceIconName } from "@/lib/content";
import { Reveal } from "./ui/Reveal";

const iconMap: Record<ServiceIconName, LucideIcon> = {
  UtensilsCrossed,
  Wine,
  Sparkles,
  Coffee,
  Beer,
  GlassWater,
  CarFront,
  ShowerHead,
  Footprints,
  Luggage,
  MonitorPlay,
  ConciergeBell,
  PlaneTakeoff,
};

export function Services() {
  const t = useBi();

  return (
    <section className="bg-gray-light px-grid py-16 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="eyebrow text-center text-copper-2">{t(servicesIntro.eyebrow)}</p>
          <h2
            className="mt-3 text-center font-display text-navy"
            style={{ fontSize: "var(--fs-h1)", lineHeight: "var(--lh-h1)", fontWeight: "var(--fw-body)" }}
          >
            {t(servicesIntro.headline)}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-gray-ink sm:text-base">
            {t(servicesIntro.subheadline)}
          </p>
        </Reveal>

        <Reveal delayMs={120}>
          <div className="mt-8 -mx-grid flex snap-x snap-mandatory gap-4 overflow-x-auto px-grid pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon];
              return (
                <article
                  key={i}
                  className="flex w-[78vw] shrink-0 snap-start flex-col rounded-2xl bg-white p-6 shadow-sm sm:w-[320px]"
                >
                  <span
                    className="flex h-14 w-14 items-center justify-center rounded-full"
                    style={{ backgroundColor: "rgba(180, 109, 64, 0.15)" }}
                  >
                    <Icon size={26} strokeWidth={1.5} color="var(--visa-copper-2)" />
                  </span>
                  <h3
                    className="mt-5 font-display text-navy"
                    style={{ fontSize: "var(--fs-h3)", lineHeight: "var(--lh-h3)", fontWeight: "var(--fw-body)" }}
                  >
                    {t(service.title)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-ink">{t(service.description)}</p>
                </article>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
