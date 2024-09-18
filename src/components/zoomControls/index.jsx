// src/components/zoomControls/index.jsx
import React from 'react';
import { useMap } from 'react-leaflet';

const ZoomControls = () => {
  const map = useMap();

  const handleZoomIn = () => {
    map.setZoom(map.getZoom() + 1, { animate: true });
  };

  const handleZoomOut = () => {
    map.setZoom(map.getZoom() - 1, { animate: true });
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

export default ZoomControls;
