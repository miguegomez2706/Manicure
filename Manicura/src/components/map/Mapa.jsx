import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Importar la imagen del marcador rojo
import redMarkerIcon from "../../assets/image/comunes/red-marker-icon.png"; // Asegúrate de ajustar la ruta

// Configurar el icono personalizado
const redIcon = L.icon({
  iconUrl: redMarkerIcon,
  iconSize: [30, 30], // Ajusta el tamaño del ícono (ancho, alto)
  iconAnchor: [20, 12], // Ajusta el punto de anclaje del ícono
  popupAnchor: [-3, -10], // Ajusta la posición del popup
});

const Mapa = () => {
  const posicion = [-27.45129898657986, -58.99163777380161]; // Local de Romi

  return (
    <div className="h-[500px] w-full">
      <MapContainer
        center={posicion}
        zoom={30}
        className="h-full w-full rounded-lg"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={posicion} icon={redIcon}>
          <Popup>¡Aquí está el local! 📍</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Mapa;
