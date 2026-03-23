import Image from 'next/image';
import Link from 'next/link';
import { Listing } from '@/lib/types';

interface ListingCardProps {
  listing: Listing;
}

export default function ListingCard({ listing }: ListingCardProps) {
  return (
    <div className="bg-white rounded-lg border border-muted overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <Link href={listing.href} className="block">
        <div className="relative h-48">
          <Image
            src={listing.imageUrl}
            alt={`Image de ${listing.name}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
        <div className="p-4">
          <p className="text-sm text-primary font-semibold">{listing.type}</p>
          <h3 className="text-lg font-bold mt-1 text-foreground">{listing.name}</h3>
          <p className="text-sm text-secondary mt-2 line-clamp-2">{listing.description}</p>
          <div className="mt-4 text-primary font-semibold text-sm">Voir plus &rarr;</div>
        </div>
      </Link>
    </div>
  );
}