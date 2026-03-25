import { HeroCarousel } from "@/components/HeroCarousel";
import { FeatureCards } from "@/components/FeatureCards";
import { StatsSection } from "@/components/StatsSection";
import { FilterableGrid } from "@/components/FilterableGrid";
import { GalleryMasonry } from "@/components/GalleryMasonry";
import { NewsletterCTA } from "@/components/NewsletterCTA";
import WhatsAppButton from "@/components/WhatsAppButton";
import TakatBanner from "@/components/TakatBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/* ------------------------------------------------------------------ */
/*  Image URLs                                                         */
/* ------------------------------------------------------------------ */
const IMG = {
  coastal:
    "https://www.abers-tourisme.com/assets/uploads/sites/8/2022/10/123-sb-plouguerneau-balade-camping-du-phare-de-lile-vierge-jusqua-roch-pelguent-hdjeremyjehanin-2024-scaled.jpg",
  lighthouse:
    "https://www.abers-tourisme.com/assets/uploads/sites/8/2025/08/plouguerneau21alamoureux-d6a2367.jpg",
  kayak:
    "https://www.abers-tourisme.com/assets/uploads/sites/8/2022/08/kayak-ile-vierge-clo-et-clem-680x453.jpg",
  viewpoint:
    "https://www.abers-tourisme.com/assets/uploads/sites/8/2025/12/113-sb-landeda-point-de-vue-depuis-an-treiz-hdjeremyjehanin-2024-680x453.jpg",
  goelandToque:
    "https://cdt29.media.tourinsoft.eu/upload/Goeland-Toque-2025--6-.jpg?width=2560&height=2560",
  goelandToquePrimary:
    "https://cdt29.media.tourinsoft.eu/upload/Goeland-Toque-2025.jpeg?width=2560&height=2560",
  festival:
    "https://cdt29.media.tourinsoft.eu/upload/L-escale-2025--3--3.jpg?width=2560&height=2560",
  escale:
    "https://cdt29.media.tourinsoft.eu/upload/L-escale-2025--1--3.jpg?width=2560&height=2560",
};

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* 1 - Hero Carousel */}
      <HeroCarousel
        slides={[
          {
            image: IMG.coastal,
            eyebrow: "Pays des Abers",
            title: "Explorez la C\u00f4te Sauvage",
            subtitle:
              "Entre terre et mer, un monde de d\u00e9couvertes vous attend au c\u0153ur du Finist\u00e8re",
          },
          {
            image: IMG.lighthouse,
            eyebrow: "Patrimoine Maritime",
            title: "La Route des Phares",
            subtitle:
              "D\u00e9couvrez les sentinelles de la mer et leurs secrets mill\u00e9naires",
          },
          {
            image: IMG.kayak,
            eyebrow: "Aventures Nautiques",
            title: "Vivez l\u2019Aber Wrac\u2019h",
            subtitle:
              "Kayak, voile et plong\u00e9e dans les eaux turquoise de l\u2019archipel",
          },
          {
            image: IMG.viewpoint,
            eyebrow: "Nature Pr\u00e9serv\u00e9e",
            title: "Sentiers & Panoramas",
            subtitle:
              "Le GR34 vous guide le long de c\u00f4tes sauvages et de paysages \u00e0 couper le souffle",
          },
        ]}
        primaryCta={{ text: "Planifier Votre S\u00e9jour", href: "#experiences" }}
        secondaryCta={{ text: "D\u00e9couvrir la R\u00e9gion", href: "#decouvrir" }}
      />

      {/* 2 - Feature Cards */}
      <div id="decouvrir">
        <FeatureCards
          sectionTitle="D\u00e9couvrir les Abers"
          sectionSubtitle="Un territoire unique o\u00f9 les rivi\u00e8res c\u00f4ti\u00e8res dessinent des paysages d\u2019exception"
          cards={[
            {
              image: IMG.lighthouse,
              title: "Phare de l\u2019\u00cele Vierge",
              description:
                "Plus haut phare en pierre d\u2019Europe, cette sentinelle de 82,5 m\u00e8tres offre un panorama exceptionnel sur l\u2019archipel de Lilia et la c\u00f4te des Abers.",
              stat: { value: "82.5m", label: "HAUTEUR" },
              rating: 5,
            },
            {
              image: IMG.kayak,
              title: "Aber Wrac\u2019h",
              description:
                "Le GR34, sentier des douaniers, longe cet aber majestueux entre criques secr\u00e8tes, dunes sauvages et eaux cristallines. Un parcours inoubliable.",
              stat: { value: "2000km", label: "DE SENTIER" },
              rating: 5,
            },
            {
              image: IMG.goelandToque,
              title: "Gastronomie Locale",
              description:
                "Savourez les tr\u00e9sors du terroir breton : fruits de mer, cr\u00eapes de sarrasin, beurre sal\u00e9 et les meilleurs produits de la c\u00f4te du Finist\u00e8re.",
              stat: { value: "150+", label: "RESTAURANTS" },
              rating: 4,
            },
          ]}
        />
      </div>

      {/* 3 - Stats Section */}
      <StatsSection
        image={IMG.lighthouse}
        eyebrow="Le Joyau des Abers"
        title="Le Phare de l\u2019\u00cele Vierge"
        description="Sentinelle de granit dress\u00e9e face \u00e0 l\u2019Atlantique depuis 1902, le phare de l\u2019\u00cele Vierge culmine \u00e0 82,5 m\u00e8tres. C\u2019est le plus haut phare en pierre d\u2019Europe. Ses 397 marches m\u00e8nent \u00e0 un panorama spectaculaire sur l\u2019archipel de Lilia, l\u2019aber Wrac\u2019h et la c\u00f4te d\u00e9coup\u00e9e du Finist\u00e8re nord. Sa lentille de Fresnel porte \u00e0 50 kilom\u00e8tres, guidant les navires dans l\u2019un des passages maritimes les plus fr\u00e9quent\u00e9s du monde."
        stats={[
          { value: "82.5m", label: "Hauteur" },
          { value: "397", label: "Marches" },
          { value: "1902", label: "Inauguration" },
          { value: "50km", label: "Port\u00e9e lumineuse" },
        ]}
        cta={{ text: "Visiter le Phare", href: "#" }}
      />

      {/* 4 - Filterable Grid */}
      <div id="experiences">
        <FilterableGrid
          sectionTitle="Exp\u00e9riences & Activit\u00e9s"
          categories={["Nautique", "Randonn\u00e9e", "Culture", "Gastronomie"]}
          items={[
            {
              image: IMG.kayak,
              title: "Kayak dans l\u2019Aber Wrac\u2019h",
              category: "Nautique",
              price: "\u00c0 partir de 25\u20ac",
              duration: "2 heures",
              rating: 5,
              cta: "R\u00e9server",
            },
            {
              image: IMG.coastal,
              title: "Balade sur le GR34",
              category: "Randonn\u00e9e",
              price: "Gratuit",
              duration: "Flexible",
              rating: 5,
              cta: "D\u00e9couvrir l\u2019itin\u00e9raire",
            },
            {
              image: IMG.goelandToquePrimary,
              title: "Le Go\u00e9land Toqu\u00e9",
              category: "Gastronomie",
              price: "Menu 18\u20ac",
              duration: "D\u00e9jeuner",
              rating: 4.5,
              cta: "Voir le menu",
            },
            {
              image: IMG.festival,
              title: "Festival des Phares",
              category: "Culture",
              price: "Entr\u00e9e libre",
              duration: "3 jours",
              rating: 4.5,
              cta: "Programme",
            },
            {
              image: IMG.viewpoint,
              title: "Randonn\u00e9e Nocturne",
              category: "Randonn\u00e9e",
              price: "10\u20ac",
              duration: "3 heures",
              rating: 5,
              cta: "S\u2019inscrire",
            },
            {
              image: IMG.escale,
              title: "L\u2019Escale Gourmande",
              category: "Gastronomie",
              price: "Menu 25\u20ac",
              duration: "D\u00eener",
              rating: 4,
              cta: "R\u00e9server une table",
            },
          ]}
        />
      </div>

      {/* 5 - Gallery Masonry */}
      <div id="galerie">
        <GalleryMasonry
          sectionTitle="Instantan\u00e9s du Pays des Abers"
          images={[
            { url: IMG.coastal, alt: "Sentier c\u00f4tier vers le phare de l\u2019\u00cele Vierge", title: "Le sentier c\u00f4tier" },
            { url: IMG.lighthouse, alt: "Phare de l\u2019\u00cele Vierge au coucher du soleil", title: "Phare de l\u2019\u00cele Vierge" },
            { url: IMG.kayak, alt: "Kayak dans l\u2019Aber Wrac\u2019h", title: "Aber Wrac\u2019h" },
            { url: IMG.viewpoint, alt: "Panorama depuis An Treiz \u00e0 Land\u00e9da", title: "Panorama de Land\u00e9da" },
            { url: IMG.goelandToque, alt: "Sp\u00e9cialit\u00e9s gastronomiques bretonnes", title: "Saveurs locales" },
            { url: IMG.goelandToquePrimary, alt: "Le Go\u00e9land Toqu\u00e9 restaurant", title: "Le Go\u00e9land Toqu\u00e9" },
            { url: IMG.festival, alt: "Festival des Phares", title: "Festival des Phares" },
            { url: IMG.escale, alt: "L\u2019Escale restaurant vue mer", title: "L\u2019Escale" },
          ]}
        />
      </div>

      {/* 6 - Newsletter CTA */}
      <NewsletterCTA
        title="Restez Connect\u00e9 aux Abers"
        subtitle="Recevez nos bons plans, \u00e9v\u00e9nements et actualit\u00e9s directement dans votre bo\u00eete mail."
        backgroundImage={IMG.coastal}
        buttonText="S\u2019inscrire \u00e0 la newsletter"
      />

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-teal/30 to-transparent" />

      <Footer />

      {/* Floating elements */}
      <WhatsAppButton
        companyName="Abers Tourisme"
        phoneNumber="+33298040543"
        greeting="Bonjour ! Comment pouvons-nous vous aider \u00e0 pr\u00e9parer votre s\u00e9jour dans le Pays des Abers ?"
        quickReplies={["H\u00e9bergements", "Activit\u00e9s", "Restaurants"]}
      />
      <TakatBanner />
    </div>
  );
}
