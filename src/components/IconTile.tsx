import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type IconTileSize = "sm" | "md" | "lg";

const sizeMap: Record<IconTileSize, { box: string; icon: string }> = {
  sm: { box: "h-11 w-11 rounded-xl", icon: "h-5 w-5" },
  md: { box: "h-14 w-14 rounded-2xl", icon: "h-7 w-7" },
  lg: { box: "h-16 w-16 rounded-2xl", icon: "h-8 w-8" },
};

/**
 * Unified premium icon system for Al-Rowad.
 * Navy gradient tile · sky-blue glyph · subtle gold corner accent.
 * Reacts to a parent `.group` hover for cohesive motion across the site.
 */
export function IconTile({
  icon: Icon,
  size = "md",
  className,
}: {
  icon: LucideIcon;
  size?: IconTileSize;
  className?: string;
}) {
  const s = sizeMap[size];
  return (
    <span
      className={cn(
        "relative grid shrink-0 place-items-center overflow-hidden tile-navy text-primary-foreground shadow-[0_8px_24px_-12px_color-mix(in_oklab,var(--primary)_60%,transparent)] ring-1 ring-inset ring-primary-foreground/10 transition-all duration-300 group-hover:ring-gold/50 group-hover:shadow-[0_14px_30px_-12px_color-mix(in_oklab,var(--accent)_55%,transparent)]",
        s.box,
        className,
      )}
      aria-hidden="true"
    >
      {/* gold corner accent */}
      <span className="pointer-events-none absolute -right-3 -top-3 h-7 w-7 rounded-full bg-gold/30 blur-md transition-opacity duration-300 group-hover:bg-gold/50" />
      <Icon className={cn("relative text-accent transition-colors duration-300 group-hover:text-primary-foreground", s.icon)} strokeWidth={1.75} />
    </span>
  );
}
