import React, { useState } from "react";
import Swal from "sweetalert2";

const ViewUser = () => {
  const [isAddStudentOpen, setIsAddStudentOpen] = useState(false);
  const [students, setStudents] = useState([
    {
      name: "Alice Smith",
      email: "alice@gmail.com",
      phone: "9876543210",
      enrollNumber: "123456730547761",
      dateOfAdmission: "10-Jan, 2022",
      image: "/api/placeholder/50/50",
      role: "user",
    },
    // Additional students can be added here...
  ]);
  const [currentStudent, setCurrentStudent] = useState(null);

  const toggleAddStudentForm = () => {
    setCurrentStudent(null);
    setIsAddStudentOpen(!isAddStudentOpen);
  };

  const handleAddOrEditStudent = (student) => {
    if (currentStudent) {
      setStudents(
        students.map((s) => (s.enrollNumber === student.enrollNumber ? student : s))
      );
      Swal.fire("Success", "User updated successfully!", "success");
    } else {
      setStudents([...students, student]);
      Swal.fire("Success", "User added successfully!", "success");
    }
    toggleAddStudentForm();
  };

  const handleDeleteStudent = (enrollNumber) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This will permanently delete the user.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
    }).then((result) => {
      if (result.isConfirmed) {
        setStudents(students.filter((s) => s.enrollNumber !== enrollNumber));
        Swal.fire("Deleted!", "The user has been deleted.", "success");
      }
    });
  };

  const openEditForm = (student) => {
    setCurrentStudent(student);
    setIsAddStudentOpen(true);
  };

  return (
    <div className="p-6 bg-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">LISTA DE USUARIOS</h1>
        <button
          className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition duration-300"
          onClick={toggleAddStudentForm}
        >
          AGREGAR NUEVO USUARIO
        </button>
      </div>
      {isAddStudentOpen && (
        <AddUserModal
          onSubmit={handleAddOrEditStudent}
          student={currentStudent}
          onClose={toggleAddStudentForm}
        />
      )}
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Enroll Number</th>
              <th>Date of admission</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {students.map((student) => (
              <tr key={student.enrollNumber}>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.phone}</td>
                <td>{student.enrollNumber}</td>
                <td>{student.dateOfAdmission}</td>
                <td>{student.role}</td>
                <td>
                  <button
                    className="text-yellow-600 hover:underline mr-2"
                    onClick={() => openEditForm(student)}
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-600 hover:underline"
                    onClick={() => handleDeleteStudent(student.enrollNumber)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const AddUserModal = ({ onSubmit, student, onClose }) => {
  const [formData, setFormData] = useState({
    name: student ? student.name : "",
    email: student ? student.email : "",
    phone: student ? student.phone : "",
    enrollNumber: student ? student.enrollNumber : "",
    dateOfAdmission: student ? student.dateOfAdmission : "",
    role: student ? student.role : "user",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-xl font-bold mb-4">{student ? "Edit User" : "Add User"}</h2>
        <form onSubmit={handleSubmit}>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full border p-2 mb-2"
            required
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full border p-2 mb-2"
            required
          />
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="w-full border p-2 mb-2"
            required
          />
          <input
            name="enrollNumber"
            value={formData.enrollNumber}
            onChange={handleChange}
            placeholder="Enroll Number"
            className="w-full border p-2 mb-2"
            required
          />
          <input
            name="dateOfAdmission"
            value={formData.dateOfAdmission}
            onChange={handleChange}
            placeholder="Date of Admission"
            className="w-full border p-2 mb-2"
            required
          />
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full border p-2 mb-2"
            required
          >
            <option value="admin">Admin</option>
            <option value="cajero">Cajero</option>
            <option value="user">User</option>
          </select>
          <div className="flex justify-between">
            <button type="button" onClick={onClose} className="text-gray-600">Cancel</button>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ViewUser;
