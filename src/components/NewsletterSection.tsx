import { useState, useEffect, useRef } from 'react';

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
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef);

  return (
    <section ref={sectionRef} className="bg-gradient-to-r from-teal to-teal/80 py-24">
      <div className="container mx-auto px-6">
        <div className={`max-w-2xl mx-auto text-center transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="uppercase tracking-widest text-white/70" style={{ fontFamily: 'var(--font-accent)', fontSize: '1.3rem' }}>Restez Connecté</p>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-white" style={{ fontFamily: 'var(--font-display)' }}>Recevez nos dernières actualités</h2>
          <p className="mt-6 text-lg text-white/80" style={{ fontFamily: 'var(--font-body)' }}>
            Inscrivez-vous pour obtenir les meilleurs plans, les événements à ne pas manquer et les secrets des Abers directement dans votre boîte mail.
          </p>

          <form className="mt-10 max-w-lg mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Votre adresse email" 
                className="flex-1 px-6 py-4 rounded-full text-navy placeholder-navy/60 focus:outline-none focus:ring-2 focus:ring-white/50 bg-white font-semibold" 
                style={{ fontFamily: 'var(--font-body)' }}
              />
              <button type="submit" className="bg-navy text-white rounded-full px-8 py-4 font-semibold hover:bg-navy/90 transition-colors">
                S'inscrire
              </button>
            </div>
          </form>
          <p className="mt-4 text-white/60 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
            Nous respectons votre vie privée. Pas de spam, promis.
          </p>
        </div>
      </div>
    </section>
  );
}