import React from 'react';
import {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import Map from '../Location/Location';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';
import AddNoteForm from '../AddNoteForm/AddNoteForm';




function MyGarden() {

    console.log('in MyGarden function');

    const dispatch = useDispatch(); 

  // TODO: Render weather API info here

  //Load user's plants in garden on page load
  useEffect(() => {
    dispatch({
        type: 'FETCH_MY_GARDEN'
    });
}, []);

  const history = useHistory();


  const myPlants= useSelector((store) =>{
      return store.myGardenPlants;
  })
  console.log('myPlants is', myPlants);

    //add mui cards and variable to track click of expand button on card

    const [expanded, setExpanded] = useState(false);
  
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };


    const ExpandMore = styled((props) => {
        const { expand, ...other } = props;
        return <IconButton {...other} />;
    })(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    }));

    const goToMap = () => {
      console.log('in goToMap');
      history.push('/location');
  }
    
    const removePlant = (plant) => {
      console.log('in removePlant');
      dispatch({
          type:'REMOVE_PLANT',
          payload: plant.id
      })
  }


//   const editNote = () => {
//      console.log('in editNote');
//      history.push(`/edit/${plant.id}`);

//   }

  
  return (
    <>
    <h1>My Garden</h1>
    <h2>Weather API</h2>
    <h2>My Plants</h2>
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
                                </ul>
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton onClick={()=> removePlant(plant)} size ="large" aria-label="add to garden">
                                <DeleteIcon />
                            </IconButton>

                            {/* <IconButton onClick={()=> editPlant(plant)} size ="large" aria-label="edit plant note">
                                <EditIcon />
                            </IconButton> */}

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
                                    <AddNoteForm />
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
