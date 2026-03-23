import type { Metadata } from 'next';
import Image from 'next/image';
import { PhoneIcon, MapPinIcon, CheckCircleIcon } from '@/components/icons';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Auberge du Pont - Restaurant à Lannilis',
  description: 'Découvrez l\'Auberge du Pont à Lannilis. Une cuisine traditionnelle avec produits de la mer dans un ancien moulin à marée sur le GR34, avec terrasse vue sur l\'Aber Wrac\'h.',
};

const images = [
  { src: 'https://cdt29.media.tourinsoft.eu/upload/Auberge-du-pont-2025.jpg', alt: 'Auberge du pont 2025' },
  { src: 'https://cdt29.media.tourinsoft.eu/upload/Auberge-du-Pont_2.jpg', alt: 'Auberge du Pont intérieur' },
  { src: 'https://cdt29.media.tourinsoft.eu/upload/Auberge-du-Pont_3.jpg', alt: 'Plat de l\'Auberge du Pont' },
  { src: 'https://cdt29.media.tourinsoft.eu/upload/auberge-du-pont-2016.jpg', alt: 'Terrasse de l\'auberge du pont 2016' },
];

const amenities = [
  { name: 'Animaux acceptés', available: true },
  { name: 'Accessible PMR', available: true },
  { name: 'Groupes acceptés (82 max)', available: true },
  { name: 'Plats à emporter', available: true },
  { name: 'Cuisine sans gluten', available: true },
  { name: 'Cuisine végétarienne', available: true },
  { name: 'Terrasse', available: true },
];

const paymentMethods = ['Cartes de paiement', 'Chèques Vacances', 'Espèces', 'Tickets restaurants'];

export default function AubergeDuPontPage() {
  const restaurantSchema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Auberge du Pont",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Paluden",
      "addressLocality": "Lannilis",
      "postalCode": "29870",
      "addressCountry": "FR"
    },
    "servesCuisine": "Cuisine traditionnelle, Produits de la mer",
    "telephone": "+33298040105", // Fictitious phone number
    "image": images[0].src,
    "description": "Cet ancien moulin à marée sur le GR34 est une auberge accueillante, décorée d'antiquités marines où l'on vous servira des produits de la mer et du terroir.",
    "priceRange": "€€"
  };

  return (
    <>
      <Script id="restaurant-schema" type="application/ld+json">{JSON.stringify(restaurantSchema)}</Script>
      {/* Image Gallery Hero */}
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 mt-4">
        <div className="grid grid-cols-1 grid-rows-2 gap-2 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 lg:h-[60vh]">
          <div className="relative col-span-1 row-span-2 sm:col-span-2 lg:col-span-2 lg:row-span-2 rounded-lg overflow-hidden">
            <Image src={images[0].src} alt={images[0].alt} fill priority className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"/>
          </div>
          <div className="relative hidden lg:block rounded-lg overflow-hidden">
            <Image src={images[1].src} alt={images[1].alt} fill className="object-cover" sizes="25vw"/>
          </div>
          <div className="relative hidden lg:block rounded-lg overflow-hidden">
            <Image src={images[2].src} alt={images[2].alt} fill className="object-cover" sizes="25vw"/>
          </div>
          <div className="relative col-span-1 sm:col-span-2 lg:col-span-2 rounded-lg overflow-hidden">
            <Image src={images[3].src} alt={images[3].alt} fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"/>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-3 lg:gap-x-12">
          <div className="lg:col-span-2">
            {/* Business Summary */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Auberge du Pont</h1>
              <p className="mt-2 text-xl text-secondary">Cuisine traditionnelle - Produits de la mer</p>
            </div>

            {/* Detailed Description */}
            <div className="space-y-6 text-base text-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 border-b pb-2">Pourquoi choisir cet établissement ?</h2>
              <p>Cet ancien moulin à marée sur le GR34 est une auberge accueillante, décorée d'antiquités marines où l'on vous servira des produits de la mer et du terroir. Notre spécialité: la poêlée du pêcheur.</p>
              <p>Formule du midi, vente à emporter, menu enfant. Un endroit idéal pour vos séminaires, réunions de famille, goûter... Nous vous proposons également un traiteur. Terrasse les pieds dans l'eau. Vue sur l'Aber Wrac'h. Dîner-concert tous les mois.</p>
            </div>

            {/* Amenities List */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 border-b pb-2">Prestations & Services</h2>
              <ul className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
                {amenities.map((amenity) => (
                  <li key={amenity.name} className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 flex-shrink-0 text-primary" aria-hidden="true" />
                    <span className="ml-3 text-base text-gray-700">{amenity.name}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Payment Methods */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 border-b pb-2">Moyens de paiement</h2>
              <div className="mt-6 flex flex-wrap gap-2">
                {paymentMethods.map((method) => (
                  <span key={method} className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-sm font-medium text-secondary">
                    {method}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sticky Conversion Panel */}
          <aside className="mt-12 lg:mt-0 lg:col-span-1">
            <div className="lg:sticky lg:top-24 bg-muted rounded-lg p-6 space-y-4">
              <h3 className="text-xl font-bold text-center">Réservez votre table</h3>
              <a href="tel:+33298040105" className="flex w-full items-center justify-center rounded-md bg-primary px-4 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary/90 min-h-[44px]">
                <PhoneIcon className="-ml-1 mr-2 h-5 w-5" />
                Appeler l'établissement
              </a>
              <a href="https://www.google.com/maps/dir/?api=1&destination=Auberge+du+Pont+Paluden+29870+Lannilis" target="_blank" rel="noopener noreferrer" className="flex w-full items-center justify-center rounded-md border border-secondary px-4 py-3 text-base font-semibold text-secondary shadow-sm hover:bg-gray-100 min-h-[44px]">
                <MapPinIcon className="-ml-1 mr-2 h-5 w-5" />
                Obtenir l'itinéraire
              </a>
              <div className="pt-4 text-center border-t mt-4">
                 <p className="font-semibold text-foreground">Adresse</p>
                 <p className="text-secondary">Paluden, 29870 Lannilis</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}