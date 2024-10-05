import { Routes as RouterRoutes, Route, Navigate } from "react-router-dom";

// Importar los layouts para los diferentes dashboards
import DashboardUsuario from "../components/DashboardUsuario";
import DashboardCajero from "../components/DashboardCajero";
import DashboardAdmin from "../components/DashboardAdmin";

// Importar layouts de autenticación
import Register from "../components/register/Register";
import Login from "../components/Login";

// Rutas para el dashboard del administrador
import Home from "../pages/admin/Home";
import ViewUser from "../pages/admin/ViewUser";
import RoleUser from "../pages/admin/RoleUser";

// Rutas para el dashboard del cajero
import CasheerHome from "../pages/cajero/CasheerHome.jsx";
import ViewList from "../pages/cajero/ViewList.jsx";
import ReportsCasheer from "../pages/cajero/ReportsCasheer.jsx";

// Rutas para el dashboard del usuario
import HomeUser from "../pages/usuario/HomeUser.jsx";
import Profile from "../pages/usuario/Profile.jsx";
import Reports from "../pages/usuario/Reports.jsx";

/**
 * Componente AppRoutes
 * 
 * Este componente define todas las rutas de la aplicación utilizando react-router-dom.
 * Se organizan en diferentes secciones según el tipo de usuario: admin, cajero y usuario.
 * También incluye rutas para autenticación.
 */
function AppRoutes() {
  return (
    <RouterRoutes>
      {/* Ruta principal que renderiza el componente de inicio de sesión */}
      <Route path="/" element={<Login />} />
      {/* Ruta para el registro de nuevos usuarios */}
      <Route path="/register" element={<Register />} />

      {/* Rutas para el dashboard del usuario */}
      <Route path="/usuario/*" element={<DashboardUsuario />}>
        <Route path="home" element={<HomeUser />} />
        <Route path="perfil" element={<Profile />} />
        <Route path="reportes" element={<Reports />} />
      </Route>

      {/* Rutas para el dashboard del cajero */}
      <Route path="/cajero/*" element={<DashboardCajero />}>
        <Route path="home" element={<CasheerHome />} />
        <Route path="user" element={<ViewList />} />
        <Route path="reportes" element={<ReportsCasheer />} />
      </Route>

      {/* Rutas para el dashboard del administrador */}
      <Route path="/admin/*" element={<DashboardAdmin />}>
        <Route path="home" element={<Home />} />
        <Route path="user" element={<ViewUser />} />
        <Route path="roles" element={<RoleUser />} />
      </Route>

      {/* Ruta de redirección para cualquier ruta desconocida */}
      <Route path="*" element={<Navigate to="/" />} />
    </RouterRoutes>
  );
}

export default AppRoutes;
