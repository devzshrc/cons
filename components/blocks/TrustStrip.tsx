export function TrustStrip() {
  return (
    <section className="py-12 border-y bg-muted/30">
      <div className="container mx-auto max-w-7xl px-4 md:px-8 flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-4 text-center">
        <div className="flex flex-col items-center">
          <span className="text-3xl font-heading font-bold mb-1">50+</span>
          <span className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Projects Delivered</span>
        </div>
        <div className="hidden md:block w-px h-12 bg-border"></div>
        <div className="flex flex-col items-center">
          <span className="text-3xl font-heading font-bold mb-1">15</span>
          <span className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Years Experience</span>
        </div>
        <div className="hidden md:block w-px h-12 bg-border"></div>
        <div className="flex flex-col items-center">
          <span className="text-3xl font-heading font-bold mb-1">$120M+</span>
          <span className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Value Delivered</span>
        </div>
        <div className="hidden md:block w-px h-12 bg-border"></div>
        <div className="flex flex-col items-center">
          <span className="text-3xl font-heading font-bold mb-1">CA & NY</span>
          <span className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Locations Served</span>
        </div>
      </div>
    </section>
  );
}
