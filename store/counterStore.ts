"use client";
import { createGlobalStore } from "@malahimdev/global-state";

export interface CounterState {
  count: number;
}

export const counterStore = createGlobalStore<CounterState>({ count: 0 });