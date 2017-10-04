import React, { Component } from 'react'
import './styles.css'

class SearchContent extends Component {
  renderUserListInfo(items, listType) {
    const userListType = {
      repository: 'Repository',
      follower: 'Follower'
    }

    const renderFollowerSection = items.map((value, index) => {
      const {
        login,
        avatar_url,
        url,
        name,
        html_url
      } = value
      return (
        <div key={`${listType}${index}`} className='contentItemList'>
          { userListType[listType] === userListType['repository']
            ? <div className='itemTableCell'>
                <a href={html_url} target='_blank'>{ name }</a>
              </div>
            : <div className='displayTable'>
                <div className='logoTableCell'>
                  <img src={avatar_url} alt="FollowerAvatarImg" />
                 </div>
                 <div className='itemTableCell'>
                   { login }
                 </div>
              </div>
           }
        </div>
      )
    })

    return renderFollowerSection
  }

  renderSearchContent() {
    const {
      searchData,
      followerData,
      repoData
    } = this.props
    const searchInfo = searchData.map((value, index) => {
      return (
        <div key={index} className='searchContent'>
          <div className='contentCard'>
            <div className='displayTable'>
              <div className='userUrlAvatar'>
                <img src={value.avatar_url} alt="userUrlAvatarImg" />
              </div>
              <div className='userInfo'>
                <div className='userNameText'>
                  {value.login}
                </div>

                <div>
                  <p className='nonMarginBottom'>Bio:</p>
                  <p className='nonMarginTop'>{value.bio}</p>
                </div>

                <div className='displayTable'>
                  <div className='userDisplayTableCell'>
                    <p>Followers:</p>
                    { this.renderUserListInfo(followerData, 'follwer') }
                  </div>

                  <div className='userDisplayTableCell'>
                    <p>Repository:</p>
                    { this.renderUserListInfo(repoData, 'repository') }
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
