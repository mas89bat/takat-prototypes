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
              eyebrow: "Bienvenue aux Abers",
              title: "Découvrez la Côte des Légendes en Bretagne",
              subtitle: "Des phares mythiques aux paysages sauvages, explorez un territoire d'exception entre terre et mer."
            },
            {
              image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2025/08/plouguerneau21alamoureux-d6a2367.jpg",
              eyebrow: "La Route des Phares",
              title: "Phares et Sentinelles de la Mer",
              subtitle: "Suivez les balises lumineuses qui ont guidé les marins pendant des siècles sur cette côte légendaire."
            },
            {
              image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2025/12/113-sb-landeda-point-de-vue-depuis-an-treiz-hdjeremyjehanin-2024-680x453.jpg",
              eyebrow: "Paysages Incomparables",
              title: "Le Pays des Abers vous Émerveillera",
              subtitle: "Entre chaos granitiques et eaux turquoise, laissez-vous séduire par la diversité de nos territoires."
            },
            {
              image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2022/08/kayak-ile-vierge-clo-et-clem-680x453.jpg",
              eyebrow: "Aventures Nautiques",
              title: "Intense & Sauvage pour tous",
              subtitle: "Kayak, randonnée, observation... Profitez d'un large choix d'activités en pleine nature."
            }
          ]}
          primaryCta={{ text: "Explorer les Abers", href: "#decouvrir" }}
          secondaryCta={{ text: "Nos Activités", href: "#activites" }}
        />
      </section>
      
      <section id="decouvrir">
        <FeatureCards
          sectionTitle="Les Sentinelles de la Mer & leurs Secrets"
          sectionSubtitle="Découvrez les phares emblématiques qui veillent sur la côte des Abers depuis des générations"
          cards={[
            {
              image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2025/08/plouguerneau21alamoureux-d6a2367.jpg",
              title: "Phare de Lanvaon",
              description: "Sa forme originale et surprenante signale l'entrée du port. Un patrimoine maritime unique à découvrir lors de vos randonnées.",
              stat: { value: "1902", label: "année" },
              rating: 5
            },
            {
              image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2022/08/kayak-ile-vierge-clo-et-clem-680x453.jpg",
              title: "Le Phare de l'Île Vierge",
              description: "Le plus haut phare d'Europe en pierre de taille domine l'Aber Wrac'h. Accessible en kayak ou bateau pour une expérience inoubliable.",
              stat: { value: "82 m", label: "de hauteur" },
              rating: 5
            },
            {
              image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2025/12/113-sb-landeda-point-de-vue-depuis-an-treiz-hdjeremyjehanin-2024-680x453.jpg",
              title: "Points de Vue Exceptionnels",
              description: "Des eaux turquoise aux terrasses panoramiques, admirez nos géants des mers depuis les plus beaux belvédères de la côte.",
              stat: { value: "27 km", label: "de portée" }
            }
          ]}
        />
      </section>

      <section id="patrimoine">
        <StatsSection
          image="https://www.abers-tourisme.com/assets/uploads/sites/8/2022/10/123-sb-plouguerneau-balade-camping-du-phare-de-lile-vierge-jusqua-roch-pelguent-hdjeremyjehanin-2024-scaled.jpg"
          eyebrow="Notre Patrimoine Maritime"
          title="Le Charme de ses Paysages Incomparables"
          description="Le Pays des Abers va vous étonner, vous charmer et vous conquérir par la diversité de ses paysages. Une sortie en kayak dans l'Aber Wrac'h ou une randonnée le long de l'Aber-Benoît vous permettront d'apprécier la richesse naturelle incomparable de notre territoire."
          stats={[
            { value: "3", label: "abers uniques" },
            { value: "365", label: "marches" },
            { value: "200+", label: "espèces" },
            { value: "50 km", label: "de côtes" }
          ]}
          cta={{ text: "Découvrir la Route des Phares", href: "#route-phares" }}
        />
      </section>

      <section id="activites">
        <FilterableGrid
          sectionTitle="Nos Tops Intense & Sauvage"
          categories={["Nautique", "Randonnée", "Culture", "Gastronomie"]}
          items={[
            {
              image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2022/08/kayak-ile-vierge-clo-et-clem-680x453.jpg",
              title: "Kayak vers l'Île Vierge",
              category: "Nautique",
              duration: "2h30",
              rating: 5,
              cta: "Réserver"
            },
            {
              image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2022/10/123-sb-plouguerneau-balade-camping-du-phare-de-lile-vierge-jusqua-roch-pelguent-hdjeremyjehanin-2024-680x509.jpg",
              title: "GR34 — Sentier des Douaniers",
              category: "Randonnée",
              duration: "Journée",
              rating: 5,
              cta: "Explorer le parcours"
            },
            {
              image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2025/08/plouguerneau21alamoureux-d6a2367.jpg",
              title: "Visite du Phare de Lanvaon",
              category: "Culture",
              duration: "1h30",
              rating: 4,
              cta: "Visiter"
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
              duration: "45min",
              cta: "Découvrir"
            },
            {
              image: "https://cdt29.media.tourinsoft.eu/upload/L-escale-2025--3--3.jpg?width=2560&height=2560",
              title: "L'Escale — Produits de la Mer",
              category: "Gastronomie",
              price: "Menu 28€",
              rating: 5,
              cta: "Réserver"
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
            { url: "https://cdt29.media.tourinsoft.eu/upload/Goeland-Toque-2025--6-.jpg?width=2560&height=2560", alt: "Goéland Toqué 2025 (6)", title: "Gastronomie" },
            { url: "https://cdt29.media.tourinsoft.eu/upload/L-escale-2025--3--3.jpg?width=2560&height=2560", alt: "L'escale 2025 (3)", title: "L'Escale" },
            { url: "https://cdt29.media.tourinsoft.eu/upload/Auberge-du-pont-2025.jpg?width=2560&height=2560", alt: "Auberge du pont 2025", title: "Patrimoine" },
            { url: "https://cdt29.media.tourinsoft.eu/upload/Crepe-Trouzilit.jpg?width=2560&height=2560", alt: "Crêpe Trouzilit", title: "Crêperies" }
          ]}
        />
      </section>

      <section id="newsletter">
        <NewsletterCTA
          title="Votre Inspiration dans les Abers"
          subtitle="Recevez nos bons plans, événements et actualités pour découvrir tous les secrets de la côte des légendes."
          backgroundImage="https://www.abers-tourisme.com/assets/uploads/sites/8/2025/12/113-sb-landeda-point-de-vue-depuis-an-treiz-hdjeremyjehanin-2024-680x453.jpg"
          buttonText="S'inscrire à la newsletter"
        />
      </section>
      
      <Footer />
    </>
  );
}