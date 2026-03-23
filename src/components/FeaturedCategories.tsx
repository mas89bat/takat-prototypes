import Image from 'next/image';
import Link from 'next/link';

const categories = [
  {
    name: 'Où Manger',
    href: '/ou-manger',
    imageSrc: '/placeholder/local-dishes-collage.jpg',
    imageAlt: 'Collage de plats locaux bretons, incluant fruits de mer et crêpes.',
    prompt: 'Vibrant collage of delicious local Breton food: seafood platter, savory galette, sweet crêpe, and a bowl of Kouign-amann.'
  },
  {
    name: 'Où Dormir',
    href: '/ou-dormir',
    imageSrc: '/placeholder/cozy-breton-gite.jpg',
    imageAlt: 'Intérieur chaleureux d\'un gîte breton avec des murs en pierre.',
    prompt: 'Cozy interior of a Breton gîte with exposed stone walls, a fireplace, and comfortable rustic furniture.'
  },
  {
    name: 'À Faire',
    href: '/a-faire',
    imageSrc: '/placeholder/kayaking-in-abers.jpg',
    imageAlt: 'Personnes faisant du kayak dans les eaux calmes d\'un aber.',
    prompt: 'People kayaking on the calm, clear waters of an aber in Brittany, surrounded by lush green coastline.'
  },
];

export default function FeaturedCategories() {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight">Explorez le Pays des Abers</h2>
          <p className="mt-2 text-lg text-secondary">L'aventure vous attend, que choisirez-vous en premier ?</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link href={category.href} key={category.name} className="group relative block rounded-lg overflow-hidden min-h-[250px]">
              <Image
                src={category.imageSrc}
                alt={category.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
                data-generate="true"
                data-prompt={category.prompt}
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white tracking-wide">{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}