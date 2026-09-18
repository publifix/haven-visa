import type { Metadata, Viewport } from "next";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n";
import { withBasePath } from "@/lib/base-path";
import { faq } from "@/lib/content";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://publifix.github.io/haven-visa";
const isPreview = process.env.NEXT_PUBLIC_IS_PREVIEW === "true";

const title = "Sala HAVEN | VIP Lounge Visa Infinite — Terminal 1, AICM";
const description =
  "Sala HAVEN, VIP Lounge exclusivo para tarjetahabientes Visa Infinite en la Terminal 1 del Aeropuerto Internacional de la Ciudad de México. Alimentos y bebidas premium, spa, duchas y más. Reserve su acceso.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: `%s | Sala HAVEN` },
  description,
  keywords: [
    "Sala Haven",
    "VIP Lounge CDMX",
    "Visa Infinite",
    "sala VIP aeropuerto",
    "Terminal 1 AICM",
    "The Grand Lounge Elite",
    "sala VIP Ciudad de México",
  ],
  authors: [{ name: "The Grand Lounge Elite" }],
  creator: "The Grand Lounge Elite",
  publisher: "The Grand Lounge Elite",
  alternates: { canonical: "/" },
  // The GH Pages preview is a staging URL, not the production domain — kept
  // out of search results so it never competes with the real site once one
  // exists. The production build (no NEXT_PUBLIC_IS_PREVIEW) stays indexable.
  robots: isPreview
    ? { index: false, follow: false }
    : {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, "max-image-preview": "large" },
      },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "/",
    siteName: "Sala HAVEN",
    title,
    description,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Sala HAVEN — VIP Lounge Visa Infinite" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.jpg"],
  },
  manifest: withBasePath("/manifest.webmanifest"),
};

export const viewport: Viewport = {
  themeColor: "#010D36",
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Sala HAVEN",
    description,
    url: siteUrl,
    image: `${siteUrl}/og-image.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Terminal 1, Aeropuerto Internacional de la Ciudad de México",
      addressLocality: "Ciudad de México",
      addressCountry: "MX",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "05:00",
      closes: "21:00",
    },
    parentOrganization: {
      "@type": "Organization",
      name: "The Grand Lounge Elite",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question.es,
      acceptedAnswer: { "@type": "Answer", text: item.answer.es },
    })),
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href={withBasePath("/fonts/VisaDialect-Medium.woff2")}
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
