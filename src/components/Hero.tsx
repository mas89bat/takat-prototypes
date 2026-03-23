import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative bg-secondary text-white">
      <Image 
        src="/placeholder/breton-coastline.jpg" 
        alt="Paysage côtier du Pays des Abers en Bretagne" 
        fill
        sizes="100vw"
        className="object-cover"
        priority
        data-generate="true"
        data-prompt="Vibrant, sunny day on the coast of Abers, Brittany, France, with dramatic cliffs, turquoise water, and a small fishing boat. Cinematic, wide-angle shot."
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20"></div>
      <div className="relative container mx-auto px-4 py-24 md:py-32 lg:py-48 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">Votre escapade au cœur des Abers</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-white/90">Trouvez les meilleures adresses pour manger, dormir et vous divertir dans un cadre exceptionnel.</p>
        <div className="mt-8 max-w-xl mx-auto">
          <form className="flex flex-col md:flex-row gap-2">
            <input 
              type="search" 
              placeholder="Que cherchez-vous ? (ex: restaurant, hôtel...)"
              className="w-full px-4 py-3 rounded-md text-foreground min-h-[44px] flex-grow"
              aria-label="Search for listings"
            />
            <button 
              type="submit" 
              className="w-full md:w-auto bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-md min-h-[44px]"
            >
              Rechercher
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}