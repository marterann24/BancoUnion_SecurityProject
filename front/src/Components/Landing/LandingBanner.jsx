import { useNavigate } from 'react-router-dom';
import { FiArrowRight, FiShield, FiTrendingUp, FiUsers } from 'react-icons/fi';

const BG = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop';

const features = [
  { Icon: FiTrendingUp, label: 'Nóminas en tiempo real' },
  { Icon: FiUsers,      label: 'Gestión de empleados'   },
  { Icon: FiShield,     label: 'Control de embargos'    },
];

const LandingBanner = () => {
  const navigate = useNavigate();

  return (
    <section
      className="flex-1 flex flex-col items-center justify-center px-6 text-center relative overflow-hidden"
      style={{ backgroundImage: `url(${BG})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-banco-fondo/78" />

      <div className="relative z-10 flex flex-col items-center">
        <div className="inline-flex items-center gap-2 bg-banco-acento/10 border border-banco-acento/30 text-banco-acento text-xs px-4 py-1.5 rounded-full mb-6 font-medium backdrop-blur-sm">
          <FiShield />
          Sistema interno certificado
        </div>

        <h1 className="text-5xl font-bold text-white mb-4 leading-tight drop-shadow-lg">
          Gestión de Nóminas<br />
          <span className="text-banco-acento">Banco Unión</span>
        </h1>

        <p className="text-slate-300 text-lg mb-10 max-w-md">
          Plataforma interna para administración de salarios, transacciones y embargos del personal bancario.
        </p>

        <button
          onClick={() => navigate('/login')}
          className="flex items-center gap-2 bg-banco-acento hover:bg-banco-hover text-white px-8 py-3.5 rounded-xl font-semibold text-base transition-all shadow-xl shadow-banco-acento/40 cursor-pointer"
        >
          Ingresar al sistema <FiArrowRight />
        </button>

        <div className="flex flex-wrap justify-center gap-3 mt-16">
          {features.map(({ Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 bg-banco-card/60 border border-slate-700/50 text-slate-300 text-sm px-4 py-2.5 rounded-xl backdrop-blur-sm"
            >
              <Icon className="text-banco-acento" />
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandingBanner;
