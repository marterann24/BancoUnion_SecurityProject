import Sidebar    from '../../Components/ui/Sidebar';
import TopNav     from '../../Components/ui/TopNav';
import NewUserForm from '../../Components/Admin/NewUserForm';

const NuevoEmpleadoPage = () => (
  <div className="flex min-h-screen w-full bg-slate-900">
    <Sidebar rol="admin" />

    <div className="flex flex-col flex-1 min-w-0">
      <TopNav rol="admin" />

      <main className="flex-1 p-8 overflow-y-auto">
        <NewUserForm />
      </main>
    </div>
  </div>
);

export default NuevoEmpleadoPage;
