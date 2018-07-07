import { combineReducers } from 'redux';
import asyncdata from './reducers/asyncdata';
import streamsdata from './reducers/streamsdata';
import userdata from './reducers/userdata';
export default combineReducers({
  asyncdata,
  streamsdata,
  userdata
})
