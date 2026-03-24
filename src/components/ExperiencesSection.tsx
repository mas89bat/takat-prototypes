import { useState, useEffect, useRef } from "react";

function useInView(ref: React.RefObject<HTMLElement | null>) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold: 0.15 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
  return inView;
}

interface Experience {
  title: string;
  description: string;
  image: string;
  category: string;
  duration: string;
  price: string;
  rating: number;
}

const experiences: Experience[] = [
  {
    title: "Kayak dans l'Aber Wrac'h",
    description: "Pagayez dans le plus grand des deux abers et découvrez la richesse naturelle incomparable de nos eaux protégées.",
    image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2022/08/kayak-ile-vierge-clo-et-clem-680x453.jpg",
    category: "nautique",
    duration: "2h",
    price: "35€",
    rating: 5
  },
  {
    title: "Randonnée GR34",
    description: "Suivez le sentier côtier le long de l'Aber-Benoît, le plus sauvage, pour des paysages à couper le souffle.",
    image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2022/10/123-sb-plouguerneau-balade-camping-du-phare-de-lile-vierge-jusqua-roch-pelguent-hdjeremyjehanin-2024-680x509.jpg",
    category: "terrestre",
    duration: "3h",
    price: "Gratuit",
    rating: 4
  },
  {
    title: "Véloroute des Abers",
    description: "Parcourez la véloroute des Abers et donnez tout sur les chemins côtiers avec vue sur les phares emblématiques.",
    image: "https://swjqpkffgdhoyjihxldn.supabase.co/storage/v1/object/public/prototype-assets/f0165328-deeb-4edb-93ff-08ed23396b3d/section-about.png",
    category: "vélo",
    duration: "4h",
    price: "20€",
    rating: 5
  },
  {
    title: "Observation des Oiseaux",
    description: "Observer les oiseaux au repos côté rivière dans un environnement préservé, idéal pour les amoureux de nature.",
    image: "https://swjqpkffgdhoyjihxldn.supabase.co/storage/v1/object/public/prototype-assets/f0165328-deeb-4edb-93ff-08ed23396b3d/section-team.png",
    category: "nature",
    duration: "2h",
    price: "15€",
    rating: 4
  },
  {
    title: "Baignade à Korn ar Gazel",
    description: "Tentez une baignade rafraîchissante dans les eaux cristallines de cette plage protégée des vents.",
    image: "https://swjqpkffgdhoyjihxldn.supabase.co/storage/v1/object/public/prototype-assets/f0165328-deeb-4edb-93ff-08ed23396b3d/gallery-feature.png",
    category: "plage",
    duration: "Libre",
    price: "Gratuit",
    rating: 5
  },
  {
    title: "Dégustation Produits de la Mer",
    description: "Goûtez aux délices de la mer en circuit court, huîtres fraîches et crustacés dans les restaurants locaux.",
    image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2022/10/123-sb-plouguerneau-balade-camping-du-phare-de-lile-vierge-jusqua-roch-pelguent-hdjeremyjehanin-2024-scaled.jpg",
    category: "gastronomie",
    duration: "1h30",
    price: "45€",
    rating: 5
  }
];

const categories = [
  { id: "all", label: "Toutes" },
  { id: "nautique", label: "Nautique" },
  { id: "terrestre", label: "Terrestre" },
  { id: "vélo", label: "Vélo" },
  { id: "nature", label: "Nature" },
  { id: "plage", label: "Plage" },
  { id: "gastronomie", label: "Gastronomie" }
];

export default function ExperiencesSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef);

  const filteredExperiences = activeCategory === "all" 
    ? experiences 
    : experiences.filter(exp => exp.category === activeCategory);

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section id="experiences" ref={sectionRef} className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <p className="text-teal uppercase tracking-widest text-sm font-semibold mb-4" style={{ fontFamily: "var(--font-accent)" }}>
            Intense & Sauvage
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6" style={{ fontFamily: "var(--font-display)" }}>
            Profitez du Grand Air Iodé
          </h2>
          <p className="text-lg text-navy/70 max-w-2xl mx-auto" style={{ fontFamily: "var(--font-body)" }}>
            Au gré de balades inédites, en plein air et en famille, découvrez une nature préservée. 
            Profitez d'un large choix d'activités nautiques ou sportives.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 delay-200 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-teal text-white"
                  : "bg-white text-navy border border-navy/20 hover:border-teal"
              }`}
              style={{ fontFamily: "var(--font-body)" }}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Experiences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredExperiences.map((experience, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image Area */}
              <div className="h-64 overflow-hidden relative">
                <img
                  src={experience.image}
                  alt={experience.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                
                {/* Price Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-1 text-sm font-semibold text-navy" style={{ fontFamily: "var(--font-body)" }}>
                  {experience.price} · {experience.duration}
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-teal/90 flex items-center justify-center text-white text-xs font-semibold uppercase">
                  {experience.category.slice(0, 3)}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-1 mb-2">
                  {renderStars(experience.rating)}
                  <span className="text-sm text-navy/60 ml-1" style={{ fontFamily: "var(--font-body)" }}>
                    ({experience.rating}/5)
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-navy mb-3" style={{ fontFamily: "var(--font-display)" }}>
                  {experience.title}
                </h3>
                <p className="text-navy/70 mb-4 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                  {experience.description}
                </p>
                
                <button className="w-full bg-teal hover:bg-teal/80 text-white rounded-full px-6 py-3 font-semibold transition-all duration-300 hover:scale-105" style={{ fontFamily: "var(--font-body)" }}>
                  Réserver
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}