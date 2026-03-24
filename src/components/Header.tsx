import { useState, useEffect } from 'react';

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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { text: 'Accueil', id: 'hero' },
    { text: 'Découvrir', id: 'decouvrir' },
    { text: 'Expériences', id: 'experiences' },
    { text: 'Galerie', id: 'galerie' },
    { text: 'Contact', id: 'newsletter' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-navy/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div 
            className="flex-shrink-0 cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            <div 
              className="text-xl lg:text-2xl font-bold text-white"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Abers Tourisme
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-white hover:text-copper transition-colors duration-200 font-medium"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {link.text}
              </button>
            ))}
          </nav>

          {/* Phone CTA & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <a
              href="tel:+33298040951"
              className="hidden sm:inline-flex bg-teal text-white px-6 py-2 rounded-full hover:bg-teal/90 transition-colors duration-200 font-medium"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Nous contacter
            </a>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-white hover:text-copper transition-colors duration-200"
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
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden bg-navy/95 backdrop-blur-md border-t border-white/10 overflow-hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'max-h-[600px]' : 'max-h-0'
        }`}
      >
        <nav className="px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="block w-full text-left text-white hover:text-copper transition-colors duration-200 py-2 font-medium"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {link.text}
            </button>
          ))}
          <a
            href="tel:+33298040951"
            className="flex items-center text-white hover:text-copper transition-colors duration-200 py-2 font-medium"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Nous contacter
          </a>
        </nav>
      </div>
    </header>
  );
}