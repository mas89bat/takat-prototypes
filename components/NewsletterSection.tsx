import { useState, useEffect, useRef } from 'react';

function useInView(ref: React.RefObject<HTMLElement | null>) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.15 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
  return inView;
}

export default function NewsletterSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef);

  return (
    <section ref={sectionRef} className="bg-gradient-to-r from-teal to-teal/80 py-20">
      <div className="container mx-auto px-6 text-center">
        <div className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="uppercase tracking-widest text-white/90" style={{ fontFamily: "var(--font-accent)", fontSize: "1.3rem" }}>Restez connecté</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2" style={{ fontFamily: "var(--font-display)" }}>L'écho des Abers</h2>
          <p className="max-w-xl mx-auto mt-4 text-lg text-white/80" style={{ fontFamily: "var(--font-body)" }}>
            Abonnez-vous à notre newsletter pour recevoir nos bons plans, nos actualités et nos inspirations de séjour.
          </p>
        </div>

        <div className={`mt-10 max-w-lg mx-auto transition-all duration-700 ${inView ? "opacity-100 scale-100" : "opacity-0 scale-95"}`} style={{transitionDelay: '200ms'}}>
          <form className="flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Votre adresse email" 
              className="flex-1 px-6 py-4 rounded-full text-navy placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 w-full"
              style={{fontFamily: 'var(--font-body)'}}
            />
            <button className="bg-navy text-white rounded-full px-8 py-4 font-semibold hover:bg-navy/90 transition-colors w-full sm:w-auto">
              S'inscrire
            </button>
          </form>
          <p className="text-white/60 text-sm mt-4" style={{fontFamily: 'var(--font-body)'}}>
            Nous respectons votre vie privée. Désabonnez-vous à tout moment.
          </p>
        </div>
      </div>
    </section>
  );
}