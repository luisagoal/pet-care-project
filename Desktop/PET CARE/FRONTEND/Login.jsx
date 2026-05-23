import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

export const Login = () => {
  const { dispatch } = useContext(AuthContext); // Consumimos el contexto global
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const manejarEnvio = async (e) => {
    e.preventDefault();
    try {
      const respuesta = await axios.post('http://localhost:5000/api/login', { email, password });
      dispatch({ type: 'LOGIN_EXITOSO', payload: respuesta.data });
      alert(`¡Bienvenido, ${respuesta.data.usuario.nombre}! Rol: ${respuesta.data.usuario.role}`);
    } catch (error) {
      alert("Error al iniciar sesión");
    }
  };

  return (
    <div style={{ maxWidth: '300px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h3 style={{ textAlign: 'center' }}>Iniciar Sesión</h3>
      <form onSubmit={manejarEnvio} style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '15px' }}>
        <input type="email" placeholder="Correo" value={email} onChange={(e) => setEmail(e.target.value)} required style={{ padding: '8px' }} />
        <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required style={{ padding: '8px' }} />
        <button type="submit" style={{ backgroundColor: '#2980b9', color: 'white', border: 'none', padding: '10px', borderRadius: '4px', cursor: 'pointer' }}>
          Ingresar
        </button>
      </form>
    </div>
  );
};