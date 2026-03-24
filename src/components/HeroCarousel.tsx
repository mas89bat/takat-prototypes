"use client";
import React from "react";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */
export interface HeroSlide {
  image: string;
  eyebrow: string;
  title: string;
  subtitle: string;
}

export interface HeroCarouselProps {
  slides: HeroSlide[];
  primaryCta: { text: string; href: string };
  secondaryCta: { text: string; href: string };
  /** Auto-advance interval in ms (default 6000) */
  interval?: number;
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
/*  Component                                                          */
/* ------------------------------------------------------------------ */
export function HeroCarousel({
  slides,
  primaryCta,
  secondaryCta,
  interval = 6000,
}: HeroCarouselProps) {
  const [active, setActive] = React.useState(0);
  const [sectionRef, inView] = useInViewSimple(0.1);

  /* Auto-advance --------------------------------------------------- */
  React.useEffect(() => {
    const id = setInterval(
      () => setActive((p) => (p + 1) % slides.length),
      interval,
    );
    return () => clearInterval(id);
  }, [slides.length, interval]);

  return (
    <section
      ref={sectionRef}
      className={`relative w-full h-screen min-h-[600px] overflow-hidden transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/* ----- Slides ----- */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === active ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          aria-hidden={i !== active}
        >
          {/* Ken Burns image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slide.image})`,
              animation:
                i === active ? "kenBurns 8s ease-in-out forwards" : "none",
            }}
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        </div>
      ))}

      {/* ----- Content ----- */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-6 text-center text-white">
        {slides[active] && (
          <>
            <span
              className="mb-4 text-xs md:text-sm uppercase tracking-[0.25em] opacity-90"
              style={{ fontFamily: "var(--font-accent)" }}
            >
              {slides[active].eyebrow}
            </span>

            <h1
              className="max-w-4xl text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.08] mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {slides[active].title}
            </h1>

            <p
              className="max-w-2xl text-base md:text-xl opacity-90 mb-10 leading-relaxed"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {slides[active].subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={primaryCta.href}
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-teal-500/30 active:translate-y-0"
                style={{
                  backgroundColor: "var(--color-teal)",
                  fontFamily: "var(--font-body)",
                }}
              >
                {primaryCta.text}
              </a>
              <a
                href={secondaryCta.href}
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-semibold text-white border border-white/40 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {secondaryCta.text}
              </a>
            </div>
          </>
        )}
      </div>

      {/* ----- Dot indicators ----- */}
      <div className="absolute bottom-20 md:bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-2.5">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setActive(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === active
                ? "w-8 bg-white"
                : "bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* ----- Wave divider ----- */}
      <div className="absolute bottom-0 left-0 w-full z-20 leading-[0]">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 40C240 80 480 100 720 80C960 60 1200 20 1440 40V100H0V40Z"
            fill="white"
          />
        </svg>
      </div>

      {/* ----- Ken Burns keyframe (injected once) ----- */}
      <style>{`
        @keyframes kenBurns {
          0%   { transform: scale(1);   }
          100% { transform: scale(1.1); }
        }
      `}</style>
    </section>
  );
}
