import {useState} from 'react';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {useEffect} from 'react';

function EditNote() {
    console.log('in EditNote');
    const dispatch = useDispatch();
    const params = useParams();
    console.log('params is', params);


    // useEffect(()=>{
    //     dispatch({
    //         type: 'FETCH_EDIT_NOTES',
    //         payload: params.id
    //     })

    // }, [params.id]);

    

   

    // const handleEditOnChange = (event) => {
    //     setNotes({notes: event.target.value});
    // };
  


    console.log('in EditNote');
    return(
    <>
    <form>
        <input 
        type="text" 
        />
        <button type="submit">Save</button>
    </form>
    </>);
}

export default EditNote;