import React, { useState } from 'react';
import { Download, FileText } from 'lucide-react';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

function Reports() {
  const reports = [
    { date: "01-Oct, 2024", patentNumber: "123456", type: "Licencia Comercial", status: "Aprobada" },
    { date: "15-Oct, 2024", patentNumber: "654321", type: "Permiso de Uso", status: "Pendiente" },
    { date: "22-Oct, 2024", patentNumber: "789012", type: "Licencia de Funcionamiento", status: "Rechazada" },
    { date: "05-Nov, 2024", patentNumber: "456789", type: "Licencia de Publicidad", status: "Aprobada" },
    { date: "10-Nov, 2024", patentNumber: "987654", type: "Permiso Sanitario", status: "Aprobada" },
    { date: "20-Nov, 2024", patentNumber: "321654", type: "Licencia Ambiental", status: "Pendiente" },
    { date: "25-Nov, 2024", patentNumber: "135792", type: "Autorización de Eventos", status: "Aprobada" },
    { date: "01-Dic, 2024", patentNumber: "246813", type: "Renovación de Licencia", status: "Rechazada" },
    { date: "10-Dic, 2024", patentNumber: "369258", type: "Licencia de Funcionamiento", status: "Pendiente" },
    { date: "15-Dic, 2024", patentNumber: "147258", type: "Inscripción de Marca", status: "Aprobada" },
  ];

  const [selectedReports, setSelectedReports] = useState([]);
  const [filter, setFilter] = useState({ date: '', type: '' });

  const exportToPDF = (data) => {
    const doc = new jsPDF();
    doc.text("Trámites del Usuario", 14, 16);
    doc.autoTable({
      head: [['Fecha', 'Número de Patente', 'Tipo', 'Estado']],
      body: data.map(report => [report.date, report.patentNumber, report.type, report.status]),
      startY: 22,
    });
    doc.save('tramites_usuario.pdf');
  };

  const exportToExcel = (data) => {
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Trámites");
    XLSX.writeFile(wb, "tramites_usuario.xlsx");
  };

  const handleSelectReport = (report) => {
    if (selectedReports.includes(report)) {
      setSelectedReports(selectedReports.filter(r => r !== report));
    } else {
      setSelectedReports([...selectedReports, report]);
    }
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: value });
  };

  const filteredReports = reports.filter(report => {
    return (
      (filter.date ? report.date === filter.date : true) &&
      (filter.type ? report.type === filter.type : true)
    );
  });

  return (
    <div className="bg-white rounded-lg shadow overflow-x-auto p-6">
      <h2 className="text-xl font-bold mb-4">Trámites del Usuario</h2>
      <div className="flex justify-between mb-4">
        <div className="flex space-x-2">
          <select name="date" onChange={handleFilterChange} className="border rounded-md p-2">
            <option value="">Filtrar por Fecha</option>
            {Array.from(new Set(reports.map(report => report.date))).map(date => (
              <option key={date} value={date}>{date}</option>
            ))}
          </select>
          <select name="type" onChange={handleFilterChange} className="border rounded-md p-2">
            <option value="">Filtrar por Tipo</option>
            {Array.from(new Set(reports.map(report => report.type))).map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
        <div className="flex space-x-2">
          <button onClick={() => exportToPDF(selectedReports.length ? selectedReports : filteredReports)} className="flex items-center px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition">
            <Download className="mr-2" /> Exportar a PDF
          </button>
          <button onClick={() => exportToExcel(selectedReports.length ? selectedReports : filteredReports)} className="flex items-center px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-700 transition">
            <FileText className="mr-2" /> Exportar a Excel
          </button>
        </div>
      </div>
      <table className="min-w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              <input
                type="checkbox"
                onChange={(e) => {
                  if (e.target.checked) {
                    setSelectedReports(filteredReports);
                  } else {
                    setSelectedReports([]);
                  }
                }}
              />
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Número de Patente</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tipo</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {filteredReports.map((report, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <input
                  type="checkbox"
                  checked={selectedReports.includes(report)}
                  onChange={() => handleSelectReport(report)}
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{report.date}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{report.patentNumber}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{report.type}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{report.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Reports;
