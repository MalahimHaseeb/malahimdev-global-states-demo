"use client";

import { useRef, useState } from "react";
import { todoStore } from "@/store/todoStore";

function useRenderCount() {
  const ref = useRef(0);
  ref.current += 1;
  return ref.current;
}

export default function TodoTest() {
  const renders = useRenderCount();
  const [todos, setTodos] = todoStore.useStore((s) => s.todos);
  const [text, setText] = useState("");

  const addTodo = () => {
    if (!text.trim()) return;
    setTodos((prev) => ({ todos: [...prev.todos, text.trim()] }));
    setText("");
  };

  // Creates a brand-new array with identical content. With the custom
  // equalityFn on todoStore, this should NOT bump the render counter,
  // proving equality is checked by content, not by reference.
  const noopUpdate = () => {
    setTodos((prev) => ({ todos: [...prev.todos] }));
  };

  return (
    <div className="rounded-2xl border bg-card p-4 shadow-sm sm:p-5" style={{ borderColor: "#f59e0b" }}>
      <div className="flex items-center justify-between gap-2">
        <h3 className="text-sm font-semibold text-card-foreground sm:text-base">
          TodoTest · custom equalityFn on array
        </h3>
        <span
          className="shrink-0 rounded-full px-2 py-0.5 font-mono text-xs"
          style={{ backgroundColor: "#f59e0b22", color: "#f59e0b" }}
        >
          renders: {renders}
        </span>
      </div>

      <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-foreground">
        {todos.map((todo, i) => (
          <li key={i}>{todo}</li>
        ))}
      </ul>

      <div className="mt-3 flex flex-col gap-2 sm:flex-row">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="New todo"
          className="w-full rounded-xl border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground sm:w-auto sm:flex-1"
        />
        <div className="flex flex-wrap gap-2">
          <button
            onClick={addTodo}
            className="rounded-xl bg-primary px-3 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90 active:scale-[0.98]"
          >
            Add (should bump)
          </button>
          <button
            onClick={noopUpdate}
            className="rounded-xl border border-border bg-transparent px-3 py-2 text-sm font-medium text-foreground transition hover:bg-accent active:scale-[0.98]"
          >
            No-op update (should NOT bump)
          </button>
        </div>
      </div>

      <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
        &quot;No-op update&quot; creates a brand-new array with identical
        items. If the custom equalityFn is working, the render counter stays
        put even though a new array reference was set.
      </p>
    </div>
  );
}