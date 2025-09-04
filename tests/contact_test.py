#!/usr/bin/env python3
"""
Contact Form Testing
Tests the contact form submission functionality using TestClient.
"""

import pytest
from fastapi.testclient import TestClient
from backend.server import app
from unittest.mock import patch

# Create a TestClient instance
client = TestClient(app)

@patch('backend.server.logger.info')
def test_contact_form_submission(mock_logger_info):
    """Test POST /api/contact endpoint"""
    print("\n=== Testing Contact Form Submission ===")
    test_data = {
        "name": "Max Mustermann",
        "email": "max.mustermann@example.com",
        "company": "Mustermann GmbH",
        "phone": "+49 123 456789",
        "message": "Dies ist eine Testnachricht für die Kontaktformular-Funktionalität."
    }

    response = client.post("/api/contact", json=test_data)

    assert response.status_code == 200
    data = response.json()
    assert data.get("status") == "success"
    assert "message" in data

    # Check that the logger was called with the correct message
    mock_logger_info.assert_called_once()
    log_message = mock_logger_info.call_args[0][0]
    assert "Contact form submission received" in log_message
    assert "max.mustermann@example.com" in log_message

    print("✅ Contact form submission working correctly and logging as expected")