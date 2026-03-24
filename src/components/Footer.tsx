import TakatStrip from "@/components/TakatStrip";

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

export default function Footer() {
  return (
    <footer id="footer" className="relative bg-navy text-white">
       <div className="relative">
            <svg viewBox="0 0 1440 60" className="w-full block">
                <path d="M0,0 L1440,0 L1440,30 C1200,60 960,0 720,30 C480,60 240,0 0,30 Z" className="fill-[var(--color-background)]" />
            </svg>
        </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Brand */}
          <div>
             <a href="#" className="text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>
              Abers Tourisme
            </a>
            <p className="mt-4 text-white/70 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
              Votre portail pour découvrir les trésors du Pays des Abers. Restaurants, hébergements et expériences inoubliables en Bretagne.
            </p>
            <div className="flex space-x-3 mt-6">
              <a href="https://www.facebook.com/aberstourisme/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-teal/80 transition-colors flex items-center justify-center">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
              </a>
              <a href="https://www.instagram.com/paysdesabers/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-teal/80 transition-colors flex items-center justify-center">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.05 2.525c.636-.247 1.363-.416 2.427-.465C9.53 2.013 9.884 2 12.315 2zm-1.04 2.54a.64.64 0 100 1.28.64.64 0 000-1.28zm-3.149 1.442a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zm5.12 3.75a1.375 1.375 0 11-2.75 0 1.375 1.375 0 012.75 0z" clipRule="evenodd" /></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white" style={{ fontFamily: 'var(--font-display)' }}>Navigation</h3>
            <ul className="mt-4 space-y-3">
              <li><a href="#" onClick={(e) => {e.preventDefault(); scrollToSection('hero')}} className="text-white/70 hover:text-teal transition-colors">Accueil</a></li>
              <li><a href="#" onClick={(e) => {e.preventDefault(); scrollToSection('discover')}} className="text-white/70 hover:text-teal transition-colors">Découvrir</a></li>
              <li><a href="#" onClick={(e) => {e.preventDefault(); scrollToSection('experiences')}} className="text-white/70 hover:text-teal transition-colors">Restaurants</a></li>
              <li><a href="#" onClick={(e) => {e.preventDefault(); scrollToSection('stay')}} className="text-white/70 hover:text-teal transition-colors">Hébergements</a></li>
            </ul>
          </div>

          {/* Column 3: Practical Links */}
          <div>
            <h3 className="text-lg font-semibold text-white" style={{ fontFamily: 'var(--font-display)' }}>Ressources</h3>
            <ul className="mt-4 space-y-3">
              <li><a href="#" className="text-white/70 hover:text-teal transition-colors">Blog</a></li>
              <li><a href="#" className="text-white/70 hover:text-teal transition-colors">Mentions Légales</a></li>
              <li><a href="#" className="text-white/70 hover:text-teal transition-colors">Presse</a></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white" style={{ fontFamily: 'var(--font-display)' }}>Contact</h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start gap-3 text-white/70">
                <svg className="w-5 h-5 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span>Office de Tourisme, 29870 Lannilis</span>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <svg className="w-5 h-5 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <a href="tel:+33298040543" className="hover:text-teal transition-colors">02 98 04 05 43</a>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <svg className="w-5 h-5 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <a href="mailto:contact@abers-tourisme.com" className="hover:text-teal transition-colors">contact@abers-tourisme.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-white/50">&copy; ${new Date().getFullYear()} Abers Tourisme. Tous droits réservés.</p>
          <div className="mt-4 md:mt-0">
             <a href="#" className="text-white/50 hover:text-white transition-colors">Politique de Confidentialité</a>
          </div>
        </div>
        
      </div>
      <TakatStrip />
    </footer>
  );
}