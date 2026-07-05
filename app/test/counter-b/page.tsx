"use client";
import dynamic from "next/dynamic";
import { ThemeChanger } from "@/components/theme-changer";

const CounterTestB = dynamic(() => import("@/components/CounterTestB"), {
  ssr: false,
});

export default function CounterPageB() {
  return (
    <main className="min-h-screen bg-background px-4 py-6 sm:px-8 sm:py-8">
      <div className="mx-auto max-w-xl">
        <div className="mb-4 flex items-center justify-between gap-4">
          <h1 className="text-lg font-bold text-foreground sm:text-xl">
            Counter — Page B
          </h1>
          <ThemeChanger />
        </div>
        <CounterTestB />
      </div>
    </main>
  );
}