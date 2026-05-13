import {
  FiUsers,
  FiAlertTriangle,
  FiDollarSign,
} from "react-icons/fi";

const AdminStats = ({
  totalEmpleados = 0,
  totalEmbargos = 0,
  masaSalarial = 0,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      
      <div className="bg-banco-card rounded-2xl p-6 border border-slate-700/50 shadow-xl flex items-center gap-4">
        <div className="w-14 h-14 bg-banco-acento/10 rounded-xl flex items-center justify-center flex-shrink-0">
          <FiUsers className="text-2xl text-banco-brillo" />
        </div>
        <div>
          <p className="text-slate-400 text-xs mb-1">Total empleados</p>
          <p className="text-white text-3xl font-bold">{String(totalEmpleados)}</p>
        </div>
      </div>

      <div className="bg-banco-card rounded-2xl p-6 border border-slate-700/50 shadow-xl flex items-center gap-4">
        <div className="w-14 h-14 bg-amber-400/10 rounded-xl flex items-center justify-center flex-shrink-0">
          <FiAlertTriangle className="text-2xl text-amber-400" />
        </div>
        <div>
          <p className="text-slate-400 text-xs mb-1">Embargos activos</p>
          <p className="text-white text-3xl font-bold">{String(totalEmbargos)}</p>
        </div>
      </div>

      <div className="bg-banco-card rounded-2xl p-6 border border-slate-700/50 shadow-xl flex items-center gap-4">
        <div className="w-14 h-14 bg-banco-acento/10 rounded-xl flex items-center justify-center flex-shrink-0">
          <FiDollarSign className="text-2xl text-banco-acento" />
        </div>
        <div>
          <p className="text-slate-400 text-xs mb-1">Masa salarial mensual</p>
          <p className="text-white text-3xl font-bold">
            Bs. {Number(masaSalarial).toLocaleString("es-BO")}
          </p>
        </div>
      </div>

    </div>
  );
};

export default AdminStats;