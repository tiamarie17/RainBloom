import {useHistory} from 'react-router-dom';
import Button from '@mui/material/IconButton';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {List, ListItem } from '@mui/material';


function Depth(){

    const history = useHistory();

    const area = () => {
        console.log('in area');
        history.push('/location')
    }


    return(<>

    <div style={{ display:'flex', justifyContent:'center'}}>
    <Card sx={{ maxWidth: 330, height: 1100 }} >
      <CardMedia
        component="img"
        height="160"
        image="/faq/depth.png"
        alt="rain garden depth diagram"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Step 2: Select Garden Depth
        </Typography>
        <Typography variant="body1" color="text.primary">
          To find the depth of your garden, you will need to perform an infiltration test:
          <List>
            <ListItem>1. Dig a hole in your rain garden location about 8 inches in diameter and 8 inches deep.</ListItem>
            <ListItem>2. Fill the hole to the top with water. </ListItem>
            <ListItem>3. Allow the water to soak a minimum of 1-2 hours.</ListItem>
            <ListItem>4. Fill the hole back up with water so that the water level is one inch from the top of the hole.</ListItem>
            <ListItem>5. Use a ruler or tape measure to measure how far the water drops over time. Check how much the water lowers after 30 minutes to 1 hour.</ListItem>
            <ListItem>6. Use the rate of infiltration you measured to calculate how many inches of soil will be absorbed in 24 hours .</ListItem>
            <ListItem>Example: If you notice that it lowers 1 inch every 6 hours, in 24 hours it will lower 4 inches. So, inches would be the depth of your rain garden.</ListItem>
            <ListItem>Tip: Do not make your rain garden deeper than 12 inches, even if the test indicates it soaks in more than that. This is to prevent mosquitoes from hatching.</ListItem>
          </List>
          
          
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
    </div>
        

         

        <Button 
          variant="contained"
          onClick={area}
          sx={{
            borderRadius: 3
          }}
          style={{
            
            backgroundColor: 'darkseagreen',
            color: 'black',
            fontSize: 14,
            margin: 5,
           }}
          >Find Area with Map
        </Button>
    


    </>);
}

export default Depth;