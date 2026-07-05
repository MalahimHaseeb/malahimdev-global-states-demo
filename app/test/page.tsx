import Link from "next/link";
import { ThemeChanger } from "@/components/theme-changer";

export default function TestDashboard() {
  const links = [
    { href: "/test/counter-a", label: "Counter — Page A" },
    { href: "/test/counter-b", label: "Counter — Page B (cross-page sync)" },
    { href: "/test/user", label: "User store — selectors + reset" },
    { href: "/test/todos", label: "Todo store — custom equality on arrays" },
  ];

  return (
    <main className="min-h-screen bg-background px-4 py-6 sm:px-8 sm:py-8">
      <div className="mx-auto max-w-xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-lg font-bold text-foreground sm:text-xl">
              @malahimdev/global-state — test dashboard
            </h1>
            <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
              Navigate between these using the links (client-side nav, no
              full reload) to verify state truly persists across pages.
            </p>
          </div>
          <ThemeChanger />
        </div>
        <ul className="mt-6 space-y-2">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium text-card-foreground transition hover:bg-accent"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}