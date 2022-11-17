const plantList = (state = [], action) => {
    console.log('in plantlist reducer, action.payload is', action.payload);
    
    if (action.type === 'SET_PLANTLIST') {
          return action.payload;
      }
      return state;
};

export default plantList;