import { useState } from 'react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';




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
                <button onClick={handleSave}>Save</button>

            </>
        );

    } else {
        return (
            <>
            <p>Notes: {plant.notes}</p>
                <button onClick={() => {
                    setEditMode(true);
                }}>Edit</button>

            </>
        );
    }
}


export default AddNoteForm;

