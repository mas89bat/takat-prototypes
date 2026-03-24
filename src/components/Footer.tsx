import TakatStrip from "@/components/TakatStrip";

const socialLinks = [
  { name: 'Facebook', icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path></svg> },
  { name: 'Instagram', icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.07-1.645-.07-4.85s.012-3.584.07-4.85c.148-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"></path></svg> },
  { name: 'Twitter', icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg> },
  { name: 'YouTube', icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12.04 4.82c-3.32 0-6.01 2.69-6.01 6.01s2.69 6.01 6.01 6.01 6.01-2.69 6.01-6.01-2.69-6.01-6.01-6.01zM9.82 14.16V7.48l5.2 3.34-5.2 3.34zm11.25-6.52s-.22-1.53-.88-2.2c-.86-.88-1.83-.89-2.28-.94-3.18-.23-7.97-.23-7.97-.23s-4.79 0-7.97.23c-.45.05-1.42.06-2.28.94-.66.67-.88 2.2-.88 2.2S1.73 8.35 1.73 9.5v2.98c0 1.15.22 2.66.22 2.66s.22 1.53.88 2.2c.86.88 1.99.86 2.51.95 1.88.19 7.74.23 7.74.23s4.79 0 7.97-.23c.45-.05 1.42-.06 2.28-.94.66-.67.88-2.2.88-2.2s.22-1.51.22-2.66V9.5c0-1.15-.22-2.66-.22-2.66z"></path></svg> },
];

const LinkColumn = ({ title, links }: { title: string; links: { label: string; href: string }[] }) => (
  <div>
    <h3 className="text-lg font-semibold text-white" style={{ fontFamily: 'var(--font-display)' }}>{title}</h3>
    <ul className="mt-4 space-y-3">
      {links.map(link => (
        <li key={link.label}>
          <a href={link.href} className="text-white/70 hover:text-teal transition-colors" style={{ fontFamily: 'var(--font-body)' }}>{link.label}</a>
        </li>
      ))}
    </ul>
  </div>
);

export default function Footer() {
  return (
    <footer id="contact">
      <div className="relative">
        <svg viewBox="0 0 1440 60" className="w-full block">
          <path d="M0,0 L1440,0 L1440,30 C1200,60 960,0 720,30 C480,60 240,0 0,30 Z" className="fill-background" />
        </svg>
      </div>
      <div className="bg-navy text-white pt-16 pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Column 1: Brand */}
            <div className="md:col-span-2 lg:col-span-1">
              <a href="#" className="text-3xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>Abers Tourisme</a>
              <p className="text-white/70 mt-4" style={{ fontFamily: 'var(--font-body)' }}>
                Découvrez la magie du Pays des Abers et de la Côte des Légendes. Une destination unique entre terre et mer.
              </p>
              <div className="flex space-x-3 mt-6">
                {socialLinks.map(social => (
                  <a key={social.name} href="#" aria-label={social.name} className="w-9 h-9 rounded-full bg-white/10 hover:bg-teal/80 transition-colors flex items-center justify-center">
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
            {/* Column 2: Quick Links */}
            <LinkColumn title="Navigation" links={[
              { label: 'Découvrir', href: '#discover' },
              { label: 'Expériences', href: '#experiences' },
              { label: 'Séjourner', href: '#stay' },
              { label: 'Agenda', href: '#agenda' },
            ]} />
            {/* Column 3: Practical Links */}
            <LinkColumn title="Liens Utiles" links={[
              { label: 'Planifier votre séjour', href: '#' },
              { label: 'Nous contacter', href: '#' },
              { label: 'Mentions Légales', href: '#' },
              { label: 'Politique de confidentialité', href: '#' },
            ]} />
            {/* Column 4: Contact */}
            <div>
              <h3 className="text-lg font-semibold text-white" style={{ fontFamily: 'var(--font-display)' }}>Contactez-nous</h3>
              <ul className="mt-4 space-y-4">
                <li className="flex items-start gap-3 text-white/70">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0 text-teal mt-1" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                  <span style={{ fontFamily: 'var(--font-body)' }}>Place de la Mairie, 29870 Lannilis</span>
                </li>
                <li className="flex items-start gap-3 text-white/70">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0 text-teal mt-1" viewBox="0 0 20 20" fill="currentColor"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
                  <a href="tel:+33298040543" className="hover:text-teal transition-colors" style={{ fontFamily: 'var(--font-body)' }}>02 98 04 05 43</a>
                </li>
                 <li className="flex items-start gap-3 text-white/70">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0 text-teal mt-1" viewBox="0 0 20 20" fill="currentColor"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
                   <a href="mailto:contact@abers-tourisme.com" className="hover:text-teal transition-colors" style={{ fontFamily: 'var(--font-body)' }}>contact@abers-tourisme.com</a>
                 </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/50">
            <p style={{ fontFamily: 'var(--font-body)' }}>&copy; {new Date().getFullYear()} Abers Tourisme. Tous droits réservés.</p>
            <TakatStrip />
          </div>
        </div>
      </div>
    </footer>
  );
}
