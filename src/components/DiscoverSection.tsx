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

const discoverItems = [
  {
    title: 'L’Aber Wrac’h',
    description: 'Le plus grand des deux abers, idéal pour une sortie en kayak et admirer ses paysages changeants.',
    image: 'https://www.abers-tourisme.com/assets/uploads/sites/8/2022/12/laber-wrach-680x453.jpg',
    stat: '4 km de large',
    statLabel: 'à l\'embouchure',
    icon: 'Wave',
  },
  {
    title: 'L’Aber Benoît',
    description: 'Plus sauvage et sinueux, il est parfait pour des randonnées bucoliques au plus près de la nature.',
    image: 'https://www.abers-tourisme.com/assets/uploads/sites/8/2022/11/aber-benoit-yannick-le-gal-680x453.jpg',
    stat: '25+ km',
    statLabel: 'de sentiers',
    icon: 'Hiking',
  },
  {
    title: 'L’archipel des Abers',
    description: 'Un chapelet d\'îles et d\'îlots qui offre des panoramas uniques et protège une riche biodiversité marine.',
    image: 'https://www.abers-tourisme.com/assets/uploads/sites/8/2022/12/archip2-680x453.jpg',
    stat: '90+ îles',
    statLabel: 'et îlots',
    icon: 'Island',
  },
];

const Icon = ({ name }: { name: string }) => {
  switch (name) {
    case 'Wave': return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 13.25c3.5-2 4.5-5.25 7.5-5.25s4 3.25 7.5 3.25 4-3.25 4-3.25"/><path d="M2 19.25c3.5-2 4.5-5.25 7.5-5.25s4 3.25 7.5 3.25 4-3.25 4-3.25"/></svg>;
    case 'Hiking': return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H18l-3.5 4H18l-3.5 4H18l-3.5 4h3.5v4H2v-5l4-4-4-4V2z"/></svg>;
    case 'Island': return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 13.1c3.5-2 4.5-5.1 7.5-5.1s4 3.1 7.5 3.1 4-3.1 4-3.1"/><path d="M2 7.1C5.5 5.1 6.5 2 9.5 2s4 3.1 7.5 3.1 4-3.1 4-3.1"/><path d="M12 12v9"/><path d="m12 12-2-4"/><path d="m12 12 2-4"/></svg>;
    default: return null;
  }
}

export default function DiscoverSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef);

  return (
    <section id="discover" ref={sectionRef} className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center max-w-3xl mx-auto transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-teal uppercase tracking-widest" style={{ fontFamily: 'var(--font-accent)', fontSize: '1.3rem' }}>Bienvenue</p>
          <h2 className="text-4xl md:text-5xl font-bold mt-2" style={{ fontFamily: 'var(--font-display)' }}>Les sentinelles de la mer & leurs secrets</h2>
          <p className="text-lg text-foreground/70 mt-4" style={{ fontFamily: 'var(--font-body)' }}>
            Au gré de balades inédites, en plein air et en famille, découvrez une nature préservée. Lieu de culture et de loisirs, profitez d’un large choix d’activités.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {discoverItems.map((item, i) => (
            <div
              key={i}
              className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="group relative rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="h-64 overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-teal/90 flex items-center justify-center text-white">
                  <Icon name={item.icon} />
                </div>
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg flex items-center gap-3">
                  <span className="text-2xl font-bold text-teal" style={{ fontFamily: 'var(--font-display)' }}>{item.stat}</span>
                  <span className="text-sm text-foreground/70 leading-tight" style={{ fontFamily: 'var(--font-body)' }}>{item.statLabel}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>{item.title}</h3>
                  <p className="text-foreground/70 mt-2" style={{ fontFamily: 'var(--font-body)' }}>{item.description}</p>
                  <a href="#" className="inline-flex items-center gap-2 text-teal font-semibold mt-4 hover:gap-3 transition-all duration-300" style={{ fontFamily: 'var(--font-body)' }}>
                    Explorer
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
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
