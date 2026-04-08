import { HeroSection } from "@/components/blocks/HeroSection";
import { TrustStrip } from "@/components/blocks/TrustStrip";
import { ProjectCard } from "@/components/blocks/ProjectCard";
import { ProcessSection } from "@/components/blocks/ProcessSection";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  const featuredProjects = projects.filter(p => p.featured).slice(0, 3);

  return (
    <>
      <HeroSection />
      <TrustStrip />

      {/* Featured Projects */}
      <section className="py-24">
        <div className="container mx-auto max-w-7xl px-4 md:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-heading font-bold mb-4">Selected Work</h2>
              <p className="text-muted-foreground max-w-2xl text-lg">A showcase of our most recent and defining constructions.</p>
            </div>
            <div className="hidden sm:block">
              <Button variant="outline" asChild className="rounded-full">
                <Link href="/projects">View All Projects</Link>
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {featuredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <div className="sm:hidden mt-8">
             <Button variant="outline" asChild className="w-full rounded-full">
                <Link href="/projects">View All Projects</Link>
             </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-muted/30 border-y">
        <div className="container mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-heading font-bold mb-4">What We Do</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Comprehensive construction services tailored for the most demanding requirements.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(service => (
              <Card key={service.id} className="bg-secondary/50 border-transparent hover:border-accent/40 transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="font-heading font-bold text-xl mb-3 text-primary">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <ProcessSection />

      {/* Testimonials */}
      <section className="py-24">
        <div className="container mx-auto max-w-7xl px-4 md:px-8">
          <h2 className="text-4xl font-heading font-bold mb-16 text-center">Client Trust</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="flex flex-col">
                <p className="text-xl leading-relaxed mb-6 flex-1">&quot;{testimonial.quote}&quot;</p>
                <div>
                  <p className="font-bold font-heading">{testimonial.author}</p>
                  <p className="text-muted-foreground text-sm flex items-center gap-2">
                    {testimonial.role} {testimonial.company && <span>· {testimonial.company}</span>}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-background border-t text-center">
        <div className="container mx-auto max-w-3xl px-4 md:px-8">
          <h2 className="text-5xl md:text-6xl font-heading font-bold mb-8">Ready to build?</h2>
          <p className="text-xl text-muted-foreground mb-12">Let&apos;s discuss your next project and how we can bring it to life.</p>
          <Button size="lg" asChild className="h-16 px-12 text-lg rounded-full">
            <Link href="/book-call">Book a Site Visit</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
