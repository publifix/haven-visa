"use client";

import Image from "next/image";
import { withBasePath } from "@/lib/base-path";
import { useBi } from "@/lib/i18n";
import type { Bi } from "@/lib/i18n";
import { BookButton } from "./ui/BookButton";
import { Reveal } from "./ui/Reveal";

type ImageTextSectionProps = {
  headline: Bi;
  paragraphs: Bi[];
  photoSrc: string;
  photoAlt: string;
  imageSide?: "left" | "right";
  background?: "navy" | "white";
};

export function ImageTextSection({
  headline,
  paragraphs,
  photoSrc,
  photoAlt,
  imageSide = "left",
  background = "white",
}: ImageTextSectionProps) {
  const t = useBi();
  const isNavy = background === "navy";

  return (
    <section className={isNavy ? "bg-navy" : "bg-white"}>
      <div
        className={`mx-auto flex max-w-7xl flex-col lg:flex-row ${
          imageSide === "right" ? "lg:flex-row-reverse" : ""
        }`}
      >
        <div className="relative aspect-[4/3] w-full lg:aspect-auto lg:w-1/2">
          <Image
            src={withBasePath(photoSrc)}
            alt={photoAlt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="flex w-full items-center px-grid py-12 lg:w-1/2 lg:py-16">
          <Reveal direction={imageSide === "right" ? "up" : "right"}>
            <div className="max-w-lg">
              <h2
                className={`font-display ${isNavy ? "text-white" : "text-navy"}`}
                style={{ fontSize: "var(--fs-h1)", lineHeight: "var(--lh-h1)", fontWeight: "var(--fw-body)" }}
              >
                {t(headline)}
              </h2>
              <div className="mt-5 space-y-4">
                {paragraphs.map((p, i) => (
                  <p
                    key={i}
                    className={`text-sm leading-relaxed sm:text-base ${isNavy ? "text-gray-light" : "text-gray-ink"}`}
                    style={{ fontWeight: "var(--fw-light-body)" }}
                  >
                    {t(p)}
                  </p>
                ))}
              </div>
              <div className="mt-7">
                <BookButton variant={isNavy ? "outline" : "solid"} />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
