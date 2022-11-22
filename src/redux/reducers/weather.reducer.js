
const weather = (state = [], action) => {
    switch(action.type) {
        case 'SET_WEATHER':
            return action.payload;
         case 'FETCH_WEATHER':
                return action.payload; 
    }
    return state;
}

export default weather;