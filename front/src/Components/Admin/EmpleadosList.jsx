import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiUserPlus } from 'react-icons/fi';
import TableTransactions from './TableTransactions';

const API  = 'http://localhost:3001';
const COLS = ['ID', 'Nombre Completo', 'Username', 'Rol', 'Salario'];

const EmpleadosList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`${API}/api/users`)
      .then((r) => r.json())
      .then(setUsers)
      .catch((err) => console.error('GET /api/users:', err));
  }, []);

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-white text-xl font-semibold">Empleados</h2>
          <p className="text-slate-400 text-sm mt-0.5">{users.length} registros en la base de datos</p>
        </div>
        <Link
          to="/admin/nuevo-empleado"
          className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold px-5 py-2.5 rounded-xl text-sm transition-all shadow-lg shadow-emerald-500/25 cursor-pointer"
        >
          <FiUserPlus />
          Registrar Nuevo Empleado
        </Link>
      </div>

      <TableTransactions title="Lista de Empleados" columns={COLS} data={users} />
    </div>
  );
};

export default EmpleadosList;
