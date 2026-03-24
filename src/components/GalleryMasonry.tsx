"use client";
import React from "react";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */
export interface GalleryImage {
  url: string;
  alt: string;
  title?: string;
}

export interface GalleryMasonryProps {
  images: GalleryImage[];
  sectionTitle?: string;
}

/* ------------------------------------------------------------------ */
/*  Inline IntersectionObserver hook                                   */
/* ------------------------------------------------------------------ */
function useInViewSimple(threshold = 0.15) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [inView, setInView] = React.useState(false);
  React.useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView] as const;
}

/* ------------------------------------------------------------------ */
/*  Zoom icon SVG                                                      */
/* ------------------------------------------------------------------ */
function ZoomIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="text-white"
    >
      <circle cx="11" cy="11" r="8" />
      <path strokeLinecap="round" d="M21 21l-4.35-4.35" />
      <path strokeLinecap="round" d="M11 8v6M8 11h6" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */
export function GalleryMasonry({ images, sectionTitle }: GalleryMasonryProps) {
  const [sectionRef, inView] = useInViewSimple(0.08);

  return (
    <section
      ref={sectionRef}
      className={`py-20 md:py-28 px-6 transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ backgroundColor: "var(--color-navy, #1a2744)" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        {sectionTitle && (
          <h2
            className="text-3xl md:text-5xl font-bold text-white text-center mb-14"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {sectionTitle}
          </h2>
        )}

        {/* Masonry grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-3 md:gap-4">
          {images.map((img, i) => {
            // Every 3rd and 5th items span 2 rows for masonry effect
            const tall = i % 5 === 0 || i % 5 === 3;

            return (
              <div
                key={i}
                className={`group relative rounded-xl overflow-hidden cursor-pointer transition-all duration-500 ${
                  tall ? "row-span-2" : ""
                } ${
                  inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Image */}
                <img
                  src={img.url}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100">
                  <ZoomIcon />
                  {img.title && (
                    <span
                      className="mt-3 text-sm font-semibold text-white text-center px-4"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {img.title}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
