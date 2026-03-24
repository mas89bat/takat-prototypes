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
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-navy/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div 
              className="text-2xl md:text-3xl font-bold text-white cursor-pointer"
              style={{ fontFamily: "var(--font-display)" }}
              onClick={() => scrollToSection("hero")}
            >
              Abers Tourisme
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-white/90 hover:text-white transition-colors duration-200"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Accueil
            </button>
            <button
              onClick={() => scrollToSection("decouvrir")}
              className="text-white/90 hover:text-white transition-colors duration-200"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Découvrir
            </button>
            <button
              onClick={() => scrollToSection("experiences")}
              className="text-white/90 hover:text-white transition-colors duration-200"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Expériences
            </button>
            <button
              onClick={() => scrollToSection("galerie")}
              className="text-white/90 hover:text-white transition-colors duration-200"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Galerie
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-teal hover:bg-teal/90 text-white px-6 py-2 rounded-full transition-all duration-200 transform hover:scale-105"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <svg className="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
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
          className={`md:hidden bg-navy/95 backdrop-blur-md transition-all duration-500 overflow-hidden ${
            isMobileMenuOpen ? "max-h-[600px]" : "max-h-0"
          }`}
        >
          <div className="py-4 space-y-4">
            <button
              onClick={() => scrollToSection("hero")}
              className="block w-full text-left px-4 py-2 text-white/90 hover:text-white transition-colors duration-200"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Accueil
            </button>
            <button
              onClick={() => scrollToSection("decouvrir")}
              className="block w-full text-left px-4 py-2 text-white/90 hover:text-white transition-colors duration-200"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Découvrir
            </button>
            <button
              onClick={() => scrollToSection("experiences")}
              className="block w-full text-left px-4 py-2 text-white/90 hover:text-white transition-colors duration-200"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Expériences
            </button>
            <button
              onClick={() => scrollToSection("galerie")}
              className="block w-full text-left px-4 py-2 text-white/90 hover:text-white transition-colors duration-200"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Galerie
            </button>
            <div className="px-4 pt-2">
              <button
                onClick={() => scrollToSection("contact")}
                className="w-full bg-teal hover:bg-teal/90 text-white px-6 py-3 rounded-full transition-all duration-200"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <svg className="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}