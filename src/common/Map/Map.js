import React from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import locationIconDark from "../../assets/img/icons-new-design/location.svg";

const Map = (props) => {
    const mapIcon = L.icon({
        iconUrl: locationIconDark,
        iconSize:     [21, 28], // size of the icon
        shadowSize:   [50, 64], // size of the shadow
        iconAnchor:   [10, 18], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor:  [0, -18]
    });
    return(
        <MapContainer
            center={props.position}
            zoom={props.zoom}
            scrollWheelZoom={false}
            style={{height: '100%'}}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker
                position={props.position}
                icon={mapIcon}
            >
                {props.popup &&
                    <Popup>
                        {props.popup}
                    </Popup>
                }
            </Marker>
        </MapContainer>
    );
}

export default Map;