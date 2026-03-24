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

interface GalleryItem {
  title: string;
  location: string;
  image: string;
  featured?: boolean;
}

const galleryItems: GalleryItem[] = [
  {
    title: "Phare de l'Île Vierge",
    location: "Île Vierge",
    image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2025/08/plouguerneau21alamoureux-d6a2367.jpg",
    featured: true
  },
  {
    title: "Kayak dans l'Aber Wrac'h",
    location: "Aber Wrac'h",
    image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2022/08/kayak-ile-vierge-clo-et-clem-680x453.jpg"
  },
  {
    title: "Point de vue An Treiz",
    location: "Landéda",
    image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2025/12/113-sb-landeda-point-de-vue-depuis-an-treiz-hdjeremyjehanin-2024-680x453.jpg"
  },
  {
    title: "Sentier côtier GR34",
    location: "Plouguerneau",
    image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2022/10/123-sb-plouguerneau-balade-camping-du-phare-de-lile-vierge-jusqua-roch-pelguent-hdjeremyjehanin-2024-680x509.jpg",
    featured: true
  },
  {
    title: "Restaurant Le Goéland Toqué",
    location: "Plouguerneau",
    image: "https://cdt29.media.tourinsoft.eu/upload/Goeland-Toque-2025--6-.jpg?width=2560&height=2560"
  },
  {
    title: "L'Escale Marine",
    location: "Landéda",
    image: "https://cdt29.media.tourinsoft.eu/upload/L-escale-2025--3--3.jpg?width=2560&height=2560"
  },
  {
    title: "Plage de Korn ar Gazel",
    location: "Ploudalmézeau",
    image: "https://swjqpkffgdhoyjihxldn.supabase.co/storage/v1/object/public/prototype-assets/f0165328-deeb-4edb-93ff-08ed23396b3d/gallery-feature.png"
  },
  {
    title: "Véloroute des Abers",
    location: "Côte des Abers",
    image: "https://swjqpkffgdhoyjihxldn.supabase.co/storage/v1/object/public/prototype-assets/f0165328-deeb-4edb-93ff-08ed23396b3d/section-about.png"
  },
  {
    title: "Observation ornithologique",
    location: "Aber-Benoît",
    image: "https://swjqpkffgdhoyjihxldn.supabase.co/storage/v1/object/public/prototype-assets/f0165328-deeb-4edb-93ff-08ed23396b3d/section-team.png"
  },
  {
    title: "Coucher de soleil",
    location: "Pointe Saint-Mathieu",
    image: "https://cdt29.media.tourinsoft.eu/upload/L-escale-2025--2--3.jpg?width=2560&height=2560"
  },
  {
    title: "Marché aux huîtres",
    location: "Paluden",
    image: "https://cdt29.media.tourinsoft.eu/upload/Goeland-Toque-2025--9-.jpg?width=2560&height=2560"
  },
  {
    title: "Architecture côtière",
    location: "Lannilis",
    image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2022/10/123-sb-plouguerneau-balade-camping-du-phare-de-lile-vierge-jusqua-roch-pelguent-hdjeremyjehanin-2024-scaled.jpg"
  }
];

export default function GallerySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef);

  return (
    <section ref={sectionRef} className="py-24 bg-navy text-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-40 left-20 w-96 h-96 bg-teal/5 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-20 w-80 h-80 bg-teal/3 rounded-full blur-3xl" />
      <div className="absolute top-20 right-1/3 w-60 h-60 bg-teal/4 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <p className="text-teal mb-4" style={{ fontFamily: "var(--font-accent)", fontSize: "1.3rem" }}>
            Galerie Photos
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-display)" }}>
            Instants Magiques des Abers
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto" style={{ fontFamily: "var(--font-body)" }}>
            Découvrez la beauté sauvage de notre territoire à travers une sélection d'images qui capturent l'essence 
            de nos paysages exceptionnels et de nos expériences uniques.
          </p>
        </div>

        {/* Masonry Gallery Grid */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[200px] transition-all duration-700 delay-300 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          {galleryItems.map((item, index) => {
            // First and fourth items are featured (larger)
            const isLargeFeatured = index === 0 || index === 3;
            const spanClass = isLargeFeatured ? "col-span-2 row-span-2" : "";
            
            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-xl cursor-pointer ${spanClass} transition-all duration-500`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-navy/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="text-center text-white p-4">
                    <svg className="w-8 h-8 mx-auto mb-2 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <h3 className="font-semibold text-sm mb-1" style={{ fontFamily: "var(--font-display)" }}>
                      {item.title}
                    </h3>
                    <p className="text-xs text-white/80" style={{ fontFamily: "var(--font-body)" }}>
                      {item.location}
                    </p>
                  </div>
                </div>
                
                {/* Gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
              </div>
            );
          })}
        </div>

        {/* View More Button */}
        <div className={`text-center mt-12 transition-all duration-700 delay-500 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <button className="bg-teal hover:bg-teal/80 text-white rounded-full px-8 py-4 font-semibold transition-all duration-300 hover:scale-105" style={{ fontFamily: "var(--font-body)" }}>
            Voir toute la galerie
          </button>
        </div>
      </div>
    </section>
  );
}