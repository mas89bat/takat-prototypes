import { useState, useEffect } from 'react';

const navLinks = [
  { text: 'Découvrir', sectionId: 'discover-section' },
  { text: 'Activités', sectionId: 'experiences-section' },
  { text: 'Séjourner', sectionId: 'stay-section' },
  { text: 'Agenda', sectionId: 'agenda-section' },
];

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

  const handleNavClick = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-navy/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>
          Abers Tourisme
        </a>
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.text}
              href={`#${link.sectionId}`}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.sectionId); }}
              className="relative group text-white hover:text-white/80 transition-colors duration-300 pb-1"
            >
              {link.text}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-teal group-hover:w-3/4 transition-all duration-300" />
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
            <a href="#" className="hidden sm:block bg-teal hover:bg-teal/80 text-white rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-300" style={{ fontFamily: 'var(--font-body)'}}>
                Planifier Votre Séjour
            </a>
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden text-white z-50 p-2" 
                aria-label="Toggle menu">
                {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
                )}
            </button>
        </div>
      </div>
      
      {/* Mobile Menu Drawer */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-navy/95 backdrop-blur-md overflow-hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-[600px]' : 'max-h-0'}`}>
          <div className="flex flex-col items-center gap-6 py-8">
            {navLinks.map((link) => (
              <a
                key={link.text}
                href={`#${link.sectionId}`}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.sectionId); }}
                className="text-white text-lg font-semibold"
              >
                {link.text}
              </a>
            ))}
             <a href="#" className="mt-4 bg-teal hover:bg-teal/80 text-white rounded-full px-8 py-3 text-base font-semibold transition-colors duration-300">
                Planifier Votre Séjour
            </a>
          </div>
      </div>
    </header>
  );
}