export function ProcessSection() {
  const steps = [
    { num: "01", title: "Inquiry & Consultation", desc: "We discuss your vision, budget, and timeline to ensure we are the right fit." },
    { num: "02", title: "Design & Estimating", desc: "Detailed plans and transparent cost breakdowns are finalized." },
    { num: "03", title: "Pre-Construction", desc: "Permits, material sourcing, and site preparation begin." },
    { num: "04", title: "Execution", desc: "Our teams build your project with precision and uncompromising quality." },
    { num: "05", title: "Handover", desc: "Final walkthrough and delivery of your completed space." },
  ];

  return (
    <section className="py-16 md:py-24 bg-foreground text-background">
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Our Process</h2>
          <p className="text-xl text-muted max-w-2xl">Structured for transparency. Designed for execution.</p>
        </div>
        
        <div className="space-y-12">
          {steps.map((step, idx) => (
            <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 border-b border-background/20 pb-12 last:border-0 last:pb-0">
              <div className="md:col-span-2">
                <span className="text-4xl font-heading font-light opacity-50">{step.num}</span>
              </div>
              <div className="md:col-span-4">
                <h3 className="text-2xl font-bold font-heading">{step.title}</h3>
              </div>
              <div className="md:col-span-6">
                <p className="text-lg text-muted/80">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
