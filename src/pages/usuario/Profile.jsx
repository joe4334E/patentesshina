import React from 'react';

function Profile({ student }) {
  return (
    <div className="bg-white rounded-lg shadow p-6 flex items-center justify-between">
      <div className="flex items-center">
        <img className="h-24 w-24 rounded-full" src={student.image} alt={student.name} />
        <div className="ml-4">
          <h2 className="text-xl font-semibold">{student.name}</h2>
          <p className="text-gray-600">{student.email}</p>
          <p className="text-gray-600">{student.phone}</p>
          <p className="text-gray-600">Fecha de Admisión: {student.dateOfAdmission}</p>
        </div>
      </div>
      <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
        Ver Detalles
      </button>
    </div>
  );
}

export default Profile;
