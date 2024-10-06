import React, { useState } from "react";
import AddUser from "./AddUser";

const ViewUser = () => {
  const [isAddStudentOpen, setIsAddStudentOpen] = useState(false);

  const students = [
    // Tu arreglo de estudiantes aquí...
    {
      name: "Alice Smith",
      email: "alice@gmail.com",
      phone: "9876543210",
      enrollNumber: "123456730547761",
      dateOfAdmission: "10-Jan, 2022",
      image: "/api/placeholder/50/50",
    },
    {
      name: "Bob Johnson",
      email: "bob@gmail.com",
      phone: "9876543211",
      enrollNumber: "123456730547762",
      dateOfAdmission: "15-Feb, 2022",
      image: "/api/placeholder/50/50",
    },
    {
      name: "Catherine Lee",
      email: "catherine@gmail.com",
      phone: "9876543212",
      enrollNumber: "123456730547763",
      dateOfAdmission: "20-Mar, 2022",
      image: "/api/placeholder/50/50",
    },
    {
      name: "David Kim",
      email: "david@gmail.com",
      phone: "9876543213",
      enrollNumber: "123456730547764",
      dateOfAdmission: "05-Apr, 2022",
      image: "/api/placeholder/50/50",
    },
    {
      name: "Eva Brown",
      email: "eva@gmail.com",
      phone: "9876543214",
      enrollNumber: "123456730547765",
      dateOfAdmission: "15-May, 2022",
      image: "/api/placeholder/50/50",
    },
    {
      name: "Frank White",
      email: "frank@gmail.com",
      phone: "9876543215",
      enrollNumber: "123456730547766",
      dateOfAdmission: "22-Jun, 2022",
      image: "/api/placeholder/50/50",
    },
    {
      name: "Grace Davis",
      email: "grace@gmail.com",
      phone: "9876543216",
      enrollNumber: "123456730547767",
      dateOfAdmission: "30-Jul, 2022",
      image: "/api/placeholder/50/50",
    },
    {
      name: "Henry Wilson",
      email: "henry@gmail.com",
      phone: "9876543217",
      enrollNumber: "123456730547768",
      dateOfAdmission: "12-Aug, 2022",
      image: "/api/placeholder/50/50",
    },
    {
      name: "Isabel Martinez",
      email: "isabel@gmail.com",
      phone: "9876543218",
      enrollNumber: "123456730547769",
      dateOfAdmission: "21-Sep, 2022",
      image: "/api/placeholder/50/50",
    },
    {
      name: "Jake Anderson",
      email: "jake@gmail.com",
      phone: "9876543219",
      enrollNumber: "123456730547770",
      dateOfAdmission: "30-Oct, 2022",
      image: "/api/placeholder/50/50",
    },
    {
      name: "Laura Thompson",
      email: "laura@gmail.com",
      phone: "9876543220",
      enrollNumber: "123456730547771",
      dateOfAdmission: "05-Nov, 2022",
      image: "/api/placeholder/50/50",
    },
    {
      name: "Michael Garcia",
      email: "michael@gmail.com",
      phone: "9876543221",
      enrollNumber: "123456730547772",
      dateOfAdmission: "12-Dec, 2022",
      image: "/api/placeholder/50/50",
    },
    {
      name: "Nina Rodriguez",
      email: "nina@gmail.com",
      phone: "9876543222",
      enrollNumber: "123456730547773",
      dateOfAdmission: "18-Jan, 2023",
      image: "/api/placeholder/50/50",
    },
    {
      name: "Oscar Hernandez",
      email: "oscar@gmail.com",
      phone: "9876543223",
      enrollNumber: "123456730547774",
      dateOfAdmission: "25-Feb, 2023",
      image: "/api/placeholder/50/50",
    },
    {
      name: "Paula Clark",
      email: "paula@gmail.com",
      phone: "9876543224",
      enrollNumber: "123456730547775",
      dateOfAdmission: "10-Mar, 2023",
      image: "/api/placeholder/50/50",
    },
    {
      name: "Quentin Lewis",
      email: "quentin@gmail.com",
      phone: "9876543225",
      enrollNumber: "123456730547776",
      dateOfAdmission: "15-Apr, 2023",
      image: "/api/placeholder/50/50",
    },
    {
      name: "Rachel Walker",
      email: "rachel@gmail.com",
      phone: "9876543226",
      enrollNumber: "123456730547777",
      dateOfAdmission: "20-May, 2023",
      image: "/api/placeholder/50/50",
    },
    {
      name: "Steve Hall",
      email: "steve@gmail.com",
      phone: "9876543227",
      enrollNumber: "123456730547778",
      dateOfAdmission: "30-Jun, 2023",
      image: "/api/placeholder/50/50",
    },
    {
      name: "Tina Allen",
      email: "tina@gmail.com",
      phone: "9876543228",
      enrollNumber: "123456730547779",
      dateOfAdmission: "15-Jul, 2023",
      image: "/api/placeholder/50/50",
    },
    {
      name: "Victor Young",
      email: "victor@gmail.com",
      phone: "9876543229",
      enrollNumber: "123456730547780",
      dateOfAdmission: "22-Aug, 2023",
      image: "/api/placeholder/50/50",
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
          <button className="p-2 bg-gray-200 rounded-full">
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          <button
            className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition duration-300"
            onClick={toggleAddStudentForm}
          >
            AGREGAR NUEVO USUARIO
          </button>
        </div>
      </div>
      {isAddStudentOpen && <AddUser />}{" "}
      {/* Mostrar el formulario si está abierto */}
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Phone
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Enroll Number
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date of admission
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {students.map((student, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={student.image}
                        alt=""
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {student.name}
                      </div>
                    </div>
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

export default ViewUser;
