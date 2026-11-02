<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Project

StudioSpace web client — single-package Next.js 16.4.3 (App Router) + React 19 + TypeScript strict. No monorepo, no tests, no CI, no `.env`.

## Commands

- `npm run dev` — dev server (Turbopack; Tailwind loads via the `*.css` loader rule in `next.config.ts`)
- `npm run lint` — ESLint flat config (`eslint.config.mjs`)
- `npx tsc --noEmit` — typecheck; there is no `typecheck` script
- `npm run build` — production build
- There is no test suite. Verify with `npm run lint` (focused: `npx eslint <file>`) and `npx tsc --noEmit`; run `npm run build` for risky changes — the build runs its own typecheck.
- npm only — `package-lock.json` is the lockfile; don't add yarn/pnpm/bun lockfiles.

Lint does not pass clean on the current tree: `npm run lint` exits 1 with 2 pre-existing `react-hooks/set-state-in-effect` errors in `src/components/ui/carousel.tsx` and `src/hooks/use-mobile.ts`, plus an unused-import warning in `src/app/page.tsx`. Judge your work against that baseline — it's clean if it adds no new problems.

## Layout

- `src/app/` — entrypoints `layout.tsx` (renders `Navbar` above the page) and `page.tsx` (currently an empty placeholder), plus `globals.css`
- `src/components/ui/` — shadcn-generated primitives; app-specific components go in `src/components/`
- `src/lib/` (utils, shiki highlighter), `src/hooks/`, `src/asset/` (images, imported via `@/asset/...`; `public/` holds only create-next-app defaults)
- Import alias `@/*` → `src/*`

## Quirks

- `cn` is re-exported from the `cn` npm package (`src/lib/utils.ts`) — don't define your own with clsx/tailwind-merge.
- shadcn style is `base-nova`: UI primitives wrap Base UI (`@base-ui/react`), not Radix. Add/update components with `npx shadcn add <name>` (the shadcn CLI is a local dependency); config in `components.json`.
- Base UI composes via a `render` prop (`<Button render={<Link href="/x" />}>`), not Radix's `asChild` — `asChild` fails typecheck on these primitives.
- Tailwind v4 is CSS-first: no `tailwind.config`; design tokens and `@theme` live in `src/app/globals.css`.
- React Compiler is enabled (`reactCompiler: true` + `babel-plugin-react-compiler`) — manual `useMemo`/`useCallback` is usually unnecessary.
- Next 16 generated types are globals: `LayoutProps<"/">` in `layout.tsx` is not a missing import.
