import { useState, useEffect } from 'react';

const heroImages = [
  'https://www.abers-tourisme.com/assets/uploads/sites/8/2022/10/123-sb-plouguerneau-balade-camping-du-phare-de-lile-vierge-jusqua-roch-pelguent-hdjeremyjehanin-2024-scaled.jpg',
  'https://www.abers-tourisme.com/assets/uploads/sites/8/2022/12/otabers19alamoureux-mg-2018.jpg',
  'https://www.abers-tourisme.com/assets/uploads/sites/8/2025/08/plouguerneau21alamoureux-d6a2367.jpg',
  'https://www.abers-tourisme.com/assets/uploads/sites/8/2022/12/laber-wrach-680x453.jpg',
  'https://www.abers-tourisme.com/assets/uploads/sites/8/2022/11/aber-benoit-yannick-le-gal-680x453.jpg',
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen relative overflow-hidden bg-navy flex items-center justify-center text-center text-white">
      {heroImages.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Paysage des Abers ${i + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${i === current ? 'opacity-100 animate-kenburns' : 'opacity-0'}`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/30 to-navy/80"></div>

      <div className="relative z-10 p-6 flex flex-col items-center">
        <p className="text-teal mb-4" style={{ fontFamily: "var(--font-accent)", fontSize: "1.4rem" }}>
          Escale lumineuse
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-white max-w-4xl" style={{ fontFamily: "var(--font-display)" }}>
          La Route des Phares du Pays des Abers
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mt-6 mx-auto" style={{ fontFamily: "var(--font-body)" }}>
          Explorez un littoral sauvage, parsemé de sentinelles de la mer et de paysages à couper le souffle. Une aventure inoubliable sur la Côte des Légendes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <a href="#decouvrir" className="bg-teal hover:bg-teal/80 text-white rounded-full px-8 py-4 font-semibold text-lg transition-colors duration-300 w-full sm:w-auto">
            Commencer l'exploration
          </a>
          <a href="#" className="border-2 border-white/40 text-white rounded-full px-8 py-4 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300 w-full sm:w-auto">
            Planifier mon séjour
          </a>
        </div>
      </div>

      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2">
        {heroImages.map((_, i) => (
          <button 
            key={i} 
            onClick={() => setCurrent(i)} 
            className={`h-3 rounded-full transition-all duration-300 ${i === current ? 'w-8 bg-teal' : 'w-3 bg-white/50 hover:bg-white/80'}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 120" className="w-full block">
          <path d="M0,80 C240,120 480,40 720,80 C960,120 1200,40 1440,80 L1440,120 L0,120 Z" className="fill-background" />
        </svg>
      </div>
    </section>
  );
}