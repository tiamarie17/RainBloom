import {useState} from 'react';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {useEffect} from 'react';

function EditNote() {
    console.log('in EditNote');
    const params = useParams();
    console.log('params is', params);

    // useEffect(()=>{
    //     dispatch({
    //         type: 'FETCH_EDIT_NOTES',
    //         payload: params.id
    //     })

    // }, [params.id]);

    const dispatch = useDispatch();

    // const [notes, setNotes] = useState({notes: ''});

    const handleEditOnChange = (event) => {
        setNotes({notes: event.target.value});
    };
  
    const handleSubmitEdit = (event) => {
        event.preventDefault();
        console.log('in handleSubmitEdit');
        dispatch ({
            type: 'EDIT_NOTE',
            payload: {
                        notes: event.target.value,
                        id: params.id
                    }
        })
        // clearNoteField();
    
    }

    // const clearNoteField = () => {
    //     setNotes({notes: ''});
    // }

    console.log('in EditNote');
    return(
    <>
    <form onSubmit = {handleSubmitEdit}>
        <input 
        type="text" 
        placeholder = "Add notes here!"
        />
        <button type="submit">Save</button>
    </form>
    </>);
}

export default EditNote;