import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight, FaTimes } from 'react-icons/fa';
import './styles.css'; // Asegúrate de importar los estilos necesarios

const Gallery = ({ images, onClose }) => {
  const [selectedYearIndex, setSelectedYearIndex] = useState(0);
  const years = [...new Set(images.flatMap((img) => Object.keys(img.years)))];
  const [selectedImages, setSelectedImages] = useState(images[0]?.years[years[0]] || []);
  const sortedYears = years.sort((a, b) => parseInt(a) - parseInt(b));

  // Controlar qué imagen está actualmente mostrando su fade in
  const [fadeInKey, setFadeInKey] = useState(0);

  const handleYearChange = (index) => {
    setSelectedYearIndex(index);
    setSelectedImages(images.find((img) => img.years[sortedYears[index]])?.years[sortedYears[index]] || []);
  };

  const goToPreviousYear = () => {
    if (selectedYearIndex > 0) {
      handleYearChange(selectedYearIndex - 1);
    }
  };

  const goToNextYear = () => {
    if (selectedYearIndex < sortedYears.length - 1) {
      handleYearChange(selectedYearIndex + 1);
    }
  };

  // Cada vez que cambien las imágenes, reiniciamos el efecto fade-in
  useEffect(() => {
    // Incrementamos el key para forzar la reactivación del efecto
    setFadeInKey((prevKey) => prevKey + 1);
  }, [selectedImages, selectedYearIndex]);

  return (
    <div className="gallery-overlay">
      <div className="gallery-container">
        <button className="close-button" onClick={onClose}>
          <FaTimes size={30} />
        </button>

        <div className="image-navigation">
          <button className="nav-button left" onClick={goToPreviousYear} disabled={selectedYearIndex === 0}>
            <FaArrowLeft size={30} />
          </button>

          <div className="image-display">
            {selectedImages.map((image, index) => (
              <div
                key={`${fadeInKey}-${index}`} // Key dinámica para reactivar el fade in siempre
                className="image-item fade-in-active"
              >
                <img src={image.src} alt={`Imagen del año ${sortedYears[selectedYearIndex]}`} className="gallery-image" />
                {image.description && <p className="image-description">{image.description}</p>}
              </div>
            ))}
          </div>

          <button className="nav-button right" onClick={goToNextYear} disabled={selectedYearIndex === sortedYears.length - 1}>
            <FaArrowRight size={30} />
          </button>
        </div>

        <div className="year-selector">
          {sortedYears.map((year, index) => (
            <button
              key={year}
              onClick={() => handleYearChange(index)}
              className={selectedYearIndex === index ? 'active' : ''}
            >
              {year}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
