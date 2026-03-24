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

const experiencesData = [
  {
    category: 'Traditionnel',
    image: 'https://cdt29.media.tourinsoft.eu/upload/Goeland-Toque-2025.jpeg?width=600&height=400&crop=1&quality=80',
    badge: 'Formule 16€',
    title: 'Le Goéland Toqué',
    rating: 4,
    description: 'Cuisine traditionnelle et bistrot derrière l\'église de Plouguerneau. Formule midi en semaine.',
  },
  {
    category: 'Vue Mer',
    image: 'https://cdt29.media.tourinsoft.eu/upload/Auberge-du-Pont_3.jpg?width=600&height=400&crop=1&quality=80',
    badge: 'Spécialité Poissons',
    title: 'Auberge du Pont',
    rating: 5,
    description: 'Ancien moulin à marée avec une terrasse les pieds dans l\'eau. Spécialité : la poêlée du pêcheur.',
  },
  {
    category: 'Crêperie',
    image: 'https://images.unsplash.com/photo-1565299585323-15d11e7845e3?w=600&h=400&fit=crop&auto=format&q=80',
    badge: 'Blé Noir & Froment',
    title: 'Crêperie de Trouzilit',
    rating: 4,
    description: 'Dégustez d\'authentiques crêpes et galettes bretonnes dans un cadre chaleureux et convivial.',
  },
  {
    category: 'Traditionnel',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&h=400&fit=crop&auto=format&q=80',
    badge: 'Produits du Terroir',
    title: 'Le Bistrot du Port',
    rating: 4,
    description: 'Une cuisine de marché inventive et savoureuse, avec les meilleurs produits de la région.',
  },
  {
    category: 'Vue Mer',
    image: 'https://images.unsplash.com/photo-1502301103665-0b95cc738daf?w=600&h=400&fit=crop&auto=format&q=80',
    badge: 'Fruits de Mer',
    title: 'L\'Horizon Marin',
    rating: 5,
    description: 'Plateaux de fruits de mer spectaculaires avec une vue imprenable sur l\'océan.',
  },
  {
    category: 'Crêperie',
    image: 'https://images.unsplash.com/photo-1586716492452-4fb8d43c5553?w=600&h=400&fit=crop&auto=format&q=80',
    badge: 'Cidre Artisanal',
    title: 'La Galette Dorée',
    rating: 4,
    description: 'Un large choix de galettes gourmandes accompagnées de cidres locaux soigneusement sélectionnés.',
  },
];

const filters = ['Tout', 'Traditionnel', 'Vue Mer', 'Crêperie'];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center">
    {[...Array(5)].map((_, i) => (
        <svg key={i} className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
    ))}
  </div>
);

export default function ExperiencesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef);
  const [activeFilter, setActiveFilter] = useState('Tout');

  const filteredExperiences = activeFilter === 'Tout' ? experiencesData : experiencesData.filter(e => e.category === activeFilter);

  return (
    <section id="experiences" ref={sectionRef} className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center max-w-3xl mx-auto transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-teal uppercase tracking-widest" style={{ fontFamily: 'var(--font-accent)', fontSize: '1.3rem' }}>
            Nos Tables
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mt-4" style={{ fontFamily: 'var(--font-display)' }}>
            Expériences Culinaires Inoubliables
          </h2>
          <p className="mt-6 text-lg text-foreground/70" style={{ fontFamily: 'var(--font-body)' }}>
            Du bistrot convivial à la table gastronomique, explorez la richesse de la cuisine du Pays des Abers. Chaque restaurant est une promesse de saveurs et de moments partagés.
          </p>
        </div>

        <div className={`flex justify-center mt-12 overflow-x-auto pb-4 transition-all duration-700 delay-200 ${inView ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex space-x-2 md:space-x-4 p-1 bg-white/60 rounded-full border border-navy/10">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`whitespace-nowrap rounded-full px-4 sm:px-6 py-2 text-sm sm:text-base font-medium transition-colors duration-300 ${activeFilter === filter ? 'bg-teal text-white shadow' : 'bg-transparent text-navy hover:bg-navy/5'}`}>
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {filteredExperiences.map((exp, i) => (
                <div key={i} className={`group relative rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up`} style={{ animationDelay: `${i * 100}ms` }}>
                    <div className="h-64 overflow-hidden">
                        <img src={exp.image} alt={exp.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-1 text-sm font-semibold text-navy">
                        {exp.badge}
                    </div>
                    <div className="p-6">
                        <div className="flex justify-between items-center">
                            <h3 className="text-xl font-bold text-navy" style={{ fontFamily: 'var(--font-display)' }}>{exp.title}</h3>
                            <StarRating rating={exp.rating} />
                        </div>
                        <p className="mt-2 text-foreground/70 h-12" style={{ fontFamily: 'var(--font-body)' }}>{exp.description}</p>
                        <a href="#" className="inline-flex items-center gap-2 mt-4 font-semibold text-teal hover:gap-3 transition-all duration-300">
                            Réserver une table
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        </a>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}