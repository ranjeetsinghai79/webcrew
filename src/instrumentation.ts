// Patch broken localStorage polyfill injected by Next.js 15 / Node.js --localstorage-file
// The partial polyfill exists but lacks getItem, causing SSR crashes in debug/gsap deps.
export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    if (
      typeof (globalThis as any).localStorage !== 'undefined' &&
      typeof (globalThis as any).localStorage.getItem !== 'function'
    ) {
      const store: Record<string, string> = {}
      ;(globalThis as any).localStorage = {
        getItem:    (k: string) => store[k] ?? null,
        setItem:    (k: string, v: string) => { store[k] = String(v) },
        removeItem: (k: string) => { delete store[k] },
        clear:      () => { Object.keys(store).forEach(k => delete store[k]) },
        key:        (i: number) => Object.keys(store)[i] ?? null,
        get length() { return Object.keys(store).length },
      }
    }
  }
}
