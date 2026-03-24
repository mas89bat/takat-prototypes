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

interface Event {
  title: string;
  description: string;
  location: string;
  date: string;
  month: string;
  day: string;
  time: string;
  image: string;
  category: string;
}

const events: Event[] = [
  {
    title: "Festival des Phares",
    description: "Célébration annuelle des gardiens de la mer avec spectacles, expositions et visites guidées des phares emblématiques.",
    location: "Île Vierge",
    date: "2024-07-15",
    month: "JUI",
    day: "15",
    time: "14h00",
    image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2025/08/plouguerneau21alamoureux-d6a2367.jpg",
    category: "festival"
  },
  {
    title: "Marché aux Huîtres de Paluden",
    description: "Découvrez les délices de la mer en circuit court. Dégustation d'huîtres fraîches avec vue sur l'aber au rythme des marées.",
    location: "Paluden",
    date: "2024-08-03",
    month: "AOU",
    day: "03",
    time: "10h00",
    image: "https://cdt29.media.tourinsoft.eu/upload/Goeland-Toque-2025--9-.jpg?width=2560&height=2560",
    category: "gastronomie"
  },
  {
    title: "Randonnée Nocturne GR34",
    description: "Parcourez le sentier côtier sous les étoiles avec un guide naturaliste. Observation de la faune nocturne et des phares illuminés.",
    location: "Sentier côtier",
    date: "2024-08-20",
    month: "AOU",
    day: "20",
    time: "21h00",
    image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2022/10/123-sb-plouguerneau-balade-camping-du-phare-de-lile-vierge-jusqua-roch-pelguent-hdjeremyjehanin-2024-680x509.jpg",
    category: "nature"
  },
  {
    title: "Course de la Véloroute",
    description: "Compétition cycliste sur la véloroute des Abers. Parcours familiaux et sportifs pour tous les niveaux le long de la côte.",
    location: "Véloroute des Abers",
    date: "2024-09-10",
    month: "SEP",
    day: "10",
    time: "09h00",
    image: "https://swjqpkffgdhoyjihxldn.supabase.co/storage/v1/object/public/prototype-assets/f0165328-deeb-4edb-93ff-08ed23396b3d/section-about.png",
    category: "sport"
  },
  {
    title: "Atelier Photographie Maritime",
    description: "Apprenez les techniques de photographie marine avec un professionnel. Capture des lumières dorées sur les phares et l'océan.",
    location: "Pointe Saint-Mathieu",
    date: "2024-09-25",
    month: "SEP",
    day: "25",
    time: "16h00",
    image: "https://swjqpkffgdhoyjihxldn.supabase.co/storage/v1/object/public/prototype-assets/f0165328-deeb-4edb-93ff-08ed23396b3d/gallery-feature.png",
    category: "culture"
  },
  {
    title: "Concours Pique-nique Vue Archipel",
    description: "Pique-niquez avec vue sur l'archipel dans un cadre idyllique. Concours du plus beau panier avec produits locaux.",
    location: "Korn ar Gazel",
    date: "2024-10-05",
    month: "OCT",
    day: "05",
    time: "12h00",
    image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2025/12/113-sb-landeda-point-de-vue-depuis-an-treiz-hdjeremyjehanin-2024-680x453.jpg",
    category: "famille"
  }
];

export default function AgendaSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef);

  return (
    <section id="agenda" ref={sectionRef} className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <p className="text-teal uppercase tracking-widest text-sm font-semibold mb-4" style={{ fontFamily: "var(--font-accent)" }}>
            À la Une
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6" style={{ fontFamily: "var(--font-display)" }}>
            L'Essentiel pour Découvrir les Abers
          </h2>
          <p className="text-lg text-navy/70 max-w-2xl mx-auto" style={{ fontFamily: "var(--font-body)" }}>
            Jouer avec le rythme des marées, goûter aux délices de la mer, observer les oiseaux au repos. 
            Ne manquez aucun événement de notre territoire exceptionnel.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image Area */}
              <div className="h-64 overflow-hidden relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                
                {/* Date Badge */}
                <div className="absolute top-4 left-4 bg-teal text-white rounded-xl px-4 py-2 text-center shadow-lg">
                  <div className="text-xs uppercase tracking-wide" style={{ fontFamily: "var(--font-body)" }}>
                    {event.month}
                  </div>
                  <div className="text-2xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
                    {event.day}
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-navy uppercase tracking-wider">
                  {event.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy mb-3" style={{ fontFamily: "var(--font-display)" }}>
                  {event.title}
                </h3>
                
                <div className="flex items-center text-navy/60 text-sm mb-2" style={{ fontFamily: "var(--font-body)" }}>
                  <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {event.location}
                </div>
                
                <div className="flex items-center text-navy/60 text-sm mb-4" style={{ fontFamily: "var(--font-body)" }}>
                  <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {event.time}
                </div>
                
                <p className="text-navy/70 mb-4 leading-relaxed text-sm" style={{ fontFamily: "var(--font-body)" }}>
                  {event.description}
                </p>
                
                <button className="group/btn flex items-center gap-2 text-teal font-semibold hover:gap-3 transition-all duration-300" style={{ fontFamily: "var(--font-body)" }}>
                  En savoir plus
                  <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
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