'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { path: '/decouvrir-les-abers', label: 'Découvrir' },
  { path: '/activites', label: 'Activités' },
  { path: '/hebergements', label: 'Hébergements' },
  { path: '/restaurants', label: 'Restaurants' },
  { path: '/blog', label: 'Blog' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
          isScrolled ? 'bg-background shadow-md' : 'bg-transparent'
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="text-2xl font-bold font-display text-primary-brand">
              Abers Tourisme
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link key={item.path} href={item.path} className="text-foreground hover:text-primary transition-colors duration-200">
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
                <Link href="/planifier-votre-sejour" className="hidden md:inline-flex items-center justify-center h-11 px-6 font-medium tracking-wide text-accent-foreground transition duration-200 rounded-md shadow-md bg-accent hover:bg-accent/90 focus:shadow-outline focus:outline-none w-full md:w-auto min-h-[44px]">
                    Planifier votre séjour
                </Link>
                <button 
                    onClick={() => setMobileMenuOpen(true)} 
                    className="md:hidden p-2 rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    aria-label="Open menu"
                >
                    <Menu className="h-6 w-6" />
                </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm md:hidden"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-4 border-b">
                 <Link href="/" className="text-2xl font-bold font-display text-primary-brand" onClick={() => setMobileMenuOpen(false)}>
                    Abers Tourisme
                </Link>
                <button 
                    onClick={() => setMobileMenuOpen(false)} 
                    className="p-2 rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <nav className="flex flex-col items-center justify-center flex-1 space-y-8">
                {navItems.map((item) => (
                  <Link key={item.path} href={item.path} className="text-2xl text-foreground hover:text-primary transition-colors duration-200" onClick={() => setMobileMenuOpen(false)}>
                    {item.label}
                  </Link>
                ))}
                <Link href="/planifier-votre-sejour" className="inline-flex items-center justify-center h-12 px-8 mt-8 text-lg font-medium tracking-wide text-accent-foreground transition duration-200 rounded-md shadow-md bg-accent hover:bg-accent/90 focus:shadow-outline focus:outline-none min-h-[44px]" onClick={() => setMobileMenuOpen(false)}>
                    Planifier votre séjour
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}