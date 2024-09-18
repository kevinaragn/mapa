// src/components/markers/index.jsx
import React, { useState } from 'react';
import L from 'leaflet';
import { Marker, Popup } from 'react-leaflet';
import Gallery from '../gallery';
import 'leaflet/dist/leaflet.css';
import '../markers/styles.css';

const Markers = ({ position, iconUrl, popupContent, popupImageUrl, galleryData, isVisible }) => {
  const [hover, setHover] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [showGallery, setShowGallery] = useState(false);

  const customIcon = L.icon({
    iconUrl: iconUrl,
    iconSize: hover ? [60, 60] : [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [0, -50],
    className: hover ? 'hovered-icon' : '',
  });

  return (
    <Marker
      position={position}
      icon={customIcon}
      opacity={isVisible ? 1 : 0}
      className={isVisible ? 'fade-in' : 'fade-out'}
      eventHandlers={{
        mouseover: () => {
          setHover(true);
          setIsPopupOpen(true);
        },
        mouseout: () => setHover(false),
      }}
    >
      {isPopupOpen && !showGallery && (
        <Popup
          className="custom-popup"
          onClose={() => setIsPopupOpen(false)}
        >
          <div className="popup-content">
            <h3>{popupContent}</h3>
            <img
              src={popupImageUrl}
              alt="Imagen histórica"
              style={{
                width: '200px',
                height: 'auto',
                borderRadius: '10px',
              }}
            />
            <button
              className="custom-button"
              onClick={() => setShowGallery(true)}
            >
              Ver imágenes históricas
            </button>
          </div>
        </Popup>
      )}
      {showGallery && (
        <Gallery
          images={galleryData}
          onClose={() => setShowGallery(false)}
        />
      )}
    </Marker>
  );
};

export default Markers;
