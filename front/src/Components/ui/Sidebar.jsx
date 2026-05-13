import {
  FiHome, FiDollarSign, FiList, FiUser,
  FiUsers, FiSettings, FiBarChart2, FiLogOut,
} from 'react-icons/fi';
import { MdGavel } from 'react-icons/md';

const menuCajero = [
  { label: 'Inicio',         Icon: FiHome },
  { label: 'Mi Nómina',      Icon: FiDollarSign },
  { label: 'Transacciones',  Icon: FiList },
  { label: 'Mi Perfil',      Icon: FiUser },
];

const menuAdmin = [
  { label: 'Inicio',         Icon: FiHome },
  { label: 'Empleados',      Icon: FiUsers },
  { label: 'Nóminas',        Icon: FiDollarSign },
  { label: 'Embargos VIP',   Icon: MdGavel },
  { label: 'Reportes',       Icon: FiBarChart2 },
  { label: 'Configuración',  Icon: FiSettings },
];

function Sidebar({ rol }) {
  const menu = rol === 'admin' ? menuAdmin : menuCajero;

  return (
    <aside className="w-56 min-h-screen bg-slate-900 border-r border-slate-700/50 flex flex-col flex-shrink-0">
      <div className="px-5 py-5 border-b border-slate-700/50">
        <p className="text-xs text-slate-500 uppercase tracking-widest font-medium">
          {rol === 'admin' ? 'Director General' : 'Cajero'}
        </p>
      </div>

      <nav className="flex-1 py-3">
        {menu.map(({ label, Icon }) => (
          <a
            key={label}
            href="#"
            className="flex items-center gap-3 px-5 py-3 text-slate-400 hover:text-cyan-400 hover:bg-slate-800/70 text-sm transition-all group"
          >
            <Icon className="text-base group-hover:text-cyan-400 flex-shrink-0" />
            {label}
          </a>
        ))}
      </nav>

      <div className="px-5 py-4 border-t border-slate-700/50">
        <a
          href="/login"
          className="flex items-center gap-3 text-slate-500 hover:text-red-400 text-sm transition-colors"
        >
          <FiLogOut className="text-base flex-shrink-0" />
          Cerrar sesión
        </a>
      </div>
    </aside>
  );
}

export default Sidebar;
