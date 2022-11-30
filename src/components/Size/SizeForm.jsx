import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from "@mui/material";
import FormControl from '@mui/material/FormControl';


function SizeForm() {

    const dispatch = useDispatch();
    const [area, setArea] = useState(0);
    const [depth, setDepth] = useState(0);


    const handleDepthChange = (event) => {
        setDepth(event.target.value);
    }

    const handleAreaChange = (event) => {
        setArea(event.target.value);
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        let size = (area / depth).toFixed(2);
        console.log('size is', size);

        dispatch({
            type: 'STORE_SIZE',
            payload: size
        })

        //clear inputs
        setArea('');
        setDepth('');

    }

    return (
        <>
            <FormControl onSubmit={handleSubmit}
                style={{ width: 200 }}>
                <input
                    type="float"
                    placeholder="total area in ft²"
                    onChange={handleAreaChange}
                />
                <input
                    type="float"
                    placeholder="depth in inches"
                    onChange={handleDepthChange}
                />
                <Button
                    onClick={handleSubmit}
                    type="submit"
                    variant="container"
                    sx={{
                        borderRadius: 3
                    }}
                    style={{
                        backgroundColor: 'darkseagreen',
                        color: 'black',
                        margin: 5
                    }}
                >Calculate Size
                </Button>
            </FormControl>
        </>);
}

export default SizeForm;