import React from 'react';
import {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import AddNoteForm from '../AddNoteForm/AddNoteForm';
import Weather from '../Weather/Weather';
import swal from 'sweetalert';
import './MyGarden.css';
import {List, ListItem } from '@mui/material';



function MyGarden() {
    const dispatch = useDispatch(); 
    const history = useHistory();
    const myPlants= useSelector((store) =>{
        return store.myGardenPlants;
    })
    const size = useSelector((store) =>{
        return store.size;
    })

    //Load user's plants in garden on page load
    useEffect(() => {
        dispatch({
            type: 'FETCH_MY_GARDEN'
        });
    }, []);


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
    
    const removePlant = (plant) => {
      console.log('in removePlant');
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this plant!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          dispatch({
                type:'REMOVE_PLANT',
                payload: plant.id
            })
          swal("Poof! Your plant has been removed from the garden!", {
            icon: "success",
          });
        } else {
          swal("Your plant has been saved!");
        }
      });
  }

  return (
    <>
    <div className="myGardenIntro">
    <h1>My Garden</h1>
    <Weather />
    <h2>My Plants</h2>
    </div>

     {/* Render plants added to user's garden below */}
                {myPlants.map(plant => (
                    <div style={{ display:'flex', justifyContent:'center'}} key = {plant.id}>
                      <Card sx={{ maxWidth: 330 }} style={{backgroundColor: "#CAE1FF"}} key = {plant.id}>
                      <CardContent>
                          <Typography variant="body1" color="text.primary">
                              <img src={plant.image} />
                              <List>
                                  <ListItem>Common name: {plant.common_name}</ListItem>
                                  <ListItem>Botanical name: {plant.botanical_name}</ListItem>
                              </List>
                              <AddNoteForm plant={plant} />
                          </Typography>
                      </CardContent>
                      <CardActions disableSpacing>
                          <IconButton onClick={() => removePlant(plant)} size="large" aria-label="add to garden">
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
                                  <List>
                                      <ListItem>Soil Type: {plant.soil_type}</ListItem>
                                      <ListItem>Spacing: {plant.spacing}</ListItem>
                                      <ListItem>Location in Rain Garden: {plant.plant_location}</ListItem>
                                      <ListItem>Inundation Tolerance: {plant.inundation_amount} inches</ListItem>
                                  </List>
                              </Typography>
                          </CardContent>
                      </Collapse>
                      </Card>
                      </div>
                ))}
    </>
  );
}


export default MyGarden;




