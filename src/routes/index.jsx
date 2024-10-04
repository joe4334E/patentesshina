import { Routes as RouterRoutes, Route, Navigate } from "react-router-dom";
import DashboardUsuario from "../components/DashboardUsuario";
import DashboardCajero from "../components/DashboardCajero";
import DashboardAdmin from "../components/DashboardAdmin";
import Register from "../components/register/Register";
import Home from "../pages/admin/Home";
import Login from "../components/Login";

function AppRoutes() {
  return (  
    <RouterRoutes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/usuario/*" element={<DashboardUsuario />} />
      <Route path="/cajero/*" element={<DashboardCajero />} />
      <Route path="/admin/*" element={<DashboardAdmin />} />
      {/* Aquí puedes definir el componente Home dentro de DashboardAdmin */}
      <Route path="/admin/home" element={<Home />} />
      <Route path="*" element={<Navigate to="/" />} /> {/* Redirige cualquier ruta desconocida */}
    </RouterRoutes>
  );
}

export default AppRoutes;
