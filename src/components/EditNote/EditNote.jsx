import {useState} from 'react';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {useEffect} from 'react';

function EditNote(props) {
    console.log('in EditNote');
    const params = useParams();
    console.log('params is', params);

    useEffect(()=>{
        dispatch({
            type: 'FETCH_EDIT_NOTES',
            payload: params.id
        })

    }, [params.id]);

    const dispatch = useDispatch();

    const editNote = useSelector((store)=>{
        return store.editNote
    })

    const [notes, setNotes] = useState({notes: ''});

    const handleEditOnChange = (event) => {
        setNotes({notes: event.target.value});
    };
  
    const handleSubmitEdit = (event) => {
        event.preventDefault();
        console.log('in handleSubmitEdit');
        dispatch ({
            type: 'UPDATE_EDIT_NOTE',
            payload: {notes: event.target.value}
        })
        clearNoteField();
    
    }

    const clearNoteField = () => {
        setNotes({notes: ''});
    }

    console.log('in EditNote');
    return(
    <>
    <form onSubmit = {handleSubmitEdit}>
        <input 
        onChange={handleEditOnChange}
        type="text" 
        placeholder = "Add notes here!"
        value = {notes.notes}/>
        <button type="submit">Save</button>
    </form>
    </>);
}

export default EditNote;