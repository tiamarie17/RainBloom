import React, {useState, useEffect} from 'react';
import { MapContainer, TileLayer, useMap, useMapEvents, Marker, Popup, LayersControl} from 'react-leaflet';
import { Icon } from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import {useHistory} from 'react-router-dom';
import VectorTileLayer from 'react-leaflet-vector-tile-layer';

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
           <LayersControl position="topright">
          {/* 
            Give the layer a name that will be displayed inside of the layers control.
            We also want to pass the checked prop to whichever map tile we want
            displayed as the default:
          */}
          <LayersControl.BaseLayer checked name="Basic Map">
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </LayersControl.BaseLayer>
          {/* 
            Add the second maptile:
          */}
          <LayersControl.BaseLayer name="Topo Map">
            <TileLayer
              attribution='Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
              url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
            />
          </LayersControl.BaseLayer>
        </LayersControl>
           <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
         
        </MapContainer>
      
        </>
        
    );

  }

      
export default Location;
