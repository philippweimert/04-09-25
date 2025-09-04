# Deployment

This document provides instructions for deploying the application.

## Backend

The backend is a standard FastAPI application. It can be deployed to any platform that supports Python ASGI applications.

### Example (using uvicorn)

```bash
uvicorn backend.server:app --host 0.0.0.0 --port 8000
```

## Frontend

The frontend is a standard React application. It needs to be built first, and then the static files can be served by any web server.

### Build

```bash
cd frontend
npm run build
```

The build artifacts will be in the `frontend/build` directory. These files can then be served by a web server like Nginx or Apache, or hosted on a static hosting provider like Vercel or Netlify.
