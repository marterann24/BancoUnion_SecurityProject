const COLUMNS = ['Fecha', 'Descripción', 'Tipo', 'Monto'];

const ROWS = [
  { fecha: '2026-05-01', descripcion: 'Salario base',                 tipo: 'Crédito', monto: 'Bs. 8,500.00'  },
  { fecha: '2026-05-01', descripcion: 'Bono productividad',           tipo: 'Crédito', monto: 'Bs. 1,200.00'  },
  { fecha: '2026-05-03', descripcion: 'Descuento seguro médico',      tipo: 'Débito',  monto: '- Bs. 320.00'  },
  { fecha: '2026-05-05', descripcion: 'Aporte AFP',                   tipo: 'Débito',  monto: '- Bs. 510.00'  },
  { fecha: '2026-05-10', descripcion: 'Pago vacaciones proporcional', tipo: 'Crédito', monto: 'Bs. 2,100.00'  },
];

const RecentTransactions = () => (
  <div className="bg-slate-800 rounded-2xl shadow-xl overflow-hidden border border-slate-700/50">
    <div className="px-6 py-4 border-b border-slate-700/50 flex items-center justify-between">
      <h3 className="text-white font-semibold text-base">Transacciones recientes</h3>
      <span className="text-xs text-slate-500 bg-slate-900/60 px-2.5 py-1 rounded-full">
        {ROWS.length} registros
      </span>
    </div>

    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="bg-slate-900/50 border-b border-slate-700/50">
            {COLUMNS.map((col) => (
              <th key={col} className="px-6 py-3 text-left text-xs text-slate-400 uppercase tracking-wider font-semibold">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {ROWS.map((row, i) => (
            <tr key={i} className="border-b border-slate-700/30 hover:bg-slate-700/25 transition-colors">
              {Object.values(row).map((val, j) => (
                <td key={j} className="px-6 py-4 text-sm text-slate-300 whitespace-nowrap">{val}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default RecentTransactions;
