import { useState, useEffect, useRef } from 'react';

function useInView(ref: React.RefObject<HTMLElement | null>) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.10 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
  return inView;
}

const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
            <svg key={i} className={`w-4 h-4 ${rating > i ? 'text-copper' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
        ))}
    </div>
);

const experiences = [
    { category: 'Nautique', title: 'Sortie en Kayak', image: 'https://www.abers-tourisme.com/assets/uploads/sites/8/2022/08/kayak-ile-vierge-clo-et-clem-680x453.jpg', price: '45€', duration: '3h', rating: 5 },
    { category: 'Randonnée', title: 'Le GR34 des Abers', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop&auto=format&q=80', price: 'Gratuit', duration: 'Journée', rating: 4 },
    { category: 'Culture', title: 'Visite de l\'Aber Wrac\'h', image: 'https://cdt29.media.tourinsoft.eu/upload/Auberge-du-Pont_3.jpg?width=2560&height=2560', price: '25€', duration: '2h', rating: 5 },
    { category: 'Famille', title: 'Pêche à pied', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=800&fit=crop&auto=format&q=80', price: '10€', duration: '2h', rating: 4 },
    { category: 'Nautique', title: 'Cours de Voile', image: 'https://www.abers-tourisme.com/assets/uploads/sites/8/2022/12/laber-wrach-680x453.jpg', price: '80€', duration: '4h', rating: 5 },
    { category: 'Culture', title: 'Découverte des Chapelles', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop&auto=format&q=80', price: 'Gratuit', duration: 'Demi-journée', rating: 4 },
];

const filters = ['Tout', 'Nautique', 'Randonnée', 'Culture', 'Famille'];

export default function ExperiencesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef);
  const [activeFilter, setActiveFilter] = useState('Tout');

  const filteredExperiences = activeFilter === 'Tout' 
    ? experiences 
    : experiences.filter(exp => exp.category === activeFilter);

  return (
    <section id="experiences" ref={sectionRef} className="py-24 bg-sand">
      <div className="container mx-auto px-6">
        <div className={`text-center transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="uppercase tracking-widest text-teal" style={{ fontFamily: "var(--font-accent)", fontSize: "1.3rem" }}>Nos Tops</p>
          <h2 className="text-4xl md:text-5xl font-bold text-navy mt-2" style={{ fontFamily: "var(--font-display)" }}>Votre inspiration dans les Abers</h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-600" style={{ fontFamily: "var(--font-body)" }}>
            Intense & sauvage pour profiter du grand air iodé ! Découvrez une nature préservée et un large choix d’activités.
          </p>
        </div>

        <div className={`flex justify-center flex-wrap gap-3 mt-12 transition-all duration-700 ${inView ? "opacity-100" : "opacity-0"}`} style={{transitionDelay: '150ms'}}>
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${activeFilter === filter ? 'bg-teal text-white' : 'bg-white text-navy border border-navy/20 hover:border-teal'}`}>
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {filteredExperiences.map((exp, i) => (
            <div key={`${activeFilter}-${i}`} 
                 className={`group relative rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-in fade-in-5 zoom-in-95 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                 style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="h-64 overflow-hidden relative">
                <img src={exp.image} alt={exp.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-1 text-sm font-semibold text-navy">
                  {exp.price} / {exp.duration}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold text-navy" style={{ fontFamily: "var(--font-display)" }}>{exp.title}</h3>
                  <StarRating rating={exp.rating} />
                </div>
                <p className="mt-2 text-gray-600" style={{ fontFamily: "var(--font-body)" }}>Catégorie : {exp.category}</p>
                <a href="#" className="inline-flex items-center gap-2 mt-4 text-teal font-semibold group-hover:gap-3 transition-all">
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