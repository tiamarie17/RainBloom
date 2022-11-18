import { put, takeLatest } from "@redux-saga/core/effects";
import axios from "axios";

// POST request to send search input to database
function* sendSearchInput(action) {
    console.log('in sendSearchInput saga, action.payload is', action.payload);
    let searchQuery=action.payload;
    
    // try {
    //     response = yield axios.post('/api/search', {data: searchQuery});
    //     console.log(response)
    //     yield put({ type:'FETCH_PLANTS'});
    // } catch (err) {
    //     console.log('Error with posting new item to plantlist', err);
    // }
    axios.post('/api/search', {
        data: searchQuery
      })
      .then(function (response) {
        console.log(response);
        dispatch({
            type: 'STORE_RESULTS',
            payload: response.data
        })
      })
      .catch((error) => {
        console.log('Error with posting new item to plantlist', error);
      });
}

function* plantListSaga() {
    yield takeLatest('SEND_SEARCH_INPUT', sendSearchInput);
    // yield takeLatest('FETCH_PLANTS', fetchPlants);
}

export default plantListSaga;