import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* editNote(action) {

    try {
        console.log('in editNote saga', action.payload);
        const id = action.payload;

        console.log('plant id is', id);
        
        yield axios.put(`/api/edit/${id}`);

        // trigger a GET request
        yield put({
            type: 'FETCH_MY_GARDEN'
        });
    } catch (err) {
        console.log('put failed, error is', err);
    }
}


function* editSaga() {
    yield takeLatest('EDIT_NOTE', editNote);
}

export default editSaga;