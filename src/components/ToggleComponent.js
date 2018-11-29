import React from 'react'

// Toggle boolean state ON/OFF
export class Toggle extends React.Component {
  constructor (props) {
    super(props)
    this.state = {isToggleOn: true}

    // This binding makes 'this' work in the callback
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }))
  }

  render () {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    )
  }
}
