import React, { useState } from "react";

const ComercianteRegister = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    secondLastName: "",
    idNumber: "",
    birthDate: "",
    address: "",
    businessName: "",
    unionName: "",
    area: ""
  });
  const [notification, setNotification] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setNotification("Comerciante registrado con éxito.");
  };

  return (
    <div className="max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold mb-6 text-center">Registro de Comerciante</h2>
      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8">
        <h3 className="text-xl font-semibold mb-4">Información de Usuario</h3>
        <div className="grid grid-cols-2 gap-4">
          <input type="email" name="email" placeholder="Correo Electrónico" value={formData.email} onChange={handleChange} required className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-400" />
          <input type="password" name="password" placeholder="Contraseña" value={formData.password} onChange={handleChange} required className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-400" />
          <input type="text" name="firstName" placeholder="Nombre" value={formData.firstName} onChange={handleChange} required className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-400" />
          <input type="text" name="lastName" placeholder="Apellido Paterno" value={formData.lastName} onChange={handleChange} required className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-400" />
          <input type="text" name="secondLastName" placeholder="Apellido Materno" value={formData.secondLastName} onChange={handleChange} required className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-400" />
          <input type="text" name="idNumber" placeholder="Cédula de Identidad" value={formData.idNumber} onChange={handleChange} required className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-400" />
        </div>

        <h3 className="text-xl font-semibold mt-6 mb-4">Datos del Comerciante</h3>
        <div className="grid grid-cols-2 gap-4">
          <input type="date" name="birthDate" value={formData.birthDate} onChange={handleChange} required className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-400" />
          <input type="text" name="address" placeholder="Dirección" value={formData.address} onChange={handleChange} required className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-400" />
        </div>

        <h3 className="text-xl font-semibold mt-6 mb-4">Información del Comercio</h3>
        <div className="grid grid-cols-2 gap-4">
          <input type="text" name="businessName" placeholder="Nombre de Comercio" value={formData.businessName} onChange={handleChange} required className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-400" />
          <select name="unionName" value={formData.unionName} onChange={handleChange} required className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-400">
            <option value="">Seleccione un Sindicato</option>
            <option value="otb">OTB</option>
            <option value="otro">Otro</option>
          </select>
          <input type="text" name="area" placeholder="Área" value={formData.area} onChange={handleChange} required className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-400" />
        </div>

        {notification && <p className="text-green-500 mt-4 text-center">{notification}</p>}
        <button type="submit" className="bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition duration-200 ease-in-out w-full mt-6">Registrar</button>
      </form>
    </div>
  );
};

export default ComercianteRegister;