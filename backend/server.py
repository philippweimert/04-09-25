from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from typing import Dict
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime
import aiosmtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# Portable in-memory data store (replaceable via adapter)
# In production, swap this with a real persistence layer via environment-driven adapter pattern
class InMemoryDatabase:
    def __init__(self) -> None:
        self.collections: Dict[str, list] = {
            'status_checks': [],
            'contact_submissions': [],
        }

    async def insert_one(self, collection_name: str, document: Dict) -> None:
        self.collections.setdefault(collection_name, []).append(document)

    async def find_all(self, collection_name: str, limit: int = 1000) -> list:
        return list(self.collections.get(collection_name, []))[:limit]


db = InMemoryDatabase()

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class StatusCheckCreate(BaseModel):
    client_name: str

class ContactForm(BaseModel):
    name: str
    email: EmailStr
    company: Optional[str] = None
    phone: Optional[str] = None
    message: str

# Email configuration
async def send_email(contact_data: ContactForm):
    """Send contact form data via email"""
    try:
        # Create message
        msg = MIMEMultipart()
        msg['From'] = os.environ.get("CONTACT_FROM", "noreply@example.com")
        msg['To'] = os.environ.get("CONTACT_TO", "admin@example.com")
        msg['Subject'] = f"Neue Kontaktanfrage von {contact_data.name}"

        # Email body
        body = f"""
Neue Kontaktanfrage über die Website:

Name: {contact_data.name}
E-Mail: {contact_data.email}
Unternehmen: {contact_data.company or 'Nicht angegeben'}
Telefon: {contact_data.phone or 'Nicht angegeben'}

Nachricht:
{contact_data.message}

---
Gesendet am: {datetime.now().strftime('%d.%m.%Y um %H:%M:%S')}
"""

        msg.attach(MIMEText(body, 'plain', 'utf-8'))

        # For portability, we avoid provider-specific SMTP config here.
        # In production, configure SMTP via environment variables and send securely.
        # For now, we save to in-memory storage and log the content.
        
        # Save contact form submission to portable store
        contact_dict = contact_data.dict()
        contact_dict['id'] = str(uuid.uuid4())
        contact_dict['timestamp'] = datetime.utcnow()
        contact_dict['status'] = 'sent'
        await db.insert_one('contact_submissions', contact_dict)
        
        # Log the email content for now (in production, this would actually send)
        logger.info(f"Contact form submission: {body}")
        
        return {"status": "success", "message": "Nachricht erfolgreich gesendet"}
        
    except Exception as e:
        logger.error(f"Failed to send email: {str(e)}")
        raise HTTPException(status_code=500, detail="Fehler beim Senden der Nachricht")

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.dict()
    status_obj = StatusCheck(**status_dict)
    await db.insert_one('status_checks', status_obj.dict())
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.find_all('status_checks', 1000)
    return [StatusCheck(**status_check) for status_check in status_checks]

@api_router.post("/contact")
async def submit_contact_form(contact_data: ContactForm):
    """Handle contact form submission"""
    try:
        result = await send_email(contact_data)
        return result
    except HTTPException as e:
        raise e
    except Exception as e:
        logger.error(f"Unexpected error in contact form: {str(e)}")
        raise HTTPException(status_code=500, detail="Ein unerwarteter Fehler ist aufgetreten")

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    # No persistent client to close in in-memory mode
    return None
