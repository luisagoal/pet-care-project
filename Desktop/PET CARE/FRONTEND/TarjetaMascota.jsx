import React from 'react';

export const TarjetaMascota = ({ mascota }) => {
  return (
    <div style={{ 
      border: '1px solid #e0e0e0', 
      borderRadius: '12px', 
      padding: '20px', 
      margin: '15px', 
      width: '260px', 
      textAlign: 'center',
      backgroundColor: 'white',
      boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
      transition: 'transform 0.2s'
    }}>
      <img 
        src={mascota.foto_url} 
        alt={mascota.nombre} 
        style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '8px' }} 
      />
      <h3 style={{ color: '#2c3e50', margin: '15px 0 5px 0', fontSize: '1.4em' }}>{mascota.nombre}</h3>
      <p style={{ margin: '5px 0', color: '#555' }}><strong>Edad:</strong> {mascota.edad}</p>
      <p style={{ fontSize: '0.9em', color: '#7f8c8d', minHeight: '40px' }}>{mascota.estado_medico}</p>
      
      <button style={{ 
        backgroundColor: '#27ae60', 
        color: 'white', 
        border: 'none', 
        padding: '10px 15px', 
        borderRadius: '6px', 
        cursor: 'pointer', 
        marginTop: '10px',
        width: '100%',
        fontWeight: 'bold',
        fontSize: '1em'
      }}>
        Postular Adopción
      </button>
    </div>
  );
};