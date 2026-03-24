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

const features = [
  {
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&h=800&fit=crop&auto=format&q=80',
    stat: '15+',
    statLabel: 'Restaurants',
    title: 'Gastronomie Authentique',
    description: 'Savourez des produits de la mer fraîchement pêchés et des spécialités locales dans nos auberges et restaurants typiques.',
  },
  {
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>,
    image: 'https://images.unsplash.com/photo-1493770334220-562479ce8535?w=1200&h=800&fit=crop&auto=format&q=80',
    stat: 'Paysages',
    statLabel: 'Uniques',
    title: 'Cadre Idyllique',
    description: 'Explorez l\'Aber Wrac\'h et l\'Aber Benoît, des rias spectaculaires qui façonnent un littoral d\'une beauté sauvage.',
  },
  {
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
    image: 'https://images.unsplash.com/photo-1543362906-acfc16c67564?w=1200&h=800&fit=crop&auto=format&q=80',
    stat: 'Activités',
    statLabel: 'Nautiques',
    title: 'Aventures en Plein Air',
    description: 'Du kayak sur les abers à la randonnée sur le GR34, l\'aventure vous attend à chaque instant pour un séjour dynamique.',
  },
];

export default function DiscoverSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef);

  return (
    <section id="discover" ref={sectionRef} className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center max-w-3xl mx-auto transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-teal uppercase tracking-widest" style={{ fontFamily: 'var(--font-accent)', fontSize: '1.3rem' }}>
            Découvrir le Pays des Abers
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mt-4" style={{ fontFamily: 'var(--font-display)' }}>
            Une Terre d'Émotions et de Saveurs
          </h2>
          <p className="mt-6 text-lg text-foreground/70" style={{ fontFamily: 'var(--font-body)' }}>
            Ancien moulin à marée, auberge accueillante ou table gastronomique, chaque lieu est une invitation à découvrir l'âme de la Bretagne, entre terre et mer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="group relative rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="h-64 overflow-hidden">
                  <img src={feature.image} alt={feature.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-teal/90 flex items-center justify-center text-white shadow-lg">
                  {feature.icon}
                </div>
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg">
                  <p className="text-2xl font-bold text-navy" style={{fontFamily: 'var(--font-display)'}}>{feature.stat}</p>
                  <p className="text-xs text-navy/70 uppercase tracking-wider">{feature.statLabel}</p>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy" style={{ fontFamily: 'var(--font-display)' }}>{feature.title}</h3>
                  <p className="mt-2 text-foreground/70" style={{ fontFamily: 'var(--font-body)' }}>{feature.description}</p>
                  <a href="#" className="inline-flex items-center gap-2 mt-4 font-semibold text-teal hover:gap-3 transition-all duration-300">
                    Explorer
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
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