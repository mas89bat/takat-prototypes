import { useState, useEffect } from 'react';

const slides = [
  {
    img: 'https://www.abers-tourisme.com/assets/uploads/sites/8/2022/10/123-sb-plouguerneau-balade-camping-du-phare-de-lile-vierge-jusqua-roch-pelguent-hdjeremyjehanin-2024-scaled.jpg',
    eyebrow: 'Escale lumineuse',
    headline: 'La route des phares',
    subtitle: 'Explorez la côte des légendes, où terre et mer se rencontrent dans des paysages à couper le souffle.',
  },
  {
    img: 'https://www.abers-tourisme.com/assets/uploads/sites/8/2025/08/plouguerneau21alamoureux-d6a2367.jpg',
    eyebrow: 'Nature préservée',
    headline: 'Le charme des Abers',
    subtitle: 'Une sortie en kayak dans l’Aber Wrac’h ou une randonnée le long de l’Aber-Benoit, le plus sauvage.',
  },
  {
    img: 'https://www.abers-tourisme.com/assets/uploads/sites/8/2022/08/kayak-ile-vierge-clo-et-clem-680x453.jpg',
    eyebrow: 'Aventure et découverte',
    headline: 'Expériences inoubliables',
    subtitle: 'Prenez la mer pour découvrir des sites exceptionnels, accessibles uniquement par bateau.',
  },
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
            src={slide.img}
            alt={slide.headline}
            className={`w-full h-full object-cover ${i === current ? 'animate-kenburns' : ''}`}
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/30 to-navy/80"></div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center text-white px-4">
        <p className="text-teal mb-4" style={{ fontFamily: "var(--font-accent)", fontSize: '1.4rem' }}>{slides[current].eyebrow}</p>
        <h1 className="text-5xl md:text-7xl font-bold max-w-4xl" style={{ fontFamily: 'var(--font-display)' }}>{slides[current].headline}</h1>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mt-6" style={{ fontFamily: 'var(--font-body)' }}>{slides[current].subtitle}</p>
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          <button className="bg-teal hover:bg-teal/80 text-white rounded-full px-8 py-4 font-semibold text-lg transition-colors duration-300 w-full sm:w-auto" style={{ fontFamily: 'var(--font-body)' }}>
            Découvrir les Abers
          </button>
          <button className="border-2 border-white/40 text-white rounded-full px-8 py-4 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300 w-full sm:w-auto" style={{ fontFamily: 'var(--font-body)' }}>
            Nos Activités
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-3 rounded-full transition-all duration-300 ${i === current ? 'w-8 bg-teal' : 'w-3 bg-white/50'}`}
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
