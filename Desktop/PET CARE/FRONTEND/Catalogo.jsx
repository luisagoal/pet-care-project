import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TarjetaMascota } from '../components/TarjetaMascota';

export const Catalogo = () => {
  const [mascotas, setMascotas] = useState([]); // useState para guardar la lista local de perros
  const [cargando, setCargando] = useState(true);

  // useEffect para ejecutar la petición HTTP asíncrona al montar la página
  useEffect(() => {
    axios.get('http://localhost:5000/api/mascotas')
      .then(response => {
        setMascotas(response.data);
        setCargando(false);
      })
      .catch(error => {
        console.error("Error cargando el catálogo:", error);
        setCargando(false);
      });
  }, []);

  if (cargando) return <p style={{ textAlign: 'center', marginTop: '20px' }}>Cargando peluditos disponibles...</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ textAlign: 'center', color: '#2c3e50' }}>Catálogo de Adopción Responsable</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '20px' }}>
        {mascotas.map(perro => (
          <TarjetaMascota key={perro.id} mascota={perro} />
        ))}
      </div>
    </div>
  );
};