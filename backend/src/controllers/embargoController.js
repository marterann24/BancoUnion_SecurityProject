const pool = require("../config/db");

// ✅ SEGURO — Parámetros preparados en todas las queries

const getAllEmbargos = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM embargos ORDER BY id"
    );
    res.status(200).json(result.rows);
  } catch (error) {
    console.error("getAllEmbargos:", error.message);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

const getEmbargoById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query(
      "SELECT * FROM embargos WHERE id = $1",
      [id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Embargo no encontrado" });
    }
    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error("getEmbargoById:", error.message);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

module.exports = { getAllEmbargos, getEmbargoById };
