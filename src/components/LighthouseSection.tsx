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

export default function LighthouseSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef);

  return (
    <section ref={sectionRef} className="bg-navy text-white py-24 relative overflow-hidden">
      <div className="absolute w-96 h-96 bg-teal/5 rounded-full blur-3xl top-0 -left-32 opacity-50"></div>
      <div className="absolute w-96 h-96 bg-teal/5 rounded-full blur-3xl bottom-0 -right-32 opacity-50"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-700 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img src="https://swjqpkffgdhoyjihxldn.supabase.co/storage/v1/object/public/prototype-assets/f0165328-deeb-4edb-93ff-08ed23396b3d/section-about.png" alt="Le Phare de l'Île Vierge" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className={`transition-all duration-700 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <p className="text-teal" style={{ fontFamily: "var(--font-accent)", fontSize: "1.3rem" }}>LE GÉANT DES MERS</p>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-white" style={{ fontFamily: "var(--font-display)" }}>Le Phare de l'Île Vierge</h2>
            <p className="mt-6 text-lg text-white/80" style={{ fontFamily: "var(--font-body)" }}>
              Situé à plus d’un kilomètre des côtes, il faudra prendre la mer si vous souhaitez découvrir ce site exceptionnel ! Les eaux turquoise et les terrasses du front de mer vous feront rêver.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div>
                <p className="text-4xl font-bold text-teal" style={{ fontFamily: 'var(--font-display)' }}>82.5m</p>
                <p className="text-sm text-white/60 uppercase tracking-wider">Hauteur</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-teal" style={{ fontFamily: 'var(--font-display)' }}>397</p>
                <p className="text-sm text-white/60 uppercase tracking-wider">Marches</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-teal" style={{ fontFamily: 'var(--font-display)' }}>50km</p>
                <p className="text-sm text-white/60 uppercase tracking-wider">Portée lumineuse</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-teal" style={{ fontFamily: 'var(--font-display)' }}>1902</p>
                <p className="text-sm text-white/60 uppercase tracking-wider">Inauguration</p>
              </div>
            </div>
            <a href="#" className="inline-block bg-teal hover:bg-teal/80 text-white rounded-full px-8 py-4 mt-8 font-semibold text-lg transition-colors duration-300">
              Visiter le phare
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}