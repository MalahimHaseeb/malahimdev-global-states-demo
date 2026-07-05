"use client";

import { useRef } from "react";
import { counterStore } from "@/store/counterStore";

function useRenderCount() {
  const ref = useRef(0);
  ref.current += 1;
  return ref.current;
}

export default function CounterTestB() {
  const renders = useRenderCount();
  const [count, setCounter] = counterStore.useStore((s) => s.count);

  return (
    <div className="rounded-2xl border bg-card p-4 shadow-sm sm:p-5" style={{ borderColor: "#10b981" }}>
      <div className="flex items-center justify-between gap-2">
        <h3 className="text-sm font-semibold text-card-foreground sm:text-base">
          CounterTestB · page: /test/counter-b
        </h3>
        <span
          className="shrink-0 rounded-full px-2 py-0.5 font-mono text-xs"
          style={{ backgroundColor: "#10b98122", color: "#10b981" }}
        >
          renders: {renders}
        </span>
      </div>
      <p className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">{count}</p>
      <button
        onClick={() => setCounter((p) => ({ count: p.count + 1 }))}
        className="mt-3 rounded-xl bg-primary px-3 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90 active:scale-[0.98]"
      >
        Increment
      </button>
      <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
        This is a completely different page/component, importing the exact
        same counterStore module. If the count above already matches what you
        set on /test/counter-a, cross-page global state works.
      </p>
    </div>
  );
}