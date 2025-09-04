# Multi-stage Dockerfile: backend + frontend

FROM python:3.10-slim AS backend
WORKDIR /app
COPY backend/requirements.txt backend/requirements.txt
RUN pip install --no-cache-dir -r backend/requirements.txt
COPY backend backend

FROM node:18-alpine AS frontend
WORKDIR /app
COPY frontend/package.json frontend/yarn.lock* frontend/
RUN cd frontend && yarn install --frozen-lockfile || yarn install
COPY frontend frontend
RUN cd frontend && yarn build

FROM python:3.10-slim AS runner
WORKDIR /app
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
COPY --from=backend /usr/local/lib/python3.10 /usr/local/lib/python3.10
COPY --from=backend /usr/local/bin /usr/local/bin
COPY --from=backend /app/backend /app/backend
COPY --from=frontend /app/frontend/build /app/frontend/build
EXPOSE 8000
CMD ["uvicorn", "backend.server:app", "--host", "0.0.0.0", "--port", "8000"]
