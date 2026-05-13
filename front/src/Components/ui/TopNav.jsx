import { FiBell, FiUser } from "react-icons/fi";
import { MdSpaceDashboard } from "react-icons/md";

function TopNav({ rol }) {
  return (
    <nav className="bg-slate-800 border-b border-slate-700/60 h-16 flex items-center justify-between px-6 flex-shrink-0">
      <div className="flex items-center gap-2">
        <MdSpaceDashboard className="text-cyan-400 text-2xl" />
        <span className="text-white font-bold text-lg tracking-wide">
          Banco Unión
        </span>
      </div>

      <div className="flex items-center gap-6">
        {/* Sin autenticar: solo mostrar botón de inicio de sesión */}
        {!rol && (
          <button className="bg-cyan-500 hover:bg-cyan-400 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors">
            Iniciar sesión
          </button>
        )}

        {/* Cajero autenticado */}
        {rol === "cajero" && (
          <>
            <a href="/empleado" className="text-slate-300 hover:text-cyan-400 text-sm transition-colors">
              Mi Nómina
            </a>
            <a href="#" className="text-slate-300 hover:text-cyan-400 text-sm transition-colors">
              Mi Perfil
            </a>
          </>
        )}

        {/* Admin autenticado */}
        {rol === "admin" && (
          <>
            <a href="/empleado" className="text-slate-300 hover:text-cyan-400 text-sm transition-colors">
              Empleados
            </a>
            <a href="/admin" className="text-slate-300 hover:text-cyan-400 text-sm transition-colors">
              Embargos VIP
            </a>
            <a href="#" className="text-slate-300 hover:text-cyan-400 text-sm transition-colors">
              Nóminas
            </a>
            <a href="#" className="text-slate-300 hover:text-cyan-400 text-sm transition-colors">
              Reportes
            </a>
          </>
        )}

        {/* Iconos solo cuando está autenticado */}
        {rol && (
          <>
            <button className="text-slate-400 hover:text-white transition-colors">
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