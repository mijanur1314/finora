# Finora

<div align="center">

![Finora Banner](https://img.shields.io/badge/Finora-Personal%20Finance%20Platform-1f7a5c?style=for-the-badge)

A modern full-stack finance app for tracking transactions, analyzing spending, scanning receipts, and scheduling reports.

[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=flat&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-111111?style=flat)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)](https://vite.dev/)

</div>

---

## Overview

Finora is a monorepo with:

- a TypeScript Express API in `backend`
- a React + Vite frontend in `client`
- JWT-based authentication
- analytics, reporting, file uploads, and AI-powered receipt scanning

It is designed for personal finance workflows such as:

- tracking income and expenses
- uploading and scanning receipts
- reviewing dashboard summaries and charts
- generating and scheduling reports

---

## Highlights

### Transaction Management

- Create, update, delete, and duplicate transactions
- Bulk transaction import
- Receipt scanning via Google Gemini AI
- File uploads handled with Multer and Cloudinary

### Analytics

- Summary metrics
- Chart-based spending insights
- Expense category breakdowns

### Reports

- On-demand report generation
- Report scheduling support
- Email delivery through Resend

### Authentication

- User registration and login
- JWT access token authentication
- Protected API routes with Passport

---

## Tech Stack

### Backend

- Node.js
- Express
- TypeScript
- MongoDB and Mongoose
- Passport JWT
- Zod
- Cloudinary
- Resend
- Google Gemini AI

### Frontend

- React 18
- TypeScript
- Vite
- Redux Toolkit and RTK Query
- React Router
- Tailwind CSS
- Radix UI
- Recharts

---

## Project Structure

```text
finora/
|-- backend/
|   |-- src/
|   |   |-- config/
|   |   |-- controllers/
|   |   |-- middlewares/
|   |   |-- models/
|   |   |-- routes/
|   |   |-- services/
|   |   |-- utils/
|   |   `-- validators/
|   |-- package.json
|   `-- .env
|-- client/
|   |-- src/
|   |   |-- app/
|   |   |-- components/
|   |   |-- features/
|   |   |-- hooks/
|   |   |-- layouts/
|   |   |-- pages/
|   |   `-- routes/
|   |-- package.json
|   `-- .env
`-- README.md
```

---

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm
- MongoDB Atlas account or local MongoDB
- Cloudinary account
- Resend account
- Google AI Studio API key

### Installation

```bash
git clone https://github.com/mijanur1314/finora.git
cd finora

cd backend
npm install

cd ../client
npm install
```

---

## Environment Setup

Create `backend/.env`:

```env
NODE_ENV=development
PORT=8000
BASE_PATH=/api

MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/database_name?retryWrites=true&w=majority

JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=15m
JWT_REFRESH_SECRET=your_jwt_refresh_secret
JWT_REFRESH_EXPIRES_IN=1d

GEMINI_API_KEY=your_gemini_api_key

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

RESEND_API_KEY=your_resend_api_key
RESEND_MAILER_SENDER=onboarding@resend.dev

CRON_SECRET=your_cron_secret
FRONTEND_ORIGIN=http://localhost:5173
```

Create `client/.env`:

```env
VITE_API_URL=http://localhost:8000/api
VITE_REDUX_PERSIST_SECRET_KEY=your_redux_persist_secret
```

### Security Note

Do not commit real secrets to source control. If credentials have already been exposed, rotate them before deploying.

---

## Local Development

Start the backend:

```bash
cd backend
npm run dev
```

Start the frontend in a second terminal:

```bash
cd client
npm run dev
```

Default local URLs:

- Frontend: `http://localhost:5173`
- Backend: `http://localhost:8000`
- API base: `http://localhost:8000/api`

If the frontend shows `ERR_CONNECTION_REFUSED` for `localhost:8000`, the backend is not running or exited during startup.

---

## Build and Verify

### Backend

```bash
cd backend
npm run build
npm start
```

### Frontend

```bash
cd client
npm run build
npm run preview
```

### Available Scripts

Backend:

- `npm run dev`
- `npm run build`
- `npm start`

Frontend:

- `npm run dev`
- `npm run build`
- `npm run lint`
- `npm run preview`

### Current Verification

The repo currently supports:

- backend TypeScript compilation and build
- frontend TypeScript build
- frontend ESLint checks

There are currently no `npm test` scripts configured in either app.

---

## API Overview

Base path:

```text
/api
```

### Auth

- `POST /auth/register`
- `POST /auth/login`

### User

- `GET /user/current-user`
- `PUT /user/update`

### Transactions

- `POST /transaction/create`
- `POST /transaction/scan-receipt`
- `POST /transaction/bulk-transaction`
- `PUT /transaction/duplicate/:id`
- `PUT /transaction/update/:id`
- `GET /transaction/all`
- `GET /transaction/:id`
- `DELETE /transaction/delete/:id`
- `DELETE /transaction/bulk-delete`

### Analytics

- `GET /analytics/summary`
- `GET /analytics/chart`
- `GET /analytics/expense-breakdown`

### Reports

- `GET /report/all`
- `GET /report/generate`
- `PUT /report/update-setting`

Most routes other than auth require a valid JWT access token.

---

## Production Readiness

Finora can be deployed, but production setup should include the following before going live:

- Use strong, rotated secrets for JWT, database, email, AI, and storage services
- Set `NODE_ENV=production`
- Set `FRONTEND_ORIGIN` to the real frontend domain
- Set `VITE_API_URL` to the public backend API URL
- Ensure MongoDB network access rules allow the deployment platform
- Use HTTPS on both frontend and backend
- Add request rate limiting
- Add centralized logging and monitoring
- Add automated tests before high-confidence production releases

### Backend Deployment Checklist

- Build with `npm run build`
- Start with `npm start`
- Provide all backend environment variables
- Confirm database connectivity at startup
- Confirm Cloudinary, Resend, and Gemini credentials are valid

### Frontend Deployment Checklist

- Build with `npm run build`
- Deploy the generated `client/dist`
- Set `VITE_API_URL` to the deployed backend

### Recommended Hosting

- Backend: Render, Railway, Fly.io, or any Node-capable VPS/container platform
- Frontend: Vercel, Netlify, Cloudflare Pages, or any static hosting provider
- Database: MongoDB Atlas

---

## Known Gaps

- No automated test suite yet
- No documented rate limiting middleware yet
- No health-check endpoint beyond the root route
- Development startup depends on successful MongoDB connection

---

## Contributing

```bash
git checkout -b feature/your-change
git commit -m "Describe your change"
git push origin feature/your-change
```

---

## License

ISC
