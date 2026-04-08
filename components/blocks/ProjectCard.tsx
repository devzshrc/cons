import Link from "next/link";
import { Project } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <div className="relative aspect-[4/3] mb-4 overflow-hidden rounded-lg bg-muted">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.coverImage}
          alt={project.title}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
        <div className="absolute top-4 right-4 bg-background/90 backdrop-blur text-foreground w-10 h-10 rounded-full flex items-center justify-center opacity-0 -translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <ArrowUpRight className="w-5 h-5" />
        </div>
      </div>
      <div>
        <h3 className="font-heading font-bold text-xl mb-1 group-hover:underline underline-offset-4">{project.title}</h3>
        <p className="text-muted-foreground text-sm uppercase tracking-wider font-semibold">{project.category} · {project.location}</p>
      </div>
    </Link>
  );
}
