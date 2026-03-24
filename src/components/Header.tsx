import { useState, useEffect } from "react";

interface NavItem {
  label: string;
  id: string;
}

const navItems: NavItem[] = [
  { label: "Découvrir", id: "discover" },
  { label: "Restaurants", id: "stay" },
  { label: "Activités", id: "experiences" },
  { label: "Blog", id: "agenda" }
];

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
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-navy/95 backdrop-blur-md shadow-lg" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
              Abers Tourisme
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="group relative text-white/90 hover:text-white transition-colors duration-200 px-3 py-2" style={{ fontFamily: "var(--font-body)" }}
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-teal group-hover:w-3/4 transition-all duration-300" />
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection("newsletter")}
              className="bg-teal hover:bg-teal/80 rounded-full px-5 py-2.5 text-white font-semibold transition-colors duration-200" style={{ fontFamily: "var(--font-body)" }}
            >
              Planifier Votre Séjour
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ${
          isMobileMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-navy/95 backdrop-blur-md rounded-lg mt-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-3 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-md transition-colors duration-200" style={{ fontFamily: "var(--font-body)" }}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("newsletter")}
              className="w-full mt-4 bg-teal hover:bg-teal/80 rounded-full px-5 py-2.5 text-white font-semibold transition-colors duration-200" style={{ fontFamily: "var(--font-body)" }}
            >
              Planifier Votre Séjour
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}