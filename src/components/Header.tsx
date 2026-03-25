import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: "Accueil", id: "hero" },
    { label: "Découvrir", id: "decouvrir" },
    { label: "Patrimoine", id: "patrimoine" },
    { label: "Activités", id: "activites" },
    { label: "Galerie", id: "galerie" }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-navy/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('hero')}
            className="flex items-center space-x-3"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span className={`text-xl lg:text-2xl font-bold transition-colors ${
              isScrolled ? 'text-white' : 'text-navy'
            }`}>
              Abers Tourisme
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-sm font-medium transition-colors hover:opacity-70 ${
                  isScrolled ? 'text-white' : 'text-navy'
                }`}
                style={{ fontFamily: "var(--font-body)" }}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('newsletter')}
              className="bg-teal text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-teal/90 transition-colors"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <svg className="w-4 h-4 inline mr-2" viewBox="0 0 24 24" fill="none">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21L8.16 10.97c-.593.28-.62 1.162-.18 1.666C8.89 13.98 10.02 15.11 11.364 16c.504.44 1.386.413 1.666-.18l1.584-2.064a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Planifier
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 transition-colors ${
              isScrolled ? 'text-white' : 'text-navy'
            }`}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ) : (
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'max-h-[600px] pb-6' : 'max-h-0'
        }`}>
          <nav className="flex flex-col space-y-4 pt-4 border-t border-white/10">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-left text-base font-medium transition-colors hover:opacity-70 ${
                  isScrolled ? 'text-white' : 'text-navy'
                }`}
                style={{ fontFamily: "var(--font-body)" }}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('newsletter')}
              className="bg-teal text-white px-6 py-3 rounded-full text-base font-medium hover:bg-teal/90 transition-colors w-full mt-4"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <svg className="w-4 h-4 inline mr-2" viewBox="0 0 24 24" fill="none">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21L8.16 10.97c-.593.28-.62 1.162-.18 1.666C8.89 13.98 10.02 15.11 11.364 16c.504.44 1.386.413 1.666-.18l1.584-2.064a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Planifier Votre Séjour
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}