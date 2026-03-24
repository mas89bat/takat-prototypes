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

const discoveries = [
  {
    title: "Phare de Lanvaon",
    description: "Il doit sa forme originale et surprenante à sa fonction qui consiste à signaler l'entrée dans le port. Une architecture unique au cœur des Abers.",
    image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2025/08/plouguerneau21alamoureux-d6a2367.jpg",
    stat: "15m",
    statLabel: "de hauteur",
    icon: "lighthouse"
  },
  {
    title: "Le Phare de l'Île Vierge",
    description: "Situé à plus d'un kilomètre des côtes, découvrez ce géant des mers, le plus haut phare d'Europe dans un site exceptionnel aux eaux turquoise.",
    image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2022/08/kayak-ile-vierge-clo-et-clem-680x453.jpg",
    stat: "82m",
    statLabel: "le plus haut d'Europe",
    icon: "waves"
  },
  {
    title: "Paysages des Abers",
    description: "Une sortie en kayak dans l'Aber Wrac'h ou une randonnée le long de l'Aber-Benoît vous permettront d'apprécier la richesse naturelle incomparable.",
    image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2025/12/113-sb-landeda-point-de-vue-depuis-an-treiz-hdjeremyjehanin-2024-680x453.jpg",
    stat: "2",
    statLabel: "Abers à explorer",
    icon: "map"
  }
];

export default function DiscoverSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef);

  const getIcon = (type: string) => {
    switch (type) {
      case "lighthouse":
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 2L8 4v2H6v12h8V6h-2V4l-2-2zm0 2.5L9 5.5V6h2v-.5L10 4.5z"/>
          </svg>
        );
      case "waves":
        return (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
      case "map":
        return (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section id="discover" ref={sectionRef} className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <p className="text-teal uppercase tracking-widest text-sm font-semibold mb-4" style={{ fontFamily: "var(--font-accent)" }}>
            Les Sentinelles de la Mer
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6" style={{ fontFamily: "var(--font-display)" }}>
            Découvrez leurs Secrets
          </h2>
          <p className="text-lg text-navy/70 max-w-2xl mx-auto" style={{ fontFamily: "var(--font-body)" }}>
            Le Pays des Abers va vous étonner, vous charmer et vous conquérir par la diversité de ses paysages entre mer et terre.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {discoveries.map((item, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Image Area */}
              <div className="h-64 overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                
                {/* Stat Badge */}
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="text-navy">{getIcon(item.icon)}</div>
                    <div>
                      <div className="text-2xl font-bold text-navy" style={{ fontFamily: "var(--font-display)" }}>
                        {item.stat}
                      </div>
                      <div className="text-xs text-navy/60 uppercase tracking-wide" style={{ fontFamily: "var(--font-body)" }}>
                        {item.statLabel}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Icon Badge */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-teal/90 flex items-center justify-center text-white">
                  {getIcon(item.icon)}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy mb-3" style={{ fontFamily: "var(--font-display)" }}>
                  {item.title}
                </h3>
                <p className="text-navy/70 mb-4 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                  {item.description}
                </p>
                <button className="group/btn flex items-center gap-2 text-teal font-semibold hover:gap-3 transition-all duration-300" style={{ fontFamily: "var(--font-body)" }}>
                  Explorer
                  <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
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