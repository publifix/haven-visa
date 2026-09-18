"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { withBasePath } from "@/lib/base-path";
import { useBi } from "@/lib/i18n";
import { hero } from "@/lib/content";
import { ReservationForm } from "./ReservationForm";

/**
 * Mobile video decision (brief: "decide y documenta"): below 640px we mount
 * only the static poster, never the <video> element — no bytes requested at
 * all. Phones on airport wifi/cellular shouldn't pay for a 14s loop before
 * they've even seen the reservation form. From 640px up we mount <video>,
 * using the lighter 720x720 encode up to 1024px and the full 1080x1080
 * encode above that, since a laptop/desktop connection can afford it and
 * the video occupies more screen real estate there.
 */
function useHeroVideoTier() {
  const [tier, setTier] = useState<"poster" | "mobile" | "desktop">("poster");

  useEffect(() => {
    const mqMobile = window.matchMedia("(min-width: 640px)");
    const mqDesktop = window.matchMedia("(min-width: 1024px)");
    const update = () => {
      if (mqDesktop.matches) setTier("desktop");
      else if (mqMobile.matches) setTier("mobile");
      else setTier("poster");
    };
    update();
    mqMobile.addEventListener("change", update);
    mqDesktop.addEventListener("change", update);
    return () => {
      mqMobile.removeEventListener("change", update);
      mqDesktop.removeEventListener("change", update);
    };
  }, []);

  return tier;
}

export function Hero() {
  const t = useBi();
  const tier = useHeroVideoTier();
  const poster = withBasePath("/video/hero-poster.jpg");

  return (
    <section className="relative">
      <div className="flex flex-col lg:min-h-[calc(100vh-72px)] lg:flex-row">
        {/* Imagery Zone */}
        <div className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-video lg:aspect-auto lg:w-[52%]">
          {tier === "poster" ? (
            <Image
              src={poster}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          ) : (
            <video
              className="absolute inset-0 h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster={poster}
              key={tier}
            >
              <source
                src={withBasePath(
                  tier === "desktop" ? "/video/hero-loop.mp4" : "/video/hero-loop-mobile.mp4",
                )}
                type="video/mp4"
              />
            </video>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-navy/10" />
        </div>

        {/* Color Block Zone */}
        <div className="flex w-full flex-col justify-center bg-navy px-grid py-12 lg:w-[48%] lg:py-16">
          <div className="mx-auto w-full max-w-lg">
            <h1
              className="font-display text-white"
              style={{ fontSize: "var(--fs-h1)", lineHeight: "var(--lh-h1)", fontWeight: "var(--fw-body)" }}
            >
              {t(hero.headline)}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-gray-light" style={{ fontWeight: "var(--fw-light-body)" }}>
              {t(hero.subheadline)}
            </p>

            <div id="reservar" className="mt-8 scroll-mt-24">
              <ReservationForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
