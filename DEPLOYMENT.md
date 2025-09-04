## Deployment Guide

### Overview
This app consists of a FastAPI backend (`backend/`) and a React frontend (`frontend/`). It uses an in-memory datastore by default. Replace with your preferred datastore via an adapter if needed.

### Environments
- Development: local setup with hot reload
- Staging/Production: containerized or managed hosting

### Backend
1. Configure environment variables (`backend/.env`).
2. Install dependencies: `pip install -r backend/requirements.txt`.
3. Run: `uvicorn backend.server:app --host 0.0.0.0 --port 8000`.

### Frontend
1. Configure `frontend/.env` with `REACT_APP_BACKEND_URL`.
2. Install deps: `cd frontend && yarn install`.
3. Build: `yarn build`.
4. Serve build via any static server (e.g., Nginx).

### Docker (optional)
See `docker/Dockerfile` and `docker-compose.yml` for containerized deployment.

### Health Checks
- Backend: `GET /api/` returns `{ "message": "Hello World" }`.

### Security
- Do not commit `.env` files.
- Configure CORS, HTTPS termination, and secrets in your platform.

