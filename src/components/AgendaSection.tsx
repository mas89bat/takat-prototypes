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

const events = [
  {
    date: { day: '15', month: 'JUIL' },
    image: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=600&h=400&fit=crop&auto=format&q=80',
    title: 'Dîner-Concert à l\'Auberge',
    location: 'Auberge du Pont',
    time: '19:30',
    description: 'Une soirée musicale unique avec des artistes locaux, accompagnée d\'un menu spécial du chef.'
  },
  {
    date: { day: '22', month: 'JUIL' },
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&h=400&fit=crop&auto=format&q=80',
    title: 'Marché des Producteurs',
    location: 'Place de l\'Église, Plouguerneau',
    time: '09:00 - 13:00',
    description: 'Rencontrez nos artisans et producteurs locaux et découvrez les saveurs authentiques du terroir.'
  },
  {
    date: { day: '05', month: 'AOÛT' },
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd98bbb601?w=600&h=400&fit=crop&auto=format&q=80',
    title: 'Fête de la Mer et du Goémon',
    location: 'Port de l\'Aber Wrac\'h',
    time: 'Toute la journée',
    description: 'Célébrez les traditions maritimes de notre région avec des animations, dégustations et chants de marins.'
  }
];

export default function AgendaSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef);

  return (
    <section id="agenda" ref={sectionRef} className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center max-w-3xl mx-auto transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-teal uppercase tracking-widest" style={{ fontFamily: 'var(--font-accent)', fontSize: '1.3rem' }}>
            L'Agenda
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mt-4" style={{ fontFamily: 'var(--font-display)' }}>
            Ne Manquez Rien
          </h2>
          <p className="mt-6 text-lg text-foreground/70" style={{ fontFamily: 'var(--font-body)' }}>
            Le Pays des Abers est vivant toute l'année. Découvrez les événements, festivals et animations qui rythmeront votre séjour.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {events.map((event, i) => (
            <div
              key={i}
              className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="group relative rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="h-64 overflow-hidden relative">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-teal text-white rounded-xl px-4 py-2 text-center shadow-lg">
                    <span className="block text-2xl font-bold" style={{fontFamily: 'var(--font-display)'}}>{event.date.day}</span>
                    <span className="block text-xs font-semibold uppercase tracking-wider">{event.date.month}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy h-14" style={{ fontFamily: 'var(--font-display)' }}>{event.title}</h3>
                  <div className="flex items-center gap-2 mt-2 text-foreground/60">
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    <span className="text-sm truncate" style={{ fontFamily: 'var(--font-body)' }}>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-1 text-foreground/60">
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span className="text-sm" style={{ fontFamily: 'var(--font-body)' }}>{event.time}</span>
                  </div>
                  <p className="mt-4 text-foreground/70 text-sm h-16" style={{ fontFamily: 'var(--font-body)' }}>{event.description}</p>
                  <a href="#" className="inline-flex items-center gap-2 mt-4 font-semibold text-teal hover:gap-3 transition-all duration-300">
                    En savoir plus
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
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