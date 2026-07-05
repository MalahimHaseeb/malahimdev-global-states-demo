"use client";
import { createGlobalStore } from "@malahimdev/global-state";

export interface TodoState {
  todos: string[];
}

// Custom equality: compare arrays by content, not by reference.
// Without this, setting a "new" array with identical items would
// still count as a change (since Object.is compares references).
const arrayEquality = (a: string[], b: string[]) =>
  a.length === b.length && a.every((item, i) => item === b[i]);

export const todoStore = createGlobalStore<TodoState>(
  { todos: ["Learn the package"] },
  { equalityFn: (a, b) => arrayEquality(a.todos, b.todos) }
);