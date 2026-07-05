# 🌍 @malahimdev/global-state — Live Demo

A real Next.js (App Router) application demonstrating every feature of
[`@malahimdev/global-state`](https://www.npmjs.com/package/@malahimdev/global-state) —
a tiny, zero-boilerplate global state manager for React & Next.js, built on
`useSyncExternalStore`. No Context, no Providers, no external dependencies.

- 🚀 **Live app:** https://malahimdev-global-states.vercel.app/test
- 📦 **npm package:** https://www.npmjs.com/package/@malahimdev/global-state

---

## What this demo proves

Each page is a self-contained, working test — not just a screenshot. Visible
render counters on every card make the behavior provable, not just claimed.

| Page | What it demonstrates |
|---|---|
| [`/test`](https://malahimdev-global-states.vercel.app/test) | Dashboard — links to every test page |
| [`/test/counter-a`](https://malahimdev-global-states.vercel.app/test/counter-a) → [`/test/counter-b`](https://malahimdev-global-states.vercel.app/test/counter-b) | The **same store** imported from two completely different pages. Increment on Page A, navigate to Page B (client-side, no reload) — the count is already there. Proves the store is a true module-level singleton, not scoped to a page or component tree. |
| [`/test/user`](https://malahimdev-global-states.vercel.app/test/user) | **Selectors.** Three cards read from the same `userStore`: two use `useStore(selector)` and only re-render when *their* field changes; a fourth reads the whole state with no selector and re-renders on *any* change. The render counters make the difference visible in real time. |
| [`/test/todos`](https://malahimdev-global-states.vercel.app/test/todos) | **Custom `equalityFn`** on array state. A "no-op update" button sets a brand-new array with identical content — with the default `Object.is` check this would still trigger a re-render (different reference), but the store's custom content-based equality function correctly ignores it. |

Every page also has a site-wide dark/light toggle (`next-themes`) in the
header, independent from the `theme` field used inside the `userStore` demo
— one is real UI theme, the other is just sample state to prove selectors
work.

---

## Tech stack

- [Next.js](https://nextjs.org) (App Router)
- [`@malahimdev/global-state`](https://www.npmjs.com/package/@malahimdev/global-state) — the package being demonstrated
- Tailwind CSS + [shadcn/ui](https://ui.shadcn.com)
- [`next-themes`](https://github.com/pacocoursey/next-themes) for dark/light mode
- TypeScript throughout

---

## Project structure

```
app/
  layout.tsx              # root layout: fonts, ThemeProvider, site header, toaster
  test/
    page.tsx              # dashboard
    counter-a/page.tsx     # counter store, variant A
    counter-b/page.tsx     # counter store, variant B (proves cross-page sync)
    user/page.tsx          # user store, selectors + reset
    todos/page.tsx         # todo store, custom equality function
components/
  site-header.tsx          # sticky nav with active-link highlighting + theme toggle
  theme-provider.tsx        # next-themes wrapper
  theme-changer.tsx          # dark/light toggle button
  CounterTestA.tsx / CounterTestB.tsx
  UserTest.tsx
  TodoTest.tsx
store/
  counterStore.ts
  userStore.ts
  todoStore.ts
```

---

## Running locally

```bash
git clone https://github.com/MalahimHaseeb/malahimdev-global-states-demo.git
cd malahimdev-global-states-demo
npm install
npm run dev
```

Open [http://localhost:3000/test](http://localhost:3000/test).

> Each test page uses `dynamic(..., { ssr: false })` intentionally, since
> the render-counter components mutate a ref during render for
> demonstration purposes — that's an impure pattern that would otherwise
> cause a hydration mismatch. Fine for a test harness like this one; not a
> pattern to copy into production pages.

---

## Related

- [`@malahimdev/global-state` on npm](https://www.npmjs.com/package/@malahimdev/global-state)
- Package source: `createGlobalStore<T>(initialState, options?)` → `{ useStore, getState, setState, subscribe, reset }`

---

## License

MIT © [Malahim Haseeb](https://www.malahim.dev)