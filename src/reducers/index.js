import { combineReducers } from 'redux'
import User from './user'
import Task from './task'
import UserDetails from './userDetails'

export default combineReducers({
  User,
  Task,
  UserDetails,
})
