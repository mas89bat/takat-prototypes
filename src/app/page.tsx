import { Metadata } from 'next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeaturedCategories from '@/components/FeaturedCategories';
import HighlightedListings from '@/components/HighlightedListings';
import NewsletterSignup from '@/components/NewsletterSignup';
import Footer from '@/components/Footer';
import { Listing } from '@/lib/types';

export const metadata: Metadata = {
  title: 'Abers Tourisme | Découvrez, Mangez, Séjournez au Pays des Abers',
  description: 'Le guide complet pour votre séjour au Pays des Abers. Trouvez les meilleurs restaurants, hébergements et activités pour une expérience inoubliable en Bretagne.',
};

const highlightedRestaurants: Listing[] = [
    {
        id: 'auberge-du-pont',
        name: 'Auberge du Pont',
        type: 'Cuisine traditionnelle-Produits de la mer',
        description: 'Ancien moulin à marée sur le GR34, une auberge accueillante avec terrasse les pieds dans l\'eau.',
        imageUrl: 'https://cdt29.media.tourinsoft.eu/upload/Auberge-du-pont-2025.jpg',
        href: '/ou-manger/auberge-du-pont',
    },
    {
        id: 'creperie-de-trouzilit',
        name: 'Crêperie de Trouzilit',
        type: 'Crêperie',
        description: 'Halte de rêve au sein du domaine du Manoir de Trouzilit, superbe bâtisse du XVIe siècle.',
        imageUrl: 'https://cdt29.media.tourinsoft.eu/upload/Crepe-Trouzilit.jpg',
        href: '/ou-manger/creperie-de-trouzilit',
    },
     {
        id: 'le-gam',
        name: 'Le Gam',
        type: 'Bistrot / bar à vin',
        description: 'L\'endroit parfait où manger, boire un verre accompagné d\'une planche et passer un bon moment.',
        imageUrl: 'https://cdt29.media.tourinsoft.eu/upload/Le-gam-2.jpg',
        href: '/ou-manger/le-gam',
    },
];

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturedCategories />
        <HighlightedListings title="Nos tables coup de cœur" listings={highlightedRestaurants} />
        {/* Placeholder for other sections like Social Proof, Highlighted Stays, Blog Preview */}
        <NewsletterSignup />
      </main>
      <Footer />
    </>
  );
}
