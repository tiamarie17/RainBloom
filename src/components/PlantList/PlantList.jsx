import {React, useState} from 'react';
// import Checkbox from '@mui/material/Checkbox';
// import FormGroup from '@mui/material/FormGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';

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



function PlantList(){

const theme = useTheme();
const [goalName, setGoalName] = useState([]);

const handleChange = (event) => {
  const {
    target: { value },
  } = event;
  setGoalName(
    // On autofill we get a stringified value.
    typeof value === 'string' ? value.split(',') : value,
  );
};


//   const [checked, setChecked] = useState(true);

//   const handleChange = (event) => {
//     setChecked(event.target.checked);
// }

return(
    <>
    <h3>Choose Plants For Your Garden:</h3>

    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-chip-label">Select Goals For Your Garden</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={goalName}
          onChange={handleChange}
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
    </div>

    {/* <h3>Check any goals you have for your garden</h3>
    <FormGroup>
    <FormControlLabel control={<Checkbox checked={checked[0] && checked[1]}
      indeterminate={checked[0] !== checked[1]}onChange ={handleChange} inputProps={{'aria-label': 'controlled'}} />} label="Butterflies" />
      <FormControlLabel control={<Checkbox checked={checked[0] && checked[1]}
      indeterminate={checked[0] !== checked[1]} onChange ={handleChange} inputProps={{'aria-label': 'controlled'}} />} label="Hummingbirds" />
      <FormControlLabel control={<Checkbox checked={checked[0] && checked[1]}
      indeterminate={checked[0] !== checked[1]} onChange ={handleChange} inputProps={{'aria-label': 'controlled'}} />} label="Birds" />
      <FormControlLabel control={<Checkbox checked={checked[0] && checked[1]}
      indeterminate={checked[0] !== checked[1]} onChange ={handleChange} inputProps={{'aria-label': 'controlled'}} />} label="Pollinators" />
      <FormControlLabel control={<Checkbox checked={checked[0] && checked[1]}
      indeterminate={checked[0] !== checked[1]} onChange ={handleChange} inputProps={{'aria-label': 'controlled'}} />} label="Deer Resistant" />
    </FormGroup> */}
    </>
    );

}
export default PlantList;