import { useState, useEffect } from "react";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-navy/95 backdrop-blur-md shadow-lg" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-teal flex items-center justify-center text-white font-bold text-lg" style={{ fontFamily: "var(--font-display)" }}>
              A
            </div>
            <span className="text-xl font-semibold text-white" style={{ fontFamily: "var(--font-display)" }}>
              Abers Tourisme
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button onClick={() => scrollToSection('decouvrir')} className="group relative text-white hover:text-teal transition-colors duration-300">
              <span style={{ fontFamily: "var(--font-body)" }}>Découvrir</span>
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-teal group-hover:w-3/4 transition-all duration-300" />
            </button>
            <button onClick={() => scrollToSection('experiences')} className="group relative text-white hover:text-teal transition-colors duration-300">
              <span style={{ fontFamily: "var(--font-body)" }}>Activités</span>
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-teal group-hover:w-3/4 transition-all duration-300" />
            </button>
            <button onClick={() => scrollToSection('sejour')} className="group relative text-white hover:text-teal transition-colors duration-300">
              <span style={{ fontFamily: "var(--font-body)" }}>Séjour</span>
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-teal group-hover:w-3/4 transition-all duration-300" />
            </button>
            <button onClick={() => scrollToSection('agenda')} className="group relative text-white hover:text-teal transition-colors duration-300">
              <span style={{ fontFamily: "var(--font-body)" }}>Agenda</span>
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-teal group-hover:w-3/4 transition-all duration-300" />
            </button>
          </nav>

          {/* CTA Button */}
          <button 
            onClick={() => scrollToSection('newsletter')}
            className="hidden lg:block bg-teal hover:bg-teal/80 rounded-full px-5 py-2.5 text-white font-semibold transition-colors duration-300 min-h-[44px] min-w-[44px]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Planifier Votre Séjour
          </button>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white hover:text-teal transition-colors duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Menu mobile"
          >
            {mobileMenuOpen ? (
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

        {/* Mobile Navigation Drawer */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ${
          mobileMenuOpen ? "max-h-[600px]" : "max-h-0"
        }`}>
          <nav className="py-6 space-y-4 border-t border-white/20">
            <button onClick={() => scrollToSection('decouvrir')} className="block w-full text-left text-white hover:text-teal transition-colors duration-300 py-2" style={{ fontFamily: "var(--font-body)" }}>
              Découvrir
            </button>
            <button onClick={() => scrollToSection('experiences')} className="block w-full text-left text-white hover:text-teal transition-colors duration-300 py-2" style={{ fontFamily: "var(--font-body)" }}>
              Activités
            </button>
            <button onClick={() => scrollToSection('sejour')} className="block w-full text-left text-white hover:text-teal transition-colors duration-300 py-2" style={{ fontFamily: "var(--font-body)" }}>
              Séjour
            </button>
            <button onClick={() => scrollToSection('agenda')} className="block w-full text-left text-white hover:text-teal transition-colors duration-300 py-2" style={{ fontFamily: "var(--font-body)" }}>
              Agenda
            </button>
            <button 
              onClick={() => scrollToSection('newsletter')}
              className="w-full mt-4 bg-teal hover:bg-teal/80 rounded-full px-6 py-3 text-white font-semibold transition-colors duration-300"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Planifier Votre Séjour
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;