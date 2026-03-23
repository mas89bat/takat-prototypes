'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MenuIcon, XIcon } from './icons';

const navigation = [
  { name: 'Où Manger', href: '/ou-manger' },
  { name: 'Où Dormir', href: '/ou-dormir' },
  { name: 'À Faire', href: '/a-faire' },
  { name: 'Blog', href: '/blog' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-background shadow-sm sticky top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Abers Tourisme</span>
            <span className="text-2xl font-bold text-primary">Abers Tourisme</span>
          </Link>
        </div>
        <div className="flex md:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-secondary min-h-[44px]"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Ouvrir le menu principal"
          >
            <MenuIcon className="h-6 w-6" />
          </button>
        </div>
        <div className="hidden md:flex md:gap-x-12">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href} className="text-base font-semibold leading-6 text-foreground hover:text-primary min-h-[44px] inline-flex items-center">
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden md:flex md:flex-1 md:justify-end">
          <Link href="#" className="rounded-md bg-primary px-4 py-2.5 text-base font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary min-h-[44px] inline-flex items-center">
            Planifier Votre Séjour
          </Link>
        </div>
      </nav>

      {/* Mobile menu, show/hide based on menu state. */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`} role="dialog" aria-modal="true">
        <div className="fixed inset-0 z-50" />
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Abers Tourisme</span>
              <span className="text-2xl font-bold text-primary">Abers Tourisme</span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-secondary min-h-[44px]"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Fermer le menu"
            >
              <XIcon className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-foreground hover:bg-muted min-h-[44px]"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                 <Link href="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-foreground hover:bg-muted min-h-[44px]">
                    Planifier Votre Séjour
                 </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}