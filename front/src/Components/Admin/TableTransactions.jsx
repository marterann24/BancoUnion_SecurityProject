const COLUMNS = ['ID', 'Empleado', 'Monto', 'Motivo', 'Estado', 'Fecha'];

const ROWS = [
  { id: 'EMB-001', empleado: 'Juan Quispe Flores',  monto: 'Bs. 45,000.00', motivo: 'Deuda tributaria', estado: 'Activo',    fecha: '2026-03-15' },
  { id: 'EMB-002', empleado: 'María Condori Apaza', monto: 'Bs. 12,500.00', motivo: 'Orden judicial',   estado: 'Pendiente', fecha: '2026-04-01' },
  { id: 'EMB-003', empleado: 'Roberto Vargas Lima', monto: 'Bs. 78,200.00', motivo: 'Deuda bancaria',   estado: 'Activo',    fecha: '2026-02-20' },
  { id: 'EMB-004', empleado: 'Ana Torrez Sánchez',  monto: 'Bs.  9,800.00', motivo: 'Deuda tributaria', estado: 'Ejecutado', fecha: '2026-01-10' },
];

const TableTransactions = () => (
  <div className="bg-slate-800 rounded-2xl shadow-xl overflow-hidden border border-slate-700/50">
    <div className="px-6 py-4 border-b border-slate-700/50 flex items-center justify-between">
      <h3 className="text-white font-semibold text-base">Embargos VIP</h3>
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

export default TableTransactions;
