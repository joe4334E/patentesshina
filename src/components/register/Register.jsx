import React, { useState } from "react";
import AdminRegister from "./AdminRegister";
import CajeroRegister from "./CajeroRegister";
import ComercianteRegister from "./ComercianteRegister";

const Register = () => {
  const [userType, setUserType] = useState("");

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Seleccione un Tipo de Usuario</h2>
      <div className="flex justify-around mb-6">
        <button
          onClick={() => setUserType("admin")}
          className={`px-6 py-3 text-lg font-medium rounded-lg transition-colors duration-300 ${
            userType === "admin" ? "bg-blue-600 text-white" : "bg-blue-100 text-blue-600 hover:bg-blue-200"
          }`}
        >
          Admin
        </button>
        <button
          onClick={() => setUserType("cajero")}
          className={`px-6 py-3 text-lg font-medium rounded-lg transition-colors duration-300 ${
            userType === "cajero" ? "bg-blue-600 text-white" : "bg-blue-100 text-blue-600 hover:bg-blue-200"
          }`}
        >
          Cajero
        </button>
        <button
          onClick={() => setUserType("comerciante")}
          className={`px-6 py-3 text-lg font-medium rounded-lg transition-colors duration-300 ${
            userType === "comerciante" ? "bg-blue-600 text-white" : "bg-blue-100 text-blue-600 hover:bg-blue-200"
          }`}
        >
          Comerciante
        </button>
      </div>

      <div className="mt-8">
        {userType === "admin" && <AdminRegister />}
        {userType === "cajero" && <CajeroRegister />}
        {userType === "comerciante" && <ComercianteRegister />}
      </div>
    </div>
  );
};

export default Register;
