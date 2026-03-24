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

const events = [
  {
    title: "Fête de la Mer",
    description: "Célébrations maritimes, dégustations de fruits de mer, et concerts sur le port.",
    imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop&auto=format&q=80",
    month: "JUIL",
    day: "14",
    location: "Port de l'Aber Wrac'h",
    time: "10h - 23h"
  },
  {
    title: "Festival des Abers",
    description: "Musique, danse et culture bretonne animent les rives des abers pendant trois jours.",
    imageUrl: "https://swjqpkffgdhoyjihxldn.supabase.co/storage/v1/object/public/prototype-assets/f0165328-deeb-4edb-93ff-08ed23396b3d/section-about.png",
    month: "AOÛT",
    day: "10",
    location: "Landéda",
    time: "18h - 01h"
  },
  {
    title: "Marché des Artisans",
    description: "Découvrez le savoir-faire local et les produits du terroir dans une ambiance conviviale.",
    imageUrl: "https://swjqpkffgdhoyjihxldn.supabase.co/storage/v1/object/public/prototype-assets/f0165328-deeb-4edb-93ff-08ed23396b3d/section-team.png",
    month: "DIM",
    day: "12",
    location: "Place de l'église, Lannilis",
    time: "9h - 13h"
  }
];

const MapPinIcon = () => <svg className="w-4 h-4 text-teal/80 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const ClockIcon = () => <svg className="w-4 h-4 text-teal/80 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;

export default function AgendaSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef);

  return (
    <section id="agenda-section" ref={sectionRef} className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className={`text-center max-w-3xl mx-auto transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="uppercase tracking-widest text-teal" style={{ fontFamily: 'var(--font-accent)', fontSize: '1.3rem' }}>À LA UNE</p>
          <h2 className="text-4xl md:text-5xl font-bold mt-4" style={{ fontFamily: 'var(--font-display)' }}>L'essentiel pour découvrir les Abers</h2>
          <p className="mt-6 text-lg text-foreground/70" style={{ fontFamily: 'var(--font-body)' }}>
            Ne manquez aucun des événements qui animent notre belle région tout au long de l'année.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {events.map((event, i) => (
            <div
              key={i}
              className={`group relative rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 150}ms` }}>
              <div className="h-64 overflow-hidden relative">
                <img src={event.imageUrl} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                 <div className="absolute top-4 left-4 bg-teal text-white rounded-xl px-4 py-2 text-center shadow-lg">
                  <p className="font-bold text-xl leading-none" style={{ fontFamily: 'var(--font-display)' }}>{event.day}</p>
                  <p className="text-xs uppercase tracking-wider">{event.month}</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>{event.title}</h3>
                <div className="flex items-start gap-3 mt-3 text-sm text-foreground/70">
                  <MapPinIcon />
                  <span style={{ fontFamily: 'var(--font-body)' }}>{event.location}</span>
                </div>
                <div className="flex items-center gap-3 mt-2 text-sm text-foreground/70">
                  <ClockIcon />
                  <span style={{ fontFamily: 'var(--font-body)' }}>{event.time}</span>
                </div>
                <p className="mt-4 text-foreground/70 text-base" style={{ fontFamily: 'var(--font-body)' }}>{event.description}</p>
                <a href="#" className="inline-flex items-center gap-2 mt-4 font-semibold text-teal group-hover:gap-3 transition-all duration-300">
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
