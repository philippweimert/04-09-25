# --- Imports ---
# Standard library imports
import os
import logging
from pathlib import Path
import uuid
from datetime import datetime
from typing import List, Optional

# Third-party imports
from fastapi import FastAPI, APIRouter, HTTPException
from fastapi.staticfiles import StaticFiles
from starlette.responses import FileResponse
from dotenv import load_dotenv
from pydantic import BaseModel, Field, EmailStr
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

# --- Initial Configuration ---

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# Load environment variables from a .env file
ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# --- FastAPI App and Router Initialization ---

# Create the main FastAPI application instance
app = FastAPI(title="Acencia Backend API", version="1.0.0")

# Create a router with a /api prefix for all its routes
api_router = APIRouter(prefix="/api")

# --- Pydantic Models ---

class StatusCheck(BaseModel):
    """Model for a status check entry."""
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class StatusCheckCreate(BaseModel):
    """Model for creating a new status check."""
    client_name: str

class ContactForm(BaseModel):
    """Model for the contact form submission."""
    name: str
    email: EmailStr
    company: Optional[str] = None
    phone: Optional[str] = None
    message: str

# --- API Endpoints ---

@api_router.get("/", summary="Root endpoint for API health check")
async def root():
    """A simple health check endpoint to confirm the API is running."""
    return {"message": "API is running"}

@api_router.post("/status", response_model=StatusCheck, summary="Create a new status check")
async def create_status_check(input_data: StatusCheckCreate):
    """
    Creates a new status check. This is a placeholder and does not save to a database.
    """
    logger.info(f"Status check created for: {input_data.client_name}")
    status_obj = StatusCheck(**input_data.dict())
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck], summary="Get all status checks")
async def get_status_checks():
    """Retrieves a list of placeholder status checks."""
    logger.info("Placeholder status checks requested.")
    # Return a hardcoded list for now
    return [
        StatusCheck(client_name="Placeholder Client 1"),
        StatusCheck(client_name="Placeholder Client 2"),
    ]

@api_router.post("/contact", summary="Submit a contact form")
async def submit_contact_form(contact_data: ContactForm):
    """
    Handles a new contact form submission from the website.
    This is a placeholder and does not send an email or save to a database.
    It just logs the submission.
    """
    try:
        # Log the contact form submission for now
        logger.info(f"Contact form submission received: {contact_data.dict()}")
        return {"status": "success", "message": "Ihre Nachricht wurde erfolgreich übermittelt."}

    except Exception as e:
        logger.error(f"Failed to process contact form submission: {str(e)}")
        raise HTTPException(status_code=500, detail="Fehler beim Verarbeiten der Nachricht.")

# --- App Middleware ---

app.include_router(api_router)

# --- Serve Frontend ---
STATIC_DIR = ROOT_DIR / "static"

# Mount the static directory to serve frontend files
if STATIC_DIR.exists():
    app.mount("/static", StaticFiles(directory=STATIC_DIR / "static"), name="static_assets")

    @app.get("/{full_path:path}", summary="Serve Frontend Application")
    async def serve_frontend(full_path: str):
        """
        Serves the frontend application.
        This endpoint catches all paths and serves the index.html,
        allowing the frontend router to handle the routing.
        """
        # Define the path to the index.html file
        index_html_path = STATIC_DIR / "index.html"

        # Check if the requested path seems to be a file (e.g., has an extension)
        # This is a simple check; more robust checks might be needed for specific cases
        if '.' in full_path.split('/')[-1]:
             # If it looks like a file but wasn't found by StaticFiles, it's a 404
            raise HTTPException(status_code=404, detail="File not found")

        # If the index.html file exists, return it
        if index_html_path.exists():
            return FileResponse(index_html_path)

        # If index.html does not exist, raise a 503 Service Unavailable error
        raise HTTPException(status_code=503, detail="Frontend not available")
else:
    logger.warning(
        "Static directory not found. Frontend will not be served. "
        "Run the frontend build and place the output in the 'static' directory."
    )
