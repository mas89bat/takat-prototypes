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

const stats = [
    { value: '82.5m', label: 'de hauteur' },
    { value: '365', label: 'marches en granit' },
    { value: '1897', label: 'année de construction' },
    { value: '52km', label: 'portée lumineuse' },
]

export default function LighthouseSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef);

  return (
    <section ref={sectionRef} className="bg-navy text-white py-20 md:py-28 overflow-hidden relative">
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-teal/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-teal/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="rounded-2xl overflow-hidden shadow-2xl aspect-w-4 aspect-h-5">
              <img src="https://swjqpkffgdhoyjihxldn.supabase.co/storage/v1/object/public/prototype-assets/f0165328-deeb-4edb-93ff-08ed23396b3d/section-about.png" alt="Phare de l'Île Vierge" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className={`transition-all duration-1000 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-teal" style={{ fontFamily: 'var(--font-accent)', fontSize: '1.3rem' }}>Le Géant des Mers</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4" style={{ fontFamily: 'var(--font-display)' }}>
              Le Phare de l'Île Vierge
            </h2>
            <p className="mt-6 text-lg text-white/80" style={{ fontFamily: 'var(--font-body)' }}>
              Les eaux turquoise et les terrasses du front de mer vous feront rêver. En longeant la corniche, vous pourrez admirer notre géant des mers. Situé à plus d’un kilomètre des côtes, il faudra prendre la mer si vous souhaitez découvrir ce site exceptionnel !
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              {stats.map((stat, i) => (
                <div key={i} className={`transition-opacity duration-700 ${inView ? 'opacity-100' : 'opacity-0'}`} style={{transitionDelay: `${200 + i * 150}ms`}}>
                  <p className="text-4xl font-bold text-teal" style={{ fontFamily: 'var(--font-display)' }}>{stat.value}</p>
                  <p className="text-sm text-white/60 uppercase tracking-wider mt-1" style={{ fontFamily: 'var(--font-body)' }}>{stat.label}</p>
                </div>
              ))}
            </div>
            <a href="#" className="inline-block bg-teal hover:bg-teal/80 text-white rounded-full px-8 py-4 font-semibold text-lg transition-colors duration-300 mt-8">
              Visitez le Phare
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
