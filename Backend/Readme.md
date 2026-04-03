# 🚀 Express + TypeScript Backend (Production Ready)

A scalable backend built with **Express.js**, **TypeScript**, **MongoDB**, and **Socket.IO**.
Designed for modern full-stack applications with authentication, real-time communication, and deployment-ready configuration.

---

# 🌟 Features

### 🔐 Authentication & Security

* JWT-based authentication (access + cookie support)
* Password hashing using bcrypt
* Protected routes with middleware
* Secure CORS configuration
* Environment-based secrets

---

### ⚡ Real-Time Communication

* WebSocket integration using Socket.IO
* Live classroom/session features
* Event-based architecture for scalability

---

### 🧠 API Architecture

* Modular MVC structure
* RESTful API design
* Centralized error handling
* Middleware-based authorization

---

### 🗄️ Database

* MongoDB with Mongoose ODM
* Schema-based models
* Scalable and production-ready queries

---

### 🤖 AI Integration

* Gemini API integration for AI-powered features

---

### 📦 Developer Experience

* TypeScript strict mode
* Clean folder structure
* Hot reload using ts-node-dev
* Path aliasing support

---

### 🚀 Deployment Ready

* Works with platforms like Render (backend)
* Environment variable support
* Production build setup

---

# 📦 Project Setup

## 1️⃣ Initialize Project

```bash
npm init -y
```

---

## 2️⃣ Install Dependencies

### ✅ Runtime Dependencies

```bash
npm install express mongoose cors cookie-parser dotenv jsonwebtoken bcrypt socket.io
```

---

### 🛠️ Dev Dependencies

```bash
npm install -D typescript ts-node-dev @types/node @types/express @types/cors @types/cookie-parser @types/jsonwebtoken @types/bcrypt
```

---

## 3️⃣ Initialize TypeScript

```bash
npx tsc --init
```

---

## 4️⃣ Configure `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "rootDir": "./src",
    "outDir": "./dist",
    "esModuleInterop": true,
    "strict": true,
    "moduleResolution": "node",
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}
```

---

## 5️⃣ Add Scripts (`package.json`)

```json
"scripts": {
  "dev": "ts-node-dev --respawn --transpile-only src/index.ts",
  "build": "tsc",
  "start": "node dist/index.js"
}
```

---

# 📁 Project Structure

```
project/
│
├── src/
│   ├── config/        # DB & environment configs
│   ├── controllers/   # Business logic
│   ├── middleware/    # Auth & error handling
│   ├── models/        # Mongoose schemas
│   ├── routes/        # API routes
│   ├── socket/        # Socket.IO logic
│   └── index.ts       # Entry point
│
├── dist/              # Compiled JS output
├── .env               # Environment variables
├── .gitignore
├── package.json
└── tsconfig.json
```

---

# ⚙️ Environment Variables

Create a `.env` file:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLIENT_URL=http://localhost:5173
GEMINI_API_KEY=your_api_key
```

---

# ▶️ Running the Project

## 🧪 Development

```bash
npm run dev
```

---

## 🚀 Production

```bash
npm run build
npm start
```

---

# 🌐 API Endpoints (Sample)

| Method | Route              | Description       |
| ------ | ------------------ | ----------------- |
| POST   | /api/auth/login    | User login        |
| POST   | /api/auth/register | User signup       |
| GET    | /api/class         | Get classes       |
| POST   | /api/assignments   | Create assignment |
| GET    | /api/todos         | Fetch todos       |

---

# 🔌 Socket.IO Events (Example)

| Event         | Description            |
| ------------- | ---------------------- |
| join-class    | User joins session     |
| send-message  | Real-time messaging    |
| start-session | Teacher starts session |

---

# 🚀 Deployment Guide

## Backend (Recommended)

* Deploy on **Render**
* Add environment variables in dashboard
* Use:

```bash
npm run build
npm start
```

---

# 🧠 Tech Stack

* Node.js
* Express.js
* TypeScript
* MongoDB + Mongoose
* Socket.IO
* JWT Authentication