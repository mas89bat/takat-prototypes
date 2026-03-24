import TakatStrip from "@/components/TakatStrip";

const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/aberstourisme/',
    icon: <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/paysdesabers/',
    icon: <><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></>,
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-navy text-white">
       <div className="relative">
        <svg viewBox="0 0 1440 60" className="w-full block">
          <path d="M0,0 L1440,0 L1440,30 C1200,60 960,0 720,30 C480,60 240,0 0,30 Z" className="fill-background" />
        </svg>
      </div>
      <div className="bg-navy pt-16 pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Column 1: Brand */}
            <div className="md:col-span-2 lg:col-span-1">
              <a href="#" className="text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>
                Abers Tourisme
              </a>
              <p className="mt-4 text-white/70" style={{ fontFamily: 'var(--font-body)' }}>
                Découvrez la Côte des Légendes, un territoire sauvage et préservé au cœur du Finistère en Bretagne.
              </p>
              <div className="flex items-center space-x-4 mt-6">
                {socialLinks.map((link) => (
                  <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-teal/80 transition-colors flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">{link.icon}</svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className="text-lg font-semibold tracking-wider" style={{ fontFamily: 'var(--font-display)' }}>Navigation</h3>
              <ul className="mt-4 space-y-3">
                <li><a href="#decouvrir" className="text-white/70 hover:text-teal transition-colors">Découvrir</a></li>
                <li><a href="#experiences" className="text-white/70 hover:text-teal transition-colors">Expériences</a></li>
                <li><a href="#sejourner" className="text-white/70 hover:text-teal transition-colors">Séjourner</a></li>
                <li><a href="#agenda" className="text-white/70 hover:text-teal transition-colors">Agenda</a></li>
              </ul>
            </div>

            {/* Column 3: Practical Links */}
            <div>
              <h3 className="text-lg font-semibold tracking-wider" style={{ fontFamily: 'var(--font-display)' }}>Pratique</h3>
              <ul className="mt-4 space-y-3">
                <li><a href="#" className="text-white/70 hover:text-teal transition-colors">FAQ</a></li>
                <li><a href="#" className="text-white/70 hover:text-teal transition-colors">Presse</a></li>
                <li><a href="#" className="text-white/70 hover:text-teal transition-colors">Mentions Légales</a></li>
                <li><a href="#" className="text-white/70 hover:text-teal transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div>
              <h3 className="text-lg font-semibold tracking-wider" style={{ fontFamily: 'var(--font-display)' }}>Contact</h3>
              <ul className="mt-4 space-y-4">
                <li className="flex items-start gap-3 text-white/70">
                  <svg className="w-5 h-5 mt-1 flex-shrink-0 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  <span>Office de Tourisme, 29870 Plouguerneau</span>
                </li>
                <li className="flex items-start gap-3 text-white/70">
                  <svg className="w-5 h-5 mt-1 flex-shrink-0 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  <span>+33 2 98 04 70 93</span>
                </li>
                <li className="flex items-start gap-3 text-white/70">
                  <svg className="w-5 h-5 mt-1 flex-shrink-0 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  <span>contact@abers-tourisme.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/50">
            <p>&copy; {new Date().getFullYear()} Abers Tourisme. Tous droits réservés.</p>
            <TakatStrip />
          </div>
        </div>
      </div>
    </footer>
  );
}
