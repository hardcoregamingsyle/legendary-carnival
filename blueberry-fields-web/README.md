# Blueberry Fields High School Web

A production-ready Vite + React + Tailwind SPA for Blueberry Fields High School with API support for both local Node/Express development and Cloudflare Pages deployment.

## Local development

Run the Express API:

```bash
npm install --prefix server
npm start --prefix server
```

Run the Vite client in a second terminal:

```bash
npm install --prefix client
npm run dev --prefix client
```

The Vite dev server proxies `/api/*` to `http://localhost:4000`.

## Cloudflare Pages deployment

Use the `client` directory as the Cloudflare Pages project root.

- Build command: `npm run build`
- Build output directory: `dist`
- Functions directory: `functions`

The React SPA fallback is provided by `client/public/_redirects`, and Cloudflare Pages Functions implement:

- `GET /api/school-info`
- `POST /api/inquiries`

Optional inquiry persistence can be enabled by binding a KV namespace named `ADMISSIONS_INQUIRIES` in Cloudflare Pages. If the binding is absent, submissions still validate and return a success response without persistence.

For CLI deployment from `client`:

```bash
npm run pages:deploy
```
