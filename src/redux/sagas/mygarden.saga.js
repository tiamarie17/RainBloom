import { put, takeLatest } from "@redux-saga/core/effects";
import axios from "axios";

// POST request to send plant selected from search results to database

function* addToGarden(action) {

    console.log('in addToGarden saga, action.payload is', action.payload);
    
    let selectedPlant=action.payload;
        
    try {
       
        const response = yield axios.post('/api/mygarden', {data: selectedPlant});
        console.log('response.data is', response.data);

        yield put({ type:'SET_MY_GARDEN', payload: response.data});

    } catch (err) {
        console.log('Error with posting new plant to my garden', err);
    }
   
}

function* fetchMyGarden(){
    console.log('in fetchGarden');
  
    let response = yield axios.get('/api/mygarden');
    console.log('GET response:', response)
  
    yield put({
        type: 'SET_MY_GARDEN',
        payload: response.data
    })
  }



function* mygardenSaga() {
    yield takeLatest('ADD_TO_GARDEN', addToGarden);
    yield takeLatest ('FETCH_MY_GARDEN', fetchMyGarden);
}

export default mygardenSaga;