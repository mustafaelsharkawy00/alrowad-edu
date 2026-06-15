import type { ProgramCategory } from "@/lib/site-data";

export function ProgramCard({ category }: { category: ProgramCategory }) {
  const { icon: Icon, title, description, items } = category;
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-card">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1 origin-right scale-x-0 bg-gradient-to-l from-accent to-primary transition-transform duration-300 group-hover:scale-x-100" />
      <div className="flex items-center gap-4">
        <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-primary text-primary-foreground transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
          <Icon className="h-7 w-7" />
        </div>
        <h3 className="text-xl font-extrabold text-primary">{title}</h3>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{description}</p>

      <ul className="mt-6 flex flex-wrap gap-2">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-full bg-secondary px-3 py-1.5 text-xs font-semibold text-secondary-foreground"
          >
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
