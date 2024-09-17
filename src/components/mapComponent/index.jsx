import React, { useState, useEffect } from 'react';
import { MapContainer, ImageOverlay, useMap } from 'react-leaflet';
import Markers from '../markers/index'; // Importa el componente del marcador
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import SetInitialView from '../setInitialView/index'; // Importa el nuevo componente



// Dimensiones de la imagen 8K
const bounds = [[0, 0], [4320, 8192]];

// Ejemplo de datos de marcadores
const markersData = [
  { position: [690, 3900], iconUrl: '/marker.png', popupContent: 'Iglesia', popupImageUrl: '/images/iglesia/marker.jpg' },
  { position: [690, 3700], iconUrl: '/marker.png', popupContent: 'Plaza de San Miguel', popupImageUrl: '/images/plazaSm/marker.png'},
  // Agrega más marcadores aquí
];



const MapComponent = () => {
  const initialPosition = [650, 3900]; // Posición específica inicial del mapa

  
  return (
    <div
      className="map-container"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'hidden',
      }}
    >
      <MapContainer
        center={[2160, 4096]}
        zoom={-2}
        minZoom={-1}
        maxZoom={0}
        scrollWheelZoom={true}
        dragging={true}
        style={{ height: '100%', width: '100%' }}
        maxBounds={bounds}
        maxBoundsViscosity={1.0}
        crs={L.CRS.Simple}
        zoomControl={false}
      >

        <SetInitialView center={initialPosition} />


        <ImageOverlay
          url="/8k-image.jpg"
          bounds={bounds}
        />
        <ZoomControls />
        {markersData.map((marker, index) => (
          <Markers
            key={index}
            position={marker.position}
            iconUrl={marker.iconUrl}
            popupContent={marker.popupContent}
            popupImageUrl={marker.popupImageUrl}
            isVisible={true} // Puedes ajustar la visibilidad aquí si es necesario
          />
        ))}
      </MapContainer>
    </div>
  );
};

// Componente para agregar controles de zoom personalizados
const ZoomControls = () => {
  const map = useMap();

  const handleZoomIn = () => {
    const currentZoom = map.getZoom();
    map.setZoom(currentZoom + 1, { animate: true });
  };

  const handleZoomOut = () => {
    const currentZoom = map.getZoom();
    map.setZoom(currentZoom - 1, { animate: true });
  };

  return (
    <div style={{ position: 'absolute', top: '10px', right: '10px', zIndex: 1000 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
        <button
          onClick={handleZoomIn}
          style={{
            width: '40px',
            height: '40px',
            backgroundColor: 'blue',
            color: 'white',
            border: '2px solid black',
            borderRadius: '50%',
            fontSize: '24px',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
            zIndex: 1001,
          }}
        >
          +
        </button>
        <button
          onClick={handleZoomOut}
          style={{
            width: '40px',
            height: '40px',
            backgroundColor: 'blue',
            color: 'white',
            border: '2px solid black',
            borderRadius: '50%',
            fontSize: '24px',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
            zIndex: 1001,
          }}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default MapComponent;
