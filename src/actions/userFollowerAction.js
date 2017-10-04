import {
  FETCH_FOLLOWER_REQUEST,
  FETCH_FOLLOWER_SUCCESS,
  FETCH_FOLLOWER_ERROR
} from './actionTypes'

export const fetchFollowerRequest = () => ({
  type: FETCH_FOLLOWER_REQUEST
})

export const fetchFollowerSuccess = (payload) => {
  console.log('Payload action: ', payload)
  return ({
    type: FETCH_FOLLOWER_SUCCESS,
    payload
  })
}

export const fetchFollowerError = () => ({
  type: FETCH_FOLLOWER_ERROR
})

export const fetchFollowerWithRedux = (dispatch, userName) => {
  dispatch(fetchFollowerRequest())
  fetchFollower(userName).then(([response, json]) =>{
    if(response.ok){
      dispatch(fetchFollowerSuccess(json))
    }
    else{
      dispatch(fetchFollowerError())
    }
  })
}

const fetchFollower = (userName) => {
  return fetch(`https://api.github.com/users/${userName}/followers`, { method: 'GET'})
    .then(response => Promise.all([response, response.json()]))
}
