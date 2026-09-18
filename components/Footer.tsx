"use client";

import Image from "next/image";
import { withBasePath } from "@/lib/base-path";
import { useBi } from "@/lib/i18n";
import { footer } from "@/lib/content";
import {
  InstagramGlyph,
  FacebookGlyph,
  XGlyph,
  LinkedInGlyph,
  TikTokGlyph,
} from "./icons/SocialIcons";

const socials = [
  { Icon: InstagramGlyph, label: "Instagram", href: "#" },
  { Icon: FacebookGlyph, label: "Facebook", href: "#" },
  { Icon: XGlyph, label: "X", href: "#" },
  { Icon: LinkedInGlyph, label: "LinkedIn", href: "#" },
  { Icon: TikTokGlyph, label: "TikTok", href: "#" },
];

export function Footer() {
  const t = useBi();

  return (
    <footer className="border-t border-white/10 bg-navy px-grid py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 text-center">
        <div className="flex items-center gap-5">
          <Image
            src={withBasePath("/brand/visa-logo-white.png")}
            alt="Visa"
            width={659}
            height={202}
            className="h-5 w-auto"
          />
          <div aria-hidden="true" className="h-6 w-px bg-white/20" />
          <Image
            src={withBasePath("/brand/gle-emblem-white.png")}
            alt="The Grand Lounge Elite"
            width={388}
            height={500}
            className="h-7 w-auto"
          />
        </div>

        <div>
          <p className="eyebrow text-gray-light">{t(footer.followUs)}</p>
          <div className="mt-3 flex items-center gap-4">
            {socials.map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="text-white/70 transition-colors duration-200 hover:text-copper-1"
              >
                <Icon width={20} height={20} />
              </a>
            ))}
          </div>
        </div>

        <p className="max-w-md text-xs leading-relaxed text-gray-light">{t(footer.legal)}</p>

        <div className="flex items-center gap-6 text-xs text-gray-light">
          <a href="#" className="transition-colors duration-200 hover:text-copper-1">
            {t(footer.privacy)}
          </a>
          <a href="#" className="transition-colors duration-200 hover:text-copper-1">
            {t(footer.terms)}
          </a>
        </div>

        <p className="text-xs text-gray-medium">{t(footer.copyright)}</p>
      </div>
    </footer>
  );
}
