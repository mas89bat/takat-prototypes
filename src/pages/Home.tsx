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
              eyebrow: "Pays des Abers",
              title: "La Route des Phares",
              subtitle: "Découvrez les sentinelles de la mer et leurs secrets le long de la côte bretonne sauvage."
            },
            {
              image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2025/08/plouguerneau21alamoureux-d6a2367.jpg",
              eyebrow: "Phare Emblématique",
              title: "Le Phare de l'Île Vierge",
              subtitle: "Le plus haut phare d'Europe en pierre de taille domine l'Aber Wrac'h depuis 1902."
            },
            {
              image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2025/12/113-sb-landeda-point-de-vue-depuis-an-treiz-hdjeremyjehanin-2024-680x453.jpg",
              eyebrow: "Paysages Sauvages",
              title: "L'Aber Benoît",
              subtitle: "Le plus sauvage des abers avec ses eaux cristallines et ses panoramas à couper le souffle."
            },
            {
              image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2022/08/kayak-ile-vierge-clo-et-clem-680x453.jpg",
              eyebrow: "Aventures Nautiques",
              title: "Kayak dans les Abers",
              subtitle: "Explorez les criques secrètes et les eaux turquoise au rythme des marées."
            }
          ]}
          primaryCta={{ text: "Découvrir la Route", href: "#decouvrir" }}
          secondaryCta={{ text: "Nos Activités", href: "#experiences" }}
        />
      </section>
      
      <section id="decouvrir">
        <FeatureCards
          sectionTitle="Les Sentinelles de la Mer"
          sectionSubtitle="Découvrez les phares emblématiques qui gardent nos côtes bretonnes"
          cards={[
            {
              image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2025/08/plouguerneau21alamoureux-d6a2367.jpg",
              title: "Phare de l'Île Vierge",
              description: "Le plus haut phare d'Europe en pierre de taille, accessible en vedette depuis l'Aber Wrac'h. 365 marches vous attendent pour une vue panoramique exceptionnelle.",
              stat: { value: "82 m", label: "de hauteur" },
              rating: 5
            },
            {
              image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2025/08/plouguerneau21alamoureux-d6a2367.jpg",
              title: "Phare de Lanvaon",
              description: "Sa forme originale et surprenante signale l'entrée du port de Plouguerneau. Un phare unique par son architecture remarquable.",
              stat: { value: "1902", label: "année" },
              rating: 4
            },
            {
              image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2022/10/123-sb-plouguerneau-balade-camping-du-phare-de-lile-vierge-jusqua-roch-pelguent-hdjeremyjehanin-2024-680x509.jpg",
              title: "Route des Phares",
              description: "Un circuit emblématique le long du GR34 reliant tous les phares de la côte. Randonnée iodée entre terre et mer.",
              stat: { value: "27 km", label: "de portée" },
              rating: 5
            }
          ]}
        />
      </section>

      <section id="patrimoine">
        <StatsSection
          image="https://www.abers-tourisme.com/assets/uploads/sites/8/2025/08/plouguerneau21alamoureux-d6a2367.jpg"
          eyebrow="Notre Patrimoine"
          title="Le Phare de l'Île Vierge"
          description="Plus haut phare d'Europe en pierre de taille, le Phare de l'Île Vierge domine l'Aber Wrac'h depuis 1902. Une prouesse architecturale et un symbole de la Bretagne maritime."
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
          sectionTitle="Nos Expériences Sauvages"
          categories={["Nautique", "Randonnée", "Culture", "Gastronomie"]}
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
              image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2022/10/123-sb-plouguerneau-balade-camping-du-phare-de-lile-vierge-jusqua-roch-pelguent-hdjeremyjehanin-2024-680x509.jpg",
              title: "GR34 - Sentier des Douaniers",
              category: "Randonnée",
              duration: "Journée",
              rating: 5,
              cta: "Explorer le parcours"
            },
            {
              image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2025/08/plouguerneau21alamoureux-d6a2367.jpg",
              title: "Visite du Phare de l'Île Vierge",
              category: "Culture",
              price: "Tarif groupe",
              duration: "1h30",
              rating: 5,
              cta: "Découvrir"
            },
            {
              image: "https://cdt29.media.tourinsoft.eu/upload/Goeland-Toque-2025--6-.jpg",
              title: "Le Goéland Toqué",
              category: "Gastronomie",
              price: "Formule 16€",
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
              cta: "Voir l'itinéraire"
            },
            {
              image: "https://cdt29.media.tourinsoft.eu/upload/L-escale-2025--3--3.jpg",
              title: "L'Escale Restaurant",
              category: "Gastronomie",
              price: "À la carte",
              rating: 4,
              cta: "Découvrir la carte"
            }
          ]}
        />
      </section>

      <section id="galerie">
        <GalleryMasonry
          sectionTitle="Galerie Photos"
          images={[
            { url: "https://www.abers-tourisme.com/assets/uploads/sites/8/2022/10/123-sb-plouguerneau-balade-camping-du-phare-de-lile-vierge-jusqua-roch-pelguent-hdjeremyjehanin-2024-scaled.jpg", alt: "deux amies se promenant le long du GR34 à Plouguerneau", title: "GR34" },
            { url: "https://www.abers-tourisme.com/assets/uploads/sites/8/2025/08/plouguerneau21alamoureux-d6a2367.jpg", alt: "Phare de Lanvaon, au printemps, à Plouguerneau, Pays des Abers", title: "Phare de Lanvaon" },
            { url: "https://www.abers-tourisme.com/assets/uploads/sites/8/2022/08/kayak-ile-vierge-clo-et-clem-680x453.jpg", alt: "Kayak - île vierge", title: "Kayak" },
            { url: "https://www.abers-tourisme.com/assets/uploads/sites/8/2025/12/113-sb-landeda-point-de-vue-depuis-an-treiz-hdjeremyjehanin-2024-680x453.jpg", alt: "une mère et son fils au point de vue sur l'Aber Benoît s'appelant An Treiz à Landéda", title: "An Treiz" },
            { url: "https://cdt29.media.tourinsoft.eu/upload/Goeland-Toque-2025--6-.jpg", alt: "Goéland Toqué 2025 (6)", title: "Gastronomie" },
            { url: "https://cdt29.media.tourinsoft.eu/upload/L-escale-2025--3--3.jpg", alt: "L'escale 2025 (3)", title: "L'Escale" },
            { url: "https://cdt29.media.tourinsoft.eu/upload/Auberge-du-pont-2025.jpg", alt: "Auberge du pont 2025", title: "Auberge du Pont" },
            { url: "https://cdt29.media.tourinsoft.eu/upload/Manoir-de-Trouzilit-2024--3-.jpg", alt: "Manoir de Trouzilit 2024 (3)", title: "Patrimoine" }
          ]}
        />
      </section>

      <section id="newsletter">
        <NewsletterCTA
          title="Restez Connecté aux Abers"
          subtitle="Recevez nos bons plans, événements et actualités directement dans votre boîte mail."
          backgroundImage="https://www.abers-tourisme.com/assets/uploads/sites/8/2025/12/113-sb-landeda-point-de-vue-depuis-an-treiz-hdjeremyjehanin-2024-680x453.jpg"
          buttonText="S'inscrire"
        />
      </section>
      
      <Footer />
    </>
  );
}