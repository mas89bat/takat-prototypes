"use client";
import React from "react";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */
export interface NewsletterCTAProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  buttonText?: string;
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
export function NewsletterCTA({
  title,
  subtitle,
  backgroundImage,
  buttonText = "S'inscrire",
}: NewsletterCTAProps) {
  const [sectionRef, inView] = useInViewSimple(0.1);
  const [email, setEmail] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  }

  return (
    <section
      ref={sectionRef}
      className={`relative w-full py-24 md:py-32 overflow-hidden transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/* Background image */}
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}

      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: backgroundImage
            ? "rgba(0,0,0,0.70)"
            : "var(--color-navy, #1a2744)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <h2
          className={`text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{
            fontFamily: "var(--font-display)",
            transitionDelay: "100ms",
          }}
        >
          {title}
        </h2>

        <p
          className={`text-base md:text-lg text-white/70 mb-10 leading-relaxed transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{
            fontFamily: "var(--font-body)",
            transitionDelay: "200ms",
          }}
        >
          {subtitle}
        </p>

        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className={`flex flex-col sm:flex-row gap-3 max-w-lg mx-auto transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Votre adresse email"
              required
              className="flex-1 px-6 py-3.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/60 text-sm outline-none transition-all duration-300 focus:border-white/50 focus:bg-white/15 focus:ring-2 focus:ring-white/20"
              style={{ fontFamily: "var(--font-body)" }}
            />
            <button
              type="submit"
              className="px-8 py-3.5 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-teal-500/30 active:translate-y-0 shrink-0"
              style={{
                backgroundColor: "var(--color-teal, #2dd4bf)",
                fontFamily: "var(--font-body)",
              }}
            >
              {buttonText}
              <svg
                className="inline-block ml-2 w-4 h-4"
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
            </button>
          </form>
        ) : (
          <div
            className={`flex flex-col items-center gap-3 transition-all duration-500 ${
              submitted
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            {/* Checkmark circle */}
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "var(--color-teal, #2dd4bf)" }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p
              className="text-lg font-semibold text-white"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Merci pour votre inscription !
            </p>
            <p
              className="text-sm text-white/60"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Vous recevrez nos prochaines nouvelles.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
