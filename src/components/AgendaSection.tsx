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
    date: { month: 'JUIL', day: '14' },
    title: 'Fête de la Mer',
    location: 'Port de l\'Aber Wrac\'h',
    time: '10:00 - 23:00',
    image: 'https://images.unsplash.com/photo-1593444169567-2d4a3a69485b?w=800&h=600&fit=crop&auto=format&q=80'
  },
  {
    date: { month: 'JUIL', day: '21' },
    title: 'Marché des Créateurs',
    location: 'Centre-ville, Plouguerneau',
    time: '09:00 - 18:00',
    image: 'https://images.unsplash.com/photo-1533202019315-e24f4f72740d?w=800&h=600&fit=crop&auto=format&q=80'
  },
  {
    date: { month: 'AOÛT', day: '05' },
    title: 'Concert au Phare',
    location: 'Phare de l\'Île Vierge',
    time: '20:30',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=600&fit=crop&auto=format&q=80'
  },
];

export default function AgendaSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef);

  return (
    <section id="agenda" ref={sectionRef} className="py-20 md:py-28 bg-sand">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center max-w-3xl mx-auto transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="uppercase tracking-widest text-teal" style={{ fontFamily: 'var(--font-accent)', fontSize: '1.3rem' }}>À la Une</p>
          <h2 className="text-4xl md:text-5xl font-bold mt-4" style={{ fontFamily: 'var(--font-display)' }}>
            L'agenda des Abers
          </h2>
          <p className="mt-6 text-lg text-foreground/70" style={{ fontFamily: 'var(--font-body)' }}>
            Ne manquez aucun des événements qui animent notre belle région tout au long de la saison.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {events.map((event, i) => (
            <div
              key={i}
              className={`group relative rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
                <div className="h-64 overflow-hidden relative">
                    <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-4 left-4 bg-teal text-white rounded-xl px-4 py-2 text-center shadow-lg">
                        <p className="font-semibold text-sm" style={{ fontFamily: 'var(--font-body)' }}>{event.date.month}</p>
                        <p className="text-3xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>{event.date.day}</p>
                    </div>
                </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>{event.title}</h3>
                <div className="flex items-center gap-2 text-foreground/60 mt-3">
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                    <p className="text-sm" style={{ fontFamily: 'var(--font-body)' }}>{event.location}</p>
                </div>
                <div className="flex items-center gap-2 text-foreground/60 mt-1">
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <p className="text-sm" style={{ fontFamily: 'var(--font-body)' }}>{event.time}</p>
                </div>
                <a href="#" className="inline-flex items-center gap-2 mt-4 text-teal font-semibold group-hover:gap-3 transition-all duration-300">
                  En savoir plus →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
