import React, {useState, useEffect} from 'react';
import { MapContainer, TileLayer, useMap, Marker, Popup} from 'react-leaflet';
import { Icon } from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function Map(){

    function LocationMarker() {

        const [position, setPosition] = useState(null);
    
        const map = useMap();
    
        useEffect(() => {
          map.locate().on("locationfound", function (e) {
            setPosition(e.latlng);
            map.flyTo(e.latlng, map.getZoom());
          });
        }, []);
    
        return position === null ? null : (
          <Marker position={position} icon={visitorIcon}>
            <Popup>You are here</Popup>
          </Marker>
        );
      }

  return (
      <>
      <MapContainer 
        center={[37.0902, -95.7129]} 
        zoom={3} 
        zoomControl={false} 
        style={{ height: '100vh', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
      </>
      
  );
}
export default Map;
