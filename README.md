# Acencia Web Application

This is the official repository for the Acencia web application, a full-stack project built with a React frontend and a Python (FastAPI) backend.

## Table of Contents

- [Folder Structure](#folder-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Running the Application](#running-the-application)
  - [Running the Backend](#running-the-backend)
  - [Running the Frontend](#running-the-frontend)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Folder Structure

The repository is organized as follows:

-   `frontend/`: Contains the React frontend application.
    -   `src/`: The source code for the React app.
    -   `public/`: Public assets for the frontend.
    -   `package.json`: Frontend dependencies.
-   `backend/`: Contains the Python FastAPI backend application.
    -   `server.py`: The main FastAPI application file.
    -   `requirements.txt`: Backend dependencies.
-   `tests/`: Contains the tests for the application.
-   `README.md`: This file.
-   `LICENSE`: The project's license.
-   `CHANGELOG.md`: A log of changes to the project.
-   `CONTRIBUTING.md`: Guidelines for contributing to the project.
-   `DEPLOYMENT.md`: Instructions for deploying the application.

## Getting Started

Follow these instructions to get a local copy of the project up and running for development and testing purposes.

### Prerequisites

You will need the following software installed on your machine:

-   [Node.js](https://nodejs.org/) (which includes npm)
-   [Python 3](https://www.python.org/)

### Backend Setup

1.  **Navigate to the backend directory:**
    ```sh
    cd backend
    ```

2.  **Create and activate a Python virtual environment:**
    ```sh
    python3 -m venv venv
    source venv/bin/activate
    ```
    On Windows, use `venv\Scripts\activate`.

3.  **Install the required packages:**
    ```sh
    pip install -r requirements.txt
    ```

4.  **Install development dependencies (for running tests, etc.):**
    ```sh
    pip install -r requirements-dev.txt
    ```

5.  **Create a `.env` file:**
    Create a `.env` file in the `backend` directory by copying the example file:
    ```sh
    cp .env.example .env
    ```
    Update the variables in the `.env` file as needed for your local environment.

### Frontend Setup

1.  **Navigate to the frontend directory:**
    ```sh
    cd frontend
    ```

2.  **Install the required packages:**
    ```sh
    npm install
    ```

3.  **Create a `.env` file:**
    The frontend is not currently configured to use many environment variables, but you can create a `.env` file for future use:
    ```sh
    cp .env.example .env
    ```

## Running the Tests

To run the tests, navigate to the root of the project and run `pytest`:

```sh
pytest
```

## Running the Application

### Running the Backend

1.  **Navigate to the backend directory:**
    ```sh
    cd backend
    ```

2.  **Activate the virtual environment if you haven't already:**
    ```sh
    source venv/bin/activate
    ```

3.  **Start the FastAPI server:**
    ```sh
    uvicorn server:app --reload
    ```
    The backend server will be running at `http://127.0.0.1:8000`.

### Running the Frontend

1.  **Navigate to the frontend directory:**
    ```sh
    cd frontend
    ```

2.  **Start the React development server:**
    ```sh
    npm start
    ```
    The frontend development server will open in your browser at `http://localhost:3000`.

## API Endpoints

The backend provides the following API endpoints under the `/api` prefix:

-   `GET /`: Health check endpoint.
-   `POST /status`: Creates a new status check (placeholder).
-   `GET /status`: Retrieves a list of placeholder status checks.
-   `POST /contact`: Submits the contact form (placeholder, logs the submission).

## Contributing

Contributions are welcome! Please read `CONTRIBUTING.md` for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the `LICENSE` file for details.
