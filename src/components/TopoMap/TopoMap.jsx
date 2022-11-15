import React, {useState, useEffect} from 'react';
import { MapContainer, TileLayer, useMap, useMapEvents, Marker, Popup} from 'react-leaflet';
import { Icon } from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';

function TopoMap(){
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
      
export default TopoMap;
