import TakatStrip from "@/components/TakatStrip";

const FacebookIcon = () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v7.028C18.343 21.128 22 16.991 22 12z" /></svg>;
const InstagramIcon = () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.058 1.644-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z" /></svg>;
const MapPinIcon = () => <svg className="w-5 h-5 mt-1 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const PhoneIcon = () => <svg className="w-5 h-5 mt-1 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>;
const MailIcon = () => <svg className="w-5 h-5 mt-1 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
        <div className="relative">
            <svg viewBox="0 0 1440 60" className="w-full block">
                <path d="M0,0 L1440,0 L1440,30 C1200,60 960,0 720,30 C480,60 240,0 0,30 Z" className="fill-background" />
            </svg>
        </div>
      <div className="container mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Brand */}
          <div>
            <a href="#" className="text-3xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>
              Abers Tourisme
            </a>
            <p className="mt-4 text-white/70" style={{fontFamily: 'var(--font-body)'}}>
              Découvrez la beauté sauvage et authentique du Pays des Abers, un joyau de la côte bretonne.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="https://www.facebook.com/aberstourisme/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-teal/80 transition-colors flex items-center justify-center"><FacebookIcon /></a>
              <a href="https://www.instagram.com/paysdesabers/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-teal/80 transition-colors flex items-center justify-center"><InstagramIcon /></a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white" style={{fontFamily: 'var(--font-display)'}}>Navigation</h3>
            <ul className="mt-4 space-y-3">
              <li><a href="#discover-section" className="text-white/70 hover:text-teal transition-colors">Découvrir</a></li>
              <li><a href="#experiences-section" className="text-white/70 hover:text-teal transition-colors">Activités</a></li>
              <li><a href="#stay-section" className="text-white/70 hover:text-teal transition-colors">Séjourner</a></li>
              <li><a href="#agenda-section" className="text-white/70 hover:text-teal transition-colors">Agenda</a></li>
            </ul>
          </div>

          {/* Column 3: Practical Links */}
          <div>
            <h3 className="text-lg font-semibold text-white" style={{fontFamily: 'var(--font-display)'}}>Pratique</h3>
            <ul className="mt-4 space-y-3">
              <li><a href="#" className="text-white/70 hover:text-teal transition-colors">Planifier votre séjour</a></li>
              <li><a href="#" className="text-white/70 hover:text-teal transition-colors">Contact</a></li>
              <li><a href="#" className="text-white/70 hover:text-teal transition-colors">Mentions Légales</a></li>
              <li><a href="#" className="text-white/70 hover:text-teal transition-colors">Presse</a></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white" style={{fontFamily: 'var(--font-display)'}}>Contactez-nous</h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start gap-3 text-white/70"><MapPinIcon /><span>Place de la Mairie<br/>29870 Lannilis, France</span></li>
              <li className="flex items-start gap-3 text-white/70"><PhoneIcon /><span>+33 2 98 04 05 43</span></li>
              <li className="flex items-start gap-3 text-white/70"><MailIcon /><span>contact@abers-tourisme.com</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/50">
          <p>&copy; {new Date().getFullYear()} Abers Tourisme. Tous droits réservés.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Conditions</a>
            <a href="#" className="hover:text-white">Confidentialité</a>
          </div>
        </div>
        
        <TakatStrip />

      </div>
    </footer>
  );
}