import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://publifix.github.io/haven-visa";
const isPreview = process.env.NEXT_PUBLIC_IS_PREVIEW === "true";

export default function robots(): MetadataRoute.Robots {
  // The GH Pages preview is a staging environment — block crawlers there
  // entirely so it never competes with the real production domain.
  if (isPreview) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
