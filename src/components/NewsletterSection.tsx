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

function NewsletterSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef);
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Newsletter signup:', email);
    setEmail('');
    alert('Merci pour votre inscription ! Vous recevrez bientôt nos dernières actualités.');
  };

  return (
    <section id="newsletter" ref={sectionRef} className="py-24 bg-gradient-to-r from-teal to-teal/80 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 transform skew-x-12 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-1/4 h-2/3 bg-navy/10 transform -skew-x-12 -translate-x-1/4" />
      </div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className={`text-center max-w-3xl mx-auto transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          {/* Eyebrow */}
          <div className="mb-6">
            <span 
              className="text-white/90 uppercase tracking-widest font-medium"
              style={{ fontFamily: "var(--font-accent)" }}
            >
              Votre Inspiration
            </span>
          </div>

          {/* Headline */}
          <h2 
            className="text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Restez Connecté aux Abers
          </h2>

          {/* Subtitle */}
          <p className="text-lg text-white/80 mb-12 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
            Recevez nos conseils d'experts, les meilleures périodes de visite, 
            les événements exclusifs et les secrets les mieux gardés du Pays des Abers.
          </p>

          {/* Newsletter Form */}
          <form onSubmit={handleSubmit} className={`transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`} style={{ transitionDelay: "300ms" }}>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-6">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre adresse e-mail"
                className="flex-1 px-6 py-4 rounded-full text-navy focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300 min-h-[48px]"
                style={{ fontFamily: "var(--font-body)" }}
                required
              />
              <button
                type="submit"
                className="bg-navy text-white rounded-full px-8 py-4 font-semibold hover:bg-navy/90 transition-all duration-300 hover:scale-105 min-h-[48px] w-full sm:w-auto"
                style={{ fontFamily: "var(--font-body)" }}
              >
                S'inscrire
              </button>
            </div>
          </form>

          {/* Privacy Note */}
          <p className="text-white/60 text-sm max-w-md mx-auto" style={{ fontFamily: "var(--font-body)" }}>
            Nous respectons votre vie privée. Vos données ne seront jamais partagées 
            et vous pourrez vous désinscrire à tout moment.
          </p>

          {/* Benefits */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`} style={{ transitionDelay: "500ms" }}>
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: "var(--font-display)" }}>
                Conseils d'Experts
              </h3>
              <p className="text-white/70 text-sm" style={{ fontFamily: "var(--font-body)" }}>
                Les meilleures recommandations de nos guides locaux
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: "var(--font-display)" }}>
                Événements Exclusifs
              </h3>
              <p className="text-white/70 text-sm" style={{ fontFamily: "var(--font-body)" }}>
                Soyez les premiers informés des festivités locales
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: "var(--font-display)" }}>
                Lieux Secrets
              </h3>
              <p className="text-white/70 text-sm" style={{ fontFamily: "var(--font-body)" }}>
                Découvrez les trésors cachés des Abers
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsletterSection;