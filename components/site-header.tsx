"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeChanger } from "@/components/theme-changer";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/test", label: "Dashboard" },
  { href: "/test/counter-a", label: "Counter A" },
  { href: "/test/counter-b", label: "Counter B" },
  { href: "/test/user", label: "User" },
  { href: "/test/todos", label: "Todos" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="shrink-0 font-display text-base font-semibold text-foreground sm:text-lg"
        >
          global-state
        </Link>

        <nav className="scrollbar-none flex flex-1 items-center gap-1 overflow-x-auto sm:gap-2">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/test"
                ? pathname === "/test"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "shrink-0 rounded-lg px-2.5 py-1.5 text-xs font-medium transition sm:text-sm",
                  isActive
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="shrink-0">
          <ThemeChanger />
        </div>
      </div>
    </header>
  );
}