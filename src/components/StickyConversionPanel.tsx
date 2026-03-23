import { PhoneIcon, MapPinIcon } from './icons/Icons';

export default function StickyConversionPanel() {
  return (
    <div className="sticky bottom-0 md:top-16 bg-background/95 backdrop-blur-sm z-40 border-t md:border-t-0 md:border-b border-muted">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className='hidden md:block'>
            <p className='font-bold text-lg'>Auberge du Pont</p>
            <p className='text-sm text-secondary'>Prêt à réserver ?</p>
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <a href="tel:+33298860000" className="flex-1 inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors bg-secondary/10 text-secondary-foreground hover:bg-secondary/20 h-11 min-h-[44px] px-4 py-2">
              <PhoneIcon className="w-4 h-4" />
              <span className="hidden sm:inline">Appeler</span>
            </a>
            <a href="#map" className="flex-1 inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors bg-primary text-white hover:bg-primary/90 h-11 min-h-[44px] px-4 py-2">
              <MapPinIcon className="w-4 h-4" />
              <span className="hidden sm:inline">Itinéraire</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}