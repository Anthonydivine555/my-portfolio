import { Reveal } from "./Reveal";

const facts = [
  { label: "Experience", value: "2 years" },
  { label: "Focus", value: "Responsive UI" },
  { label: "Background", value: "Chemical Eng." },
  { label: "Stack", value: "React & JS" },
];

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-t border-border bg-surface/40 px-5 py-20 sm:px-8 md:py-28"
    >
      <div className="mx-auto grid max-w-6xl  gap-10 md:grid-cols-[0.35fr_0.65fr] md:gap-16">
        <Reveal>
          <p className="label-mono">01 — About</p>
          <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
            Building interfaces with intent
          </h2>
        </Reveal>

        <div className="min-w-0">
          <Reveal className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              I am a passionate Frontend Developer with over two years of hands-on
              experience building responsive and user-focused web applications. I
              specialize in modern technologies such as HTML, CSS, JavaScript and
              React, with a strong emphasis on writing clean, maintainable and
              scalable code.
            </p>
            <p>
              My journey into tech is driven by curiosity and a commitment to
              continuous learning. Over the past years, I have worked on personal
              and practical projects that strengthened my understanding of
              component-based architecture, state management and efficient UI
              design.
            </p>
            <p>
              I am particularly interested in creating seamless user experiences
              and solving real-world problems through intuitive interfaces. With a
              background in Chemical Engineering, I bring a unique analytical
              perspective to development and aim to bridge the gap between
              engineering and technology. I am continuously improving my skills
              and working towards becoming a highly proficient Frontend Engineer,
              with a long-term goal of integrating data-driven solutions into
              impactful products.
            </p>
          </Reveal>

          <dl className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {facts.map((f, i) => (
              <Reveal
                key={f.label}
                delay={i * 70}
                className="card-surface px-4 py-5"
              >
                <dt className="label-mono text-[0.65rem]">{f.label}</dt>
                <dd className="mt-1.5 text-sm font-medium text-foreground">
                  {f.value}
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
