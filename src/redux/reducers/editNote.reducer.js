const editNote = (state = {}, action) => {
    switch (action.type) {
        case 'ACTIVE_PLANT_LISTEN':
            // Merging two objects together
            return {
                ...state,
                ...action.payload
            };
        case 'SET_ACTIVE_PLANT':
            return action.payload;
        case 'CLEAR_ACTIVE_PLANT':
            return {};

    }
    return state;
}

export default editNote;