

import React, {useEffect} from 'react';
import { MapContainer, TileLayer, useMap, LayersControl} from 'react-leaflet';
import {useHistory} from 'react-router-dom';
import VectorTileLayer from 'react-leaflet-vector-tile-layer';
import { OpenStreetMapProvider, GeoSearchControl } from 'leaflet-geosearch';
import "leaflet/dist/leaflet.css";
import "leaflet-geosearch/dist/geosearch.css";
import L from 'leaflet';
import { Input } from '@mui/material';




function Location(){

    const history = useHistory();

    const size = () =>{
      console.log('in size function');
      history.push('/size');
    }

      // Map search box
      function LeafletGeoSearch() {
      
        const map = useMap(); //here use useMap hook

        let icon = L.icon({
          iconSize: [25, 41],
          iconAnchor: [10, 41],
          popupAnchor: [2, -40],
          iconUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
          shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png"
        });

        useEffect(() => {
          const provider = new OpenStreetMapProvider();

          const searchControl = new GeoSearchControl({
            provider,
            marker: {
              icon
            },
            autocomplete: true,
          });
      
          map.addControl(searchControl);
      
          return () => map.removeControl(searchControl)
        }, []);
      
        return null;
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
          {/* Import custom MapBox style in a vector tyle from MapBox */}
            <VectorTileLayer
                  styleUrl="mapbox://styles/tt17/classs3qb000515puopf36dp7"
                  accessToken={process.env.REACT_APP_MAPBOX_KEY}
                />
          </LayersControl.BaseLayer>


          <LayersControl.BaseLayer name="Base Map">
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </LayersControl.BaseLayer>
          
      
        </LayersControl>

        <LeafletGeoSearch/>
         
        </MapContainer>
      
        </>
        
    );
    }
      
export default Location;
