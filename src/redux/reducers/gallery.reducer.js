const gallery = (state = [], action) => {
    console.log('in gallery reducer, action.payload is', action.payload);
    
    switch (action.type) {
        case 'SET_GALLERY':
          return action.payload;
        case 'REMOVE IMAGE':
          return action.payload;
        default:
          return state;
      }
};

export default gallery;