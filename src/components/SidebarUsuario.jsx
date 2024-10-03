import "../App.css";
import React, { useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  LogOut,
  Home,
  ShoppingBag,
  CreditCard,
  User,
  HelpCircle,
  Moon,
  Sun,
} from "lucide-react";

const SidebarUsuario = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const toggleDropdown = (index) =>
    setActiveDropdown(activeDropdown === index ? null : index);
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const menuItems = [
    { title: "Inicio", icon: Home, link: "/usuario/home" },
    {
      title: "Mis Compras",
      icon: ShoppingBag,
      submenu: [
        { title: "Historial", link: "/usuario/compras/historial" },
        { title: "Carrito", link: "/usuario/compras/carrito" },
      ],
    },
    { title: "Métodos de Pago", icon: CreditCard, link: "/usuario/pagos" },
    { title: "Mi Perfil", icon: User, link: "/usuario/perfil" },
    { title: "Ayuda", icon: HelpCircle, link: "/usuario/ayuda" },
  ];

  const handleNavigation = (e, link) => {
    e.preventDefault();
    console.log(`Navegando a: ${link}`);
  };

  const handleLogout = (e) => {
    e.preventDefault();
    console.log("Cerrando sesión");
  };

  return (
    <div className={`h-screen ${isDarkMode ? "bg-gray-900" : "bg-gray-100"}`}>
      <div
        className={`fixed top-0 left-0 h-full ${
          isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
        } transition-all duration-500 ease-in-out ${
          isOpen ? "w-64" : "w-16"
        } overflow-hidden`}
      >
        <div className="p-4 flex justify-between items-center">
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
          <button
            onClick={toggleDarkMode}
            className="text-2xl transition-all duration-300 ease-in-out transform hover:scale-110"
          >
            {isDarkMode ? <Sun /> : <Moon />}
          </button>
        </div>

        {isOpen && (
          <div className="p-4 text-center">
            <img
              src="/api/placeholder/100/100"
              alt="Usuario Avatar"
              className="w-20 h-20 rounded-full mx-auto mb-2"
            />
            <p className="font-bold">Bienvenido, Usuario</p>
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
                      <span className="transition-opacity duration-300">
                        {item.title}
                      </span>
                      <ChevronDown
                        className={`ml-auto transition-transform duration-300 ${
                          activeDropdown === index ? "transform rotate-180" : ""
                        }`}
                      />
                    </>
                  )}
                </button>
              ) : (
                <a
                  href={item.link}
                  onClick={(e) => handleNavigation(e, item.link)}
                  className={`w-full text-left px-4 py-2 hover:${
                    isDarkMode ? "bg-gray-700" : "bg-gray-200"
                  } transition-all duration-300 flex items-center rounded-lg mx-2`}
                >
                  <item.icon className="mr-2 transition-transform duration-300 transform group-hover:scale-110" />
                  {isOpen && (
                    <span className="transition-opacity duration-300">
                      {item.title}
                    </span>
                  )}
                </a>
              )}
              {isOpen && item.submenu && (
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    activeDropdown === index
                      ? "max-h-40 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {item.submenu.map((subItem, subIndex) => (
                    <a
                      key={subIndex}
                      href={subItem.link}
                      onClick={(e) => handleNavigation(e, subItem.link)}
                      className={`block py-2 px-8 hover:${
                        isDarkMode ? "bg-gray-700" : "bg-gray-200"
                      } transition-all duration-300 rounded-lg mx-2 my-1`}
                    >
                      {subItem.title}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <a
          href="/logout"
          onClick={handleLogout}
          className="absolute bottom-4 left-4 flex items-center px-4 py-2 bg-red-500 hover:bg-red-600 transition-all duration-300 rounded-full group overflow-hidden"
        >
          <LogOut className="transition-transform duration-300 group-hover:translate-x-1" />
          {isOpen && <span className="ml-2">Cerrar Sesión</span>}
        </a>
      </div>
    </div>
  );
};

export default SidebarUsuario;
