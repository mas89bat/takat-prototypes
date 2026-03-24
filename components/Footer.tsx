import TakatStrip from "../components/TakatStrip";

const SocialIcon = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-teal/80 transition-colors flex items-center justify-center">
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="relative bg-navy text-white">
      <div className="relative">
        <svg viewBox="0 0 1440 60" className="w-full block">
          <path d="M0,0 L1440,0 L1440,30 C1200,60 960,0 720,30 C480,60 240,0 0,30 Z" className="fill-sand" />
        </svg>
      </div>
      <div className="bg-navy pt-16 pb-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Column 1: Brand */}
            <div className="space-y-4">
                <div className="flex items-center gap-2">
                    <img src="https://www.abers-tourisme.com/assets/themes/abers/icons/marker.svg" alt="Abers Tourisme Logo" className="h-8 w-8 brightness-0 invert" />
                    <span className="text-white text-2xl font-bold" style={{fontFamily: 'var(--font-display)'}}>Abers Tourisme</span>
                </div>
              <p className="text-white/70" style={{ fontFamily: 'var(--font-body)' }}>
                Découvrez la magie du Pays des Abers et de la Côte des Légendes. Une destination authentique au cœur du Finistère.
              </p>
              <div className="flex gap-3 pt-2">
                <SocialIcon href="#"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.494v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg></SocialIcon>
                <SocialIcon href="#"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.585-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.585-.012-4.85-.07c-3.25-.149-4.771-1.664-4.919-4.919-.058-1.265-.07-1.645-.07-4.85s.012-3.585.07-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.947s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"/></svg></SocialIcon>
                <SocialIcon href="#"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645l-4.5 2.25-4.5-2.25.003-.004 4.497 4.496 4.5-4.492zm-12.063.003l4.5 2.25-4.5 4.5v-6.75zm12.001 6.749l-4.5-4.5-4.503 4.5h9.003zm-12.004-6.75l4.5 4.5-4.5-2.25v-2.25z"/></svg></SocialIcon>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className="text-lg font-semibold uppercase tracking-wider" style={{ fontFamily: 'var(--font-display)' }}>Navigation</h3>
              <ul className="mt-4 space-y-3">
                <li><a href="#decouvrir" className="text-white/70 hover:text-teal transition-colors">Découvrir les Abers</a></li>
                <li><a href="#experiences" className="text-white/70 hover:text-teal transition-colors">Nos Expériences</a></li>
                <li><a href="#sejourner" className="text-white/70 hover:text-teal transition-colors">Hébergements</a></li>
                <li><a href="#agenda" className="text-white/70 hover:text-teal transition-colors">Agenda</a></li>
              </ul>
            </div>

            {/* Column 3: Practical Links */}
            <div>
              <h3 className="text-lg font-semibold uppercase tracking-wider" style={{ fontFamily: 'var(--font-display)' }}>Infos Pratiques</h3>
              <ul className="mt-4 space-y-3">
                <li><a href="#" className="text-white/70 hover:text-teal transition-colors">Venir dans les Abers</a></li>
                <li><a href="#" className="text-white/70 hover:text-teal transition-colors">Brochures & Plans</a></li>
                <li><a href="#" className="text-white/70 hover:text-teal transition-colors">FAQ</a></li>
                <li><a href="#" className="text-white/70 hover:text-teal transition-colors">Contactez-nous</a></li>
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div>
              <h3 className="text-lg font-semibold uppercase tracking-wider" style={{ fontFamily: 'var(--font-display)' }}>Contact</h3>
              <ul className="mt-4 space-y-4">
                <li className="flex items-start gap-3 text-white/70">
                  <svg className="w-5 h-5 mt-1 text-teal flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  <span>Office de Tourisme, Paluden, 29870 Lannilis</span>
                </li>
                <li className="flex items-start gap-3 text-white/70">
                  <svg className="w-5 h-5 mt-1 text-teal flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949v3.28a2 2 0 01-2 2h-1.034a12 12 0 01-11.45-11.45V5z" /></svg>
                  <span>02 98 04 05 43</span>
                </li>
                 <li className="flex items-start gap-3 text-white/70">
                  <svg className="w-5 h-5 mt-1 text-teal flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  <span>contact@abers-tourisme.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-white/50">
            <p>© {new Date().getFullYear()} Abers Tourisme. Tous droits réservés.</p>
            <div className="flex gap-4 mt-4 sm:mt-0">
              <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
              <a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a>
            </div>
          </div>
        </div>
        <TakatStrip />
      </div>
    </footer>
  );
}