# Frontend

## Setup
1. Copy `.env.example` to `.env` and set `REACT_APP_BACKEND_URL` (default `http://localhost:8000`).
2. Install dependencies: `yarn install`.
3. Start dev server: `yarn start` (opens `http://localhost:3000`).

## Build
- Production build: `yarn build`.
- Serve the `build/` directory with any static server or behind a reverse proxy.

## Scripts
- `yarn start` – run development server
- `yarn build` – production build
- `yarn test` – run tests (if present)

## Notes
- Styling via TailwindCSS, configured in `tailwind.config.js` and `postcss.config.js`.

