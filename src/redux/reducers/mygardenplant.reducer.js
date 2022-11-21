
const myGardenPlants = (state = [], action) => {
    console.log('in myGardenPlants reducer, action.payload is', action.payload);
    
    switch (action.type) {
        case 'SET_MY_GARDEN':
          return action.payload;
        case 'FETCH_MY_GARDEN':
          return action.payload;
      }
      return state;
};

export default myGardenPlants;