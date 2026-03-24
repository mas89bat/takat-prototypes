import { useState, useEffect, useRef } from 'react';

function useInView(ref: React.RefObject<HTMLElement | null>) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.1 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
  return inView;
}

const experiences = [
  { category: 'Nautique', title: 'Sortie en Kayak', image: 'https://images.unsplash.com/photo-1599499933362-e69a5e454471?w=800&h=600&fit=crop&auto=format&q=80', price: '45€', duration: '3h', rating: 5 },
  { category: 'Randonnée', title: 'Le sentier GR34', image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&h=600&fit=crop&auto=format&q=80', price: 'Gratuit', duration: 'Variable', rating: 4 },
  { category: 'Culture', title: 'Visite de l\'Aber Wrac\'h', image: 'https://images.unsplash.com/photo-1629288188338-6d2c8c0b5e40?w=800&h=600&fit=crop&auto=format&q=80', price: '15€', duration: '2h', rating: 5 },
  { category: 'Famille', title: 'Pêche à pied', image: 'https://images.unsplash.com/photo-1541575653499-80862590132b?w=800&h=600&fit=crop&auto=format&q=80', price: 'Gratuit', duration: 'Marée basse', rating: 4 },
  { category: 'Nautique', title: 'Cours de Paddle', image: 'https://images.unsplash.com/photo-1605322365449-3dea83492580?w=800&h=600&fit=crop&auto=format&q=80', price: '50€', duration: '1.5h', rating: 5 },
  { category: 'Culture', title: 'Dégustation d\'huîtres', image: 'https://images.unsplash.com/photo-1553530663-91136c3c5448?w=800&h=600&fit=crop&auto=format&q=80', price: '20€', duration: '1h', rating: 5 },
];

const filters = ['Tout', 'Nautique', 'Randonnée', 'Culture', 'Famille'];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-0.5">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className={`w-4 h-4 ${i < rating ? 'text-copper' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

export default function ExperiencesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef);
  const [activeFilter, setActiveFilter] = useState('Tout');

  const filteredExperiences = activeFilter === 'Tout' ? experiences : experiences.filter(e => e.category === activeFilter);

  return (
    <section id="experiences" ref={sectionRef} className="py-20 md:py-28 bg-sand">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center max-w-3xl mx-auto transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="uppercase tracking-widest text-teal" style={{ fontFamily: 'var(--font-accent)', fontSize: '1.3rem' }}>Intense & Sauvage</p>
          <h2 className="text-4xl md:text-5xl font-bold mt-4" style={{ fontFamily: 'var(--font-display)' }}>
            Profitez du grand air iodé
          </h2>
          <p className="mt-6 text-lg text-foreground/70" style={{ fontFamily: 'var(--font-body)' }}>
            Au gré de balades inédites, en plein air et en famille, découvrez une nature préservée. Lieu de culture et de loisirs, profitez d’un large choix d’activités.
          </p>
        </div>

        <div className={`mt-12 flex justify-center flex-wrap gap-3 transition-opacity duration-700 delay-200 ${inView ? 'opacity-100' : 'opacity-0'}`}>
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 min-h-[44px] ${activeFilter === filter ? 'bg-teal text-white' : 'bg-white text-navy border border-navy/20 hover:border-teal'}`}>
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {filteredExperiences.map((item, i) => (
            <div
              key={`${item.title}-${i}`}
              className={`group relative rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="h-64 overflow-hidden relative">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-1 text-sm font-semibold text-foreground">
                  {item.price} / {item.duration}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start">
                   <h3 className="text-2xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>{item.title}</h3>
                   <StarRating rating={item.rating} />
                </div>
                <p className="mt-2 text-foreground/70" style={{ fontFamily: 'var(--font-body)' }}>{item.category}</p>
                <a href="#" className="inline-flex items-center gap-2 mt-4 text-teal font-semibold group-hover:gap-3 transition-all duration-300">
                  Réserver →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
