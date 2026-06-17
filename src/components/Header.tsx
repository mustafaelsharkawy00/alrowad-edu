import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, MessageCircle } from "lucide-react";
import logo from "@/assets/alrowad-logo.png.asset.json";
import { Button } from "@/components/ui/button";
import { SocialLinks } from "@/components/SocialLinks";
import { WHATSAPP_CTA } from "@/lib/site-data";

const navLinks = [
  { to: "/", label: "الرئيسية" },
  { to: "/programs", label: "البرامج" },
  { to: "/contact", label: "تواصل معنا" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Thin premium gold→navy top accent */}
      <div className="h-[3px] w-full bg-gradient-to-l from-transparent via-gold to-transparent opacity-90" />
      <div className="glass-nav border-b border-border/60 shadow-[0_4px_24px_-18px_color-mix(in_oklab,var(--primary)_60%,transparent)]">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:h-20 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <img
              src={logo.url}
              alt="شعار الرواد"
              className="h-12 w-auto drop-shadow-[0_6px_14px_color-mix(in_oklab,var(--primary)_22%,transparent)] sm:h-16"
              width={120}
              height={120}
            />
            <span className="sr-only">الرواد</span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="relative rounded-full px-4 py-2 text-sm font-bold text-foreground/75 transition-colors hover:text-primary"
                activeProps={{ className: "text-primary" }}
                activeOptions={{ exact: link.to === "/" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <SocialLinks />
            <span className="h-7 w-px bg-gradient-to-b from-transparent via-gold/50 to-transparent" />
            <Button asChild variant="whatsapp" size="default">
              <a href={WHATSAPP_CTA} target="_blank" rel="noopener noreferrer">
                <MessageCircle />
                تواصل معنا
              </a>
            </Button>
          </div>

          <button
            className="grid h-10 w-10 place-items-center rounded-full text-primary md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="القائمة"
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="border-t border-border bg-background md:hidden">
            <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-base font-bold text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
                  activeProps={{ className: "bg-secondary text-primary" }}
                  activeOptions={{ exact: link.to === "/" }}
                >
                  {link.label}
                </Link>
              ))}
              <div className="my-2 h-px w-full bg-gradient-to-l from-transparent via-gold/40 to-transparent" />
              <div className="flex items-center justify-between gap-3 px-2">
                <SocialLinks />
                <Button asChild variant="whatsapp">
                  <a href={WHATSAPP_CTA} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
                    <MessageCircle />
                    تواصل معنا
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
