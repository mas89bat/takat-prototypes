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

const stayData = [
  {
    category: 'Chambres d\'hôtes',
    image: 'https://cdt29.media.tourinsoft.eu/upload/Goeland-Toque-2025--7-.jpg?width=600&height=400&crop=1&quality=80',
    rating: 4,
    title: 'Chambres du Goéland',
    location: 'Plouguerneau',
    price: '85€',
    amenities: ['wifi', 'parking'],
  },
  {
    category: 'Hôtels',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop&auto=format&q=80',
    rating: 5,
    title: 'Hôtel de la Baie',
    location: 'Lannilis',
    price: '150€',
    amenities: ['wifi', 'parking', 'pool', 'restaurant'],
  },
  {
    category: 'Villas',
    image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&h=400&fit=crop&auto=format&q=80',
    rating: 5,
    title: 'Villa des Abers',
    location: 'Landéda',
    price: '320€',
    amenities: ['wifi', 'parking', 'pool', 'kitchen'],
  },
  {
    category: 'Chambres d\'hôtes',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&h=400&fit=crop&auto=format&q=80',
    rating: 4,
    title: 'Le Clos du Phare',
    location: 'Plouguerneau',
    price: '95€',
    amenities: ['wifi', 'parking', 'garden'],
  },
  {
    category: 'Hôtels',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbb5eb?w=600&h=400&fit=crop&auto=format&q=80',
    rating: 4,
    title: 'Le Continental',
    location: 'Lannilis',
    price: '120€',
    amenities: ['wifi', 'restaurant'],
  },
  {
    category: 'Villas',
    image: 'https://images.unsplash.com/photo-1613977257363-31f4a45f9a6b?w=600&h=400&fit=crop&auto=format&q=80',
    rating: 5,
    title: 'Maison de l\'Aber',
    location: 'Saint-Pabu',
    price: '280€',
    amenities: ['wifi', 'parking', 'kitchen', 'pet'],
  },
];

const tabs = ['Tout', 'Hôtels', 'Chambres d\'hôtes', 'Villas'];

const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => (
          <svg key={i} className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
      ))}
    </div>
  );

export default function StaySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef);
  const [activeTab, setActiveTab] = useState('Tout');
  
  const filteredStays = activeTab === 'Tout' ? stayData : stayData.filter(s => s.category === activeTab);

  return (
    <section id="stay" ref={sectionRef} className="py-20 md:py-32 bg-background border-t border-navy/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center max-w-3xl mx-auto transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-teal uppercase tracking-widest" style={{ fontFamily: 'var(--font-accent)', fontSize: '1.3rem' }}>
            Nos Hébergements
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mt-4" style={{ fontFamily: 'var(--font-display)' }}>
            Trouvez votre Havre de Paix
          </h2>
          <p className="mt-6 text-lg text-foreground/70" style={{ fontFamily: 'var(--font-body)' }}>
            Que vous cherchiez le luxe d'un hôtel, le charme d'une chambre d'hôtes ou l'intimité d'une villa, le Pays des Abers a l'hébergement parfait pour votre séjour.
          </p>
        </div>

        <div className={`flex justify-center mt-12 overflow-x-auto pb-4 transition-all duration-700 delay-200 ${inView ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex space-x-2 md:space-x-4 p-1 bg-white/60 rounded-full border border-navy/10">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`whitespace-nowrap rounded-full px-4 sm:px-6 py-2 text-sm sm:text-base font-medium transition-colors duration-300 ${activeTab === tab ? 'bg-teal text-white shadow' : 'bg-transparent text-navy hover:bg-navy/5'}`}>
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {filteredStays.map((stay, i) => (
                <div key={i} className={`rounded-2xl overflow-hidden bg-white shadow-md transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 animate-fade-in-up`} style={{ animationDelay: `${i * 100}ms` }}>
                    <div className="h-64 overflow-hidden relative">
                        <img src={stay.image} alt={stay.title} className="w-full h-full object-cover" />
                        <div className="absolute top-4 right-4">
                            <StarRating rating={stay.rating} />
                        </div>
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-bold text-navy" style={{ fontFamily: 'var(--font-display)' }}>{stay.title}</h3>
                        <div className="flex items-center gap-2 mt-2 text-foreground/60">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                            <span className="text-sm" style={{ fontFamily: 'var(--font-body)' }}>{stay.location}</span>
                        </div>
                        <div className="flex justify-between items-center mt-4">
                           <div>
                                <span className="text-xl font-bold text-navy" style={{fontFamily: 'var(--font-display)'}}>{stay.price}</span>
                                <span className="text-sm text-foreground/60"> / nuit</span>
                           </div>
                           <a href="#" className="bg-teal text-white rounded-full px-5 py-2.5 font-semibold text-sm hover:bg-teal/80 transition-colors">Book Now</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
}
