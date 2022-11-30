const plantList = (state = [], action) => {

    if (action.type === 'STORE_RESULTS') {
        return action.payload;
    }
    return state;
};

export default plantList;