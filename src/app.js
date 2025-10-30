// src/app.js
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
 const userRoutes = require("./routes/user.routes"); 

dotenv.config();

const app = express();

// 🧠 Middlewares globaux
app.use(express.json());
app.use(helmet()); // sécurise les headers HTTP
app.use(morgan("dev")); // log les requêtes
app.use("/api/users", userRoutes); 

// ⚙️ Connexion MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB error:", err));

module.exports = app;
