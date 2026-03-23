import { MapPinIcon } from './icons/Icons';

interface BusinessSummaryProps {
    name: string;
    cuisine: string;
    address: string;
}

export default function BusinessSummary({ name, cuisine, address }: BusinessSummaryProps) {
  return (
    <div className="py-6 border-b border-muted">
      <p className="text-sm font-semibold text-primary uppercase tracking-wide">{cuisine}</p>
      <h1 className="text-4xl lg:text-5xl font-extrabold text-foreground mt-1">{name}</h1>
      <div className="mt-4 flex items-center gap-2 text-secondary">
        <MapPinIcon className="w-5 h-5 flex-shrink-0" />
        <p className="text-base">{address}</p>
      </div>
    </div>
  );
}