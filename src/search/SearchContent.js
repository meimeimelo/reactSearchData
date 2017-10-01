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
        <div key={`${listType}${index}`} className='contentItemList'>
          { userListType[listType] === userListType['repository']
            ? <div className='itemTableCell'>
                <a href='#'>{ repo_name }</a>
              </div>
            : <div className='displayTable'>
                <div className='logoTableCell'>
                  <img src="https://www.w3schools.com/images/w3schools_green.jpg" alt="FollowerAvatarImg" />
                 </div>
                 <div className='itemTableCell'>
                   { follower_name }
                 </div>
              </div>
           }
        </div>
      )
    })

    return renderFollowerSection
  }

  renderSearchContent() {
    const { searchData } = this.props
    const searchInfo = searchData.map((value, index) => {
      return (
        <div key={index} className='searchContent'>
          <div className='contentCard'>
            <div className='displayTable'>
              <div className='userUrlAvatar'>
                <img src="https://www.w3schools.com/images/w3schools_green.jpg" alt="userUrlAvatarImg" />
              </div>
              <div className='userInfo'>
                <div className='userNameText'>
                  {value.user_name}
                </div>

                <div>
                  <p className='nonMarginBottom'>Bio:</p>
                  <p className='nonMarginTop'>{value.user_bio}</p>
                </div>

                <div className='displayTable'>
                  <div className='userDisplayTableCell'>
                    <p>Followers:</p>
                    { this.renderUserListInfo(value.user_follower, 'follwer') }
                  </div>

                  <div className='userDisplayTableCell'>
                    <p>Repository:</p>
                    { this.renderUserListInfo(value.user_repo, 'repository') }
                  </div>
                </div>
              </div>

            </div>
          </div>
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
