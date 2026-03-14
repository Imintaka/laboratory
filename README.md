# LaboratoryBar

Landing page for a bar in Mikashevichi built with Next.js App Router, TypeScript and Tailwind CSS v4.

## Scripts

- `npm run dev` starts the local development server
- `npm run build` creates the production build
- `npm run start` runs the production build locally
- `npm run lint` checks the codebase with ESLint
- `npm run format` formats the project with Prettier

## Project structure

- `src/app` contains the App Router entrypoints and global styles
- `src/components` contains layout and UI components
- `src/data` stores content for the landing page
- `src/lib` contains shared site config helpers
- `public/images` stores static assets used by the page

## Getting started

Run the development server:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Notes

- `NEXT_PUBLIC_SITE_URL` can be set to generate canonical URLs, `robots.txt`, and `sitemap.xml` for the deployed domain
- the current project has no automated tests configured, so validation is based on linting and manual UI checks
