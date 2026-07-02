import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, MessageCircle } from "lucide-react";
import logo from "@/assets/logo-alrowad.png.asset.json";
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
      <div className="gradient-header border-b border-gold shadow-[0_4px_24px_-16px_rgba(3,27,78,0.8)]">
        <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between gap-4 px-4 sm:h-20 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <img
              src={logo.url}
              alt="شعار الرواد"
              className="h-[60px] w-auto object-contain"
              width={60}
              height={60}
            />
            <span className="sr-only">الرواد</span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="relative rounded-full px-4 py-2 text-sm font-bold text-primary-foreground/80 transition-colors hover:text-gold"
                activeProps={{ className: "text-gold" }}
                activeOptions={{ exact: link.to === "/" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <SocialLinks variant="dark" />
            <span className="h-7 w-px bg-gradient-to-b from-transparent via-gold/60 to-transparent" />
            <Button asChild variant="gold" size="default">
              <a href={WHATSAPP_CTA} target="_blank" rel="noopener noreferrer">
                <MessageCircle />
                تواصل معنا
              </a>
            </Button>
          </div>

          <button
            className="grid h-10 w-10 place-items-center rounded-full text-primary-foreground md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="القائمة"
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="border-t border-gold/40 gradient-header md:hidden">
            <nav className="mx-auto flex max-w-[1400px] flex-col gap-1 px-4 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-base font-bold text-primary-foreground/85 transition-colors hover:bg-primary-foreground/10 hover:text-gold"
                  activeProps={{ className: "bg-primary-foreground/10 text-gold" }}
                  activeOptions={{ exact: link.to === "/" }}
                >
                  {link.label}
                </Link>
              ))}
              <div className="my-2 h-px w-full bg-gradient-to-l from-transparent via-gold/50 to-transparent" />
              <div className="flex items-center justify-between gap-3 px-2">
                <SocialLinks variant="dark" />
                <Button asChild variant="gold">
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
