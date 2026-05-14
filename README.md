# Full-Stack-Application-Development

A collection of weekly full-stack practice tasks covering SQL, frontend, Spring Core, Spring MVC, Spring Boot REST APIs, and microservices.

Developed by **Arokiya Nithish J**.

---

## Repository Overview

This repository is organized as **independent task folders** (and some archived `.zip` submissions).  
There is **no single root application**; each task can be opened and run on its own.

## Task Index

| Task | Path | Focus Area | Stack |
|---|---|---|---|
| Task 1 | `Task 1 Student Registration.zip` | Archived bundle with frontend + Student API files | HTML/CSS + .NET API (in zip) |
| Task 3 | `Task 3 Login System using Validation` | Reserved task folder (currently empty) | — |
| Task 4 | `Task 4 Order Management using Joins` | SQL joins, aggregation, top records | SQL Server |
| Task 5 | `Task 5 Transaction Based Payment Simulation` | Transaction handling with commit/rollback | SQL Server |
| Task 6 | `Task 6 Automated Logging using Triggers & Views` | Triggers, audit logs, reporting view | SQL Server |
| Task 7 | `Task 7 Interactive Web Form` | Interactive form validation and UI feedback | HTML, CSS, JavaScript |
| Task 8 | `Task 8 Employee Management` | Spring Core IoC/DI with XML config | Java, Spring Context, Maven |
| Task 9 | `Task 9 EmployeeMVC` | JSP-based Spring MVC app | Spring Boot MVC, JSP, Maven |
| Task 10 | `Task 10 StudentCRUD` | REST CRUD with JPA + SQL Server | Spring Boot, JPA, SQL Server |
| Task 11 | `Task 11 Student Management` | Web CRUD + search + pagination + sorting | Spring Boot, Thymeleaf, JPA, SQL Server |
| Task 12 | `Task 12 MongoDB_Analytics` | Notebook analytics on tweet data | Python, MongoDB, PyMongo, SciPy, Pandas |
| Task 13 | `Task 13 Employee-Rest-api` | REST API with validation + global exception handling | Spring Boot, JPA, Validation, SQL Server |
| Task 14 | `Task 14 Student-Service` | Basic student/course microservices | Spring Boot |
| Task 15 | `Task 15 Eureka-server` | Service discovery with Eureka + client services | Spring Boot, Spring Cloud Netflix |
| Task 16 | `TASK-16.zip` | API Gateway task (archived) | Spring Cloud Gateway (in zip) |
| Task 17 | `TASK17` | Student and course microservices with inter-service call | Spring Boot, JPA, SQL Server, RestTemplate |
| Task 19 | `TASK -19.zip` | Frontend sample (archived) | HTML/CSS/JS |
| Task 20 | `TASK 20.zip` | Sample project archive | Text/sample files |
| Task 21 | `TASK 21.zip` | Spring Boot demo + CI workflow archive | Java, Spring Boot, GitHub Actions |

---

## Tech Stack Across Tasks

- **Backend:** Java, Spring Core, Spring MVC, Spring Boot, Spring Data JPA, Spring Cloud
- **Databases:** SQL Server, MongoDB
- **Frontend:** HTML, CSS, JavaScript, JSP, Thymeleaf
- **Data/Notebook:** Python, Pandas, SciPy, NLTK, PyMongo
- **Build Tool:** Maven

---

## Prerequisites

Install tools based on the task you want to run:

- **Java 17** (for most Spring Boot tasks)
- **Maven 3.8+**
- **SQL Server** (for DB-backed tasks)
- **Python 3.x + Jupyter/Colab** (Task 12)
- A browser (Task 7 and view-based web tasks)

> Note: Task 8 uses Java 8 compiler settings in its `pom.xml`.

---

## How to Run Tasks

### 1) SQL Tasks (Task 4, 5, 6)
1. Open SQL Server Management Studio (or compatible SQL client).
2. Run scripts in each task folder in order (if multiple scripts exist).
3. Verify output with included `SELECT` queries.

### 2) Static Frontend Task (Task 7)
1. Open `Task 7 Interactive Web Form/task7.html` in your browser.
2. Test hover effects, field validation, and double-click submit behavior.

### 3) Spring/Maven Tasks
For tasks containing `pom.xml`:
```bash
cd "<task-folder-containing-pom>"
mvn clean install
mvn spring-boot:run
```

Examples:
- `Task 10 StudentCRUD/StudentCRUD`
- `Task 11 Student Management/studentmanagement`
- `Task 13 Employee-Rest-api/employee-rest-api`
- `Task 14 Student-Service/*`
- `Task 15 Eureka-server/*`
- `TASK17/*`

### 4) Microservice Task Startup Order
- **Task 15 (Eureka):**
  1. Start `eureka-server` (port 8761)
  2. Start `student-service` (port 8081)
  3. Start `course-service` (port 8082)

- **Task 17:**
  1. Start `student-service` (port 8081)
  2. Start `course-service` (port 8082)
  3. Access `course-service` endpoint that fetches student data

### 5) Notebook Task (Task 12)
1. Open `Task12_MongoDB_Analytics.ipynb` in Jupyter/Colab.
2. Run cells in order.
3. Ensure required Python packages are installed (the notebook includes install steps).

---

## API Highlights

### Task 10 — Student CRUD
- `POST /students`
- `GET /students`
- `GET /students/{id}`
- `PUT /students/{id}`
- `DELETE /students/{id}`

### Task 13 — Employee REST API
- Base URL: `/api/employees`
- Includes:
  - Request validation (`@Valid`)
  - Field constraints on entity
  - Global exception handling (`@RestControllerAdvice`)
  - Standard CRUD endpoints

### Task 15 — Eureka
- Eureka dashboard: `http://localhost:8761`
- Client services register with Eureka using `spring.application.name`.

---

## Notes

- Several folders include `target/` output already committed.
- Some tasks are only available as zipped archives.
- A few task folders may be placeholders while their submissions are stored as archives.
- Database credentials in `application.properties` are placeholders in some modules and may need local updates.

---

## Author

- **Name:** Arokiya Nithish J  
- **LinkedIn:** [Arokiya Nithish J](https://www.linkedin.com/search/results/all/?keywords=Arokiya%20Nithish%20J)  
- **GitHub:** [ArokiyaNithish](https://github.com/ArokiyaNithish)
