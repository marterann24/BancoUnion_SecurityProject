import { FiDownload, FiEye, FiTrendingUp } from 'react-icons/fi';
import { TbReceipt } from 'react-icons/tb';

const EMPLEADO = 'Carlos Mamani';
const SALARIO   = 10970;

const PayrollBanner = () => (
  <div className="relative bg-gradient-to-br from-blue-700 via-blue-600 to-slate-800 rounded-2xl p-8 mb-6 overflow-hidden shadow-xl">
    <div className="absolute -top-10 -right-10 w-48 h-48 bg-blue-500/20 rounded-full pointer-events-none" />
    <div className="absolute -bottom-8 right-10 w-28 h-28 bg-cyan-400/10 rounded-full pointer-events-none" />

    <div className="relative flex items-center justify-between gap-6">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <TbReceipt className="text-cyan-400 text-xl" />
          <p className="text-blue-200 text-xs uppercase tracking-widest font-medium">Salario neto del mes</p>
        </div>
        <h2 className="text-5xl font-bold text-white mb-2 tracking-tight">
          Bs. {SALARIO.toLocaleString('es-BO')}
        </h2>
        <p className="text-blue-200 text-sm flex items-center gap-1.5">
          <FiTrendingUp className="text-cyan-400" />
          {EMPLEADO} — Mayo 2026
        </p>
      </div>

      <div className="flex flex-col gap-3 flex-shrink-0">
        <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-xl px-5 py-2.5 text-sm font-medium transition-all backdrop-blur-sm">
          <FiEye /> Ver detalle
        </button>
        <button className="flex items-center gap-2 bg-cyan-400 hover:bg-cyan-300 text-slate-900 rounded-xl px-5 py-2.5 text-sm font-bold transition-all shadow-lg shadow-cyan-400/30">
          <FiDownload /> Descargar recibo de nómina (PDF)
        </button>
      </div>
    </div>
  </div>
);

export default PayrollBanner;
