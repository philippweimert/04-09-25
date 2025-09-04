# Here are your Instructions
## Project Overview
This repository contains a platform-agnostic fullstack application with a React frontend and a FastAPI backend. It has been sanitized for portability and security, removing vendor branding and database-specific logic. The backend uses a simple in-memory data layer by default and can be adapted to any datastore.

## Tech Stack
- Frontend: React (CRA + CRACO), TailwindCSS
- Backend: FastAPI (Python)

## Getting Started

### Prerequisites
- Node.js 18+ and Yarn or npm
- Python 3.10+

### Setup
1. Backend
   - Copy `backend/.env.example` to `backend/.env` and adjust values.
   - Create and activate a virtual environment.
   - Install dependencies:
     - `pip install -r backend/requirements.txt`
   - Run the backend:
     - `uvicorn backend.server:app --host 0.0.0.0 --port 8000 --reload`

2. Frontend
   - Copy `frontend/.env.example` to `frontend/.env` and adjust `REACT_APP_BACKEND_URL`.
   - Install dependencies:
     - `cd frontend && yarn install`
   - Run the frontend dev server:
     - `yarn start`

## Usage
- Status endpoints:
  - GET `GET /api/`
  - POST `POST /api/status` { client_name }
  - GET `GET /api/status`
- Contact form:
  - POST `POST /api/contact` { name, email, company?, phone?, message }

## Repository Structure
```
backend/
  server.py           # FastAPI app with in-memory data layer
  requirements.txt    # Python dependencies (pinned)
  .env.example        # Backend env template
frontend/
  src/                # React source code
  public/             # Static assets
  package.json        # Frontend dependencies and scripts
  .env.example        # Frontend env template
tests/                # Additional tests (if any)
```

## Configuration
- Environment variables are provided via `.env` files (see `.env.example`).
- CORS origins configured via `CORS_ORIGINS`.
- Contact emails configured via `CONTACT_FROM` and `CONTACT_TO`.

## Dependencies
- Backend: see `backend/requirements.txt`
- Frontend: see `frontend/package.json`

## Deployment
See `DEPLOYMENT.md` for deployment instructions.

## Contributing
See `CONTRIBUTING.md` for guidelines.

## Changelog
See `CHANGELOG.md` for version history.

## License
See `LICENSE`.