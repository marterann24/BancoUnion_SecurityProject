import { FiBell, FiUser } from "react-icons/fi";
import { MdSpaceDashboard } from "react-icons/md";

function TopNav({ rol }) {
  return (
    <nav className="bg-slate-800 border-b border-slate-700/60 h-16 flex items-center justify-between px-6 flex-shrink-0">
      <div className="flex items-center gap-2">
        <MdSpaceDashboard className="text-emerald-400 text-2xl" />
        <span className="text-white font-bold text-lg tracking-wide">
          Banco Unión
        </span>
      </div>

      <div className="flex items-center gap-6">
        {!rol && (
          <button className="bg-emerald-500 hover:bg-emerald-400 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors cursor-pointer">
            Iniciar sesión
          </button>
        )}

        {rol === "cajero" && (
          <>
            <a href="/empleado" className="text-slate-300 hover:text-emerald-400 text-sm transition-colors cursor-pointer">
              Mi Nómina
            </a>
            <a href="#" className="text-slate-300 hover:text-emerald-400 text-sm transition-colors cursor-pointer">
              Mi Perfil
            </a>
          </>
        )}

        {rol === "admin" && (
          <>
            <a href="/admin/empleados" className="text-slate-300 hover:text-emerald-400 text-sm transition-colors cursor-pointer">
              Empleados
            </a>
            <a href="/admin/embargos" className="text-slate-300 hover:text-emerald-400 text-sm transition-colors cursor-pointer">
              Embargos VIP
            </a>
            <a href="#" className="text-slate-300 hover:text-emerald-400 text-sm transition-colors cursor-pointer">
              Nóminas
            </a>
            <a href="#" className="text-slate-300 hover:text-emerald-400 text-sm transition-colors cursor-pointer">
              Reportes
            </a>
          </>
        )}

        {rol && (
          <>
            <button className="text-slate-400 hover:text-white transition-colors cursor-pointer">
              <FiBell className="text-xl" />
            </button>
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/30">
              <FiUser className="text-white text-sm" />
            </div>
          </>
        )}
      </div>
    </nav>
  );
}

export default TopNav;
