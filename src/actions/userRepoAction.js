import {
  FETCH_REPO_REQUEST,
  FETCH_REPO_SUCCESS,
  FETCH_REPO_ERROR
} from './actionTypes'

export const fetchRepoRequest = () => ({
  type: FETCH_REPO_REQUEST
})

export const fetchRepoSuccess = (payload) => {
  return ({
    type: FETCH_REPO_SUCCESS,
    payload
  })
}

export const fetchRepoError = () => ({
  type: FETCH_REPO_ERROR
})

export const fetchRepoWithRedux = (dispatch, userName) => {
  dispatch(fetchRepoRequest())
  fetchRepo(userName).then(([response, json]) =>{
    if(response.ok){
      dispatch(fetchRepoSuccess(json))
    }
    else{
      dispatch(fetchRepoError())
    }
  })
}

const fetchRepo = (userName) => {
  return fetch(`https://api.github.com/users/${userName}/repos`, { method: 'GET'})
    .then(response => Promise.all([response, response.json()]))
}
