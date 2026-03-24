import { useState, useEffect, useRef } from 'react';

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

const discoverItems = [
  {
    title: "Phare de l'Île Vierge",
    description: "Le plus haut phare d'Europe, offrant une vue panoramique spectaculaire sur les Abers.",
    imageUrl: "https://www.abers-tourisme.com/assets/uploads/sites/8/2022/08/kayak-ile-vierge-clo-et-clem-680x453.jpg",
    stat: "82.5m",
    statLabel: "Hauteur",
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>,
    statIcon: <svg className="w-5 h-5 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
  },
  {
    title: "Phare de Lanvaon",
    description: "Sa forme originale et sa position à l'entrée du port en font un point de repère unique.",
    imageUrl: "https://www.abers-tourisme.com/assets/uploads/sites/8/2025/08/plouguerneau21alamoureux-d6a2367.jpg",
    stat: "1845",
    statLabel: "Construit",
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" /></svg>,
    statIcon: <svg className="w-5 h-5 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
  },
  {
    title: "Randonnée GR34",
    description: "Le sentier des douaniers vous guide le long de côtes sauvages et de paysages à couper le souffle.",
    imageUrl: "https://www.abers-tourisme.com/assets/uploads/sites/8/2022/10/123-sb-plouguerneau-balade-camping-du-phare-de-lile-vierge-jusqua-roch-pelguent-hdjeremyjehanin-2024-680x509.jpg",
    stat: "2000km",
    statLabel: "De sentier",
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
    statIcon: <svg className="w-5 h-5 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" /></svg>
  }
];

export default function DiscoverSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef);

  return (
    <section id="discover-section" ref={sectionRef} className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className={`text-center max-w-3xl mx-auto transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="uppercase tracking-widest text-teal" style={{ fontFamily: 'var(--font-accent)', fontSize: '1.3rem' }}>Bienvenue dans les Abers</p>
          <h2 className="text-4xl md:text-5xl font-bold mt-4" style={{ fontFamily: 'var(--font-display)' }}>Les sentinelles de la mer & leurs secrets</h2>
          <p className="mt-6 text-lg text-foreground/70 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-body)' }}>
            Découvrez une nature préservée, entre terre et mer, où chaque phare raconte une histoire et chaque sentier révèle une nouvelle merveille.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {discoverItems.map((item, i) => (
            <div
              key={i}
              className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 150}ms` }}>
              <div className="group relative rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="h-64 overflow-hidden">
                  <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-teal/90 flex items-center justify-center text-white">{item.icon}</div>
                  <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg flex items-center gap-3">
                    {item.statIcon}
                    <div>
                      <p className="font-bold text-foreground text-lg" style={{ fontFamily: 'var(--font-display)' }}>{item.stat}</p>
                      <p className="text-xs text-foreground/60 uppercase tracking-wider">{item.statLabel}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>{item.title}</h3>
                  <p className="mt-2 text-foreground/70" style={{ fontFamily: 'var(--font-body)' }}>{item.description}</p>
                  <a href="#" className="inline-flex items-center gap-2 mt-4 font-semibold text-teal group-hover:gap-3 transition-all duration-300">
                    Explorer →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
