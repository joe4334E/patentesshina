import React from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import * as XLSX from 'xlsx';
import { FileText, FilePlus } from 'lucide-react';

const TramiteList = () => {
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

  // Función para exportar a PDF
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

  // Función para exportar a Excel
  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(tramites);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Trámites');
    XLSX.writeFile(workbook, 'tramites.xlsx');
  };

  return (
    <div className="p-6 bg-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Lista de Trámites</h1>
        <div className="flex items-center space-x-4">
          <button className="p-2 bg-gray-200 rounded-full">
            <FilePlus className="w-6 h-6 text-gray-600" />
          </button>
          <button className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition duration-300">
            AGREGAR NUEVO TRÁMITE
          </button>
          <button onClick={exportToExcel} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">
            <FileText className="mr-2 w-4 h-4" /> Exportar a Excel
          </button>
          <button onClick={exportToPDF} className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300">
            <FileText className="mr-2 w-4 h-4" /> Exportar a PDF
          </button>
        </div>
      </div>

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
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{tramite.codtramite}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{tramite.codactividadeconomica}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{tramite.codcomerciante}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{tramite.fechainicio}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{tramite.fechafin}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{tramite.estadodeuda}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{tramite.estadopago}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{tramite.gestion}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-yellow-600 hover:text-yellow-900 mr-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                  </button>
                  <button className="text-red-600 hover:text-red-900">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
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

export default TramiteList;
