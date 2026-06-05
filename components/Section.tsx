type SectionProps = {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};

export default function Section({ id, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-white/5 py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 text-foreground/60">{subtitle}</p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
