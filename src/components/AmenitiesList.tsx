import { Amenity } from '@/lib/types';

interface AmenitiesListProps {
    title: string;
    amenities: Amenity[];
}

export default function AmenitiesList({ title, amenities }: AmenitiesListProps) {
  return (
    <div className="py-6">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {amenities.map(amenity => (
                <div key={amenity.name} className="flex items-center gap-3 bg-muted p-3 rounded-md">
                    <div className="text-primary">{amenity.icon}</div>
                    <span className="text-base text-foreground">{amenity.name}</span>
                </div>
            ))}
        </div>
    </div>
  );
}