# Lab 4.1 Backend API

Backend API for Employee and Role Management using Express.js with TypeScript.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

The server will run on http://localhost:3001

## API Endpoints

### GET /api/health
Health check endpoint

### GET /api/roles
Returns all roles (static roles + created people)

### POST /api/roles
Create a new person with role
Body:
```json
{
  "firstName": "John",
  "lastName": "Doe", 
  "role": "Software Developer"
}
```

## Architecture

Follows Route-Controller-Service-Repository pattern:
- Routes: API endpoint definitions
- Controllers: Request/response handling
- Services: Business logic
- Repository: Data access (in-memory for now)
