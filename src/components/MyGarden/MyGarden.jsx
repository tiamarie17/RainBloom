import React from 'react';
import {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux';
import Map from '../Location/Location';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';




function MyGarden() {

  // TODO: Render weather API info here

  

  const history = useHistory();

  const myPlants= useSelector((store) =>{
      return store.myGardenPlants;
  })
  console.log('myPlants is', myPlants);

  const goToMap = () => {
      console.log('in goToMap');
      history.push('/topomap');
  }



  return (
    <>
    <h1>My Garden</h1>
    <h2>Weather API</h2>
    <h2>Plants in My Garden</h2>
     {/* Render plants added to user's garden below */}
     <div>


                {myPlants.map(plant => (

                    <Card sx={{ maxWidth: 330 }} key={plant.id}>
                        <CardContent>
                            <Typography variant="body1" color="text.primary">
                                <img src={plant.image} />
                                <ul>
                                    <li>Common name: {plant.common_name}</li>
                                    <li>Botanical name: {plant.botanical_name}</li>
                                    <li><button onClick={() => addNote(plant)}>Add Note</button></li>
                                </ul>
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <ExpandMore
                                expand={expanded}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </ExpandMore>
                        </CardActions>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Typography paragraph color="text.secondary">
                                    <ul>
                                        <li>Soil Type: {plant.soil_type}</li>
                                        <li>Spacing: {plant.spacing}</li>
                                        <li>Location in Rain Garden: {plant.plant_location}</li>
                                        <li>Inundation Tolerance: {plant.inundation_amount} inches</li>
                                    </ul>
                                </Typography>
                            </CardContent>
                        </Collapse>
                    </Card>
                ))}

            </div>



    <button onClick={goToMap}>See Topo Map</button>
    </>
  );
}


export default MyGarden;
