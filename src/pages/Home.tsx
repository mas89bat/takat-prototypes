import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import DiscoverSection from "@/components/DiscoverSection";
import LighthouseSection from "@/components/LighthouseSection";
import ExperiencesSection from "@/components/ExperiencesSection";
import StaySection from "@/components/StaySection";
import AgendaSection from "@/components/AgendaSection";
import GallerySection from "@/components/GallerySection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <DiscoverSection />
        <LighthouseSection />
        <ExperiencesSection />
        <StaySection />
        <AgendaSection />
        <GallerySection />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  );
}
