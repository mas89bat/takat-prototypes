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

function LighthouseSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef);

  return (
    <section id="phares" ref={sectionRef} className="py-24 bg-navy text-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 -right-20 w-96 h-96 bg-teal/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -left-20 w-80 h-80 bg-teal/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className={`transition-all duration-700 ${
            inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          }`}>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://www.abers-tourisme.com/assets/uploads/sites/8/2025/08/plouguerneau21alamoureux-d6a2367.jpg"
                alt="Phare de Lanvaon au printemps"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>

          {/* Content Side */}
          <div className={`transition-all duration-700 ${
            inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          }`}>
            {/* Eyebrow */}
            <div className="mb-6">
              <span 
                className="text-teal uppercase tracking-widest font-medium"
                style={{ fontFamily: "var(--font-accent)" }}
              >
                Patrimoine Maritime
              </span>
            </div>

            {/* Headline */}
            <h2 
              className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Des Phares d'Exception
            </h2>

            {/* Description */}
            <p className="text-white/80 text-lg mb-8 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
              Chaque phare raconte une histoire unique. Du plus haut phare d'Europe sur l'Île Vierge 
              aux formes surprenantes du phare de Lanvaon, découvrez ces sentinelles qui guident les marins 
              depuis des générations dans les eaux tumultueuses des Abers.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <div 
                  className="text-4xl font-bold text-teal mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  82m
                </div>
                <div 
                  className="text-sm text-white/60 uppercase tracking-wider"
                  style={{ fontFamily: "var(--font-accent)" }}
                >
                  Plus Haut d'Europe
                </div>
              </div>
              <div className="text-center">
                <div 
                  className="text-4xl font-bold text-teal mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  1845
                </div>
                <div 
                  className="text-sm text-white/60 uppercase tracking-wider"
                  style={{ fontFamily: "var(--font-accent)" }}
                >
                  Année de Construction
                </div>
              </div>
              <div className="text-center">
                <div 
                  className="text-4xl font-bold text-teal mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  397
                </div>
                <div 
                  className="text-sm text-white/60 uppercase tracking-wider"
                  style={{ fontFamily: "var(--font-accent)" }}
                >
                  Marches à Gravir
                </div>
              </div>
              <div className="text-center">
                <div 
                  className="text-4xl font-bold text-teal mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  27km
                </div>
                <div 
                  className="text-sm text-white/60 uppercase tracking-wider"
                  style={{ fontFamily: "var(--font-accent)" }}
                >
                  Portée Lumineuse
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button 
              onClick={() => document.getElementById('experiences')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-teal hover:bg-teal/80 text-white rounded-full px-8 py-4 font-semibold transition-all duration-300 hover:scale-105 min-h-[48px]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Visiter les Phares
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LighthouseSection;