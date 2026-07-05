"use client";
import { createGlobalStore } from "@malahimdev/global-state";

export interface UserState {
  name: string;
  theme: "light" | "dark";
}

export const userStore = createGlobalStore<UserState>({
  name: "Guest",
  theme: "light",
});