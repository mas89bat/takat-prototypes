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
  { category: 'Nautique', title: 'Kayak vers l\'Île Vierge', image: 'https://www.abers-tourisme.com/assets/uploads/sites/8/2022/08/kayak-ile-vierge-clo-et-clem-680x453.jpg', price: 'À partir de 45€', rating: 5 },
  { category: 'Randonnée', title: 'Randonnée sur le GR34', image: 'https://www.abers-tourisme.com/assets/uploads/sites/8/2022/10/123-sb-plouguerneau-balade-camping-du-phare-de-lile-vierge-jusqua-roch-pelguent-hdjeremyjehanin-2024-680x509.jpg', price: 'Accès libre', rating: 5 },
  { category: 'Culture', title: 'Visite du port de l\'Aber Wrac\'h', image: 'https://cdt29.media.tourinsoft.eu/upload/Auberge-du-pont-2025.jpg?width=2560&height=2560', price: 'Gratuit', rating: 4 },
  { category: 'Nautique', title: 'Sortie en voilier traditionnel', image: 'https://www.abers-tourisme.com/assets/uploads/sites/8/2022/12/otabers19alamoureux-mg-2018.jpg', price: 'À partir de 60€', rating: 5 },
  { category: 'Famille', title: 'Pêche à pied à marée basse', image: 'https://www.abers-tourisme.com/assets/uploads/sites/8/2025/12/113-sb-landeda-point-de-vue-depuis-an-treiz-hdjeremyjehanin-2024-680x453.jpg', price: 'Accès libre', rating: 4 },
  { category: 'Randonnée', title: 'Le sentier des douaniers', image: 'https://www.abers-tourisme.com/assets/uploads/sites/8/2022/12/archip2-680x453.jpg', price: 'Accès libre', rating: 5 },
];

const filters = ['Tout', 'Nautique', 'Randonnée', 'Culture', 'Famille'];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center">
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
    <section id="experiences" ref={sectionRef} className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center max-w-3xl mx-auto transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-teal uppercase tracking-widest" style={{ fontFamily: 'var(--font-accent)', fontSize: '1.3rem' }}>Nos Tops</p>
          <h2 className="text-4xl md:text-5xl font-bold mt-2" style={{ fontFamily: 'var(--font-display)' }}>Expériences Inoubliables</h2>
          <p className="text-lg text-foreground/70 mt-4" style={{ fontFamily: 'var(--font-body)' }}>
            Intense & sauvage pour profiter du grand air iodé ! Profitez d’un large choix d’activités nautiques ou sportives.
          </p>
        </div>
        <div className={`flex justify-center flex-wrap gap-3 mt-12 transition-all duration-700 ${inView ? 'opacity-100' : 'opacity-0'}`}>
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-6 py-2 text-sm font-semibold transition-all duration-300 ${activeFilter === filter ? 'bg-teal text-white' : 'bg-white text-navy border border-navy/20 hover:border-teal'}`}
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {filteredExperiences.map((item, i) => (
            <div
              key={item.title}
              className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="group relative rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="h-64 overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-1 text-sm font-semibold text-navy" style={{ fontFamily: 'var(--font-body)' }}>{item.price}</div>
                <div className="absolute bottom-4 left-4">
                   <StarRating rating={item.rating} />
                </div>
                 <div className="p-6">
                  <h3 className="text-xl font-bold truncate" style={{ fontFamily: 'var(--font-display)' }}>{item.title}</h3>
                  <p className="text-teal font-semibold mt-1 text-sm" style={{ fontFamily: 'var(--font-body)' }}>{item.category}</p>
                  <button className="w-full mt-4 bg-teal hover:bg-teal/80 text-white rounded-full py-2.5 font-semibold transition-colors duration-300" style={{ fontFamily: 'var(--font-body)' }}>
                    En savoir plus
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
