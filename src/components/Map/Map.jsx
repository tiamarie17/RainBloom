import React, {useEffect} from 'react';
import { MapContainer, useMap} from 'react-leaflet';
import {useHistory} from 'react-router-dom';
import { OpenStreetMapProvider, GeoSearchControl } from 'leaflet-geosearch';
import "leaflet/dist/leaflet.css";
import "leaflet-geosearch/dist/geosearch.css";
import L from 'leaflet';
import Layers from './Layers';
import DraggableMarker from './DraggableMarker';
import Button from '@mui/material/IconButton';
import 'leaflet-easyprint';
import 'leaflet-measure';
import 'leaflet-measure/dist/leaflet-measure.css';
import './Map.css';



function Map(){

    const history = useHistory();
    
    //on click go to Rain Garden Size page
    const installation = () =>{
      console.log('in installation function');
      history.push('/installation');
    }

    // Map search box function
    function LeafletGeoSearch() {
      const map = useMap();
      
  
    //declare marker icon that will render on search
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

    //export map as PNG function
    function SaveMap(props) {
      const map = useMap();
      useEffect(() => {
        const control = L.easyPrint({
          ...props
        });
        map.addControl(control)
        return () => {
          map.removeControl(control);
        }
      }, [map]);
    
      return null;
    }

    //add measure distance and area tool to map
    const addLeafletMeasureControl = (map) =>{
      let measureControl = new L.Control.Measure({
      position: 'topright',
      lineColor: 'blue',
      primaryLengthUnit: 'feet',
      secondaryLengthUnit: 'miles',
      primaryAreaUnit: 'sqfeet',
      secondaryAreaUnit: 'sqmiles',
      activeColor: '#db4a29',
      completedColor: '#9b2d14',
      });
      measureControl.addTo(map);
      
      }
      
      L.Control.Measure.include({
        // set icon on the capture marker
        _setCaptureMarkerIcon: function () {
          // disable autopan
          this._captureMarker.options.autoPanOnFocus = false;
      
          // default function
          this._captureMarker.setIcon(
            L.divIcon({
              iconSize: this._map.getSize().multiplyBy(2)
            })
          );
        },
      });

      //handle depth button
      const depth = () => {
        console.log('in depth');
        history.push('/depth');
      }


       //handle Back To Plant Search button
      const backToSteps = () => {
      console.log('in backToSteps');
      history.push('/steps');
  }

  const size = () => {
    console.log('in size');
    history.push('/size');
  }
      
      return (
        <>
          <Button 
          variant="contained"
          onClick={backToSteps}
          sx={{
            borderRadius: 3
          }}
          style={{
            
            backgroundColor: 'darkseagreen',
            color: 'black',
            fontSize: 14,
            margin: 5,
           }}
          >Back
        </Button>

        <Button 
          variant="contained"
          onClick={depth}
          sx={{
            borderRadius: 3
          }}
          style={{
              backgroundColor: 'goldenrod',
              color: 'black',
              fontSize: 14,
              margin: 5
          }}
          >Go to Depth
        </Button>

        <Button 
          variant="contained"
          onClick={size}
          sx={{
            borderRadius: 3
          }}
          style={{
            
            backgroundColor: 'goldenrod',
            color: 'black',
            fontSize: 14,
            margin: 5,
           }}
          >Calculate Garden Size
        </Button>

        <MapContainer 
          center={[44.786, -93.128]} 
          zoom={5} 
          zoomControl={false} 
          style={{ height: '70vh', width: '100%' }}
          whenCreated={(map) => addLeafletMeasureControl(map)}
        >
        <Layers/>
        <LeafletGeoSearch/>
        <DraggableMarker />
        <SaveMap 
          className = "easyPrint" 
          position="topleft" 
          sizeModes={['Current', 'A4Portrait', 'A4Landscape']} 
          exportOnly="true" 
          filename="Map" 
          hideControlContainer={false}
        />
        </MapContainer>
      
        </>
        
    );
    }
      
export default Map;
