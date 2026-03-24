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

function StaySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef);
  const [activeTab, setActiveTab] = useState('restaurants');

  const tabs = [
    { id: 'restaurants', label: 'Restaurants' },
    { id: 'hebergements', label: 'Hébergements' },
    { id: 'commerces', label: 'Commerces Locaux' }
  ];

  const listings = {
    restaurants: [
      {
        image: "https://cdt29.media.tourinsoft.eu/upload/Goeland-Toque-2025--6-.jpg?width=2560&height=2560",
        title: "Le Goéland Toqué",
        location: "Plouguerneau",
        rating: 4,
        price: "16€",
        priceLabel: "Menu midi",
        amenities: ['Terrasse', 'WiFi', 'PMR'],
        description: "Cuisine traditionnelle française derrière l'église. 70 places en intérieur et terrasse de 25 places."
      },
      {
        image: "https://cdt29.media.tourinsoft.eu/upload/L-escale-2025--3--3.jpg?width=2560&height=2560",
        title: "L'Escale",
        location: "Aber Wrac'h",
        rating: 5,
        price: "28€",
        priceLabel: "Plat du jour",
        amenities: ['Vue mer', 'Spécialités', 'Terrasse'],
        description: "Restaurant face au port avec vue imprenable sur l'Aber Wrac'h et spécialités de fruits de mer."
      },
      {
        image: "https://swjqpkffgdhoyjihxldn.supabase.co/storage/v1/object/public/prototype-assets/f0165328-deeb-4edb-93ff-08ed23396b3d/section-about.png",
        title: "La Table des Abers",
        location: "Landéda",
        rating: 4,
        price: "35€",
        priceLabel: "Menu dégustation",
        amenities: ['Produits locaux', 'Bistronomie', 'Cave'],
        description: "Bistronomie moderne mettant à l'honneur les produits de la mer et du terroir breton."
      }
    ],
    hebergements: [
      {
        image: "https://swjqpkffgdhoyjihxldn.supabase.co/storage/v1/object/public/prototype-assets/f0165328-deeb-4edb-93ff-08ed23396b3d/section-team.png",
        title: "Écogîte de l'Île Vierge",
        location: "Plouguerneau",
        rating: 5,
        price: "180€",
        priceLabel: "La nuit",
        amenities: ['Vue phare', 'Écologique', 'Unique'],
        description: "Séjour exceptionnel dans l'ancien phare transformé en hébergement insolite face à la mer."
      },
      {
        image: "https://swjqpkffgdhoyjihxldn.supabase.co/storage/v1/object/public/prototype-assets/f0165328-deeb-4edb-93ff-08ed23396b3d/gallery-feature.png",
        title: "Chambres d'Hôtes de la Côte",
        location: "Aber Wrac'h",
        rating: 4,
        price: "95€",
        priceLabel: "La nuit",
        amenities: ['Petit-déj', 'Jardin', 'Vélos'],
        description: "Maison de caractère avec jardin, proche du port et des départs de randonnées."
      },
      {
        image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2025/12/113-sb-landeda-point-de-vue-depuis-an-treiz-hdjeremyjehanin-2024-680x453.jpg",
        title: "Camping Vue sur Mer",
        location: "Landéda",
        rating: 4,
        price: "25€",
        priceLabel: "L'emplacement",
        amenities: ['Vue mer', 'Piscine', 'Animations'],
        description: "Camping familial avec accès direct à la plage et vue panoramique sur l'océan."
      }
    ],
    commerces: [
      {
        image: "https://swjqpkffgdhoyjihxldn.supabase.co/storage/v1/object/public/prototype-assets/f0165328-deeb-4edb-93ff-08ed23396b3d/section-about.png",
        title: "Marché aux Huîtres",
        location: "Aber Benoît",
        rating: 5,
        price: "12€",
        priceLabel: "La douzaine",
        amenities: ['Producteur', 'Dégustation', 'Frais'],
        description: "Huîtres élevées dans l'aber, dégustées face à l'eau avec vue sur les parcs ostréicoles."
      },
      {
        image: "https://swjqpkffgdhoyjihxldn.supabase.co/storage/v1/object/public/prototype-assets/f0165328-deeb-4edb-93ff-08ed23396b3d/section-team.png",
        title: "Boutique Maritime",
        location: "Plouguerneau",
        rating: 4,
        price: "25€",
        priceLabel: "Souvenirs",
        amenities: ['Artisanal', 'Local', 'Cadeaux'],
        description: "Souvenirs authentiques, bijoux en algues et créations d'artisans locaux."
      },
      {
        image: "https://swjqpkffgdhoyjihxldn.supabase.co/storage/v1/object/public/prototype-assets/f0165328-deeb-4edb-93ff-08ed23396b3d/gallery-feature.png",
        title: "Boulangerie du Port",
        location: "Aber Wrac'h",
        rating: 5,
        price: "1.80€",
        priceLabel: "Kouign-amann",
        amenities: ['Spécialités', 'Fait maison', 'Tradition'],
        description: "Boulangerie traditionnelle proposant kouign-amann, far breton et autres spécialités."
      }
    ]
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
        viewBox="0 0 24 24"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ));
  };

  return (
    <section id="sejour" ref={sectionRef} className="py-24 bg-background border-t border-foreground/10">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <div className="mb-4">
            <span 
              className="text-teal uppercase tracking-widest font-medium"
              style={{ fontFamily: "var(--font-accent)" }}
            >
              Votre Séjour
            </span>
          </div>
          <h2 
            className="text-4xl lg:text-5xl font-bold text-foreground mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Savourez les Abers
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto" style={{ fontFamily: "var(--font-body)" }}>
            Restaurants authentiques, hébergements de charme et commerces locaux 
            pour une expérience complète du terroir breton.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`} style={{ transitionDelay: "200ms" }}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 min-h-[44px] ${
                activeTab === tab.id
                  ? "bg-teal text-white shadow-lg"
                  : "bg-white text-foreground border border-foreground/20 hover:border-teal hover:text-teal"
              }`}
              style={{ fontFamily: "var(--font-body)" }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {listings[activeTab as keyof typeof listings].map((item, index) => (
            <div 
              key={index}
              className={`group relative rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Image Area */}
              <div className="h-56 overflow-hidden relative">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="group-hover:scale-110 transition-transform duration-700 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                
                {/* Amenity Badges */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-1">
                  {item.amenities.slice(0, 2).map((amenity, i) => (
                    <span key={i} className="bg-white/90 backdrop-blur-sm rounded-md px-2 py-1 text-xs font-medium text-foreground" style={{ fontFamily: "var(--font-body)" }}>
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    {renderStars(item.rating)}
                  </div>
                  <div className="flex items-center gap-1 text-foreground/60">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                    <span className="text-sm" style={{ fontFamily: "var(--font-body)" }}>{item.location}</span>
                  </div>
                </div>
                
                <h3 
                  className="text-xl font-semibold text-foreground mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {item.title}
                </h3>
                
                <p className="text-foreground/70 mb-4 text-sm leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-teal" style={{ fontFamily: "var(--font-display)" }}>
                      {item.price}
                    </span>
                    <span className="text-sm text-foreground/60 ml-1" style={{ fontFamily: "var(--font-body)" }}>
                      {item.priceLabel}
                    </span>
                  </div>
                  <button className="bg-teal hover:bg-teal/80 text-white rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 min-h-[40px]" style={{ fontFamily: "var(--font-body)" }}>
                    {activeTab === 'restaurants' ? 'Réserver' : activeTab === 'hebergements' ? 'Voir' : 'Contacter'}
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

export default StaySection;