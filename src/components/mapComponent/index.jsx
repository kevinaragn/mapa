import React from 'react';
import { MapContainer, ImageOverlay, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const bounds = [[0, 0], [4320, 8192]]; // Dimensiones de la imagen 8K

const MapComponent = () => {
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
        zoom={-1}
        minZoom={-1}
        maxZoom={5}
        scrollWheelZoom={true}
        dragging={true}
        style={{ height: '100%', width: '100%' }}
        maxBounds={bounds}
        maxBoundsViscosity={1.0}
        crs={L.CRS.Simple}
        zoomControl={false}
      >
        <ImageOverlay
          url="/8k-image.jpg"
          bounds={bounds}
        />
        <ZoomControls />
      </MapContainer>
    </div>
  );
};

// Componente para agregar controles de zoom personalizados
const ZoomControls = () => {
  const map = useMap();

  const handleZoomIn = () => {
    const currentZoom = map.getZoom();
    console.log(`Zoom In: ${currentZoom}`);
    map.setZoom(currentZoom + 1, { animate: true });
  };

  const handleZoomOut = () => {
    const currentZoom = map.getZoom();
    console.log(`Zoom Out: ${currentZoom}`);
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
            border: '2px solid black', // Borde para visibilidad
            borderRadius: '50%',
            fontSize: '24px',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
            zIndex: 1001, // Asegúrate de que el z-index sea alto
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
            border: '2px solid black', // Borde para visibilidad
            borderRadius: '50%',
            fontSize: '24px',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
            zIndex: 1001, // Asegúrate de que el z-index sea alto
          }}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default MapComponent;
