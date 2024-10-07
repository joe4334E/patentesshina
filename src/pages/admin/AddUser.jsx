import React, { useState } from 'react';

export default function AddUser({ isOpen, onClose }) {
  const [role, setRole] = useState('');
  const [userData, setUserData] = useState({
    correo: '',
    password: '',
    roleid: '',
    nombre: '',
    apellidopaterno: '',
    apellidomaterno: '',
    ci: '',
    expd: '',
    direccion: '',
    otb: '',
    nombrecomercio: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target; 
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission based on role
    console.log('User data submitted:', userData);
    onClose(); // Close the modal after submission
  };

  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-white p-5 rounded shadow-md">
          <h2 className="text-lg font-bold mb-4">Add User</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-2">Role</label>
              <select name="role" value={role} onChange={handleRoleChange} required>
                <option value="">Select Role</option>
                <option value="admin">Admin</option>
                <option value="cashier">Cashier</option>
                <option value="user">User</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block mb-2">Email</label>
              <input
                type="email"
                name="correo"
                value={userData.correo}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2">Password</label>
              <input
                type="password"
                name="password"
                value={userData.password}
                onChange={handleChange}
                required
              />
            </div>

            {role === 'user' && (
              <>
                <div className="mb-4">
                  <label className="block mb-2">Nombre</label>
                  <input
                    type="text"
                    name="nombre"
                    value={userData.nombre}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block mb-2">Apellido Paterno</label>
                  <input
                    type="text"
                    name="apellidopaterno"
                    value={userData.apellidopaterno}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block mb-2">Apellido Materno</label>
                  <input
                    type="text"
                    name="apellidomaterno"
                    value={userData.apellidomaterno}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block mb-2">CI</label>
                  <input
                    type="text"
                    name="ci"
                    value={userData.ci}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block mb-2">Expediente</label>
                  <input
                    type="text"
                    name="expd"
                    value={userData.expd}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block mb-2">Dirección</label>
                  <input
                    type="text"
                    name="direccion"
                    value={userData.direccion}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block mb-2">OTB</label>
                  <input
                    type="text"
                    name="otb"
                    value={userData.otb}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block mb-2">Nombre Comercio</label>
                  <input
                    type="text"
                    name="nombrecomercio"
                    value={userData.nombrecomercio}
                    onChange={handleChange}
                    required
                  />
                </div>
              </>
            )}

            <div className="flex justify-between mt-4">
              <button type="button" onClick={onClose} className="bg-gray-300 px-4 py-2 rounded">Cancel</button>
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
            </div>
          </form>
        </div>
      </div>
    )
  );
}
