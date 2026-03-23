import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="space-y-16 md:space-y-24">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-center text-white px-4">
        <Image
          src="/placeholder/abers-coastline.jpg" 
          data-generate="true"
          data-prompt="Dramatic coastline of the Abers in Brittany, France, at sunset with calm waters and rocky shores"
          alt="Côte des Abers en Bretagne"
          fill
          priority
          className="object-cover -z-10"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50 -z-10"></div>
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Découvrez, Mangez, Séjournez</h1>
          <p className="mt-6 text-lg leading-8">Votre aventure inoubliable au cœur du Pays des Abers commence ici.</p>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Explorez les Abers</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <Link href="/ou-manger" className="group block">
            <div className="aspect-h-9 aspect-w-16 w-full overflow-hidden rounded-lg">
              <Image src="/placeholder/breton-restaurant.jpg" data-generate="true" data-prompt="Cozy and charming Breton restaurant interior with rustic wooden tables and a warm fireplace" alt="Restaurant typique Breton" fill className="object-cover group-hover:scale-105 transition-transform duration-300" sizes="(max-width: 768px) 100vw, 33vw"/>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-foreground">Où Manger</h3>
            <p className="mt-2 text-base text-secondary">Savourez les délices locaux, des fruits de mer aux crêpes traditionnelles.</p>
          </Link>
          <Link href="/ou-dormir" className="group block">
            <div className="aspect-h-9 aspect-w-16 w-full overflow-hidden rounded-lg">
              <Image src="/placeholder/seaside-gite.jpg" data-generate="true" data-prompt="Charming guesthouse room with a window view of the sea in Brittany, France" alt="Chambre avec vue sur mer" fill className="object-cover group-hover:scale-105 transition-transform duration-300" sizes="(max-width: 768px) 100vw, 33vw"/>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-foreground">Où Dormir</h3>
            <p className="mt-2 text-base text-secondary">Trouvez l'hébergement parfait, de l'hôtel de charme au gîte familial.</p>
          </Link>
          <Link href="/a-faire" className="group block">
            <div className="aspect-h-9 aspect-w-16 w-full overflow-hidden rounded-lg">
              <Image src="/placeholder/kayaking-abers.jpg" data-generate="true" data-prompt="People kayaking on the calm waters of an aber in Brittany, France on a sunny day" alt="Kayak dans les Abers" fill className="object-cover group-hover:scale-105 transition-transform duration-300" sizes="(max-width: 768px) 100vw, 33vw"/>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-foreground">À Faire</h3>
            <p className="mt-2 text-base text-secondary">Explorez les sentiers côtiers, les activités nautiques et le patrimoine local.</p>
          </Link>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-muted py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Restez Inspiré</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-secondary">
            Abonnez-vous à notre newsletter pour recevoir nos guides et nos meilleures offres directement dans votre boîte mail.
          </p>
          <form className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <label htmlFor="email-address" className="sr-only">Adresse email</label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="w-full max-w-md rounded-md border-0 bg-white px-4 py-3 text-foreground shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-secondary focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 min-h-[44px]"
              placeholder="Entrez votre email"
            />
            <button
              type="submit"
              className="w-full sm:w-auto flex-none rounded-md bg-primary px-4 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary min-h-[44px]"
            >
              S'inscrire
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}