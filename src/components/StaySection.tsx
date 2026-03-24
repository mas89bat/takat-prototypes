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

const stays = [
    { id: 1, title: "Hôtel de la Mer", category: "Hôtels", image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1200&h=800&fit=crop&auto=format&q=80', price: 120, rating: 5, location: 'Plouguerneau' },
    { id: 2, title: "Gîte du Phare", category: "Gîtes", image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=1200&h=800&fit=crop&auto=format&q=80', price: 95, rating: 4, location: 'Lilia' },
    { id: 3, title: "Chambres d'hôtes Le Goéland", category: "Chambres d'hôtes", image: 'https://cdt29.media.tourinsoft.eu/upload/Goeland-Toque-2025--6-.jpg?width=1200&height=800&crop=1', price: 80, rating: 5, location: 'Plouguerneau' },
    { id: 4, title: "Villa des Abers", category: "Hôtels", image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop&auto=format&q=80', price: 250, rating: 5, location: 'Landéda' },
    { id: 5, title: "Le Repos du Marin", category: "Gîtes", image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop&auto=format&q=80', price: 110, rating: 4, location: 'Saint-Pabu' },
    { id: 6, title: "La Maison Bleue", category: "Chambres d'hôtes", image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=800&fit=crop&auto=format&q=80', price: 75, rating: 4, location: 'Lannilis' },
];

const categories = ["Hôtels", "Gîtes", "Chambres d'hôtes"];

const MapPinIcon = () => <svg className="w-4 h-4 text-foreground/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const StarIcon = ({ filled }: { filled: boolean }) => <svg className={`w-4 h-4 ${filled ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>;

export default function StaySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef);
  const [activeCategory, setActiveCategory] = useState('Hôtels');
  const filteredStays = stays.filter(s => s.category === activeCategory);

  return (
    <section id="stay-section" ref={sectionRef} className="py-24 bg-background border-t border-foreground/5">
      <div className="container mx-auto px-6">
        <div className={`text-center max-w-3xl mx-auto transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="uppercase tracking-widest text-teal" style={{ fontFamily: 'var(--font-accent)', fontSize: '1.3rem' }}>VOTRE SÉJOUR</p>
          <h2 className="text-4xl md:text-5xl font-bold mt-4" style={{ fontFamily: 'var(--font-display)' }}>Où se loger dans les Abers</h2>
          <p className="mt-6 text-lg text-foreground/70" style={{ fontFamily: 'var(--font-body)' }}>
            Trouvez l'hébergement parfait pour une escapade inoubliable sur la côte bretonne, des hôtels avec vue sur mer aux gîtes de charme.
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
          {filteredStays.map((stay, i) => (
            <div
              key={stay.id}
              className={`bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 150}ms` }}>
              <div className="h-56 overflow-hidden">
                <img src={stay.image} alt={stay.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold text-foreground pr-4" style={{ fontFamily: 'var(--font-display)' }}>{stay.title}</h3>
                  <div className="flex items-center flex-shrink-0">{[...Array(5)].map((_, i) => <StarIcon key={i} filled={i < stay.rating} />)}</div>
                </div>
                <div className="flex items-center gap-2 mt-2 text-sm text-foreground/70">
                  <MapPinIcon />
                  <span style={{ fontFamily: 'var(--font-body)' }}>{stay.location}</span>
                </div>
                <div className="flex justify-between items-center mt-6">
                  <div>
                    <span className="text-2xl font-bold text-teal" style={{ fontFamily: 'var(--font-display)' }}>{stay.price}€</span>
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