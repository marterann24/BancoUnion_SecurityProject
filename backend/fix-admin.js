const bcrypt = require('bcrypt');
const pool   = require('./src/config/db');

(async () => {
  try {
    const hash = await bcrypt.hash('secreto123', 10);

    const result = await pool.query(
      'UPDATE usuarios SET password = $1 WHERE username = $2',
      [hash, 'admin_santiago']
    );

    if (result.rowCount === 0) {
      console.log('⚠️  No se encontró el usuario admin_santiago en la base de datos.');
    } else {
      console.log('✅ Contraseña de admin actualizada con éxito');
    }
  } catch (err) {
    console.error('❌ Error al actualizar contraseña:', err.message);
  } finally {
    await pool.end();
    process.exit(0);
  }
})();
