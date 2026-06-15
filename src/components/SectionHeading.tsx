import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "dark",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "start";
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-right",
        className,
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold tracking-wide",
            tone === "dark" ? "bg-secondary text-primary" : "bg-primary-foreground/10 text-gold",
          )}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "mt-4 text-3xl font-extrabold leading-tight text-balance sm:text-4xl",
          tone === "dark" ? "text-primary" : "text-primary-foreground",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            tone === "dark" ? "text-muted-foreground" : "text-primary-foreground/70",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
