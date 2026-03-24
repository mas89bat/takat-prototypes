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
    <section ref={sectionRef} className="relative bg-navy text-white py-24 overflow-hidden">
      <div className="absolute w-96 h-96 bg-teal/5 rounded-full blur-3xl -top-20 -left-40"></div>
      <div className="absolute w-96 h-96 bg-teal/5 rounded-full blur-3xl -bottom-20 -right-40"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="rounded-2xl overflow-hidden shadow-2xl aspect-w-4 aspect-h-5">
              <img src="https://www.abers-tourisme.com/assets/uploads/sites/8/2022/10/123-sb-plouguerneau-balade-camping-du-phare-de-lile-vierge-jusqua-roch-pelguent-hdjeremyjehanin-2024-scaled.jpg" alt="Le phare de l'île Vierge" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <p className="text-teal uppercase tracking-widest" style={{ fontFamily: 'var(--font-accent)', fontSize: '1.3rem' }}>Notre Géant des Mers</p>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 text-white" style={{ fontFamily: 'var(--font-display)' }}>Le phare de l'Île Vierge</h2>
            <p className="text-lg text-white/80 mt-4" style={{ fontFamily: 'var(--font-body)' }}>
              Les eaux turquoise et les terrasses du front de mer vous feront rêver. En longeant la corniche, vous pourrez admirer notre géant des mers. Situé à plus d’un kilomètre des côtes, il faudra prendre la mer si vous souhaitez découvrir ce site exceptionnel !
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center md:text-left">
                <p className="text-4xl font-bold text-teal" style={{ fontFamily: 'var(--font-display)' }}>82.5m</p>
                <p className="text-sm text-white/60 uppercase tracking-wider mt-1" style={{ fontFamily: 'var(--font-body)' }}>De Hauteur</p>
              </div>
              <div className="text-center md:text-left">
                <p className="text-4xl font-bold text-teal" style={{ fontFamily: 'var(--font-display)' }}>365</p>
                <p className="text-sm text-white/60 uppercase tracking-wider mt-1" style={{ fontFamily: 'var(--font-body)' }}>Marches</p>
              </div>
              <div className="text-center md:text-left">
                <p className="text-4xl font-bold text-teal" style={{ fontFamily: 'var(--font-display)' }}>1902</p>
                <p className="text-sm text-white/60 uppercase tracking-wider mt-1" style={{ fontFamily: 'var(--font-body)' }}>Inauguration</p>
              </div>
              <div className="text-center md:text-left">
                <p className="text-4xl font-bold text-teal" style={{ fontFamily: 'var(--font-display)' }}>52km</p>
                <p className="text-sm text-white/60 uppercase tracking-wider mt-1" style={{ fontFamily: 'var(--font-body)' }}>Portée Lumineuse</p>
              </div>
            </div>
            <button className="bg-teal hover:bg-teal/80 text-white rounded-full px-8 py-4 font-semibold text-lg mt-8 transition-colors duration-300 w-full sm:w-auto" style={{ fontFamily: 'var(--font-body)' }}>
              Visiter le phare
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
