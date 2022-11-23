import React, {useState, useRef, useMemo, useCallback} from 'react';
import {Marker, Popup} from 'react-leaflet';


const center = {
    lat: 44.829500,
    lng: -93.083380,
  }

function DraggableMarker() {

    const [draggable, setDraggable] = useState(false)
    const [position, setPosition] = useState(center)
    const markerRef = useRef(null)
    const eventHandlers = useMemo(
      () => ({
        dragend() {
          const marker = markerRef.current
          if (marker != null) {
            setPosition(marker.getLatLng())
          }
        },
      }),
      [],
    )
    const toggleDraggable = useCallback(() => {
      setDraggable((d) => !d)
    }, [])

    let icon = L.icon({
        iconSize: [25, 41],
        iconAnchor: [10, 41],
        popupAnchor: [2, -40],
        iconUrl: "https://unpkg.com/leaflet@1.8.0/dist/images/marker-icon.png",
        shadowUrl: "https://unpkg.com/leaflet@1.8.0/dist/images/marker-shadow.png"
      });
  
    return (
      <Marker
        draggable={draggable}
        eventHandlers={eventHandlers}
        position={position}
        ref={markerRef}
        icon={icon}>
        <Popup minWidth={90}>
            My ideal rain garden location!
          <span onClick={toggleDraggable}>
            {draggable
              ? ' Marker is draggable'
              : ' Click here to make marker draggable'}
          </span>
        </Popup>
      </Marker>
    )
  }

  export default DraggableMarker;