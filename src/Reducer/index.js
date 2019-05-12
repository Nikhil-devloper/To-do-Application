import { combineReducers } from 'redux';
import authReducer from './authReducer';
import {ListReducer} from './ListReducer';

export default combineReducers({
      auth: authReducer,
      form: ListReducer
})
