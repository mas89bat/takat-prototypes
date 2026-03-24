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

const stays = [
    { type: 'Hôtels', name: 'Auberge du Pont', location: 'Lannilis', price: 120, rating: 4, image: 'https://cdt29.media.tourinsoft.eu/upload/Auberge-du-pont-2025.jpg?width=2560&height=2560' },
    { type: 'Gîtes', name: 'Villa des Abers', location: 'Landéda', price: 250, rating: 5, image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1200&h=800&fit=crop&auto=format&q=80' },
    { type: 'Campings', name: 'Camping de la Plage', location: 'Plouguerneau', price: 45, rating: 3, image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=1200&h=800&fit=crop&auto=format&q=80' },
    { type: 'Hôtels', name: 'Le Brittany & Spa', location: 'Roscoff', price: 280, rating: 5, image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop&auto=format&q=80' },
    { type: 'Gîtes', name: 'Le Gîte du Phare', location: 'Île Vierge', price: 180, rating: 4, image: 'https://www.abers-tourisme.com/assets/uploads/sites/8/2025/08/plouguerneau21alamoureux-d6a2367.jpg' },
    { type: 'Campings', name: 'Camping des Dunes', location: 'Saint-Pabu', price: 55, rating: 4, image: 'https://www.abers-tourisme.com/assets/uploads/sites/8/2022/11/aber-benoit-yannick-le-gal-680x453.jpg' },
];

const tabs = ['Hôtels', 'Gîtes', 'Campings'];

export default function StaySection() {
    const sectionRef = useRef<HTMLElement>(null);
    const inView = useInView(sectionRef);
    const [activeTab, setActiveTab] = useState('Hôtels');

    const filteredStays = stays.filter(stay => stay.type === activeTab);

    return (
        <section id="sejourner" ref={sectionRef} className="py-24 bg-white border-t border-gray-100">
            <div className="container mx-auto px-6">
                <div className={`text-center transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                    <p className="uppercase tracking-widest text-teal" style={{ fontFamily: "var(--font-accent)", fontSize: "1.3rem" }}>Où Dormir ?</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-navy mt-2" style={{ fontFamily: "var(--font-display)" }}>Séjournez au coeur des Abers</h2>
                    <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-600" style={{ fontFamily: "var(--font-body)" }}>
                        Trouvez l'hébergement parfait pour une escapade mémorable, des hôtels de charme aux campings en pleine nature.
                    </p>
                </div>

                <div className={`flex justify-center flex-wrap gap-3 mt-12 transition-all duration-700 ${inView ? "opacity-100" : "opacity-0"}`} style={{transitionDelay: '150ms'}}>
                    {tabs.map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${activeTab === tab ? 'bg-teal text-white' : 'bg-gray-100 text-navy border border-transparent hover:border-teal'}`}>
                            {tab}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {filteredStays.map((stay, i) => (
                        <div key={`${activeTab}-${i}`} className={`rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 animate-in fade-in-5 zoom-in-95 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: `${i * 100}ms` }}>
                            <div className="h-56 overflow-hidden relative">
                                <img src={stay.image} alt={stay.name} className="w-full h-full object-cover" />
                                <div className="absolute top-3 right-3 flex gap-2">
                                    <div className="w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-navy"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" /></svg></div>
                                </div>
                            </div>
                            <div className="p-5">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-xl font-bold text-navy" style={{ fontFamily: "var(--font-display)" }}>{stay.name}</h3>
                                        <div className="flex items-center gap-1.5 text-gray-500 mt-1">
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                            <span className="text-sm">{stay.location}</span>
                                        </div>
                                    </div>
                                    <StarRating rating={stay.rating} />
                                </div>
                                <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
                                    <p className="text-lg text-navy font-bold">{stay.price}€ <span className="text-sm font-normal text-gray-500">/ nuit</span></p>
                                    <a href="#" className="bg-teal text-white rounded-full px-5 py-2 text-sm font-semibold hover:bg-teal/80 transition-colors">
                                        Réserver
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