import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {useEffect} from 'react';
import { Notes } from '@material-ui/icons';

function EditNote() {
    // console.log('in EditNote');
    // const dispatch = useDispatch();
    // const params = useParams();
    // console.log('params is', params);

    // //to do: make a reducer for this
    // const notes = useSelector((store)=> {
    //     return store.notes;
    // })


    // useEffect(()=>{
    //     if (params.id){
    //     dispatch({
    //         type: 'FETCH_EDIT_NOTES',
    //         payload: params.id
    //     })
    // }
    // }, [params.id]);

    // const onEditSubmit = (event) => {
    //     dispatch({
    //         type: 'SAVE_NOTES',
    //         payload: notes
    //     });
    // }
  


   
    return(
    <>
    {/* <h1>{params.id ?'Edit':'Add'} Notes: {notes.notes}</h1>
    <form onSubmit={onEditSubmit}>
        <input 
        value={notes.notes} 
        onChange={(event)=> dispatch({
            type: 'UPDATE_EDIT_NOTE',
            payload: { notes: event.target.value}
        })}
        />
        <button type="submit">Save</button>
    </form> */}
    </>);
}

export default EditNote;