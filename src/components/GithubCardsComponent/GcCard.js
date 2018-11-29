import React from 'react'
import $ from 'jquery'

export default class Card extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {
    $.get('https://api.github.com/users/' + this.props.login, (data) => {
      this.setState({
        name: data.name,
        avatar_url: data.avatar_url
      })
    })
  }

  render () {
    return (
      <div>
        <img src={this.state.avatar_url} width='80' alt='Avatar' />
        <h3>{this.state.name}</h3>
      </div>
    )
  }
}
