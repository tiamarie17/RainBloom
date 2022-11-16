const gallery = (state = [], action) => {
    console.log('in gallery reducer, action.payload is', action.payload);
    
    if (action.type==='SET_GALLERY') {
        return action.payload;
    }
   return state;
};

export default gallery;