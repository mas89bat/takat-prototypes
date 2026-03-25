import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Accueil", href: "#" },
  { label: "D\u00e9couvrir", href: "#decouvrir" },
  { label: "Exp\u00e9riences", href: "#experiences" },
  { label: "Galerie", href: "#galerie" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-navy/95 backdrop-blur-md shadow-lg"
            : "bg-gradient-to-b from-black/40 to-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 text-white"
            onClick={() => setMobileOpen(false)}
          >
            {/* Wave icon */}
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0"
            >
              <circle cx="16" cy="16" r="15" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
              <path
                d="M6 18c2-3 4-5 7-4s4 4 7 3 5-4 7-3"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
                className="wave-animate"
              />
              <path
                d="M6 22c2-2 4-4 7-3s4 3 7 2 5-3 7-2"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                fill="none"
                opacity="0.5"
                className="wave-animate"
                style={{ animationDelay: "0.3s" }}
              />
            </svg>
            <span
              className="text-xl font-bold tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Abers Tourisme
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white/80 hover:text-white text-sm font-medium transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-teal after:transition-all after:duration-300 hover:after:w-full"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="tel:+33298040543"
            className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-teal/30"
            style={{
              backgroundColor: "var(--color-teal)",
              fontFamily: "var(--font-body)",
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            Planifier Votre S&eacute;jour
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center text-white"
            aria-label="Menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className={`block h-0.5 bg-white rounded-full transition-all duration-300 ${
                  mobileOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-white rounded-full transition-all duration-300 ${
                  mobileOpen ? "opacity-0 scale-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-white rounded-full transition-all duration-300 ${
                  mobileOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          mobileOpen ? "visible" : "invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileOpen(false)}
        />

        {/* Drawer panel */}
        <div
          className={`absolute top-0 right-0 h-full w-[300px] max-w-[85vw] bg-navy shadow-2xl transition-transform duration-500 ease-out ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full pt-24 px-8 pb-8">
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((link, i) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-white/80 hover:text-white text-lg font-medium py-3 border-b border-white/10 transition-all duration-300 ${
                    mobileOpen
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-8"
                  }`}
                  style={{
                    fontFamily: "var(--font-display)",
                    transitionDelay: mobileOpen ? `${i * 60}ms` : "0ms",
                  }}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="mt-auto">
              <a
                href="tel:+33298040543"
                className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-full text-sm font-semibold text-white transition-all duration-300"
                style={{
                  backgroundColor: "var(--color-teal)",
                  fontFamily: "var(--font-body)",
                }}
                onClick={() => setMobileOpen(false)}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                Planifier Votre S&eacute;jour
              </a>

              <p
                className="text-center text-white/30 text-xs mt-6"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Office de Tourisme du Pays des Abers
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
