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
              subtitle: "Entre terre et mer, explorez les sentinelles de nos côtes bretonnes et leurs paysages incomparables."
            },
            {
              image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2025/08/plouguerneau21alamoureux-d6a2367.jpg",
              eyebrow: "Patrimoine Maritime",
              title: "Le Phare de Lanvaon",
              subtitle: "Une silhouette unique qui guide les marins depuis des générations vers nos ports accueillants."
            },
            {
              image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2025/12/113-sb-landeda-point-de-vue-depuis-an-treiz-hdjeremyjehanin-2024-680x453.jpg",
              eyebrow: "Paysages Sauvages",
              title: "Le Charme des Abers",
              subtitle: "Des points de vue exceptionnels sur l'Aber Benoît et des panoramas à couper le souffle."
            },
            {
              image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2022/08/kayak-ile-vierge-clo-et-clem-680x453.jpg",
              eyebrow: "Aventures Nautiques",
              title: "Kayak vers l'Île Vierge",
              subtitle: "Pagayez vers le phare le plus haut d'Europe et découvrez des eaux cristallines inoubliables."
            }
          ]}
          primaryCta={{ text: "Découvrir les Abers", href: "#decouvrir" }}
          secondaryCta={{ text: "Planifier Votre Séjour", href: "#planifier" }}
        />
      </section>
      
      <section id="decouvrir">
        <FeatureCards
          sectionTitle="Découvrez les Trois Abers"
          sectionSubtitle="Trois rivières marines aux caractères uniques, entre nature sauvage et patrimoine maritime"
          cards={[
            {
              image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2022/10/123-sb-plouguerneau-balade-camping-du-phare-de-lile-vierge-jusqua-roch-pelguent-hdjeremyjehanin-2024-scaled.jpg",
              title: "L'Aber Wrac'h",
              description: "Le plus grand des abers, célèbre pour son phare de l'Île Vierge et ses eaux turquoise. Paradis des plaisanciers et des amateurs de sports nautiques.",
              stat: { value: "32 km", label: "de côtes" },
              rating: 5
            },
            {
              image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2025/12/113-sb-landeda-point-de-vue-depuis-an-treiz-hdjeremyjehanin-2024-680x453.jpg",
              title: "L'Aber Benoît",
              description: "Le plus sauvage et authentique, réputé pour ses parcs ostréicoles et ses sentiers de randonnée préservés le long de ses rives.",
              stat: { value: "200+", label: "espèces d'oiseaux" },
              rating: 5
            },
            {
              image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2025/08/plouguerneau21alamoureux-d6a2367.jpg",
              title: "L'Aber Ildut",
              description: "Le plus petit mais le plus spectaculaire, avec ses chaos granitiques et ses criques secrètes. Un havre de paix pour les contemplateurs.",
              stat: { value: "15 km", label: "de découvertes" },
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
          description="Plus haut phare d'Europe en pierre de taille, cette merveille de 1902 domine majestueusement l'Aber Wrac'h. Un monument incontournable qui fascine les visiteurs du monde entier."
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
          categories={["Nautique", "Randonnée", "Gastronomie", "Patrimoine"]}
          items={[
            {
              image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2022/08/kayak-ile-vierge-clo-et-clem-680x453.jpg",
              title: "Kayak dans l'Aber Wrac'h",
              category: "Nautique",
              price: "À partir de 35€",
              duration: "2h30",
              rating: 5,
              cta: "Réserver maintenant"
            },
            {
              image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2022/10/123-sb-plouguerneau-balade-camping-du-phare-de-lile-vierge-jusqua-roch-pelguent-hdjeremyjehanin-2024-680x509.jpg",
              title: "GR34 — Sentier des Douaniers",
              category: "Randonnée",
              duration: "Journée complète",
              rating: 5,
              cta: "Explorer le parcours"
            },
            {
              image: "https://cdt29.media.tourinsoft.eu/upload/Goeland-Toque-2025--6-.jpg?width=2560&height=2560",
              title: "Dégustation d'Huîtres de l'Aber Benoît",
              category: "Gastronomie",
              price: "À partir de 18€",
              duration: "1h30",
              rating: 5,
              cta: "Réserver une table"
            },
            {
              image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2025/08/plouguerneau21alamoureux-d6a2367.jpg",
              title: "Visite du Phare de Lanvaon",
              category: "Patrimoine",
              price: "Gratuit",
              duration: "45 min",
              rating: 4,
              cta: "En savoir plus"
            },
            {
              image: "https://cdt29.media.tourinsoft.eu/upload/L-escale-2025--3--3.jpg?width=2560&height=2560",
              title: "Croisière vers l'Île Vierge",
              category: "Nautique",
              price: "À partir de 28€",
              duration: "3h",
              rating: 5,
              cta: "Réserver la croisière"
            },
            {
              image: "https://cdt29.media.tourinsoft.eu/upload/Goeland-Toque-2025.jpeg?width=2560&height=2560",
              title: "Restaurant Le Goéland Toqué",
              category: "Gastronomie",
              price: "Menu à 16€",
              duration: "Midi et soir",
              rating: 4,
              cta: "Réserver une table"
            }
          ]}
        />
      </section>

      <section id="galerie">
        <GalleryMasonry
          sectionTitle="Galerie Photos"
          images={[
            { url: "https://www.abers-tourisme.com/assets/uploads/sites/8/2022/10/123-sb-plouguerneau-balade-camping-du-phare-de-lile-vierge-jusqua-roch-pelguent-hdjeremyjehanin-2024-scaled.jpg", alt: "Randonneurs sur le GR34 près du phare de l'Île Vierge", title: "GR34 Plouguerneau" },
            { url: "https://www.abers-tourisme.com/assets/uploads/sites/8/2025/08/plouguerneau21alamoureux-d6a2367.jpg", alt: "Phare de Lanvaon au printemps", title: "Phare de Lanvaon" },
            { url: "https://www.abers-tourisme.com/assets/uploads/sites/8/2022/08/kayak-ile-vierge-clo-et-clem-680x453.jpg", alt: "Kayak près de l'Île Vierge", title: "Kayak Île Vierge" },
            { url: "https://www.abers-tourisme.com/assets/uploads/sites/8/2025/12/113-sb-landeda-point-de-vue-depuis-an-treiz-hdjeremyjehanin-2024-680x453.jpg", alt: "Point de vue sur l'Aber Benoît depuis An Treiz", title: "Aber Benoît" },
            { url: "https://cdt29.media.tourinsoft.eu/upload/Goeland-Toque-2025--6-.jpg?width=2560&height=2560", alt: "Spécialités du Goéland Toqué", title: "Gastronomie" },
            { url: "https://cdt29.media.tourinsoft.eu/upload/L-escale-2025--3--3.jpg?width=2560&height=2560", alt: "L'Escale restaurant", title: "L'Escale" },
            { url: "https://cdt29.media.tourinsoft.eu/upload/Goeland-Toque-2025--7-.jpg?width=2560&height=2560", alt: "Intérieur du Goéland Toqué", title: "Ambiance bretonne" },
            { url: "https://cdt29.media.tourinsoft.eu/upload/L-escale-2025--2--3.jpg?width=2560&height=2560", alt: "Terrasse de L'Escale", title: "Terrasse vue mer" }
          ]}
        />
      </section>

      <section id="newsletter">
        <NewsletterCTA
          title="Restez Connecté aux Abers"
          subtitle="Recevez nos bons plans, événements et actualités directement dans votre boîte mail. Ne manquez aucune découverte du Pays des Abers !"
          backgroundImage="https://www.abers-tourisme.com/assets/uploads/sites/8/2025/12/113-sb-landeda-point-de-vue-depuis-an-treiz-hdjeremyjehanin-2024-680x453.jpg"
          buttonText="S'inscrire à la newsletter"
        />
      </section>
      
      <Footer />
    </>
  );
}