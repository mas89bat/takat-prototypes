import { useState, useEffect } from "react";

function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2022/10/123-sb-plouguerneau-balade-camping-du-phare-de-lile-vierge-jusqua-roch-pelguent-hdjeremyjehanin-2024-scaled.jpg",
      alt: "GR34 coastal path in Plouguerneau"
    },
    {
      image: "https://swjqpkffgdhoyjihxldn.supabase.co/storage/v1/object/public/prototype-assets/f0165328-deeb-4edb-93ff-08ed23396b3d/hero.png",
      alt: "Wild Atlantic coastline"
    },
    {
      image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2025/08/plouguerneau21alamoureux-d6a2367.jpg",
      alt: "Lanvaon lighthouse in spring"
    },
    {
      image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2022/08/kayak-ile-vierge-clo-et-clem-680x453.jpg",
      alt: "Kayaking near Île Vierge"
    },
    {
      image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2025/12/113-sb-landeda-point-de-vue-depuis-an-treiz-hdjeremyjehanin-2024-680x453.jpg",
      alt: "Viewpoint over Aber Benoît"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Image Carousel */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className={`w-full h-full object-cover ${
                index === currentSlide ? "animate-kenburns" : ""
              }`}
            />
          </div>
        ))}
      </div>

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/30 to-navy/80" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6 lg:px-12">
        <div className="text-center max-w-4xl">
          {/* Eyebrow */}
          <div className="mb-6">
            <span 
              className="text-teal uppercase tracking-widest font-medium"
              style={{ fontFamily: "var(--font-accent)", fontSize: "1.4rem" }}
            >
              Escale Lumineuse
            </span>
          </div>

          {/* Main Headline */}
          <h1 
            className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            La Route des Phares
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-12 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
            Découvrez les sentinelles de la mer et leurs secrets dans le Pays des Abers. 
            Laissez-vous séduire par la diversité de paysages incomparables entre l'Aber Wrac'h et l'Aber Benoît.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={() => document.getElementById('decouvrir')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-teal hover:bg-teal/80 text-white rounded-full px-8 py-4 font-semibold text-lg transition-all duration-300 hover:scale-105 w-full sm:w-auto min-h-[48px]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Découvrir les Abers
            </button>
            <button 
              onClick={() => document.getElementById('experiences')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white/40 text-white rounded-full px-8 py-4 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 w-full sm:w-auto min-h-[48px]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Nos Activités
            </button>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "w-8 h-3 bg-teal"
                : "w-3 h-3 bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Animated Scroll Chevron */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <svg className="w-6 h-6 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 120" className="w-full block">
          <path d="M0,80 C240,120 480,40 720,80 C960,120 1200,40 1440,80 L1440,120 L0,120 Z" className="fill-background" />
        </svg>
      </div>
    </section>
  );
}

export default HeroSection;