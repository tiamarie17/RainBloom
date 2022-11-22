import { useState } from 'react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

function AddNoteForm({ plant }) {
    console.log('in AddNoteForm');

    const dispatch = useDispatch();

    const notes = useSelector((store) => {
        return store.editNote;
    })

    const [editMode, setEditMode] = useState(false);

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
                            notes: event.target.value
                        }
                    })
                }}>
                </textarea>

                {/* When the save button is clicked, the user input is stored in the reducer */}
                <button onClick={() => dispatch({
                    type: 'SET_ACTIVE_PLANT',
                    payload: notes
                })}>Save</button>

            </>
        );

    } else {
        return (
            <>
                <button onClick={() => {
                    setEditMode(true);

                    // dispatch({
                    //     type: 'SET_ACTIVE_PLANT',
                    //     payload: 
                    // })
                }}>Edit</button>

            </>
        );
    }

}


/* <form onSubmit = {handleSubmitNote}>
 <input 
 onChange={(event) => setNotes({notes: event.target.value})}
 type="text" 
 placeholder = "Add notes here!"
 value = {plant.notes}
 />
 <button type="submit">Add Note</button>
</form> */

export default AddNoteForm;

/*
function PlantItem({ plant }) {
    const activePlant = useSelector(store => store.activePlant)

    return (


*/