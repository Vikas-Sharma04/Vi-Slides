// ------------------- DNS FIX (for MongoDB on hotspot) -------------------
import dns from "dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

// ------------------- ENV CONFIG -------------------
import dotenv from "dotenv";

dotenv.config();

// ------------------- IMPORTS -------------------
import express, { Application, Request, Response } from "express";
import cors, { CorsOptions } from "cors";
import cookieParser from "cookie-parser";

import assignmentRouter from "./routes/assignment.route";
import classRouter from "./routes/class.route";
import authRouter from "./routes/auth.route";
import aiRouter from "./routes/ai.route";
import todoRoutes from './routes/todo.route';

import connectDB from "./config/db";

import http from "http";
import { initSocket } from "./socket/socket";

// ------------------- APP INIT -------------------
const app: Application = express();

// create HTTP server
const server = http.createServer(app);

// Initialize Socket.IO with server
initSocket(server);

// ------------------- DB CONNECTION -------------------
connectDB();

// ------------------- CORS -------------------
const allowedOrigins = [
  "http://localhost:5173",
  process.env.CLIENT_URL,
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.options(/.*/, cors());

// ------------------- MIDDLEWARE -------------------
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// ------------------- ROUTES -------------------
app.use("/api/auth", authRouter);
app.use("/api/assignments", assignmentRouter);
app.use("/api/class", classRouter);
app.use("/api/ai", aiRouter);
app.use("/api/todos", todoRoutes); 

// ------------------- HEALTH CHECK -------------------
app.get("/", (req: Request, res: Response) => {
  res.send("API is running");
});

// ------------------- START SERVER -------------------
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server + Socket running on port ${PORT}`);
});