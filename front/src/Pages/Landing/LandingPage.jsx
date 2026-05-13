import { MdSpaceDashboard } from 'react-icons/md';
import LandingBanner from '../../Components/Landing/LandingBanner';

const LandingPage = () => (
  <div className="min-h-screen w-full bg-slate-900 flex flex-col">
    <header className="flex items-center px-10 py-5 border-b border-slate-800/80 bg-slate-900/95 backdrop-blur-sm flex-shrink-0">
      <MdSpaceDashboard className="text-cyan-400 text-3xl mr-2" />
      <span className="text-white text-xl font-bold tracking-wide">Banco Unión</span>
    </header>

    <LandingBanner />

    <footer className="py-5 text-center text-slate-600 text-xs border-t border-slate-800 flex-shrink-0 bg-slate-900">
      Banco Unión © 2026 — Solo para personal autorizado
    </footer>
  </div>
);

export default LandingPage;
