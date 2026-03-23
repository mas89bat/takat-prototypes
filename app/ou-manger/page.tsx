import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Restaurants, Crêperies & Bars',
  description: 'Trouvez le meilleur endroit pour manger dans le Pays des Abers. Découvrez notre sélection de restaurants, crêperies et bars.',
};

const listings = [
  {
    name: 'Auberge du Pont',
    category: 'Cuisine traditionnelle',
    href: '/ou-manger/auberge-du-pont',
    imageUrl: 'https://cdt29.media.tourinsoft.eu/upload/Auberge-du-pont-2025.jpg?width=800&height=600',
    alt: 'Façade de l\'Auberge du Pont au bord de l\'eau.',
  },
  {
    name: 'Crêperie de Trouzilit',
    category: 'Crêperie',
    href: '/ou-manger/creperie-de-trouzilit',
    imageUrl: 'https://cdt29.media.tourinsoft.eu/upload/Manoir-de-Trouzilit-2024--3-.jpg?width=800&height=600',
    alt: 'Vue extérieure du Manoir de Trouzilit.',
  },
  {
    name: 'La Maison du Boulanger',
    category: 'Salon de thé',
    href: '#',
    imageUrl: 'https://cdt29.media.tourinsoft.eu/upload/Photo-maison-du-boulanger.jpeg?width=800&height=600',
    alt: 'Intérieur de La Maison du Boulanger.',
  },
  {
    name: 'Le Gam',
    category: 'Bistrot / bar à vin',
    href: '#',
    imageUrl: 'https://cdt29.media.tourinsoft.eu/upload/Le-gam-2.jpg?width=800&height=600',
    alt: 'Plat servi au restaurant Le Gam.',
  },
];

export default function OuMangerPage() {
  return (
    <div>
      {/* Category Header */}
      <section className="bg-muted py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Où Manger dans les Abers</h1>
          <p className="mt-4 text-lg text-secondary">Découvrez une terre de saveurs, entre terre et mer.</p>
        </div>
      </section>

      {/* Listing Grid */}
      <section className="mx-auto max-w-7xl px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {listings.map((listing) => (
            <Link key={listing.name} href={listing.href} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <Image
                  src={listing.imageUrl}
                  alt={listing.alt}
                  fill
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{listing.name}</h3>
              <p className="mt-1 text-base text-gray-700">{listing.category}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}