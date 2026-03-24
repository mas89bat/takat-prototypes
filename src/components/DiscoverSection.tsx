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

const discoveries = [
  {
    title: "Phare de l'Île Vierge",
    description: "Le plus haut phare d'Europe vous attend à 1.5km des côtes. Une aventure maritime inoubliable pour admirer un panorama exceptionnel.",
    image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2022/08/kayak-ile-vierge-clo-et-clem-680x453.jpg",
    stat: "82.5m",
    statLabel: "de hauteur",
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z" />
  },
  {
    title: "Phare de Lanvaon",
    description: "Sa forme surprenante et originale signale l'entrée du port. Un point de repère charmant au coeur des paysages des Abers.",
    image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2025/08/plouguerneau21alamoureux-d6a2367.jpg",
    stat: "23m",
    statLabel: "de haut",
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  },
  {
    title: "Paysages Incomparables",
    description: "Entre l'Aber Wrac'h et l'Aber Benoît, découvrez des paysages qui changent au rythme des marées, entre terre et mer.",
    image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2025/12/113-sb-landeda-point-de-vue-depuis-an-treiz-hdjeremyjehanin-2024-680x453.jpg",
    stat: "34km",
    statLabel: "de sentiers",
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
  },
];

export default function DiscoverSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef);

  return (
    <section id="decouvrir" ref={sectionRef} className="py-20 md:py-28 bg-sand">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center max-w-3xl mx-auto transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="uppercase tracking-widest text-teal" style={{ fontFamily: 'var(--font-accent)', fontSize: '1.3rem' }}>Bienvenue</p>
          <h2 className="text-4xl md:text-5xl font-bold mt-4" style={{ fontFamily: 'var(--font-display)' }}>
            Les sentinelles de la mer & leurs secrets
          </h2>
          <p className="mt-6 text-lg text-foreground/70" style={{ fontFamily: 'var(--font-body)' }}>
            Le Pays des Abers va vous étonner, vous charmer, vous conquérir par la diversité de ses paysages. Une sortie en kayak ou une randonnée vous permettront d’apprécier la richesse naturelle incomparable de notre pays.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {discoveries.map((item, i) => (
            <div
              key={i}
              className={`group relative rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="h-64 overflow-hidden relative">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-teal/90 flex items-center justify-center text-white">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">{item.icon}</svg>
                </div>
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg flex items-center gap-3">
                  <span className="text-2xl font-bold text-teal" style={{ fontFamily: 'var(--font-display)' }}>{item.stat}</span>
                  <span className="text-sm text-foreground/80 leading-tight">{item.statLabel}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>{item.title}</h3>
                <p className="mt-2 text-foreground/70" style={{ fontFamily: 'var(--font-body)' }}>{item.description}</p>
                <a href="#" className="inline-flex items-center gap-2 mt-4 text-teal font-semibold group-hover:gap-3 transition-all duration-300">
                  Explorez →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
