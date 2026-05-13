import { useState, useEffect } from 'react';
import TableTransactions from './TableTransactions';

const API  = 'http://localhost:3001';
const COLS = ['ID', 'Cliente VIP', 'Monto Deuda', 'Nivel Riesgo', 'Estatus Legal'];

const EmbargosList = () => {
  const [embargos, setEmbargos] = useState([]);

  useEffect(() => {
    fetch(`${API}/api/embargos`)
      .then((r) => r.json())
      .then(setEmbargos)
      .catch((err) => console.error('GET /api/embargos:', err));
  }, []);

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-white text-xl font-semibold">Embargos VIP</h2>
        <p className="text-slate-400 text-sm mt-0.5">{embargos.length} registros en la base de datos</p>
      </div>

      <TableTransactions title="Clientes con Embargo" columns={COLS} data={embargos} />
    </div>
  );
};

export default EmbargosList;
