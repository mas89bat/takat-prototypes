"use client";
import React from "react";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */
export interface StatsSectionProps {
  image: string;
  eyebrow: string;
  title: string;
  description: string;
  stats: { value: string; label: string }[];
  cta: { text: string; href: string };
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
/*  Animated counter hook                                              */
/* ------------------------------------------------------------------ */
function useCountUp(target: number, active: boolean, duration = 1800) {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    let raf: number;

    function step(ts: number) {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) raf = requestAnimationFrame(step);
    }

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration]);

  return value;
}

/* ------------------------------------------------------------------ */
/*  Single stat display                                                */
/* ------------------------------------------------------------------ */
function AnimatedStat({
  value,
  label,
  active,
  delay,
}: {
  value: string;
  label: string;
  active: boolean;
  delay: number;
}) {
  // Extract leading number and suffix (e.g. "97%" -> 97, "%")
  const numMatch = value.match(/^([+]?\d+)(.*)/);
  const numericPart = numMatch ? parseInt(numMatch[1], 10) : 0;
  const suffix = numMatch ? numMatch[2] : value;
  const prefix = numMatch && value.startsWith("+") ? "+" : "";
  const counted = useCountUp(numericPart, active);

  return (
    <div
      className={`transition-all duration-700 ${
        active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span
        className="block text-3xl md:text-4xl font-bold text-white mb-1"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {numMatch ? `${prefix}${counted}${suffix}` : value}
      </span>
      <span
        className="block text-sm text-white/70 uppercase tracking-wider"
        style={{ fontFamily: "var(--font-body)" }}
      >
        {label}
      </span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */
export function StatsSection({
  image,
  eyebrow,
  title,
  description,
  stats,
  cta,
}: StatsSectionProps) {
  const [sectionRef, inView] = useInViewSimple(0.1);

  return (
    <section
      ref={sectionRef}
      className={`relative py-20 md:py-28 overflow-hidden transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ backgroundColor: "var(--color-navy, #1a2744)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image */}
          <div
            className={`transition-all duration-700 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover"
              />
              {/* Decorative corner accent */}
              <div
                className="absolute -bottom-2 -right-2 w-24 h-24 rounded-tl-3xl opacity-20"
                style={{ backgroundColor: "var(--color-teal, #2dd4bf)" }}
              />
            </div>
          </div>

          {/* Right: Content + Stats */}
          <div>
            <span
              className="inline-block text-xs uppercase tracking-[0.25em] mb-4 font-semibold"
              style={{
                fontFamily: "var(--font-accent)",
                color: "var(--color-copper, #c87941)",
              }}
            >
              {eyebrow}
            </span>

            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {title}
            </h2>

            <p
              className="text-base md:text-lg text-white/70 leading-relaxed mb-10"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {description}
            </p>

            {/* Stats 2x2 grid */}
            <div className="grid grid-cols-2 gap-8 mb-10">
              {stats.map((s, i) => (
                <AnimatedStat
                  key={i}
                  value={s.value}
                  label={s.label}
                  active={inView}
                  delay={200 + i * 150}
                />
              ))}
            </div>

            {/* CTA */}
            <a
              href={cta.href}
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-teal-500/30 active:translate-y-0"
              style={{
                backgroundColor: "var(--color-teal, #2dd4bf)",
                fontFamily: "var(--font-body)",
              }}
            >
              {cta.text}
              <svg
                className="ml-2 w-4 h-4"
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
      </div>
    </section>
  );
}
