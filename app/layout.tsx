import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n";
import { withBasePath } from "@/lib/base-path";

export const metadata: Metadata = {
  title: "Sala HAVEN — VISA Infinite",
  description:
    "Sala HAVEN, VIP Lounge en la Terminal 1 del AICM, exclusiva para tarjetahabientes Visa Infinite. Operada por The Grand Lounge Elite.",
};

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
      </head>
      <body className="font-sans antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
