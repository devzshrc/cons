import Image from "next/image";

export default function AboutPage() {
  return (
    <article className="pt-24 pb-32">
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h1 className="text-5xl font-heading font-bold mb-6">About Ajit Constructions</h1>
            <p className="text-xl text-muted-foreground mb-6">
              We started Ajit Constructions because we believed that the construction industry lacked a critical element: <strong className="text-foreground">transparency and design-forward execution.</strong>
            </p>
            <p className="text-xl text-muted-foreground">
              For over a decade, we have been partnering with visionaries, architects, and homeowners to build structures that are as structurally sound as they are beautiful.
            </p>
          </div>
          <div className="relative aspect-square md:aspect-[4/3] bg-muted rounded-xl overflow-hidden">
             <Image 
                src="https://images.unsplash.com/photo-1541888081682-628d09f7b116?q=80&w=2070&auto=format&fit=crop"
                alt="Construction Team"
                fill
                className="object-cover"
                priority
             />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t pt-16">
           <div>
             <h3 className="text-4xl font-heading font-bold mb-4">Quality First</h3>
             <p className="text-muted-foreground text-lg">We use only premium materials and partner with master craftsmen. No shortcuts.</p>
           </div>
           <div>
             <h3 className="text-4xl font-heading font-bold mb-4">Complete Transparency</h3>
             <p className="text-muted-foreground text-lg">Detailed scopes. Fixed margins. You always know exactly what you are paying for.</p>
           </div>
           <div>
             <h3 className="text-4xl font-heading font-bold mb-4">Timeline Integrity</h3>
             <p className="text-muted-foreground text-lg">We build realistic schedules and we stick to them using rigorous project management methods.</p>
           </div>
        </div>
      </div>
    </article>
  );
}
