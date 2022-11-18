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

    const searchResults = useSelector((store)=> {
        return store.plantList;
    })

    const dispatch = useDispatch();

    const serachResults = useSelector((store)=>{
        return store.plantList;
    })

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
    const addToGarden = () => {
        console.log('in addToGarden');
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
                        <ul key={result.id}>
                            <li><img src={result.image}/></li>
                            <li>Common name: {result.common_name}</li>
                            <li>Botanical name: {result.botanical_name}</li>
                            <li>Soil Type: {result.soil_type}</li>
                            <li>Spacing: {result.spacing}</li>
                            <li>Location in Rain Garden: {result.plant_location}</li>
                            <li>Inundation Tolerance:{result.inundation_amount}</li>
                            <li>
                                <button onClick={() => addToGarden(result)}>Add to Garden</button>
                            </li>
                        </ul>
                    ))}
        
        </div>

        </>
    );

}
export default PlantList;