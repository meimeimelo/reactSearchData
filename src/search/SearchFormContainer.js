import React, { Component } from 'react'
import './styles.css'
import SearchContent from './SearchContent'
import mockupData from './mockupData'

class SearchFormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      onValueDisplay: false,
      searchInput: '',
      searchData: []
    }
    this.onHandleSubmit = this.onHandleSubmit.bind(this)
    this.onHandleChange = this.onHandleChange.bind(this)
  }

  onHandleChange(event) {
    this.setState({
      searchInput: event.target.value,
      onValueDisplay: false
    })
  }

  onHandleSubmit(event) {
    event.preventDefault()
    const { searchInput } = this.state
    const searchOutput = mockupData.data.filter(value => value.user_name.toLowerCase() === searchInput)

    this.setState({
      onValueDisplay: true,
      searchData: searchOutput
    })
  }

  renderActivityIndicator() {
    const { searchInput } = this.state
    const activityIndicator = !!searchInput ? <p>Typing</p> : <p>Input github username</p>

    return activityIndicator
  }

  render() {
    const { searchData } = this.state
    const { searchInput, onValueDisplay } = this.state
    return (
      <div className='searchFormContainer'>
        <form onSubmit={this.onHandleSubmit}>
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
          ? <SearchContent searchData={searchData} searchValue={searchInput} />
          : this.renderActivityIndicator()
        }
      </div>
    )
  }
}

export default SearchFormContainer
