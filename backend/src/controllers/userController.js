const bcrypt = require('bcrypt');
const pool   = require('../config/db');

const getAllUsers = async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT id, nombre_completo, username, rol, salario FROM usuarios ORDER BY id'
    );
    res.status(200).json(result.rows);
  } catch (error) {
    console.error('getAllUsers:', error.message);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query(
      'SELECT id, nombre_completo, username, rol, salario FROM usuarios WHERE id = $1',
      [id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error('getUserById:', error.message);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

const createUser = async (req, res) => {
  const { nombre_completo, username, password, rol, salario } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await pool.query(
      `INSERT INTO usuarios (nombre_completo, username, password, rol, salario)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING id, nombre_completo, username, rol, salario`,
      [nombre_completo, username, hashedPassword, rol, salario]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('createUser:', error.message);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { nombre_completo, username, rol, salario } = req.body;
  try {
    const result = await pool.query(
      `UPDATE usuarios
       SET nombre_completo = $1, username = $2, rol = $3, salario = $4
       WHERE id = $5
       RETURNING id, nombre_completo, username, rol, salario`,
      [nombre_completo, username, rol, salario, id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error('updateUser:', error.message);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query(
      'DELETE FROM usuarios WHERE id = $1 RETURNING id',
      [id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    res.status(200).json({ mensaje: `Usuario ${id} eliminado correctamente` });
  } catch (error) {
    console.error('deleteUser:', error.message);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

module.exports = { getAllUsers, getUserById, createUser, updateUser, deleteUser };
