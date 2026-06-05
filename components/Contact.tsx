import Section from "./Section";
import { profile, socials } from "@/lib/data";

export default function Contact() {
  return (
    <Section
      id="contact"
      title="Get in touch"
      subtitle="Have a project in mind, a question, or just want to say hi? My inbox is open."
    >
      <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 text-center sm:p-12">
        <a
          href={`mailto:${profile.email}`}
          className="text-xl font-semibold text-accent transition-colors hover:text-accent/80 sm:text-2xl"
        >
          {profile.email}
        </a>
        <p className="mx-auto mt-4 max-w-md text-sm text-foreground/60">
          Based in {profile.location}. I usually reply within a day or two.
        </p>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-3">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-white/5 hover:text-foreground"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
