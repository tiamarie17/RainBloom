
const weather = (state = [], action) => {
    if (action.type === 'SET_WEATHER') {
        return action.payload;
    }
    return state;
}

export default weather;