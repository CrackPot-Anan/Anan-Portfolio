# Anan Portfolio

Personal portfolio site for Abrar Anan Raiyan — built with TanStack Start, React 19, Tailwind CSS v4, and Vite.

## Development

```sh
npm i
npm run dev
```

Dev server runs on http://localhost:8080.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |
| `npm run format` | Format with Prettier |

## Structure

- `src/routes` — routes (`/`, `/blogs`, `/blogs/$slug`, `/login`, `/admin`)
- `src/server` — server functions: auth/session, posts storage
- `src/components/site` — public site components
- `data/posts.json` — seed blog posts (local dev post storage)

## Admin

Log in at `/login` (credentials in `.env` — gitignored, never commit it). Create posts at `/admin`; they publish to `/blogs`.
