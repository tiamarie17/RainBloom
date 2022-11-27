import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
import './faq.css';
import { autocompleteClasses } from '@mui/material';

function Faq() {

  const [expanded, setExpanded] = React.useState(false);

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

    return (
        <>
        <h1>FAQs</h1>
        <div style={{ display:'flex', justifyContent:'center'}}>
        <Card sx={{ width: 330, maxWidth: 330 }}>
      <CardContent>
        <Typography variant="body1" color="text.primary">
          What is a rain garden?
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
            A rain garden is a garden that is designed to capture runoff water from your yard and filter pollutants before the water gets into lakes, rivers, streams, 
            and other bodies of water. Run-off water often comes from rooves, streets, sidewalks, patios, sump pump drains, downspouts, or driveways. 
            Rain gardens typically have a depression in the middle and contains plants that can tolerate being flooded occassionally. They also have a berm, which is a raised bank
            that surrounds the rain garden and keeps the water inside. 
            <img src="./faq/raingarden.png"/>
          </Typography>
        </CardContent>
      </Collapse>
      
    </Card>
    </div>

    <div style={{ display:'flex', justifyContent:'center'}}>
    <Card sx={{ width: 330, maxWidth: 330 }}>
      <CardContent>
        <Typography variant="body1" color="text.primary">
          How do rain gardens benefit the environment?
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
            Rain gardens help the environment by helping to maintain water quality, preventing erosion, and providing food and shelter to wildlife.
             They capture run-off water that is often filled with oil, fertilizer, dirt, and other pollutants and prevent much of that water from getting 
            into rivers, lakes, streams, and other bodies of water. Just as importantly, rain gardens are able to filter out the pollutants in the runoff water before allowing
            water to enter bodies of water nearby. Since rain gardens slow down the process of runoff water getting into bodies of water by absorbing it, they also help prevent erosion.
            Rain gardens also attract and benefit pollinators, hummingbirds, butterflies, and many other types of wildlife because they provide them with nectar, seeds, berries, and shelter. 
            Even in the winter, rain gardens provide a shelter for pollinators.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </div>

    <div style={{ display:'flex', justifyContent:'center'}}>
    <Card sx={{ width: 330, maxWidth: 330 }}>
      <CardContent>
        <Typography variant="body1" color="text.primary">
          What are the benefits of planting native plants in my garden?
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
            Planting plants that are native to your local area is beneficial because those plants are well-adapted to your climate and soil, are drought-tolerant, and also disease resistant.
            They don't need fertilizer or watering once they are mature, and will thrive easily. Native plants also often have deeper roots, which allows them to thrive in drought conditions
             and also allows them to better prevent soil erosion. In the search feature of this app, all of the plants are native to Minnesota. However, you still might need to do some 
             additional research on which plants are native to your particular location in Minnesota. 
             One resource to look into is the <a href="https://www.minnesotawildflowers.info/">Minnesota Wildflowers</a> website.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </div>

    <div style={{ display:'flex', justifyContent:'center'}}>
    <Card sx={{ width: 330, maxWidth: 330 }}>
      <CardContent>
        <Typography variant="body1" color="text.primary">
          How much does it cost to build a rain garden? Are there grants available to help me with the cost? 
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
           The cost of building a rain garden varies depending on the size, number of plants, whether or not you choose plug-in plants or plants that are already more mature, whether or not your rent equipment or do the work on your own,
            and whether or not you need additional features like retaining walls or drains. 

            As an example, our rain garden cost about $430.00 to build--It is 110 square feet in size, has about 30 plants total that were purchased as plug-ins (very young/small plants),
           and we did all of the digging ourselves--no equipment was rented. We did not need a retaining wall, but we did need to purchase and install a French drain to route the water to the rain garden, as well as
           a pop-up emitter, a catch-basin, about 2 cubic yards of shredded hardwood mulch, 1 cubic yard of compost soil, and some rocks for an overflow area on the berm. We applied for a grant
           through the Landscaping or Clean Water Program in Dakota County and were granted $250.00 to put towards these costs. So, we ended up spending about $180.00 on the project.

           There are several local programs that offer grants and guidance on building a rain garden for residents of specific counties in Minnesota:

           <ul>
           <li>Hennpin County- <a href= "https://www.hennepin.us/business/conservation/funding-assistance-natural-resources-projects#natural-resources-grants">Natural resources good steward and opportunity grants</a></li>
           <li>Ramsey County - <a href="https://www.ramseycounty.us/content/grants-available-help-residents-install-raingardens">Grants for Rain Garden Installation</a></li>
           <li>Dakota County - <a href="https://dakotaswcd.org/services/landscaping-for-clean-water/">Landscaping for Clean Water</a></li>
           </ul>

          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </div>
    

    <div style={{ display:'flex', justifyContent:'center'}}>
    <Card sx={{ width: 330, maxWidth: 330 }}>
      <CardContent>
        <Typography variant="body1" color="text.primary">
          How much work is involved in creating the rain garden? How long will it take to install?
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
            It took us about 10 weeks to install our rain garden. For the amount of work, it depends on if you do the digging yourself or if you rent out equipment such as sod cutters or rototillers. My husband and I built our rain garden 
            by doing all the digging and tilling ourselves--Since we needed a drain to direct the water down a slope towards our garden, we also ended up digging a 4 foot-deep trench for about 50 feet to our rain garden site,
             in addition to digging down about a foot in the area where our rain garden is. The good thing was, we had all summer to do this, so we were able to do a little bit each day and that helped a lot. That said, renting equipment can make things
             easier and faster. In our case, we didn't rent equipment because it was expensive and because the equipment was too heavy for us to carry down to our rain garden location logistically.
             If you plan to skip the equipment rentals, it would be ideal to get several people involved in the project to help with the digging, tilling, adding in the mulch and compost, and planting. If you can, get your friends, neighbors,
            or family to come out and support so you can break the project into smaller pieces.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </div>

    <div style={{ display:'flex', justifyContent:'center'}}>
    <Card sx={{ width: 330, maxWidth: 330 }}>
      <CardContent>
        <Typography variant="body1" color="text.primary">
          How can I find out what type of soil I have?
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
            Check out <a href="https://soiltest.cfans.umn.edu/testing-services/lawn-garden">UMN Extension's Soil Testing Lab! </a>
            This site also has great <a href="https://extension.umn.edu/landscape-design/rain-gardens#test-the-soil-1778661">resources</a> for building rain gardens as well, and you can speak with an expert gardener
            if you have questions about specific parts of your project--especially about the soil, plants, or trees.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </div>

    <div style={{ display:'flex', justifyContent:'center'}}>
    <Card sx={{ width: 330, maxWidth: 330 }}>
      <CardContent>
        <Typography variant="body1" color="text.primary">
        Where can I purchase native plants locally?
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
            Answer
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </div>

    <div style={{ display:'flex', justifyContent:'center'}}>
    <Card sx={{ width: 330, maxWidth: 330 }}>
      <CardContent>
        <Typography variant="body1" color="text.primary">
        Where can I purchase compost, mulch and erosion control products locally?
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
            Answer
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </div>


    <div style={{ display:'flex', justifyContent:'center'}}>
    <Card sx={{ width: 330, maxWidth: 330 }}>
      <CardContent>
        <Typography variant="body1" color="text.primary">
        Who should I call before I start digging?
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
            Answer
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </div>
        
        </>
    );
}

export default Faq;