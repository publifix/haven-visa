import type { MetadataRoute } from "next";
import { withBasePath } from "@/lib/base-path";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sala HAVEN — VIP Lounge Visa Infinite",
    short_name: "Sala HAVEN",
    description:
      "VIP Lounge exclusivo para tarjetahabientes Visa Infinite en la Terminal 1 del Aeropuerto Internacional de la Ciudad de México.",
    start_url: withBasePath("/"),
    display: "standalone",
    background_color: "#010D36",
    theme_color: "#010D36",
    icons: [
      { src: withBasePath("/icon.png"), sizes: "512x512", type: "image/png" },
      { src: withBasePath("/apple-icon.png"), sizes: "180x180", type: "image/png" },
    ],
  };
}
