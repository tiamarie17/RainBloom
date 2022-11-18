import { put, takeLatest } from "@redux-saga/core/effects";
import axios from "axios";
import { response } from "express";



// POST request to send search input to database
function* sendSearchResults(action) {
    console.log('in sendSearchResults saga, action.payload is', action.payload);
    let searchQuery=action.payload;
    
    try {
        yield axios.post('/api/search', {data: searchQuery});
        //console.log(response.data)
        yield put({ type:'STORE_RESULTS'});
    } catch (err) {
        console.log('Error with posting new item to plantlist', err);
    }
}

function* plantListSaga() {
    yield takeLatest('SEND_SEARCH_INPUT', sendSearchResults);
}

export default plantListSaga;