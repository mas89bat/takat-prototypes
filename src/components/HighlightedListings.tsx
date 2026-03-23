import { Listing } from '@/lib/types';
import ListingCard from './ListingCard';

interface HighlightedListingsProps {
    title: string;
    listings: Listing[];
}

export default function HighlightedListings({ title, listings }: HighlightedListingsProps) {
  return (
    <section className="py-12 md:py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      </div>
    </section>
  );
}