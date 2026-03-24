import { useState, useEffect, useRef } from 'react';

const slides = [
  {
    image: 'https://cdt29.media.tourinsoft.eu/upload/Auberge-du-pont-2025.jpg?width=1920&height=1080&quality=80&crop=1',
    eyebrow: 'Votre escapade en Bretagne',
    headline: 'Le Pays des Abers vous attend',
    subtitle: 'Découvrez une terre de légendes, où la mer et la terre se rencontrent pour créer des paysages à couper le souffle. Des restaurants gastronomiques aux hébergements de charme, vivez une expérience inoubliable.',
  },
  {
    image: 'https://swjqpkffgdhoyjihxldn.supabase.co/storage/v1/object/public/prototype-assets/f0165328-deeb-4edb-93ff-08ed23396b3d/hero.png',
    eyebrow: 'Gastronomie d\'exception',
    headline: 'Saveurs Marines & Locales',
    subtitle: 'Laissez-vous séduire par une cuisine authentique, mettant à l\'honneur les produits frais de la mer et du terroir breton. Une aventure culinaire mémorable.',
  },
  {
    image: 'https://cdt29.media.tourinsoft.eu/upload/Goeland-Toque-2025--6-.jpg?width=1920&height=1080&quality=80&crop=1',
    eyebrow: 'Séjours de rêve',
    headline: 'Un Havre de Paix',
    subtitle: 'Trouvez le refuge parfait pour votre séjour. Des hôtels avec vue sur mer aux chambres d\'hôtes pittoresques, le confort et l\'hospitalité bretonne sont au rendez-vous.',
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
          className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? 'opacity-100' : 'opacity-0'}`}>
          <img
            src={slide.image}
            alt={`Slide ${i + 1}`}
            className={`w-full h-full object-cover ${i === current ? 'animate-kenburns' : ''}`}
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/30 to-navy/80" />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center text-white px-4">
        <p className="mb-4 text-teal animate-fade-in-down" style={{ fontFamily: 'var(--font-accent)', fontSize: '1.4rem' }}>
          {slides[current].eyebrow}
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-white max-w-4xl animate-fade-in-up" style={{ fontFamily: 'var(--font-display)' }}>
          {slides[current].headline}
        </h1>
        <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto animate-fade-in-up animation-delay-300" style={{ fontFamily: 'var(--font-body)' }}>
          {slides[current].subtitle}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-600">
          <a href="#experiences" className="bg-teal hover:bg-teal/80 text-white rounded-full px-8 py-4 font-semibold text-lg transition-colors duration-300 w-full sm:w-auto">
            Nos Restaurants
          </a>
          <a href="#stay" className="border-2 border-white/40 text-white rounded-full px-8 py-4 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300 w-full sm:w-auto">
            Nos Hébergements
          </a>
        </div>
      </div>

      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all duration-500 ${current === i ? 'w-8 bg-teal' : 'w-3 bg-white/50 hover:bg-white/80'}`}
          />
        ))}
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <svg className="w-6 h-6 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 120" className="w-full block">
          <path d="M0,80 C240,120 480,40 720,80 C960,120 1200,40 1440,80 L1440,120 L0,120 Z" className="fill-[var(--color-background)]" />
        </svg>
      </div>
    </section>
  );
}
