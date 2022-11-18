import { put, takeLatest } from "@redux-saga/core/effects";
import axios from "axios";
import { response } from "express";





// POST request to send search input to database

function* sendSearchInput(action) {

    console.log('in sendSearchInput saga, action.payload is', action.payload);
    
    let searchQuery=action.payload;

    axios.post('/api/search', {
        data: searchQuery
      })
        
    try {

        yield axios.post('/api/search', {data: searchQuery});
        //console.log(response.data)
        yield put({ type:'STORE_RESULTS'});

        response = yield axios.post('/api/search', {data: searchQuery});
        console.log('response is', response);

        yield put({ type:'STORE_PLANTS', payload: response.data});

    } catch (err) {
        console.log('Error with posting new item to plantlist', err);
    }
   
}

function* plantListSaga() {
    yield takeLatest('SEND_SEARCH_INPUT', sendSearchResults);

}

export default plantListSaga;