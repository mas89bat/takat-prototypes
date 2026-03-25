import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-navy/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
              Abers Tourisme
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-white hover:text-copper transition-colors duration-200"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Accueil
            </button>
            <button
              onClick={() => scrollToSection("decouvrir")}
              className="text-white hover:text-copper transition-colors duration-200"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Découvrir
            </button>
            <button
              onClick={() => scrollToSection("activites")}
              className="text-white hover:text-copper transition-colors duration-200"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Activités
            </button>
            <button
              onClick={() => scrollToSection("galerie")}
              className="text-white hover:text-copper transition-colors duration-200"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Galerie
            </button>
            <button
              onClick={() => scrollToSection("newsletter")}
              className="text-white hover:text-copper transition-colors duration-200"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Contact
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a
              href="https://www.abers-tourisme.com"
              className="bg-teal text-white px-6 py-2 rounded-full hover:bg-teal/90 transition-colors duration-200"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <svg className="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white hover:text-copper transition-colors duration-200"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden bg-navy/95 backdrop-blur-md transition-all duration-500 overflow-hidden ${
            isMobileMenuOpen ? "max-h-[600px]" : "max-h-0"
          }`}
        >
          <nav className="py-4 space-y-4">
            <button
              onClick={() => scrollToSection("hero")}
              className="block w-full text-left text-white hover:text-copper transition-colors duration-200 px-4 py-2"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Accueil
            </button>
            <button
              onClick={() => scrollToSection("decouvrir")}
              className="block w-full text-left text-white hover:text-copper transition-colors duration-200 px-4 py-2"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Découvrir
            </button>
            <button
              onClick={() => scrollToSection("activites")}
              className="block w-full text-left text-white hover:text-copper transition-colors duration-200 px-4 py-2"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Activités
            </button>
            <button
              onClick={() => scrollToSection("galerie")}
              className="block w-full text-left text-white hover:text-copper transition-colors duration-200 px-4 py-2"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Galerie
            </button>
            <button
              onClick={() => scrollToSection("newsletter")}
              className="block w-full text-left text-white hover:text-copper transition-colors duration-200 px-4 py-2"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Contact
            </button>
            <div className="px-4 pt-4">
              <a
                href="https://www.abers-tourisme.com"
                className="bg-teal text-white px-6 py-2 rounded-full hover:bg-teal/90 transition-colors duration-200 inline-block"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <svg className="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Contact
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}