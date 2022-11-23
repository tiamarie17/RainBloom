
import {useRef, useState, useEffect} from 'react';


function MapBox() {

    mapboxgl.accessToken = 'pk.eyJ1IjoidHQxNyIsImEiOiJjbGFma2ZseWMwY25jM3BvN2pwN3hhNHZ0In0.gzQmSpyAwkDAOw_uTit6kw';

    const mapContainer = useRef(null);
const map = useRef(null);
const [lng, setLng] = useState(-93.2);
const [lat, setLat] = useState(44.9);
const [zoom, setZoom] = useState(9);

useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
    container: mapContainer.current,
    style: 'mapbox://styles/tt17/classs3qb000515puopf36dp7',
    center: [lng, lat],
    zoom: zoom
    });
    });

    // map.on('load', () => {
    //     map.addSource('mapbox-terrain', {
    //     type: 'vector',
    //     // Use any Mapbox-hosted tileset using its tileset id.
    //     // Learn more about where to find a tileset id:
    //     // https://docs.mapbox.com/help/glossary/tileset-id/
    //     url: 'mapbox://mapbox.mapbox-terrain-v2'
    //     });
    //     map.addLayer(
    //     {
    //     'id': 'terrain-data',
    //     'type': 'line',
    //     'source': 'mapbox-terrain',
    //     'source-layer': 'contour',
    //     'layout': {
    //     'line-join': 'round',
    //     'line-cap': 'round'
    //     },
    //     'paint': {
    //     'line-color': '#ff69b4',
    //     'line-width': 1
    //     }
    //     },
    //     'road-label-simple' // Add layer below labels
    //     );
    //     });

    return(
    <>
    <h1>Mapbox</h1>
    <div>
<div ref={mapContainer} className="map-container" />
</div>
     



    </>);
}

export default MapBox;