const pool = require("../config/db");

// ============================================================
// ⚠️  LOGIN INTENCIONALMENTE VULNERABLE A SQL INJECTION
//     Demostración para auditoría de seguridad.
//     Los valores del body se concatenan directamente al query
//     sin ningún tipo de sanitización ni parámetro preparado.
// ============================================================
const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: "Faltan credenciales" });
  }

  // ❌ CONCATENACIÓN DIRECTA — NUNCA hagas esto en producción
  const query = `SELECT * FROM usuarios WHERE username = '${username}' AND password = '${password}'`;

  // Imprime la query para que sea visible en la auditoría
  console.log("🔴 [SQL INJECTION DEMO] Query ejecutada:");
  console.log("   ", query);
  console.log("─────────────────────────────────────────────────");
  console.log("   Bypass de ejemplo: username = admin'--");
  console.log("   Query resultante:  SELECT * FROM usuarios WHERE username = 'admin'--' AND password = '...'");
  console.log("─────────────────────────────────────────────────");

  try {
    const result = await pool.query(query);

    if (result.rows.length === 0) {
      return res.status(401).json({ error: "Credenciales incorrectas" });
    }

    return res.status(200).json({
      mensaje: "Login exitoso",
      usuario: result.rows[0],
    });
  } catch (error) {
    console.error("Error en login:", error.message);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};

module.exports = { login };
