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
        "relative grid shrink-0 place-items-center overflow-hidden bg-icon-surface text-primary-2 ring-1 ring-inset ring-gold/70 shadow-[0_6px_18px_-10px_rgba(3,27,78,0.35)] transition-all duration-300 group-hover:ring-gold group-hover:-translate-y-0.5",
        s.box,
        className,
      )}
      aria-hidden="true"
    >
      <Icon className={cn("relative text-primary-2", s.icon)} strokeWidth={1.75} />
    </span>
  );
}
