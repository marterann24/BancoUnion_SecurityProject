import Sidebar           from '../../Components/ui/Sidebar';
import TopNav            from '../../Components/ui/TopNav';
import AdminStats        from '../../Components/Admin/AdminStats';
import TableTransactions from '../../Components/Admin/TableTransactions';

const DashboardAdmin = () => (
  <div className="flex min-h-screen w-full bg-slate-900">
    <Sidebar rol="admin" />

    <div className="flex flex-col flex-1 min-w-0">
      <TopNav rol="admin" />

      <main className="flex-1 p-8 overflow-y-auto">
        <h2 className="text-white text-xl font-semibold mb-1">Panel de Dirección</h2>
        <p className="text-slate-400 text-sm mb-6">Director General — Banco Unión</p>
        <AdminStats />
        <TableTransactions />
      </main>
    </div>
  </div>
);

export default DashboardAdmin;
