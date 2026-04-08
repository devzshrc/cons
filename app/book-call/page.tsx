export default function BookCallPage() {
  return (
    <div className="pt-24 pb-32 flex flex-col justify-center items-center h-full min-h-[80vh]">
      <div className="container mx-auto max-w-4xl px-4 md:px-8 text-center">
        <h1 className="text-5xl font-heading font-bold mb-6">Book a Site Visit or Consultation</h1>
        <p className="text-xl text-muted-foreground mb-12">
          Select a time below that works for you. We look forward to learning about your project.
        </p>

        {/* Cal.com embed placeholder - standard iframe since this is purely frontend */}
        <div className="w-full max-w-3xl mx-auto rounded-xl overflow-hidden border bg-background shadow-sm h-[600px] flex items-center justify-center relative">
          <div className="absolute inset-0 bg-muted flex flex-col items-center justify-center text-center p-8 z-0">
             <h3 className="font-heading font-bold text-2xl mb-2">Cal.com Widget Area</h3>
             <p className="text-muted-foreground">This is where the Cal.com embed is injected. Once you have an account, you replace the generic code block here with your personal snippet.</p>
          </div>
          {/* This is a visual representation for the MVP as instructed in the spec */}
          <iframe 
            src="https://cal.com/rick" 
            title="Book a consultation"
            className="w-full h-full relative z-10 bg-transparent"
            frameBorder="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
