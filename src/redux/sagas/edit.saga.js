import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* editNote(action) {

    try {
        console.log('in editNote saga', action.payload);
        const id = action.payload;

        console.log('plant id is', id);
        
        yield axios.put(`/api/edit/${id}`, action.payload);

        // trigger a GET request
        yield put({
            type: 'FETCH_MY_GARDEN'
        });
    } catch (err) {
        console.log('put failed, error is', err);
    }
}

function* fetchEditNote(action) {
    try {
        const response = yield axios.get(`/edit/${action.payload}`);
        yield put({ type: 'SET_EDIT_NOTE', payload: response.data })
    } catch (err) {
        console.log(err)
    }
}


function* editSaga() {
    yield takeLatest('EDIT_NOTE', editNote);
    yield takeLatest ('FETCH_EDIT_NOTE', fetchEditNote);
}

export default editSaga;