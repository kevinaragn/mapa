import { useEffect } from 'react';
import { useMap } from 'react-leaflet';

const SetInitialView = ({ center }) => {
  const map = useMap();

  useEffect(() => {
    map.setView(center);
  }, [map, center]);

  return null; // Este componente no renderiza nada, solo cambia la vista inicial del mapa
};

export default SetInitialView;
