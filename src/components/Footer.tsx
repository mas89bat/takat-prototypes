import TakatStrip from "./TakatStrip";

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Wave Divider */}
      <div className="relative">
        <svg
          className="w-full h-12 md:h-16 fill-navy"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M0,60 C300,120 600,0 900,60 C1050,90 1150,30 1200,60 L1200,120 L0,120 Z" />
        </svg>
      </div>

      <footer id="contact" className="bg-navy text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Column */}
            <div className="space-y-6">
              <h3 
                className="text-2xl font-bold text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Abers Tourisme
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Découvrez les phares emblématiques, les paysages sauvages et les activités nautiques du Pays des Abers en Bretagne.
              </p>
              {/* Social Icons */}
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/aberstourisme/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors duration-200"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/paysdesabers/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors duration-200"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.611-3.197-1.559-.187-.237-.318-.5-.391-.789-.073-.289-.088-.594-.043-.898.089-.608.35-1.165.737-1.614.387-.45.884-.784 1.44-.969.556-.185 1.156-.22 1.74-.102.292.06.572.168.83.321.258.154.487.349.674.576.375.453.598 1.017.628 1.616.029.599-.123 1.198-.428 1.722-.305.524-.749.962-1.283 1.265-.534.304-1.148.431-1.707.431zm7.138 0c-1.297 0-2.448-.611-3.197-1.559-.187-.237-.318-.5-.391-.789-.073-.289-.088-.594-.043-.898.089-.608.35-1.165.737-1.614.387-.45.884-.784 1.44-.969.556-.185 1.156-.22 1.74-.102.292.06.572.168.83.321.258.154.487.349.674.576.375.453.598 1.017.628 1.616.029.599-.123 1.198-.428 1.722-.305.524-.749.962-1.283 1.265-.534.304-1.148.431-1.707.431z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 
                className="text-lg font-semibold text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Navigation
              </h4>
              <div className="space-y-3">
                <button
                  onClick={() => scrollToSection("hero")}
                  className="block text-white/70 hover:text-white transition-colors duration-200 text-sm"
                >
                  Accueil
                </button>
                <button
                  onClick={() => scrollToSection("decouvrir")}
                  className="block text-white/70 hover:text-white transition-colors duration-200 text-sm"
                >
                  Découvrir
                </button>
                <button
                  onClick={() => scrollToSection("experiences")}
                  className="block text-white/70 hover:text-white transition-colors duration-200 text-sm"
                >
                  Expériences
                </button>
                <button
                  onClick={() => scrollToSection("galerie")}
                  className="block text-white/70 hover:text-white transition-colors duration-200 text-sm"
                >
                  Galerie
                </button>
              </div>
            </div>

            {/* Practical Info */}
            <div className="space-y-6">
              <h4 
                className="text-lg font-semibold text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Informations Pratiques
              </h4>
              <div className="space-y-3 text-sm text-white/70">
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Ouvert toute l'année</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>Réservation conseillée</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Parking gratuit</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span>Accessible PMR</span>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-6">
              <h4 
                className="text-lg font-semibold text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Contact
              </h4>
              <div className="space-y-3 text-sm text-white/70">
                <div className="flex items-center space-x-3">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+33298040170" className="hover:text-white transition-colors duration-200">
                    02 98 04 01 70
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:info@abers-tourisme.com" className="hover:text-white transition-colors duration-200">
                    info@abers-tourisme.com
                  </a>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="leading-relaxed">
                    Office de Tourisme<br />
                    Pays des Abers<br />
                    29870 Plouguerneau
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-white/70 text-sm">
                © 2024 Abers Tourisme. Tous droits réservés.
              </p>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-white/70 hover:text-white transition-colors duration-200">
                  Mentions légales
                </a>
                <a href="#" className="text-white/70 hover:text-white transition-colors duration-200">
                  Politique de confidentialité
                </a>
                <a href="#" className="text-white/70 hover:text-white transition-colors duration-200">
                  CGV
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* TakatStrip */}
        <TakatStrip 
          whatsappNumber="+33298040170"
          calendlyUrl="https://calendly.com/abers-tourisme"
        />
      </footer>
    </>
  );
}