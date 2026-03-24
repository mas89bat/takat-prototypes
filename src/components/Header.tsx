import { useState, useEffect } from 'react';

const navLinks = [
  { text: 'Découvrir', id: 'decouvrir' },
  { text: 'Expériences', id: 'experiences' },
  { text: 'Séjourner', id: 'sejourner' },
  { text: 'Agenda', id: 'agenda' },
];

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-navy/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }} onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            Abers Tourisme
          </a>

          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.id); }}
                className="relative group text-white/90 hover:text-white transition-colors duration-300 text-base"
              >
                {link.text}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-teal group-hover:w-3/4 transition-all duration-300" />
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center">
            <a href="#" className="bg-teal hover:bg-teal/80 rounded-full px-5 py-2.5 text-white font-semibold transition-colors duration-300 min-h-[44px] flex items-center">
              Planifier Votre Séjour
            </a>
          </div>

          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none min-h-[44px] min-w-[44px]">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden bg-navy/95 backdrop-blur-md overflow-hidden transition-all duration-500 ${isMenuOpen ? 'max-h-[600px]' : 'max-h-0'}`}>
        <nav className="flex flex-col px-4 pt-2 pb-8 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => { e.preventDefault(); scrollToSection(link.id); setIsMenuOpen(false); }}
              className="text-white/90 hover:text-teal py-2 text-lg text-center"
            >
              {link.text}
            </a>
          ))}
          <a href="#" className="bg-teal hover:bg-teal/80 rounded-full mt-4 mx-auto px-6 py-3 text-white font-semibold transition-colors duration-300">
            Planifier Votre Séjour
          </a>
        </nav>
      </div>
    </header>
  );
}
