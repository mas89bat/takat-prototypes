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

const events = [
    {
        date: { day: '14', month: 'JUIL' },
        title: 'Fête de la Mer',
        location: 'Port de l\'Aber Wrac\'h',
        time: '10h00 - 23h00',
        image: 'https://www.abers-tourisme.com/assets/uploads/sites/8/2022/12/archip2-680x453.jpg',
        description: 'Célébrations maritimes, concerts, dégustations et feu d\'artifice.'
    },
    {
        date: { day: '21', month: 'JUIL' },
        title: 'Festival des Abers',
        location: 'Plouguerneau',
        time: '18h00 - 01h00',
        image: 'https://www.abers-tourisme.com/assets/uploads/sites/8/2022/12/laber-wrach-680x453.jpg',
        description: 'Musique actuelle et traditionnelle dans un cadre exceptionnel.'
    },
    {
        date: { day: '05', month: 'AOÛT' },
        title: 'Marché des Artisans',
        location: 'Centre-ville de Lannilis',
        time: '09h00 - 18h00',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=800&fit=crop&auto=format&q=80',
        description: 'Rencontrez les créateurs et savoir-faire locaux du Pays des Abers.'
    }
];

export default function AgendaSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const inView = useInView(sectionRef);

    return (
        <section id="agenda" ref={sectionRef} className="py-24 bg-sand">
            <div className="container mx-auto px-6">
                <div className={`text-center transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                    <p className="uppercase tracking-widest text-teal" style={{ fontFamily: "var(--font-accent)", fontSize: "1.3rem" }}>À ne pas manquer</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-navy mt-2" style={{ fontFamily: "var(--font-display)" }}>L'Agenda des Abers</h2>
                    <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-600" style={{ fontFamily: "var(--font-body)" }}>
                        Vivez au rythme des marées et des événements qui animent notre territoire tout au long de l'année.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                    {events.map((event, i) => (
                        <div key={i} className={`group relative rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: `${i * 150}ms` }}>
                            <div className="h-56 overflow-hidden relative">
                                <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                <div className="absolute top-4 left-4 bg-teal text-white rounded-xl px-4 py-2 text-center shadow-lg">
                                    <p className="text-2xl font-bold" style={{fontFamily: 'var(--font-display)'}}>{event.date.day}</p>
                                    <p className="text-sm font-semibold uppercase tracking-wider">{event.date.month}</p>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-navy" style={{ fontFamily: "var(--font-display)" }}>{event.title}</h3>
                                <div className="text-gray-500 mt-2 space-y-1.5 text-sm">
                                    <div className="flex items-center gap-2">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                        <span>{event.location}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                        <span>{event.time}</span>
                                    </div>
                                </div>
                                <p className="mt-3 text-gray-600" style={{fontFamily: 'var(--font-body)'}}>{event.description}</p>
                                <a href="#" className="inline-flex items-center gap-2 mt-4 text-teal font-semibold group-hover:gap-3 transition-all">
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