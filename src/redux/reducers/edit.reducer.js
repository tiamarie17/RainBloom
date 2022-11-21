const editNote = (state = [], action) => {
    console.log('in editNote reducer, action.payload is', action.payload);
    
    if (action.type === 'EDIT_NOTE') {
          return action.payload;
      }
      return state;
};

export default editNote;