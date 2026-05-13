import { FiUsers, FiAlertTriangle, FiDollarSign, FiShield } from 'react-icons/fi';

const AdminStats = ({ totalEmpleados = 0, totalEmbargos = 0, masaSalarial = 0 }) => {
  const stats = [
    {
      label: 'Total empleados',
      valor: String(totalEmpleados),
      Icon:  FiUsers,
      color: 'text-banco-brillo',
      bg:    'bg-banco-acento/10',
    },
    {
      label: 'Embargos activos',
      valor: String(totalEmbargos),
      Icon:  FiAlertTriangle,
      color: 'text-amber-400',
      bg:    'bg-amber-400/10',
    },
    {
      label: 'Masa salarial mensual',
      valor: `Bs. ${Number(masaSalarial).toLocaleString('es-BO')}`,
      Icon:  FiDollarSign,
      color: 'text-banco-acento',
      bg:    'bg-banco-acento/10',
    },
    {
      label: 'Nivel de Riesgo del Sistema',
      valor: 'CRÍTICO',
      Icon:  FiShield,
      color: 'text-red-400',
      bg:    'bg-red-400/10',
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-4">
      {stats.map(({ label, valor, Icon, color, bg }) => (
        <div key={label} className="bg-banco-card rounded-2xl p-6 border border-slate-700/50 shadow-xl flex items-center gap-4">
          <div className={`w-14 h-14 ${bg} rounded-xl flex items-center justify-center flex-shrink-0`}>
            <Icon className={`text-2xl ${color}`} />
          </div>
          <div>
            <p className="text-slate-400 text-xs mb-1">{label}</p>
            <p className="text-white text-3xl font-bold">{valor}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminStats;
