import Image from 'next/image';

interface ImageGalleryHeroProps {
  images: { src: string; alt: string }[];
}

export default function ImageGalleryHero({ images }: ImageGalleryHeroProps) {
  if (!images || images.length === 0) {
    return null;
  }

  const mainImage = images[0];
  const otherImages = images.slice(1, 3);

  return (
    <section className="container mx-auto px-4 pt-6">
      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-2 h-[300px] md:h-[500px]">
        <div className="relative md:row-span-2 rounded-md md:rounded-l-lg overflow-hidden">
          <Image
            src={mainImage.src}
            alt={mainImage.alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </div>
        {otherImages.map((image, index) => (
            <div key={index} className={`relative hidden md:block rounded-r-lg overflow-hidden ${index === 0 ? 'rounded-tr-lg' : 'rounded-br-lg'}`}>
             <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="25vw"
                className="object-cover"
                priority
            />
           </div>
        ))}
      </div>
    </section>
  );
}
