import { useState, useEffect, useRef } from 'react';

const slides = [
  { url: 'https://www.abers-tourisme.com/assets/uploads/sites/8/2022/10/123-sb-plouguerneau-balade-camping-du-phare-de-lile-vierge-jusqua-roch-pelguent-hdjeremyjehanin-2024-scaled.jpg' },
  { url: 'https://www.abers-tourisme.com/assets/uploads/sites/8/2025/08/plouguerneau21alamoureux-d6a2367.jpg' },
  { url: 'https://www.abers-tourisme.com/assets/uploads/sites/8/2025/12/113-sb-landeda-point-de-vue-depuis-an-treiz-hdjeremyjehanin-2024-680x453.jpg' },
  { url: 'https://swjqpkffgdhoyjihxldn.supabase.co/storage/v1/object/public/prototype-assets/f0165328-deeb-4edb-93ff-08ed23396b3d/hero.png' },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen relative overflow-hidden bg-navy">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${i === current ? 'opacity-100' : 'opacity-0'}`}>
          <img
            src={slide.url}
            alt={`Paysage des Abers ${i + 1}`}
            className={`w-full h-full object-cover ${i === current ? 'animate-kenburns' : ''}`}
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/30 to-navy/80"></div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center text-white px-6">
        <p className="text-teal mb-4" style={{ fontFamily: "var(--font-accent)", fontSize: "1.4rem" }}>
          Escale lumineuse
        </p>
        <h1 className="text-5xl md:text-7xl font-bold max-w-4xl" style={{ fontFamily: "var(--font-display)" }}>
          La Route des Phares
        </h1>
        <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto" style={{ fontFamily: "var(--font-body)" }}>
          Le Pays des Abers vous étonnera par la diversité de ses paysages. Une sortie en kayak ou une randonnée vous permettront d’apprécier la richesse naturelle incomparable de notre pays.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a href="#" className="bg-teal hover:bg-teal/80 text-white rounded-full px-8 py-4 font-semibold text-lg transition-colors duration-300">
            Découvrir les Abers
          </a>
          <a href="#" className="border-2 border-white/40 text-white rounded-full px-8 py-4 backdrop-blur-sm hover:bg-white/10 font-semibold text-lg transition-colors duration-300">
            Voir les activités
          </a>
        </div>
      </div>

      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            className={`cursor-pointer h-3 rounded-full transition-all duration-500 ${current === i ? 'w-8 bg-teal' : 'w-3 bg-white/50'}`}
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