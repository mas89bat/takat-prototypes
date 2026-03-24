import TakatStrip from "@/components/TakatStrip";

function Footer() {
  return (
    <>
      {/* Wave Divider */}
      <div className="relative">
        <svg viewBox="0 0 1440 60" className="w-full block">
          <path d="M0,0 L1440,0 L1440,30 C1200,60 960,0 720,30 C480,60 240,0 0,30 Z" className="fill-background" />
        </svg>
      </div>

      <footer className="bg-navy text-white pt-16 pb-8">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Column */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-teal flex items-center justify-center text-white font-bold text-lg" style={{ fontFamily: "var(--font-display)" }}>
                  A
                </div>
                <span className="text-xl font-semibold text-white" style={{ fontFamily: "var(--font-display)" }}>
                  Abers Tourisme
                </span>
              </div>
              <p className="text-white/70 mb-6 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                Votre guide authentique pour découvrir les trésors du Pays des Abers, 
                entre phares majestueux et paysages sauvages de Bretagne.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://www.facebook.com/aberstourisme/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-teal/80 transition-colors flex items-center justify-center"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.instagram.com/paysdesabers/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-teal/80 transition-colors flex items-center justify-center"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.73-3.016-1.789C4.785 14.24 4.785 12.999 5.433 12.04c.648-.959 1.799-1.789 3.016-1.789 1.297 0 2.448.73 3.016 1.789.648.959.648 2.2 0 3.159-.568 1.059-1.719 1.789-3.016 1.789zm3.568 0c-1.297 0-2.448-.73-3.016-1.789-.648-.959-.648-2.2 0-3.159.568-1.059 1.719-1.789 3.016-1.789 1.297 0 2.448.73 3.016 1.789.648.959.648 2.2 0 3.159-.568 1.059-1.719 1.789-3.016 1.789zm3.568 0c-1.297 0-2.448-.73-3.016-1.789-.648-.959-.648-2.2 0-3.159.568-1.059 1.719-1.789 3.016-1.789 1.297 0 2.448.73 3.016 1.789.648.959.648 2.2 0 3.159-.568 1.059-1.719 1.789-3.016 1.789z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.abers-tourisme.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-teal/80 transition-colors flex items-center justify-center"
                  aria-label="Site web"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6" style={{ fontFamily: "var(--font-display)" }}>
                Liens Rapides
              </h3>
              <ul className="space-y-3">
                <li>
                  <button onClick={() => document.getElementById('decouvrir')?.scrollIntoView({ behavior: 'smooth' })} className="text-white/70 hover:text-teal transition-colors duration-300" style={{ fontFamily: "var(--font-body)" }}>
                    Découvrir les Abers
                  </button>
                </li>
                <li>
                  <button onClick={() => document.getElementById('phares')?.scrollIntoView({ behavior: 'smooth' })} className="text-white/70 hover:text-teal transition-colors duration-300" style={{ fontFamily: "var(--font-body)" }}>
                    Route des Phares
                  </button>
                </li>
                <li>
                  <button onClick={() => document.getElementById('experiences')?.scrollIntoView({ behavior: 'smooth' })} className="text-white/70 hover:text-teal transition-colors duration-300" style={{ fontFamily: "var(--font-body)" }}>
                    Activités
                  </button>
                </li>
                <li>
                  <button onClick={() => document.getElementById('sejour')?.scrollIntoView({ behavior: 'smooth' })} className="text-white/70 hover:text-teal transition-colors duration-300" style={{ fontFamily: "var(--font-body)" }}>
                    Hébergements
                  </button>
                </li>
                <li>
                  <button onClick={() => document.getElementById('agenda')?.scrollIntoView({ behavior: 'smooth' })} className="text-white/70 hover:text-teal transition-colors duration-300" style={{ fontFamily: "var(--font-body)" }}>
                    Agenda
                  </button>
                </li>
              </ul>
            </div>

            {/* Practical Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6" style={{ fontFamily: "var(--font-display)" }}>
                Informations Pratiques
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-white/70 hover:text-teal transition-colors duration-300" style={{ fontFamily: "var(--font-body)" }}>
                    Météo et Marées
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-teal transition-colors duration-300" style={{ fontFamily: "var(--font-body)" }}>
                    Transports
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-teal transition-colors duration-300" style={{ fontFamily: "var(--font-body)" }}>
                    Sécurité en Mer
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-teal transition-colors duration-300" style={{ fontFamily: "var(--font-body)" }}>
                    Accessibilité
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-teal transition-colors duration-300" style={{ fontFamily: "var(--font-body)" }}>
                    Mentions Légales
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6" style={{ fontFamily: "var(--font-display)" }}>
                Contact
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3 text-white/70">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  <div style={{ fontFamily: "var(--font-body)" }}>
                    <div>Office de Tourisme</div>
                    <div>29870 Lannilis</div>
                    <div>Pays des Abers</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-white/70">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  <div style={{ fontFamily: "var(--font-body)" }}>
                    <div>+33 (0)2 98 04 05 43</div>
                    <div>Accueil téléphonique</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-white/70">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  <div style={{ fontFamily: "var(--font-body)" }}>
                    <div>info@abers-tourisme.com</div>
                    <div>Réponse sous 24h</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-white/70">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.2,16.2L11,13V7H12.5V12.2L17,14.9L16.2,16.2Z" />
                  </svg>
                  <div style={{ fontFamily: "var(--font-body)" }}>
                    <div>Lun - Ven : 9h - 18h</div>
                    <div>Sam - Dim : 10h - 17h</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-white/60 text-sm" style={{ fontFamily: "var(--font-body)" }}>
                © 2024 Abers Tourisme. Tous droits réservés.
              </p>
              <div className="flex flex-wrap gap-6">
                <a href="#" className="text-white/60 hover:text-white text-sm transition-colors duration-300" style={{ fontFamily: "var(--font-body)" }}>
                  Politique de confidentialité
                </a>
                <a href="#" className="text-white/60 hover:text-white text-sm transition-colors duration-300" style={{ fontFamily: "var(--font-body)" }}>
                  Mentions légales
                </a>
                <a href="#" className="text-white/60 hover:text-white text-sm transition-colors duration-300" style={{ fontFamily: "var(--font-body)" }}>
                  CGU
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Takat Strip */}
        <TakatStrip />
      </footer>
    </>
  );
}

export default Footer;