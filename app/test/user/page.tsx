"use client";
import dynamic from "next/dynamic";
import { ThemeChanger } from "@/components/theme-changer";

const UserTest = dynamic(() => import("@/components/UserTest"), {
  ssr: false,
});

export default function UserPage() {
  return (
    <main className="min-h-screen bg-background px-4 py-6 sm:px-8 sm:py-8">
      <div className="mx-auto max-w-3xl">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h1 className="text-lg font-bold text-foreground sm:text-xl">
              User store — selectors, custom equality, reset
            </h1>
            <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
              Toggle site dark mode here, or the store&apos;s own theme field
              below — they&apos;re independent.
            </p>
          </div>
          <ThemeChanger />
        </div>
        <div className="mt-5 sm:mt-6">
          <UserTest />
        </div>
      </div>
    </main>
  );
}