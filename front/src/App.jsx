import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage       from "./Pages/Landing/LandingPage";
import Login             from "./Pages/Login/Login";
import DashboardEmployee from "./Pages/Employee/DashboardEmployee";
import DashboardAdmin    from "./Pages/Admin/DashboardAdmin";
import EmpleadosPage     from "./Pages/Admin/EmpleadosPage";
import NuevoEmpleadoPage from "./Pages/Admin/NuevoEmpleadoPage";
import EmbargosPage      from "./Pages/Admin/EmbargosPage";
import ProtectedRoute    from "./Components/ui/ProtectedRoute";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem('usuario_banco')
  );

  return (
    <Routes>
      <Route path="/"      element={<LandingPage />} />
      <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />

      <Route path="/empleado" element={
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <DashboardEmployee />
        </ProtectedRoute>
      } />

      <Route path="/admin" element={
        <ProtectedRoute isAuthenticated={isAuthenticated} requiredRol="admin">
          <DashboardAdmin />
        </ProtectedRoute>
      } />
      <Route path="/admin/empleados" element={
        <ProtectedRoute isAuthenticated={isAuthenticated} requiredRol="admin">
          <EmpleadosPage />
        </ProtectedRoute>
      } />
      <Route path="/admin/nuevo-empleado" element={
        <ProtectedRoute isAuthenticated={isAuthenticated} requiredRol="admin">
          <NuevoEmpleadoPage />
        </ProtectedRoute>
      } />
      <Route path="/admin/embargos" element={
        <ProtectedRoute isAuthenticated={isAuthenticated} requiredRol="admin">
          <EmbargosPage />
        </ProtectedRoute>
      } />
    </Routes>
  );
}

export default App;
