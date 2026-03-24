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
    <section ref={sectionRef} className="py-20 md:py-28 bg-gradient-to-r from-teal to-teal/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`max-w-2xl mx-auto text-center text-white transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="uppercase tracking-widest" style={{ fontFamily: 'var(--font-accent)', fontSize: '1.3rem' }}>Restez Connecté</p>
          <h2 className="text-4xl md:text-5xl font-bold mt-4" style={{ fontFamily: 'var(--font-display)' }}>
            Recevez l'inspiration des Abers
          </h2>
          <p className="mt-6 text-lg text-white/80" style={{ fontFamily: 'var(--font-body)' }}>
            Inscrivez-vous à notre newsletter pour recevoir des idées de séjours exclusives, nos actualités et les offres de nos partenaires.
          </p>
        </div>

        <div
          className={`mt-10 max-w-lg mx-auto transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-6 py-4 rounded-full text-navy placeholder-navy/60 focus:outline-none focus:ring-2 focus:ring-white/50 w-full"
              style={{ fontFamily: 'var(--font-body)' }}
            />
            <button
              type="submit"
              className="bg-navy text-white rounded-full px-8 py-4 font-semibold hover:bg-navy/90 transition-colors w-full sm:w-auto"
            >
              S'inscrire
            </button>
          </form>
          <p className="text-center mt-4 text-white/60 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
            Nous respectons votre vie privée. Désinscription à tout moment.
          </p>
        </div>
      </div>
    </section>
  );
}
