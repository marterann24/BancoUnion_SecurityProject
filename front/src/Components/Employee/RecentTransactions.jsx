import { useState, useEffect } from 'react';

const API     = 'http://localhost:3001';
const COLUMNS = ['Fecha', 'Descripción', 'Tipo', 'Monto'];

const RecentTransactions = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const stored  = localStorage.getItem('usuario_banco');
    const usuario = stored ? JSON.parse(stored) : null;
    if (!usuario?.id) return;

    fetch(`${API}/api/transactions?usuario_id=${usuario.id}`)
      .then((r) => r.json())
      .then((data) => setRows(Array.isArray(data) ? data : []))
      .catch(() => setRows([]));
  }, []);

  return (
    <div className="bg-banco-card rounded-2xl shadow-xl overflow-hidden border border-slate-700/50">
      <div className="px-6 py-4 border-b border-slate-700/50 flex items-center justify-between">
        <h3 className="text-white font-semibold text-base">Transacciones recientes</h3>
        <span className="text-xs text-slate-500 bg-banco-fondo/60 px-2.5 py-1 rounded-full">
          {rows.length} registros
        </span>
      </div>

      {rows.length === 0 ? (
        <p className="text-center text-slate-500 py-12 text-sm">Sin transacciones registradas</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-banco-fondo/50 border-b border-slate-700/50">
                {COLUMNS.map((col) => (
                  <th key={col} className="px-6 py-3 text-left text-xs text-slate-400 uppercase tracking-wider font-semibold">
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className="border-b border-slate-700/30 hover:bg-slate-700/25 transition-colors">
                  {Object.values(row).map((val, j) => (
                    <td key={j} className="px-6 py-4 text-sm text-slate-300 whitespace-nowrap">{val}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default RecentTransactions;
