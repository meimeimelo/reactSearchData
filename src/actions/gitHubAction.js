import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR
} from './actionTypes'

export const fetchPostsRequest = () => ({
  type: FETCH_USER_REQUEST
})

export const fetchPostsSuccess = (payload) => ({
    type: FETCH_USER_SUCCESS,
    payload
})

export const fetchPostsError = () => ({
  type: FETCH_USER_ERROR
})

export const fetchPostsWithRedux = (dispatch, userName) => {
  console.log('fetchPostsWithRedux')
  dispatch(fetchPostsRequest())
  fetchPosts(userName).then(([response, json]) =>{
    if(response.ok){
      dispatch(fetchPostsSuccess(json))
    }
    else{
      dispatch(fetchPostsError())
    }
  })
}

const fetchPosts = (userName) => {
  console.log('fetching...')
  return fetch(`https://api.github.com/users/${userName}`, { method: 'GET'})
    .then(response => Promise.all([response, response.json()]))
}
