
const deletePlant = (state = [], action) => {
    console.log('in deletePlant reducer, action.payload is', action.payload);
    
    if (action.type === 'REMOVE_PLANT') {
          return action.payload;
      }
      return state;
};

export default deletePlant;