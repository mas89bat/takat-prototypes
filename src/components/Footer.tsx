import TakatStrip from "./TakatStrip";

export default function Footer() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const quickLinks = [
    { label: "Accueil", id: "hero" },
    { label: "Découvrir", id: "decouvrir" },
    { label: "Patrimoine", id: "patrimoine" },
    { label: "Activités", id: "activites" },
    { label: "Galerie", id: "galerie" }
  ];

  return (
    <footer className="relative">
      {/* Wave Divider */}
      <div className="relative">
        <svg
          className="w-full h-12 md:h-16"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,200L1392,200C1344,200,1248,200,1152,200C1056,200,960,200,864,200C768,200,672,200,576,200C480,200,384,200,288,200C192,200,96,200,48,200L0,200Z"
            fill="var(--color-navy)"
          />
        </svg>
      </div>

      <div className="bg-navy text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Column */}
            <div className="space-y-6">
              <h3 
                className="text-xl font-bold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Abers Tourisme
              </h3>
              <p className="text-white/70 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                Découvrez la côte des légendes, ses phares mythiques et ses paysages sauvages. Un territoire d'exception vous attend en Bretagne.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/aberstourisme/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/paysdesabers/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.324-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.324C5.901 8.196 7.052 7.706 8.349 7.706s2.448.49 3.324 1.297c.897.876 1.387 2.027 1.387 3.324s-.49 2.448-1.297 3.324c-.876.897-2.027 1.387-3.324 1.387zm7.718 0c-1.297 0-2.448-.49-3.324-1.297-.897-.876-1.387-2.027-1.387-3.324s.49-2.448 1.297-3.324c.876-.897 2.027-1.387 3.324-1.387s2.448.49 3.324 1.297c.897.876 1.387 2.027 1.387 3.324s-.49 2.448-1.297 3.324c-.876.897-2.027 1.387-3.324 1.387z"/>
                  </svg>
                </a>
                <a
                  href="https://www.abers-tourisme.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors"
                  aria-label="Site web"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6" style={{ fontFamily: "var(--font-display)" }}>Liens Rapides</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-white/70 hover:text-white transition-colors text-left"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Practical Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6" style={{ fontFamily: "var(--font-display)" }}>Informations Pratiques</h4>
              <ul className="space-y-3 text-white/70" style={{ fontFamily: "var(--font-body)" }}>
                <li className="flex items-start space-x-2">
                  <svg className="w-4 h-4 mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <div>
                    <div>Ouvert toute l'année</div>
                    <div className="text-sm">9h-18h en saison</div>
                  </div>
                </li>
                <li className="flex items-start space-x-2">
                  <svg className="w-4 h-4 mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                    <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Parking gratuit disponible</span>
                </li>
                <li className="flex items-start space-x-2">
                  <svg className="w-4 h-4 mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                    <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2m0-2v6h8V2m-4 6h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Accès PMR</span>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-6" style={{ fontFamily: "var(--font-display)" }}>Contact</h4>
              <ul className="space-y-3 text-white/70" style={{ fontFamily: "var(--font-body)" }}>
                <li className="flex items-start space-x-3">
                  <svg className="w-4 h-4 mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <div>
                    <div>Office de Tourisme</div>
                    <div className="text-sm">Pays des Abers, Bretagne</div>
                  </div>
                </li>
                <li className="flex items-center space-x-3">
                  <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21L8.16 10.97c-.593.28-.62 1.162-.18 1.666C8.89 13.98 10.02 15.11 11.364 16c.504.44 1.386.413 1.666-.18l1.584-2.064a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <a href="tel:+33298046128" className="hover:text-white transition-colors">
                    02 98 04 61 28
                  </a>
                </li>
                <li className="flex items-center space-x-3">
                  <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2"/>
                    <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <a href="mailto:contact@abers-tourisme.com" className="hover:text-white transition-colors">
                    contact@abers-tourisme.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-white/10 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-white/70 text-sm" style={{ fontFamily: "var(--font-body)" }}>
                © 2024 Abers Tourisme. Tous droits réservés.
              </p>
              <div className="flex space-x-6 text-sm">
                <button 
                  onClick={() => scrollToSection('newsletter')}
                  className="text-white/70 hover:text-white transition-colors"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Mentions légales
                </button>
                <button 
                  onClick={() => scrollToSection('newsletter')}
                  className="text-white/70 hover:text-white transition-colors"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Confidentialité
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <TakatStrip whatsappNumber="+33298046128" calendlyUrl="https://calendly.com/abers-tourisme" />
    </footer>
  );
}