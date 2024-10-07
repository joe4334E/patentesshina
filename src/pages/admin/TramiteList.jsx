import React, { useState } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import * as XLSX from 'xlsx';
import { FileText, FilePlus } from 'lucide-react';
import Swal from 'sweetalert2';

const TramiteList = () => {
  const [isAddEditModalOpen, setIsAddEditModalOpen] = useState(false);
  const [currentTramite, setCurrentTramite] = useState(null);

  const tramites = [
    {
      id: 1,
      codtramite: "T001",
      codactividadeconomica: 101,
      codcomerciante: 1,
      fechainicio: "2023-01-15",
      fechafin: "2023-05-20",
      estadodeuda: "Pagado",
      estadopago: "Completado",
      gestion: "Registro de patente de comercio",
      createdAt: "2023-01-10",
      updatedAt: "2023-05-21",
    },
    {
      id: 2,
      codtramite: "T002",
      codactividadeconomica: 102,
      codcomerciante: 2,
      fechainicio: "2023-02-10",
      fechafin: "2023-06-15",
      estadodeuda: "Pendiente",
      estadopago: "En Progreso",
      gestion: "Renovación de licencia de funcionamiento",
      createdAt: "2023-02-05",
      updatedAt: "2023-06-16",
    },
    {
      id: 3,
      codtramite: "T003",
      codactividadeconomica: 103,
      codcomerciante: 3,
      fechainicio: "2023-03-01",
      fechafin: "2023-07-30",
      estadodeuda: "No Pagado",
      estadopago: "Pendiente",
      gestion: "Solicitud de certificación de estado",
      createdAt: "2023-03-01",
      updatedAt: "2023-07-31",
    },
  ];

  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.autoTable({
      head: [['Código Trámite', 'Actividad Económica', 'Comerciante', 'Fecha Inicio', 'Fecha Fin', 'Estado de Deuda', 'Estado de Pago', 'Gestión']],
      body: tramites.map(tramite => [
        tramite.codtramite,
        tramite.codactividadeconomica,
        tramite.codcomerciante,
        tramite.fechainicio,
        tramite.fechafin,
        tramite.estadodeuda,
        tramite.estadopago,
        tramite.gestion,
      ]),
    });
    doc.save('tramites.pdf');
  };

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(tramites);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Trámites');
    XLSX.writeFile(workbook, 'tramites.xlsx');
  };

  const toggleAddEditModal = () => {
    setCurrentTramite(null);
    setIsAddEditModalOpen(!isAddEditModalOpen);
  };

  const handleAddOrEditTramite = (tramite) => {
    if (currentTramite) {
      Swal.fire("Success", "Trámite updated successfully!", "success");
    } else {
      Swal.fire("Success", "Trámite added successfully!", "success");
    }
    toggleAddEditModal();
  };

  const handleDeleteTramite = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This will permanently delete the trámite.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Implement deletion logic here
        Swal.fire("Deleted!", "The trámite has been deleted.", "success");
      }
    });
  };

  const openEditForm = (tramite) => {
    setCurrentTramite(tramite);
    setIsAddEditModalOpen(true);
  };

  return (
    <div className="p-6 bg-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Lista de Trámites</h1>
        <div className="flex items-center space-x-4">
          <button onClick={toggleAddEditModal} className="p-2 bg-gray-200 rounded-full">
            <FilePlus className="w-6 h-6 text-gray-600" />
          </button>
          <button onClick={exportToExcel} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">
            <FileText className="mr-2 w-4 h-4" /> Exportar a Excel
          </button>
          <button onClick={exportToPDF} className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300">
            <FileText className="mr-2 w-4 h-4" /> Exportar a PDF
          </button>
        </div>
      </div>

      {isAddEditModalOpen && (
        <AddEditTramiteModal
          onSubmit={handleAddOrEditTramite}
          tramite={currentTramite}
          onClose={toggleAddEditModal}
        />
      )}

      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Código Trámite</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actividad Económica</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Comerciante</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha Inicio</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha Fin</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado de Deuda</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado de Pago</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gestión</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {tramites.map((tramite, index) => (
              <tr key={tramite.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{tramite.codtramite}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{tramite.codactividadeconomica}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{tramite.codcomerciante}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{tramite.fechainicio}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{tramite.fechafin}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{tramite.estadodeuda}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{tramite.estadopago}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{tramite.gestion}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button
                    onClick={() => openEditForm(tramite)}
                    className="text-yellow-600 hover:text-yellow-900 mr-3"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteTramite(tramite.id)}
                    className="text-red-600 hover:text-red-900"
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

const AddEditTramiteModal = ({ onSubmit, tramite, onClose }) => {
  const [formData, setFormData] = useState({
    codtramite: tramite ? tramite.codtramite : "",
    codactividadeconomica: tramite ? tramite.codactividadeconomica : "",
    codcomerciante: tramite ? tramite.codcomerciante : "",
    fechainicio: tramite ? tramite.fechainicio : "",
    fechafin: tramite ? tramite.fechafin : "",
    estadodeuda: tramite ? tramite.estadodeuda : "Pagado",
    estadopago: tramite ? tramite.estadopago : "Completado",
    gestion: tramite ? tramite.gestion : "",
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
        <h2 className="text-xl font-bold mb-4">{tramite ? "Edit Trámite" : "Add Trámite"}</h2>
        <form onSubmit={handleSubmit}>
          <input
            name="codtramite"
            value={formData.codtramite}
            onChange={handleChange}
            placeholder="Código Trámite"
            className="w-full border p-2 mb-2"
            required
          />
          <input
            name="codactividadeconomica"
            value={formData.codactividadeconomica}
            onChange={handleChange}
            placeholder="Actividad Económica"
            className="w-full border p-2 mb-2"
            required
          />
          <input
            name="codcomerciante"
            value={formData.codcomerciante}
            onChange={handleChange}
            placeholder="Comerciante"
            className="w-full border p-2 mb-2"
            required
          />
          <input
            name="fechainicio"
            value={formData.fechainicio}
            onChange={handleChange}
            placeholder="Fecha Inicio"
            type="date"
            className="w-full border p-2 mb-2"
            required
          />
          <input
            name="fechafin"
            value={formData.fechafin}
            onChange={handleChange}
            placeholder="Fecha Fin"
            type="date"
            className="w-full border p-2 mb-2"
            required
          />
          <select
            name="estadodeuda"
            value={formData.estadodeuda}
            onChange={handleChange}
            className="w-full border p-2 mb-2"
            required
          >
            <option value="Pagado">Pagado</option>
            <option value="Pendiente">Pendiente</option>
            <option value="No Pagado">No Pagado</option>
          </select>
          <select
            name="estadopago"
            value={formData.estadopago}
            onChange={handleChange}
            className="w-full border p-2 mb-2"
            required
          >
            <option value="Completado">Completado</option>
            <option value="En Progreso">En Progreso</option>
            <option value="Pendiente">Pendiente</option>
          </select>
          <input
            name="gestion"
            value={formData.gestion}
            onChange={handleChange}
            placeholder="Gestión"
            className="w-full border p-2 mb-2"
            required
          />
          <div className="flex justify-between">
            <button type="button" onClick={onClose} className="text-gray-600">Cancel</button>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TramiteList;
