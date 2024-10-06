import '../App.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const users = [
  { id: 1, correo: "admin1@example.com", password: "password123", roleid: "admin" },
  { id: 2, correo: "admin2@example.com", password: "password123", roleid: "admin" },
  { id: 3, correo: "cashier1@example.com", password: "password123", roleid: "cashier" },
  { id: 4, correo: "user1@example.com", password: "password123", roleid: "user" },
  // ... Agrega más usuarios según sea necesario
];

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Para la navegación

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      setError('Por favor complete todos los campos.');
      return;
    }
    
    setError('');
    
    // Buscar usuario en el array de usuarios
    const user = users.find(user => user.correo === email && user.password === password);

    if (user) {
      // Guardar información de sesión si es necesario (ej: token)
      // localStorage.setItem('token', user.token);

      // Redirigir según el rol
      switch (user.roleid) {
        case 'admin':
          navigate('/admin/home');
          break;
        case 'cashier':
          navigate('/cajero/user');
          break;
        case 'user':
          navigate('/usuario/home');
          break;
        default:
          break;
      }
    } else {
      setError('Error al iniciar sesión. Verifique sus credenciales.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md text-center">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">PATENTES MUNICIPALES</h1>

        <h2 className="text-xl font-semibold mb-4 text-gray-700">INICIAR SESION</h2>
        <p className="text-sm text-gray-600 mb-6">Ingrese sus datos para el inicio al sistema</p>
        
        {error && <p className="text-red-500 mb-4">{error}</p>} 

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
