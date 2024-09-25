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
          '1895': [
            { src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727215701/1881-1895_rt4kyy.jpg',
              
              description: `Este cuadro muestra la primera capilla del viejo partido de General Sarmiento y,
                              al lado de ella el templo parroquial cuando lo estaban construyendo.
                              Esta capilla se inauguro con gran pompa el 8 de mayo de 1881.
                              En el predio lindero el 8 de octubre de 1893, se puso la piedra fundamental del nuevo templo,
                              que fue inaugurado el 29 de septiembre de 1895, coincidiendo con las fiestas patronales,
                              cuando aun su paredes no estaban revocadas ni tenia los pisos envaldosados.` },
          ],
          '1900': [
            { src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727215703/Captura_de_pantalla_2024-09-18_170022_xzvqa0.png',
               description: '' },
          ],
          '1937': [
            { src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727215702/19399_pj6asl.jpg',
               description: '' },
          ],
          '1939': [
            { src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727215701/1939_sfjjws.jpg',
               description: 'Interior de la Catedral' },
          ],
          
          '1965': [
            { src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727215702/1965_waw62y.jpg',
               description: '' },
          ],
          '1980-1990': [
            { src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727215703/Captura_de_pantalla_2024-09-18_172242_fe6us0.png',
               description: '' },
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
          '1916': [
            { src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727216172/retrato_de_aprox_1895_uvux04.jpg',
              description: `Al momento de crearse el Partido de Gral. Sarmiento no existía en toda la Provincia de Buenos Airess un monumento homenaje a Sarmiento. 
                              El 01 de abril de 1911, en un gran acto público, al cual concurrieron los nietos de Sarmiento, Augusto y Eugenia, se coloco la piedra fundamental, siendo oficialmente inaugurado el monumento el día 09 de julio de 1916, el homenaje a Sarmiento, junto a varios cañones auténticos de la Guerra contra el Paraguay` },
          ],
          '1924': [
            { src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727216166/1924_urajzg.jpg', 
              description: '' },
          ],
          '1925': [
            { src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727216166/1925_yv42xe.jpg', 
              description: 'Estas imágenes reflejan una actividad política en la plaza de San Miguel. Es una concentración de radicales personalistas, el 20 de septiembre de 1925. Los seguidores de Yrigoyen se manifestaban en contra de las intenciones del gobierno nacional -en manos del radical antipersonalista Marcelo T. de Alvear- de intervenir la provincia de Buenos Aires. Se trataba de un reducto yrigoyenista, fundamental para las elecciones que se venían.' },
          ],
         
          '1935': [
            { src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727216167/1935_jzebbk.jpg', 
              description: '' },
          ],
          '1936': [
            { src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727242245/1936_mftlad.jpg', 
              description: '' },
          ],
          '1937': [
            { src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727216169/344762171_1174274057294945_4792117358108584642_n_avbuub.jpg', 
              description: '' },
          ],
          '1944': [
            { src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727216167/1944_gff6lr.jpg', 
              description: '' },
            ],
            "1950": [
              { src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727240383/decada_30_rdcsbs.jpg', 
                description: '' },
              ],
          '1961': [
            { src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727216167/1961_Diario_la_Nacion_o6ovsl.jpg', 
              description: 'Fotografía Diario La Nación' },
          ],
          '1965': [
            { src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727216166/153598986_3810775175677675_5160352493924135732_n_t4jz0l.jpg', 
              description: '' },
          ],
          "1960's": [
            { src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727216168/226629081_352215573105368_5403248384179603617_n_sq4g0q.jpg', 
              description: '' },
          ],
          '1971': [
            { src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727216167/1971_plisyo.jpg', 
              description: '' },
          ],
          '1976': [
            { src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727216170/431590841_7446694365419053_5830366128241073913_n_llkhfk.jpg', 
              description: '' },
          ],
          '1980': [
            { src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727244284/1980_dvctoh.jpg', 
              description: '' },
          ],
          '1994': [
            { src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727216167/1994_u13qlj.jpg', 
              description: '' },
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
