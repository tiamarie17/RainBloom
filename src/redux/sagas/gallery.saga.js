import { put, takeLatest } from "@redux-saga/core/effects";
import axios from "axios";

function* gallerySaga() {
    yield takeLatest('FETCH_GALLERY', fetchGallery);
}

function* fetchGallery() {
    console.log('in fetchGallery');

    let response = yield axios.get('/api/gallery');
    console.log('GET response:', response)

    yield put({
        type: 'SET_GALLERY',
        payload: response.data
    })
}



export default gallerySaga;