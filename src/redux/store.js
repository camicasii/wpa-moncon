import { createStore, combineReducers } from 'redux'
import UserReducer from './reducers/UserReducer';

const reducer = combineReducers({
  UserReducer,
})

export const store = createStore(reducer);
