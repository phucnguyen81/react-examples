import React from 'react'

export class Counter extends React.Component {
  constructor (props) {
    super(props)
    this.state = { counter: 0 }
    this.step = this.props.step || 1
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.setState({ counter: this.state.counter + this.step })
  }

  render () {
    return (
      <div>
        <CounterButton handleClick={this.handleClick} step={this.step} />
        <CounterResult result={this.state.counter} />
      </div>
    )
  }
}

class CounterButton extends React.Component {
  render () {
    const step = this.props.step
    const sign = step >= 0 ? '+' : '-1'
    return (
      <button onClick={this.props.handleClick}>{sign}{step}</button>
    )
  }
}

class CounterResult extends React.Component {
  render () {
    return (
      <div>{this.props.result}</div>
    )
  }
}
