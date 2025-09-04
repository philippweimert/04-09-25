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
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
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

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', 'http://localhost:3000').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)
