import { Link } from 'react-router-dom';
import {
  FiHome, FiDollarSign, FiList, FiUser,
  FiUsers, FiSettings, FiBarChart2, FiLogOut,
} from 'react-icons/fi';
import { MdGavel } from 'react-icons/md';

const menuCajero = [
  { label: 'Inicio',        Icon: FiHome,       to: '/empleado' },
  { label: 'Mi Nómina',     Icon: FiDollarSign, to: '/empleado' },
  { label: 'Transacciones', Icon: FiList,       to: '/empleado' },
  { label: 'Mi Perfil',     Icon: FiUser,       to: '/empleado' },
];

const menuAdmin = [
  { label: 'Inicio',        Icon: FiHome,       to: '/admin' },
  { label: 'Empleados',     Icon: FiUsers,      to: '/admin/empleados' },
  { label: 'Nóminas',       Icon: FiDollarSign, to: '/admin' },
  { label: 'Embargos VIP',  Icon: MdGavel,      to: '/admin/embargos' },
  { label: 'Reportes',      Icon: FiBarChart2,  to: '/admin' },
  { label: 'Configuración', Icon: FiSettings,   to: '/admin' },
];

function Sidebar({ rol }) {
  const menu = rol === 'admin' ? menuAdmin : menuCajero;

  return (
    <aside className="w-56 min-h-screen bg-banco-fondo border-r border-slate-700/50 flex flex-col flex-shrink-0">
      <div className="px-5 py-5 border-b border-slate-700/50">
        <p className="text-xs text-slate-500 uppercase tracking-widest font-medium">
          {rol === 'admin' ? 'Director General' : 'Cajero'}
        </p>
      </div>

      <nav className="flex-1 py-3">
        {menu.map(({ label, Icon, to }) => (
          <Link
            key={label}
            to={to}
            className="flex items-center gap-3 px-5 py-3 text-slate-400 hover:text-banco-acento hover:bg-banco-card/70 text-sm transition-all group cursor-pointer"
          >
            <Icon className="text-base group-hover:text-banco-acento flex-shrink-0" />
            {label}
          </Link>
        ))}
      </nav>

      <div className="px-5 py-4 border-t border-slate-700/50">
        <Link
          to="/login"
          className="flex items-center gap-3 text-slate-500 hover:text-red-400 text-sm transition-colors cursor-pointer"
        >
          <FiLogOut className="text-base flex-shrink-0" />
          Cerrar sesión
        </Link>
      </div>
    </aside>
  );
}

export default Sidebar;
