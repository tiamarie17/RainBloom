import React, {useEffect} from 'react';
import { MapContainer, useMap} from 'react-leaflet';
import {useHistory} from 'react-router-dom';
import { OpenStreetMapProvider, GeoSearchControl } from 'leaflet-geosearch';
import "leaflet/dist/leaflet.css";
import "leaflet-geosearch/dist/geosearch.css";
import L from 'leaflet';
import Layers from './Layers';
import DraggableMarker from './DraggableMarker';


function Location(){

    const history = useHistory();

    const size = () =>{
      console.log('in size function');
      history.push('/size');
    }

    // Map search box
    function LeafletGeoSearch() {

      // const map = useMapEvent({
      //   click: () => {
      //     map.locate();
      //   },
      //   locationfound: (location) => {
      //     console.log('location found:', location)
      //   },
      // })
  
    const map = useMap(); //here use useMap hook

    let icon = L.icon({
      iconSize: [25, 41],
      iconAnchor: [10, 41],
      popupAnchor: [2, -40],
      iconUrl: "https://unpkg.com/leaflet@1.8.0/dist/images/marker-icon.png",
      shadowUrl: "https://unpkg.com/leaflet@1.8.0/dist/images/marker-shadow.png"
    });



    useEffect(() => {
      const provider = new OpenStreetMapProvider();

      const searchControl = new GeoSearchControl({
        provider,
        marker: {
          icon
        },
        autocomplete: true,
        Popup: true,
        
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
          center={[44.99, -93.26]} 
          zoom={5} 
          zoomControl={false} 
          style={{ height: '100vh', width: '100%' }}
        >
        <Layers/>

        <LeafletGeoSearch/>
        <DraggableMarker />
         
        </MapContainer>
      
        </>
        
    );
    }
  

      
export default Location;
