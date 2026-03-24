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
  { type: 'Hôtels', name: 'Hôtel de la Baie', location: 'Lannilis', price: 120, image: 'https://cdt29.media.tourinsoft.eu/upload/Auberge-du-Pont_2.jpg?width=2560&height=2560', rating: 5 },
  { type: 'Gîtes', name: 'Gîte du Pêcheur', location: 'Plouguerneau', price: 85, image: 'https://cdt29.media.tourinsoft.eu/upload/auberge-du-pont-2016.jpg?width=2560&height=2560', rating: 4 },
  { type: 'Campings', name: 'Camping des Abers', location: 'Landéda', price: 35, image: 'https://www.abers-tourisme.com/assets/uploads/sites/8/2025/12/113-sb-landeda-point-de-vue-depuis-an-treiz-hdjeremyjehanin-2024-680x453.jpg', rating: 4 },
  { type: 'Hôtels', name: 'Auberge du Pont', location: 'Paluden', price: 110, image: 'https://cdt29.media.tourinsoft.eu/upload/Auberge-du-pont-2025.jpg?width=2560&height=2560', rating: 5 },
  { type: 'Gîtes', name: 'Maison du Phare', location: 'Île Vierge', price: 150, image: 'https://www.abers-tourisme.com/assets/uploads/sites/8/2022/10/123-sb-plouguerneau-balade-camping-du-phare-de-lile-vierge-jusqua-roch-pelguent-hdjeremyjehanin-2024-680x509.jpg', rating: 5 },
  { type: 'Campings', name: 'Camping de la Plage', location: 'Sainte-Marguerite', price: 40, image: 'https://www.abers-tourisme.com/assets/uploads/sites/8/2022/12/archip2-680x453.jpg', rating: 4 },
];

const tabs = ['Hôtels', 'Gîtes', 'Campings'];

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
  const [activeTab, setActiveTab] = useState('Hôtels');
  const filteredStays = accommodations.filter(a => a.type === activeTab);

  return (
    <section id="stay" ref={sectionRef} className="py-24 bg-sand border-t border-navy/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center max-w-3xl mx-auto transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-teal uppercase tracking-widest" style={{ fontFamily: 'var(--font-accent)', fontSize: '1.3rem' }}>Où Séjourner</p>
          <h2 className="text-4xl md:text-5xl font-bold mt-2" style={{ fontFamily: 'var(--font-display)' }}>Un hébergement pour chaque envie</h2>
          <p className="text-lg text-foreground/70 mt-4" style={{ fontFamily: 'var(--font-body)' }}>
            Hôtels de charme, gîtes authentiques et campings avec vue sur mer. Trouvez le lieu parfait pour votre séjour dans les Abers.
          </p>
        </div>
        <div className={`flex justify-center flex-wrap gap-3 mt-12 transition-all duration-700 ${inView ? 'opacity-100' : 'opacity-0'}`}>
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-full px-6 py-2 text-sm font-semibold transition-all duration-300 ${activeTab === tab ? 'bg-teal text-white' : 'bg-white text-navy border border-navy/20 hover:border-teal'}`}
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {filteredStays.map((item, i) => (
            <div
              key={item.name}
              className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                <div className="h-56 overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>{item.name}</h3>
                    <StarRating rating={item.rating} />
                  </div>
                  <div className="flex items-center gap-2 text-foreground/60 mt-1">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                    <span className="text-sm" style={{ fontFamily: 'var(--font-body)' }}>{item.location}</span>
                  </div>
                  <div className="flex-grow"></div>
                  <div className="flex justify-between items-center mt-6 pt-4 border-t border-navy/10">
                     <p className="text-lg font-bold text-navy" style={{ fontFamily: 'var(--font-body)' }}>
                       {item.price}€
                       <span className="text-sm font-normal text-foreground/60"> / nuit</span>
                     </p>
                     <button className="bg-navy hover:bg-navy/90 text-white rounded-full px-5 py-2 text-sm font-semibold transition-colors" style={{ fontFamily: 'var(--font-body)' }}>Réserver</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
