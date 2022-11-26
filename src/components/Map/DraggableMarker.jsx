import React, {useState, useRef, useMemo, useCallback} from 'react';
import {Marker, Popup} from 'react-leaflet';


const center = {
    lat: 44.786346,
    lng: -93.128455,
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
        iconSize: [45, 45],
        iconAnchor: [10, 41],
        popupAnchor: [2, -40],
        iconUrl: "https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/58/null/external-flower-gardening-vitaliy-gorbachev-flat-vitaly-gorbachev-1.png",
        // https://icons8.com/icon/3d6f7EVgce1s/flower
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