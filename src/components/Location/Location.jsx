import React, {useState, useEffect} from 'react';
import { MapContainer, TileLayer, useMap, useMapEvents, Marker, Popup} from 'react-leaflet';
import { Icon } from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import {useHistory} from 'react-router-dom';

function Location(){

    const history = useHistory();

    const size = () =>{
      console.log('in size function');
      history.push('/size');
    }
      return (
        <>
        <button onClick={size}>Go to Rain Garden Size</button>
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
      
export default Location;
