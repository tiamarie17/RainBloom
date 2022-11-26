
const size = (state = [], action) => {
    
    if (action.type==='STORE_SIZE') {
          return action.payload;
    }
    return state;
};

export default size;