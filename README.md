# ENEBA Homework – Game Search Web Application

This project is a web application created as a homework assignment for ENEBA.
The application displays game offers and provides a search functionality that
supports fuzzy matching, based on the provided design reference.

---

## Assignment Requirements Coverage

### AI Usage

An AI prompt history file is included with this submission. AI was used in a
limited and transparent manner, mainly for backend optimization review.

### Hosting

The solution is provided as a self-hosted application and can be run locally.
A public Git repository is included with clear instructions on how to run the
project.

---

## Web Application Features

- Game listing with offers
- Search functionality with fuzzy matching
- UI aligned with the provided design reference
- Cashback and discount calculations

---

## Content Requirements

The application includes at least the following games:

- FIFA 23
- Red Dead Redemption 2
- Split Fiction

---

## Tech Stack

### Frontend

- React
- TypeScript
- Vite
- CSS

### Backend

- Node.js
- Express
- PostgreSQL

---

## API Endpoints

The backend exposes the following public endpoints:

- `GET /list`  
  Returns all available game offers.

- `GET /list?search=<gamename>`  
  Returns filtered game offers.  
  Fuzzy search is implemented to allow partial and inexact matches.

---

## Database

The application uses a SQL database (PostgreSQL).  
The schema and stored data were designed based on the requirements visible in
the provided UI screenshot.

---

## Running the Project Locally

### Backend

```bash
cd backend
npm install -y
npm install express
node index.js
```

The backend will run on:
http://localhost:3001

### Frontend

```bash
cd react-app
npm install
npm run dev
```

The frontend will be available at:
http://localhost:5173
