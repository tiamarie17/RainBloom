import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* editSaga() {
    yield takeLatest('SAVE_NOTE', saveNote);
    
}

function* saveNote(action) {
    console.log('in saveNote');

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

export default editSaga;