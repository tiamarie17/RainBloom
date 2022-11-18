import { put, takeLatest } from "@redux-saga/core/effects";
import axios from "axios";



// POST request to send search input to database
function* sendSearchInput(action) {

    console.log('in sendSearchInput saga, action.payload is', action.payload);
    
    let searchQuery=action.payload;

    axios.post('/api/search', {
        data: searchQuery
      })
        
    try {
        response = yield axios.post('/api/search', {data: searchQuery});
        console.log('response is', response);

        yield put({ type:'STORE_PLANTS', payload: response.data});
    } catch (err) {
        console.log('Error with posting new item to plantlist', err);
    }
   
}

function* plantListSaga() {
    yield takeLatest('SEND_SEARCH_INPUT', sendSearchInput);

}

export default plantListSaga;