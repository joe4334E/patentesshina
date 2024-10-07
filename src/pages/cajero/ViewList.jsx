import React, { useState } from "react";
import Swal from "sweetalert2";

const AddUser = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    enrollNumber: "",
    dateOfAdmission: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(formData);
    Swal.fire("Éxito", "Estudiante agregado correctamente.", "success");
    setFormData({
      name: "",
      email: "",
      phone: "",
      enrollNumber: "",
      dateOfAdmission: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 bg-white p-4 rounded-lg shadow">
      <input
        type="text"
        name="name"
        placeholder="Nombre"
        value={formData.name}
        onChange={handleChange}
        required
        className="border p-2 mb-2 w-full"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
        className="border p-2 mb-2 w-full"
      />
      <input
        type="text"
        name="phone"
        placeholder="Teléfono"
        value={formData.phone}
        onChange={handleChange}
        required
        className="border p-2 mb-2 w-full"
      />
      <input
        type="text"
        name="enrollNumber"
        placeholder="Número de Matrícula"
        value={formData.enrollNumber}
        onChange={handleChange}
        required
        className="border p-2 mb-2 w-full"
      />
      <input
        type="text"
        name="dateOfAdmission"
        placeholder="Fecha de Admisión"
        value={formData.dateOfAdmission}
        onChange={handleChange}
        required
        className="border p-2 mb-2 w-full"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Agregar Estudiante
      </button>
    </form>
  );
};

const ViewList = () => {
  const [isAddStudentOpen, setIsAddStudentOpen] = useState(false);
  const [students, setStudents] = useState([
    {
      name: "Alice Smith",
      email: "alice@gmail.com",
      phone: "9876543210",
      enrollNumber: "123456730547761",
      dateOfAdmission: "10-Jan, 2022",
    },
    // ...otros estudiantes
  ]);

  const toggleAddStudentForm = () => {
    setIsAddStudentOpen(!isAddStudentOpen);
  };

  const handleAddStudent = (newStudent) => {
    setStudents((prev) => [...prev, newStudent]);
  };

  const handleDeleteStudent = (index) => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¿Deseas eliminar este estudiante?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "No, cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        setStudents((prev) => prev.filter((_, i) => i !== index));
        Swal.fire("Eliminado", "Estudiante eliminado correctamente.", "success");
      }
    });
  };

  return (
    <div className="p-6 bg-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">LISTA DE USUARIOS</h1>
        <button
          onClick={toggleAddStudentForm}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
        >
          {isAddStudentOpen ? "Cancelar" : "Agregar Estudiante"}
        </button>
      </div>
      {isAddStudentOpen && <AddUser onAdd={handleAddStudent} />}
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Nombre
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Teléfono
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Número de Matrícula
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Fecha de Admisión
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {students.map((student, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {student.name}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {student.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {student.phone}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {student.enrollNumber}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {student.dateOfAdmission}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-yellow-600 hover:text-yellow-900 mr-3">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={() => handleDeleteStudent(index)}
                    className="text-red-600 hover:text-red-900"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex justify-between items-center">
        <div className="flex">
          <button className="px-3 py-1 border rounded-l-md bg-white text-gray-700">
            &lt;
          </button>
          <button className="px-3 py-1 border-t border-b bg-white text-gray-700">
            1
          </button>
          <button className="px-3 py-1 border rounded-r-md bg-white text-gray-700">
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewList;
