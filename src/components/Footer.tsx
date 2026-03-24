import TakatStrip from "./TakatStrip";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative">
      {/* Wave Divider */}
      <div className="w-full overflow-hidden">
        <svg
          className="relative block w-full h-12 text-navy"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="bg-navy text-white pt-16 pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Column */}
            <div className="col-span-1">
              <div 
                className="text-2xl font-bold mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Abers Tourisme
              </div>
              <p className="text-white/70 mb-6 leading-relaxed">
                Découvrez le Pays des Abers, entre phares légendaires, sentiers côtiers et gastronomie authentique. Votre porte d'entrée vers la Bretagne sauvage.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/aberstourisme/"
                  className="text-white/70 hover:text-white transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/paysdesabers/"
                  className="text-white/70 hover:text-white transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-span-1">
              <h3 
                className="text-lg font-semibold mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Navigation
              </h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection('hero')}
                    className="text-white/70 hover:text-white transition-colors duration-200"
                  >
                    Accueil
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('decouvrir')}
                    className="text-white/70 hover:text-white transition-colors duration-200"
                  >
                    Découvrir les Abers
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('experiences')}
                    className="text-white/70 hover:text-white transition-colors duration-200"
                  >
                    Nos Expériences
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('galerie')}
                    className="text-white/70 hover:text-white transition-colors duration-200"
                  >
                    Galerie Photos
                  </button>
                </li>
              </ul>
            </div>

            {/* Practical Info */}
            <div className="col-span-1">
              <h3 
                className="text-lg font-semibold mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Infos Pratiques
              </h3>
              <ul className="space-y-2 text-white/70">
                <li className="flex items-start">
                  <svg className="w-4 h-4 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Office ouvert 7j/7
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Parking gratuit
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>
                  Accessible PMR
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                  </svg>
                  Wi-Fi gratuit
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="col-span-1">
              <h3 
                className="text-lg font-semibold mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Contact
              </h3>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="tel:+33298040951"
                    className="flex items-center text-white/70 hover:text-white transition-colors duration-200"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    02 98 04 09 51
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:info@abers-tourisme.com"
                    className="flex items-center text-white/70 hover:text-white transition-colors duration-200"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    info@abers-tourisme.com
                  </a>
                </li>
                <li className="flex items-start text-white/70">
                  <svg className="w-4 h-4 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    Office de Tourisme<br />
                    Pays des Abers<br />
                    29880 Plouguerneau
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-white/70 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Abers Tourisme. Tous droits réservés.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white/70 hover:text-white transition-colors duration-200">
                Mentions légales
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors duration-200">
                Politique de confidentialité
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors duration-200">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <TakatStrip 
        whatsappNumber="+33298040951" 
        calendlyUrl="https://calendly.com/abers-tourisme" 
      />
    </footer>
  );
}