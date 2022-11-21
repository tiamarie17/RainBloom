import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// function* editNote(action) {

//     try {
//         console.log('in editNote saga, action.payload is', action.payload);
//         const id = action.payload;

//         console.log('plant id is', id);
        
//         yield axios.put(`/api/edit/${id}`, action.payload);

//         yield put({
//             type: 'FETCH_MY_GARDEN'
//         });
//     } catch (err) {
//         console.log('put failed, error is', err);
//     }
// }

function* fetchEditNote(action) {
    console.log('in fetchEditNote saga, action.payload is', action.payload);
    try {
        const response = yield axios.get(`/edit/${action.payload}`);
        yield put({ type: 'SET_EDIT_NOTE', payload: response.data })
    } catch (err) {
        console.log(err)
    }
}


function* editSaga() {
    yield takeLatest('SAVE_NOTE', saveNote);
    yield takeLatest ('FETCH_EDIT_NOTE', fetchEditNote);
}

function* saveNote(action) {
    console.log('in saveNote');
    // edit
    if (action.payload.id) {

        try {
            console.log('in try, action.payload is', action.payload);
    
            
            yield axios.put(`/api/edit/${action.payload}`, action.payload);
    
            yield put({
                type: 'FETCH_MY_GARDEN'
            });
        } catch (err) {
            console.log('put failed, error is', err);
        }
    }
    // add new
    else {
        yield axios.post(`/api/edit`, action.payload)
    }
    
    }
   


export default editSaga;