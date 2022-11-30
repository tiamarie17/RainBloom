const gallery = (state = [], action) => {
    console.log('in gallery reducer');

    if (action.type === 'SET_GALLERY') {
        return action.payload;
    }
    return state;
};

export default gallery;