import { Route, Routes } from "react-router-dom";
import LandingPage       from "./Pages/Landing/LandingPage";
import Login             from "./Pages/Login/Login";
import DashboardEmployee from "./Pages/Employee/DashboardEmployee";
import DashboardAdmin    from "./Pages/Admin/DashboardAdmin";
import EmpleadosPage     from "./Pages/Admin/EmpleadosPage";
import NuevoEmpleadoPage from "./Pages/Admin/NuevoEmpleadoPage";
import EmbargosPage      from "./Pages/Admin/EmbargosPage";

function App() {
  return (
    <Routes>
      <Route path="/"                    element={<LandingPage />} />
      <Route path="/login"               element={<Login />} />
      <Route path="/empleado"            element={<DashboardEmployee />} />
      <Route path="/admin"               element={<DashboardAdmin />} />
      <Route path="/admin/empleados"     element={<EmpleadosPage />} />
      <Route path="/admin/nuevo-empleado" element={<NuevoEmpleadoPage />} />
      <Route path="/admin/embargos"      element={<EmbargosPage />} />
    </Routes>
  );
}

export default App;
