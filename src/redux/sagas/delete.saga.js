import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* removeImage(action) {

    try {
        console.log('in removeImage', action.payload);
        const deletedImage = action.payload;

        console.log('deletedImage is', deletedImage);

        yield axios.delete(`/api/gallery/${deletedImage}`);

        // trigger a GET request
        yield put({
            type: 'FETCH_GALLERY'
        });
    } catch (err) {
        console.log('delete failed, error is', err);
    }
}


function* deleteSaga() {
    yield takeLatest('REMOVE_IMAGE', removeImage);
}

export default deleteSaga;