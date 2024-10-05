import '../App.css'
import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica de inicio de sesión
    console.log('Iniciando sesión con:', { email, password });
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md text-center">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">PATENTES MUNICIPALES</h1>o

        <h2 className="text-xl font-semibold mb-4 text-gray-700">INICIAR SESION</h2>
        <p className="text-sm text-gray-600 mb-6">Ingrese sus datos para el inicio al sistema</p>
        
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-500"
              placeholder="Ingrese su correo"
              required
            />
          </div>
          
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-500"
              placeholder="Ingrese su contraseña"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-400 text-white py-2 px-4 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
          >
            INICIAR SESION
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
