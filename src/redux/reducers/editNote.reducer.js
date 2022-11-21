const editNote = (state  = {}, action) => {
    switch(action.type) {
        case 'SET_EDIT_NOTE':
        return action.payload;
        case 'UPDATE_EDIT_NOTE':
            // Merging two objects together
            return {
                ...state,
                ...action.payload
            };
    } 
    return state;
}

export default editNote;