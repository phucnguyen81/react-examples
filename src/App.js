import React, { Component } from 'react'

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import SplitPane from 'react-split-pane'

import './App.css'

import { Home } from './components/HomeComponent'
import { HelloWorld } from './components/HelloWorldComponent'
import { NoMatch } from './components/NoMatchComponent'
import { Hello } from './components/HelloComponent'
import { UserList } from './components/UserListComponent'
import { Toggle } from './components/ToggleComponent'
import { NameForm } from './components/NameFormComponent'
import { SelectForm } from './components/SelectFormComponent'
import { Counter } from './components/CounterComponent'
import { GithubCards } from './components/GithubCardsComponent'

// Show two panes. The left pane shows the links. The right pane shows the
// component of the selected link.
export class App extends Component {
  render () {
    const counterStep = 2
    const counterRender = (props) => {
      return <Counter step={counterStep} {...props} />
    }

    const pane1Style = { textAlign: 'left' }

    return (
      <Router>
        <div className='App'>
          <div className='container'>
            <SplitPane split='vertical' minSize={200} pane1Style={pane1Style}>
              <ol>
                <li><Link to='/hello/world'>Hello World</Link></li>
                <li><Link to='/hello'>Hello</Link></li>
                <li><Link to='/userlist'>User List</Link></li>
                <li><Link to='/toggle'>Toggle</Link></li>
                <li><Link to='/form/name'>Name Form</Link></li>
                <li><Link to='/form/select'>Select Form</Link></li>
                <li><Link to='/counter'>Counter</Link></li>
                <li><Link to='/githubcards'>Github Cards</Link></li>
              </ol>
              {/* split two panes */}
              <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/hello/world' exact component={HelloWorld} />
                <Route path='/hello' exact component={Hello} />
                <Route path='/userlist' exact component={UserList} />
                <Route path='/toggle' exact component={Toggle} />
                <Route path='/form/name' exact component={NameForm} />
                <Route path='/form/select' exact component={SelectForm} />
                <Route path='/counter' exact render={counterRender} />
                <Route path='/githubcards' exact component={GithubCards} />
                <Route component={NoMatch} />
              </Switch>
            </SplitPane>
          </div>
        </div>
      </Router>
    )
  }
}
