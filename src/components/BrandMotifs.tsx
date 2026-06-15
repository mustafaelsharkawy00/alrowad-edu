import { cn } from "@/lib/utils";

/**
 * Pointed Islamic gateway arch — the core motif of the Al-Rowad logo.
 * Rendered as concentric outlines for institutional depth.
 */
export function GatewayArch({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 260"
      fill="none"
      aria-hidden="true"
      className={className}
      preserveAspectRatio="xMidYMax meet"
    >
      <path
        d="M24 260 V108 Q24 34 100 6 Q176 34 176 108 V260"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.9"
      />
      <path
        d="M40 260 V112 Q40 52 100 28 Q160 52 160 112 V260"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.55"
      />
      <path
        d="M56 260 V116 Q56 70 100 50 Q144 70 144 116 V260"
        stroke="currentColor"
        strokeWidth="1.25"
        opacity="0.32"
      />
    </svg>
  );
}

/**
 * Winding "knowledge path" ascending from the open book through the gateway.
 * Milestone nodes echo the educational journey + technology accents.
 */
export function KnowledgePath({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 240"
      fill="none"
      aria-hidden="true"
      className={className}
      preserveAspectRatio="xMidYMax meet"
    >
      <path
        d="M60 236 C28 196 92 166 60 124 C28 82 86 54 60 8"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.5"
      />
      <g fill="currentColor">
        <circle cx="60" cy="232" r="5" opacity="0.85" />
        <circle cx="74" cy="178" r="4" opacity="0.7" />
        <circle cx="48" cy="124" r="4" opacity="0.7" />
        <circle cx="72" cy="70" r="4" opacity="0.7" />
        <circle cx="60" cy="14" r="5.5" opacity="0.95" />
      </g>
    </svg>
  );
}

/**
 * Subtle technology-inspired node constellation accent.
 */
export function NodeConstellation({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 120"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <g stroke="currentColor" strokeWidth="1" opacity="0.4">
        <path d="M20 90 L70 40 L120 70 L170 24" />
        <path d="M70 40 L90 96 L150 92" />
      </g>
      <g fill="currentColor">
        <circle cx="20" cy="90" r="3.5" />
        <circle cx="70" cy="40" r="4" />
        <circle cx="120" cy="70" r="3.5" />
        <circle cx="170" cy="24" r="4" />
        <circle cx="90" cy="96" r="3" />
        <circle cx="150" cy="92" r="3.5" />
      </g>
    </svg>
  );
}

/** Decorative gold rule with center diamond — echoes the logo tagline divider. */
export function GoldDivider({ className }: { className?: string }) {
  return (
    <div
      className={cn("flex items-center justify-center gap-3 text-gold", className)}
      aria-hidden="true"
    >
      <span className="h-px w-12 bg-gradient-to-l from-transparent to-current opacity-70 sm:w-20" />
      <span className="size-1.5 rotate-45 bg-current" />
      <span className="size-2 rotate-45 border border-current" />
      <span className="size-1.5 rotate-45 bg-current" />
      <span className="h-px w-12 bg-gradient-to-r from-transparent to-current opacity-70 sm:w-20" />
    </div>
  );
}
