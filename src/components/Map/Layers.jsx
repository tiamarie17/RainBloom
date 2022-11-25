import React from 'react';
import { TileLayer, LayersControl } from 'react-leaflet';
import VectorTileLayer from 'react-leaflet-vector-tile-layer';

function Layers(){

    return(
    <>
  <LayersControl position="topright">
  

  <LayersControl.BaseLayer name="Topo Map 1">
    <TileLayer
      attribution='Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
      url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
    />
    
  </LayersControl.BaseLayer>

  <LayersControl.BaseLayer checked name="Topo Map 2">
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
    </>
    );
}

export default Layers;