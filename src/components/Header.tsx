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

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'Accueil', id: 'hero' },
    { label: 'Découvrir', id: 'decouvrir' },
    { label: 'Expériences', id: 'experiences' },
    { label: 'Galerie', id: 'galerie' },
    { label: 'Contact', id: 'newsletter' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-navy/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center" style={{ fontFamily: 'var(--font-display)' }}>
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-2xl font-bold text-white hover:text-copper transition-colors duration-200"
            >
              Abers Tourisme
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" style={{ fontFamily: 'var(--font-body)' }}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-white hover:text-copper transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('newsletter')}
              className="bg-teal hover:bg-teal/90 text-white px-6 py-2 rounded-full font-medium transition-colors duration-200"
            >
              <svg className="w-4 h-4 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white hover:text-copper transition-colors duration-200"
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

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'max-h-[600px]' : 'max-h-0'
        }`}>
          <nav className="pb-4" style={{ fontFamily: 'var(--font-body)' }}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-3 text-white hover:text-copper transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('newsletter')}
              className="mt-4 w-full bg-teal hover:bg-teal/90 text-white px-6 py-3 rounded-full font-medium transition-colors duration-200"
            >
              Contact
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}