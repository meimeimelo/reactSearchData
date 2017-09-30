import React, { Component } from 'react'
import './styles.css'

class SearchContent extends Component {
  renderUserListInfo(items, listType) {
    const userListType = {
      repository: 'Repository',
      follower: 'Follower'
    }
    const renderFollowerSection = items.map((value, index) => {
      const { follower_name, repo_name } = value
      return (
        <li key={`${listType}${index}`}>
          { userListType[listType] === userListType['repository'] ? repo_name : follower_name }
        </li>
      )
    })

    return renderFollowerSection
  }

  renderSearchContent() {
    const { searchData } = this.props
    const searchInfo = searchData.map((value, index) => {
      return (
        <div key={index} className='searchContent'>
          <div>
            <p>
              {value.user_name}
            </p>
          </div>
          <div>
            <p>
              {value.user_bio}
            </p>
          </div>
          <ul>
            { this.renderUserListInfo(value.user_follower, 'follwer') }
          </ul>
          <ul>
            { this.renderUserListInfo(value.user_repo, 'repository') }
          </ul>
        </div>
      )
    })
    return searchInfo
  }

  render() {
    return (
      <div>
        { this.renderSearchContent() }
      </div>
    )
  }
}

export default SearchContent
