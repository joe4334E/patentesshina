import React, { useState } from "react";

const ViewList = () => {
  const [isAddStudentOpen, setIsAddStudentOpen] = useState(false);

  const students = [
    {
      name: "Alice Smith",
      email: "alice@gmail.com",
      phone: "9876543210",
      enrollNumber: "123456730547761",
      dateOfAdmission: "10-Jan, 2022",
    },
    {
      name: "Bob Johnson",
      email: "bob@gmail.com",
      phone: "9876543211",
      enrollNumber: "123456730547762",
      dateOfAdmission: "15-Feb, 2022",
    },
    {
      name: "Catherine Lee",
      email: "catherine@gmail.com",
      phone: "9876543212",
      enrollNumber: "123456730547763",
      dateOfAdmission: "20-Mar, 2022",
    },
    {
      name: "David Kim",
      email: "david@gmail.com",
      phone: "9876543213",
      enrollNumber: "123456730547764",
      dateOfAdmission: "05-Apr, 2022",
    },
    {
      name: "Eva Brown",
      email: "eva@gmail.com",
      phone: "9876543214",
      enrollNumber: "123456730547765",
      dateOfAdmission: "15-May, 2022",
    },
    {
      name: "Frank White",
      email: "frank@gmail.com",
      phone: "9876543215",
      enrollNumber: "123456730547766",
      dateOfAdmission: "22-Jun, 2022",
    },
    {
      name: "Grace Davis",
      email: "grace@gmail.com",
      phone: "9876543216",
      enrollNumber: "123456730547767",
      dateOfAdmission: "30-Jul, 2022",
    },
    {
      name: "Henry Wilson",
      email: "henry@gmail.com",
      phone: "9876543217",
      enrollNumber: "123456730547768",
      dateOfAdmission: "12-Aug, 2022",
    },
    {
      name: "Isabel Martinez",
      email: "isabel@gmail.com",
      phone: "9876543218",
      enrollNumber: "123456730547769",
      dateOfAdmission: "21-Sep, 2022",
    },
    {
      name: "Jake Anderson",
      email: "jake@gmail.com",
      phone: "9876543219",
      enrollNumber: "123456730547770",
      dateOfAdmission: "30-Oct, 2022",
    },
    {
      name: "Laura Thompson",
      email: "laura@gmail.com",
      phone: "9876543220",
      enrollNumber: "123456730547771",
      dateOfAdmission: "05-Nov, 2022",
    },
    {
      name: "Michael Garcia",
      email: "michael@gmail.com",
      phone: "9876543221",
      enrollNumber: "123456730547772",
      dateOfAdmission: "12-Dec, 2022",
    },
    {
      name: "Nina Rodriguez",
      email: "nina@gmail.com",
      phone: "9876543222",
      enrollNumber: "123456730547773",
      dateOfAdmission: "18-Jan, 2023",
    },
    {
      name: "Oscar Hernandez",
      email: "oscar@gmail.com",
      phone: "9876543223",
      enrollNumber: "123456730547774",
      dateOfAdmission: "25-Feb, 2023",
    },
  ];

  const toggleAddStudentForm = () => {
    setIsAddStudentOpen(!isAddStudentOpen);
  };

  return (
    <div className="p-6 bg-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">LISTA DE USUARIOS</h1>
        <div className="flex items-center space-x-4">

        
        </div>
      </div>
      {isAddStudentOpen && <AddUser />} {/* Mostrar el formulario si está abierto */}
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
                  <button className="text-red-600 hover:text-red-900">
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
