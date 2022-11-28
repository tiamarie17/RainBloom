
import { useHistory } from "react-router-dom";
import './Steps.css';
import { Button } from "@mui/material";
import { Box} from '@mui/system';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';



function Steps(){

    const history = useHistory();

    const search = () =>{
        console.log('in search');
        history.push('/search');
    }

    const backHome = () => {
        console.log('in backhome');
        history.push('/user');
    }

    const location = () => {
        console.log('in location');
        history.push('/location');
    }

    const installation = () => {
        console.log('installation');
        history.push('/installation');
    }

    const depth = () => {
        console.log('in depth');
        history.push('/depth');
    }

    const design = () => {
        console.log('in design');
        history.push('/design');
    }

    return(<>

    <h1>Steps to Build a Rain Garden</h1>

    <Box textAlign='center'>
    <div className="Step1">
    <h3>Step 1: Choose Garden Location</h3>
    <p>When it rains outside, notice where the water flows around your house and yard. Try to place it whereever water is draining away from (examples: from driveways, sump pmump outlets, or downspouts). 
        Think about where the water will go if the rain garden overflows. Make sure it is not draining towards the foundation of your house or your neighbor's yard. 
        Ideally, your rain garden should be about 20 feet away from your foundation, but could be as close as 10 feet away. Avoid placing rain gardens on buried utility lines, septic tanks, or wells. 
        Also avoid the buffer strip between streets and sidewalks, becuse those tend to have a lot of utility lines under them. If your house is located on a slope, avoid putting the rain garden uphill from your house. 
        Instead, divert the water around your house and place the rain garden down the slope from your house.
        You can also use the topographic map to help you decide where to plant your rain garden, and move the flower icon around by clicking on it to make it draggable. Here is some more information about 
        <a href="https://www.youtube.com/watch?v=CoVcRxza8nI" > how to use a topo map</a>.

    </p>
    <Button 
        onClick={location}
        variant = "contained" 
        type="submit"
        sx={{
            borderRadius: 3,
             }}
            style={{
            backgroundColor: 'darkseagreen',
                color: 'black',
            }}
            >Go to Map
    </Button>
    </div>

    <div className="Step2">
    <h3>Step 2: Select Garden Depth</h3>
    <p> Go to the Garden Depth page to learn more about how to perform an infiltration test at your desired garden location.</p>
    <Button 
        onClick={depth}
        variant = "contained" 
        type="submit"
        sx={{
            borderRadius: 3,
             }}
            style={{
            backgroundColor: 'darkseagreen',
                color: 'black',
            }}
            >Go to Garden Depth
    </Button>
    </div>

    <div className="Step3">
    <h3>Step 3: Determine Garden Size</h3>
    <p>To determine the size of your rain garden, you will need to know both the total area of run-off water and the depth of your rain garden. Calculate the total area of your roof, driveway, and any other surfaces
        that produce run-off water. If you need help estimating the square footage of this area, open the map on the location page, search for your address, and click the measure icon. This will allow you to draw a polygon
        on the map and give you a rough estimate of the area. On the Size page, enter in the total area and depth, and it will calculate the size your rain garden should be in order to capture 1 inch of run-off water.
    </p>
    <Button 
        onClick={location}
        variant = "contained" 
        type="submit"
        sx={{
            borderRadius: 3,
             }}
            style={{
            backgroundColor: 'darkseagreen',
                color: 'black',
            }}
            >Go to Map
    </Button>
    </div>

    <div className="Step4">
    <h3>Step 4: Choose Plants</h3>
    <p>Use the search feature to select plants for your rain garden based on your soil, sunlight, and garden goals. Add plants that you like to your garden.</p>
    <Button 
        onClick={search}
        variant = "contained" 
        type="submit"
        sx={{
            borderRadius: 3,
             }}
            style={{
            backgroundColor: 'darkseagreen',
                color: 'black',
            }}
            >Go to Plant Search
    </Button>
    </div>

    <div className="Step5">
    <h3>Step 5: Design the Layout</h3>
    <p>Learn how to design a layout for your garden, determine how many plants you'll need, and upload a picture of your layout to reference as you build.</p>
    <Button 
        onClick={design}
        variant = "contained" 
        type="submit"
        sx={{
            borderRadius: 3,
             }}
            style={{
            backgroundColor: 'darkseagreen',
                color: 'black',
            }}
            >Design Layout
    </Button>
    </div>

    <div className="Step6">
    <h3>Step 6: Installation</h3>
    <p>Learn important tips on how to install a rain garden</p>
    <Button 
        onClick={installation}
        variant = "contained" 
        type="submit"
        sx={{
            borderRadius: 3,
             }}
            style={{
            backgroundColor: 'darkseagreen',
                color: 'black',
            }}
            >Go to Installation
    </Button>
    </div>

    <Button 
        onClick={backHome}
        variant = "contained" 
        type="submit"
        sx={{
            borderRadius: 3,
             }}
            style={{
            backgroundColor: 'goldenrod',
                color: 'black',
            }}
            >Back to Home
    </Button>
    </Box>
    
    </>);
}

export default Steps;