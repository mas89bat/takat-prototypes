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
              eyebrow: "Bienvenue dans les Abers",
              title: "La Route des Phares",
              subtitle: "Découvrez les sentinelles de la mer et leurs secrets le long de la côte bretonne sauvage."
            },
            {
              image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2025/08/plouguerneau21alamoureux-d6a2367.jpg",
              eyebrow: "Phares Emblématiques",
              title: "Le Phare de Lanvaon",
              subtitle: "Une forme surprenante qui signale l'entrée du port dans un cadre naturel préservé."
            },
            {
              image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2022/08/kayak-ile-vierge-clo-et-clem-680x453.jpg",
              eyebrow: "Aventures Nautiques",
              title: "Kayak vers l'Île Vierge",
              subtitle: "Naviguez vers le plus haut phare d'Europe en pierre de taille dans des eaux turquoise."
            },
            {
              image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2025/12/113-sb-landeda-point-de-vue-depuis-an-treiz-hdjeremyjehanin-2024-680x453.jpg",
              eyebrow: "Paysages Incomparables",
              title: "Le Charme des Abers",
              subtitle: "Laissez-vous séduire par la diversité des paysages entre terre et mer."
            }
          ]}
          primaryCta={{ text: "Découvrir les Phares", href: "#decouvrir" }}
          secondaryCta={{ text: "Nos Expériences", href: "#experiences" }}
        />
      </section>
      
      <section id="decouvrir">
        <FeatureCards
          sectionTitle="Les Sentinelles de la Mer"
          sectionSubtitle="Découvrez les phares emblématiques qui veillent sur nos côtes depuis des siècles"
          cards={[
            {
              image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2025/08/plouguerneau21alamoureux-d6a2367.jpg",
              title: "Phare de Lanvaon",
              description: "Une forme originale et surprenante qui signale l'entrée dans le port. Un phare unique par son architecture atypique.",
              stat: { value: "1884", label: "année" },
              rating: 5
            },
            {
              image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2022/08/kayak-ile-vierge-clo-et-clem-680x453.jpg",
              title: "Le Phare de l'Île Vierge",
              description: "Le plus haut phare d'Europe en pierre de taille domine les eaux turquoise. Un site exceptionnel accessible en kayak.",
              stat: { value: "82 m", label: "de hauteur" },
              rating: 5
            },
            {
              image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2025/12/113-sb-landeda-point-de-vue-depuis-an-treiz-hdjeremyjehanin-2024-680x453.jpg",
              title: "Points de Vue Spectaculaires",
              description: "Des panoramas à couper le souffle sur les abers et leurs paysages incomparables. Idéal pour la contemplation.",
              stat: { value: "350 km", label: "de côtes" },
              rating: 5
            }
          ]}
        />
      </section>

      <section id="patrimoine">
        <StatsSection
          image="https://www.abers-tourisme.com/assets/uploads/sites/8/2022/10/123-sb-plouguerneau-balade-camping-du-phare-de-lile-vierge-jusqua-roch-pelguent-hdjeremyjehanin-2024-scaled.jpg"
          eyebrow="Notre Patrimoine"
          title="Le Pays des Abers"
          description="Laissez-vous séduire par la diversité de nos paysages. Une sortie en kayak dans l'Aber Wrac'h ou une randonnée le long de l'Aber-Benoit vous permettront d'apprécier la richesse naturelle incomparable de notre pays."
          stats={[
            { value: "3", label: "abers uniques" },
            { value: "350 km", label: "de littoral" },
            { value: "12+", label: "phares" },
            { value: "4.8", label: "satisfaction" }
          ]}
          cta={{ text: "Explorer les Abers", href: "#experiences" }}
        />
      </section>

      <section id="experiences">
        <FilterableGrid
          sectionTitle="Nos Expériences Intense & Sauvage"
          categories={["Nautique", "Randonnée", "Patrimoine", "Gastronomie"]}
          items={[
            {
              image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2022/08/kayak-ile-vierge-clo-et-clem-680x453.jpg",
              title: "Kayak vers l'Île Vierge",
              category: "Nautique",
              price: "À partir de 35€",
              duration: "3h",
              rating: 5,
              cta: "Réserver"
            },
            {
              image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2022/10/123-sb-plouguerneau-balade-camping-du-phare-de-lile-vierge-jusqua-roch-pelguent-hdjeremyjehanin-2024-680x509.jpg",
              title: "GR34 - Sentier des Douaniers",
              category: "Randonnée",
              duration: "Journée complète",
              rating: 5,
              cta: "Découvrir le parcours"
            },
            {
              image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2025/08/plouguerneau21alamoureux-d6a2367.jpg",
              title: "Visite du Phare de Lanvaon",
              category: "Patrimoine",
              price: "8€",
              duration: "1h30",
              rating: 4,
              cta: "Visiter"
            },
            {
              image: "https://cdt29.media.tourinsoft.eu/upload/Goeland-Toque-2025--6-.jpg",
              title: "Le Goéland Toqué",
              category: "Gastronomie",
              price: "Menu à 16€",
              duration: "Déjeuner",
              rating: 4,
              cta: "Réserver une table"
            },
            {
              image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2025/12/113-sb-landeda-point-de-vue-depuis-an-treiz-hdjeremyjehanin-2024-680x453.jpg",
              title: "Point de Vue An Treiz",
              category: "Randonnée",
              duration: "30 min",
              rating: 5,
              cta: "Localiser"
            },
            {
              image: "https://cdt29.media.tourinsoft.eu/upload/Crepe-Trouzilit.jpg",
              title: "Crêperie de Trouzilit",
              category: "Gastronomie",
              price: "À partir de 8€",
              duration: "Repas",
              rating: 5,
              cta: "Découvrir"
            }
          ]}
        />
      </section>

      <section id="galerie">
        <GalleryMasonry
          sectionTitle="Galerie Photos"
          images={[
            {
              url: "https://www.abers-tourisme.com/assets/uploads/sites/8/2022/10/123-sb-plouguerneau-balade-camping-du-phare-de-lile-vierge-jusqua-roch-pelguent-hdjeremyjehanin-2024-scaled.jpg",
              alt: "deux amies se promenant le long du GR34 à Plouguerneau",
              title: "GR34 Plouguerneau"
            },
            {
              url: "https://www.abers-tourisme.com/assets/uploads/sites/8/2025/08/plouguerneau21alamoureux-d6a2367.jpg",
              alt: "Phare de Lanvaon, au printemps, à Plouguerneau, Pays des Abers",
              title: "Phare de Lanvaon"
            },
            {
              url: "https://www.abers-tourisme.com/assets/uploads/sites/8/2022/08/kayak-ile-vierge-clo-et-clem-680x453.jpg",
              alt: "Kayak - île vierge",
              title: "Kayak Île Vierge"
            },
            {
              url: "https://www.abers-tourisme.com/assets/uploads/sites/8/2025/12/113-sb-landeda-point-de-vue-depuis-an-treiz-hdjeremyjehanin-2024-680x453.jpg",
              alt: "une mère et son fils au point de vue sur l'Aber Benoît s'appelant An Treiz à Landéda",
              title: "An Treiz - Aber Benoît"
            },
            {
              url: "https://cdt29.media.tourinsoft.eu/upload/Goeland-Toque-2025--6-.jpg",
              alt: "Goéland Toqué 2025 (6)",
              title: "Goéland Toqué"
            },
            {
              url: "https://cdt29.media.tourinsoft.eu/upload/L-escale-2025--3--3.jpg",
              alt: "L'escale 2025 (3)",
              title: "L'Escale"
            },
            {
              url: "https://cdt29.media.tourinsoft.eu/upload/Crepe-Trouzilit.jpg",
              alt: "Crêpe Trouzilit",
              title: "Crêperie Trouzilit"
            },
            {
              url: "https://cdt29.media.tourinsoft.eu/upload/Auberge-du-pont-2025.jpg",
              alt: "Auberge du pont 2025",
              title: "Auberge du Pont"
            }
          ]}
        />
      </section>

      <section id="newsletter">
        <NewsletterCTA
          title="Votre Inspiration dans les Abers"
          subtitle="Recevez nos bons plans, événements et actualités pour profiter pleinement de votre séjour dans le Pays des Abers."
          backgroundImage="https://www.abers-tourisme.com/assets/uploads/sites/8/2025/12/113-sb-landeda-point-de-vue-depuis-an-treiz-hdjeremyjehanin-2024-680x453.jpg"
          buttonText="S'inscrire à la newsletter"
        />
      </section>
      
      <Footer />
    </>
  );
}