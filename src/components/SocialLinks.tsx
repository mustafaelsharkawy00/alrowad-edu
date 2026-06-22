import {
  FACEBOOK_LINK,
  INSTAGRAM_LINK,
  SNAPCHAT_LINK,
  THREADS_LINK,
  TIKTOK_LINK,
  WHATSAPP_LINK,
  X_LINK,
} from "@/lib/site-data";
import { cn } from "@/lib/utils";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M.06 24l1.69-6.16a11.87 11.87 0 0 1-1.6-5.96C.16 5.34 5.5 0 12.06 0a11.82 11.82 0 0 1 8.41 3.49 11.82 11.82 0 0 1 3.48 8.42c0 6.56-5.34 11.9-11.9 11.9a11.9 11.9 0 0 1-5.68-1.45L.06 24Zm6.6-3.8c1.68.99 3.28 1.59 5.4 1.59 5.45 0 9.89-4.43 9.89-9.88a9.84 9.84 0 0 0-2.9-7A9.83 9.83 0 0 0 12.06 2c-5.46 0-9.9 4.44-9.9 9.89 0 2.2.64 3.85 1.72 5.58l-1 3.66 3.78-.93Zm11.39-5.46c-.07-.12-.27-.2-.57-.35-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.18-1.42Z" />
    </svg>
  );
}


function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.69.24 2.69.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07Z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16Zm0 1.62c-3.15 0-3.52.01-4.76.07-1.15.05-1.77.24-2.19.4-.55.22-.94.47-1.35.88-.41.41-.66.8-.88 1.35-.16.42-.35 1.04-.4 2.19-.06 1.24-.07 1.61-.07 4.76s.01 3.52.07 4.76c.05 1.15.24 1.77.4 2.19.22.55.47.94.88 1.35.41.41.8.66 1.35.88.42.16 1.04.35 2.19.4 1.24.06 1.61.07 4.76.07s3.52-.01 4.76-.07c1.15-.05 1.77-.24 2.19-.4.55-.22.94-.47 1.35-.88.41-.41.66-.8.88-1.35.16-.42.35-1.04.4-2.19.06-1.24.07-1.61.07-4.76s-.01-3.52-.07-4.76c-.05-1.15-.24-1.77-.4-2.19a3.6 3.6 0 0 0-.88-1.35 3.6 3.6 0 0 0-1.35-.88c-.42-.16-1.04-.35-2.19-.4-1.24-.06-1.61-.07-4.76-.07Zm0 2.76a5.46 5.46 0 1 0 0 10.92 5.46 5.46 0 0 0 0-10.92Zm0 9a3.54 3.54 0 1 1 0-7.08 3.54 3.54 0 0 1 0 7.08Zm5.68-9.22a1.28 1.28 0 1 1-2.55 0 1.28 1.28 0 0 1 2.55 0Z" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16.6 5.82a4.28 4.28 0 0 1-1.05-2.82h-3.1v12.4a2.59 2.59 0 0 1-2.59 2.5 2.59 2.59 0 1 1 .74-5.07V9.66a5.68 5.68 0 0 0-.74-.05A5.68 5.68 0 1 0 15.54 15V9.01a7.34 7.34 0 0 0 4.3 1.38V7.3a4.28 4.28 0 0 1-3.24-1.48Z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25h6.83l4.713 6.231 5.447-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644Z" />
    </svg>
  );
}

function ThreadsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.18 22.5h-.05c-3.06-.02-5.4-1.03-6.97-3C3.76 17.74 3 15.4 3 12.51v-.02c0-2.89.76-5.23 2.16-6.99C6.73 3.53 9.07 2.52 12.13 2.5h.05c2.35.02 4.31.62 5.83 1.8a7.04 7.04 0 0 1 2.34 3.41l-1.92.67a4.7 4.7 0 0 0-1.6-2.41c-1.13-.86-2.66-1.31-4.55-1.32-2.46.02-4.27.8-5.4 2.22-1.05 1.33-1.6 3.23-1.6 5.66s.55 4.33 1.6 5.66c1.13 1.42 2.94 2.2 5.4 2.22 2.22-.02 3.69-.55 4.7-1.55.9-.9 1.42-2.13 1.65-3.32-.86-.5-1.94-.82-3.16-.93-.06.86-.32 1.55-.78 2.06-.6.66-1.46.99-2.55.99-1.06 0-1.96-.37-2.55-1.04a2.7 2.7 0 0 1-.66-1.93c.06-1.74 1.62-2.93 3.86-2.93.5 0 .98.03 1.43.09-.05-.74-.27-1.3-.66-1.66-.4-.37-.99-.56-1.74-.57h-.04c-.74 0-1.74.2-2.37 1.17l-1.63-1.1c.85-1.3 2.27-2.02 4-2.02h.06c2.9.02 4.62 1.81 4.79 4.92.1.04.2.09.3.13 1.4.66 2.42 1.66 2.96 2.9.75 1.71.82 4.5-1.45 6.75-1.74 1.72-3.85 2.5-6.83 2.52Zm-.34-9.05c-1.4 0-1.97.69-1.99 1.27-.01.5.46 1.06 1.42 1.06.62 0 1.06-.18 1.36-.51.3-.34.49-.86.55-1.55a6.3 6.3 0 0 0-1.34-.27Z" />
    </svg>
  );
}

function SnapchatIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.2 2.04c.55.01 2.2.13 3.34 1.4.63.7.9 1.6.97 2.65.04.61.03 1.21 0 1.74 0 .07-.01.18-.02.32.16.09.4.18.7.18.36-.01.75-.13 1.16-.36a.66.66 0 0 1 .3-.08c.16 0 .31.05.43.13.27.18.35.5.21.78-.16.34-.66.6-1.5.94-.1.04-.22.08-.34.12-.42.14-1.06.36-1.23.77-.09.21-.05.48.11.8l.01.02c.06.13 1.43 3.06 4.28 3.53.21.04.36.22.35.43 0 .06-.01.12-.04.18-.2.46-1.04.8-2.57 1.04-.05.07-.1.32-.14.49-.04.16-.08.32-.14.5-.06.2-.21.31-.43.31h-.04c-.14 0-.34-.03-.6-.08a5.3 5.3 0 0 0-1.07-.12c-.24 0-.49.02-.74.06-.49.08-.9.38-1.39.72-.69.49-1.47 1.04-2.66 1.04l-.16-.01h-.12c-1.19 0-1.97-.55-2.66-1.04-.49-.34-.9-.64-1.39-.72a4.7 4.7 0 0 0-.74-.06c-.42 0-.78.07-1.07.13-.24.04-.45.08-.6.08-.27 0-.42-.16-.47-.33a8.4 8.4 0 0 1-.14-.5c-.04-.17-.09-.42-.14-.49-1.53-.24-2.37-.58-2.57-1.05a.55.55 0 0 1-.04-.18.43.43 0 0 1 .35-.43c2.85-.47 4.22-3.4 4.28-3.53l.01-.02c.16-.32.2-.59.11-.8-.17-.41-.81-.63-1.23-.77-.12-.04-.24-.08-.34-.12-1.07-.42-1.46-.88-1.4-1.27.05-.31.4-.52.7-.52.09 0 .17.02.24.05.44.21.83.32 1.18.32.34 0 .57-.1.72-.18l-.02-.32a16.2 16.2 0 0 1 0-1.74c.07-1.05.34-1.95.97-2.65 1.14-1.27 2.79-1.39 3.34-1.4h.27Z" />
    </svg>
  );
}

const socials = [
  { label: "واتساب", handle: "تواصل مباشر", href: WHATSAPP_LINK, Icon: WhatsAppIcon },
  { label: "إنستغرام", handle: "@alrowad_edu", href: INSTAGRAM_LINK, Icon: InstagramIcon },
  { label: "تيك توك", handle: "@alrowad.edu", href: TIKTOK_LINK, Icon: TikTokIcon },
  { label: "فيسبوك", handle: "Al-Rowad", href: FACEBOOK_LINK, Icon: FacebookIcon },
  { label: "إكس", handle: "@AlRowadedu", href: X_LINK, Icon: XIcon },
  { label: "ثريدز", handle: "@alrowad_edu", href: THREADS_LINK, Icon: ThreadsIcon },
  { label: "سناب شات", handle: "alrowad.edu", href: SNAPCHAT_LINK, Icon: SnapchatIcon },
];

export function SocialLinks({
  className,
  variant = "light",
}: {
  className?: string;
  variant?: "light" | "dark";
}) {
  return (
    <div className={cn("flex flex-wrap items-center gap-2.5", className)}>
      {socials.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          title={label}
          className={cn(
            "group grid h-10 w-10 place-items-center rounded-xl ring-1 ring-inset transition-all duration-300 hover:-translate-y-1 hover:scale-105",
            variant === "light"
              ? "bg-secondary text-primary ring-border hover:bg-primary hover:text-primary-foreground hover:ring-gold/60"
              : "bg-primary-foreground/10 text-primary-foreground ring-primary-foreground/15 hover:bg-gold hover:text-gold-foreground hover:ring-gold",
          )}
        >
          <Icon className="h-[1.15rem] w-[1.15rem] transition-transform duration-300 group-hover:scale-110" />
        </a>
      ))}
    </div>
  );
}

/**
 * Premium social cards — each card reacts as a whole on hover:
 * border, icon background, and icon color shift together with the gold accent.
 */
export function SocialCards({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-4 lg:grid-cols-4",
        className,
      )}
    >
      {socials.map(({ label, handle, href, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          title={label}
          className="group flex items-center gap-4 rounded-[14px] border border-border bg-card p-4 shadow-[0_8px_25px_rgba(3,27,78,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-[0_16px_40px_rgba(3,27,78,0.14)]"
        >
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-icon-surface text-primary-2 transition-all duration-300 group-hover:bg-gold group-hover:text-primary-foreground">
            <Icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
          </span>
          <span className="min-w-0">
            <span className="block truncate font-extrabold text-primary">
              {label}
            </span>
            <span className="block truncate text-xs text-muted-foreground transition-colors group-hover:text-gold" dir="ltr">
              {handle}
            </span>
          </span>
        </a>
      ))}
    </div>
  );
}
