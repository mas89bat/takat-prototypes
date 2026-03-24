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
    <section ref={sectionRef} className="py-24 bg-navy text-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-teal/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-teal/3 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          {/* Image Side */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://www.abers-tourisme.com/assets/uploads/sites/8/2022/08/kayak-ile-vierge-clo-et-clem-680x453.jpg"
                alt="Kayak près du Phare de l'Île Vierge"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>

          {/* Content Side */}
          <div className="relative z-10">
            <p className="text-teal mb-4" style={{ fontFamily: "var(--font-accent)", fontSize: "1.3rem" }}>
              Eaux Turquoise
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "var(--font-display)" }}>
              Le Phare de l'Île Vierge
            </h2>
            <p className="text-white/80 text-lg mb-8 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
              Les eaux turquoise et les terrasses du front de mer vous feront rêver. Situé à plus d'un kilomètre des côtes, 
              il faudra prendre la mer pour découvrir ce site exceptionnel, le plus haut phare d'Europe avec son petit frère 
              aujourd'hui transformé en écogîte.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-teal mb-2" style={{ fontFamily: "var(--font-display)" }}>
                  82m
                </div>
                <div className="text-sm text-white/60 uppercase tracking-wider" style={{ fontFamily: "var(--font-body)" }}>
                  Plus haut d'Europe
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-teal mb-2" style={{ fontFamily: "var(--font-display)" }}>
                  1845
                </div>
                <div className="text-sm text-white/60 uppercase tracking-wider" style={{ fontFamily: "var(--font-body)" }}>
                  Année de construction
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-teal mb-2" style={{ fontFamily: "var(--font-display)" }}>
                  1.5km
                </div>
                <div className="text-sm text-white/60 uppercase tracking-wider" style={{ fontFamily: "var(--font-body)" }}>
                  Distance des côtes
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-teal mb-2" style={{ fontFamily: "var(--font-display)" }}>
                  365
                </div>
                <div className="text-sm text-white/60 uppercase tracking-wider" style={{ fontFamily: "var(--font-body)" }}>
                  Marches à gravir
                </div>
              </div>
            </div>

            <button className="bg-teal hover:bg-teal/80 rounded-full px-8 py-4 text-white font-semibold transition-all duration-300 hover:scale-105" style={{ fontFamily: "var(--font-body)" }}>
              Visiter le Phare
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}