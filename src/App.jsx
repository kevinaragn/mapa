import React from 'react';
import Sidebar from './components/sidebar';
import MapComponent from './components/mapComponent'; // Asegúrate de importar tu componente de mapa

const App = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      <Sidebar />
      <div style={{ marginLeft: '250px', flex: 1, overflow: 'hidden' }}>
        <MapComponent />
      </div>
    </div>
  );
};

export default App;