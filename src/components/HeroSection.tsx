const HeroSection = () => {
  return (
    <section className="hero-gradient grain-overlay relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <div className="relative z-10 max-w-4xl">
        <h1 className="animate-on-scroll mb-6 text-[clamp(2rem,5vw,4.5rem)] font-light uppercase leading-[1.1] tracking-[0.2em] text-foreground">
          North Kollective
          <br />
          <span className="font-normal">Studio</span>
        </h1>

        <p className="animate-on-scroll animate-delay-200 mb-4 font-['Playfair_Display',serif] text-[clamp(1rem,2.5vw,1.5rem)] italic tracking-wide text-primary">
          "Beyond Expected Standards."
        </p>

        <p className="animate-on-scroll animate-delay-300 mx-auto mb-12 max-w-lg text-sm tracking-widest text-muted-foreground uppercase">
          Boutique marketing and creative strategy for brands that lead.
        </p>

        <div className="animate-on-scroll animate-delay-400">
          <span className="inline-block rounded-full border border-primary/30 px-8 py-3 text-xs font-medium uppercase tracking-[0.25em] text-primary transition-colors duration-300 hover:border-primary/60 hover:bg-primary/5">
            Launching Soon
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="animate-on-scroll animate-delay-600 absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="h-12 w-[1px] bg-gradient-to-b from-muted-foreground/40 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
