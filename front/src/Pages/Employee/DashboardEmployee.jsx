import Sidebar           from '../../Components/ui/Sidebar';
import TopNav            from '../../Components/ui/TopNav';
import PayrollBanner     from '../../Components/Employee/PayrollBanner';
import RecentTransactions from '../../Components/Employee/RecentTransactions';

const DashboardEmployee = () => (
  <div className="flex min-h-screen w-full bg-slate-900">
    <Sidebar rol="cajero" />

    <div className="flex flex-col flex-1 min-w-0">
      <TopNav rol="cajero" />

      <main className="flex-1 p-8 overflow-y-auto">
        <h2 className="text-white text-xl font-semibold mb-1">Bienvenido, Carlos Mamani</h2>
        <p className="text-slate-400 text-sm mb-6">Cajero Principal — Sucursal Central</p>
        <PayrollBanner />
        <RecentTransactions />
      </main>
    </div>
  </div>
);

export default DashboardEmployee;
