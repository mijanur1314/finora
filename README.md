# 💰 Finora - Personal Finance Management System

<div align="center">

![Finora Logo](https://img.shields.io/badge/Finora-Financial%20Management-4CAF50?style=for-the-badge)

A comprehensive full-stack financial management application that helps users track expenses, manage budgets, analyze spending patterns, and gain insights into their financial health.

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=flat&logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=flat&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Express.js](https://img.shields.io/badge/Express.js-404D59?style=flat)](https://expressjs.com/)

</div>

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Architecture](#-architecture)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Configuration](#-configuration)
- [Running the Application](#-running-the-application)
- [API Documentation](#-api-documentation)
- [Project Structure](#-project-structure)
- [Key Features Explained](#-key-features-explained)
- [Contributing](#-contributing)
- [License](#-license)

---

## ✨ Features

### 💳 Transaction Management
- **CRUD Operations**: Create, read, update, and delete transactions
- **Bulk Operations**: Import/export transactions via CSV
- **Receipt Scanning**: AI-powered receipt scanning using Google Gemini AI
- **Recurring Transactions**: Automated recurring income/expense tracking
- **Soft Delete**: Recoverable transaction deletion
- **Transaction Filtering**: Advanced search and filtering by type, category, date range
- **Duplicate Detection**: Smart transaction duplication

### 📊 Analytics & Reporting
- **Dashboard Analytics**: Real-time financial overview
- **Spending Patterns**: Visual representation using Recharts
- **Category Breakdown**: Detailed expense categorization
- **Income vs Expense**: Comparative analysis
- **Date Range Analysis**: Custom period reports (daily, weekly, monthly, yearly)
- **MongoDB Aggregation Pipeline**: Advanced data analytics

### 📧 Automated Reports
- **Scheduled Reports**: Automated email reports via Resend
- **Customizable Frequency**: Daily, weekly, monthly, or yearly reports
- **Cron Jobs**: Background task scheduling with node-cron
- **Report Settings**: User-configurable report preferences

### 🔐 Authentication & Security
- **JWT Authentication**: Secure token-based authentication
- **Refresh Tokens**: Automatic token refresh mechanism
- **Passport.js Integration**: Robust authentication strategy
- **Password Hashing**: bcrypt encryption
- **Protected Routes**: Role-based access control
- **CORS Configuration**: Secure cross-origin requests
- **Helmet.js**: Security headers

### 🎨 Modern UI/UX
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark Mode**: Theme switching with next-themes
- **Component Library**: Radix UI primitives
- **Form Validation**: React Hook Form with Zod schemas
- **State Management**: Redux Toolkit with persistence
- **Data Tables**: TanStack React Table
- **Charts & Graphs**: Recharts integration
- **Toast Notifications**: Sonner for user feedback

### 📁 File Management
- **Cloud Storage**: Cloudinary integration for receipts
- **File Upload**: Multer middleware
- **Image Optimization**: Automatic image processing

---

## 🛠 Tech Stack

### Backend
| Technology | Purpose |
|------------|---------|
| **Node.js** | Runtime environment |
| **Express.js** | Web application framework |
| **TypeScript** | Type-safe development |
| **MongoDB** | NoSQL database |
| **Mongoose** | ODM for MongoDB |
| **Passport.js** | Authentication middleware |
| **JWT** | Token-based authentication |
| **Zod** | Schema validation |
| **Google Gemini AI** | Receipt scanning & AI features |
| **Cloudinary** | Image/file storage |
| **Resend** | Email service |
| **node-cron** | Task scheduling |
| **bcrypt** | Password hashing |
| **Helmet** | Security middleware |

### Frontend
| Technology | Purpose |
|------------|---------|
| **React 18** | UI library |
| **TypeScript** | Type safety |
| **Vite** | Build tool & dev server |
| **React Router** | Client-side routing |
| **Redux Toolkit** | State management |
| **Redux Persist** | State persistence |
| **Tailwind CSS** | Utility-first CSS |
| **Radix UI** | Headless UI components |
| **React Hook Form** | Form management |
| **Zod** | Form validation |
| **Recharts** | Data visualization |
| **TanStack Table** | Advanced tables |
| **date-fns** | Date manipulation |
| **Sonner** | Toast notifications |
| **Lucide React** | Icon library |

---

## 🏗 Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                         Frontend (React)                     │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │  Dashboard   │  │ Transactions │  │   Reports    │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
│         │                  │                  │             │
│         └──────────────────┴──────────────────┘             │
│                            │                                │
│                    Redux Store (RTK)                        │
└─────────────────────────────┬───────────────────────────────┘
                              │
                         REST API
                              │
┌─────────────────────────────┴───────────────────────────────┐
│                      Backend (Express)                       │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │ Controllers  │  │   Services   │  │ Middlewares  │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
│         │                  │                  │             │
│         └──────────────────┴──────────────────┘             │
│                            │                                │
└─────────────────────────────┬───────────────────────────────┘
                              │
                    ┌─────────┴─────────┐
                    │                   │
            ┌───────┴────────┐  ┌──────┴──────┐
            │    MongoDB     │  │  Cloudinary │
            │   (Database)   │  │  (Storage)  │
            └────────────────┘  └─────────────┘
```

---

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** or **yarn** package manager
- **MongoDB** (local installation or MongoDB Atlas account)
- **Git** for version control

### External Services Required
- **MongoDB Atlas** account (or local MongoDB)
- **Cloudinary** account for image storage
- **Resend** account for email services
- **Google AI Studio** account for Gemini API

---

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/mijanur1314/finora.git
cd finora
```

### 2. Install Backend Dependencies

```bash
cd backend
npm install
```

### 3. Install Frontend Dependencies

```bash
cd ../client
npm install
```

---

## ⚙️ Configuration

### Backend Environment Variables

Create a `.env` file in the `backend` directory:

```env
# Server Configuration
PORT=8000
BASE_PATH=/api
NODE_ENV=development

# Database
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/database_name?retryWrites=true&w=majority

# JWT Configuration
JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRES_IN=15m
JWT_REFRESH_SECRET=your_jwt_refresh_secret_key_here
JWT_REFRESH_EXPIRES_IN=1d

# Google Gemini AI
GEMINI_API_KEY=your_gemini_api_key_here

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Email Service (Resend)
RESEND_API_KEY=your_resend_api_key
RESEND_MAILER_SENDER=onboarding@resend.dev

# Cron Job Security
CRON_SECRET=your_secure_cron_secret

# CORS
FRONTEND_ORIGIN=http://localhost:5173
```

### Frontend Environment Variables

Create a `.env` file in the `client` directory:

```env
VITE_API_URL=http://localhost:8000/api
```

### Getting API Keys

#### MongoDB Atlas
1. Visit [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Get your connection string

#### Cloudinary
1. Sign up at [Cloudinary](https://cloudinary.com/)
2. Get your cloud name, API key, and API secret from the dashboard

#### Resend
1. Sign up at [Resend](https://resend.com/)
2. Create an API key from the dashboard

#### Google Gemini AI
1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create an API key

---

## 🏃 Running the Application

### Development Mode

#### Start Backend Server

```bash
cd backend
npm run dev
```

The backend server will start on `http://localhost:8000`

#### Start Frontend Development Server

```bash
cd client
npm run dev
```

The frontend will start on `http://localhost:5173`

### Production Mode

#### Build Backend

```bash
cd backend
npm run build
npm start
```

#### Build Frontend

```bash
cd client
npm run build
npm run preview
```

---

## 📚 API Documentation

### Base URL
```
http://localhost:8000/api
```

### Authentication Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/auth/register` | Register new user |
| POST | `/auth/login` | User login |
| POST | `/auth/refresh` | Refresh access token |
| POST | `/auth/logout` | User logout |

### Transaction Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/transaction` | Create transaction | ✅ |
| GET | `/transaction` | Get all transactions | ✅ |
| GET | `/transaction/:id` | Get transaction by ID | ✅ |
| PUT | `/transaction/:id` | Update transaction | ✅ |
| DELETE | `/transaction/:id` | Delete transaction | ✅ |
| POST | `/transaction/:id/duplicate` | Duplicate transaction | ✅ |
| POST | `/transaction/bulk` | Bulk create transactions | ✅ |
| DELETE | `/transaction/bulk-delete` | Bulk delete transactions | ✅ |
| POST | `/transaction/scan-receipt` | AI receipt scanning | ✅ |

### Analytics Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/analytics/dashboard` | Get dashboard analytics | ✅ |
| GET | `/analytics/spending-patterns` | Get spending patterns | ✅ |
| GET | `/analytics/category-breakdown` | Category analysis | ✅ |

### Report Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/report` | Get all reports | ✅ |
| GET | `/report/settings` | Get report settings | ✅ |
| PUT | `/report/settings` | Update report settings | ✅ |

### User Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/user/profile` | Get user profile | ✅ |
| PUT | `/user/profile` | Update user profile | ✅ |

---

## 📁 Project Structure

### Backend Structure

```
backend/
├── src/
│   ├── @types/           # TypeScript type definitions
│   ├── config/           # Configuration files
│   │   ├── database.config.ts
│   │   ├── env.config.ts
│   │   ├── passport.config.ts
│   │   └── google-ai.config.ts
│   ├── controllers/      # Request handlers
│   │   ├── auth.controller.ts
│   │   ├── transaction.controller.ts
│   │   ├── analytics.controller.ts
│   │   └── report.controller.ts
│   ├── crons/            # Scheduled tasks
│   ├── enums/            # Enum definitions
│   ├── mailers/          # Email templates
│   ├── middlewares/      # Express middlewares
│   │   ├── errorHandler.middleware.ts
│   │   └── asyncHandler.middleware.ts
│   ├── models/           # Mongoose models
│   │   ├── user.model.ts
│   │   ├── transaction.model.ts
│   │   ├── report.model.ts
│   │   └── report-setting.model.ts
│   ├── routes/           # API routes
│   ├── services/         # Business logic
│   ├── utils/            # Utility functions
│   ├── validators/       # Zod schemas
│   └── index.ts          # Entry point
├── package.json
└── tsconfig.json
```

### Frontend Structure

```
client/
├── src/
│   ├── app/              # App configuration
│   ├── assets/           # Static assets
│   ├── components/       # React components
│   │   ├── ui/           # Reusable UI components
│   │   ├── navbar/       # Navigation components
│   │   ├── transaction/  # Transaction components
│   │   └── data-table/   # Table components
│   ├── features/         # Feature modules
│   │   ├── auth/         # Authentication
│   │   ├── transaction/  # Transaction management
│   │   ├── analytics/    # Analytics
│   │   ├── report/       # Reports
│   │   └── user/         # User management
│   ├── hooks/            # Custom React hooks
│   ├── layouts/          # Layout components
│   ├── lib/              # Utilities & helpers
│   ├── pages/            # Page components
│   │   ├── auth/         # Auth pages
│   │   ├── dashboard/    # Dashboard pages
│   │   ├── transactions/ # Transaction pages
│   │   ├── reports/      # Report pages
│   │   └── settings/     # Settings pages
│   ├── routes/           # Route configuration
│   ├── constant/         # Constants
│   └── main.tsx          # Entry point
├── package.json
├── tailwind.config.js
└── vite.config.ts
```

---

## 🔑 Key Features Explained

### 1. AI-Powered Receipt Scanning

Finora uses **Google Gemini AI** to automatically extract transaction details from receipt images:

```typescript
// Upload a receipt image
POST /api/transaction/scan-receipt
Content-Type: multipart/form-data

// AI extracts:
{
  "title": "Grocery Shopping",
  "amount": 45.99,
  "date": "2024-01-26",
  "category": "Food & Dining",
  "paymentMethod": "CARD",
  "type": "EXPENSE"
}
```

### 2. Recurring Transactions

Automatically create recurring transactions with customizable intervals:

- **Daily**: Daily subscriptions
- **Weekly**: Weekly expenses
- **Monthly**: Rent, utilities, subscriptions
- **Yearly**: Annual memberships

Cron jobs automatically process recurring transactions at scheduled times.

### 3. Advanced Analytics

MongoDB aggregation pipelines provide powerful analytics:

- **Spending trends** over time
- **Category-wise breakdown** of expenses
- **Income vs Expense** comparisons
- **Budget tracking** and alerts

### 4. Soft Delete Implementation

Transactions use soft delete for data recovery:

```typescript
{
  isDeleted: false,
  deletedAt: null
}
```

Deleted transactions can be recovered within a certain period.

### 5. Automated Email Reports

Schedule financial reports to be sent via email:

- Configure report frequency
- Customize report content
- Automatic generation via cron jobs
- Professional email templates using Resend

---

## 🧪 Testing

### Run Backend Tests

```bash
cd backend
npm test
```

### Run Frontend Tests

```bash
cd client
npm test
```

---

## 🔒 Security Features

- **JWT Authentication** with refresh tokens
- **Password hashing** using bcrypt
- **CORS** protection
- **Helmet.js** security headers
- **Input validation** with Zod schemas
- **SQL injection** prevention via Mongoose
- **XSS protection**
- **Rate limiting** (recommended to add)

---

## 🚀 Deployment

### Backend Deployment (Example: Railway/Render)

1. Push code to GitHub
2. Connect repository to hosting platform
3. Set environment variables
4. Deploy

### Frontend Deployment (Example: Vercel/Netlify)

1. Build the project: `npm run build`
2. Deploy the `dist` folder
3. Configure environment variables

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the ISC License.

---

## 👨‍💻 Author

**Sk Mijanur Rahaman**

---

## 🙏 Acknowledgments

- [React](https://reactjs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Google Gemini AI](https://ai.google.dev/)
- [Cloudinary](https://cloudinary.com/)
- [Resend](https://resend.com/)

---

## 📞 Support

For support, email skmijanurrahaman1314@gmail.com or open an issue in the repository.

---

<div align="center">

**Made with ❤️ by Sk Mijanur Rahaman**

⭐ Star this repository if you find it helpful!

</div>
