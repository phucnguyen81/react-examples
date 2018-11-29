import React, { Component } from 'react'

// Show a user as a table row
class UserRow extends Component {
  render () {
    return (
      <tr>
        <td>{this.props.user.userName}</td>
        <td>
          <a href={'mailto:' + this.props.user.email}>
            {this.props.user.email}
          </a>
        </td>
      </tr>
    )
  }
}

// Show multiple users as a table, each row shows a user.
class UserList extends Component {
  constructor (props) {
    super(props)
    this.state = this.getInitialState()
  }

  getInitialState () {
    return {
      users: [
        {id: 1, userName: 'RyanVice', email: 'ryan@vicesoftware.com'},
        {id: 2, userName: 'AdamHorton', email: 'digitalicarus@gmail.com'}
      ]
    }
  }

  render () {
    const users = this.state.users.map(function (user) {
      // key prevents react warning
      return <UserRow user={user} key={user.id} />
    })

    return (
      <table>
        <tr>
          <th>User Name</th>
          <th>Email Address</th>
        </tr>
        {users}
      </table>
    )
  }
}

export { UserList }
