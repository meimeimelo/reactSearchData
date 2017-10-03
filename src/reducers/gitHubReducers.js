import {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_ERROR
} from '../actions/actionTypes'

const initialState = {
  posts: []
}

const gitHub = (state = {}, action) => {
  console.log('actions: ', action)
  switch (action.type) {
    case FETCH_REQUEST:
      return state
    case FETCH_SUCCESS:
    console.log('I am at FETCH_SUCCESS')
      return {
        ...state,
        posts: action.payload
      }
    default:
      return state
  }
}

export default gitHub
