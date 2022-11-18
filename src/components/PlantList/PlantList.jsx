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

const goals = [
    'Butterflies',
    'Hummingbirds',
    'Pollinators',
    'Birds',
    'Deer-resistant',
];

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


    //declaring variable to track input of soil dropdown menu
    const [soil, setSoil] = useState('');

    const handleSoilChange = (event) => {
        setSoil(event.target.value);
    };
        console.log('soil is', soil);

    //declaring variable to track input of sunlight dropdown menu
    const [sunlight, setSunlight] = useState('');

    const handleSunlightChange = (event) => {
        setSunlight(event.target.value);
    };
        console.log('sunlight is', sunlight);

        

    //Declaring variables to track value of goals selected
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
            <table>
                <tbody>
                    {searchResults.map(result => (
                        <tr key={result.id}>
                            <td><img src={result.image.replace("public/", "")}/></td>
                            <td>{result.common_name}</td>
                            <td>{result.botanical_name}</td>
                            <td>{result.botanical_name}</td>
                            <td>{result.soil_type}</td>
                            <td>{result.spacing}</td>
                            <td>{result.plant_location}</td>
                            <td>{result.inundation_amount}</td>
                            <td>
                                <button onClick={() => addToGarden(result)}>Add to Garden</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

        </>
    );

}
export default PlantList;