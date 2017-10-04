import React, { Component } from 'react'
import { connect } from 'react-redux'
import './styles.css'
import SearchContent from './SearchContent'
import { fetchPostsWithRedux } from '../actions/gitHubAction'
import { fetchFollowerWithRedux } from '../actions/userFollowerAction'
import { fetchRepoWithRedux } from '../actions/userRepoAction'

class SearchFormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      onValueDisplay: false,
      searchInput: '',
      searchData: [],
      userFollowersData: [],
      userReposData: []
    }
    this.onHandleSubmit = this.onHandleSubmit.bind(this)
    this.onHandleChange = this.onHandleChange.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    const {
      searchData,
      userFollowersData,
      userReposData
     } = this.state

    if(nextProps.userData !== searchData) {
      this.setState({
        ...this.state,
        searchData: nextProps.userData
      })
    } else if (nextProps.followerData !== userFollowersData) {
      this.setState({
        ...this.state,
        userFollowersData: nextProps.followerData
      })
    } else if (nextProps.repoData !== userReposData) {
      this.setState({
        ...this.state,
        userReposData: nextProps.repoData
      })
    }
  }

  onHandleChange(event) {
    this.setState({
      searchInput: event.target.value,
      onValueDisplay: false
    })
  }

  onHandleSubmit(event) {
    event.preventDefault()
    const {
      fetchData,
      fetchFollower,
      fetchRepo
     } = this.props
    const { searchInput } = this.state
    this.setState({
      onValueDisplay: true
    })
    fetchData(searchInput)
    fetchFollower(searchInput)
    fetchRepo(searchInput)
  }

  renderActivityIndicator() {
    const { searchInput } = this.state
    return (
      <p className='activityText'>
        { searchInput ? 'Typing...' : 'Input github username' }
      </p>
    )
  }

  render() {
    const {
      searchData,
      userFollowersData,
      userReposData
     } = this.state
    const { searchInput, onValueDisplay } = this.state
    return (
      <div className='searchFormContainer'>
        <form className='searchForm' onSubmit={this.onHandleSubmit}>
          <input
            type='text'
            placeholder='Input github username'
            value={searchInput}
            onChange={this.onHandleChange}
          />
          <input
            type="submit"
            value="OK"
          />
        </form>
        { onValueDisplay
          ? <SearchContent
            searchData={searchData}
            followerData={userFollowersData}
            repoData={userReposData}
            searchValue={searchInput}
            />
          : this.renderActivityIndicator()
        }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    userData: state.gitHub.user,
    followerData: state.userFollowers.followers,
    repoData: state.userRepos.user_repo,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchData: (userName) => fetchPostsWithRedux(dispatch, userName),
    fetchFollower: (userName) => fetchFollowerWithRedux(dispatch, userName),
    fetchRepo: (userName) => fetchRepoWithRedux(dispatch, userName)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchFormContainer)
