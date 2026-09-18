"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { withBasePath } from "@/lib/base-path";
import { useBi } from "@/lib/i18n";
import { hero } from "@/lib/content";
import { ReservationForm } from "./ReservationForm";

/**
 * Mobile/tablet imagery decision: below the 1024px desktop breakpoint we
 * show a static photo (the client's designated hero-mobile.jpg) instead of
 * the video — no video bytes requested at all below desktop. Phones and
 * tablets on airport wifi/cellular shouldn't pay for a 14s loop before
 * they've even seen the reservation form, and desktop is where the video
 * occupies the most screen real estate anyway.
 */
function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return isDesktop;
}

export function Hero() {
  const t = useBi();
  const isDesktop = useIsDesktop();

  return (
    <section className="relative">
      <div className="flex flex-col lg:min-h-[calc(100vh-72px)] lg:flex-row">
        {/* Imagery Zone */}
        <div className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-video lg:aspect-auto lg:w-[52%]">
          {isDesktop ? (
            <video
              className="absolute inset-0 h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster={withBasePath("/video/hero-poster.jpg")}
            >
              <source src={withBasePath("/video/hero-loop.mp4")} type="video/mp4" />
            </video>
          ) : (
            <Image
              src={withBasePath("/photos/hero-mobile.jpg")}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
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
