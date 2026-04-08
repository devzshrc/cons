export default function BookCallPage() {
  return (
    <div className="pt-24 pb-32 flex flex-col justify-center items-center h-full min-h-[80vh]">
      <div className="container mx-auto max-w-4xl px-4 md:px-8 text-center">
        <h1 className="text-5xl font-heading font-bold mb-6">Book a Site Visit or Consultation</h1>
        <p className="text-xl text-muted-foreground mb-12">
          Select a time below that works for you. We look forward to learning about your project.
        </p>

        {/* Cal.com embed placeholder - standard iframe since this is purely frontend */}
        <div className="w-full max-w-5xl mx-auto rounded-2xl overflow-hidden border bg-background shadow-xl h-[700px] flex items-center justify-center relative">
          <iframe 
            src="https://cal.com/de5ash1zh" 
            title="Book a consultation"
            className="w-full h-full relative z-10 bg-transparent"
            frameBorder="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
