import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-muted text-secondary">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-y-8 md:flex-row">
            <div className="text-center md:text-left">
              <p className="text-lg font-bold text-foreground">Abers Tourisme</p>
              <p className="mt-2 text-base">Votre guide pour le Pays des Abers.</p>
            </div>
            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-4 md:justify-start">
                <Link href="/a-propos" className="text-base hover:text-primary min-h-[44px] inline-flex items-center">À Propos</Link>
                <Link href="/contact" className="text-base hover:text-primary min-h-[44px] inline-flex items-center">Contact</Link>
                <Link href="/mentions-legales" className="text-base hover:text-primary min-h-[44px] inline-flex items-center">Mentions Légales</Link>
            </nav>
        </div>
        <div className="mt-12 border-t border-gray-900/10 pt-8 text-center">
            <p className="text-sm text-secondary">&copy; {new Date().getFullYear()} Abers Tourisme. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}