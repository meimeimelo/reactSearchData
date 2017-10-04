import {
  FETCH_FOLLOWER_REQUEST,
  FETCH_FOLLOWER_SUCCESS,
  FETCH_FOLLOWER_ERROR
} from '../actions/actionTypes'

const initialState = {
  posts: {}
}

const userFollowers = (state = {}, action) => {
  switch (action.type) {
    case FETCH_FOLLOWER_REQUEST:
      return state
    case FETCH_FOLLOWER_SUCCESS:
      return {
        ...state,
        followers: action.payload
      }
    default:
      return state
  }
}

export default userFollowers
