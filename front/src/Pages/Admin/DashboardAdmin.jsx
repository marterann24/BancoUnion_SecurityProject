import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Sidebar           from '../../Components/ui/Sidebar';
import TopNav            from '../../Components/ui/TopNav';
import AdminStats        from '../../Components/Admin/AdminStats';
import TableTransactions from '../../Components/Admin/TableTransactions';

const API = 'http://localhost:3001';

const USER_COLS    = ['ID', 'Nombre Completo', 'Username', 'Rol', 'Salario'];
const EMBARGO_COLS = ['ID', 'Cliente VIP', 'Monto Deuda', 'Nivel Riesgo', 'Estatus Legal'];

const DashboardAdmin = () => {
  const [users,    setUsers]    = useState([]);
  const [embargos, setEmbargos] = useState([]);

  useEffect(() => {
    fetch(`${API}/api/users`)
      .then((r) => r.json())
      .then(setUsers)
      .catch((err) => console.error('GET /api/users:', err));

    fetch(`${API}/api/embargos`)
      .then((r) => r.json())
      .then(setEmbargos)
      .catch((err) => console.error('GET /api/embargos:', err));
  }, []);

  const masaSalarial = users.reduce((sum, u) => sum + Number(u.salario || 0), 0);

  return (
    <div className="flex min-h-screen w-full bg-banco-fondo">
      <Sidebar rol="admin" />

      <div className="flex flex-col flex-1 min-w-0">
        <TopNav rol="admin" />

        <main className="flex-1 p-8 overflow-y-auto space-y-8">
          <div>
            <h2 className="text-white text-xl font-semibold mb-1">
              <span className="text-banco-acento">Panel de </span>Dirección
            </h2>
            <p className="text-slate-400 text-sm">Director General — Banco Unión</p>
          </div>

          <AdminStats
            totalEmpleados={users.length}
            totalEmbargos={embargos.length}
            masaSalarial={masaSalarial}
          />

          <div>
            <TableTransactions
              title="Empleados"
              columns={USER_COLS}
              data={users.slice(0, 5)}
            />
            <div className="mt-3 flex justify-end">
              <Link
                to="/admin/empleados"
                className="text-sm text-white bg-banco-acento hover:bg-banco-hover px-4 py-2 rounded-xl transition-all cursor-pointer"
              >
                Ver tabla completa →
              </Link>
            </div>
          </div>

          <div>
            <TableTransactions
              title="Embargos VIP"
              columns={EMBARGO_COLS}
              data={embargos.slice(0, 5)}
            />
            <div className="mt-3 flex justify-end">
              <Link
                to="/admin/embargos"
                className="text-sm text-white bg-banco-acento hover:bg-banco-hover px-4 py-2 rounded-xl transition-all cursor-pointer"
              >
                Ver tabla completa →
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardAdmin;
