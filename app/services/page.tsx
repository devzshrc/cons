import { services } from "@/data/services";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ProcessSection } from "@/components/blocks/ProcessSection";

export default function ServicesPage() {
  return (
    <>
      <div className="pt-24 pb-16">
        <div className="container mx-auto max-w-7xl px-4 md:px-8">
          <div className="max-w-3xl mb-16">
            <h1 className="text-5xl font-heading font-bold mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground">
              We specialize in creating meticulously crafted spaces. From initial
              concept to final handover, we provide end-to-end management and
              execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            {services.map((service) => (
              <Card key={service.id} className="bg-background border-border">
                <CardContent className="p-10 flex flex-col h-full">
                  <h3 className="font-heading font-bold text-2xl mb-4">{service.title}</h3>
                  <p className="text-muted-foreground text-lg flex-1 mb-8">
                    {service.description}
                  </p>
                  <Button variant="outline" asChild className="self-start rounded-full">
                    <Link href="/projects">View Related Work</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      
      <ProcessSection />

      <section className="py-24 bg-background text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold mb-8">Discuss Your Scope</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Not sure which service fits your project? Book a consultation and we can align on the requirements.
          </p>
          <Button size="lg" asChild className="rounded-full">
             <Link href="/book-call">Book a Consultation</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
