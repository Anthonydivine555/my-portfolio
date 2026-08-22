import { Mail, Phone } from "lucide-react";
import { Reveal } from "./Reveal";

const EMAIL = "divineanthony008@gmail.com";
const PHONE = "+2347048724599";

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-border px-5 py-20 sm:px-8 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="label-mono">04 — Contact</p>
          <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">Get in touch</h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            I'd love to hear from you. Reach out for collaborations, roles, or
            just to say hello.
          </p>
        </Reveal>

        <Reveal delay={80} className="mt-10 grid gap-10 md:grid-cols-[0.4fr_0.6fr] md:gap-16">
          <div className="space-y-3">
            <a
              href={`mailto:${EMAIL}`}
              className="card-surface grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4 px-5 py-4 transition-colors hover:border-foreground/30"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-secondary text-foreground">
                <Mail className="h-4 w-4" />
              </span>
              <span className="min-w-0">
                <span className="label-mono block text-[0.65rem]">Email</span>
                <span className="mt-0.5 block truncate text-sm text-foreground">
                  {EMAIL}
                </span>
              </span>
            </a>

            <a
              href={`tel:${PHONE}`}
              className="card-surface grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4 px-5 py-4 transition-colors hover:border-foreground/30"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-secondary text-foreground">
                <Phone className="h-4 w-4" />
              </span>
              <span className="min-w-0">
                <span className="label-mono block text-[0.65rem]">Phone</span>
                <span className="mt-0.5 block truncate text-sm text-foreground">
                  {PHONE}
                </span>
              </span>
            </a>
          </div>

          <form
            action={`mailto:${EMAIL}`}
            method="post"
            encType="text/plain"
            className="card-surface grid gap-4 p-6"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field id="first-name" label="First name" />
              <Field id="last-name" label="Last name" required />
            </div>
            <Field id="email" label="Email" type="email" required />
            <Field id="phone-number" label="Phone number" type="tel" />
            <div className="grid gap-2">
              <label htmlFor="message" className="label-mono text-[0.65rem]">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full resize-y rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/25"
              />
            </div>
            <button
              type="submit"
              className="mt-1 inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Send message
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({ id, label, type = "text", required }) {
  return (
    <div className="grid gap-2">
      <label htmlFor={id} className="label-mono text-[0.65rem]">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/25"
      />
    </div>
  );
}
