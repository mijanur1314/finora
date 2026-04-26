# Finora

Finora is a full-stack personal finance application for tracking transactions, analyzing spending, and scheduling financial reports.

## Stack

Backend:
- Node.js
- Express
- TypeScript
- MongoDB with Mongoose
- Passport JWT
- Zod
- Cloudinary
- Resend
- Google Gemini AI

Frontend:
- React 18
- TypeScript
- Vite
- Redux Toolkit and RTK Query
- React Router
- Tailwind CSS
- Radix UI
- Recharts

## Monorepo Layout

```text
finora/
|-- backend/
|   |-- src/
|   |-- package.json
|   `-- .env
|-- client/
|   |-- src/
|   |-- package.json
|   `-- .env
`-- README.md
```

## Features

- User registration and login with JWT-based auth
- Transaction create, update, delete, duplicate, and bulk import flows
- Receipt scanning with Gemini AI
- Analytics summary, charts, and expense breakdowns
- Scheduled reports and email delivery
- Profile updates with file upload support

## Prerequisites

- Node.js 18 or newer
- npm
- MongoDB Atlas account or local MongoDB
- Cloudinary account
- Resend account
- Google AI Studio API key

## Installation

Clone the repository and install dependencies for both apps.

```bash
git clone https://github.com/mijanur1314/finora.git
cd finora

cd backend
npm install

cd ../client
npm install
```

## Environment Variables

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

## Running Locally

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

If login requests fail with `ERR_CONNECTION_REFUSED`, the backend is not running or exited during startup.

## Build Commands

Backend:

```bash
cd backend
npm run build
npm start
```

Frontend:

```bash
cd client
npm run build
npm run preview
```

## Available Scripts

Backend scripts:

- `npm run dev` - start the backend with `ts-node-dev`
- `npm run build` - compile TypeScript and copy `package.json` to `dist`
- `npm start` - run the compiled backend from `dist`

Frontend scripts:

- `npm run dev` - start the Vite dev server
- `npm run build` - type-check and create a production build
- `npm run lint` - run ESLint
- `npm run preview` - preview the production build locally

## API Overview

Base path:

```text
/api
```

Auth routes:

- `POST /auth/register`
- `POST /auth/login`

User routes:

- `GET /user/current-user`
- `PUT /user/update`

Transaction routes:

- `POST /transaction/create`
- `POST /transaction/scan-receipt`
- `POST /transaction/bulk-transaction`
- `PUT /transaction/duplicate/:id`
- `PUT /transaction/update/:id`
- `GET /transaction/all`
- `GET /transaction/:id`
- `DELETE /transaction/delete/:id`
- `DELETE /transaction/bulk-delete`

Analytics routes:

- `GET /analytics/summary`
- `GET /analytics/chart`
- `GET /analytics/expense-breakdown`

Report routes:

- `GET /report/all`
- `GET /report/generate`
- `PUT /report/update-setting`

Most routes except auth require a valid JWT access token.

## Current Verification Status

These checks are available in the repo today:

- Backend build
- Frontend build
- Frontend lint

Automated `npm test` scripts are not configured yet in either `backend` or `client`.

## Notes

- The backend connects to MongoDB during startup and exits if the database connection fails.
- Cron jobs are initialized in development mode.
- Uploaded files are handled with Multer and Cloudinary.

## Contributing

```bash
git checkout -b feature/your-change
git commit -m "Describe your change"
git push origin feature/your-change
```

## License

ISC
