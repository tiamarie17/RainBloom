import React, {useEffect} from 'react';
import { MapContainer, useMap} from 'react-leaflet';
import {useHistory} from 'react-router-dom';
import { OpenStreetMapProvider, GeoSearchControl } from 'leaflet-geosearch';
import "leaflet/dist/leaflet.css";
import "leaflet-geosearch/dist/geosearch.css";
import L from 'leaflet';
import { Input } from '@mui/material';
import Layers from './Layers';



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
        <Layers/>

        <LeafletGeoSearch/>
         
        </MapContainer>
      
        </>
        
    );
    }
      
export default Location;
