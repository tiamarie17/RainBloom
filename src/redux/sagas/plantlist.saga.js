import { put, takeLatest } from "@redux-saga/core/effects";
import axios from "axios";



// POST request to send search input to database

function* retrieveSearchResults(action) {

    console.log('in retrieveSearchResults saga, action.payload is', action.payload);
    
    let searchQuery=action.payload;
        
    try {
       
        const response = yield axios.post('/api/search', {data: searchQuery});
        console.log('response.data is', response.data);

        yield put({ type:'STORE_RESULTS', payload: response.data});

    } catch (err) {
        console.log('Error with posting new item to plantlist', err);
    }
   
}

function* plantListSaga() {
    yield takeLatest('SEND_SEARCH_INPUT', retrieveSearchResults);

}

export default plantListSaga;