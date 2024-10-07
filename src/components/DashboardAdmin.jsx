import "../App.css";
import { Outlet, Link, useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  LogOut,
  Home,
  Users,
  FileText,
  Sun,
  Moon,
} from "lucide-react";
import Swal from 'sweetalert2'; // Importar SweetAlert2

const DashboardAdmin = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const navigate = useNavigate(); // Para la navegación

  const toggleSidebar = () => setIsOpen(!isOpen);
  const toggleDropdown = (index) =>
    setActiveDropdown(activeDropdown === index ? null : index);
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const menuItems = [
    { title: "Home", icon: Home, link: "/admin/home" },
    {
      title: "Usuarios",
      icon: Users,
      submenu: [
        { title: "Vista Usuarios", link: "/admin/user/" },
        { title: "Roles", link: "/admin/roles" },
      ],
    },
    {
      title: "Trámites",
      icon: FileText,
      submenu: [
        { title: "Tramites", link: "/admin/tramites/" },
        { title: "Reportes", link: "/admin/reportes" },
      ],
    },
  ];

  // Función para manejar el cierre de sesión
  const handleLogout = async () => {
    const result = await Swal.fire({
      title: '¿Estás seguro?',
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, cerrar sesión',
      cancelButtonText: 'Cancelar',
    });

    if (result.isConfirmed) {
      // Aquí puedes hacer cualquier acción de cierre de sesión, como limpiar el localStorage o el contexto
      // localStorage.removeItem('token'); // Ejemplo de limpieza de token
      navigate('/'); // Redirigir a la página de inicio o de inicio de sesión
      Swal.fire('¡Cerraste sesión!', 'Has cerrado sesión correctamente.', 'success');
    }
  };

  return (
    <div
      className={`h-screen ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"
      }`}
    >
      <div
        className={`fixed top-0 left-0 h-full ${
          isDarkMode ? "bg-gray-800" : "bg-white"
        } transition-all duration-500 ease-in-out ${
          isOpen ? "w-64" : "w-16"
        } overflow-hidden`}
      >
        <div className="p-4 flex justify-center">
          <button
            onClick={toggleSidebar}
            className="text-2xl transition-all duration-300 ease-in-out transform hover:scale-110"
          >
            {isOpen ? (
              <X className="animate-pulse" />
            ) : (
              <Menu className="animate-bounce" />
            )}
          </button>
        </div>

        {isOpen && (
          <div className="p-4 text-center">
            <img
              src="https://avatar.iran.liara.run/public/boy"
              alt="Admin Avatar"
              className="w-20 h-20 rounded-full mx-auto mb-2"
            />
            <p className="font-bold">Admin Dashboard</p>
            <p className="font-medium">Bienvenido a su perfil de Administrador</p>
          </div>
        )}

        <nav className="mt-8">
          {menuItems.map((item, index) => (
            <div key={index} className="mb-4">
              {item.submenu ? (
                <button
                  onClick={() => toggleDropdown(index)}
                  className={`w-full text-left px-4 py-2 hover:${
                    isDarkMode ? "bg-gray-700" : "bg-gray-200"
                  } transition-all duration-300 flex items-center rounded-lg mx-2`}
                >
                  <item.icon className="mr-2 transition-transform duration-300 transform group-hover:scale-110" />
                  {isOpen && (
                    <>
                      <span className="transition-opacity duration-300">{item.title}</span>
                      <ChevronDown
                        className={`ml-auto transition-transform duration-300 ${
                          activeDropdown === index ? "transform rotate-180" : ""
                        }`}
                      />
                    </>
                  )}
                </button>
              ) : (
                <Link
                  to={item.link}
                  className={`w-full text-left px-4 py-2 hover:${
                    isDarkMode ? "bg-gray-700" : "bg-gray-200"
                  } transition-all duration-300 flex items-center rounded-lg mx-2`}
                >
                  <item.icon className="mr-2 transition-transform duration-300 transform group-hover:scale-110" />
                  {isOpen && <span className="transition-opacity duration-300">{item.title}</span>}
                </Link>
              )}
              {isOpen && item.submenu && activeDropdown === index && (
                <div className="ml-4 mt-2">
                  {item.submenu.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      to={subItem.link}
                      className={`block py-2 px-4 hover:${
                        isDarkMode ? "bg-gray-700" : "bg-gray-200"
                      } transition-all duration-300 rounded-lg`}
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Botón para cerrar sesión */}
        <button
          onClick={handleLogout}
          className={`absolute bottom-4 left-4 flex items-center px-4 py-2 ${
            isDarkMode ? "bg-red-600" : "bg-red-500"
          } hover:bg-red-600 transition-all duration-300 rounded-full group overflow-hidden`}
        >
          <LogOut className="transition-transform duration-300 group-hover:translate-x-1" />
          {isOpen && <span className="ml-2">Cerrar Sesión</span>}
        </button>
      </div>

      <div className={`ml-16 p-2`}>
        <Outlet />
      </div>

      <button
        onClick={toggleDarkMode}
        className={`fixed bottom-4 right-4 p-2 rounded-full ${
          isDarkMode ? "bg-yellow-400 text-gray-900" : "bg-gray-800 text-white"
        } transition-all duration-300 ease-in-out transform hover:scale-110`}
      >
        {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
      </button>
    </div>
  );
};

export default DashboardAdmin;
