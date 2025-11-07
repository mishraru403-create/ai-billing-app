# DukanBot Billing Backend

AI-powered billing and inventory management system for Indian small businesses.

## Tech Stack
- **Framework**: Spring Boot 3.2.0
- **Database**: PostgreSQL 14+
- **Security**: Spring Security + JWT
- **Java Version**: 17

## Prerequisites
- Java 17+
- Maven 3.6+
- PostgreSQL 14+

## Setup Instructions

### 1. Database Setup
```bash
psql -U postgres
CREATE DATABASE dukanbot_billing;
CREATE USER dukanbot WITH PASSWORD 'your_password';
GRANT ALL PRIVILEGES ON DATABASE dukanbot_billing TO dukanbot;
\q
```

### 2. Application Configuration
Update `src/main/resources/application-dev.properties`:
```properties
spring.datasource.username=your_db_username
spring.datasource.password=your_db_password
```

### 3. Run Application
```bash
mvn clean install
mvn spring-boot:run
```

Application runs on: http://localhost:8080

## API Endpoints

### Health Check
- `GET /api/v1/health` - API health status
- `GET /api/v1/ping` - Simple ping endpoint

## Development

### Branch Strategy
- `main` - Production
- `develop` - Development/Staging
- `feature/*` - Feature branches

### Commit Convention
