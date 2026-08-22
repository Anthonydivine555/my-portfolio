import { Facebook, Linkedin, Twitter, ArrowUp } from "lucide-react";

const socials = [
  {
    href: "https://www.linkedin.com/in/anthony-divine-27ab94318",
    label: "LinkedIn",
    Icon: Linkedin,
  },
  {
    href: "https://www.facebook.com/divine.anthony.927297",
    label: "Facebook",
    Icon: Facebook,
  },
  { href: "https://x.com/tony_d555", label: "X (Twitter)", Icon: Twitter },
];

export function Footer() {
  return (
    <footer className="border-t border-border px-5 py-10 sm:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
        <p className="min-w-0 text-sm text-muted-foreground">
          © {new Date().getFullYear()} Anthony Divine. All rights reserved.
        </p>

        <div className="flex items-center gap-2">
          {socials.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={label}
              className="grid h-9 w-9 place-items-center rounded-md border border-border text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
          <a
            href="#home"
            className="ml-2 inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-2 text-sm text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
