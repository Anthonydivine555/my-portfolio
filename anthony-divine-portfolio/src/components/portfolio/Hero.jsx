import { ArrowRight, Mail, MapPin } from "lucide-react";
import portrait from "../../assets/divine.png";
import {
  HtmlIcon,
  CssIcon,
  JavaScriptIcon,
  TailwindIcon,
  ReactIcon,
  NextIcon,
} from "./TechIcons";

const stack = [
  { name: "HTML", Icon: HtmlIcon },
  { name: "CSS", Icon: CssIcon },
  { name: "JavaScript", Icon: JavaScriptIcon },
  { name: "Tailwind CSS", Icon: TailwindIcon },
  { name: "React", Icon: ReactIcon },
  { name: "Next.js", Icon: NextIcon },
];

export function Hero() {
  return (
    <section
      id="home"
      className="scroll-mt-24 px-5 pt-25 pb-16 sm:px-8 md:pt-40 md:pb-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 md:grid-cols-[1.05fr_0.95fr] md:gap-16">
          <div className="rise min-w-0">
            <p className="label-mono inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-[0.65rem]">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
              Available for work
            </p>

            <h1 className="mt-6 font-display text-[2.1rem] leading-[1.12] sm:text-[2.75rem] md:text-[3.1rem]">
              I Build &amp; Ship{" "}
              <span className="text-accent">Impactful Interfaces</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              Hi! I'm Anthony Divine, a frontend developer obsessed with clean,
              responsive and accessible web experiences. I turn designs into
              fast, maintainable interfaces with React, Next.js, JavaScript and
              Tailwind CSS.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:-translate-y-0.5 hover:opacity-90"
              >
                Take me to projects
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent/50 hover:bg-secondary"
              >
                <Mail className="h-4 w-4" />
                Let's work together
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4" /> Nigeria — remote friendly
              </span>
              <span>2 years building for the web</span>
            </div>
          </div>

          <div className="rise relative mx-auto w-full max-w-sm md:max-w-none">
            <div className="overflow-hidden rounded-3xl border border-border bg-surface shadow-[var(--shadow-card)]">
              <img
                src={portrait}
                alt="Portrait of Anthony Divine, frontend developer"
                width={720}
                height={880}
                loading="eager"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-border pt-8">
          <p className="label-mono text-center text-[0.65rem]">
            Proudly building with these technologies
          </p>
          <ul className="mt-5 flex flex-wrap items-center justify-center gap-3 sm:gap-5">
            {stack.map(({ name, Icon }) => (
              <li
                key={name}
                title={name}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2"
              >
                <Icon className="h-4 w-4" />
                <span className="text-xs text-muted-foreground">{name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
