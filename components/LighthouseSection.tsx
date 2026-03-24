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

export default function LighthouseSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef);

  return (
    <section ref={sectionRef} className="bg-navy text-white py-24 overflow-hidden relative">
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-teal/5 rounded-full blur-3xl -translate-x-1/2"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-teal/5 rounded-full blur-3xl translate-x-1/2"></div>
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className={`transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
          <div className="rounded-2xl overflow-hidden shadow-2xl aspect-w-4 aspect-h-5">
            <img 
              src="https://www.abers-tourisme.com/assets/uploads/sites/8/2022/12/otabers19alamoureux-mg-2018.jpg"
              alt="Phare de l'Île Vierge" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className={`transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{transitionDelay: '200ms'}}>
          <p className="text-teal" style={{ fontFamily: "var(--font-accent)", fontSize: "1.3rem" }}>Le Géant des Mers</p>
          <h2 className="text-4xl md:text-5xl font-bold mt-2" style={{ fontFamily: "var(--font-display)" }}>Le Phare de l'Île Vierge</h2>
          <p className="mt-6 text-lg text-white/80" style={{ fontFamily: "var(--font-body)" }}>
            Dominant l'horizon, ce chef-d'œuvre architectural n'est pas seulement un guide pour les marins, mais un véritable trésor national. Son ascension est une expérience unique, récompensée par un panorama spectaculaire sur l'archipel des Abers.
          </p>
          <div className="grid grid-cols-2 gap-6 mt-8">
            <div>
              <p className="text-4xl font-bold text-teal" style={{ fontFamily: "var(--font-display)" }}>N°1</p>
              <p className="text-sm text-white/60 uppercase tracking-wider">en Europe</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-teal" style={{ fontFamily: "var(--font-display)" }}>365</p>
              <p className="text-sm text-white/60 uppercase tracking-wider">Marches</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-teal" style={{ fontFamily: "var(--font-display)" }}>12 500</p>
              <p className="text-sm text-white/60 uppercase tracking-wider">Plaques d'opaline</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-teal" style={{ fontFamily: "var(--font-display)" }}>52 km</p>
              <p className="text-sm text-white/60 uppercase tracking-wider">de portée lumineuse</p>
            </div>
          </div>
          <a href="#" className="inline-block bg-teal hover:bg-teal/80 text-white rounded-full px-8 py-4 mt-8 font-semibold text-lg transition-colors duration-300">
            Visiter le phare
          </a>
        </div>
      </div>
    </section>
  );
}