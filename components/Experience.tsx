import Section from "./Section";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <Section
      id="experience"
      title="Experience"
      subtitle="Where I've worked and studied along the way."
    >
      <ol className="relative border-l border-white/10 pl-6">
        {experience.map((item) => (
          <li key={`${item.org}-${item.period}`} className="mb-10 last:mb-0">
            <span className="absolute -left-[7px] mt-1.5 h-3 w-3 rounded-full border-2 border-background bg-accent" />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h3 className="text-lg font-semibold tracking-tight">
                {item.role}
              </h3>
              <span className="text-sm text-foreground/50">{item.period}</span>
            </div>
            <p className="text-sm font-medium text-accent">{item.org}</p>
            <p className="mt-2 text-sm leading-relaxed text-foreground/60">
              {item.description}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
