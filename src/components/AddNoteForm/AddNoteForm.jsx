import { useState } from 'react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/IconButton';




function AddNoteForm({ plant }) {
    console.log('in AddNoteForm');
    const dispatch = useDispatch();
    const notes = useSelector((store) => {
        return store.editNote;
    })
    const [editMode, setEditMode] = useState(false);

    const handleSave = (event) =>{
        event.preventDefault();
        console.log('in handleSave');
    
        dispatch({
            type: 'SET_ACTIVE_PLANT',
            payload: notes
        });
        dispatch({
            type: 'CLEAR_ACTIVE_PLANT'
        });

        setEditMode(false);
    }


    //Show text area with edit button if edit mode is on
    //Show plant notes if edit mode is off

    if (editMode) {

        return (
            <>
                <textarea onChange={(event) => {
                    // This dispatch listens to changes as the user types
                    dispatch({
                        type: 'ACTIVE_PLANT_LISTEN',
                        payload: {
                            notes: event.target.value,
                            id: plant.id
                        }
                    })
                }}>
                </textarea>

                {/* When the save button is clicked, the user input is stored in the reducer */}
                <Button 
                    variant="contained"
                    onClick={handleSave}
                    sx={{
                        borderRadius: 3
                      }}
                    style={{
                        backgroundColor: 'darkseagreen',
                        color: 'black',
                        margin: 5,
                    }}
                    >Save
                </Button>

            </>
        );

    } else {
        return (
            <>
            <p>Notes: {plant.notes}</p>
                <Button 
                    variant="contained" 
                    onClick={() => {
                    setEditMode(true);
                     }}
                     sx={{
                        borderRadius: 3
                      }}
                    style={{
                        backgroundColor: 'darkseagreen',
                        color: 'black',
                        margin: 5,
                    }}
                     
                     >Edit
                
                </Button>

            </>
        );
    }
}


export default AddNoteForm;

