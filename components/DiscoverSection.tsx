import { useState, useEffect, useRef } from 'react';

function useInView(ref: React.RefObject<HTMLElement | null>) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.15 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
  return inView;
}

const discoverCards = [
  {
    title: "Phare de l'Île Vierge",
    description: "Le plus haut phare d'Europe en pierre de taille. Embarquez pour une visite inoubliable et admirez la vue panoramique.",
    image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2022/08/kayak-ile-vierge-clo-et-clem-680x453.jpg",
    stat: "82.5m",
    statLabel: "de hauteur",
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6H8.5l-1-1H5a2 2 0 00-2 2z" /></svg>,
  },
  {
    title: "Les Abers, Fjords Bretons",
    description: "Explorez l'Aber Wrac'h et l'Aber Benoît, des rias profondes où la mer et la campagne se rencontrent en harmonie.",
    image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2025/12/113-sb-landeda-point-de-vue-depuis-an-treiz-hdjeremyjehanin-2024-680x453.jpg",
    stat: "32km",
    statLabel: "de rivages",
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
  },
  {
    title: "Sentier des Douaniers (GR34)",
    description: "Randonnez le long d'un littoral préservé, découvrez des criques secrètes, des plages de sable fin et des panoramas époustouflants.",
    image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2022/10/123-sb-plouguerneau-balade-camping-du-phare-de-lile-vierge-jusqua-roch-pelguent-hdjeremyjehanin-2024-680x509.jpg",
    stat: "150km",
    statLabel: "de sentiers",
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  }
];

export default function DiscoverSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef);

  return (
    <section id="decouvrir" ref={sectionRef} className="py-24 bg-sand">
      <div className="container mx-auto px-6 text-center">
        <div className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="uppercase tracking-widest text-teal" style={{ fontFamily: "var(--font-accent)", fontSize: "1.3rem" }}>Découverte</p>
          <h2 className="text-4xl md:text-5xl font-bold text-navy mt-2" style={{ fontFamily: "var(--font-display)" }}>Les sentinelles de la mer & leurs secrets</h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-600" style={{ fontFamily: "var(--font-body)" }}>
            Plongez au cœur d'un patrimoine maritime unique et explorez les joyaux naturels qui font la renommée du Pays des Abers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {discoverCards.map((card, i) => (
            <div
              key={i}
              className={`group relative rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 150}ms` }}>
              <div className="h-64 overflow-hidden relative">
                <img src={card.image} alt={card.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg flex items-center gap-2">
                  <span className="text-2xl font-bold text-navy" style={{fontFamily: "var(--font-display)"}}>{card.stat}</span>
                  <span className="text-sm text-gray-600">{card.statLabel}</span>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-teal/90 flex items-center justify-center text-white">
                    {card.icon}
                </div>
              </div>
              <div className="p-6 text-left">
                <h3 className="text-2xl font-bold text-navy" style={{ fontFamily: "var(--font-display)" }}>{card.title}</h3>
                <p className="mt-2 text-gray-600" style={{ fontFamily: "var(--font-body)" }}>{card.description}</p>
                <a href="#" className="inline-flex items-center gap-2 mt-4 text-teal font-semibold group-hover:gap-3 transition-all">
                  Explorer →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}