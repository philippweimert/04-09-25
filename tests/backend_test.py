#!/usr/bin/env python3
"""
Backend API Testing Suite
Tests all backend API endpoints with placeholder data.
"""

import pytest
from fastapi.testclient import TestClient
from backend.server import app

# Create a TestClient instance
client = TestClient(app)

# --- Tests ---

def test_root_endpoint():
    """Test GET /api/ endpoint"""
    print("\n=== Testing Root Endpoint ===")
    response = client.get("/api/")
    assert response.status_code == 200
    data = response.json()
    assert data.get("message") == "API is running"
    print("✅ Root endpoint working correctly")

def test_status_check_workflow():
    """Test POST and GET /api/status endpoints (placeholder)."""
    print("\n=== Testing Status Check Workflow (Placeholder) ===")

    # POST to create a status check
    test_data = {"client_name": "Test Client Inc."}
    response_post = client.post("/api/status", json=test_data)
    assert response_post.status_code == 200
    data_post = response_post.json()
    assert data_post["client_name"] == "Test Client Inc."
    assert "id" in data_post
    assert "timestamp" in data_post
    print("✅ Create status check placeholder working correctly")

    # GET to retrieve the status checks
    response_get = client.get("/api/status")
    assert response_get.status_code == 200
    data_get = response_get.json()
    assert isinstance(data_get, list)
    assert len(data_get) == 2
    assert data_get[0]["client_name"] == "Placeholder Client 1"
    # The created status check will not be in the list because the backend is using placeholders.
    # This test just verifies that the endpoints return the correct placeholder data.
    print("✅ Get status checks placeholder working correctly")

def test_cors_headers():
    """Test CORS configuration"""
    print("\n=== Testing CORS Headers ===")
    headers = {'Origin': 'http://localhost:3000'}
    response = client.get("/api/", headers=headers)
    assert response.status_code == 200
    assert 'access-control-allow-origin' in response.headers
    assert response.headers['access-control-allow-origin'] == 'http://localhost:3000'
    print("✅ CORS headers present")