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
            A rain garden is a garden that is designed to capture runoff water from your yard. 
            It typically has a depression in the middle and contains plants that 
            can tolerate being flooded occassionally. 
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
            Answer here! 
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
          What are some local programs that support people with building rain gardens?
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
          How much manual labor is involved in creating the rain garden?
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
          What are some additional resources for calculating the size and depth of my rain garden?
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