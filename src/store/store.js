import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { initialState, rootReducer } from './../reducers/restaurantReducer';

const state = initialState;

const middleware = [thunk];

const store = createStore(
  rootReducer,
  state,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;

