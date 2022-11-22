
const deletePlant = (state = [], action) => {
    
    if (action.type === 'REMOVE_PLANT') {
          return action.payload;
      }
      return state;
};

export default deletePlant;