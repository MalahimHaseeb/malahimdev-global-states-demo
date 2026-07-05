"use client";

import { useRef } from "react";
import { userStore } from "@/store/userStore";

function useRenderCount() {
  const ref = useRef(0);
  ref.current += 1;
  return ref.current;
}

function StatCard({
  accent,
  title,
  children,
  renders,
  note,
}: {
  accent: string;
  title: string;
  children: React.ReactNode;
  renders: number;
  note?: string;
}) {
  return (
    <div
      className="rounded-2xl border bg-card p-4 shadow-sm sm:p-5"
      style={{ borderColor: accent }}
    >
      <div className="flex items-center justify-between gap-2">
        <h3 className="text-sm font-semibold text-card-foreground sm:text-base">
          {title}
        </h3>
        <span
          className="shrink-0 rounded-full px-2 py-0.5 font-mono text-xs"
          style={{ backgroundColor: `${accent}22`, color: accent }}
        >
          renders: {renders}
        </span>
      </div>
      <div className="mt-2 text-lg font-medium text-foreground sm:text-xl">
        {children}
      </div>
      {note && (
        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
          {note}
        </p>
      )}
    </div>
  );
}

function NameCard() {
  const renders = useRenderCount();
  const [name] = userStore.useStore((s) => s.name);

  return (
    <StatCard accent="#3b82f6" title="NameCard · selector: name" renders={renders}>
      👤 {name}
    </StatCard>
  );
}

function ThemeCard() {
  const renders = useRenderCount();
  const [theme] = userStore.useStore((s) => s.theme);

  return (
    <StatCard accent="#ec4899" title="ThemeCard · selector: theme" renders={renders}>
      🎨 {theme}
    </StatCard>
  );
}

function NoSelectorCard() {
  const renders = useRenderCount();
  const [user] = userStore.useStore();

  return (
    <StatCard
      accent="#ef4444"
      title="NoSelectorCard · whole state"
      renders={renders}
      note="Re-renders on EVERY userStore change — name OR theme. Compare its counter to the two above."
    >
      {user.name} · {user.theme}
    </StatCard>
  );
}

export default function UserTest() {
  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
        <NameCard />
        <ThemeCard />
        <NoSelectorCard />
      </div>

      <div className="flex flex-wrap gap-2 sm:gap-3">
        <button
          onClick={() =>
            userStore.setState((prev) => ({
              ...prev,
              name: prev.name === "Guest" ? "Malahim" : "Guest",
            }))
          }
          className="rounded-xl bg-primary px-3 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90 active:scale-[0.98] sm:px-4"
        >
          Toggle Name
        </button>
        <button
          onClick={() =>
            userStore.setState((prev) => ({
              ...prev,
              theme: prev.theme === "light" ? "dark" : "light",
            }))
          }
          className="rounded-xl bg-secondary px-3 py-2 text-sm font-medium text-secondary-foreground transition hover:opacity-90 active:scale-[0.98] sm:px-4"
        >
          Toggle Theme (test field)
        </button>
        <button
          onClick={() => userStore.reset()}
          className="rounded-xl border border-border bg-transparent px-3 py-2 text-sm font-medium text-foreground transition hover:bg-accent active:scale-[0.98] sm:px-4"
        >
          Reset
        </button>
      </div>
    </div>
  );
}