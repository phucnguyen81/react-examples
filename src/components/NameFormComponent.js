/* global alert */
import React from 'react'

// Example of a controlled component: its state is controlled by multiple
// event handlers which keep the logical state in sync with the UI state.
export class NameForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {value: ''}

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    this.setState({value: event.target.value})
  }

  handleSubmit (event) {
    alert('A name was submitted: ' + this.state.value)
    event.preventDefault()
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input type='text' value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type='submit' value='Submit' />
      </form>
    )
  }
}
