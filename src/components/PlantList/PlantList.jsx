import {React, useState} from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

function PlantList(){


  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
}

return(
    <>
    <h3>Choose Plants For Your Garden:</h3>
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
    </FormGroup>
    </>
    );

}
export default PlantList;