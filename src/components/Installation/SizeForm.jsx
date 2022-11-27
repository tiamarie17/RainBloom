import React from 'react';
import {useState} from 'react';
import {useDispatch} from 'react-redux';


function SizeForm() {

    const dispatch = useDispatch();
    const [area, setArea] = useState(0);
    const [depth, setDepth] = useState(0);
  

    const handleDepthChange = (event) =>{
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

    return(
    <>
    <form onSubmit={handleSubmit}>
        <input 
            type = "float" 
            placeholder="total area in ft²"
            onChange = {handleAreaChange}
        />
        <input 
            type = "float" 
            placeholder = "depth in inches" 
            onChange = {handleDepthChange}
        />
        <button>Calculate Size</button>
    </form>
    </>);
}

export default SizeForm;