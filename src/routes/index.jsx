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
      {/* CAMPOS DE REGISTRO DE CAJERO/}
      {/* CAMPOS DE REGISTRO DE USUARIOS*/}
      {/* CAMPOS DE REGISTRO DE ADMIN*/}
      <Route path="/usuario/*" element={<DashboardUsuario />} />
      <Route path="/cajero/*" element={<DashboardCajero />} />
      <Route path="/admin/*" element={<DashboardAdmin />} />
      <Route path="/admin/home" element={<Home />} />
      <Route path="*" element={<Navigate to="/" />} /> {/* Redirige cualquier ruta desconocida */}
    </RouterRoutes>
  );
}

export default AppRoutes;
n