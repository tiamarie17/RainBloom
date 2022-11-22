
const deleteImage = (state = [], action) => {
    
    if (action.type === 'REMOVE_IMAGE') {
          return action.payload;
      }
      return state;
};

export default deleteImage;