import React from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import locationIconDark from "../../assets/img/icons-new-design/location.svg";

// Create the map icon outside the component
const mapIcon = L.icon({
  iconUrl: locationIconDark,
  iconSize: [21, 28],      // size of the icon
  shadowSize: [50, 64],    // size of the shadow
  iconAnchor: [10, 18],    // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62],   // the same for the shadow
  popupAnchor: [0, -18]
});

const Map = ({ position, zoom, popup }) => {
  return (
    <MapContainer
      center={position}
      zoom={zoom}
      scrollWheelZoom={false}
      style={{ height: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={mapIcon}>
        {popup && <Popup>{popup}</Popup>}
      </Marker>
    </MapContainer>
  );
}

export default Map;
