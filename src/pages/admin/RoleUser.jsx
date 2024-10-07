import React from 'react';

const RoleUser = () => {
  const roles = [
    { name: "Admin", description: "Tiene acceso a realizar trámites y conceder accesos de usuario.", permissions: "Todo" },
    { name: "Cajero", description: "Maneja el pago de las patentes del usuario.", permissions: "Actualizar Trámites" },
    { name: "Comerciante", description: "Visualizar sus actividades económicas y patentes.", permissions: "Ver sus Patentes Municipales" },
  ];

  const users = [
    { name: "Efrain Colque Calizaya", email: "efraincolquee@gmail.com", phone: "9876543210", enrollNumber: "123456730547761", dateOfAdmission: "10-Jan, 2022", image: "/api/placeholder/50/50", role: "Comerciante" },
    { name: "Bob Johnson", email: "bob@gmail.com", phone: "9876543211", enrollNumber: "123456730547762", dateOfAdmission: "15-Feb, 2022", image: "/api/placeholder/50/50", role: "Cajero" },
    { name: "Catherine Lee", email: "catherine@gmail.com", phone: "9876543212", enrollNumber: "123456730547763", dateOfAdmission: "20-Mar, 2022", image: "/api/placeholder/50/50", role: "Admin" },

  ];
  const getRoleClasses = (role) => {
    switch (role) {
      case 'Admin':
        return 'text-blue-600 hover:text-blue-800';
      case 'Cajero':
        return 'text-green-600 hover:text-green-800';
      case 'Comerciante':
        return 'text-yellow-600 hover:text-yellow-800';
      default:
        return '';
    }
  };
  
  return (
    <div className="p-6 bg-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Descripción de Roles</h1>
      </div>
      <div className="bg-white rounded-lg shadow overflow-x-auto mb-6">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Descripción</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Permisos</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {roles.map((role, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{role.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{role.description}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{role.permissions}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Roles de Usuario</h1>
      </div>
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Teléfono</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha de Admisión</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rol</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.phone}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.dateOfAdmission}</td>
                <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${getRoleClasses(user.role)}`}>
                {user.role}
      </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RoleUser;
