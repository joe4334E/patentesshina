import "../App.css";
import React, { useState } from "react";
import {
  Menu,
  X,
  LogOut,
  Home,
  Users,
  FileText,
  Sun,
  Moon,
} from "lucide-react";

const DashboardCajero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const menuItems = [
    { title: "Home", icon: Home, link: "/cajero/home" },
    { title: "Vista Usuarios", icon: Users, link: "/cajero/usuarios" },
    { title: "Reportes", icon: FileText, link: "/cajero/reportes" },
  ];

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
              src="/api/placeholder/100/100"
              alt="Cajero Avatar"
              className="w-20 h-20 rounded-full mx-auto mb-2"
            />
            <p className="font-bold">Cajero Dashboard</p>
          </div>
        )}

        <nav className="mt-8">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className={`w-full text-left px-4 py-2 hover:${
                isDarkMode ? "bg-gray-700" : "bg-gray-200"
              } transition-all duration-300 flex items-center rounded-lg mx-2 mb-4`}
            >
              <item.icon className="mr-2 transition-transform duration-300 transform group-hover:scale-110" />
              {isOpen && (
                <span className="transition-opacity duration-300">
                  {item.title}
                </span>
              )}
            </a>
          ))}
        </nav>

        <a
          href="/logout"
          className={`absolute bottom-4 left-4 flex items-center px-4 py-2 ${
            isDarkMode ? "bg-red-600" : "bg-red-500"
          } hover:bg-red-600 transition-all duration-300 rounded-full group overflow-hidden`}
        >
          <LogOut className="transition-transform duration-300 group-hover:translate-x-1" />
          {isOpen && <span className="ml-2">Cerrar Sesión</span>}
        </a>
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

export default DashboardCajero;