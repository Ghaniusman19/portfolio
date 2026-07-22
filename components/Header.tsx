"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import Nav from "./Nav";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  return (
    <header className="relative border-b border-border/80 bg-background/95 backdrop-blur-xl transition-shadow duration-300 dark:border-border/50 dark:bg-background/95 sm:sticky sm:top-0 sm:z-50">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Logo />

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <Nav links={links} activePath={pathname} />
          </div>

          <ThemeToggle />

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-foreground transition hover:border-border/80 hover:bg-surface-muted focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background dark:border-border/60 dark:bg-surface dark:text-foreground dark:focus:ring-primary sm:hidden"
            aria-expanded={menuOpen}
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            onClick={() => setMenuOpen((value) => !value)}
          >
            <span className="sr-only">Toggle navigation</span>
            {menuOpen ? (
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 4L16 16"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <path
                  d="M16 4L4 16"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 6H17"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <path
                  d="M3 10H17"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <path
                  d="M3 14H17"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div className="sm:hidden">
          <div className="mx-4 mb-4 rounded-3xl border border-border/80 bg-background p-5 shadow-xl shadow-primary/10 dark:bg-surface dark:shadow-primary/15">
            <Nav
              links={links}
              activePath={pathname}
              isMobile
              onLinkClick={() => setMenuOpen(false)}
            />
            <div className="mt-4 flex items-center justify-between gap-3 rounded-3xl border border-border/70 bg-surface p-4 text-sm text-muted dark:bg-surface-muted">
              <span>Theme</span>
              <ThemeToggle />
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
