export default function NewsletterSignup() {
  return (
    <section className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold">Ne manquez rien des Abers !</h2>
          <p className="mt-2 text-white/90">Inscrivez-vous à notre newsletter pour recevoir les dernières actualités, offres et guides de voyage.</p>
          <form className="mt-6 flex flex-col sm:flex-row gap-2">
            <label htmlFor="email-newsletter" className="sr-only">Votre email</label>
            <input 
              id="email-newsletter"
              type="email" 
              placeholder="Votre adresse e-mail"
              className="w-full px-4 py-3 rounded-md text-foreground min-h-[44px] flex-grow"
              aria-label="Email for newsletter"
            />
            <button 
              type="submit" 
              className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-foreground font-bold py-3 px-6 rounded-md min-h-[44px]"
            >
              S'inscrire
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}