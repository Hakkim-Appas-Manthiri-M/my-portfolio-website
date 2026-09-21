import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

import connectDB from "./config/db.js";

import contactRoutes from "./routes/contactRoutes.js";

import errorMiddleware from "./middleware/errorMiddleware.js";
import notFoundMiddleware from "./middleware/notFoundMiddleware.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

/* ========================================
   DATABASE
======================================== */

await connectDB();

/* ========================================
   SECURITY
======================================== */

app.use(helmet());

/* ========================================
   CORS
======================================== */

const allowedOrigin =
  process.env.CLIENT_URL;

app.use(
  cors({
    origin: allowedOrigin,
    credentials: true,
  })
);

/* ========================================
   REQUEST BODY
======================================== */

app.use(
  express.json({
    limit: "10kb",
  })
);

app.use(
  express.urlencoded({
    extended: true,
    limit: "10kb",
  })
);

/* ========================================
   HEALTH CHECK
======================================== */

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "GamePort API is running",
  });
});

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server and API are healthy",
  });
});

/* ========================================
   CONTACT RATE LIMIT
======================================== */

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,

  limit: 5,

  standardHeaders: "draft-8",

  legacyHeaders: false,

  message: {
    success: false,
    message:
      "Too many contact requests. Please try again later.",
  },
});

/* ========================================
   API ROUTES
======================================== */

app.use(
  "/api/contact",
  contactLimiter,
  contactRoutes
);

/* ========================================
   404
======================================== */

app.use(notFoundMiddleware);

/* ========================================
   ERROR HANDLER
======================================== */

app.use(errorMiddleware);

/* ========================================
   START SERVER
======================================== */

app.listen(PORT,"0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});