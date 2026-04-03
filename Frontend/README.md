# 🚀 React + TypeScript + Vite

A modern frontend built with **React**, **TypeScript**, and **Vite**, designed for high performance, scalability, and seamless integration with a backend API and real-time features.

---

# 🌟 Features

### ⚡ Performance & DX

* Lightning-fast development with Vite (HMR)
* Optimized production builds
* TypeScript strict mode enabled

---

### 🎨 UI & Styling

* Tailwind CSS integration
* Responsive and modern UI
* Reusable component-based architecture

---

### 🔗 API Integration

* Centralized API handling
* Environment-based API URLs
* Proxy support for local development

---

### 🔄 Real-Time Features

* Socket.IO client integration
* Live updates (chat, classroom, etc.)

---

### 🧠 Code Quality

* ESLint with TypeScript support
* Strict linting rules
* Scalable folder structure

---

### 🚀 Deployment Ready

* Optimized for deployment on **Vercel**
* SPA routing support
* Environment variable configuration

---

# 📦 Project Setup

## 1️⃣ Create Project 

```bash id="n5w9ap"
npm create vite@latest
```

---

## 2️⃣ Install Dependencies

```bash id="0kkvdl"
npm install
```

---

## 3️⃣ Install Additional Libraries

```bash id="o7w3xt"
npm install axios socket.io-client
```

---

## 4️⃣ Run Development Server

```bash id="o4xj3g"
npm run dev
```

App runs on:

```
http://localhost:5173
```

---

# ⚙️ Environment Variables

Create a `.env` file:

```env id="8civjd"
VITE_API_URL=http://localhost:3000/api
VITE_SOCKET_URL=http://localhost:3000
```

---

## 🧪 Production Environment

```env id="txub6y"
VITE_API_URL=https://your-backend.onrender.com/api
VITE_SOCKET_URL=https://your-backend.onrender.com
```

---

# 📁 Project Structure

```id="k7bpv2"
src/
│
├── components/      # Reusable UI components
├── pages/           # Route-level components
├── hooks/           # Custom hooks
├── lib/             # API, socket setup
├── context/         # Global state (if used)
├── assets/          # Images, icons
└── main.tsx         # Entry point
```

---

# 🔌 API Usage Example

```ts id="hzzsml"
const API_URL = import.meta.env.VITE_API_URL;

fetch(`${API_URL}/auth/login`, {
  method: "POST",
  credentials: "include",
});
```

---

# 🔄 Socket.IO Example

```ts id="kkf5v2"
import { io } from "socket.io-client";

const socket = io(import.meta.env.VITE_SOCKET_URL);

socket.emit("join-class", { classId: "123" });
```

---

# ⚙️ Vite Configuration

### Proxy Setup (Development Only)

```ts id="yqg0dx"
server: {
  proxy: {
    "/api": "http://localhost:3000"
  }
}
```

---

# 🧹 ESLint Configuration (Recommended)

Enable type-aware linting:

```js id="n2a4kv"
tseslint.configs.recommendedTypeChecked
```

Optional stricter rules:

```js id="v5c9xz"
tseslint.configs.strictTypeChecked
```

React-specific linting:

```js id="5lq2wt"
reactX.configs['recommended-typescript']
reactDom.configs.recommended
```

---

# 🚀 Deployment

## Frontend Deployment

* Deploy on **Vercel**
* Add environment variables
* Build command:

```bash id="3gmz0z"
npm run build
```

---

# 🧠 Tech Stack

* React
* TypeScript
* Vite
* Tailwind CSS
* Shadcn
* Socket.IO Client