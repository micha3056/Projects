import Section from "./Section";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="A selection of things I've built. Each one taught me something new."
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-accent/40"
          >
            <h3 className="text-lg font-semibold tracking-tight">
              {project.title}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground/60">
              {project.description}
            </p>

            <ul className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-foreground/70"
                >
                  {tag}
                </li>
              ))}
            </ul>

            <div className="mt-5 flex gap-4 text-sm font-medium">
              {project.href && (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent transition-colors hover:text-accent/80"
                >
                  Live →
                </a>
              )}
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 transition-colors hover:text-foreground"
                >
                  Code →
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
