import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './../reducers/restaurantReducer';

const state = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  state,
    compose(
      applyMiddleware(...middleware)
    )
);

export default store;

