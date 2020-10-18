import { combineReducers } from 'redux';
import counterReducer from './counter/counter.reducer';
import userReducer from './users/user.reducer';
const rootReducer = combineReducers({ counter: counterReducer, users: userReducer});

export default rootReducer;