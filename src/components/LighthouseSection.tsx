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

export default function LighthouseSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef);

  return (
    <section ref={sectionRef} className="bg-navy text-white py-20 md:py-32 relative overflow-hidden">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-teal/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-teal/10 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center transition-all duration-700 ${inView ? 'opacity-100' : 'opacity-0'}`}>
          <div className={`transition-transform duration-1000 ${inView ? 'translate-x-0' : '-translate-x-12'}`}>
            <img
              src="https://cdt29.media.tourinsoft.eu/upload/Auberge-du-Pont_2.jpg?width=800&height=900&crop=1&quality=80"
              alt="Auberge du Pont"
              className="rounded-2xl overflow-hidden shadow-2xl w-full h-full object-cover"
            />
          </div>
          <div className={`transition-transform duration-1000 delay-200 ${inView ? 'translate-x-0' : 'translate-x-12'}`}>
            <p className="text-teal" style={{ fontFamily: 'var(--font-accent)', fontSize: '1.3rem' }}>L'Auberge du Pont</p>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-white" style={{ fontFamily: 'var(--font-display)' }}>
              Les Pieds dans l'Eau
            </h2>
            <p className="mt-6 text-lg text-white/80" style={{ fontFamily: 'var(--font-body)' }}>
              Cet ancien moulin à marée sur le GR34 est une auberge accueillante, décorée d'antiquités marines où l'on vous servira des produits de la mer et du terroir. Profitez de notre terrasse avec une vue imprenable sur l'Aber Wrac'h.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div>
                <p className="text-4xl font-bold text-teal" style={{ fontFamily: 'var(--font-display)' }}>82</p>
                <p className="text-sm text-white/60 uppercase tracking-wider">Couverts</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-teal" style={{ fontFamily: 'var(--font-display)' }}>1</p>
                <p className="text-sm text-white/60 uppercase tracking-wider">Dîner-concert par mois</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-teal" style={{ fontFamily: 'var(--font-display)' }}>GR34</p>
                <p className="text-sm text-white/60 uppercase tracking-wider">Accès direct</p>
              </div>
               <div>
                <p className="text-4xl font-bold text-teal" style={{ fontFamily: 'var(--font-display)' }}>100%</p>
                <p className="text-sm text-white/60 uppercase tracking-wider">Produits frais</p>
              </div>
            </div>
            <a href="#experiences" className="inline-block bg-teal hover:bg-teal/80 text-white rounded-full px-8 py-4 mt-8 font-semibold text-lg transition-colors duration-300">
              Découvrir la carte
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
