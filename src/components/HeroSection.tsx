import { useState, useEffect } from "react";

const heroImages = [
  "https://www.abers-tourisme.com/assets/uploads/sites/8/2022/10/123-sb-plouguerneau-balade-camping-du-phare-de-lile-vierge-jusqua-roch-pelguent-hdjeremyjehanin-2024-scaled.jpg",
  "https://www.abers-tourisme.com/assets/uploads/sites/8/2025/08/plouguerneau21alamoureux-d6a2367.jpg",
  "https://www.abers-tourisme.com/assets/uploads/sites/8/2025/12/113-sb-landeda-point-de-vue-depuis-an-treiz-hdjeremyjehanin-2024-680x453.jpg",
  "https://swjqpkffgdhoyjihxldn.supabase.co/storage/v1/object/public/prototype-assets/f0165328-deeb-4edb-93ff-08ed23396b3d/hero.png"
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const scrollToNext = () => {
    document.getElementById("discover")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Image Carousel */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image}
              alt={`Abers coastline ${index + 1}`}
              className={`w-full h-full object-cover ${
                index === currentSlide ? "animate-kenburns" : ""
              }`}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/30 to-navy/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-teal mb-4" style={{ fontFamily: "var(--font-accent)", fontSize: "1.4rem" }}>
            Escale Lumineuse
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "var(--font-display)" }}>
            La Route des Phares
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto" style={{ fontFamily: "var(--font-body)" }}>
            Découvrez les sentinelles de la mer et leurs secrets. Laissez-vous séduire par la diversité des paysages du Pays des Abers, entre côtes sauvages et eaux turquoise.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => document.getElementById("discover")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-teal hover:bg-teal/80 text-white rounded-full px-8 py-4 font-semibold text-lg transition-all duration-300 hover:scale-105 w-full sm:w-auto" style={{ fontFamily: "var(--font-body)" }}
            >
              Découvrir les Abers
            </button>
            <button
              onClick={() => document.getElementById("experiences")?.scrollIntoView({ behavior: "smooth" })}
              className="border-2 border-white/40 text-white rounded-full px-8 py-4 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 w-full sm:w-auto" style={{ fontFamily: "var(--font-body)" }}
            >
              Nos Activités
            </button>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "w-8 bg-teal"
                : "w-3 bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        aria-label="Scroll to next section"
      >
        <svg className="w-6 h-6 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 120" className="w-full block">
          <path d="M0,80 C240,120 480,40 720,80 C960,120 1200,40 1440,80 L1440,120 L0,120 Z" className="fill-background" />
        </svg>
      </div>
    </section>
  );
}