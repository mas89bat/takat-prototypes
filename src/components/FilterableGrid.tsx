"use client";
import React from "react";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */
export interface FilterableItem {
  image: string;
  title: string;
  category: string;
  price?: string;
  duration?: string;
  rating?: number;
  cta: string;
}

export interface FilterableGridProps {
  categories: string[];
  items: FilterableItem[];
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
/*  Star SVG                                                           */
/* ------------------------------------------------------------------ */
function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="1.5"
      className={filled ? "text-amber-400" : "text-white/40"}
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */
export function FilterableGrid({
  categories,
  items,
  sectionTitle,
}: FilterableGridProps) {
  const [sectionRef, inView] = useInViewSimple(0.1);
  const [activeCategory, setActiveCategory] = React.useState("all");
  const [animating, setAnimating] = React.useState(false);

  const allCategories = ["all", ...categories];

  const filteredItems =
    activeCategory === "all"
      ? items
      : items.filter((item) => item.category === activeCategory);

  function handleFilter(cat: string) {
    if (cat === activeCategory) return;
    setAnimating(true);
    setTimeout(() => {
      setActiveCategory(cat);
      setAnimating(false);
    }, 250);
  }

  return (
    <section
      ref={sectionRef}
      className={`py-20 md:py-28 px-6 transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        {sectionTitle && (
          <h2
            className="text-3xl md:text-5xl font-bold text-center mb-12"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--color-navy, #1a2744)",
            }}
          >
            {sectionTitle}
          </h2>
        )}

        {/* Filter pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium capitalize transition-all duration-300 ${
                activeCategory === cat
                  ? "text-white shadow-md hover:shadow-lg"
                  : "bg-transparent border hover:-translate-y-0.5"
              }`}
              style={
                activeCategory === cat
                  ? { backgroundColor: "var(--color-teal, #2dd4bf)" }
                  : {
                      borderColor: "var(--color-navy, #1a2744)",
                      color: "var(--color-navy, #1a2744)",
                      opacity: 0.6,
                    }
              }
            >
              {cat === "all" ? "Tous" : cat}
            </button>
          ))}
        </div>

        {/* Card grid */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 transition-opacity duration-250 ${
            animating ? "opacity-0" : "opacity-100"
          }`}
        >
          {filteredItems.map((item, i) => (
            <div
              key={`${item.title}-${i}`}
              className={`group relative rounded-2xl overflow-hidden shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl aspect-[3/4] ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Badges: price / duration */}
              <div className="absolute top-4 left-4 flex gap-2 z-10">
                {item.price && (
                  <span
                    className="px-3 py-1 rounded-full text-xs font-bold text-white backdrop-blur-md"
                    style={{ backgroundColor: "var(--color-teal, #2dd4bf)" }}
                  >
                    {item.price}
                  </span>
                )}
                {item.duration && (
                  <span className="px-3 py-1 rounded-full text-xs font-semibold text-white bg-white/20 backdrop-blur-md">
                    {item.duration}
                  </span>
                )}
              </div>

              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <h3
                  className="text-xl font-bold text-white mb-2 leading-snug"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {item.title}
                </h3>

                {/* Rating */}
                {item.rating != null && (
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <StarIcon
                        key={s}
                        filled={s < Math.round(item.rating!)}
                      />
                    ))}
                  </div>
                )}

                {/* CTA link */}
                <a
                  href="#"
                  className="inline-flex items-center text-sm font-semibold text-white group/link transition-all duration-300"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  <span className="border-b border-transparent group-hover/link:border-white transition-all duration-300">
                    {item.cta}
                  </span>
                  <svg
                    className="ml-1.5 w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
