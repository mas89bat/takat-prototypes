import React from 'react';
import Link from 'next/link';
import TakatStrip from '@/components/TakatStrip';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy text-cream/80">
      {/* CTA Banner */}
      <div className="border-b border-primary-brand/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-8">
            <div className="md:col-span-8 text-center md:text-left">
              <p className="text-sm font-semibold uppercase tracking-wider text-accent">Prêt pour l'aventure ?</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-cream mt-2">
                Commencez à planifier votre séjour inoubliable dans les Abers.
              </h2>
            </div>
            <div className="md:col-span-4 flex justify-center md:justify-end">
              <Link href="/planifier-votre-sejour" className="inline-flex items-center justify-center h-12 px-8 font-medium tracking-wide text-accent-foreground transition duration-200 rounded-md shadow-md bg-accent hover:bg-accent/90 focus:shadow-outline focus:outline-none w-full md:w-auto min-h-[44px]">
                Planifier maintenant <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="text-2xl font-bold font-display text-cream">Abers Tourisme</h3>
            <p className="mt-4 text-sm">
              Votre guide officiel pour découvrir la beauté sauvage et le patrimoine unique du Pays des Abers et de la Côte des Légendes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold tracking-wider uppercase text-cream">Navigation</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/decouvrir-les-abers" className="hover:text-accent transition-colors">Découvrir</Link></li>
              <li><Link href="/activites" className="hover:text-accent transition-colors">Activités</Link></li>
              <li><Link href="/hebergements" className="hover:text-accent transition-colors">Hébergements</Link></li>
              <li><Link href="/restaurants" className="hover:text-accent transition-colors">Restaurants</Link></li>
              <li><Link href="/blog" className="hover:text-accent transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold tracking-wider uppercase text-cream">Thématiques</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="#" className="hover:text-accent transition-colors">Phares & Patrimoine</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Randonnée GR34</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Activités Nautiques</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Gastronomie Locale</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold tracking-wider uppercase text-cream">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start"><MapPin className="h-4 w-4 mr-3 mt-1 flex-shrink-0" /><span>Office de Tourisme des Abers, 29870 Lannilis</span></li>
              <li className="flex items-center"><Phone className="h-4 w-4 mr-3" /><a href="tel:+33298040543" className="hover:text-accent transition-colors">02 98 04 05 43</a></li>
              <li className="flex items-center"><Mail className="h-4 w-4 mr-3" /><a href="mailto:contact@abers-tourisme.com" className="hover:text-accent transition-colors">contact@abers-tourisme.com</a></li>
              <li className="flex items-center">< className="h-4 w-4 mr-3" /><a href="#" className="hover:text-accent transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-brand/30 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Abers Tourisme. Tous droits réservés.</p>
        </div>
      </div>

      <TakatStrip />
    </footer>
  );
};

export default Footer;
