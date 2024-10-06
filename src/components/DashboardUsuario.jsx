import "../App.css";
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Menu, X, LogOut, Home, User, FileText, Sun, Moon } from "lucide-react";

/**
 * Componente DashboardUsuario
 * 
 * Este componente representa el panel de control para los usuarios. 
 * Contiene una barra lateral para la navegación entre diferentes secciones de la aplicación 
 * y permite alternar entre modo claro y oscuro.
 */
const DashboardUsuario = () => {
  // Estado para gestionar la visibilidad de la barra lateral
  const [isOpen, setIsOpen] = useState(false);
  // Estado para gestionar el modo oscuro
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Función para alternar la visibilidad de la barra lateral
  const toggleSidebar = () => setIsOpen(!isOpen);
  // Función para alternar entre modo claro y oscuro
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  // Definición de los elementos del menú
  const menuItems = [
    { title: "Home", icon: Home, link: "/usuario/home" },
    { title: "Perfil de Usuario", icon: User, link: "/usuario/perfil" },
    { title: "Reportes", icon: FileText, link: "/usuario/reportes" },
  ];

  return (
    <div
      className={`h-screen ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"
      }`}
    >
      {/* Contenedor de la barra lateral */}
      <div
        className={`fixed top-0 left-0 h-full ${
          isDarkMode ? "bg-gray-800" : "bg-white"
        } transition-all duration-500 ease-in-out ${
          isOpen ? "w-64" : "w-16"
        } overflow-hidden`}
      >
        {/* Botón para alternar la visibilidad de la barra lateral */}
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

        {/* Información del usuario, visible solo si la barra lateral está abierta */}
        {isOpen && (
          <div className="p-4 text-center">
            <img
              src="/api/placeholder/100/100" // Imagen de avatar de usuario
              alt="Usuario Avatar"
              className="w-20 h-20 rounded-full mx-auto mb-2"
            />
            <p className="font-bold">Usuario Dashboard</p>
          </div>
        )}

        {/* Navegación del menú */}
        <nav className="mt-8">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className={`w-full text-left px-4 py-2 hover:${
                isDarkMode ? "bg-gray-700" : "bg-gray-200"
              } transition-all duration-300 flex items-center rounded-lg mx-2 mb-4`}
            >
              {/* Icono del elemento del menú */}
              <item.icon className="mr-2 transition-transform duration-300 transform group-hover:scale-110" />
              {isOpen && (
                <span className="transition-opacity duration-300">
                  {item.title}
                </span>
              )}
            </Link>
          ))}
        </nav>

        {/* Botón para cerrar sesión */}
        <Link
          to="/logout"
          className={`absolute bottom-4 left-4 flex items-center px-4 py-2 ${
            isDarkMode ? "bg-red-600" : "bg-red-500"
          } hover:bg-red-600 transition-all duration-300 rounded-full group overflow-hidden`}
        >
          <LogOut className="transition-transform duration-300 group-hover:translate-x-1" />
          {isOpen && <span className="ml-2">Cerrar Sesión</span>}
        </Link>
      </div>

      {/* Contenedor para el contenido de las subrutas */}
      <div className={`ml-64 p-4`}>
        <Outlet /> {/* Aquí se renderiza el contenido de las subrutas */}
      </div>

      {/* Botón para alternar entre modo claro y oscuro */}
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

export default DashboardUsuario;
