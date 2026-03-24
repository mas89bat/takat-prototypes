import TakatStrip from "@/components/TakatStrip";

const quickLinks = [
  { label: "Découvrir", href: "#discover" },
  { label: "Route des Phares", href: "#lighthouse" },
  { label: "Activités", href: "#experiences" },
  { label: "Hébergements", href: "#stay" },
  { label: "Événements", href: "#agenda" }
];

const practicalLinks = [
  { label: "Planifier votre séjour", href: "#newsletter" },
  { label: "Offices de tourisme", href: "#contact" },
  { label: "Conditions météo", href: "#weather" },
  { label: "Transports", href: "#transport" },
  { label: "Mentions légales", href: "#legal" }
];

const contactInfo = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    text: "Office de Tourisme\nPays des Abers\n29870 Lannilis"
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    text: "+33 (0)2 98 04 05 43"
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    text: "contact@abers-tourisme.com"
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    text: "Ouvert toute l'année\nLun-Ven: 9h-18h\nSam: 9h-12h"
  }
];

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative">
      {/* Wave Divider */}
      <div className="relative">
        <svg viewBox="0 0 1440 60" className="w-full block">
          <path d="M0,0 L1440,0 L1440,30 C1200,60 960,0 720,30 C480,60 240,0 0,30 Z" className="fill-background" />
        </svg>
      </div>

      <div className="bg-navy text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-display)" }}>
                Abers Tourisme
              </h3>
              <p className="text-white/70 mb-6 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                Découvrez la magie du Pays des Abers, ses phares emblématiques, ses paysages sauvages 
                et ses expériences authentiques au cœur de la Bretagne.
              </p>
              
              {/* Social Media Icons */}
              <div className="flex space-x-3">
                <a
                  href="https://www.facebook.com/aberstourisme/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-teal/80 transition-colors flex items-center justify-center text-white"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/paysdesabers/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-teal/80 transition-colors flex items-center justify-center text-white"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.070-4.85.070-3.204 0-3.584-.012-4.849-.070-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://www.abers-tourisme.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-teal/80 transition-colors flex items-center justify-center text-white"
                  aria-label="Site Web"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4" style={{ fontFamily: "var(--font-display)" }}>
                Liens Rapides
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-white/70 hover:text-teal transition-colors duration-200" style={{ fontFamily: "var(--font-body)" }}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Practical Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4" style={{ fontFamily: "var(--font-display)" }}>
                Infos Pratiques
              </h4>
              <ul className="space-y-2">
                {practicalLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-white/70 hover:text-teal transition-colors duration-200" style={{ fontFamily: "var(--font-body)" }}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4" style={{ fontFamily: "var(--font-display)" }}>
                Contact
              </h4>
              <ul className="space-y-4">
                {contactInfo.map((info, index) => (
                  <li key={index} className="flex items-start gap-3 text-white/70">
                    <div className="mt-1 flex-shrink-0">
                      {info.icon}
                    </div>
                    <div className="text-sm leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                      {info.text.split('\n').map((line, i) => (
                        <div key={i}>{line}</div>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-white/60 text-sm" style={{ fontFamily: "var(--font-body)" }}>
                © 2024 Abers Tourisme. Tous droits réservés.
              </p>
              <div className="flex items-center gap-6 text-sm">
                <button className="text-white/60 hover:text-white transition-colors" style={{ fontFamily: "var(--font-body)" }}>
                  Politique de confidentialité
                </button>
                <button className="text-white/60 hover:text-white transition-colors" style={{ fontFamily: "var(--font-body)" }}>
                  Cookies
                </button>
                <button className="text-white/60 hover:text-white transition-colors" style={{ fontFamily: "var(--font-body)" }}>
                  Mentions légales
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Takat Strip */}
        <TakatStrip />
      </div>
    </footer>
  );
}