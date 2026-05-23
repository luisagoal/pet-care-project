import React, { useState } from 'react';
import { AuthProvider } from './AuthContext';
import { Catalogo } from './Catalogo';
import { Login } from './Login';

export default function App() {
  // Estado para simular las rutas y la navegación de la SPA
  const [ruta, setRuta] = useState('catalogo');

  return (
    <AuthProvider>
      <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f9f9f9', minHeight: '100vh', margin: 0 }}>
        {/* Barra de Navegación (Navbar) */}
        <nav style={{ backgroundColor: '#2c3e50', padding: '15px 30px', display: 'flex', gap: '20px', justifyContent: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          <button 
            onClick={() => setRuta('catalogo')} 
            style={{ color: 'white', background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.1em', fontWeight: ruta === 'catalogo' ? 'bold' : 'normal' }}
          >
            Catálogo Canino
          </button>
          <button 
            onClick={() => setRuta('login')} 
            style={{ color: 'white', background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.1em', fontWeight: ruta === 'login' ? 'bold' : 'normal' }}
          >
            Ingresar
          </button>
        </nav>

        {/* Renderizado dinámico de pantallas según la ruta seleccionada */}
        <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
          {ruta === 'catalogo' && <Catalogo />}
          {ruta === 'login' && <Login />}
        </main>
      </div>
    </AuthProvider>
  );
}