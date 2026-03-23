import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-muted text-secondary">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg text-foreground mb-4">Abers Tourisme</h3>
            <p className="text-sm">Découvrez le meilleur du Pays des Abers. Votre guide pour une aventure inoubliable.</p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Explorer</h4>
            <ul className="space-y-2">
              <li><Link href="/ou-manger" className="text-sm hover:text-primary transition-colors">Où Manger</Link></li>
              <li><Link href="/ou-dormir" className="text-sm hover:text-primary transition-colors">Où Dormir</Link></li>
              <li><Link href="/a-faire" className="text-sm hover:text-primary transition-colors">À Faire</Link></li>
              <li><Link href="/blog" className="text-sm hover:text-primary transition-colors">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Informations</h4>
            <ul className="space-y-2">
              <li><Link href="/a-propos" className="text-sm hover:text-primary transition-colors">À Propos</Link></li>
              <li><Link href="/contact" className="text-sm hover:text-primary transition-colors">Contactez-Nous</Link></li>
              <li><Link href="/mentions-legales" className="text-sm hover:text-primary transition-colors">Mentions Légales</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Suivez-nous</h4>
            <div className="flex space-x-4">
              {/* Placeholder for social icons */}
              <a href="#" aria-label="Facebook" className="text-secondary hover:text-primary transition-colors">FB</a>
              <a href="#" aria-label="Instagram" className="text-secondary hover:text-primary transition-colors">IG</a>
              <a href="#" aria-label="Twitter" className="text-secondary hover:text-primary transition-colors">TW</a>
            </div>
          </div>
        </div>
        <div className="border-t border-secondary/20 mt-8 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Abers Tourisme. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}