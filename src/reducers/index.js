import { combineReducers } from 'redux'
import gitHub from './gitHubReducers'
import userFollowers from './userFollowerReducer'
import userRepos from './userRepoReducer'

const reducers = combineReducers({
  gitHub,
  userFollowers,
  userRepos
})

export default reducers
