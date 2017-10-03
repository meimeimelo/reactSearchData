import {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_ERROR
} from './actionTypes'

export const fetchPostsRequest = () => ({
  type: FETCH_REQUEST
})

export const fetchPostsSuccess = (payload) => ({
  type: FETCH_SUCCESS,
  payload
})

export const fetchPostsError = () => ({
  type: FETCH_ERROR
})

export const fetchPostsWithRedux = (dispatch) => {
  console.log('fetchPostsWithRedux')
  dispatch(fetchPostsRequest())
  fetchPosts().then(([response, json]) =>{
    console.log('response: ', response)
    if(response.status === 200){
      const jsonResponse = json.data.children
      dispatch(fetchPostsSuccess(jsonResponse))
    }
    else{
      dispatch(fetchPostsError())
    }
  })
}

const fetchPosts = () => {
  console.log('fetching...')
  return fetch(`https://api.github.com/users/.json`, { method: 'GET'})
    .then(response => Promise.all([response, response.json()]))
}
