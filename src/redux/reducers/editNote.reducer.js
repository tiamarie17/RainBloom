const editNote = (state  = {}, action) => {
    switch(action.type) {
        case 'SET_ACTIVE_PLANT':
        return action.payload;
        case 'ACTIVE_PLANT_LISTEN':
            // Merging two objects together
            return {
                ...state,
                ...action.payload
            };
    } 
    return state;
}

export default editNote;