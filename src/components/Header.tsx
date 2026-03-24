import { useState, useEffect } from 'react';

const navLinks = [
  { id: 'discover', label: 'Découvrir' },
  { id: 'experiences', label: 'Expériences' },
  { id: 'stay', label: 'Séjourner' },
  { id: 'agenda', label: 'Agenda' },
  { id: 'gallery', label: 'Galerie' },
];

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-navy/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>
            Abers Tourisme
          </a>
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="relative group text-white hover:text-teal transition-colors duration-300"
              >
                <span style={{ fontFamily: 'var(--font-body)' }}>{link.label}</span>
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-teal group-hover:w-3/4 transition-all duration-300" />
              </button>
            ))}
          </nav>
          <div className="hidden lg:flex items-center">
             <a href="tel:+33298040543" className="bg-teal hover:bg-teal/80 rounded-full px-5 py-2.5 text-white font-semibold transition-colors duration-300" style={{ fontFamily: 'var(--font-body)' }}>
                Contact
             </a>
          </div>
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`lg:hidden bg-navy/95 backdrop-blur-md overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-[600px]' : 'max-h-0'}`}>
        <div className="flex flex-col px-4 pt-2 pb-8 space-y-4">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => { scrollToSection(link.id); setIsOpen(false); }}
              className="text-white text-left py-2 text-lg"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {link.label}
            </button>
          ))}
          <a href="tel:+33298040543" className="w-full text-center bg-teal hover:bg-teal/80 rounded-full mt-4 px-5 py-3 text-white font-semibold transition-colors duration-300" style={{ fontFamily: 'var(--font-body)' }}>
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}
