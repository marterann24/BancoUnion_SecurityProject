const express      = require("express");
const cors         = require("cors");
const authRoutes   = require("./routes/authRoutes");
const userRoutes   = require("./routes/userRoutes");
const embargoRoutes = require("./routes/embargoRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// ── Rutas ──────────────────────────────────────────────────
// /api/auth/login      ⚠️  Vulnerable (demo SQL Injection)
// /api/users           ✅  CRUD seguro con parámetros preparados
// /api/embargos        ✅  GET seguro con parámetros preparados
app.use("/api/auth",     authRoutes);
app.use("/api/users",    userRoutes);
app.use("/api/embargos", embargoRoutes);

module.exports = app;
