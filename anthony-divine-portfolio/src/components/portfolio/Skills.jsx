import { Reveal } from "./Reveal";
import {
  HtmlIcon,
  CssIcon,
  JavaScriptIcon,
  TailwindIcon,
  ReactIcon,
  GitHubIcon,
  VercelIcon,
  NextIcon,
} from "./TechIcons";

const skills = [
  { name: "HTML", note: "Semantic, accessible markup", Icon: HtmlIcon },
  { name: "CSS", note: "Responsive layouts, Flexbox & Grid", Icon: CssIcon },
  { name: "JavaScript", note: "ES6+, DOM, async data", Icon: JavaScriptIcon },
  {
    name: "Tailwind CSS",
    note: "Utility-first design systems",
    Icon: TailwindIcon,
  },
  { name: "React", note: "Components, state, hooks", Icon: ReactIcon },
  {
    name: "Next.js",
    note: "Routing, SSR and production builds",
    Icon: NextIcon,
  },
  {
    name: "Git & GitHub",
    note: "Version control & collaboration",
    Icon: GitHubIcon,
  },
  { name: "Vercel", note: "Deploying and shipping projects", Icon: VercelIcon },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 border-t border-border bg-surface/40 px-5 py-20 sm:px-8 md:py-28"
    >
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.35fr_0.65fr] md:gap-16">
        <Reveal>
          <p className="label-mono">03 — Tools & Technologies</p>
          <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
            The stack I build with
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            A focused toolkit for building fast, accessible and maintainable
            interfaces — from markup fundamentals to component architecture and
            deployment.
          </p>
        </Reveal>

        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {skills.map((s, i) => (
            <Reveal
              as="li"
              key={s.name}
              delay={i * 60}
              className="card-surface group flex flex-col gap-3 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[var(--shadow-card-hover)] sm:p-5"
            >
              <span className="grid h-12 w-12 place-items-center rounded-lg border border-border bg-secondary/60 transition-colors group-hover:border-accent/40">
                <s.Icon />
              </span>
              <span>
                <span className="block text-sm font-medium text-foreground">
                  {s.name}
                </span>
                <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">
                  {s.note}
                </span>
              </span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
