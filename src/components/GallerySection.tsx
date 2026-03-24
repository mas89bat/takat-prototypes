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

const galleryImages = [
    { src: 'https://cdt29.media.tourinsoft.eu/upload/Auberge-du-pont-2025.jpg', location: 'Aber Wrac\'h', span: 'col-span-2 row-span-2' },
    { src: 'https://cdt29.media.tourinsoft.eu/upload/Goeland-Toque-2025.jpeg', location: 'Plouguerneau', span: '' },
    { src: 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f', location: 'Côte des Légendes', span: '' },
    { src: 'https://cdt29.media.tourinsoft.eu/upload/auberge-du-pont-2016.jpg', location: 'Auberge du Pont', span: 'col-span-2 row-span-2' },
    { src: 'https://cdt29.media.tourinsoft.eu/upload/Goeland-Toque-2025--10-.jpg', location: 'Le Goéland Toqué', span: '' },
    { src: 'https://images.unsplash.com/photo-1559212959-b1b753a39ad0', location: 'Phare de l\'Île Vierge', span: '' },
];

export default function GallerySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef);

  return (
    <section ref={sectionRef} className="bg-navy text-white py-20 md:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 -left-64 w-[40rem] h-[40rem] bg-teal/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 -right-64 w-[40rem] h-[40rem] bg-teal/5 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center max-w-3xl mx-auto transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-teal" style={{ fontFamily: 'var(--font-accent)', fontSize: '1.3rem' }}>
            Galerie
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4" style={{ fontFamily: 'var(--font-display)' }}>
            Instants Capturés
          </h2>
          <p className="mt-6 text-lg text-white/80" style={{ fontFamily: 'var(--font-body)' }}>
            Plongez dans la beauté du Pays des Abers à travers notre collection de photos. Chaque image raconte une histoire, un moment, une émotion.
          </p>
        </div>

        <div className={`grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[200px] mt-16 transition-all duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}>
            {galleryImages.map((image, i) => (
                <div key={i} className={`group relative overflow-hidden rounded-xl cursor-pointer transition-all duration-700 ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'} ${image.span}`} style={{ transitionDelay: `${i * 100}ms` }}>
                    <img src={`${image.src}?w=800&q=80&auto=format&fit=crop`} alt={image.location} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-navy/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-4 text-center">
                       <svg className="w-8 h-8 text-white/80 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        <p className="font-semibold text-white" style={{fontFamily: 'var(--font-display)'}}>{image.location}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}