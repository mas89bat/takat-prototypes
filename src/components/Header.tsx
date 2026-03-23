'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MenuIcon, XIcon } from './icons/Icons';

const navItems = [
  { path: '/ou-manger', label: 'Où Manger' },
  { path: '/ou-dormir', label: 'Où Dormir' },
  { path: '/a-faire', label: 'À Faire' },
  { path: '/blog', label: 'Blog' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-50 border-b border-muted">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-primary hover:text-primary/80 transition-colors" aria-label="Abers Tourisme Homepage">
            Abers Tourisme
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path} className="text-base font-medium text-secondary hover:text-primary transition-colors">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
             <Link href="#" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-white hover:bg-primary/90 h-11 min-h-[44px] px-6 py-2">
                Planifier Votre Séjour
            </Link>
          </div>

          <button 
            className="md:hidden p-2 rounded-md min-h-[44px]" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Open main menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Slide Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-background z-40 border-b border-muted">
          <nav className="flex flex-col p-4 space-y-2">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path} className="text-lg font-medium text-secondary hover:text-primary p-3 rounded-md transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                {item.label}
              </Link>
            ))}
            <Link href="#" className="w-full mt-4 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-white hover:bg-primary/90 h-11 min-h-[44px] px-6 py-2">
                Planifier Votre Séjour
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
