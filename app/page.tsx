import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { ImageBanner } from "@/components/ImageBanner";
import { Services } from "@/components/Services";
import { ImageTextSection } from "@/components/ImageTextSection";
import { Faq } from "@/components/Faq";
import { Gallery } from "@/components/Gallery";
import { Footer } from "@/components/Footer";
import { about, experiencias } from "@/lib/content";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <ImageBanner src="/photos/gallery/lounge-screens.webp" alt="Sala de estar de Sala HAVEN" />
        <Services />
        <ImageTextSection
          headline={about.headline}
          paragraphs={about.paragraphs}
          photoSrc="/photos/about-bar-service.jpg"
          photoAlt="Bartender preparando un cóctel para una invitada en Sala HAVEN"
          imageSide="left"
          background="white"
        />
        <ImageTextSection
          headline={experiencias.headline}
          paragraphs={experiencias.paragraphs}
          photoSrc="/photos/experiencias-traveler.jpg"
          photoAlt="Viajera relajándose en Sala HAVEN"
          imageSide="right"
          background="navy"
        />
        <Faq />
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
