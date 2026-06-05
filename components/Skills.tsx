import Section from "./Section";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <Section
      id="skills"
      title="Skills & Tech Stack"
      subtitle="The tools and technologies I reach for most often."
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {skills.map((group) => (
          <div
            key={group.category}
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
              {group.category}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-foreground/80"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
