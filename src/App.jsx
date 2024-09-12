import React from 'react';
import Sidebar from './components/sidebar';
import MapComponent from './components/mapComponent'; // Asegúrate de que la ruta sea correcta

const App = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', width: '100vw', overflow: 'hidden' }}>
      <Sidebar />
      <div style={{ marginLeft: '250px', flex: 1, height: '100%', overflow: 'hidden' }}>
        <MapComponent />
      </div>
    </div>
  );
};

export default App;
