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

const events = [
  {
    title: 'Fête de la Mer',
    date: { day: '14', month: 'Juil' },
    location: 'Port de l\'Aber Wrac\'h',
    time: '10:00 - 23:00',
    image: 'https://cdt29.media.tourinsoft.eu/upload/Auberge-du-pont-2025.jpg?width=2560&height=2560',
    description: 'Célébrations maritimes, dégustations de produits locaux, concerts et feu d\'artifice.'
  },
  {
    title: 'Concert à l\'Auberge',
    date: { day: '22', month: 'Juil' },
    location: 'Auberge du Pont, Paluden',
    time: '20:00',
    image: 'https://cdt29.media.tourinsoft.eu/upload/Auberge-du-Pont_3.jpg?width=2560&height=2560',
    description: 'Dîner-concert mensuel avec des artistes locaux dans un cadre enchanteur.'
  },
  {
    title: 'Exposition Phares & Balises',
    date: { day: '05', month: 'Août' },
    location: 'Maison des Abers, St-Pabu',
    time: 'Toute la journée',
    image: 'https://www.abers-tourisme.com/assets/uploads/sites/8/2025/08/plouguerneau21alamoureux-d6a2367.jpg',
    description: 'Découvrez l\'histoire des gardiens de phare et du patrimoine maritime des Abers.'
  },
];

export default function AgendaSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef);

  return (
    <section id="agenda" ref={sectionRef} className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center max-w-3xl mx-auto transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-teal uppercase tracking-widest" style={{ fontFamily: 'var(--font-accent)', fontSize: '1.3rem' }}>À la Une</p>
          <h2 className="text-4xl md:text-5xl font-bold mt-2" style={{ fontFamily: 'var(--font-display)' }}>L'Agenda des Abers</h2>
          <p className="text-lg text-foreground/70 mt-4" style={{ fontFamily: 'var(--font-body)' }}>
            Ne manquez aucun des événements qui animent notre région tout au long de l'année. Concerts, festivals, marchés et expositions vous attendent.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {events.map((event, i) => (
            <div
              key={i}
              className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="group relative rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full">
                <div className="h-64 overflow-hidden relative">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-teal text-white rounded-xl px-4 py-2 text-center shadow-lg">
                    <p className="text-2xl font-bold leading-none" style={{ fontFamily: 'var(--font-display)' }}>{event.date.day}</p>
                    <p className="text-sm uppercase tracking-wider" style={{ fontFamily: 'var(--font-body)' }}>{event.date.month}</p>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>{event.title}</h3>
                  <div className="flex flex-col gap-2 text-foreground/70 mt-3 text-sm">
                    <div className="flex items-start gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0 text-teal mt-0.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                      <span style={{ fontFamily: 'var(--font-body)' }}>{event.location}</span>
                    </div>
                     <div className="flex items-start gap-2">
                       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0 text-teal mt-0.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" /></svg>
                       <span style={{ fontFamily: 'var(--font-body)' }}>{event.time}</span>
                    </div>
                  </div>
                   <p className="text-foreground/80 mt-4 flex-grow" style={{ fontFamily: 'var(--font-body)' }}>{event.description}</p>
                  <a href="#" className="inline-flex items-center gap-2 text-teal font-semibold mt-4 hover:gap-3 transition-all duration-300 self-start" style={{ fontFamily: 'var(--font-body)' }}>
                    En savoir plus
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
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
