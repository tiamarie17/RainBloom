import { put, takeLatest } from "@redux-saga/core/effects";
import axios from "axios";

// POST request to send plant selected from search results to database

function* addToGarden(action) {

    console.log('in addToGarden saga, action.payload is', action.payload);

    let selectedPlant = action.payload;

    try {

        const response = yield axios.post('/api/mygarden', { data: selectedPlant });
        console.log('response.data is', response.data);

        yield put({ type: 'SET_MY_GARDEN', payload: response.data });

    } catch (err) {
        console.log('Error with posting new plant to my garden', err);
    }

}

//GET request to render all plants in garden
function* fetchMyGarden() {
    console.log('in fetchMyGarden');

    let response = yield axios.get('/api/mygarden');
    console.log('GET saga response:', response)

    yield put({
        type: 'SET_MY_GARDEN',
        payload: response.data
    })
}


//DELETE Request to remove a plant from garden
function* removePlant(action) {

    try {
        console.log('in removePlant', action.payload);
        const deletedPlant = action.payload;

        console.log('deletedPlant is', deletedPlant);

        yield axios.delete(`/api/mygarden/${deletedPlant}`);

        // trigger a GET request
        yield put({
            type: 'FETCH_MY_GARDEN'
        });
    } catch (err) {
        console.log('delete failed, error is', err);
    }
}



function* mygardenSaga() {
    yield takeLatest('ADD_TO_GARDEN', addToGarden);
    yield takeLatest('FETCH_MY_GARDEN', fetchMyGarden);
    yield takeLatest('REMOVE_PLANT', removePlant);
}

export default mygardenSaga;