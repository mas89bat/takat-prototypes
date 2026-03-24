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

const accommodations = [
  { type: 'Hôtels', name: 'Hôtel de la Mer', location: 'Plouguerneau', price: 120, rating: 5, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop&auto=format&q=80' },
  { type: 'Gîtes', name: 'Gîte du Phare', location: 'Lilia', price: 95, rating: 4, image: 'https://images.unsplash.com/photo-1585299401443-c5484bf31556?w=800&h=600&fit=crop&auto=format&q=80' },
  { type: 'Chambres d\'hôtes', name: 'Le Repos du Marin', location: 'Landéda', price: 80, rating: 5, image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&h=600&fit=crop&auto=format&q=80' },
  { type: 'Hôtels', name: 'Le Panoramique', location: 'Aber Wrac\'h', price: 150, rating: 4, image: 'https://images.unsplash.com/photo-1542314831-068cd1dbb5eb?w=800&h=600&fit=crop&auto=format&q=80' },
  { type: 'Gîtes', name: 'Ty Pesketour', location: 'Saint-Pabu', price: 110, rating: 5, image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=600&fit=crop&auto=format&q=80' },
  { type: 'Chambres d\'hôtes', name: 'Vue sur Aber', location: 'Aber Benoît', price: 85, rating: 4, image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&h=600&fit=crop&auto=format&q=80' },
];

const tabs = ['Tous', 'Hôtels', 'Gîtes', 'Chambres d\'hôtes'];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-0.5">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className={`w-4 h-4 ${i < rating ? 'text-copper' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

export default function StaySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef);
  const [activeTab, setActiveTab] = useState('Tous');

  const filteredStays = activeTab === 'Tous' ? accommodations : accommodations.filter(a => a.type === activeTab);

  return (
    <section id="sejourner" ref={sectionRef} className="py-20 md:py-28 bg-sand border-t border-navy/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center max-w-3xl mx-auto transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="uppercase tracking-widest text-teal" style={{ fontFamily: 'var(--font-accent)', fontSize: '1.3rem' }}>Votre Séjour</p>
          <h2 className="text-4xl md:text-5xl font-bold mt-4" style={{ fontFamily: 'var(--font-display)' }}>
            Où dormir dans les Abers
          </h2>
          <p className="mt-6 text-lg text-foreground/70" style={{ fontFamily: 'var(--font-body)' }}>
            Des gîtes de charme aux hôtels avec vue, trouvez l'hébergement parfait pour votre escapade en terre bretonne.
          </p>
        </div>

        <div className={`mt-12 flex justify-center flex-wrap gap-3 transition-opacity duration-700 delay-200 ${inView ? 'opacity-100' : 'opacity-0'}`}>
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 min-h-[44px] ${activeTab === tab ? 'bg-teal text-white' : 'bg-white text-navy border border-navy/20 hover:border-teal'}`}>
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {filteredStays.map((item, i) => (
            <div
              key={`${item.name}-${i}`}
              className={`bg-white rounded-2xl overflow-hidden shadow-md transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="h-56 overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start">
                   <h3 className="text-xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>{item.name}</h3>
                   <StarRating rating={item.rating} />
                </div>
                 <div className="flex items-center gap-2 text-foreground/60 mt-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                    <p className="text-sm" style={{ fontFamily: 'var(--font-body)' }}>{item.location}</p>
                </div>
                <div className="flex justify-between items-center mt-4">
                    <p className="text-lg font-semibold"><span className="text-2xl font-bold text-teal">{item.price}€</span><span className="text-sm text-foreground/60"> / nuit</span></p>
                    <a href="#" className="bg-navy hover:bg-navy/90 text-white rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-300">
                        Book Now
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
