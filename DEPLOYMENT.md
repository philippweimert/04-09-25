## Deployment (Render.com single service)

### Overview
FastAPI backend serves the built React frontend. No database required (in-memory store).

### Local run
1) Build frontend
```
cd frontend
yarn install --frozen-lockfile
yarn build
cd ..
```
2) Install backend deps
```
pip install -r backend/requirements.txt
```
3) Start server
```
uvicorn backend.server:app --host 0.0.0.0 --port 8000
```
Open http://localhost:8000

### Render.com setup
- Service type: Web Service
- Runtime: Python 3.12 (or 3.11)
- Build Command:
```
bash -lc "cd frontend && yarn install --frozen-lockfile && yarn build && cd .. && pip install -r backend/requirements.txt"
```
- Start Command:
```
bash -lc "uvicorn backend.server:app --host 0.0.0.0 --port $PORT"
```
- Environment variables (optional):
  - `CONTACT_FROM` (sender email)
  - `CONTACT_TO` (recipient email)
  - `CORS_ORIGINS` (default `*`)
  - `REACT_APP_BACKEND_URL` (leave empty for same-origin)

Health check: GET `/api/` should return `{ "message": "Hello World" }`.

