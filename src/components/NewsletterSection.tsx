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

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      // Here you would typically send the email to your backend
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <section id="newsletter" ref={sectionRef} className="py-24 bg-gradient-to-r from-teal to-teal/80 relative overflow-hidden">
      {/* Background decorative waves */}
      <div className="absolute inset-0 opacity-10">
        <div className="wave-animate absolute top-10 left-0 w-full h-32">
          <svg viewBox="0 0 1440 320" className="w-full h-full">
            <path fill="currentColor" d="M0,96L48,112C96,128 192,160 288,160C384,160 480,128 576,122.7C672,117 768,139 864,149.3C960,160 1056,160 1152,138.7C1248,117 1344,75 1392,53.3L1440,32L1440,320L1392,320C1344,320 1248,320 1152,320C1056,320 960,320 864,320C768,320 672,320 576,320C480,320 384,320 288,320C192,320 96,320 48,320L0,320Z" />
          </svg>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className={`transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <p className="text-white/80 mb-4" style={{ fontFamily: "var(--font-accent)", fontSize: "1.3rem" }}>
            Votre Inspiration
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-display)" }}>
            Restez Connecté aux Abers
          </h2>
          <p className="text-lg text-white/90 mb-12 max-w-2xl mx-auto" style={{ fontFamily: "var(--font-body)" }}>
            Recevez nos dernières découvertes, nos événements exclusifs et nos conseils d'initiés 
            pour profiter pleinement de votre séjour dans le Pays des Abers.
          </p>

          {/* Newsletter Form */}
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Votre adresse email"
                  className="flex-1 px-6 py-4 rounded-full text-navy focus:outline-none focus:ring-4 focus:ring-white/30 transition-all" 
                  style={{ fontFamily: "var(--font-body)" }}
                  required
                />
                <button
                  type="submit"
                  className="bg-navy text-white rounded-full px-8 py-4 font-semibold hover:bg-navy/90 transition-all duration-300 hover:scale-105 w-full sm:w-auto" 
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  S'abonner
                </button>
              </div>
            </form>
          ) : (
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 max-w-lg mx-auto">
              <div className="flex items-center justify-center mb-4">
                <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "var(--font-display)" }}>
                Merci pour votre inscription !
              </h3>
              <p className="text-white/90" style={{ fontFamily: "var(--font-body)" }}>
                Vous recevrez bientôt nos meilleures recommandations pour découvrir les Abers.
              </p>
            </div>
          )}

          {/* Privacy Note */}
          <p className="text-white/60 text-sm mt-6 max-w-md mx-auto" style={{ fontFamily: "var(--font-body)" }}>
            Nous respectons votre vie privée. Vous pouvez vous désabonner à tout moment. 
            Aucune donnée ne sera partagée avec des tiers.
          </p>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-4 mt-8">
            <a
              href="https://www.facebook.com/aberstourisme/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center text-white"
              aria-label="Facebook"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/paysdesabers/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center text-white"
              aria-label="Instagram"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.621 5.367 11.988 11.988 11.988s11.987-5.367 11.987-11.988C24.014 5.367 18.648.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.596-3.205-1.533l3.205-3.205c.937.937 2.456.937 3.393 0s.937-2.456 0-3.393L8.637 5.652c.757-.937 1.908-1.533 3.205-1.533 2.265 0 4.1 1.835 4.1 4.1s-1.835 4.1-4.1 4.1c-.571 0-1.11-.117-1.602-.328l-2.791 2.791c-.937-.937-.937-2.456 0-3.393z" />
              </svg>
            </a>
            <a
              href="https://www.abers-tourisme.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center text-white"
              aria-label="Site Web"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}