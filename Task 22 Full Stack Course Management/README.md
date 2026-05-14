# Task 22 - Full Stack Course Management

This task contains a complete **full-stack CRUD application**:
- **Frontend:** React (Vite)
- **Backend:** Spring Boot REST API
- **Database:** SQL Server (SSMS)

## Folder Structure

- `frontend/` - React UI for managing courses
- `backend/` - Spring Boot API with JPA
- `backend/sql/schema.sql` - SQL script to create database/table and sample data

## Database Setup (SSMS)

1. Open SQL Server Management Studio.
2. Run: `backend/sql/schema.sql`
3. Verify that `coursedb` and `courses` table are created.

## Backend Setup

1. Update DB credentials in:
   - `backend/src/main/resources/application.properties`
2. Run backend:
   ```bash
   cd backend
   mvn spring-boot:run
   ```
3. API base URL: `http://localhost:8080/api/courses`

## Frontend Setup

1. Install and run:
   ```bash
   cd frontend
   npm install
   npm run dev
   ```
2. Open the URL printed by Vite (usually `http://localhost:5173`).

## API Endpoints

- `GET /api/courses` - List all courses
- `POST /api/courses` - Create course
- `PUT /api/courses/{id}` - Update course
- `DELETE /api/courses/{id}` - Delete course
