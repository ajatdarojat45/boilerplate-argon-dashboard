import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import combineReducer from './reducers/combineReducers';


let store = createStore(combineReducer, applyMiddleware(thunk, logger));

export default store;