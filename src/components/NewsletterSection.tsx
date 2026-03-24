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
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef);

  return (
    <section ref={sectionRef} className="bg-navy text-white py-20 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center max-w-2xl mx-auto transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-teal" style={{ fontFamily: 'var(--font-accent)', fontSize: '1.3rem' }}>Restons en contact</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4" style={{ fontFamily: 'var(--font-display)' }}>
            Rejoignez Notre Club Exclusif
          </h2>
          <p className="mt-6 text-lg text-white/80" style={{ fontFamily: 'var(--font-body)' }}>
            Recevez les dernières offres, les actualités et les bons plans du Pays des Abers directement dans votre boîte de réception.
          </p>
          
          <form className="mt-10 max-w-lg mx-auto">
             <div className="flex flex-col sm:flex-row gap-4">
                <input 
                    type="email" 
                    placeholder="Votre adresse email"
                    required
                    className="flex-1 px-6 py-4 rounded-full text-navy placeholder-navy/60 bg-sand focus:outline-none focus:ring-2 focus:ring-white/50 transition-shadow duration-300 w-full"
                />
                <button 
                    type="submit"
                    className="bg-sand text-navy rounded-full px-8 py-4 font-semibold hover:bg-white transition-colors duration-300 w-full sm:w-auto"
                >
                    S'inscrire
                </button>
            </div>
            <p className="mt-4 text-white/60 text-sm" style={{fontFamily: 'var(--font-body)'}}>Nous respectons votre vie privée. Pas de spam.</p>
          </form>

        </div>
      </div>
    </section>
  );
}