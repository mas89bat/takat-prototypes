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

function ExperiencesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef);
  const [activeFilter, setActiveFilter] = useState('tout');

  const filters = [
    { id: 'tout', label: 'Tout voir' },
    { id: 'nautique', label: 'Activités Nautiques' },
    { id: 'rando', label: 'Randonnées' },
    { id: 'culture', label: 'Culture & Patrimoine' },
    { id: 'famille', label: 'En Famille' }
  ];

  const experiences = [
    {
      image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2022/08/kayak-ile-vierge-clo-et-clem-680x453.jpg",
      title: "Kayak vers l'Île Vierge",
      category: "nautique",
      duration: "3h",
      price: "45€",
      rating: 5,
      description: "Pagayez vers le plus haut phare d'Europe et découvrez des eaux turquoise exceptionnelles."
    },
    {
      image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2022/10/123-sb-plouguerneau-balade-camping-du-phare-de-lile-vierge-jusqua-roch-pelguent-hdjeremyjehanin-2024-680x509.jpg",
      title: "GR34 - Sentier des Douaniers",
      category: "rando",
      duration: "1 journée",
      price: "Gratuit",
      rating: 5,
      description: "Longez la côte sauvage sur le mythique sentier des douaniers, de phare en phare."
    },
    {
      image: "https://swjqpkffgdhoyjihxldn.supabase.co/storage/v1/object/public/prototype-assets/f0165328-deeb-4edb-93ff-08ed23396b3d/section-about.png",
      title: "Visite Guidée des Phares",
      category: "culture",
      duration: "2h30",
      price: "22€",
      rating: 4,
      description: "Découvrez l'histoire fascinante des gardiens de phares et de leurs familles."
    },
    {
      image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2025/12/113-sb-landeda-point-de-vue-depuis-an-treiz-hdjeremyjehanin-2024-680x453.jpg",
      title: "Point de Vue An Treiz",
      category: "famille",
      duration: "1h",
      price: "Gratuit",
      rating: 4,
      description: "Panorama exceptionnel sur l'Aber Benoît, accessible à tous avec aire de pique-nique."
    },
    {
      image: "https://swjqpkffgdhoyjihxldn.supabase.co/storage/v1/object/public/prototype-assets/f0165328-deeb-4edb-93ff-08ed23396b3d/section-team.png",
      title: "Pêche à Pied aux Grandes Marées",
      category: "famille",
      duration: "2h",
      price: "15€",
      rating: 5,
      description: "Initiez-vous aux plaisirs de la pêche à pied dans les estrans des abers."
    },
    {
      image: "https://swjqpkffgdhoyjihxldn.supabase.co/storage/v1/object/public/prototype-assets/f0165328-deeb-4edb-93ff-08ed23396b3d/gallery-feature.png",
      title: "Stand-up Paddle dans l'Aber Wrac'h",
      category: "nautique",
      duration: "2h",
      price: "35€",
      rating: 4,
      description: "Glissez sur les eaux calmes de l'aber le plus grand et le plus navigable."
    }
  ];

  const filteredExperiences = activeFilter === 'tout' 
    ? experiences 
    : experiences.filter(exp => exp.category === activeFilter);

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
    <section id="experiences" ref={sectionRef} className="py-24 bg-background">
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
              Intense & Sauvage
            </span>
          </div>
          <h2 
            className="text-4xl lg:text-5xl font-bold text-foreground mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Nos Expériences Authentiques
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto" style={{ fontFamily: "var(--font-body)" }}>
            Au gré de balades inédites, en plein air et en famille, découvrez une nature préservée. 
            Profitez d'un large choix d'activités nautiques et sportives.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`} style={{ transitionDelay: "200ms" }}>
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 min-h-[44px] ${
                activeFilter === filter.id
                  ? "bg-teal text-white shadow-lg"
                  : "bg-white text-foreground border border-foreground/20 hover:border-teal hover:text-teal"
              }`}
              style={{ fontFamily: "var(--font-body)" }}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredExperiences.map((experience, index) => (
            <div 
              key={index}
              className={`group relative rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Image Area */}
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={experience.image}
                  alt={experience.title}
                  className="group-hover:scale-110 transition-transform duration-700 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                
                {/* Price/Duration Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-1 text-sm font-semibold" style={{ fontFamily: "var(--font-body)" }}>
                  {experience.price} • {experience.duration}
                </div>

                {/* Category Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-teal/90 flex items-center justify-center text-white">
                  {experience.category === 'nautique' && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L22 7l-10 5L2 7l10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  )}
                  {experience.category === 'rando' && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  )}
                  {experience.category === 'culture' && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  )}
                  {experience.category === 'famille' && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zM20 22v-6h2.5l-2.54-7.63A2 2 0 0 0 18.06 7H16c-.8 0-1.54.37-2 .97L11.59 10l2.82 2.82c.78.78 2.05.78 2.83 0 .78-.78.78-2.05 0-2.83l-1.42-1.41L17 6l1 3v13h2zM12.5 11.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5zM5.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm1.5 1h-2C3.57 7 2.46 7.78 1.97 8.88L.5 12 3 13l1.97-3.95L7.5 16v6h2v-7.5l-2.5-3.5L9.5 8 8 7z" />
                    </svg>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  {renderStars(experience.rating)}
                </div>
                <h3 
                  className="text-xl font-semibold text-foreground mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {experience.title}
                </h3>
                <p className="text-foreground/70 mb-4 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                  {experience.description}
                </p>
                <button className="group/btn flex items-center gap-2 text-teal hover:gap-3 transition-all duration-300 font-medium" style={{ fontFamily: "var(--font-body)" }}>
                  Réserver
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperiencesSection;