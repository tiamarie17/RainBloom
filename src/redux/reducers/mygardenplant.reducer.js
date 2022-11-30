
const myGardenPlants = (state = [], action) => {

    if (action.type === 'SET_MY_GARDEN') {
        return action.payload;
    }
    return state;
};

export default myGardenPlants;