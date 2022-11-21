import {useState} from 'react';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {useEffect} from 'react';

function AddNoteForm({plant}){
    console.log('in AddNoteForm');

     const [notes, setNotes] = useState({notes: ''});

     const handleSubmitNote = (event) => {
        console.log('in handleSubmitEdit');
        event.preventDefault();
       
        clearNoteField();
    
    
    }

    const clearNoteField = () => {
        setNotes({notes: ''});
    }

    return(
    <>
       <form onSubmit = {handleSubmitNote}>
        <input 
        onChange={(event) => setNotes({notes: event.target.value})}
        type="text" 
        placeholder = "Add notes here!"
        value = {plant.notes}
        />
        <button type="submit">Add Note</button>
    </form>

    </>
    );
}

export default AddNoteForm;