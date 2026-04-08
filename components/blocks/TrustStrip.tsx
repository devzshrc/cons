export function TrustStrip() {
  return (
    <section className="py-12 border-y bg-muted/30">
      <div className="container mx-auto max-w-7xl px-4 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 items-center text-center">
        <div className="flex flex-col items-center">
          <span className="text-2xl md:text-3xl font-heading font-bold mb-1 text-accent">50+</span>
          <span className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider font-semibold">Projects Delivered</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-2xl md:text-3xl font-heading font-bold mb-1 text-accent">15</span>
          <span className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider font-semibold">Years Experience</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-2xl md:text-3xl font-heading font-bold mb-1 text-accent">₹100Cr+</span>
          <span className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider font-semibold">Value Delivered</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-2xl md:text-3xl font-heading font-bold mb-1 text-accent">MH & KA</span>
          <span className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider font-semibold">Serving Mumbai & BLR</span>
        </div>
      </div>
    </section>
  );
}
