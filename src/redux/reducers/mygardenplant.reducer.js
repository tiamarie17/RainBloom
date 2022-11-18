
const myGardenPlants = (state = [], action) => {
    console.log('in myGardenPlants reducer, action.payload is', action.payload);
    
    if (action.type === 'SET_MY_GARDEN') {
          return action.payload;
      }
      return state;
};

export default myGardenPlants;