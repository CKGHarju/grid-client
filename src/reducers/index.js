import { combineReducers } from 'redux';
import streamsdata from './streamsdata';
import userdata from './userdata';
import chatdata from './chatdata';

export default combineReducers({
  streamsdata,
  userdata,
  chatdata
})
