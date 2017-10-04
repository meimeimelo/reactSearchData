import React, { Component } from 'react'
import { connect } from 'react-redux'
import './styles.css'
import SearchContent from './SearchContent'
import mockupData from './mockupData'
import { fetchPostsWithRedux } from '../actions/gitHubAction'
import { fetchFollowerWithRedux } from '../actions/userFollowerAction'

class SearchFormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      onValueDisplay: false,
      searchInput: '',
      searchData: [],
      userFollowersData: []
    }
    this.onHandleSubmit = this.onHandleSubmit.bind(this)
    this.onHandleChange = this.onHandleChange.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    console.log('nextProps: ', nextProps)
    const {
      searchData,
      userFollowersData
     } = this.state
    if(nextProps.userData !== searchData) {
      this.setState({
        searchData: nextProps.userData
      })
    } else if (nextProps.followerData !== userFollowersData) {
        console.log('userFollowersData nextProps: ', nextProps.followerData)
      this.setState({
        userFollowersData: nextProps.followerData
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
      fetchFollower
     } = this.props
    const { searchInput } = this.state
    const searchOutput = mockupData.data.filter(value => value.user_name.toLowerCase() === searchInput)
    this.setState({
      onValueDisplay: true,
      searchData: searchOutput
    })
    fetchData(searchInput)
    fetchFollower(searchInput)
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
    console.log('searchItem: ', this.props.searchItem)
    const {
      searchData,
      userFollowersData
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
            value="Submit"
          />
        </form>
        { onValueDisplay
          ? <SearchContent
            searchData={searchData}
            followerData={userFollowersData}
            searchValue={searchInput}
            />
          : this.renderActivityIndicator()
        }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log('state: ', state)
  return {
    userData: state.gitHub.user,
    followerData: state.userFollowers.followers
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchData: (userName) => fetchPostsWithRedux(dispatch, userName),
    fetchFollower: (userName) => fetchFollowerWithRedux(dispatch, userName)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchFormContainer)
