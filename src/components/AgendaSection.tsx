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

function AgendaSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef);

  const events = [
    {
      date: { month: "AVR", day: "15" },
      image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2025/08/plouguerneau21alamoureux-d6a2367.jpg",
      title: "Festival des Phares",
      location: "Île Vierge",
      time: "14h - 18h",
      description: "Découverte des métiers de la mer, animations familiales et visite guidée du plus haut phare d'Europe."
    },
    {
      date: { month: "MAI", day: "20" },
      image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2022/08/kayak-ile-vierge-clo-et-clem-680x453.jpg",
      title: "Raid Kayak des Abers",
      location: "Aber Wrac'h",
      time: "9h - 16h",
      description: "Compétition de kayak de mer reliant les deux abers, ouverte aux amateurs et professionnels."
    },
    {
      date: { month: "JUN", day: "21" },
      image: "https://swjqpkffgdhoyjihxldn.supabase.co/storage/v1/object/public/prototype-assets/f0165328-deeb-4edb-93ff-08ed23396b3d/section-about.png",
      title: "Fête de la Saint-Jean",
      location: "Plouguerneau",
      time: "20h - 1h",
      description: "Feu de la Saint-Jean sur la plage, concerts de musique bretonne et dégustation de produits locaux."
    },
    {
      date: { month: "JUL", day: "14" },
      image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2025/12/113-sb-landeda-point-de-vue-depuis-an-treiz-hdjeremyjehanin-2024-680x453.jpg",
      title: "Trail du GR34",
      location: "Landéda",
      time: "8h - 12h",
      description: "Course à pied sur le sentier des douaniers avec plusieurs parcours de 10 à 42 km."
    },
    {
      date: { month: "AOU", day: "15" },
      image: "https://swjqpkffgdhoyjihxldn.supabase.co/storage/v1/object/public/prototype-assets/f0165328-deeb-4edb-93ff-08ed23396b3d/section-team.png",
      title: "Marché Nocturne",
      location: "Aber Wrac'h",
      time: "18h - 23h",
      description: "Marché artisanal et gastronomique en bord de mer avec animations musicales et spectacles."
    },
    {
      date: { month: "SEP", day: "21" },
      image: "https://swjqpkffgdhoyjihxldn.supabase.co/storage/v1/object/public/prototype-assets/f0165328-deeb-4edb-93ff-08ed23396b3d/gallery-feature.png",
      title: "Journées du Patrimoine",
      location: "Tous sites",
      time: "10h - 17h",
      description: "Ouverture exceptionnelle des phares, visites guidées gratuites et expositions historiques."
    }
  ];

  return (
    <section id="agenda" ref={sectionRef} className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <div className="mb-4">
            <span 
              className="text-teal uppercase tracking-widest font-medium"
              style={{ fontFamily: "var(--font-accent)" }}
            >
              À la Une
            </span>
          </div>
          <h2 
            className="text-4xl lg:text-5xl font-bold text-foreground mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            L'Essentiel pour Découvrir
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto" style={{ fontFamily: "var(--font-body)" }}>
            Jouer avec le rythme des marées, goûter aux délices de la mer, observer les oiseaux au repos 
            et vivre l'intensité des événements locaux.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div 
              key={index}
              className={`group relative rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Image Area */}
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={event.image}
                  alt={event.title}
                  className="group-hover:scale-110 transition-transform duration-700 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                
                {/* Date Badge */}
                <div className="absolute top-4 left-4 bg-teal text-white rounded-xl px-4 py-2 text-center shadow-lg">
                  <div className="text-xs font-medium uppercase tracking-wider" style={{ fontFamily: "var(--font-accent)" }}>
                    {event.date.month}
                  </div>
                  <div className="text-2xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
                    {event.date.day}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 
                  className="text-xl font-semibold text-foreground mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {event.title}
                </h3>
                
                <div className="flex items-center gap-4 mb-3 text-foreground/60">
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                    <span className="text-sm" style={{ fontFamily: "var(--font-body)" }}>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.2,16.2L11,13V7H12.5V12.2L17,14.9L16.2,16.2Z" />
                    </svg>
                    <span className="text-sm" style={{ fontFamily: "var(--font-body)" }}>{event.time}</span>
                  </div>
                </div>
                
                <p className="text-foreground/70 mb-4 leading-relaxed text-sm" style={{ fontFamily: "var(--font-body)" }}>
                  {event.description}
                </p>
                
                <button className="group/btn flex items-center gap-2 text-teal hover:gap-3 transition-all duration-300 font-medium" style={{ fontFamily: "var(--font-body)" }}>
                  En savoir plus
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AgendaSection;