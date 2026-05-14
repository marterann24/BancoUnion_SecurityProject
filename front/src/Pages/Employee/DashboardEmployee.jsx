import { useState, useEffect } from 'react';
import { FiAlertCircle } from 'react-icons/fi';
import Sidebar            from '../../Components/ui/Sidebar';
import TopNav             from '../../Components/ui/TopNav';
import PayrollBanner      from '../../Components/Employee/PayrollBanner';
import RecentTransactions from '../../Components/Employee/RecentTransactions';

const DashboardEmployee = () => {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem('usuario_banco');
    if (stored) setUsuario(JSON.parse(stored));
  }, []);

  return (
    <div className="flex min-h-screen w-full bg-banco-fondo">
      <Sidebar rol="cajero" />

      <div className="flex flex-col flex-1 min-w-0">
        <TopNav rol="cajero" />

        <main className="flex-1 p-8 overflow-y-auto">
          <div className="flex items-start gap-3 bg-amber-400/10 border border-amber-400/30 rounded-xl px-4 py-3 mb-6">
            <FiAlertCircle className="text-amber-400 text-lg flex-shrink-0 mt-0.5" />
            <p className="text-amber-400 text-sm leading-relaxed">
              <span className="font-semibold">Aviso de Seguridad:</span> El sistema detecta que está
              utilizando una contraseña temporal. Por favor, diríjase al apartado de{' '}
              <span className="font-semibold">Configuración</span> para actualizar su credencial y
              asegurar su cuenta.
            </p>
          </div>

          <h2 className="text-white text-xl font-semibold mb-1">
            Bienvenido, {usuario?.nombre_completo ?? 'Empleado'}
          </h2>
          <p className="text-slate-400 text-sm mb-6">
            {usuario?.rol ?? 'Cajero'} — Sucursal Central
          </p>

          <PayrollBanner
            empleado={usuario?.nombre_completo}
            salario={Number(usuario?.salario ?? 0)}
          />

          <RecentTransactions />
        </main>
      </div>
    </div>
  );
};

export default DashboardEmployee;
