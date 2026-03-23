import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: {
    template: '%s | Abers Tourisme',
    default: 'Abers Tourisme | Découvrez, Mangez, Séjournez au Pays des Abers',
  },
  description: 'Le guide officiel pour découvrir les meilleurs restaurants, hébergements et activités au coeur du Pays des Abers, en Bretagne.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable}`}>
      <body className="bg-background text-foreground antialiased font-body">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}