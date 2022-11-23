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
          center={[44.9773, -93.2655]} 
          zoom={5} 
          zoomControl={false} 
          style={{ height: '100vh', width: '100%' }}
        >
           <LayersControl position="topright">
          {/* 
            Give the layer a name that will be displayed inside of the layers control.
            We also want to pass the checked prop to whichever map tile we want
            displayed as the default:
          */}

          <LayersControl.BaseLayer checked name="Topo Map 1">
            <TileLayer
              attribution='Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
              url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
            />
          </LayersControl.BaseLayer>

          <LayersControl.BaseLayer name="Topo Map 2">
            {/* <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            /> */}

            <VectorTileLayer
                  styleUrl="mapbox://styles/tt17/classs3qb000515puopf36dp7"
                  accessToken="pk.eyJ1IjoidHQxNyIsImEiOiJjbGFma2ZseWMwY25jM3BvN2pwN3hhNHZ0In0.gzQmSpyAwkDAOw_uTit6kw"
                />
          </LayersControl.BaseLayer>


          <LayersControl.BaseLayer name="Base Map">
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </LayersControl.BaseLayer>
          
      
        </LayersControl>
         
        </MapContainer>
      
        </>
        
    );

  }

      
export default Location;
