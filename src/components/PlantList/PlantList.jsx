import { React, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
import { useHistory } from 'react-router-dom';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import { Button } from "@mui/material";



//Defining mui chip styling
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

//Declaring mui multiselect options
const goals = [
    'Butterflies',
    'Hummingbirds',
    'Pollinators',
    'Birds',
    'deerresistant',
];

//styling mui chip box
function getStyles(goal, goalName, theme) {
    return {
        fontWeight:
            goalName.indexOf(goal) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

function PlantList() {

    const searchResults = useSelector((store) => {
        return store.plantList;
    })

    const dispatch = useDispatch();

    const history = useHistory();


    console.log('searchResults is', searchResults);


    //declaring variables to track input of soil, sunlight, and goals
    const [soil, setSoil] = useState('');

    const handleSoilChange = (event) => {
        setSoil(event.target.value);
    };
    console.log('soil is', soil);


    const [sunlight, setSunlight] = useState('');

    const handleSunlightChange = (event) => {
        setSunlight(event.target.value);
    };
    console.log('sunlight is', sunlight);


    const theme = useTheme();
    const [goalName, setGoalName] = useState([]);

    const handleGoalChange = (event) => {
        const {
            target: { value },
        } = event;
        setGoalName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    console.log('goals are', goalName);

    //wrapping up inputs from form into an object to send to database on form submit
    const searchInput = {
        soil_type: soil,
        sunlight_amount: sunlight,
        goals: goalName,
    };


    const handleFormSubmit = (event) => {
        console.log('in handleFormSubmit');
        event.preventDefault();

        dispatch({
            type: 'SEND_SEARCH_INPUT',
            payload: searchInput,

        });


    }

    //add plant to garden when user click 'Add to Garden' button
    const addToGarden = (result) => {
        console.log('in addToGarden');
        console.log('result is', result);
        alert('Plant added!');

        dispatch({
            type: 'ADD_TO_GARDEN',
            payload: result
        })
    }

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

    const handleNext = () => {
        console.log('in handleNext');
        history.push('/location');
    }

    return (
        <>
            <h3>Choose Plants For Your Garden:</h3>

            <form onSubmit={handleFormSubmit}>
                <select onChange={handleSoilChange}>
                    <option defaultValue="all soils">Soil Type</option>
                    <option value="loam" >Loam</option>
                    <option value="clay" >Clay</option>
                    <option value="sand" >Sand</option>
                    <option value="all soils">Unsure</option>
                </select>

                <select onChange={handleSunlightChange}>
                    <option defaultValue="mixed sun shade">Sunlight amount</option>
                    <option value="full sun" >Full sun</option>
                    <option value="light shade" >Light shade</option>
                    <option value="medium shade" >Medium shade</option>
                    <option value="full shade">Full shade</option>
                    <option value="mixed sun shade">Mixed sun shade</option>
                </select>
                {/* Goals multiple select dropdown menu */}
                <FormControl sx={{ m: 1, width: 300 }}>
                    <InputLabel id="demo-multiple-chip-label">Select Goals For Your Garden</InputLabel>
                    <Select
                        labelId="demo-multiple-chip-label"
                        id="demo-multiple-chip"
                        multiple
                        // required
                        value={goalName}
                        onChange={handleGoalChange}
                        input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                        renderValue={(selected) => (
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                {selected.map((value) => (
                                    <Chip key={value} label={value} />
                                ))}
                            </Box>
                        )}
                        MenuProps={MenuProps}
                    >
                        {goals.map((goal) => (
                            <MenuItem
                                key={goal}
                                value={goal}
                                style={getStyles(goal, goalName, theme)}
                            >
                                {goal}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <button type="submit">Search</button>
            </form>

            {/* Render search results below */}
            <div>
                <h1>Suggested Plants:</h1>

                {searchResults.map(result => (

                    <Card sx={{ maxWidth: 330 }} key={result.id}>
                        <CardContent>
                            <Typography variant="body1" color="text.primary">
                                <img src={result.image} />
                                <ul>
                                    <li>Common name: {result.common_name}</li>
                                    <li>Botanical name: {result.botanical_name}</li>
                                    {/* <li><button onClick={() => addToGarden(result)}>Add to Garden</button></li> */}
                                </ul>
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            {/* Add to Garden button */}
                            <Button onClick = {() => addToGarden(result)}>Add to Garden
                            <IconButton size ="large" aria-label="add to favorites">
                                <LocalFloristIcon />
                            </IconButton>
                            </Button>

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
                                        <li>Soil Type: {result.soil_type}</li>
                                        <li>Spacing: {result.spacing}</li>
                                        <li>Location in Rain Garden: {result.plant_location}</li>
                                        <li>Inundation Tolerance: {result.inundation_amount} inches</li>
                                    </ul>
                                </Typography>
                            </CardContent>
                        </Collapse>
                    </Card>
                ))}

            </div>

            <button onClick={handleNext}>Go to Location</button>

        </>
    );

}
export default PlantList;


