import { combineReducers } from 'redux';
import streamsdata from './streamsdata';
import userdata from './userdata';
import chatdata from './chatdata';
import editStateReducer from './editState';

export default combineReducers({
  editStateReducer,
  streamsdata,
  userdata,
  chatdata,
})
