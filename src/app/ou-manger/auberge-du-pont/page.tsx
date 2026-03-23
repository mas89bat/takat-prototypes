import { Metadata } from 'next';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ImageGalleryHero from '@/components/ImageGalleryHero';
import StickyConversionPanel from '@/components/StickyConversionPanel';
import BusinessSummary from '@/components/BusinessSummary';
import AmenitiesList from '@/components/AmenitiesList';
import { Amenity } from '@/lib/types';
import { PawPrintIcon, WheelchairIcon, UsersIcon, CreditCardIcon } from '@/components/icons/Icons';

export const metadata: Metadata = {
  title: 'Auberge du Pont - Restaurant | Abers Tourisme',
  description: 'Découvrez l\'Auberge du Pont à Lannilis, un ancien moulin à marée sur le GR34 proposant une cuisine traditionnelle et des produits de la mer.',
};

const images = [
  { src: 'https://cdt29.media.tourinsoft.eu/upload/Auberge-du-pont-2025.jpg', alt: 'Auberge du pont 2025' },
  { src: 'https://cdt29.media.tourinsoft.eu/upload/Auberge-du-Pont_2.jpg', alt: 'Auberge du Pont' },
  { src: 'https://cdt29.media.tourinsoft.eu/upload/Auberge-du-Pont_3.jpg', alt: 'Auberge du Pont' },
  { src: 'https://cdt29.media.tourinsoft.eu/upload/auberge-du-pont-2016.jpg', alt: 'auberge du pont 2016' },
];

const prestations: Amenity[] = [
    { name: 'Animaux acceptés', icon: <PawPrintIcon /> },
    { name: 'Accessible PMR', icon: <WheelchairIcon /> },
    { name: 'Groupes acceptés', icon: <UsersIcon /> },
];

const paiements: Amenity[] = [
    { name: 'Cartes de paiement', icon: <CreditCardIcon /> },
    { name: 'Chèques Vacances', icon: <CreditCardIcon /> },
    { name: 'Tickets restaurants', icon: <CreditCardIcon /> },
];

const restaurantData = {
    name: 'Auberge du Pont',
    address: {
        streetAddress: 'Paluden',
        addressLocality: 'Lannilis',
        postalCode: '29870',
        addressCountry: 'FR'
    },
    telephone: '+33-2-98-86-00-00', // Placeholder phone
    servesCuisine: 'Française, Fruits de mer',
    description: 'Cet ancien moulin à marée sur le GR34 est une auberge accueillante, décorée d\'antiquités marines où l\'on vous servira des produits de la mer et du terroir. Notre spécialité: la poêlée du pêcheur. Formule du midi, vente à emporter, menu enfant. Un endroit idéal pour vos séminaires, réunions de famille, goûter... Nous vous proposons également un traiteur. Terrasse les pieds dans l\'eau. Vue sur l\'Aber Wrac\'h. Dîner-concert tous les mois.',
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: restaurantData.name,
    address: restaurantData.address,
    telephone: restaurantData.telephone,
    servesCuisine: restaurantData.servesCuisine,
    description: restaurantData.description,
    image: images.map(i => i.src),
    priceRange: '€€-€€€',
};

export default function AubergeDuPontPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <ImageGalleryHero images={images} />
        <StickyConversionPanel />
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <BusinessSummary 
              name="Auberge du Pont" 
              cuisine="Cuisine traditionnelle-Produits de la mer" 
              address="Paluden, 29870 Lannilis"
            />

            <section id="description" className="py-6">
                <h2 className="text-2xl font-bold mb-4">Pourquoi choisir cet établissement ?</h2>
                <div className="prose max-w-none text-secondary">
                    <p>{restaurantData.description}</p>
                    <p>Spécialités culinaires : Cuisine sans gluten, Cuisine traditionnelle, Cuisine végétarienne.</p>
                </div>
            </section>

            <AmenitiesList title="Prestations principales" amenities={prestations} />
            <AmenitiesList title="Moyens de paiement" amenities={paiements} />
            
            <section id="map" className="py-6">
                 <h2 className="text-2xl font-bold mb-4">Localisation</h2>
                 <div className="aspect-video bg-muted rounded-lg overflow-hidden relative">
                    <Image src="/placeholder/map-lannilis.jpg" data-generate="true" data-prompt="Static map showing the location of Paluden, 29870 Lannilis in Brittany, France, with a pin marker. Simple, clean map style." alt="Carte de localisation de l'Auberge du Pont" fill className='object-cover' />
                    <div className="absolute inset-0 flex items-center justify-center">
                         <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Auberge du Pont, Paluden, 29870 Lannilis')}`} target="_blank" rel="noopener noreferrer" className="bg-primary text-white font-bold py-3 px-6 rounded-md min-h-[44px] hover:bg-primary/90">Ouvrir dans Google Maps</a>
                    </div>
                 </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}