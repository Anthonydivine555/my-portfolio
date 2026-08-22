import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/data/projects";
import { Reveal } from "./Reveal";

export function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 border-t border-border px-5 py-20 sm:px-8 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="grid gap-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
          <div className="min-w-0">
            <p className="label-mono">02 — Projects</p>
            <h2 className="mt-3 text-2xl sm:text-3xl">Selected work</h2>
          </div>
          <p className="text-sm text-muted-foreground">
            {projects.length} projects
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal
              as="article"
              key={p.name}
              delay={(i % 3) * 80}
              className="card-surface group flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[var(--shadow-card-hover)]"
            >
              <a
                href={p.website}
                target="_blank"
                rel="noreferrer noopener"
                className="block overflow-hidden border-b border-border bg-secondary"
              >
                <img
                  src={p.thumbnail}
                  alt={`${p.name} project screenshot`}
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </a>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="min-w-0 text-base font-medium text-foreground">
                  {p.name}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {p.languages.map((l) => (
                    <span
                      key={l}
                      className="rounded-md border border-border bg-secondary/60 px-2 py-1 font-mono text-[0.7rem] text-muted-foreground"
                    >
                      {l}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap items-center gap-2 pt-6">
                  <a
                    href={p.website}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                  >
                    Live site
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent/50 hover:bg-secondary"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
