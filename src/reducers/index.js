import { combineReducers } from 'redux'
import gitHub from './gitHubReducers'
import userFollowers from './userFollowerReducer'

const reducers = combineReducers({
  gitHub,
  userFollowers
})

export default reducers
