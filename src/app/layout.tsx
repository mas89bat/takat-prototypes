import type { Metadata } from 'next';
import { DM_Sans, Sora } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TakatBanner from '@/components/TakatBanner';
import WhatsAppButton from '@/components/WhatsAppButton';

const bodyFont = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '700'],
});

const displayFont = Sora({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Abers Tourisme - Découvrez le Pays des Abers et la Côte des Légendes',
  description: 'Explorez les paysages uniques des Abers, ses phares emblématiques, ses activités nautiques et sa gastronomie locale. Planifiez votre séjour inoubliable en Bretagne.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="!scroll-smooth">
      <body
        className={cn(
          'min-h-screen bg-background font-body antialiased',
          bodyFont.variable,
          displayFont.variable
        )}
      >
        <TakatBanner />
        <WhatsAppButton />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}