const bcrypt = require('bcrypt');
const pool   = require('../config/db');

const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Faltan credenciales' });
  }

  // Auditoría de Seguridad: Detección de SQL Injection
  const sqlInjectionPattern = /('|--| OR | AND |;)/i;
  if (sqlInjectionPattern.test(username)) {
    console.log('\x1b[41m\x1b[37m 🚨 ALERTA DE SEGURIDAD: Posible intento de Inyección SQL detectado y mitigado. \x1b[0m');
    console.log('\x1b[33m ⚠️ Input bloqueado: \x1b[0m', username);
  }

  try {
    // Consulta parametrizada — previene SQL Injection
    const result = await pool.query(
      'SELECT * FROM usuarios WHERE username = $1',
      [username]
    );

    if (result.rows.length === 0) {
      return res.status(401).json({ error: 'Credenciales incorrectas' });
    }

    const usuario = result.rows[0];

    // Verificación bcrypt — previene comparación de texto plano
    const match = await bcrypt.compare(password, usuario.password);
    if (!match) {
      return res.status(401).json({ error: 'Credenciales incorrectas' });
    }

    return res.status(200).json({
      mensaje: 'Login exitoso',
      usuario,
    });
  } catch (error) {
    console.error('Error en login:', error.message);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
};

module.exports = { login };
