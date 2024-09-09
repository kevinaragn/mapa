import React from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

const MapComponent = () => {
  return (
    <div
      className="map-container"
      style={{
        flex: 1, // Ocupa el espacio restante después de la barra lateral
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <TransformWrapper
        defaultScale={1}
        wheel={{ step: 0.1 }}
        minScale={1}
        maxScale={3} // Ajusta según tu necesidad
        limitToBounds={true}
        boundsMode="element"
        centerOnInit={true}
      >
        {({ zoomIn, zoomOut }) => (
          <>
            <div style={{ position: 'absolute', top: 10, right: 10, zIndex: 10 }}>
              <button
                onClick={() => zoomIn()}
                style={{
                  padding: '10px 20px',
                  margin: '5px',
                  backgroundColor: 'gray',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
              >
                +
              </button>
              <button
                onClick={() => zoomOut()}
                style={{
                  padding: '10px 20px',
                  margin: '5px',
                  backgroundColor: 'gray',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
              >
                -
              </button>
            </div>
            <TransformComponent>
              <img
                src="/8k-image.jpg"
                alt="Map"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain', // Cambiado a contain para que la imagen no se corte
                }}
              />
            </TransformComponent>
          </>
        )}
      </TransformWrapper>
    </div>
  );
};

export default MapComponent;
