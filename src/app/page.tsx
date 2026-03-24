'use client';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import Counter from '@/components/Counter';
import Link from 'next/link';
import { 
    ChevronRight, 
    ChevronDown, 
    Sailboat, 
    Landmark, 
    Compass, 
    Mountain 
} from 'lucide-react';

const services = [
  {
    title: "Le phare de l’île Vierge",
    subtitle: "Le plus haut d'Europe",
    description: "Prenez la mer pour découvrir ce site exceptionnel et son petit frère transformé en écogîte.",
    imageUrl: "https://www.abers-tourisme.com/assets/uploads/sites/8/2022/08/kayak-ile-vierge-clo-et-clem-680x453.jpg",
    icon: Landmark
  },
  {
    title: "Phare de Lanvaon",
    subtitle: "La sentinelle du port",
    description: "Admirez sa forme originale et surprenante, conçue pour signaler l'entrée du port.",
    imageUrl: "https://www.abers-tourisme.com/assets/uploads/sites/8/2025/08/plouguerneau21alamoureux-d6a2367.jpg",
    icon: Compass
  },
  {
    title: "L'Aber Wrac'h",
    subtitle: "Le plus grand des Abers",
    description: "Explorez le plus grand des deux abers en kayak pour une immersion totale dans la nature.",
    imageUrl: "https://www.abers-tourisme.com/assets/uploads/sites/8/2022/12/laber-wrach-680x453.jpg",
    icon: Sailboat
  },
  {
    title: "Randonnée sur le GR34",
    subtitle: "Le sentier des douaniers",
    description: "Parcourez des paysages côtiers préservés et profitez du grand air iodé.",
    imageUrl: "https://www.abers-tourisme.com/assets/uploads/sites/8/2022/10/123-sb-plouguerneau-balade-camping-du-phare-de-lile-vierge-jusqua-roch-pelguent-hdjeremyjehanin-2024-scaled.jpg",
    icon: Mountain
  }
];

const caseStudies = [
    {
        category: "Gastronomie",
        title: "Auberge du Pont",
        description: "Cet ancien moulin à marée sur le GR34 vous accueille avec des produits de la mer et du terroir.",
        metric: "Vue imprenable sur l'Aber Wrac'h",
        metricValue: "Terrasse au bord de l'eau"
    },
    {
        category: "Gourmandise",
        title: "La Maison du Boulanger",
        description: "Un salon de thé, glacier et chocolatier reconnu par les guides Gault Millau et Petit Futé.",
        metric: "Classé par",
        metricValue: "Gault & Millau"
    }
];

const logos = [
    "Finistère Tourisme", "Bretagne Tourisme", "Parc Naturel Marin d'Iroise", "GR34", "Vedettes des Abers", "Semaine du Golfe"
];

export default function HomePage() {
  return (
    <>
      {/* Section 1: Hero */}
      <section className="relative h-screen min-h-[600px] w-full flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: `url('https://www.abers-tourisme.com/assets/uploads/sites/8/2022/10/123-sb-plouguerneau-balade-camping-du-phare-de-lile-vierge-jusqua-roch-pelguent-hdjeremyjehanin-2024-scaled.jpg')`}}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-navy/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="uppercase tracking-widest text-sm font-semibold mb-4">La route des phares</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="font-display text-4xl md:text-6xl lg:text-7xl font-bold">
                Une escale <span className="text-accent">lumineuse</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-cream/90">
                Découvrez les sentinelles de la mer et leurs secrets dans le cadre incomparable du Pays des Abers.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8 }} className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4">
                <Link href="/planifier-votre-sejour" className="inline-flex items-center justify-center h-12 px-8 font-medium tracking-wide text-accent-foreground transition duration-200 rounded-md shadow-md bg-accent hover:bg-accent/90 focus:shadow-outline focus:outline-none w-full md:w-auto min-h-[44px]">
                    Découvrir les Abers
                </Link>
                <Link href="/activites" className="inline-flex items-center justify-center h-12 px-8 font-medium tracking-wide text-cream transition duration-200 rounded-md border border-cream hover:bg-cream hover:text-navy focus:shadow-outline focus:outline-none w-full md:w-auto min-h-[44px]">
                    Voir les activités
                </Link>
            </motion.div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <ChevronDown className="w-8 h-8 text-white animate-bounce-slow"/>
        </div>
      </section>

      {/* Section 2: About */}
      <section className="py-20 lg:py-32 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                <AnimatedSection direction="left">
                  <p className="text-accent font-semibold uppercase tracking-widest">Pays des Abers</p>
                  <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-foreground">Le charme de ses paysages incomparables !</h2>
                  <p className="mt-6 text-muted-foreground leading-relaxed">Le Pays des Abers va vous étonner sûrement, vous charmer, nous l’espérons, vous conquérir sans doute, par la diversité de ses paysages. Une sortie en kayak dans l’Aber Wrac’h ou une randonnée le long de l’Aber-Benoît vous permettront d’apprécier la richesse naturelle incomparable de notre pays. Et surtout l’île Vierge va vous envoûter avec son phare, le plus haut d’Europe !</p>
                  <Link href="/decouvrir-les-abers" className="inline-flex items-center font-semibold text-primary mt-8 group min-h-[44px]">
                      En savoir plus
                      <ChevronRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </AnimatedSection>
                <AnimatedSection direction="right" delay={0.4}>
                    <div className="rounded-lg overflow-hidden shadow-2xl">
                        <img src="https://www.abers-tourisme.com/assets/uploads/sites/8/2025/12/113-sb-landeda-point-de-vue-depuis-an-treiz-hdjeremyjehanin-2024-680x453.jpg" alt="Point de vue sur l'Aber Benoît" className="w-full h-full object-cover" />
                    </div>
                </AnimatedSection>
              </div>
          </div>
      </section>

      {/* Section 3: Services/Solutions */}
      <section className="py-20 lg:py-32 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <AnimatedSection className="text-center max-w-3xl mx-auto">
                  <p className="text-accent font-semibold uppercase tracking-widest">Nos Tops</p>
                  <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-foreground">Intense & sauvage pour profiter du grand air iodé !</h2>
                  <p className="mt-6 text-muted-foreground">Découvrez une nature préservée et un large choix d’activités nautiques ou sportives, en plein air et en famille.</p>
              </AnimatedSection>
              <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                  {services.map((service, index) => (
                      <AnimatedSection key={service.title} delay={0.2 * (index + 1)}>
                        <div className="group relative overflow-hidden rounded-lg shadow-lg h-80 lg:h-96">
                            <img src={service.imageUrl} alt={service.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-6 text-white w-full">
                                <div className="flex items-center">
                                    <div className="bg-accent/80 p-3 rounded-full"><service.icon className="h-6 w-6 text-accent-foreground"/></div>
                                    <p className="ml-4 font-semibold tracking-wider uppercase">{service.subtitle}</p>
                                </div>
                                <h3 className="mt-4 font-display text-2xl font-bold">{service.title}</h3>
                                <p className="mt-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-w-xs">{service.description}</p>
                                <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="inline-flex items-center font-semibold border-2 border-white px-4 py-2 rounded-md min-h-[44px]">
                                        Learn More <ChevronRight className="ml-2 h-4 w-4" />
                                    </span>
                                </div>
                            </div>
                        </div>
                      </AnimatedSection>
                  ))}
              </div>
          </div>
      </section>
      
      {/* Section 4: Impact Stats */}
      <section className="py-20 lg:py-32 bg-navy text-white relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-primary-brand/20 rounded-full filter blur-3xl opacity-50"></div>
        <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-accent/20 rounded-full filter blur-3xl opacity-50"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <AnimatedSection className="text-center">
                <p className="text-accent font-semibold uppercase tracking-widest">Les Abers en chiffres</p>
                <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold">Un territoire d'exception</h2>
            </AnimatedSection>
            <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <AnimatedSection delay={0.2}>
                    <p className="text-4xl lg:text-6xl font-display font-bold text-accent"><Counter to={1} />*</p>
                    <p className="mt-2 uppercase tracking-wider text-cream/80">Phare le plus haut d'Europe</p>
                    <p className="text-xs text-cream/60">*Phare de l'île Vierge</p>
                </AnimatedSection>
                <AnimatedSection delay={0.4}>
                    <p className="text-4xl lg:text-6xl font-display font-bold text-accent"><Counter to={3} /></p>
                    <p className="mt-2 uppercase tracking-wider text-cream/80">Abers à découvrir</p>
                </AnimatedSection>
                <AnimatedSection delay={0.6}>
                    <p className="text-4xl lg:text-6xl font-display font-bold text-accent"><Counter to={84} /> km</p>
                    <p className="mt-2 uppercase tracking-wider text-cream/80">de sentiers côtiers</p>
                </AnimatedSection>
                <AnimatedSection delay={0.8}>
                    <p className="text-4xl lg:text-6xl font-display font-bold text-accent"><Counter to={20} />+</p>
                    <p className="mt-2 uppercase tracking-wider text-cream/80">Plages de sable fin</p>
                </AnimatedSection>
            </div>
        </div>
      </section>

      {/* Section 5: Case Studies/Portfolio */}
      <section className="py-20 lg:py-32 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-baseline mb-12">
                  <div>
                    <p className="text-accent font-semibold uppercase tracking-widest">Bonnes adresses</p>
                    <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-foreground">Pépites locales</h2>
                  </div>
                  <Link href="/restaurants" className="hidden md:inline-flex items-center font-semibold text-primary group min-h-[44px]">
                      Voir tout
                      <ChevronRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {caseStudies.map((study, index) => (
                      <AnimatedSection key={study.title} direction="left" delay={0.2 * index}>
                          <motion.div whileHover={{ y: -4 }} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-8 h-full flex flex-col">
                              <span className="inline-block bg-accent/10 text-accent font-semibold px-3 py-1 rounded-full text-sm self-start">{study.category}</span>
                              <h3 className="font-display text-2xl font-bold mt-4 text-foreground">{study.title}</h3>
                              <p className="mt-2 text-muted-foreground flex-grow">{study.description}</p>
                              <div className="mt-6 pt-6 border-t">
                                <p className="text-sm text-muted-foreground">{study.metric}</p>
                                <p className="font-semibold text-primary text-lg">{study.metricValue}</p>
                              </div>
                          </motion.div>
                      </AnimatedSection>
                  ))}
              </div>
          </div>
      </section>

      {/* Section 6: Trust Bar / Client Logos */}
      <section className="py-12 bg-background border-t border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-muted-foreground mb-8">Nos partenaires et labels de confiance</p>
            <div className="relative w-full overflow-hidden">
                <motion.div 
                    className="flex"
                    animate={{ x: [0, -1200] }} 
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                >
                    {[...logos, ...logos, ...logos].map((logo, index) => (
                        <div key={index} className="flex-shrink-0 w-64 flex items-center justify-center">
                            <span className="text-lg font-medium text-muted-foreground grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                                {logo}
                            </span>
                        </div>
                    ))}
                </motion.div>
                 <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent"></div>
                 <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent"></div>
            </div>
        </div>
      </section>
      
      {/* Sections 7 & 8 are in the Footer component */}
    </>
  );
}