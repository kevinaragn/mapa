// src/components/map/MapComponent.jsx
import React from 'react';
import { MapContainer, ImageOverlay } from 'react-leaflet';
import Markers from '../markers/index'; // Importa el componente del marcador
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import SetInitialView from '../setInitialView/index'; // Importa el nuevo componente

const bounds = [[0, 0], [4320, 8192]];

const markersData = [
  {
    position: [690, 3900],
    iconUrl: '/marker.png',
    popupContent: 'Iglesia',
    popupImageUrl: '/images/iglesia/marker.jpg',
    galleryData: [
      {
        years: {
          '2019': [
            { src: '/images/iglesia/2019.jpg', description: 'Iglesia en 2019' },
          ],
          '2021': [
            { src: '/images/iglesia/2021.jpg', description: 'Iglesia en 2021 lorem ipsum' },
          ],
        }
      }
    ]
  },
  {
    position: [690, 3700],
    iconUrl: '/marker.png',
    popupContent: 'Plaza de San Miguel',
    popupImageUrl: '/images/plazaSm/marker.png',
    galleryData: [
      {
        years: {
          '1970': [
            { src: '/images/plazaSm/1970.jpg', description: 'Plaza de San Miguel en 1970' },
          ],
          '2020': [
            { src: '/images/plazaSm/2020.jpg', description: 'Plaza de San Miguel en 2020' },
          ],
        }
      }
    ]
  },
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

        <ImageOverlay url="/8k-image.jpg" bounds={bounds} />

        {markersData.map((marker, index) => (
          <Markers
            key={index}
            position={marker.position}
            iconUrl={marker.iconUrl}
            popupContent={marker.popupContent}
            popupImageUrl={marker.popupImageUrl}
            galleryData={marker.galleryData} // Pasamos los datos de la galería
            isVisible={true}
          />
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
