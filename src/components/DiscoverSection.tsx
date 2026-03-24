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

function DiscoverSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef);

  const discoveries = [
    {
      image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2025/08/plouguerneau21alamoureux-d6a2367.jpg",
      title: "Phare de Lanvaon",
      description: "Il doit sa forme originale et surprenante à sa fonction qui consiste à signaler l'entrée dans le port. Un véritable guide maritime aux lignes uniques.",
      stat: "15m",
      statLabel: "de hauteur",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L22 7l-10 5L2 7l10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      )
    },
    {
      image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2022/08/kayak-ile-vierge-clo-et-clem-680x453.jpg",
      title: "Le Phare de l'Île Vierge",
      description: "Les eaux turquoise et les terrasses du front de mer vous feront rêver. Notre géant des mers, le plus haut phare d'Europe, vous attend à plus d'un kilomètre des côtes.",
      stat: "82m",
      statLabel: "le plus haut d'Europe",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      )
    },
    {
      image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2025/12/113-sb-landeda-point-de-vue-depuis-an-treiz-hdjeremyjehanin-2024-680x453.jpg",
      title: "Paysages Incomparables",
      description: "Une sortie en kayak dans l'Aber Wrac'h ou une randonnée le long de l'Aber-Benoît vous permettront d'apprécier la richesse naturelle de notre pays.",
      stat: "2",
      statLabel: "abers à explorer",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
        </svg>
      )
    }
  ];

  return (
    <section id="decouvrir" ref={sectionRef} className="py-24 bg-background relative">
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
              Les Sentinelles de la Mer
            </span>
          </div>
          <h2 
            className="text-4xl lg:text-5xl font-bold text-foreground mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Découvrez leurs Secrets
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto" style={{ fontFamily: "var(--font-body)" }}>
            Le Pays des Abers va vous étonner, vous charmer et vous conquérir par la diversité de ses paysages sauvages et préservés.
          </p>
        </div>

        {/* Discovery Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {discoveries.map((item, index) => (
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
                  src={item.image}
                  alt={item.title}
                  className="group-hover:scale-110 transition-transform duration-700 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                
                {/* Stat Badge */}
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="text-teal">{item.icon}</div>
                    <div>
                      <div className="text-xl font-bold text-foreground" style={{ fontFamily: "var(--font-display)" }}>
                        {item.stat}
                      </div>
                      <div className="text-xs text-foreground/60 uppercase tracking-wider" style={{ fontFamily: "var(--font-accent)" }}>
                        {item.statLabel}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Icon Badge */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-teal/90 flex items-center justify-center text-white">
                  {item.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 
                  className="text-xl font-semibold text-foreground mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {item.title}
                </h3>
                <p className="text-foreground/70 mb-4 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                  {item.description}
                </p>
                <button className="group/btn flex items-center gap-2 text-teal hover:gap-3 transition-all duration-300 font-medium" style={{ fontFamily: "var(--font-body)" }}>
                  Explorer
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

export default DiscoverSection;