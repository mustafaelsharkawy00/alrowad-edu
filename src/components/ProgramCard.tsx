import type { ProgramCategory } from "@/lib/site-data";
import { IconTile } from "@/components/IconTile";

export function ProgramCard({ category }: { category: ProgramCategory }) {
  const { icon: Icon, title, description, items } = category;
  return (
    <article className="group card-elevated relative flex h-full flex-col overflow-hidden p-7">
      {/* top reveal bar */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1 origin-right scale-x-0 bg-gradient-to-l from-gold via-accent to-primary transition-transform duration-300 group-hover:scale-x-100" />
      {/* soft corner glow */}
      <div className="pointer-events-none absolute -left-10 -top-10 h-28 w-28 rounded-full bg-accent/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

      <div className="flex items-center gap-4">
        <IconTile icon={Icon} size="lg" />
        <h3 className="text-xl font-extrabold text-primary">{title}</h3>
      </div>

      <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{description}</p>

      <ul className="mt-6 flex flex-wrap gap-2">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-full border border-border/70 bg-secondary px-3 py-1.5 text-xs font-semibold text-secondary-foreground transition-colors group-hover:border-accent/20"
          >
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
