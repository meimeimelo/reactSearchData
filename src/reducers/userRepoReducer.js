import {
  FETCH_REPO_REQUEST,
  FETCH_REPO_SUCCESS,
  FETCH_REPO_ERROR
} from '../actions/actionTypes'

const initialState = {
  user_repo: []
}

const userRepos = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REPO_REQUEST:
      return state
    case FETCH_REPO_SUCCESS:
      return {
        ...state,
        user_repo: action.payload
      }
    default:
      return state
  }
}

export default userRepos
