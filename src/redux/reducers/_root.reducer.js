import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import gallery from './gallery.reducer';
import deleteImage from './deleteImage.reducer';
import plantList from './plantlist.reducer';
import myGardenPlants from './mygardenplant.reducer';
import deletePlant from './deletePlant.reducer';
import editNote from './editNote.reducer';
import weather from './weather.reducer';
import size from './size.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  gallery,
  deleteImage,
  plantList,
  myGardenPlants,
  deletePlant,
  editNote,
  weather,
  size,
});

export default rootReducer;
