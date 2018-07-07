import { combineReducers } from 'redux';
import streamsdata from './streamsdata';
import userdata from './userdata';

export default combineReducers({
  streamsdata,
  userdata
})
