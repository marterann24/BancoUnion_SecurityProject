import { Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/Landing/LandingPage";
import Login from "./Pages/Login/Login";
import DashboardEmployee from "./Pages/Employee/DashboardEmployee";
import DashboardAdmin from "./Pages/Admin/DashboardAdmin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/empleado" element={<DashboardEmployee />} />
      <Route path="/admin" element={<DashboardAdmin />} />
    </Routes>
  );
}

export default App;
