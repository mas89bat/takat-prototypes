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
              eyebrow: "Escale Lumineuse",
              title: "Découvrez la Route des Phares du Pays des Abers",
              subtitle: "Entre terre et mer, explorez les phares légendaires de la côte bretonne et vivez une expérience intense et sauvage."
            },
            {
              image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2025/08/plouguerneau21alamoureux-d6a2367.jpg",
              eyebrow: "Phares Emblématiques",
              title: "Les Sentinelles de l'Aber Wrac'h",
              subtitle: "Découvrez le phare de l'Île Vierge, le plus haut d'Europe, et explorez les paysages incomparables des Abers."
            },
            {
              image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2025/12/113-sb-landeda-point-de-vue-depuis-an-treiz-hdjeremyjehanin-2024-680x453.jpg",
              eyebrow: "Paysages Sauvages",
              title: "Le Charme des Abers en Bretagne",
              subtitle: "Laissez-vous séduire par la diversité des paysages entre l'Aber Wrac'h et l'Aber Benoît."
            },
            {
              image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2022/08/kayak-ile-vierge-clo-et-clem-680x453.jpg",
              eyebrow: "Aventures Nautiques",
              title: "Kayak & Activités en Plein Air",
              subtitle: "Profitez d'un large choix d'activités nautiques et sportives dans un environnement naturel préservé."
            }
          ]}
          primaryCta={{ text: "Découvrir les Abers", href: "#decouvrir" }}
          secondaryCta={{ text: "Nos Activités", href: "#activites" }}
        />
      </section>
      
      <section id="decouvrir">
        <FeatureCards
          sectionTitle="Les Abers : Paysages Incomparables"
          sectionSubtitle="Le Pays des Abers va vous étonner, vous charmer et vous conquérir par la diversité de ses paysages entre terre et mer."
          cards={[
            {
              image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2025/08/plouguerneau21alamoureux-d6a2367.jpg",
              title: "Phare de Lanvaon",
              description: "Il doit sa forme originale et surprenante à sa fonction qui consiste à signaler l'entrée dans le port.",
              stat: { value: "Unique", label: "en forme" },
              rating: 5
            },
            {
              image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2022/10/123-sb-plouguerneau-balade-camping-du-phare-de-lile-vierge-jusqua-roch-pelguent-hdjeremyjehanin-2024-680x509.jpg",
              title: "Le Phare de l'Île Vierge",
              description: "Situé à plus d'un kilomètre des côtes, le plus haut phare d'Europe vous attend pour une découverte exceptionnelle.",
              stat: { value: "82 m", label: "de hauteur" },
              rating: 5
            },
            {
              image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2025/12/113-sb-landeda-point-de-vue-depuis-an-treiz-hdjeremyjehanin-2024-680x453.jpg",
              title: "Paysages Sauvages des Abers",
              description: "Une sortie en kayak dans l'Aber Wrac'h ou une randonnée le long de l'Aber-Benoît pour apprécier la richesse naturelle.",
              stat: { value: "2", label: "abers" },
              rating: 5
            }
          ]}
        />
      </section>

      <section id="patrimoine">
        <StatsSection
          image="https://www.abers-tourisme.com/assets/uploads/sites/8/2025/08/plouguerneau21alamoureux-d6a2367.jpg"
          eyebrow="Notre Patrimoine Maritime"
          title="Le Phare de l'Île Vierge - Géant des Mers"
          description="Le plus haut phare d'Europe en pierre de taille domine l'Aber Wrac'h. Les eaux turquoise et les terrasses du front de mer vous feront rêver, idéal pour admirer ce site exceptionnel."
          stats={[
            { value: "82 m", label: "de hauteur" },
            { value: "365", label: "marches" },
            { value: "1 km", label: "des côtes" },
            { value: "1902", label: "année" }
          ]}
          cta={{ text: "Découvrir le Phare", href: "#phare" }}
        />
      </section>

      <section id="activites">
        <FilterableGrid
          sectionTitle="Nos Tops Intense & Sauvage"
          categories={["Nautique", "Randonnée", "Patrimoine", "Gastronomie"]}
          items={[
            {
              image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2022/08/kayak-ile-vierge-clo-et-clem-680x453.jpg",
              title: "Kayak dans les Abers",
              category: "Nautique",
              duration: "2h-4h",
              rating: 5,
              cta: "Découvrir l'activité"
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
              title: "Route des Phares",
              category: "Patrimoine",
              duration: "½ journée",
              rating: 5,
              cta: "Suivre la route"
            },
            {
              image: "https://cdt29.media.tourinsoft.eu/upload/Goeland-Toque-2025--6-.jpg?width=2560&height=2560",
              title: "Le Goéland Toqué",
              category: "Gastronomie",
              price: "À partir de 16€",
              rating: 4,
              cta: "Réserver une table"
            },
            {
              image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2025/12/113-sb-landeda-point-de-vue-depuis-an-treiz-hdjeremyjehanin-2024-680x453.jpg",
              title: "Point de Vue An Treiz",
              category: "Randonnée",
              duration: "1h",
              rating: 5,
              cta: "Voir l'itinéraire"
            },
            {
              image: "https://cdt29.media.tourinsoft.eu/upload/Auberge-du-pont-2025.jpg?width=2560&height=2560",
              title: "Auberge du Pont",
              category: "Gastronomie",
              price: "Menu du jour",
              rating: 4,
              cta: "Découvrir la carte"
            }
          ]}
        />
      </section>

      <section id="galerie">
        <GalleryMasonry
          sectionTitle="Galerie Photos des Abers"
          images={[
            { url: "https://www.abers-tourisme.com/assets/uploads/sites/8/2022/10/123-sb-plouguerneau-balade-camping-du-phare-de-lile-vierge-jusqua-roch-pelguent-hdjeremyjehanin-2024-scaled.jpg", alt: "deux amies se promenant le long du GR34 à Plouguerneau", title: "GR34 Plouguerneau" },
            { url: "https://www.abers-tourisme.com/assets/uploads/sites/8/2025/08/plouguerneau21alamoureux-d6a2367.jpg", alt: "Phare de Lanvaon, au printemps, à Plouguerneau, Pays des Abers", title: "Phare de Lanvaon" },
            { url: "https://www.abers-tourisme.com/assets/uploads/sites/8/2022/08/kayak-ile-vierge-clo-et-clem-680x453.jpg", alt: "Kayak - île vierge", title: "Kayak Île Vierge" },
            { url: "https://www.abers-tourisme.com/assets/uploads/sites/8/2025/12/113-sb-landeda-point-de-vue-depuis-an-treiz-hdjeremyjehanin-2024-680x453.jpg", alt: "une mère et son fils au point de vue sur l'Aber Benoît s'appelant An Treiz à Landéda", title: "Point de Vue An Treiz" },
            { url: "https://cdt29.media.tourinsoft.eu/upload/Goeland-Toque-2025--6-.jpg?width=2560&height=2560", alt: "Goéland Toqué 2025 (6)", title: "Le Goéland Toqué" },
            { url: "https://cdt29.media.tourinsoft.eu/upload/L-escale-2025--3--3.jpg?width=2560&height=2560", alt: "L'escale 2025 (3)", title: "L'Escale" },
            { url: "https://cdt29.media.tourinsoft.eu/upload/Auberge-du-pont-2025.jpg?width=2560&height=2560", alt: "Auberge du pont 2025", title: "Auberge du Pont" },
            { url: "https://cdt29.media.tourinsoft.eu/upload/Manoir-de-Trouzilit-2024--3-.jpg?width=2560&height=2560", alt: "Manoir de Trouzilit 2024 (3)", title: "Manoir de Trouzilit" }
          ]}
        />
      </section>

      <section id="newsletter">
        <NewsletterCTA
          title="Votre Inspiration dans les Abers"
          subtitle="Recevez nos bons plans, actualités et suggestions d'escapades pour découvrir les trésors cachés du Pays des Abers."
          backgroundImage="https://www.abers-tourisme.com/assets/uploads/sites/8/2025/12/113-sb-landeda-point-de-vue-depuis-an-treiz-hdjeremyjehanin-2024-680x453.jpg"
          buttonText="S'inscrire à la newsletter"
        />
      </section>
      
      <Footer />
    </>
  );
}