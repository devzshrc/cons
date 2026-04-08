import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_50%,var(--color-secondary)_0%,transparent_100%)] opacity-40" />
      <div className="container mx-auto max-w-5xl px-4 md:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading font-bold tracking-tight mb-6 md:mb-8 leading-[1.1] uppercase">
          Precision construction for <br className="hidden md:block" />
          <span className="text-accent">modern</span> spaces.
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 md:mb-12 max-w-2xl mx-auto">
          We build high-end residential and commercial properties with unmatched precision. 
          Transparent processes, guaranteed quality, delivered on time.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" asChild className="w-full sm:w-auto h-14 px-8 text-base rounded-full">
            <Link href="/book-call">Book Consultation</Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="w-full sm:w-auto h-14 px-8 text-base rounded-full">
            <Link href="/projects">View Our Work</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
