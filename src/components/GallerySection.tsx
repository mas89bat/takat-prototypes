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

const images = [
  { src: 'https://www.abers-tourisme.com/assets/uploads/sites/8/2022/10/123-sb-plouguerneau-balade-camping-du-phare-de-lile-vierge-jusqua-roch-pelguent-hdjeremyjehanin-2024-scaled.jpg', alt: 'Phare de l\'île Vierge', span: 'col-span-2 row-span-2' },
  { src: 'https://www.abers-tourisme.com/assets/uploads/sites/8/2022/12/laber-wrach-680x453.jpg', alt: 'Aber Wrac\'h', span: '' },
  { src: 'https://www.abers-tourisme.com/assets/uploads/sites/8/2022/11/aber-benoit-yannick-le-gal-680x453.jpg', alt: 'Aber Benoît', span: '' },
  { src: 'https://www.abers-tourisme.com/assets/uploads/sites/8/2022/08/kayak-ile-vierge-clo-et-clem-680x453.jpg', alt: 'Kayak vers l\'île Vierge', span: 'col-span-2 row-span-2' },
  { src: 'https://www.abers-tourisme.com/assets/uploads/sites/8/2022/12/archip2-680x453.jpg', alt: 'Archipel des Abers', span: '' },
  { src: 'https://www.abers-tourisme.com/assets/uploads/sites/8/2025/08/plouguerneau21alamoureux-d6a2367.jpg', alt: 'Phare de Lanvaon', span: '' },
];

export default function GallerySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef);

  return (
    <section id="gallery" ref={sectionRef} className="relative bg-navy text-white py-24 overflow-hidden">
      <div className="absolute w-96 h-96 bg-teal/5 rounded-full blur-3xl top-0 right-0 transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute w-96 h-96 bg-teal/5 rounded-full blur-3xl bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className={`text-center max-w-3xl mx-auto transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-copper uppercase tracking-widest" style={{ fontFamily: 'var(--font-accent)', fontSize: '1.3rem' }}>Instants Magiques</p>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 text-white" style={{ fontFamily: 'var(--font-display)' }}>Galerie des Abers</h2>
          <p className="text-lg text-white/70 mt-4" style={{ fontFamily: 'var(--font-body)' }}>
            Laissez-vous envoûter par le charme de nos paysages incomparables. Des vues à couper le souffle à chaque détour.
          </p>
        </div>
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[200px] mt-16 transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}>
          {images.map((image, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-xl cursor-pointer transition-all duration-700 ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'} ${image.span}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <img src={image.src} alt={image.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-navy/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-4 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white/80 mb-2" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" /></svg>
                <p className="font-semibold text-white" style={{ fontFamily: 'var(--font-display)' }}>{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
