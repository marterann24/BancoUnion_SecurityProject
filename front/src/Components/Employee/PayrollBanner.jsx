import { FiDownload, FiEye, FiTrendingUp } from 'react-icons/fi';
import { TbReceipt } from 'react-icons/tb';

const PayrollBanner = ({ empleado = '—', salario = 0 }) => (
  <div className="relative bg-gradient-to-br from-blue-700 via-blue-600 to-banco-card rounded-2xl p-8 mb-6 overflow-hidden shadow-xl">
    <div className="absolute -top-10 -right-10 w-48 h-48 bg-banco-acento/20 rounded-full pointer-events-none" />
    <div className="absolute -bottom-8 right-10 w-28 h-28 bg-banco-acento/10 rounded-full pointer-events-none" />

    <div className="relative flex items-center justify-between gap-6">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <TbReceipt className="text-banco-acento text-xl" />
          <p className="text-banco-acento text-xs uppercase tracking-widest font-medium">Salario neto del mes</p>
        </div>
        <h2 className="text-5xl font-bold text-white mb-2 tracking-tight">
          Bs. {Number(salario).toLocaleString('es-BO')}
        </h2>
        <p className="text-banco-acento text-sm flex items-center gap-1.5">
          <FiTrendingUp className="text-banco-acento" />
          {empleado} — Mayo 2026
        </p>
      </div>

      <div className="flex flex-col gap-3 flex-shrink-0">
        <button className="flex items-center gap-2 bg-banco-acento hover:bg-banco-hover text-white border border-banco-acento rounded-xl px-5 py-2.5 text-sm font-medium transition-all backdrop-blur-sm cursor-pointer">
          <FiEye /> Ver detalle
        </button>
        <button className="flex items-center gap-2 bg-banco-acento hover:bg-banco-hover text-white rounded-xl px-5 py-2.5 text-sm font-bold transition-all shadow-lg cursor-pointer">
          <FiDownload /> Descargar recibo de nómina (PDF)
        </button>
      </div>
    </div>
  </div>
);

export default PayrollBanner;
