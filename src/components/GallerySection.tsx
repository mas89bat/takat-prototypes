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
  { src: 'https://swjqpkffgdhoyjihxldn.supabase.co/storage/v1/object/public/prototype-assets/f0165328-deeb-4edb-93ff-08ed23396b3d/gallery-feature.png', alt: 'Vue aérienne d\'un phare', className: 'col-span-2 row-span-2' },
  { src: 'https://www.abers-tourisme.com/assets/uploads/sites/8/2022/10/123-sb-plouguerneau-balade-camping-du-phare-de-lile-vierge-jusqua-roch-pelguent-hdjeremyjehanin-2024-680x509.jpg', alt: 'Promenade sur le sentier côtier', className: '' },
  { src: 'https://www.abers-tourisme.com/assets/uploads/sites/8/2022/08/kayak-ile-vierge-clo-et-clem-680x453.jpg', alt: 'Kayak près de l\'île Vierge', className: '' },
  { src: 'https://www.abers-tourisme.com/assets/uploads/sites/8/2025/12/113-sb-landeda-point-de-vue-depuis-an-treiz-hdjeremyjehanin-2024-680x453.jpg', alt: 'Vue sur l\'Aber Benoît', className: 'col-span-2 row-span-2' },
  { src: 'https://www.abers-tourisme.com/assets/uploads/sites/8/2025/08/plouguerneau21alamoureux-d6a2367.jpg', alt: 'Phare de Lanvaon', className: '' },
  { src: 'https://swjqpkffgdhoyjihxldn.supabase.co/storage/v1/object/public/prototype-assets/f0165328-deeb-4edb-93ff-08ed23396b3d/section-team.png', alt: 'Détail de la côte rocheuse', className: '' },
];

export default function GallerySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef);

  return (
    <section ref={sectionRef} className="bg-navy text-white py-20 md:py-28 relative overflow-hidden">
      <div className="absolute top-1/4 -right-60 w-96 h-96 bg-teal/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -left-60 w-96 h-96 bg-teal/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className={`text-center max-w-3xl mx-auto transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="uppercase tracking-widest text-teal" style={{ fontFamily: 'var(--font-accent)', fontSize: '1.3rem' }}>Instants Capturés</p>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-white" style={{ fontFamily: 'var(--font-display)' }}>
            La beauté brute des Abers
          </h2>
          <p className="mt-6 text-lg text-white/70" style={{ fontFamily: 'var(--font-body)' }}>
            Des paysages façonnés par les marées, des lumières changeantes et une nature préservée. Explorez la galerie de notre coin de paradis.
          </p>
        </div>

        <div className={`grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[200px] mt-16 transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}>
          {images.map((img, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-xl cursor-pointer transition-all duration-700 ${img.className} ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-navy/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-4 text-center">
                <div className='flex flex-col items-center gap-2'>
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.776 48.776 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" /><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" /></svg>
                  <p className="text-sm text-white/90" style={{ fontFamily: 'var(--font-body)' }}>{img.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
