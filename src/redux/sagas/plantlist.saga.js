import { put, takeLatest } from "@redux-saga/core/effects";
import axios from "axios";

// POST request to send search input to database
function* sendSearchInput(action) {
    try {
        yield axios.post('/api/search', action.payload);

        yield put({ type:'FETCH_PLANTS' });
    } catch (err) {
        console.log('Error with posting new item to plantlist', err);
    }
}

function* plantListSaga() {
    yield takeLatest('SEND_SEARCH_INPUT', sendSearchInput);
    // yield takeLatest('FETCH_PLANTS', fetchPlants);
}

export default plantListSaga;