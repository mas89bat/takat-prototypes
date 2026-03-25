import TakatStrip from "./TakatStrip";

export default function Footer() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-navy text-white">
      {/* Wave divider */}
      <div className="relative">
        <svg
          className="w-full h-12 text-navy"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div>
            <div className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
              Abers Tourisme
            </div>
            <p className="text-white/70 mb-6" style={{ fontFamily: "var(--font-body)" }}>
              Découvrez les paysages incomparables du Pays des Abers, entre phares légendaires et nature sauvage de la côte bretonne.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/aberstourisme/"
                className="text-white/70 hover:text-white transition-colors duration-200"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/paysdesabers/"
                className="text-white/70 hover:text-white transition-colors duration-200"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323C6.001 8.198 7.152 7.708 8.449 7.708s2.448.49 3.323 1.416c.876.925 1.366 2.076 1.366 3.373s-.49 2.448-1.366 3.323c-.925.925-2.026 1.168-3.323 1.168zm7.718 0c-1.297 0-2.448-.49-3.323-1.297-.876-.895-1.366-2.046-1.366-3.343s.49-2.448 1.366-3.323C13.719 8.198 14.87 7.708 16.167 7.708s2.448.49 3.323 1.416c.876.925 1.366 2.076 1.366 3.373s-.49 2.448-1.366 3.323c-.925.925-2.026 1.168-3.323 1.168z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ fontFamily: "var(--font-display)" }}>
              Navigation
            </h3>
            <ul className="space-y-3" style={{ fontFamily: "var(--font-body)" }}>
              <li>
                <button
                  onClick={() => scrollToSection("hero")}
                  className="text-white/70 hover:text-white transition-colors duration-200"
                >
                  Accueil
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("decouvrir")}
                  className="text-white/70 hover:text-white transition-colors duration-200"
                >
                  Découvrir
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("activites")}
                  className="text-white/70 hover:text-white transition-colors duration-200"
                >
                  Activités
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("galerie")}
                  className="text-white/70 hover:text-white transition-colors duration-200"
                >
                  Galerie
                </button>
              </li>
            </ul>
          </div>

          {/* Practical Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ fontFamily: "var(--font-display)" }}>
              Infos Pratiques
            </h3>
            <ul className="space-y-3 text-white/70" style={{ fontFamily: "var(--font-body)" }}>
              <li className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Ouvert toute l'année</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Pays des Abers, Finistère</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Activités tout niveau</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Accessible PMR</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ fontFamily: "var(--font-display)" }}>
              Contact
            </h3>
            <ul className="space-y-3 text-white/70" style={{ fontFamily: "var(--font-body)" }}>
              <li className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+33298040531" className="hover:text-white transition-colors duration-200">
                  +33 2 98 04 05 31
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@abers-tourisme.com" className="hover:text-white transition-colors duration-200">
                  info@abers-tourisme.com
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <svg className="w-4 h-4 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>
                  Office de Tourisme<br />
                  Pays des Abers<br />
                  29870 Lannilis
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/70 text-sm" style={{ fontFamily: "var(--font-body)" }}>
              © 2025 Abers Tourisme. Tous droits réservés.
            </p>
            <div className="flex space-x-6 text-sm" style={{ fontFamily: "var(--font-body)" }}>
              <a href="#" className="text-white/70 hover:text-white transition-colors duration-200">
                Mentions légales
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors duration-200">
                Politique de confidentialité
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors duration-200">
                Plan du site
              </a>
            </div>
          </div>
        </div>
      </div>

      <TakatStrip whatsappNumber="+33298040531" calendlyUrl="https://www.abers-tourisme.com" />
    </footer>
  );
}