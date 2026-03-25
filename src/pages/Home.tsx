import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { HeroCarousel } from "@/components/HeroCarousel";
import { FeatureCards } from "@/components/FeatureCards";
import { StatsSection } from "@/components/StatsSection";
import { FilterableGrid } from "@/components/FilterableGrid";
import { GalleryMasonry } from "@/components/GalleryMasonry";
import { NewsletterCTA } from "@/components/NewsletterCTA";

export default function Home() {
  return (
    <>
      <Header />
      <section id="hero">
        <HeroCarousel
          slides={[
            {
              image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2022/10/123-sb-plouguerneau-balade-camping-du-phare-de-lile-vierge-jusqua-roch-pelguent-hdjeremyjehanin-2024-scaled.jpg",
              eyebrow: "Bienvenue au Pays des Abers",
              title: "La Route des Phares",
              subtitle: "Explorez les sentinelles de la mer et découvrez les paysages incomparables de la côte bretonne sauvage."
            },
            {
              image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2025/08/plouguerneau21alamoureux-d6a2367.jpg",
              eyebrow: "Patrimoine Maritime",
              title: "Le Phare de l'Île Vierge",
              subtitle: "Plus haut phare d'Europe en pierre de taille, une merveille architecturale dominant l'Aber Wrac'h."
            },
            {
              image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2022/08/kayak-ile-vierge-clo-et-clem-680x453.jpg",
              eyebrow: "Aventures Nautiques",
              title: "Kayak dans les Abers",
              subtitle: "Pagayez au rythme des marées et explorez les eaux cristallines de nos trois abers légendaires."
            },
            {
              image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2025/12/113-sb-landeda-point-de-vue-depuis-an-treiz-hdjeremyjehanin-2024-680x453.jpg",
              eyebrow: "Nature Préservée",
              title: "Intense & Sauvage",
              subtitle: "Plus de 350 km de sentiers côtiers pour découvrir une nature bretonne authentique et préservée."
            }
          ]}
          primaryCta={{ text: "Découvrir les Abers", href: "#decouvrir" }}
          secondaryCta={{ text: "Planifier votre séjour", href: "#planifier" }}
        />
      </section>
      
      <section id="decouvrir">
        <FeatureCards
          sectionTitle="Découvrez les Trésors des Abers"
          sectionSubtitle="Trois territoires uniques entre terre et mer, où la nature sauvage rencontre l'héritage maritime breton"
          cards={[
            {
              image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2025/08/plouguerneau21alamoureux-d6a2367.jpg",
              title: "Le Phare de l'Île Vierge",
              description: "Plus haut phare d'Europe en pierre de taille, cette merveille de 82 mètres domine majestueusement l'Aber Wrac'h depuis 1902.",
              stat: { value: "82 m", label: "de hauteur" },
              rating: 5
            },
            {
              image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2022/10/123-sb-plouguerneau-balade-camping-du-phare-de-lile-vierge-jusqua-roch-pelguent-hdjeremyjehanin-2024-scaled.jpg",
              title: "GR34 - Sentier des Douaniers",
              description: "Parcourez les sentiers côtiers mythiques et découvrez des panoramas époustouflants sur la côte des légendes bretonne.",
              stat: { value: "350 km", label: "de sentiers" },
              rating: 5
            },
            {
              image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2025/12/113-sb-landeda-point-de-vue-depuis-an-treiz-hdjeremyjehanin-2024-680x453.jpg",
              title: "Les Abers Sauvages",
              description: "Trois rivières marines exceptionnelles offrant des paysages uniques entre dunes, rochers de granit et eaux turquoise.",
              stat: { value: "3", label: "abers uniques" },
              rating: 5
            }
          ]}
        />
      </section>

      <section id="patrimoine">
        <StatsSection
          image="https://www.abers-tourisme.com/assets/uploads/sites/8/2025/08/plouguerneau21alamoureux-d6a2367.jpg"
          eyebrow="Notre Patrimoine"
          title="Le Phare de l'Île Vierge, Géant des Mers"
          description="Monument historique et plus haut phare d'Europe en pierre de taille, le Phare de l'Île Vierge guide les marins depuis plus d'un siècle. Ses 365 marches vous mènent vers un panorama exceptionnel sur tout le littoral des Abers."
          stats={[
            { value: "82 m", label: "de hauteur" },
            { value: "365", label: "marches" },
            { value: "1902", label: "année de construction" },
            { value: "27 km", label: "de portée lumineuse" }
          ]}
          cta={{ text: "Visiter le phare", href: "#phare" }}
        />
      </section>

      <section id="experiences">
        <FilterableGrid
          sectionTitle="Nos Expériences Authentiques"
          categories={["Nautique", "Randonnée", "Patrimoine", "Gastronomie"]}
          items={[
            {
              image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2022/08/kayak-ile-vierge-clo-et-clem-680x453.jpg",
              title: "Kayak dans les Abers",
              category: "Nautique",
              price: "À partir de 35€",
              duration: "2h30",
              rating: 5,
              cta: "Réserver"
            },
            {
              image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2022/10/123-sb-plouguerneau-balade-camping-du-phare-de-lile-vierge-jusqua-roch-pelguent-hdjeremyjehanin-2024-scaled.jpg",
              title: "GR34 — Sentier des Douaniers",
              category: "Randonnée",
              duration: "Journée",
              rating: 5,
              cta: "Explorer le parcours"
            },
            {
              image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2025/08/plouguerneau21alamoureux-d6a2367.jpg",
              title: "Route des Phares",
              category: "Patrimoine",
              duration: "½ journée",
              rating: 5,
              cta: "Découvrir l'itinéraire"
            },
            {
              image: "https://cdt29.media.tourinsoft.eu/upload/Goeland-Toque-2025--6-.jpg",
              title: "Le Goéland Toqué",
              category: "Gastronomie",
              price: "À partir de 16€",
              duration: "Repas",
              rating: 4,
              cta: "Réserver une table"
            },
            {
              image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2025/12/113-sb-landeda-point-de-vue-depuis-an-treiz-hdjeremyjehanin-2024-680x453.jpg",
              title: "Point de vue An Treiz",
              category: "Randonnée",
              duration: "1h",
              rating: 5,
              cta: "Voir l'itinéraire"
            },
            {
              image: "https://cdt29.media.tourinsoft.eu/upload/L-escale-2025--1--3.jpg",
              title: "L'Escale Gourmande",
              category: "Gastronomie",
              price: "À partir de 25€",
              duration: "Repas",
              rating: 5,
              cta: "Découvrir la carte"
            }
          ]}
        />
      </section>

      <section id="galerie">
        <GalleryMasonry
          sectionTitle="Galerie Photos"
          images={[
            { url: "https://www.abers-tourisme.com/assets/uploads/sites/8/2025/08/plouguerneau21alamoureux-d6a2367.jpg", alt: "Phare de Lanvaon, au printemps, à Plouguerneau, Pays des Abers", title: "Phare de Lanvaon" },
            { url: "https://www.abers-tourisme.com/assets/uploads/sites/8/2022/08/kayak-ile-vierge-clo-et-clem-680x453.jpg", alt: "Kayak - île vierge", title: "Kayak Île Vierge" },
            { url: "https://www.abers-tourisme.com/assets/uploads/sites/8/2025/12/113-sb-landeda-point-de-vue-depuis-an-treiz-hdjeremyjehanin-2024-680x453.jpg", alt: "une mère et son fils au point de vue sur l'Aber Benoît s'appelant An Treiz à Landéda", title: "An Treiz" },
            { url: "https://www.abers-tourisme.com/assets/uploads/sites/8/2022/10/123-sb-plouguerneau-balade-camping-du-phare-de-lile-vierge-jusqua-roch-pelguent-hdjeremyjehanin-2024-scaled.jpg", alt: "deux amies se promenant le long du GR34 à Plouguerneau", title: "GR34" },
            { url: "https://cdt29.media.tourinsoft.eu/upload/Goeland-Toque-2025--6-.jpg", alt: "Goéland Toqué 2025 (6)", title: "Gastronomie" },
            { url: "https://cdt29.media.tourinsoft.eu/upload/L-escale-2025--1--3.jpg", alt: "L'escale 2025 (1)", title: "L'Escale" },
            { url: "https://cdt29.media.tourinsoft.eu/upload/Auberge-du-pont-2025.jpg", alt: "Auberge du pont 2025", title: "Auberge du Pont" },
            { url: "https://cdt29.media.tourinsoft.eu/upload/Manoir-de-Trouzilit-2024--3-.jpg", alt: "Manoir de Trouzilit 2024 (3)", title: "Patrimoine" }
          ]}
        />
      </section>

      <section id="newsletter">
        <NewsletterCTA
          title="Restez Connecté aux Abers"
          subtitle="Recevez nos bons plans, événements et actualités directement dans votre boîte mail pour ne rien manquer de la vie des Abers."
          backgroundImage="https://www.abers-tourisme.com/assets/uploads/sites/8/2025/12/113-sb-landeda-point-de-vue-depuis-an-treiz-hdjeremyjehanin-2024-680x453.jpg"
          buttonText="S'inscrire à la newsletter"
        />
      </section>
      <Footer />
    </>
  );
}