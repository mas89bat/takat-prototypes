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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center max-w-3xl mx-auto transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-white/80 uppercase tracking-widest" style={{ fontFamily: 'var(--font-accent)', fontSize: '1.3rem' }}>Restez Connecté</p>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 text-white" style={{ fontFamily: 'var(--font-display)' }}>Recevez nos dernières actualités</h2>
          <p className="text-lg text-white/80 mt-4" style={{ fontFamily: 'var(--font-body)' }}>
            Inscrivez-vous à notre newsletter pour recevoir des offres exclusives, des idées de séjour et les dernières nouvelles des Abers.
          </p>
          <div className={`mt-10 flex flex-col sm:flex-row gap-4 max-w-lg mx-auto transition-all duration-700 delay-150 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-6 py-4 rounded-full text-navy placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 w-full"
              style={{ fontFamily: 'var(--font-body)' }}
            />
            <button className="bg-navy text-white rounded-full px-8 py-4 font-semibold hover:bg-navy/90 transition-colors w-full sm:w-auto" style={{ fontFamily: 'var(--font-body)' }}>
              S'inscrire
            </button>
          </div>
          <p className="text-white/60 text-sm mt-4" style={{ fontFamily: 'var(--font-body)' }}>
            Nous respectons votre vie privée. Désinscription à tout moment.
          </p>
        </div>
      </div>
    </section>
  );
}
