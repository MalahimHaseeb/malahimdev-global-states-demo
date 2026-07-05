"use client";
import dynamic from "next/dynamic";
import { ThemeChanger } from "@/components/theme-changer";

const TodoTest = dynamic(() => import("@/components/TodoTest"), {
  ssr: false,
});

export default function TodosPage() {
  return (
    <main className="min-h-screen bg-background px-4 py-6 sm:px-8 sm:py-8">
      <div className="mx-auto max-w-xl">
        <div className="mb-4 flex items-center justify-between gap-4">
          <h1 className="text-lg font-bold text-foreground sm:text-xl">
            Todo store — custom equalityFn
          </h1>
          <ThemeChanger />
        </div>
        <TodoTest />
      </div>
    </main>
  );
}