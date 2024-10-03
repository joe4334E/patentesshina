import React from 'react';
import '../../App.css';
import { BookOpen, Bookmark, DollarSign, Users } from 'lucide-react';

const DashboardCard = ({ icon, title, value, bgColor }) => (
  <div className={`${bgColor} p-4 rounded-lg shadow-md flex flex-col items-center justify-center`}>
    {icon}
    <h3 className="mt-2 text-sm font-medium text-gray-600">{title}</h3>
    <p className="text-2xl font-bold">{value}</p>
  </div>
);

const Home = () => {
  return (
    <div className="container mx-auto p-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="flex items-center space-x-4">
          <input
            type="search"
            placeholder="Buscar..."
            className="px-4 py-2 border rounded-md"
          />
          <button className="p-2 bg-gray-200 rounded-full">
            <span className="sr-only">Notificaciones</span>
            {/* Aquí iría un icono de campana */}
          </button>
        </div>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard
          icon={<BookOpen className="h-8 w-8 text-blue-500" />}
          title="Administradores"
          value="3"
          bgColor="bg-blue-100"
        />
        <DashboardCard
          icon={<Bookmark className="h-8 w-8 text-pink-500" />}
          title="Cajeros"
          value="13"
          bgColor="bg-pink-100"
        />
        <DashboardCard
          icon={<DollarSign className="h-8 w-8 text-yellow-500" />}
          title="PATENTES PAGADAS"
          value="Bs 556,000"
          bgColor="bg-yellow-100"
        />
        <DashboardCard
          icon={<Users className="h-8 w-8 text-yellow-700" />}
          title="Usuarios"
          value="3"
          bgColor="bg-yellow-400"
        />
      </div>
    </div>
  );
};

export default Home; 