import { useState, useEffect, useRef } from 'react';

function useInView(ref: React.RefObject<HTMLElement | null>) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.15 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
  return inView;
}

const galleryImages = [
  { src: 'https://www.abers-tourisme.com/assets/uploads/sites/8/2022/10/123-sb-plouguerneau-balade-camping-du-phare-de-lile-vierge-jusqua-roch-pelguent-hdjeremyjehanin-2024-scaled.jpg', location: 'Plouguerneau', span: 'col-span-2 row-span-2' },
  { src: 'https://www.abers-tourisme.com/assets/uploads/sites/8/2022/12/laber-wrach-680x453.jpg', location: 'Aber Wrac\'h', span: '' },
  { src: 'https://cdt29.media.tourinsoft.eu/upload/Auberge-du-pont-2025.jpg?width=2560&height=2560', location: 'Lannilis', span: '' },
  { src: 'https://www.abers-tourisme.com/assets/uploads/sites/8/2022/11/aber-benoit-yannick-le-gal-680x453.jpg', location: 'Aber Benoît', span: 'col-span-2 row-span-2' },
  { src: 'https://www.abers-tourisme.com/assets/uploads/sites/8/2025/08/plouguerneau21alamoureux-d6a2367.jpg', location: 'Phare de Lanvaon', span: '' },
  { src: 'https://www.abers-tourisme.com/assets/uploads/sites/8/2022/08/kayak-ile-vierge-clo-et-clem-680x453.jpg', location: 'Kayak, Île Vierge', span: '' },
];

export default function GallerySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef);

  return (
    <section ref={sectionRef} className="bg-navy text-white py-24 overflow-hidden relative">
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-teal/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-teal/5 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="uppercase tracking-widest text-teal" style={{ fontFamily: "var(--font-accent)", fontSize: "1.3rem" }}>Instantanés</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2" style={{ fontFamily: "var(--font-display)" }}>Le charme de paysages incomparables</h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-white/80" style={{ fontFamily: "var(--font-body)" }}>
            Chaque recoin du Pays des Abers est une carte postale. Laissez-vous envoûter par la beauté brute et poétique de notre littoral.
          </p>
        </div>

        <div className={`grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[200px] mt-16 transition-all duration-1000 ${inView ? "opacity-100" : "opacity-0"}`}>
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-xl cursor-pointer ${img.span} transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 100}ms` }}>
              <img src={img.src} alt={`Galerie Abers - ${img.location}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-navy/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-4">
                <div className="text-center text-white">
                  <svg className="w-8 h-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  <p className="mt-2 font-semibold">{img.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}