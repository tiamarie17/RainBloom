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
    <h1>Choose Plants For Your Garden</h1>
    <FormGroup>
      <FormControlLabel control={<Checkbox checked={checked} onChange ={handleChange} inputProps={{'aria-label': 'controlled'}} />} label="Hummingbirds" />
      
    </FormGroup>
    </>
    );

}
export default PlantList;