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
              title: "Découvrez la Route des Phares",
              subtitle: "Escale lumineuse entre terre et mer, explorez les sentinelles de nos côtes bretonnes."
            },
            {
              image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2025/08/plouguerneau21alamoureux-d6a2367.jpg",
              eyebrow: "Phares Légendaires",
              title: "Le Phare de l'Île Vierge",
              subtitle: "Le plus haut phare d'Europe en pierre de taille vous attend au cœur des eaux turquoise."
            },
            {
              image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2025/12/113-sb-landeda-point-de-vue-depuis-an-treiz-hdjeremyjehanin-2024-680x453.jpg",
              eyebrow: "Paysages Sauvages",
              title: "L'Intense & Sauvage des Abers",
              subtitle: "Laissez-vous séduire par la diversité de nos paysages incomparables entre abers et océan."
            },
            {
              image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2022/08/kayak-ile-vierge-clo-et-clem-680x453.jpg",
              eyebrow: "Aventures Nautiques",
              title: "Kayak dans les Abers",
              subtitle: "Pagayez au rythme des marées et découvrez nos secrets cachés depuis la mer."
            }
          ]}
          primaryCta={{ text: "Découvrir la Route des Phares", href: "#decouvrir" }}
          secondaryCta={{ text: "Nos Expériences", href: "#experiences" }}
        />
      </section>

      <section id="decouvrir">
        <FeatureCards
          sectionTitle="Les Sentinelles de la Mer"
          sectionSubtitle="Découvrez nos phares emblématiques et leurs secrets"
          cards={[
            {
              image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2025/08/plouguerneau21alamoureux-d6a2367.jpg",
              title: "Phare de Lanvaon",
              description: "Il doit sa forme originale et surprenante à sa fonction qui consiste à signaler l'entrée dans le port.",
              stat: { value: "1902", label: "année de construction" },
              rating: 5
            },
            {
              image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2022/08/kayak-ile-vierge-clo-et-clem-680x453.jpg",
              title: "Le Phare de l'Île Vierge",
              description: "Le plus haut d'Europe en pierre de taille, situé à plus d'un kilomètre des côtes dans les eaux turquoise.",
              stat: { value: "82 m", label: "de hauteur" },
              rating: 5
            },
            {
              image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2025/12/113-sb-landeda-point-de-vue-depuis-an-treiz-hdjeremyjehanin-2024-680x453.jpg",
              title: "Paysages des Abers",
              description: "Le charme de paysages incomparables entre l'Aber Wrac'h et l'Aber-Benoît, le plus sauvage.",
              stat: { value: "200 km", label: "de sentiers côtiers" },
              rating: 5
            }
          ]}
        />
      </section>

      <section id="patrimoine">
        <StatsSection
          image="https://www.abers-tourisme.com/assets/uploads/sites/8/2022/10/123-sb-plouguerneau-balade-camping-du-phare-de-lile-vierge-jusqua-roch-pelguent-hdjeremyjehanin-2024-scaled.jpg"
          eyebrow="Notre Patrimoine Maritime"
          title="Le Plus Haut Phare d'Europe"
          description="Le Phare de l'Île Vierge domine l'Aber Wrac'h depuis plus d'un siècle. Cette sentinelle de granit guide les marins vers les eaux turquoise de nos côtes bretonnes."
          stats={[
            { value: "82 m", label: "de hauteur" },
            { value: "365", label: "marches" },
            { value: "1902", label: "année" },
            { value: "27 km", label: "de portée" }
          ]}
          cta={{ text: "Visiter le Phare", href: "#contact" }}
        />
      </section>

      <section id="experiences">
        <FilterableGrid
          sectionTitle="Nos Expériences Intense & Sauvage"
          categories={["Nautique", "Randonnée", "Gastronomie", "Patrimoine"]}
          items={[
            {
              image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2022/08/kayak-ile-vierge-clo-et-clem-680x453.jpg",
              title: "Kayak vers l'Île Vierge",
              category: "Nautique",
              price: "À partir de 35€",
              duration: "2h30",
              rating: 5,
              cta: "Réserver"
            },
            {
              image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2022/10/123-sb-plouguerneau-balade-camping-du-phare-de-lile-vierge-jusqua-roch-pelguent-hdjeremyjehanin-2024-scaled.jpg",
              title: "GR34 - Sentier des Douaniers",
              category: "Randonnée",
              duration: "Journée complète",
              rating: 5,
              cta: "Explorer le parcours"
            },
            {
              image: "https://cdt29.media.tourinsoft.eu/upload/Goeland-Toque-2025--6-.jpg",
              title: "Le Goéland Toqué",
              category: "Gastronomie",
              price: "Formule à 16€",
              duration: "Service midi",
              rating: 4,
              cta: "Réserver une table"
            },
            {
              image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2025/08/plouguerneau21alamoureux-d6a2367.jpg",
              title: "Phare de Lanvaon",
              category: "Patrimoine",
              duration: "1h",
              rating: 5,
              cta: "Découvrir"
            },
            {
              image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2025/12/113-sb-landeda-point-de-vue-depuis-an-treiz-hdjeremyjehanin-2024-680x453.jpg",
              title: "Point de Vue An Treiz",
              category: "Randonnée",
              duration: "30 min",
              rating: 5,
              cta: "Voir l'itinéraire"
            },
            {
              image: "https://cdt29.media.tourinsoft.eu/upload/L-escale-2025--3--3.jpg",
              title: "L'Escale - Cuisine de la Mer",
              category: "Gastronomie",
              price: "À partir de 22€",
              duration: "Service continu",
              rating: 4,
              cta: "Réserver"
            }
          ]}
        />
      </section>

      <section id="galerie">
        <GalleryMasonry
          sectionTitle="Galerie Photos"
          images={[
            { url: "https://www.abers-tourisme.com/assets/uploads/sites/8/2025/08/plouguerneau21alamoureux-d6a2367.jpg", alt: "Phare de Lanvaon au printemps", title: "Phare de Lanvaon" },
            { url: "https://www.abers-tourisme.com/assets/uploads/sites/8/2022/08/kayak-ile-vierge-clo-et-clem-680x453.jpg", alt: "Kayak près de l'Île Vierge", title: "Kayak Île Vierge" },
            { url: "https://www.abers-tourisme.com/assets/uploads/sites/8/2025/12/113-sb-landeda-point-de-vue-depuis-an-treiz-hdjeremyjehanin-2024-680x453.jpg", alt: "Point de vue sur l'Aber Benoît", title: "An Treiz" },
            { url: "https://cdt29.media.tourinsoft.eu/upload/Goeland-Toque-2025--7-.jpg", alt: "Restaurant Le Goéland Toqué", title: "Gastronomie" },
            { url: "https://www.abers-tourisme.com/assets/uploads/sites/8/2022/10/123-sb-plouguerneau-balade-camping-du-phare-de-lile-vierge-jusqua-roch-pelguent-hdjeremyjehanin-2024-scaled.jpg", alt: "Balade le long du GR34", title: "GR34" },
            { url: "https://cdt29.media.tourinsoft.eu/upload/L-escale-2025--1--3.jpg", alt: "Restaurant L'Escale", title: "L'Escale" },
            { url: "https://cdt29.media.tourinsoft.eu/upload/Auberge-du-pont-2025.jpg", alt: "Auberge du Pont", title: "Patrimoine" },
            { url: "https://cdt29.media.tourinsoft.eu/upload/Crepe-Trouzilit.jpg", alt: "Crêperie de Trouzilit", title: "Saveurs Locales" }
          ]}
        />
      </section>

      <section id="newsletter">
        <NewsletterCTA
          title="Restez Connecté aux Abers"
          subtitle="Recevez nos bons plans, événements et actualités des phares directement dans votre boîte mail."
          backgroundImage="https://www.abers-tourisme.com/assets/uploads/sites/8/2025/12/113-sb-landeda-point-de-vue-depuis-an-treiz-hdjeremyjehanin-2024-680x453.jpg"
          buttonText="S'inscrire"
        />
      </section>

      <Footer />
    </>
  );
}