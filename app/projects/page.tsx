import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/blocks/ProjectCard";

export default function ProjectsPage() {
  return (
    <div className="pt-24 pb-32">
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-16 md:text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-heading font-bold mb-6">Our Work</h1>
          <p className="text-xl text-muted-foreground">
            Explore our portfolio of high-end residential and commercial projects.
            Built with uncompromising quality and minimal aesthetics.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
