import React from 'react'
import ReactDom from 'react-dom'

export default class Form extends React.Component {
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (e) {
    e.preventDefault()
    const loginInput = ReactDom.findDOMNode(this.refs.login)
    this.props.addCard(loginInput.value)
    loginInput.value = ''
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input placeholder='github login' ref='login' />
        <button>Add</button>
      </form>
    )
  }
}
