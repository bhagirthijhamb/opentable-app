import { combineReducers } from 'redux';
import { rootReducer } from './restaurantReducer';

export default combineReducers({
  restaurants: rootReducer
});