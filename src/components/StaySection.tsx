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

interface StayOption {
  title: string;
  description: string;
  location: string;
  image: string;
  type: string;
  pricePerNight: string;
  rating: number;
  amenities: string[];
}

const stayOptions: StayOption[] = [
  {
    title: "Le Goéland Toqué",
    description: "Bistrot de charme avec 2 chambres d'hôtes derrière l'église de Plouguerneau. Cuisine traditionnelle française et accueil chaleureux.",
    location: "Plouguerneau",
    image: "https://cdt29.media.tourinsoft.eu/upload/Goeland-Toque-2025--6-.jpg?width=2560&height=2560",
    type: "chambres-dhotes",
    pricePerNight: "75€",
    rating: 5,
    amenities: ["Wi-Fi", "Parking", "Restaurant", "Terrasse"]
  },
  {
    title: "L'Escale Marine",
    description: "Hôtel face à la mer avec vue panoramique sur l'Aber Wrac'h. Idéal pour les amoureux de couchers de soleil sur l'océan.",
    location: "Landéda",
    image: "https://cdt29.media.tourinsoft.eu/upload/L-escale-2025--3--3.jpg?width=2560&height=2560",
    type: "hotels",
    pricePerNight: "120€",
    rating: 4,
    amenities: ["Vue mer", "Spa", "Wi-Fi", "Piscine"]
  },
  {
    title: "Écogîte du Phare",
    description: "Ancien phare transformé en hébergement écologique unique. Une expérience inoubliable au cœur de l'Île Vierge.",
    location: "Île Vierge",
    image: "https://cdt29.media.tourinsoft.eu/upload/L-escale-2025--2--3.jpg?width=2560&height=2560",
    type: "gites",
    pricePerNight: "180€",
    rating: 5,
    amenities: ["Vue 360°", "Écologique", "Unique", "Isolé"]
  },
  {
    title: "Villa des Abers",
    description: "Villa contemporaine avec jardin privé, parfaite pour les familles. Architecture moderne respectueuse de l'environnement côtier.",
    location: "Lannilis",
    image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2025/12/113-sb-landeda-point-de-vue-depuis-an-treiz-hdjeremyjehanin-2024-680x453.jpg",
    type: "villas",
    pricePerNight: "200€",
    rating: 5,
    amenities: ["Jardin privé", "Moderne", "Famille", "Cuisine équipée"]
  },
  {
    title: "Riad des Phares",
    description: "Maison traditionnelle bretonne rénovée avec goût, mêlant authenticité et confort moderne. Proche du GR34.",
    location: "Ploudalmézeau",
    image: "https://swjqpkffgdhoyjihxldn.supabase.co/storage/v1/object/public/prototype-assets/f0165328-deeb-4edb-93ff-08ed23396b3d/gallery-feature.png",
    type: "riads",
    pricePerNight: "90€",
    rating: 4,
    amenities: ["Authentique", "Rénovée", "GR34", "Cheminée"]
  },
  {
    title: "Hôtel du Phare",
    description: "Hôtel familial face au port de l'Aber Wrac'h. Tradition et modernité pour un séjour réussi au pays des phares.",
    location: "Landéda",
    image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2025/08/plouguerneau21alamoureux-d6a2367.jpg",
    type: "hotels",
    pricePerNight: "95€",
    rating: 4,
    amenities: ["Face au port", "Familial", "Restaurant", "Balcon"]
  }
];

const accommodationTypes = [
  { id: "tous", label: "Tous" },
  { id: "hotels", label: "Hôtels" },
  { id: "chambres-dhotes", label: "Chambres d'Hôtes" },
  { id: "gites", label: "Gîtes" },
  { id: "villas", label: "Villas" },
  { id: "riads", label: "Maisons Traditionnelles" }
];

export default function StaySection() {
  const [activeTab, setActiveTab] = useState("tous");
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef);

  const filteredStays = activeTab === "tous" 
    ? stayOptions 
    : stayOptions.filter(stay => stay.type === activeTab);

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
    <section id="stay" ref={sectionRef} className="py-24 bg-background border-t border-navy/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <p className="text-teal uppercase tracking-widest text-sm font-semibold mb-4" style={{ fontFamily: "var(--font-accent)" }}>
            Votre Hébergement
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6" style={{ fontFamily: "var(--font-display)" }}>
            Séjournez dans les Abers
          </h2>
          <p className="text-lg text-navy/70 max-w-2xl mx-auto" style={{ fontFamily: "var(--font-body)" }}>
            Du charme authentique des chambres d'hôtes aux villas modernes, 
            trouvez l'hébergement parfait pour votre escapade bretonne.
          </p>
        </div>

        {/* Accommodation Type Tabs */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 delay-200 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          {accommodationTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setActiveTab(type.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeTab === type.id
                  ? "bg-teal text-white"
                  : "bg-white text-navy border border-navy/20 hover:border-teal"
              }`}
              style={{ fontFamily: "var(--font-body)" }}
            >
              {type.label}
            </button>
          ))}
        </div>

        {/* Accommodations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStays.map((stay, index) => (
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
                  src={stay.image}
                  alt={stay.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                
                {/* Amenities Icons */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {stay.amenities.slice(0, 3).map((amenity, i) => (
                    <div key={i} className="bg-white/95 backdrop-blur-sm rounded-full px-2 py-1 text-xs font-semibold text-navy">
                      {amenity}
                    </div>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1">
                    {renderStars(stay.rating)}
                  </div>
                  <div className="flex items-center text-navy/60 text-sm" style={{ fontFamily: "var(--font-body)" }}>
                    <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {stay.location}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-navy mb-3" style={{ fontFamily: "var(--font-display)" }}>
                  {stay.title}
                </h3>
                <p className="text-navy/70 mb-4 leading-relaxed text-sm" style={{ fontFamily: "var(--font-body)" }}>
                  {stay.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="text-right">
                    <div className="text-2xl font-bold text-teal" style={{ fontFamily: "var(--font-display)" }}>
                      {stay.pricePerNight}
                    </div>
                    <div className="text-xs text-navy/60" style={{ fontFamily: "var(--font-body)" }}>
                      par nuit
                    </div>
                  </div>
                  <button className="bg-teal hover:bg-teal/80 text-white rounded-full px-6 py-3 font-semibold transition-all duration-300 hover:scale-105" style={{ fontFamily: "var(--font-body)" }}>
                    Réserver
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}