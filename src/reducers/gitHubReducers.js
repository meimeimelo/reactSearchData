import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR
} from '../actions/actionTypes'

const initialState = {
  user: []
}

const gitHub = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return state
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        user: [ action.payload ]
      }
    default:
      return state
  }
}

export default gitHub
