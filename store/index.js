import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import counter from './counter/reducer';


const reducer = combineReducers({
  counter,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
