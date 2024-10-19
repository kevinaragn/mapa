import React from 'react';

const Sidebar = () => {
  return (
    <div
      style={{
        width: '250px', // Ancho de la barra lateral
        height: '100vh', // Altura completa de la ventana
        backgroundColor: '#333', // Color de fondo
        color: '#fff', // Color del texto
        position: 'fixed', // Fijo en la pantalla
        top: 0,
        left: 0,
        display: 'flex',
        flexDirection: 'column',
        padding: '10px',
        boxSizing: 'border-box',
        zIndex: 1000, // Asegúrate de que esté encima del mapa
      }}
    >
      <h2>San Miguel Antiguo</h2>
      <p>Recopilacion de fotos antiguas de el centro de San Miguel desde la calle Irigoin
        hasta Pardo</p>
      <p>Tecnologias usadas: Leaflet y React</p>
      {/* Agrega más contenido según sea necesario */}
    </div>
  );
};

export default Sidebar;
