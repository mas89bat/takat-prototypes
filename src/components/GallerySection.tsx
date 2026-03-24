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

function GallerySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef);

  const galleryItems = [
    {
      image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2025/08/plouguerneau21alamoureux-d6a2367.jpg",
      location: "Phare de Lanvaon",
      className: "col-span-2 row-span-2"
    },
    {
      image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2022/08/kayak-ile-vierge-clo-et-clem-680x453.jpg",
      location: "Île Vierge",
      className: ""
    },
    {
      image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2025/12/113-sb-landeda-point-de-vue-depuis-an-treiz-hdjeremyjehanin-2024-680x453.jpg",
      location: "An Treiz - Landéda",
      className: ""
    },
    {
      image: "https://swjqpkffgdhoyjihxldn.supabase.co/storage/v1/object/public/prototype-assets/f0165328-deeb-4edb-93ff-08ed23396b3d/gallery-feature.png",
      location: "Côte des Abers",
      className: "col-span-2 row-span-2"
    },
    {
      image: "https://www.abers-tourisme.com/assets/uploads/sites/8/2022/10/123-sb-plouguerneau-balade-camping-du-phare-de-lile-vierge-jusqua-roch-pelguent-hdjeremyjehanin-2024-680x509.jpg",
      location: "GR34 Plouguerneau",
      className: ""
    },
    {
      image: "https://cdt29.media.tourinsoft.eu/upload/L-escale-2025--3--3.jpg?width=2560&height=2560",
      location: "Port de l'Aber Wrac'h",
      className: ""
    },
    {
      image: "https://swjqpkffgdhoyjihxldn.supabase.co/storage/v1/object/public/prototype-assets/f0165328-deeb-4edb-93ff-08ed23396b3d/section-about.png",
      location: "Paysages sauvages",
      className: ""
    },
    {
      image: "https://swjqpkffgdhoyjihxldn.supabase.co/storage/v1/object/public/prototype-assets/f0165328-deeb-4edb-93ff-08ed23396b3d/section-team.png",
      location: "Activités nautiques",
      className: ""
    },
    {
      image: "https://cdt29.media.tourinsoft.eu/upload/Goeland-Toque-2025--6-.jpg?width=2560&height=2560",
      location: "Gastronomie locale",
      className: ""
    }
  ];

  return (
    <section id="galerie" ref={sectionRef} className="bg-navy text-white py-24 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-32 -right-32 w-96 h-96 bg-teal/5 rounded-full blur-3xl" />
      <div className="absolute bottom-32 -left-32 w-80 h-80 bg-teal/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-teal/3 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <div className="mb-4">
            <span 
              className="text-teal uppercase tracking-widest font-medium"
              style={{ fontFamily: "var(--font-accent)" }}
            >
              Inspiration Visuelle
            </span>
          </div>
          <h2 
            className="text-4xl lg:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            L'Âme des Abers
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto" style={{ fontFamily: "var(--font-body)" }}>
            Laissez-vous porter par la beauté sauvage de nos paysages, 
            entre phares majestueux et eaux turquoise des abers bretons.
          </p>
        </div>

        {/* Masonry Gallery */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[200px] transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`} style={{ transitionDelay: "300ms" }}>
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-xl cursor-pointer transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl ${
                item.className || ""
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <img
                src={item.image}
                alt={item.location}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-navy/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="text-center">
                  <div className="mb-3">
                    <svg className="w-8 h-8 text-white/80 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </div>
                  <h3 
                    className="text-lg font-semibold text-white"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {item.location}
                  </h3>
                </div>
              </div>

              {/* Gradient overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-16 transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`} style={{ transitionDelay: "500ms" }}>
          <button 
            onClick={() => document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-teal hover:bg-teal/80 text-white rounded-full px-8 py-4 font-semibold transition-all duration-300 hover:scale-105 min-h-[48px]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Voir Plus de Photos
          </button>
        </div>
      </div>
    </section>
  );
}

export default GallerySection;