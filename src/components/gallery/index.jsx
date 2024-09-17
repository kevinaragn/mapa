// src/components/markers/Gallery.jsx
import React, { useState } from 'react';
import './styles.css'; // Importa tus estilos personalizados

const Gallery = ({ images, onClose }) => {
  const [selectedYear, setSelectedYear] = useState(Object.keys(images[0]?.years || {}));
  const [selectedImages, setSelectedImages] = useState(images[0]?.years[Object.keys(images[0]?.years || {})[0]] || []);

  // Agrupar imágenes por año
  const years = [...new Set(images.flatMap(img => Object.keys(img.years)))];

  const handleYearChange = (year) => {
    setSelectedYear(year);
    setSelectedImages(images.find(img => img.years[year])?.years[year] || []);
  };

  return (
    <div className="gallery-container">
      <button className="close-button" onClick={onClose}>Cerrar</button>
      <div className="year-selector">
        {years.map(year => (
          <button
            key={year}
            onClick={() => handleYearChange(year)}
            className={selectedYear === year ? 'active' : ''}
          >
            {year}
          </button>
        ))}
      </div>
      <div className="image-grid">
        {selectedImages.map((image, index) => (
          <div key={index} className="image-item">
            <img src={image.src} alt={`Imagen del año ${selectedYear}`} />
            <p className="image-description">{image.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
