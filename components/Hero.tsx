import Image from "next/image";
import { profile, socials } from "@/lib/data";

export default function Hero() {
  const initials = profile.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <section id="about" className="relative">
      <div className="glow pointer-events-none absolute inset-0 -z-10" />
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-6 pt-20 pb-16 text-center sm:pt-28">
        {profile.avatar ? (
          <Image
            src={profile.avatar}
            alt={profile.name}
            width={112}
            height={112}
            className="h-28 w-28 rounded-full border border-white/10 object-cover"
            priority
          />
        ) : (
          <div className="grid h-28 w-28 place-items-center rounded-full border border-white/10 bg-accent/10 text-3xl font-bold text-accent">
            {initials}
          </div>
        )}

        <div className="space-y-4">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
            {profile.role}
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Hi, I&apos;m {profile.name.split(" ")[0]}.
          </h1>
          <p className="mx-auto max-w-xl text-lg text-foreground/70">
            {profile.tagline}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="#projects"
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-white/5"
          >
            Get in touch
          </a>
          {profile.resume && (
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-white/5"
            >
              Résumé
            </a>
          )}
        </div>

        <ul className="flex items-center gap-5 text-sm text-foreground/60">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="transition-colors hover:text-accent"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
