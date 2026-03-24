import { useState, useEffect } from 'react';

const Logo = () => (
  <svg className="w-auto h-8 text-white" viewBox="0 0 200 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 40C4.477 40 0 35.523 0 30V10C0 4.477 4.477 0 10 0h180c5.523 0 10 4.477 10 10v20c0 5.523-4.477 10-10 10H10z" fill="none"/>
    <text x="10" y="28" style={{fontFamily: 'var(--font-display)'}} fontSize="24" fontWeight="bold">Abers</text>
    <text x="85" y="28" style={{fontFamily: 'var(--font-body)'}} fontSize="24" fontWeight="300">Tourisme</text>
  </svg>
);

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Découvrir', id: 'decouvrir' },
    { label: 'Expériences', id: 'experiences' },
    { label: 'Séjourner', id: 'sejourner' },
    { label: 'Agenda', id: 'agenda' },
  ];

  const handleScrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-navy/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <img src="https://www.abers-tourisme.com/assets/themes/abers/icons/marker.svg" alt="Abers Tourisme Logo" className="h-8 w-8 brightness-0 invert" />
           <span className="text-white text-2xl font-bold" style={{fontFamily: 'var(--font-display)'}}>Abers Tourisme</span>
        </a>
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button key={link.id} onClick={() => handleScrollTo(link.id)} className="text-white/90 hover:text-white relative group text-lg transition-colors">
              {link.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-teal group-hover:w-3/4 transition-all duration-300" />
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-4">
            <a href="#" className="hidden lg:block bg-teal hover:bg-teal/80 rounded-full px-5 py-2.5 text-white font-semibold transition-colors duration-300">
                Planifier
            </a>
            <button
                className="lg:hidden text-white z-50" 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu">
                 {isMenuOpen ? (
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                 ) : (
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                 )}
            </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-navy/95 backdrop-blur-md overflow-hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-[600px]' : 'max-h-0'}`}>
         <div className="flex flex-col items-center gap-6 py-8">
            {navLinks.map((link) => (
                <button key={link.id} onClick={() => handleScrollTo(link.id)} className="text-white/90 hover:text-white text-xl transition-colors">
                    {link.label}
                </button>
            ))}
            <a href="#" className="bg-teal hover:bg-teal/80 rounded-full px-8 py-3 text-white font-semibold transition-colors duration-300 mt-4">
                Planifier votre séjour
            </a>
         </div>
      </div>
    </header>
  );
}