import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="pb-32">
      {/* Header */}
      <div className="container mx-auto max-w-7xl px-4 md:px-8 pt-12 pb-8">
        <Link href="/projects" className="inline-flex items-center text-sm font-semibold mb-8 hover:text-muted-foreground transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Projects
        </Link>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <div>
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4">{project.title}</h1>
            <p className="text-xl text-muted-foreground mb-8">{project.description}</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-8 lg:ml-auto">
            <div>
              <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold mb-1">Category</p>
              <p className="font-heading font-bold text-lg">{project.category}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold mb-1">Location</p>
              <p className="font-heading font-bold text-lg">{project.location}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold mb-1">Area</p>
              <p className="font-heading font-bold text-lg">{project.area}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold mb-1">Timeline</p>
              <p className="font-heading font-bold text-lg">{project.timeline}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Image */}
      <div className="w-full aspect-[21/9] bg-muted mb-16 relative">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Gallery */}
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        <h2 className="text-3xl font-heading font-bold mb-8">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {project.gallery.map((img, idx) => (
            <div key={idx} className={`relative aspect-[4/3] bg-muted ${idx === 2 && project.gallery.length % 2 !== 0 ? 'md:col-span-2 aspect-[21/9]' : ''}`}>
              <Image src={img} alt={`${project.title} gallery image ${idx + 1}`} fill className="object-cover rounded-lg" />
            </div>
          ))}
        </div>

        {/* Next Steps */}
        <div className="bg-muted/30 p-12 md:p-24 rounded-2xl text-center flex flex-col items-center">
          <h2 className="text-4xl font-heading font-bold mb-6">Like what you see?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mb-10">We can bring this level of detail and execution to your next project.</p>
          <Button size="lg" asChild className="rounded-full h-14 px-10 text-lg">
            <Link href="/book-call">Book a Consultation</Link>
          </Button>
        </div>
      </div>
    </article>
  );
}
