"use client";
import React from "react";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */
export interface FeatureCard {
  image: string;
  title: string;
  description: string;
  stat: { value: string; label: string };
  icon?: React.ReactNode;
  rating?: number;
}

export interface FeatureCardsProps {
  cards: FeatureCard[];
  sectionTitle?: string;
  sectionSubtitle?: string;
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
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="1.5"
      className={filled ? "text-amber-400" : "text-gray-300"}
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */
export function FeatureCards({
  cards,
  sectionTitle,
  sectionSubtitle,
}: FeatureCardsProps) {
  const [sectionRef, inView] = useInViewSimple(0.1);

  return (
    <section
      ref={sectionRef}
      className={`py-20 md:py-28 px-6 transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ backgroundColor: "var(--color-sand, #f5f0eb)" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        {(sectionTitle || sectionSubtitle) && (
          <div className="text-center mb-14">
            {sectionTitle && (
              <h2
                className="text-3xl md:text-5xl font-bold mb-4"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--color-navy, #1a2744)",
                }}
              >
                {sectionTitle}
              </h2>
            )}
            {sectionSubtitle && (
              <p
                className="max-w-2xl mx-auto text-base md:text-lg opacity-70"
                style={{
                  fontFamily: "var(--font-body)",
                  color: "var(--color-navy, #1a2744)",
                }}
              >
                {sectionSubtitle}
              </p>
            )}
          </div>
        )}

        {/* Card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`group bg-white rounded-2xl overflow-hidden shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Image container */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Stat badge */}
                <div className="absolute top-3 right-3 backdrop-blur-md bg-white/90 rounded-lg px-3 py-1.5 shadow-sm">
                  <span
                    className="block text-sm font-bold leading-tight"
                    style={{ color: "var(--color-navy, #1a2744)" }}
                  >
                    {card.stat.value}
                  </span>
                  <span className="block text-[10px] uppercase tracking-wider text-gray-500">
                    {card.stat.label}
                  </span>
                </div>

                {/* Optional icon */}
                {card.icon && (
                  <div
                    className="absolute top-3 left-3 w-10 h-10 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-md shadow-sm"
                    style={{ color: "var(--color-teal, #2dd4bf)" }}
                  >
                    {card.icon}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3
                  className="text-lg font-bold mb-2 leading-snug"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "var(--color-navy, #1a2744)",
                  }}
                >
                  {card.title}
                </h3>
                <p
                  className="text-sm leading-relaxed opacity-70 mb-4"
                  style={{
                    fontFamily: "var(--font-body)",
                    color: "var(--color-navy, #1a2744)",
                  }}
                >
                  {card.description}
                </p>

                {/* Star rating */}
                {card.rating != null && (
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <StarIcon key={s} filled={s < Math.round(card.rating!)} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
