// src/components/map/MapComponent.jsx
import React from 'react';
import { MapContainer, ImageOverlay, useMap } from 'react-leaflet';
import Markers from '../markers/index'; // Importa el componente del marcador
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import SetInitialView from '../setInitialView/index'; // Importa el nuevo componente

const bounds = [[0, 0], [2394, 8192]];

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
          
          '1968': [
            { src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1728426560/e6f657f4-fc06-43b6-9c62-e23927ef238b.png',
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
         
          '1976': [
            { src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727216170/431590841_7446694365419053_5830366128241073913_n_llkhfk.jpg', 
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
  // Nuevo marcador añadido
  {
    position: [700, 3500], // Coordenadas del nuevo marcador
    iconUrl: '/marker.png',
    popupContent: 'Escuela Nro 1', // Contenido del popup
    popupImageUrl: '/images/escuela/marker.jpg', // Imagen en el popup
    galleryData: [
      {
        years: {
          "1910": [
            { 
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727471189/WhatsApp_Image_2024-09-24_at_19.20.32_vfp8wp.jpg',
              description: ``,
            },
          ],
          '1912':[
            {src: "https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727215692/1915_uzcwmh.jpg",
            description:`La Escuela N° 1 de San Miguel fue inaugurada un 13 de mayo de 1870, durante la presidencia de Domingo Faustino Sarmiento.Originalmente, estaba ubicada en Belgrano y Sarmiento, lugar donde hoy funciona la Biblioteca Municipal.
                            escuela comenzó a funcionar como la N° 4 de Moreno, ya que el partido de General Sarmiento no existía en ese momento, por la tanto dependía de este municipio vecino.
                            La matrícula inicial fue con catorce alumnos, y todos ellos eran varones.
                            Al poco tiempo se decidió trasladar la escuela a la ubicación actual.
                            En en 1889, con la creación del Partido de General Sarmiento, se contrató para la construcción a un Arquitecto local, llamado Luis Bianchi. La obra fue solventada, en parte por colaboración de los vecinos, y la mayor parte con fondos municipales y del Gobierno de turno.
                            La escuela quedaría totalmente construida en 1912 y quedaría ubicada en el lugar donde actualmente se encuentra.
`,
            },
          ],
          // Otros años...
        },
        
      },
      
    ]
  },
  {
    position: [500, 3800], // Coordenadas del marcador [latitud, longitud]
    iconUrl: '/marker.png', // URL del ícono del marcador
    popupContent: 'Biblioteca', // Texto que aparecerá en el popup
    popupImageUrl: '/images/sarmientoBelgrano/marker.jpg', // URL de la imagen que aparecerá en el popup (opcional)
    galleryData: [
      {
        years: {
          '1960': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727216184/Confiteria_Munich_a%C3%B1os_60_s_bq8bso.jpg', // URL de la imagen de la galería
              description: 'Fecha Aproximada',
            },
          ],
          '1939':[{
            src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727216140/398946906_6928300117258483_7272096707156650224_n_v1xyrm.jpg',
            description: ""
          }
          ],
          '1954':[{
            src: "https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727477738/a69d9dcc-191f-4dbb-9bba-f612727184f4.png",
            description: `Procesión durante las fiestas patronales de 1954, encabezadas por el intendente municipal Fernando Arricau, acompañada por vecinos, autoridades municipales, religiosas y militares.`

          }],
          '1938':[{
            src: "https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727477918/8f1b0525-dc75-4b94-82fa-b5c4c7dde3cf.png",
            description:''
          }],
          '1890':[{
            src: "https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727486580/51871cd3-0a44-4ce1-afbb-2d6e8a6fa0ff.png",
            description:'Elecciones. Vista desde el lado de Belgrano'
          }]
          },
      },
    ],
  },



  {
    position: [500,3880], // Coordenadas del marcador [latitud, longitud]
    iconUrl: '/marker.png', // URL del ícono del marcador
    popupContent: 'Banco', // Texto que aparecerá en el popup
    popupImageUrl: '/images/bancoProvincia/marker.jpg', // URL de la imagen que aparecerá en el popup (opcional)
    galleryData: [
      {
        years: {
          '1940': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727216183/279028870_5138005812954598_3485794611055088711_n_egeesu.jpg', // URL de la imagen de la galería
              description: 'Año Aproximado',
            },
          ],
          '1970': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727216183/Bco_Provincia_vxadok.jpg', // URL de la imagen de la galería
              description: 'Año Aproximado',
            },
          ],
          // Puedes agregar más años con imágenes
        },
      },
    ],
    
  },
  {
    position: [500, 3700], // Coordenadas del marcador [latitud, longitud]
    iconUrl: '/marker.png', // URL del ícono del marcador
    popupContent: 'Municipalidad', // Texto que aparecerá en el popup
    popupImageUrl: '/images/municipalidad/marker.jpg', // URL de la imagen que aparecerá en el popup (opcional)
    galleryData: [
      {
        years: {
          '1892': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727477506/335d6ff1-958d-4559-9f20-9a82a07708b4.png', // URL de la imagen de la galería
              description: '',
            },
          ],
          '1900': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727216139/311131427_5623513484403826_8762557544671992447_n_bfyqf0.jpg', // URL de la imagen de la galería
              description: 'Año Aproximado',
            },
          ],
          '1950': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727216140/332640603_524225239843752_1725030503493224655_n_hyoptu.jpg', // URL de la imagen de la galería
              description: 'Año Aproximado',
            },
          ],
          // Puedes agregar más años con imágenes
        },
      },
    ],
  },
  
  
  {
    position: [440, 3800], // Coordenadas del marcador [latitud, longitud]
    iconUrl: '/marker.png', // URL del ícono del marcador
    popupContent: 'Edificio Municipal', // Texto que aparecerá en el popup
    popupImageUrl: 'images/lateralMunicipalidad/marker.jpg', // URL de la imagen que aparecerá en el popup (opcional)
    galleryData: [
      {
        years: {
          '1970': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727216182/1967_sxmd12.jpg', // URL de la imagen de la galería
              description: '',
            },
          ],
          // Puedes agregar más años con imágenes
        },
      },
    ],
  },
  {
    position: [750, 3500], // Coordenadas del marcador [latitud, longitud]
    iconUrl: '/marker.png', // URL del ícono del marcador
    popupContent: 'Edificio Rodriguez y Flores', // Texto que aparecerá en el popup
    popupImageUrl: 'images/rodriguez/marker.jpg', // URL de la imagen que aparecerá en el popup (opcional)
    galleryData: [
      {
        years: {
          '1963': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727216177/314676122_5722815557806951_6361104743530102698_n_rgcqlw.jpg', // URL de la imagen de la galería
              description: 'Su construcción comenzo en el año 1963 y finalizó en 1969',
            },
          ],
          
          '1979': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727480330/6851169b-be69-468e-8760-89550fa12cf9.png', // URL de la imagen de la galería
              description: 'Año Aproximado. Vista desde el edificio. Actual Instituto Mariano Moreno en construccion',
            },
          ],
          '1980': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727216179/Vista_desde_balcon_1980_lrtfme.jpg', // URL de la imagen de la galería
              description: 'Vista desde edificio',
            },
          ],
          '1989 ': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727845220/b59cc2ae-a1ce-4125-8606-25b6272664b4.png', // URL de la imagen de la galería
              description: 'Vista hacia Tribulato',
            },
          ],
          '1989 (2)': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727845543/fbedeaa8-549a-4a6b-84da-9d5371371733.png', // URL de la imagen de la galería
              description: '',
            },
          ],
          '1980 (2)': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727481072/67b30825-ef00-4630-b286-add1f8c97b79.png', // URL de la imagen de la galería
              description: 'Vista hacia Estacion de San Miguel',
            },
          ],
          '1986': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727216178/campeones_3_e7gooz.jpg', // URL de la imagen de la galería
              description: 'Argentina Campeon',
            },
          ],
          '1986 (2)': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727216178/campeones_4_oryctd.jpg', // URL de la imagen de la galería
              description: 'Argentina Campeon',
            },
          ],
          '1986 (3)': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727216178/campeones_2_goxnmh.jpg', // URL de la imagen de la galería
              description: 'Argentina Campeon',
            },
          ],
          '1987': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727216176/1986_ssyqmb.jpg', // URL de la imagen de la galería
              description: 'Vista a Mitre y Paunero ',
            },
          ],
          // Puedes agregar más años con imágenes
        },
      },
    ],
  },
  {
    position: [600,3880], // Coordenadas del marcador [latitud, longitud]
    iconUrl: '/marker.png', // URL del ícono del marcador
    popupContent: 'Belgrano y Sarmiento', // Texto que aparecerá en el popup
    popupImageUrl: 'images/tuttoPanne/marker.jpg', // URL de la imagen que aparecerá en el popup (opcional)
    galleryData: [
      {
        years: {
          '1970': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727475979/1fffabbc-c61c-41fe-81e9-0bd205e56283.png', // URL de la imagen de la galería
              description: 'Año Aproximado',
            },
          ],
          
          // Puedes agregar más años con imágenes
        },
      },
    ],
  },
  
  
  {
    position: [500, 3650], // Coordenadas del marcador [latitud, longitud]
    iconUrl: '/marker.png', // URL del ícono del marcador
    popupContent: 'Sarmiento', // Texto que aparecerá en el popup
    popupImageUrl: 'images/newPlaza/marker.jpg', // URL de la imagen que aparecerá en el popup (opcional)
    galleryData: [
      {
        years: {
          '1939': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727215701/329503821_723417819222187_4080366943625211458_n_vzcvmh.jpg', // URL de la imagen de la galería
              description: '',
            },
          ],
          '1939 (2)': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1728429374/9f9d8056-c02a-4e11-8fdc-372611d8ffe5.png', // URL de la imagen de la galería
              description: '',
            },
          ],
          
        },
      },
    ],
  },
  
  {
    position: [640, 3900], // Coordenadas del marcador [latitud, longitud]
    iconUrl: '/marker.png', // URL del ícono del marcador
    popupContent: 'Mercado San Miguel', // Texto que aparecerá en el popup
    popupImageUrl: 'images/sanCarlos/marker.jpg', // URL de la imagen que aparecerá en el popup (opcional)
    galleryData: [
      {
        years: {
          '1980': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727215700/277774860_726738982020162_5028048171319446748_n_sltbym.jpg', // URL de la imagen de la galería
              description: 'Decada Aproximada',
            },
          ],
          '1990': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727215701/frente_a_la_plaza_uf7hx6.jpg', // URL de la imagen de la galería
              description: 'Decada Aproximada',
            },
          ],
          // Puedes agregar más años con imágenes
        },
      },
    ],
  },
  

  {
    position: [350, 3570], // Coordenadas del marcador [latitud, longitud]
    iconUrl: '/marker.png', // URL del ícono del marcador
    popupContent: 'Alem y Mitre', // Texto que aparecerá en el popup
    popupImageUrl: 'images/alemMitre/marker.jpg', // URL de la imagen que aparecerá en el popup (opcional)
    galleryData: [
      {
        years: {
          '1906': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727215695/1906_mirando_hacia_moreno_bunefa.jpg', // URL de la imagen de la galería
              description: 'Mirando hacia Moreno',
            },
          ],
          '1906 2': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727215698/mirando_desde_patolandia_hacia_mu%C3%B1iz_gesevh.jpg', // URL de la imagen de la galería
              description: 'Mirando hacia Muñiz',
            },
          ],
          // Puedes agregar más años con imágenes
        },
      },
    ],
  },
  {
    position: [330, 3530], // Coordenadas del marcador [latitud, longitud]
    iconUrl: '/marker.png', // URL del ícono del marcador
    popupContent: 'Patolandia', // Texto que aparecerá en el popup
    popupImageUrl: 'images/patolandia/marker.jpg', // URL de la imagen que aparecerá en el popup (opcional)
    galleryData: [
      {
        years: {
          '1937': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727489541/8d945fd7-7c93-42be-a223-03f1c2f2bf3b.png', // URL de la imagen de la galería
              description: '',
            },
          ],
          
        },
      },
    ],
  },
  {
    position: [350, 3600], // Coordenadas del marcador [latitud, longitud]
    iconUrl: '/marker.png', // URL del ícono del marcador
    popupContent: 'Alem y Mitre', // Texto que aparecerá en el popup
    popupImageUrl: 'images/alemyMitre/marker.jpg', // URL de la imagen que aparecerá en el popup (opcional)
    galleryData: [
      {
        years: {
          '1906': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727215698/alem_y_mitre_vieja_estacion._1906_v54j7r.jpg', // URL de la imagen de la galería
              description: '',
            },
          ],
          '1964': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727839657/b7456dee-74fa-4042-9c7a-7761a0561571.png', // URL de la imagen de la galería
              description: '',
            },
          ],
          
        },
      },
    ],
  },
  {
    position: [350, 3720], // Coordenadas del marcador [latitud, longitud]
    iconUrl: '/marker.png', // URL del ícono del marcador
    popupContent: 'Entrada a la Estación', // Texto que aparecerá en el popup
    popupImageUrl: 'images/entrada/marker.jpg', // URL de la imagen que aparecerá en el popup (opcional)
    galleryData: [
      {
        years: {
          '1978': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727215697/416425407_894470848879835_7368154794085578342_n_ah5rke.jpg', // URL de la imagen de la galería
              description: '',
            },
          ],
          
        },
      },
    ],
  },



  
  {
    position: [850, 3470], // Coordenadas del marcador [latitud, longitud]
    iconUrl: '/marker.png', // URL del ícono del marcador
    popupContent: 'Bomberos', // Texto que aparecerá en el popup
    popupImageUrl: 'images/bomberos/marker.jpg', // URL de la imagen que aparecerá en el popup (opcional)
    galleryData: [
      {
        years: {
          '1968': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727215686/1968_m4nznr.jpg', // URL de la imagen de la galería
              description: '',
            },
          ],
          '1968 2': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727215687/97839195_677796512788062_3634677367718281216_n_slane0.jpg', // URL de la imagen de la galería
              description: '',
            },
          ],
          '1970': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727215686/1970_muq3vs.jpg', // URL de la imagen de la galería
              description: '',
            },
          ],
          '1970 2': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727215687/347557460_808288911007074_5142281161897241235_n_oxvlvs.jpg', // URL de la imagen de la galería
              description: '',
            },
          ],
          '1980': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727215687/1980_Simulacro_orgofw.jpg', // URL de la imagen de la galería
              description: 'Simulacro',
            },
          ],
          // Puedes agregar más años con imágenes
        },
      },
    ],
  },
  {
    position: [850, 3530], // Coordenadas del marcador [latitud, longitud]
    iconUrl: '/marker.png', // URL del ícono del marcador
    popupContent: 'Diggit', // Texto que aparecerá en el popup
    popupImageUrl: 'images/diggit/marker.jpg', // URL de la imagen que aparecerá en el popup (opcional)
    galleryData: [
      {
        years: {
          
          '1966': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727216155/no_se_el_a%C3%B1o_daqgir.jpg', // URL de la imagen de la galería
              description: '',
            },
          ],
          '1970': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727815251/fe72533e-8e4f-479d-8459-28776c0b12db.png',
              description: 'Demolición',
            },
          ],
          // Puedes agregar más años con imágenes
        },
      },
    ],
  },
  {
    position: [780, 3730], // Coordenadas del marcador [latitud, longitud]
    iconUrl: '/marker.png', // URL del ícono del marcador
    popupContent: 'Vista de Plaza', // Texto que aparecerá en el popup
    popupImageUrl: 'images/parada/marker.jpg', // URL de la imagen que aparecerá en el popup (opcional)
    galleryData: [
      {
        years: {
          '1980': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727244284/1980_dvctoh.jpg', // URL de la imagen de la galería
              description: '',
            },
          ],
         
          '1971': [
            { src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727216167/1971_plisyo.jpg', 
              description: '' },
          ],
          // Puedes agregar más años con imágenes
        },
      },
    ],
  },
  {
    position: [750, 3600], // Coordenadas del marcador [latitud, longitud]
    iconUrl: '/marker.png', // URL del ícono del marcador
    popupContent: 'Parada de colectivo', // Texto que aparecerá en el popup
    popupImageUrl: 'images/paradados/marker.jpg', // URL de la imagen que aparecerá en el popup (opcional)
    galleryData: [
      {
        years: {
          '1954': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727822174/88424b3a-2820-4fca-8c4c-998544c4c3e7.png', // URL de la imagen de la galería
              description: '',
            },
          ],
        
          // Puedes agregar más años con imágenes
        },
      },
    ],
  },
  {
    position: [260, 3570], // Coordenadas del marcador [latitud, longitud]
    iconUrl: '/marker.png', // URL del ícono del marcador
    popupContent: 'Vias del tren', // Texto que aparecerá en el popup
    popupImageUrl: 'images/estacion/marker.jpg', // URL de la imagen que aparecerá en el popup (opcional)
    galleryData: [
      {
        years: {
          '1978': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727215697/432777541_7432530323502124_761907303509397671_n_jqrerc.jpg', // URL de la imagen de la galería
              description: '',
            },
          ],
          '1970 ': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727215698/70_s_hsa3dx.jpg', // URL de la imagen de la galería
              description: 'Decada Aproximada',
            },
          ],
          '2000': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727215697/415737009_894470852213168_5625367883100689895_n_lpe2y3.jpg', // URL de la imagen de la galería
              description: 'Decada Aproximada',
            },
          ],
         
          '1906': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727836583/8366123e-3b0b-40a0-90bc-a02b95c1d508.png', // URL de la imagen de la galería
              description: '',
            },
          ],
         
          // Puedes agregar más años con imágenes
        },
      },
    ],
  },
  {
    position: [200, 3500], // Coordenadas del marcador [latitud, longitud]
    iconUrl: '/marker.png', // URL del ícono del marcador
    popupContent: 'Vieja Estacion', // Texto que aparecerá en el popup
    popupImageUrl: 'images/viejaEstacion/marker.jpg', // URL de la imagen que aparecerá en el popup (opcional)
    galleryData: [
      {
        years: {
          '1939': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727215696/1939_paclwq.jpg', // URL de la imagen de la galería
              description: 'Decada Aproximada',
            },
          ],
          '1970 2': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727215698/70_s_hsa3dx.jpg', // URL de la imagen de la galería
              description: 'Decada Aproximada',
            },
          ],
         
          '2005': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727215696/2005_atras_de_la_estacio_mnmmbb.jpg', // URL de la imagen de la galería
              description: 'Viejo Anden',
            },
          ],
         
          // Puedes agregar más años con imágenes
        },
      },
    ],
  },
  {
    position: [460, 3530], // Coordenadas del marcador [latitud, longitud]
    iconUrl: '/marker.png', // URL del ícono del marcador
    popupContent: 'Edificio Nuralia', // Texto que aparecerá en el popup
    popupImageUrl: 'images/nuralia/marker.jpg', // URL de la imagen que aparecerá en el popup (opcional)
    galleryData: [
      {
        years: {
          '1970': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727838807/5badf163-f569-49bb-8e15-99463284bd40.png', // URL de la imagen de la galería
              description: 'Vista hacia Muñiz',
            },
          ],
          '1980': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727215694/316202653_5762976133790893_5432969627060117747_n_gxwedo.jpg', // URL de la imagen de la galería
              description: 'Vista hacia Moreno. Se puede ver el cartel del Sain Kaleh',
            },
          ],
          '2005': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727836715/bb10138f-70a3-4596-a70c-79a585e470d9.png', // URL de la imagen de la galería
              description: 'Vista hacia la estación',
            },
          ],
         
          // Puedes agregar más años con imágenes
        },
      },
    ],
  },
  {
    position: [820, 3570], // Coordenadas del marcador [latitud, longitud]
    iconUrl: '/marker.png', // URL del ícono del marcador
    popupContent: 'Peron y Mitre hacia Muñiz', // Texto que aparecerá en el popup
    popupImageUrl: 'images/peronymitre/marker.jpg', // URL de la imagen que aparecerá en el popup (opcional)
    galleryData: [
      {
        years: {
          '1960': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727216159/60_s_i495sa.jpg', // URL de la imagen de la galería
              description: 'Decada Aproximada',
            },
          ],
          '1970': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727216160/Peron_y_Mitre_mirando_hacia_Mu%C3%B1iz_jnybq7.jpg', // URL de la imagen de la galería
              description: 'Decada Aproximada',
            },
          ],
          '1981 (1)': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727216158/117869077_3487571337940226_5360636690946735441_n_bghduz.jpg', // URL de la imagen de la galería
              description: '',
            },
          ],
          '1981 (2)': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727841183/f3ce51f2-5b15-4a6a-9010-bb72574320f0.png', // URL de la imagen de la galería
              description: '',
            },
          ],
          '1981 (3)': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727216159/117959014_3487571301273563_856546298362731357_n_vmznbs.jpg', // URL de la imagen de la galería
              description: '',
            },
          ],
         
          // Puedes agregar más años con imágenes
        },
      },
    ],
  },
  {
    position: [790, 3830], // Coordenadas del marcador [latitud, longitud]
    iconUrl: '/marker.png', // URL del ícono del marcador
    popupContent: 'Belgrano y Peron', // Texto que aparecerá en el popup
    popupImageUrl: 'images/esquinaMusimundo/marker.jpg', // URL de la imagen que aparecerá en el popup (opcional)
    galleryData: [
      {
        years: {
          '1980': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727215695/398822874_6925058034249358_7866302881725151481_n_sdffqk.jpg', // URL de la imagen de la galería
              description: 'Decada Aproximada',
            },
          ],
          '1986': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727815482/01581624-2516-4281-9789-449f2d64b22a.png', // URL de la imagen de la galería
              description: '',
            },
          ],
          
         
          // Puedes agregar más años con imágenes
        },
      },
    ],
  },
  {
    position: [850, 3810], // Coordenadas del marcador [latitud, longitud]
    iconUrl: '/marker.png', // URL del ícono del marcador
    popupContent: 'Confiteria 25 de Mayo', // Texto que aparecerá en el popup
    popupImageUrl: 'images/confiteria/marker.jpg', // URL de la imagen que aparecerá en el popup (opcional)
    galleryData: [
      {
        years: {
          '1960': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727216147/1960_utnkgc.jpg', // URL de la imagen de la galería
              description: 'Decada Aproximada',
            },
          ],
          '1970': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727843589/46cb672d-d5af-4eb6-9de2-8ff88584b07d.png', // URL de la imagen de la galería
              description: 'Decada Aproximada',
            },
          ],
          '1970 (2)': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727842999/267f462b-9161-4b1a-ad29-93d5aa0765d5.png', // URL de la imagen de la galería
              description: 'Decada Aproximada. Vista hacia Muñiz',
            },
          ],
          '1938': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727843223/93a85380-4ffd-465b-ae62-6ac78240ea0e.png', // URL de la imagen de la galería
              description: `En la fotografía se ve la esquina de donde funcionaba el almacén del los hermanos País, puede verse el surtidor de nafta en la vereda. Un año mas tarde allí funcionaria la emblematica confiteria "25 de Mayo".
Se aprecia el comiezo del Boulevard de la Av Leon Gallardo y Belgrano. -Horacio Natale`,
            },
          ],
          
         
          // Puedes agregar más años con imágenes
        },
      },
    ],
  },
 
  {
    position: [800, 3530], // Coordenadas del marcador [latitud, longitud]
    iconUrl: '/marker.png', // URL del ícono del marcador
    popupContent: 'Perón y Mitre', // Texto que aparecerá en el popup
    popupImageUrl: 'images/yummy/marker.jpg', // URL de la imagen que aparecerá en el popup (opcional)
    galleryData: [
      {
        years: {
          '1950': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727216156/no_se_el_a%C3%B1oo_a0t3iw.jpg', // URL de la imagen de la galería
              description: 'Decada Aproximada',
            },
          ],
          '1970': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727216156/1957_rpas0u.jpg', // URL de la imagen de la galería
              description: 'Decada Aproximada',
            },
          ],
          '1970 (2)': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727216177/325226424_1586939571745156_3292542402627487491_n_tv7g9c.jpg', // URL de la imagen de la galería
              description: 'Decada Aproximada',
            },
          ],
          '1970(3)': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727216156/1970_hvboux.jpg', // URL de la imagen de la galería
              description: 'Decada Aproximada',
            },
          ],
          '1980': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727216157/451863351_1231946754832713_4790869759115279659_n_g74lz1.jpg', // URL de la imagen de la galería
              description: 'Decada Aproximada',
            },
          ],
          
          '1989': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727216157/1989_qqfpjt.jpg', // URL de la imagen de la galería
              description: '',
            },
          ],
          
         
          // Puedes agregar más años con imágenes
        },
      },
    ],
  },
  {
    position: [820, 3865], // Coordenadas del marcador [latitud, longitud]
    iconUrl: '/marker.png', // URL del ícono del marcador
    popupContent: 'Peron y Belgrano', // Texto que aparecerá en el popup
    popupImageUrl: 'images/belgranoyperon/marker.jpg', // URL de la imagen que aparecerá en el popup (opcional)
    galleryData: [
      {
        years: {
          '1935': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727216146/1935_zcfxyg.jpg', // URL de la imagen de la galería
              description: '',
            },
          ],
          '1939': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727216147/1939_qu4ar9.jpg', // URL de la imagen de la galería
              description: 'Esquina de Idolo',
            },
          ],
          '1930': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727216149/327267869_871807327368844_714387861248724390_n_wgs61q.jpg', // URL de la imagen de la galería
              description: 'Decada Aproximada',
            },
          ],
          '1930 (2)': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727216148/325399637_476612114668743_2689297567993224572_n_aet1h3.jpg', // URL de la imagen de la galería
              description: 'Decada aproximada',
            },
          ],
          
          '1960': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727216147/1960_noche_zcu94s.jpg', // URL de la imagen de la galería
              description: 'Vista hacia Muñiz',
            },
          ],
          
          '1960 (2)': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727216147/196000_waysxp.jpg', // URL de la imagen de la galería
              description: '',
            },
          ],
          '1964': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727216147/1964_cpwmnr.jpg', // URL de la imagen de la galería
              description: '',
            },
          ],
          '1997': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727216148/1997_f6t73t.jpg', // URL de la imagen de la galería
              description: '',
            },
          ],
          '1940': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727856348/83b7de2e-87ea-4a7c-ad4e-b8e2ccec8c25.png', // URL de la imagen de la galería
              description: 'Esquina de Idolo',
            },
          ],
          
         
          // Puedes agregar más años con imágenes
        },
      },
    ],
  },
  {
    position: [820, 4000], // Coordenadas del marcador [latitud, longitud]
    iconUrl: '/marker.png', // URL del ícono del marcador
    popupContent: 'Peron hacia Belgrano', // Texto que aparecerá en el popup
    popupImageUrl: 'images/peroncasibelgrano/marker.jpg', // URL de la imagen que aparecerá en el popup (opcional)
    galleryData: [
      {
        years: {
          '1937': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727216150/121102002_3454160298005833_5760204836110498151_n_fd2gzw.jpg', // URL de la imagen de la galería
              description: 'Se puede apreciar el edificio de la actual Via Trillini',
            },
          ],
          '1939': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727216151/1939_hc6qmr.jpg', // URL de la imagen de la galería
              description: '',
            },
          ],
          '1950': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727216151/271860717_457330112593913_9202108352919374605_n_ivh5fj.jpg', // URL de la imagen de la galería
              description: 'Decada Aproximada',
            },
          ],
          '1970': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727216152/70_s_nzwd7s.jpg', // URL de la imagen de la galería
              description: 'Decada aproximada',
            },
          ],
         
          
          '1970 (2)': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727216150/108164334_3394465563917471_5681573897797375239_n_x9ihgm.jpg', // URL de la imagen de la galería
              description: 'Decada Aproximada',
            },
          ],
       
          
         
          // Puedes agregar más años con imágenes
        },
      },
    ],
  },
  {
    position: [820, 4170], // Coordenadas del marcador [latitud, longitud]
    iconUrl: '/marker.png', // URL del ícono del marcador
    popupContent: 'Peron y Charlone', // Texto que aparecerá en el popup
    popupImageUrl: 'images/peronycharlone/marker.jpg', // URL de la imagen que aparecerá en el popup (opcional)
    galleryData: [
      {
        years: {
          '1939': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727216145/1939_y80fas.jpg', // URL de la imagen de la galería
              description: 'Vista hacia Muñiz',
            },
          ],
          '1930': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727854043/db727663-1092-40a0-871a-ee0391b1af5a.png', // URL de la imagen de la galería
              description: 'Decada aproximada. Vista hacia Muñiz',
            },
          ],
          '1939 (2)': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727849179/72f92861-e663-4190-8ecc-334b3c726988.png', // URL de la imagen de la galería
              description: `Conmemoración del cincuentenario de la creación del partido de General Sarmiento, Acto de descubrimiento de la placa que recuerda a los principales vecinos que dieron origen al partido.
                            San Miguel 22 de octubre de 1939
                            Esa placa estuvo por años en la esquina de Leon Gallardo y Charlone, luego fue trasladada a la Plaza San Miguel donde estuvo por años , hasta que desapareció misteriosamente`,
            },
          ],
         
          '1970': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727216145/finales_de_los_60_mirando_hacia_mu%C3%B1iz_h9ts3x.jpg', // URL de la imagen de la galería
              description: 'Decada aproximada. Vista hacia Muñiz',
            },
          ],
         
       
          
         
          // Puedes agregar más años con imágenes
        },
      },
    ],
  },
  {
    position: [820, 4300], // Coordenadas del marcador [latitud, longitud]
    iconUrl: '/marker.png', // URL del ícono del marcador
    popupContent: 'Coppel', // Texto que aparecerá en el popup
    popupImageUrl: 'images/coppel/marker.jpg', // URL de la imagen que aparecerá en el popup (opcional)
    galleryData: [
      {
        years: {
          '1980': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727216143/1980_oztybw.jpg', // URL de la imagen de la galería
              description: '',
            },
          ],
        
       
          
         
          // Puedes agregar más años con imágenes
        },
      },
    ],
  },
  {
    position: [820, 4350], // Coordenadas del marcador [latitud, longitud]
    iconUrl: '/marker.png', // URL del ícono del marcador
    popupContent: 'Simplicity', // Texto que aparecerá en el popup
    popupImageUrl: 'images/simplicity/marker.jpg', // URL de la imagen que aparecerá en el popup (opcional)
    galleryData: [
      {
        years: {
          '1939': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727997541/bc9b3f51-5e24-4439-9e4b-1f6b65668b34.png', // URL de la imagen de la galería
              description: '',
            },
          ],
          '2013': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727997618/ee1eb343-f366-4f5a-8bac-5df81c04183b.png', // URL de la imagen de la galería
              description: '',
            },
          ],
        
       
          
         
          // Puedes agregar más años con imágenes
        },
      },
    ],
  },
  
  {
    position: [550,4250], // Coordenadas del marcador [latitud, longitud]
    iconUrl: '/marker.png', // URL del ícono del marcador
    popupContent: 'Sarmiento y Charlone', // Texto que aparecerá en el popup
    popupImageUrl: 'images/sarmientoYcharlone/marker.jpg', // URL de la imagen que aparecerá en el popup (opcional)
    galleryData: [
      {
        years: {
          '1970': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727857752/34c4285f-af9b-47d6-8533-bec54d705555.png', // URL de la imagen de la galería
              description: 'Decada Aproximada',
            },
          ],
        
       
          
         
          // Puedes agregar más años con imágenes
        },
      },
    ],
  },
  {
    position: [520,4300], // Coordenadas del marcador [latitud, longitud]
    iconUrl: '/marker.png', // URL del ícono del marcador
    popupContent: 'Sarmiento', // Texto que aparecerá en el popup
    popupImageUrl: 'images/sarmiento1300/marker.jpg', // URL de la imagen que aparecerá en el popup (opcional)
    galleryData: [
      {
        years: {
          '2010': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727992155/4f5fbef3-3d07-45c7-a980-e5351278343d.png', // URL de la imagen de la galería
              description: 'Decada Aproximada',
            },
          ],
        
          '2010 (2)': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727216180/313439004_655671892759733_6153316342889460635_n_pcpp9l.jpg', // URL de la imagen de la galería
              description: 'Demolida en 2014',
            },
          ],
        
          '2010 (3)': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727992133/23ccaa0c-8cd0-4b98-82e0-14703686a695.png', // URL de la imagen de la galería
              description: '',
            },
          ],
          '2010 (4)': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727216180/314630472_655672046093051_7976312160969113537_n_xjuhxe.jpg', // URL de la imagen de la galería
              description: '',
            },
          ],
        
       
          
         
          // Puedes agregar más años con imágenes
        },
      },
    ],
  },
  {
    position: [680,3125], // Coordenadas del marcador [latitud, longitud]
    iconUrl: '/marker.png', // URL del ícono del marcador
    popupContent: 'Monseñor Terrero', // Texto que aparecerá en el popup
    popupImageUrl: 'images/monseñor/marker.jpg', // URL de la imagen que aparecerá en el popup (opcional)
    galleryData: [
      {
        years: {
          '1919': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727216186/1919_ttja7n.jpg', // URL de la imagen de la galería
              description: '',
            },
          ],
        
          '1919 (2)': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727216186/437055453_7538802216208267_1078746987214705237_n_fo3dgp.jpg', // URL de la imagen de la galería
              description: '',
            },
          ],
        
          '1940': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727993527/6c2e6002-f34d-4aa8-b8a1-e415bb7ad3f9.png', // URL de la imagen de la galería
              description: 'Decada Aproximada. Demolición de antiguo edificio',
            },
        ],
        
       
          
         
          // Puedes agregar más años con imágenes
        },
      },
    ],
  },
  {
    position: [370,3125], // Coordenadas del marcador [latitud, longitud]
    iconUrl: '/marker.png', // URL del ícono del marcador
    popupContent: 'Alem y Tribulato', // Texto que aparecerá en el popup
    popupImageUrl: 'images/alemytribulato/marker.jpg', // URL de la imagen que aparecerá en el popup (opcional)
    galleryData: [
      {
        years: {
          '1980': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727216188/279974454_746368456723881_3667461095565569343_n_x4qvle.jpg', // URL de la imagen de la galería
              description: 'Decada Aproximada',
            },
          ],      
       
          
         
          // Puedes agregar más años con imágenes
        },
      },
    ],
  },
  {
    position: [520,3000], // Coordenadas del marcador [latitud, longitud]
    iconUrl: '/marker.png', // URL del ícono del marcador
    popupContent: 'Sarmiento y Tribulato', // Texto que aparecerá en el popup
    popupImageUrl: 'images/antesterrero/marker.jpg', // URL de la imagen que aparecerá en el popup (opcional)
    galleryData: [
      {
        years: {
          '1972': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727216182/1970_cbkm3n.jpg', // URL de la imagen de la galería
              description: '',
            },
          ],      
       
          '1973': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727216182/1971_mkaobw.jpg', // URL de la imagen de la galería
              description: '',
            },
          ],      
       
          
         
          // Puedes agregar más años con imágenes
        },
      },
    ],
  },
  {
    position: [780,2810], // Coordenadas del marcador [latitud, longitud]
    iconUrl: '/marker.png', // URL del ícono del marcador
    popupContent: 'España y Peron', // Texto que aparecerá en el popup
    popupImageUrl: 'images/peronyespaña/marker.jpg', // URL de la imagen que aparecerá en el popup (opcional)
    galleryData: [
      {
        years: {
          '1958': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727216152/1958_qojuxt.jpg', // URL de la imagen de la galería
              description: '',
            },
          ],      
       
          '1960': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727216152/416029224_1119175389443184_2924995045655427618_n_zzksoi.jpg', // URL de la imagen de la galería
              description: '',
            },
          ],      
       
          
         
          // Puedes agregar más años con imágenes
        },
      },
    ],
  },
  {
    position: [780,2510], // Coordenadas del marcador [latitud, longitud]
    iconUrl: '/marker.png', // URL del ícono del marcador
    popupContent: 'Peron y Roca', // Texto que aparecerá en el popup
    popupImageUrl: 'images/peronyroca/marker.jpg', // URL de la imagen que aparecerá en el popup (opcional)
    galleryData: [
      {
        years: {
          '1969': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727216160/1969_sxp2qt.jpg', // URL de la imagen de la galería
              description: '',
            },
          ],      
       
          '1977': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727216161/1977_kbj21k.jpg', // URL de la imagen de la galería
              description: 'Vista hacia Roca',
            },
          ],      
       
          
         
          // Puedes agregar más años con imágenes
        },
      },
    ],
  },
  {
    position: [1050,3105], // Coordenadas del marcador [latitud, longitud]
    iconUrl: '/marker.png', // URL del ícono del marcador
    popupContent: 'Paunero y Tribulato', // Texto que aparecerá en el popup
    popupImageUrl: 'images/paunerocasitribulato/marker.jpg', // URL de la imagen que aparecerá en el popup (opcional)
    galleryData: [
      {
        years: {
          '1950': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727216143/antes_de_llegar_a_remiseria_a%C3%B1os_50_sgvhpi.jpg', // URL de la imagen de la galería
              description: 'Decada Aproximada',
            },
          ],
         
          // Puedes agregar más años con imágenes
        },
      },
    ],
  },
  {
    position: [1080,3205], // Coordenadas del marcador [latitud, longitud]
    iconUrl: '/marker.png', // URL del ícono del marcador
    popupContent: 'Remiseria', // Texto que aparecerá en el popup
    popupImageUrl: 'images/remiseria/marker.jpg', // URL de la imagen que aparecerá en el popup (opcional)
    galleryData: [
      {
        years: {
          '1950': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727216143/remiseria_lfgl0i.jpg', // URL de la imagen de la galería
              description: 'Decada Aproximada',
            },
          ],
         
          // Puedes agregar más años con imágenes
        },
      },
    ],
  },
  {
    position: [790, 4470], // Coordenadas del marcador [latitud, longitud]
    iconUrl: '/marker.png', // URL del ícono del marcador
    popupContent: 'Peron e Italia', // Texto que aparecerá en el popup
    popupImageUrl: 'images/peronitalia/marker.jpg', // URL de la imagen que aparecerá en el popup (opcional)
    galleryData: [
      {
        years: {
          '1980': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727216153/1980_rncvq2.jpg', // URL de la imagen de la galería
              description: '',
            },
          ],
         
          // Puedes agregar más años con imágenes
        },
      },
    ],
  },
  {
    position: [820, 4060], // Coordenadas del marcador [latitud, longitud]
    iconUrl: '/marker.png', // URL del ícono del marcador
    popupContent: 'Stock Center', // Texto que aparecerá en el popup
    popupImageUrl: 'images/stockcenter/marker.jpg', // URL de la imagen que aparecerá en el popup (opcional)
    galleryData: [
      {
        years: {
          '1930': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1728087038/8f0c0cfe-f8cf-41f8-97f6-bb94b48b4eb3.png', // URL de la imagen de la galería
              description: 'Decada Aproximada. En ese entonces la Galeria Del Sol y el Stock Center eran un terreno baldio',
            },
          ],
         
          '1946': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1728086857/1c849d2c-110b-4ee5-894f-4bbf604eecbf.png', // URL de la imagen de la galería
              description: 'Cine Mayo. Inaugurado en 1937',
            },
          ],
         
          // Puedes agregar más años con imágenes
        },
      },
    ],
  },
  {
    position: [850, 4120], // Coordenadas del marcador [latitud, longitud]
    iconUrl: '/marker.png', // URL del ícono del marcador
    popupContent: 'Banco Nacion', // Texto que aparecerá en el popup
    popupImageUrl: 'images/banconacion/marker.jpg', // URL de la imagen que aparecerá en el popup (opcional)
    galleryData: [
      {
        years: {
          '1960': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727848888/7b8460f9-e621-45d6-8092-fe2094010f0a.png', // URL de la imagen de la galería
              description: 'Decada Aproximada',
            },
          ],
          '1960 (2)': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727216145/1944_kwycop.jpg', // URL de la imagen de la galería
              description: 'Decada aproximada',
            },
          ],
          '1960 (3)': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727216146/Mirando_hacia_la_plaza_gtlyid.jpg', // URL de la imagen de la galería
              description: 'Peron y Charlone.Vista hacia Belgrano',
            },
          ],
          
          // Puedes agregar más años con imágenes
        },
      },
    ],
  },
  {
    position: [850, 4430], // Coordenadas del marcador [latitud, longitud]
    iconUrl: '/marker.png', // URL del ícono del marcador
    popupContent: 'Peron e Italia', // Texto que aparecerá en el popup
    popupImageUrl: 'images/tecnocompro/marker.jpg', // URL de la imagen que aparecerá en el popup (opcional)
    galleryData: [
      {
        years: {
          '1970': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727216154/458471503_2735196943329162_1760530479897041787_n_fosoag.jpg', // URL de la imagen de la galería
              description: 'Decada Aproximada',
            },
          ],
          
          // Puedes agregar más años con imágenes
        },
      },
    ],
  },
  {
    position: [760, 4460], // Coordenadas del marcador [latitud, longitud]
    iconUrl: '/marker.png', // URL del ícono del marcador
    popupContent: 'Edificio Italcom', // Texto que aparecerá en el popup
    popupImageUrl: 'images/italcon/marker.jpg', // URL de la imagen que aparecerá en el popup (opcional)
    galleryData: [
      {
        years: {
          '1960': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727216153/303349218_5560761160679059_8785836326323720184_n_b5mgmu.jpg', // URL de la imagen de la galería
              description: 'Decada Aproximada',
            },
          ],
          '1960 (2)': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1728002022/c576acaf-04d9-4292-9256-8b0cc1e943f3.png', // URL de la imagen de la galería
              description: 'Decada Aproximada',
            },
          ],
          '1980': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727216154/mirando_hacia_iglesia_tda82d.jpg', // URL de la imagen de la galería
              description: 'Vista desde edificio',
            },
          ],
          '1970': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727216191/Fotografia_tomada_desde_edificio_de_Italia_1213_colorizada_p8uhud.jpg', // URL de la imagen de la galería
              description: 'Vista desde edificio. Decada aproximada',
            },
          ],
          
          // Puedes agregar más años con imágenes
        },
      },
    ],
  },
  {
    position: [800, 1220], // Coordenadas del marcador [latitud, longitud]
    iconUrl: '/marker.png', // URL del ícono del marcador
    popupContent: 'Hospital Larcade', // Texto que aparecerá en el popup
    popupImageUrl: 'images/larcade/marker.jpg', // URL de la imagen que aparecerá en el popup (opcional)
    galleryData: [
      {
        years: {
          '1900': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1728091317/7eaf04e8-6e3e-4b26-90fd-1fecd6ac6340.png', // URL de la imagen de la galería
              description: 'Decada Aproximada',
            },
          ],
          '1961': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1728107704/eda24150-b127-4c9c-bfa1-afbb61655a59.png', // URL de la imagen de la galería
              description: 'Reforma',
            },
          ],
          '1960': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1728107538/3c9b7211-40ce-46d8-9535-e9d156057af9.png', // URL de la imagen de la galería
              description: '',
            },
          ],
          '1964': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727216135/1964_wylmqg.jpg', // URL de la imagen de la galería
              description: '',
            },
          ],
          '1980': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727216135/a%C3%B1o_desconocido_w42zly.jpg', // URL de la imagen de la galería
              description: '',
            },
          ],
          '1990': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727216134/51919732_2139081679513708_6479762677815050240_n_iqpoof.jpg', // URL de la imagen de la galería
              description: 'Decada aproximada',
            },
          ],
          
          // Puedes agregar más años con imágenes
        },
      },
    ],
  },
  {
    position: [760, 4740], // Coordenadas del marcador [latitud, longitud]
    iconUrl: '/marker.png', // URL del ícono del marcador
    popupContent: 'Mostaza', // Texto que aparecerá en el popup
    popupImageUrl: 'images/mostaza/marker.jpg', // URL de la imagen que aparecerá en el popup (opcional)
    galleryData: [
      {
        years: {
          '1980': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727216139/336855382_921464065642046_6359015330300180401_n_or91v0.jpg', // URL de la imagen de la galería
              description: 'Decada Aproximada',
            },
          ],
         
          
          // Puedes agregar más años con imágenes
        },
      },
    ],
  },

  {
    position: [840, 4500], // Coordenadas del marcador [latitud, longitud]
    iconUrl: '/marker.png', // URL del ícono del marcador
    popupContent: 'Peperino', // Texto que aparecerá en el popup
    popupImageUrl: 'images/peperino/marker.jpg', // URL de la imagen que aparecerá en el popup (opcional)
    galleryData: [
      {
        years: {
          '1950': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1728002224/f0bfd754-00c5-4ba3-9a42-0aeaff039da3.png', // URL de la imagen de la galería
              description: 'Decada Aproximada',
            },
          ],
          '1980': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727216154/415286841_1114001629960560_8439680327215863317_n_spescg.jpg', // URL de la imagen de la galería
              description: 'Decada Aproximada',
            },
          ],
          '2013': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1728424639/2e82312e-7515-4409-8136-fc24e6628c4e.png', // URL de la imagen de la galería
              description: '',
            },
          ],
         
          
          // Puedes agregar más años con imágenes
        },
      },
    ],
  },
  {
    position: [800, 5090], // Coordenadas del marcador [latitud, longitud]
    iconUrl: '/marker.png', // URL del ícono del marcador
    popupContent: 'Peron y Sargento Cabral', // Texto que aparecerá en el popup
    popupImageUrl: 'images/peroncabral/marker.jpg', // URL de la imagen que aparecerá en el popup (opcional)
    galleryData: [
      {
        years: {
          '1968': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1728426369/53554b90-00a8-434d-94cb-19c92165da48.png', // URL de la imagen de la galería
              description: '',
            },
          ],
          '1972': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1728427333/c12302f4-65bb-43a1-a823-c9eeeb6a38b4.png', // URL de la imagen de la galería
              description: '',
            },
          ],
          '1972 (2)': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727216164/1972_mirando_hacia_la_plaza_sm_tftg4j.jpg', // URL de la imagen de la galería
              description: '',
            },
          ],
          '1970': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727216164/459559756_10234148922972934_1229201311682849897_n_zhv7m1.jpg', // URL de la imagen de la galería
              description: 'Decada Aproximada',
            },
          ],
          '1980': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727216164/mirando_hacia_rodriguez_pe%C3%B1a_pphk8t.jpg', // URL de la imagen de la galería
              description: '',
            },
          ],
         
         
          
          // Puedes agregar más años con imágenes
        },
      },
    ],
  },
  {
    position: [770, 5110], // Coordenadas del marcador [latitud, longitud]
    iconUrl: '/marker.png', // URL del ícono del marcador
    popupContent: 'Estancia', // Texto que aparecerá en el popup
    popupImageUrl: 'images/estancia/marker.jpg', // URL de la imagen que aparecerá en el popup (opcional)
    galleryData: [
      {
        years: {
          '1968': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1728427289/80de7881-f86d-46f5-8595-f8ef5d71d4b1.png', // URL de la imagen de la galería
              description: 'Decada Aproximada',
            },
          ],
         
         
          
          // Puedes agregar más años con imágenes
        },
      },
    ],
  },
  {
    position: [830, 5110], // Coordenadas del marcador [latitud, longitud]
    iconUrl: '/marker.png', // URL del ícono del marcador
    popupContent: 'Banco', // Texto que aparecerá en el popup
    popupImageUrl: 'images/macro/marker.jpg', // URL de la imagen que aparecerá en el popup (opcional)
    galleryData: [
      {
        years: {
          '1968': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1728428121/a4bfe42e-7bff-4ce8-8d07-5a752ca6c927.png', // URL de la imagen de la galería
              description: 'Decada Aproximada',
            },
          ],
         
         
          
          // Puedes agregar más años con imágenes
        },
      },
    ],
  },
  {
    position: [830, 5410], // Coordenadas del marcador [latitud, longitud]
    iconUrl: '/marker.png', // URL del ícono del marcador
    popupContent: 'La Farola', // Texto que aparecerá en el popup
    popupImageUrl: 'images/tillous/marker.jpg', // URL de la imagen que aparecerá en el popup (opcional)
    galleryData: [
      {
        years: {
          '1962': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727216155/banco_galicia_de_mu%C3%B1iz_cvkxwk.jpg', // URL de la imagen de la galería
              description: '',
            },
          ],
          '1972': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727215683/1975_nwzram.jpg', // URL de la imagen de la galería
              description: `LA “CASA ROSADA” DE LOS TILLOUS EN MUÑIZ
En 1998 la esquina de la avenida Pte. Perón y Las Heras dejó de ser la misma. Más de 100 años de historia cayeron bajo la piqueta del llamado “progreso” para transformarse en una casa de comidas rápidas, franquicia de una multinacional denominada “Wendy’s”. Luego se instaló el restaurant “La Quintana” y actualmente “La Farola” y la perfumería “Simplicity”.
La casa de los Tillous o “Casa Rosada” (obviamente porque estaba pintada de color rosa como la Casa de Gobierno o el Palacio San José) era un emblema de San Miguel, y estaba  ligada estrechamente a la historia de nuestro partido. Fue la primera casona importante del barrio de Muñiz.
A partir de 1998, la “Casa Rosada” solo es un recuerdo de épocas pasadas.`,
            },
          ],
          '1982': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727215683/1982_exghd7.jpg', // URL de la imagen de la galería
              description: '',
            },
          ],
          '1982 (2)': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727215683/1982_x2_pnecpo.jpg', // URL de la imagen de la galería
              description: '',
            },
          ],
         
         
          
          // Puedes agregar más años con imágenes
        },
      },
    ],
  },
  {
    position: [830, 5570], // Coordenadas del marcador [latitud, longitud]
    iconUrl: '/marker.png', // URL del ícono del marcador
    popupContent: 'Peron y Conesa', // Texto que aparecerá en el popup
    popupImageUrl: 'images/peronyconesa/marker.jpg', // URL de la imagen que aparecerá en el popup (opcional)
    galleryData: [
      {
        years: {
          '2021': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727216163/20211_peron_946_fiey9b.png', // URL de la imagen de la galería
              description: '',
            },
          ],
          '2021 (2)': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727216152/2021_Peron_986_q8tdad.jpg', // URL de la imagen de la galería
              description: ``,
            },
          ],
          '2000': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1728672590/197b58bb-577f-4ae4-9039-84b935b4d08f.png', // URL de la imagen de la galería
              description: `Decada Aproximada`,
            },
          ],
         
      
         
         
          
          // Puedes agregar más años con imágenes
        },
      },
    ],
  },
  {
    position: [890, 5450], // Coordenadas del marcador [latitud, longitud]
    iconUrl: '/marker.png', // URL del ícono del marcador
    popupContent: 'Las Heras y Peron', // Texto que aparecerá en el popup
    popupImageUrl: 'images/mc/marker.jpg', // URL de la imagen que aparecerá en el popup (opcional)
    galleryData: [
      {
        years: {
          '1996': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1728594885/8970a50e-39f3-46b8-8f94-5cac2f2219ae.png', // URL de la imagen de la galería
              description: '',
            },
          ],
          '2005': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1728594901/4c727458-9d1e-41d7-be54-29ed2f7d5038.png', // URL de la imagen de la galería
              description: ``,
            },
          ],
         
      
         
         
          
          // Puedes agregar más años con imágenes
        },
      },
    ],
  },
  {
    position: [610, 5650], // Coordenadas del marcador [latitud, longitud]
    iconUrl: '/marker.png', // URL del ícono del marcador
    popupContent: 'Gimnasio', // Texto que aparecerá en el popup
    popupImageUrl: 'images/pow/marker.jpg', // URL de la imagen que aparecerá en el popup (opcional)
    galleryData: [
      {
        years: {
          '2000': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727215694/Conesa_1288_demolido_en_2015_ion9j3.png', // URL de la imagen de la galería
              description: 'Decada Aproximada. Demolida en 2013',
            },
          ],
         
          
          // Puedes agregar más años con imágenes
        },
      },
    ],
  },
  {
    position: [610, 5770], // Coordenadas del marcador [latitud, longitud]
    iconUrl: '/marker.png', // URL del ícono del marcador
    popupContent: 'Plaza de las Carretas', // Texto que aparecerá en el popup
    popupImageUrl: 'images/plazamuniz/marker.jpg', // URL de la imagen que aparecerá en el popup (opcional)
    galleryData: [
      {
        years: {
          '1934': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1728672313/e823124d-d919-4021-a9c2-49efec117bb7.png', // URL de la imagen de la galería
              description: '',
            },
          ],
         
          '1954': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727216173/1954_jbedew.jpg', // URL de la imagen de la galería
              description: 'Vista hacia Av.Peron',
            },
          ],
         
          '2000': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727216174/319320839_572202244913729_2000854808265298064_n_kpztqx.jpg', // URL de la imagen de la galería
              description: 'Decada Aproximada',
            },
          ],
         
          
          // Puedes agregar más años con imágenes
        },
      },
    ],
  },
  {
    position: [770, 5850], // Coordenadas del marcador [latitud, longitud]
    iconUrl: '/marker.png', // URL del ícono del marcador
    popupContent: 'San Jose y Peron', // Texto que aparecerá en el popup
    popupImageUrl: 'images/sanjose/marker.jpg', // URL de la imagen que aparecerá en el popup (opcional)
    galleryData: [
      {
        years: {
          '2000': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727216179/319431991_533234885348853_943866049057398143_n_jsvznx.jpg', // URL de la imagen de la galería
              description: 'Decada Aproximada',
            },
          ],
         
          
          // Puedes agregar más años con imágenes
        },
      },
    ],
  },
  {
    position: [870, 6020], // Coordenadas del marcador [latitud, longitud]
    iconUrl: '/marker.png', // URL del ícono del marcador
    popupContent: 'San Jose', // Texto que aparecerá en el popup
    popupImageUrl: 'images/colegiosanjose/marker.jpg', // URL de la imagen que aparecerá en el popup (opcional)
    galleryData: [
      {
        years: {
          '1919': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727216179/1919_v9exaw.jpg', // URL de la imagen de la galería
              description: `La principal de las obras realizadas por don León Gallardo , fue el Asilo San José, que acogió a niños desamparados y cuyo funcionamiento se encuentra a cargo de las Hermanas Pobres Bonaerenses, fundada por la Madre Camila Rolon
Se inauguró el 17 de marzo de 1889`,
            },
          ],
          '1889': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1728685996/6594b5da-db05-4185-8f24-03bac4bf103f.png', // URL de la imagen de la galería
              description: `La principal de las obras realizadas por don León Gallardo , fue el Asilo San José, que acogió a niños desamparados y cuyo funcionamiento se encuentra a cargo de las Hermanas Pobres Bonaerenses, fundada por la Madre Camila Rolon
Se inauguró el 17 de marzo de 1889`,
            },
          ],
          'Año desconocido': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727216179/419731524_10228229776522616_2625359639575711763_n_zxv3ep.jpg', // URL de la imagen de la galería
              description: '',
            },
          ],
         
          
          // Puedes agregar más años con imágenes
        },
      },
    ],
  },
  {
    position: [750, 7220], // Coordenadas del marcador [latitud, longitud]
    iconUrl: '/marker.png', // URL del ícono del marcador
    popupContent: 'Peron y Haedo', // Texto que aparecerá en el popup
    popupImageUrl: 'images/peronyhaedo/marker.jpg', // URL de la imagen que aparecerá en el popup (opcional)
    galleryData: [
      {
        years: {
          '2013': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1728676048/8692e3ae-ef53-40c5-9cf5-8b3f0892fa83.png', // URL de la imagen de la galería
              description: '',
            },
          ],
        
         
          
          // Puedes agregar más años con imágenes
        },
      },
    ],
  },
  {

      //[630, 7720]

    position: [630, 7620], // Coordenadas del marcador [latitud, longitud]
    iconUrl: '/marker.png', // URL del ícono del marcador
    popupContent: 'Carrefour Muñiz', // Texto que aparecerá en el popup
    popupImageUrl: 'images/vazquez/marker.jpg', // URL de la imagen que aparecerá en el popup (opcional)
    galleryData: [
      {
        years: {
          '1933': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1728677783/6689b927-dacb-4269-90bb-8fd63e1ed202.png', // URL de la imagen de la galería
              description: '',
            },
          ],
          'Año desconocido': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727215690/450339913_1224970862196969_683635746110830884_n_aoi3kz.jpg', // URL de la imagen de la galería
              description: '',
            },
          ],
          'Año desconocido (2)': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727215690/450346655_1224970998863622_4423694008286328072_n_vq8x1a.jpg', // URL de la imagen de la galería
              description: '',
            },
          ],
          '1980': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1728681818/33c4287f-80ed-4d97-bf33-44ef98a2754c.png', // URL de la imagen de la galería
              description: 'Decada aproximada',
            },
          ],
          'Año desconocido (3)': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727215690/450346655_1224970998863622_4423694008286328072_n_vq8x1a.jpg', // URL de la imagen de la galería
              description: '',
            },
          ],
        
          '2007': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1728681801/d023bf4b-1baf-441d-bea7-63e0c4696eab.png', // URL de la imagen de la galería
              description: '',
            },
          ],
          '2007 (2)': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1728681904/fd02aec7-de9b-4a42-8cf8-bf31fc3082f7.png', // URL de la imagen de la galería
              description: '',
            },
          ],
        
         
          
          // Puedes agregar más años con imágenes
        },
      },
    ],
  },
  {

      //[630, 7720]

    position: [500, 7800], // Coordenadas del marcador [latitud, longitud]
    iconUrl: '/marker.png', // URL del ícono del marcador
    popupContent: 'Pardo y Richieri', // Texto que aparecerá en el popup
    popupImageUrl: 'images/paseonorte/marker.jpg', // URL de la imagen que aparecerá en el popup (opcional)
    galleryData: [
      {
        years: {
          '1972': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727216140/1970_g96jtn.jpg', // URL de la imagen de la galería
              description: '',
            },
          ],
          '1972(2)': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727216141/457289541_1035427721450813_2076935893314303749_n_je3wlq.jpg', // URL de la imagen de la galería
              description: '',
            },
          ],
          '1916': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1728682399/e18b1b4e-11a5-4c77-a374-ac72fd040005.png', // URL de la imagen de la galería
              description: '',
            },
          ],
         

         
          
          // Puedes agregar más años con imágenes
        },
      },
    ],
  },
  {

      //[630, 7720]

    position: [810, 7750], // Coordenadas del marcador [latitud, longitud]
    iconUrl: '/marker.png', // URL del ícono del marcador
    popupContent: 'Peron y Pardo', // Texto que aparecerá en el popup
    popupImageUrl: 'images/trevipardo/marker.jpg', // URL de la imagen que aparecerá en el popup (opcional)
    galleryData: [
      {
        years: {
          '1962': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727216186/1962_ma5lqn.jpg', // URL de la imagen de la galería
              description: '',
            },
          ],
          '2013': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1728683658/18120240-e99e-461f-887e-8bf55a889b00.png', // URL de la imagen de la galería
              description: '',
            },
          ],
         
          // Puedes agregar más años con imágenes
        },
      },
    ],
  },
  {
    position: [820, 6400], // Coordenadas del marcador [latitud, longitud]
    iconUrl: '/marker.png', // URL del ícono del marcador
    popupContent: 'Peron y Saavedra', // Texto que aparecerá en el popup
    popupImageUrl: 'images/torreon/marker.jpg', // URL de la imagen que aparecerá en el popup (opcional)
    galleryData: [
      {
        years: {
          '1933': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1728684975/397e2112-d66f-40d8-b17b-f18d4103949b.png', // URL de la imagen de la galería
              description: '',
            },
          ],
          '1933 (2)': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1728684949/1b4d8dc6-2285-4bdf-9411-1097838296e2.png', // URL de la imagen de la galería
              description: '',
            },
          ],
         
          '1980': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727216162/437728019_1174885963872126_7272819434351367091_n_ztefe2.jpg', // URL de la imagen de la galería
              description: '',
            },
          ],
         
          '1980 (2)': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727216161/437386581_1174885970538792_7314388519289259936_n_yduxds.jpg', // URL de la imagen de la galería
              description: '',
            },
          ],
         
          '1980 (3)': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727216161/437387371_1174886117205444_3023764062576678963_n_z464ir.jpg', // URL de la imagen de la galería
              description: '',
            },
          ],
         
          // Puedes agregar más años con imágenes
        },
      },
    ],
  },
  {
    position: [750, 6350], // Coordenadas del marcador [latitud, longitud]
    iconUrl: '/marker.png', // URL del ícono del marcador
    popupContent: 'Peron y Saavedra', // Texto que aparecerá en el popup
    popupImageUrl: 'images/pizzalibre/marker.jpg', // URL de la imagen que aparecerá en el popup (opcional)
    galleryData: [
      {
        years: {
          '1960': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727216161/383337922_845557347104519_1550706420223968267_n_tqhpxm.jpg', // URL de la imagen de la galería
              description: 'Decada Aproximada',
            },
          ],
      
         
          // Puedes agregar más años con imágenes
        },
      },
    ],
  },
  {
    position: [750, 6390], // Coordenadas del marcador [latitud, longitud]
    iconUrl: '/marker.png', // URL del ícono del marcador
    popupContent: 'Peron y Saavedra', // Texto que aparecerá en el popup
    popupImageUrl: 'images/brot/marker.jpg', // URL de la imagen que aparecerá en el popup (opcional)
    galleryData: [
      {
        years: {
          '1980': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727216161/383337922_845557347104519_1550706420223968267_n_tqhpxm.jpg', // URL de la imagen de la galería
              description: 'Decada Aproximada',
            },
          ],
      
         
          // Puedes agregar más años con imágenes
        },
      },
    ],
  },
  {
    position: [820, 6810], // Coordenadas del marcador [latitud, longitud]
    iconUrl: '/marker.png', // URL del ícono del marcador
    popupContent: 'Lo de Charly', // Texto que aparecerá en el popup
    popupImageUrl: 'images/charly/marker.jpg', // URL de la imagen que aparecerá en el popup (opcional)
    galleryData: [
      {
        years: {
          'Año desconocido': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1728678972/dd6eba8b-3324-4c87-b3cc-cbc0f482460e.png', // URL de la imagen de la galería
              description: '',
            },
          ],
      
         
          // Puedes agregar más años con imágenes
        },
      },
    ],
  },
  {
    position: [1070, 3885], // Coordenadas del marcador [latitud, longitud]
    iconUrl: '/marker.png', // URL del ícono del marcador
    popupContent: 'Bingo', // Texto que aparecerá en el popup
    popupImageUrl: 'images/bingo/marker.jpg', // URL de la imagen que aparecerá en el popup (opcional)
    galleryData: [
      {
        years: {
          'Año desconocido': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727215685/447706547_7789035831184903_2084047295973514450_n_rvxfuv.jpg', // URL de la imagen de la galería
              description: `La iglesia luterana estuvo desde el año 1925 hasta 1990... Luego de su demolición, se construyó un Shopping y años después el actual Bingo`
            },
          ],
          'Año desconocido (2)': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727215686/447870829_7789036084518211_3817369695329715364_n_cjh1ws.jpg', // URL de la imagen de la galería
              description: `La iglesia luterana estuvo desde el año 1925 hasta 1990... Luego de su demolición, se construyó un Shopping y años después el actual Bingo`
            },
          ],
          'Año desconocido (3)': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727215685/242532207_383499003310358_2990057469740973381_n_pn1fcf.jpg', // URL de la imagen de la galería
              description: `La iglesia luterana estuvo desde el año 1925 hasta 1990... Luego de su demolición, se construyó un Shopping y años después el actual Bingo`
            },
          ],
          'Año desconocido (4)': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727215686/447709869_7789035507851602_7241466093749171274_n_awziyd.jpg', // URL de la imagen de la galería
              description: `La iglesia luterana estuvo desde el año 1925 hasta 1990... Luego de su demolición, se construyó un Shopping y años después el actual Bingo`
            },
          ],
      
         
          // Puedes agregar más años con imágenes
        },
      },
    ],
  },
  
  {
    position: [500,4000], // Coordenadas del marcador [latitud, longitud]
    iconUrl: '/marker.png', // URL del ícono del marcador
    popupContent: 'Edificio Esmeralda', // Texto que aparecerá en el popup
    popupImageUrl: 'images/esmeralda/marker.jpg', // URL de la imagen que aparecerá en el popup (opcional)
    galleryData: [
      {
        years: {
          '1980': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1728931531/178684f6-5295-48db-9457-a5459983a26b.png', // URL de la imagen de la galería
              description: `Vista panoramica desde el edificio `
            },
          ],
         
        
         
          // Puedes agregar más años con imágenes
        },
      },
    ],
  },
  {
    position: [1310, 3820], // Coordenadas del marcador [latitud, longitud]
    iconUrl: '/marker.png', // URL del ícono del marcador
    popupContent: 'Delia y Belgrano', // Texto que aparecerá en el popup
    popupImageUrl: 'images/deliabelgrano/marker.jpg', // URL de la imagen que aparecerá en el popup (opcional)
    galleryData: [
      {
        years: {
          '1960': [
            {
              src: 'https://res.cloudinary.com/dhc0kdmfp/image/upload/v1727216191/Belgrano_y_Delia_aprox_jvijjw.jpg', // URL de la imagen de la galería
              description: `Decada aproximada`
            },
          ],
         
        
         
          // Puedes agregar más años con imágenes
        },
      },
    ],
  },
];







function ApplyBounds() {
  const map = useMap();
  map.setMaxBounds(bounds); // Aplicar los límites al cargar el mapa
  map.fitBounds(bounds); // Ajusta el mapa para que encaje dentro de los límites al cargar
  return null;
}


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
        center={[1733, 4096]}
        zoom={-2}
        minZoom={-1}
        maxZoom={1}
        scrollWheelZoom={true}
        dragging={true}
        style={{ height: '100%', width: '100%' }}
        maxBounds={bounds}
        maxBoundsViscosity={1.0}
        crs={L.CRS.Simple}
        zoomControl={false}
      >
        <SetInitialView center={initialPosition} />

        <ApplyBounds />

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
            popupDirection={marker.popupDirection} 
          />
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
