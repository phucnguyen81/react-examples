import React, { Component } from 'react'

class HelloMessage extends Component {
  render () {
    return <h2>{this.props.message}</h2>
  }
}

// A text box that tracks user editing state.
class TextBox extends Component {
  constructor (props) {
    super(props)
    this.state = this.getInitialState()
    this.edit = this.edit.bind(this)
    this.update = this.update.bind(this)
  }

  getInitialState () {
    return { isEditing: false }
  }

  update () {
    this.props.update(this.refs.messageTextBox.value)
    this.setState(
      { isEditing: false }
    )
  }

  edit () {
    this.setState(
      { isEditing: true }
    )
  }

  getButton () {
    return this.state.isEditing
      ? <button onClick={this.update}>Update</button>
      : <button onClick={this.edit}>Edit</button>
  }

  render () {
    return (
      <div>
        {this.props.label}<br />
        <input type='text' ref='messageTextBox' disabled={!this.state.isEditing} />
        {this.getButton()}
      </div>
    )
  }
}

class Hello extends Component {
  constructor (props) {
    super(props)
    this.state = this.getInitialState()
    this.update = this.update.bind(this)
  }

  getInitialState () {
    return {
      firstName: '', lastName: ''
    }
  }

  update (key, value) {
    var newState = {}
    newState[key] = value
    this.setState(newState)
  }

  render () {
    return (
      <div>
        <HelloMessage
          message={'Hello ' + this.state.firstName + ' ' + this.state.lastName} />
        <TextBox label='First Name' update={this.update.bind(null, 'firstName')} />
        <TextBox label='Last Name'
          update={this.update.bind(null, 'lastName')} />
      </div>
    )
  }
}

export { Hello }
