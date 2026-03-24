import { useState, useEffect, useRef } from 'react';

function useInView(ref: React.RefObject<HTMLElement | null>) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold: 0.1 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
  return inView;
}

const experiences = [
    { id: 1, title: "Kayak dans l'Aber Wrac'h", category: "Nautique", image: 'https://www.abers-tourisme.com/assets/uploads/sites/8/2022/08/kayak-ile-vierge-clo-et-clem-680x453.jpg', price: 'À partir de 25€', duration: '2 heures', rating: 5 },
    { id: 2, title: 'Balade sur le GR34', category: 'Randonnée', image: 'https://www.abers-tourisme.com/assets/uploads/sites/8/2022/10/123-sb-plouguerneau-balade-camping-du-phare-de-lile-vierge-jusqua-roch-pelguent-hdjeremyjehanin-2024-680x509.jpg', price: 'Gratuit', duration: 'Flexible', rating: 5 },
    { id: 3, title: 'Découverte des Chapelles', category: 'Culture', image: 'https://swjqpkffgdhoyjihxldn.supabase.co/storage/v1/object/public/prototype-assets/f0165328-deeb-4edb-93ff-08ed23396b3d/gallery-feature.png', price: 'Visite libre', duration: '1-2 heures', rating: 4 },
    { id: 4, title: 'Pêche à pied en famille', category: 'Famille', image: 'https://swjqpkffgdhoyjihxldn.supabase.co/storage/v1/object/public/prototype-assets/f0165328-deeb-4edb-93ff-08ed23396b3d/section-team.png', price: 'Gratuit', duration: 'Marée basse', rating: 4 },
    { id: 5, title: 'Cours de Char à Voile', category: 'Nautique', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop&auto=format&q=80', price: 'À partir de 40€', duration: '1.5 heures', rating: 5 },
    { id: 6, title: 'Visite guidée des Abers', category: 'Culture', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=800&fit=crop&auto=format&q=80', price: '15€ / personne', duration: '3 heures', rating: 4 },
];

const categories = ['Tout', 'Nautique', 'Randonnée', 'Culture', 'Famille'];

const StarIcon = ({ filled }: { filled: boolean }) => (
  <svg className={`w-4 h-4 ${filled ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

export default function ExperiencesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef);
  const [activeCategory, setActiveCategory] = useState('Tout');

  const filteredExperiences = activeCategory === 'Tout' ? experiences : experiences.filter(exp => exp.category === activeCategory);

  return (
    <section id="experiences-section" ref={sectionRef} className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className={`text-center max-w-3xl mx-auto transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="uppercase tracking-widest text-teal" style={{ fontFamily: 'var(--font-accent)', fontSize: '1.3rem' }}>NOS TOPS</p>
          <h2 className="text-4xl md:text-5xl font-bold mt-4" style={{ fontFamily: 'var(--font-display)' }}>Intense & Sauvage</h2>
          <p className="mt-6 text-lg text-foreground/70" style={{ fontFamily: 'var(--font-body)' }}>
            Au gré de balades inédites, en plein air et en famille, découvrez une nature préservée et profitez d’un large choix d’activités.
          </p>
        </div>

        <div className={`flex justify-center flex-wrap gap-3 mt-12 transition-all duration-700 ${inView ? "opacity-100" : "opacity-0"}`}>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${activeCategory === category ? 'bg-teal text-white' : 'bg-white text-navy border border-navy/20 hover:border-teal'}`}>
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {filteredExperiences.map((exp, i) => (
            <div
              key={exp.id}
              className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 150}ms` }}>
              <div className="group relative rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="h-64 overflow-hidden">
                  <img src={exp.image} alt={exp.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-1 text-sm font-semibold text-navy">{exp.price}</div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center">{[...Array(5)].map((_, i) => <StarIcon key={i} filled={i < exp.rating} />)}</div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-teal font-semibold" style={{ fontFamily: 'var(--font-accent)'}}>{exp.duration}</p>
                  <h3 className="text-xl font-bold text-foreground mt-1" style={{ fontFamily: 'var(--font-display)' }}>{exp.title}</h3>
                  <a href="#" className="inline-flex items-center gap-2 mt-4 font-semibold text-teal group-hover:gap-3 transition-all duration-300">
                    Réserver →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}