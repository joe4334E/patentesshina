import React from 'react';
import Profile from './Profile';
import Reports from './Reports';

function HomeUser() {
  const student = {
    name: "Efrain Colque Calizaya",
    email: "efraincolquee@gmail.com",
    phone: "72245309",
    dateOfAdmission: "08-oct, 2024",
    image: "https://avatar.iran.liara.run/public/job/farmer/male",
  };

  return (
    <div className="p-6 bg-gray-100">
      <div className="flex items-center mb-6">
        <h1 className="text-2xl font-bold">Perfil de Comerciante</h1>
      </div>

      <Profile student={student} />

      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Reportes</h2>
        <Reports />
      </div>
    </div>
  );
}

export default HomeUser;
