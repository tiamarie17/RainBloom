import React from 'react';
import {useHistory} from 'react-router-dom';
import Map from '../TopoMap/TopoMap';


function MyGarden() {

  // TODO: Render weather API info here

  const history = useHistory();

  const goToMap = () => {
      console.log('in goToMap');
      history.push('/topomap');
  }

  return (
    <>
    <h1>My Garden</h1>
    <button onClick={goToMap}>See Topo Map</button>
    </>
  );
}


export default MyGarden;
