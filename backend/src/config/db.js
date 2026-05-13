const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  host:     process.env.DB_HOST     || "localhost",
  port:     parseInt(process.env.DB_PORT) || 5432,
  database: process.env.DB_NAME     || "banco_db",
  user:     process.env.DB_USER     || "postgres",
  password: process.env.DB_PASS     || "",
});

pool.on("connect", () => console.log("✅ Conectado a PostgreSQL — banco_db"));
pool.on("error",   (err) => console.error("❌ Error en el pool de Postgres:", err.message));

module.exports = pool;
