# Repository Guidelines

## Project Structure & Module Organization

This repository is a Next.js (App Router) TypeScript project.

- `src/app/`: app entrypoints and global styles (`layout.tsx`, `page.tsx`, `globals.css`)
- `src/components/`: reusable UI and layout components
- `public/images/`: static image assets served by Next.js
- Root config files: `next.config.ts`, `tsconfig.json`, `eslint.config.mjs`, `.prettierrc`

Keep page-level route files in `src/app` and shared presentational pieces in `src/components/<domain>/` (for example, `layout/` or `ui/`).

## Build, Test, and Development Commands

Use `npm` with the scripts defined in `package.json`:

- `npm run dev`: start the local dev server
- `npm run build`: create a production build
- `npm run start`: run the production build locally
- `npm run lint`: run ESLint (Next.js + TypeScript rules)
- `npm run format`: format the codebase with Prettier

Run `npm run lint` and `npm run format` before opening a PR.

## Coding Style & Naming Conventions

- TypeScript + React function components are the default.
- Prettier enforces: 2-space indentation, single quotes, no semicolons, `printWidth: 100`.
- Follow ESLint rules from `eslint-config-next` (`core-web-vitals` + TypeScript).
- Use `PascalCase` for component filenames (`Header.tsx`, `DishCard.tsx`).
- Use `camelCase` for variables/functions and `kebab-case` for asset filenames when adding new files.

Prefer small, composable components and keep styles close to the component when practical.

## Testing Guidelines

There is currently no test framework configured and no `test` script in `package.json`.

For now:

- validate changes with `npm run lint`
- run the app locally with `npm run dev`
- manually verify affected pages/components

If you add tests, place them near the feature (`Component.test.tsx`) or in a `src/__tests__/` folder and document the new command in `package.json`.

## Commit & Pull Request Guidelines

Recent commits follow Conventional Commits (examples: `fix(header): ...`, `chore: ...`). Continue using:

- `feat(scope): short description`
- `fix(scope): short description`
- `chore: short description`

PRs should include:

- a clear summary of changes
- linked issue/task (if available)
- screenshots or short video for UI updates
- notes on manual verification steps
