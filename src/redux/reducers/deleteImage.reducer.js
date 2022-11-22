
const deleteImage = (state = [], action) => {
    //console.log('in deleteImage reducer, action.payload is', action.payload);
    
    if (action.type === 'REMOVE_IMAGE') {
          return action.payload;
      }
      return state;
};

export default deleteImage;