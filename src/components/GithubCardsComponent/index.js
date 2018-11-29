import React from 'react'

import Card from './GcCard'
import Form from './GcForm'

export class GithubCards extends React.Component {
  constructor (props) {
    super(props)
    this.state = {logins: ['richhickey', 'petehunt']}
    this.addCard = this.addCard.bind(this)
  }

  addCard (login) {
    this.setState({logins: this.state.logins.concat(login)})
  }

  render () {
    // TODO replace array logings with map so that logins
    // are unique and can be used as keys
    const cards = this.state.logins.map((login) => {
      return (<Card login={login} key={login} />)
    })
    return (
      <div>
        <Form addCard={this.addCard} />
        {cards}
      </div>
    )
  }
}
