import { FiUsers, FiAlertTriangle, FiDollarSign } from 'react-icons/fi';

const STATS = [
  { label: 'Total empleados',       valor: '214',           Icon: FiUsers,         color: 'text-blue-400',  bg: 'bg-blue-400/10'  },
  { label: 'Embargos activos',      valor: '3',             Icon: FiAlertTriangle, color: 'text-amber-400', bg: 'bg-amber-400/10' },
  { label: 'Masa salarial mensual', valor: 'Bs. 1,842,300', Icon: FiDollarSign,    color: 'text-cyan-400',  bg: 'bg-cyan-400/10'  },
];

const AdminStats = () => (
  <div className="grid grid-cols-3 gap-4 mb-6">
    {STATS.map(({ label, valor, Icon, color, bg }) => (
      <div key={label} className="bg-slate-800 rounded-2xl p-5 border border-slate-700/50 shadow-xl flex items-center gap-4">
        <div className={`w-12 h-12 ${bg} rounded-xl flex items-center justify-center flex-shrink-0`}>
          <Icon className={`text-xl ${color}`} />
        </div>
        <div>
          <p className="text-slate-400 text-xs mb-1">{label}</p>
          <p className="text-white text-xl font-bold">{valor}</p>
        </div>
      </div>
    ))}
  </div>
);

export default AdminStats;
