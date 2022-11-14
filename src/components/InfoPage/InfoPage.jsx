import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {

  
  return (
     <div id="map">
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
      </div>
  );
}


export default InfoPage;
