import React, { Component } from 'react'

import { Home } from 'pages/home'
import { ListContainer as List } from 'pages/lists'

import { Route, Switch, Redirect } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Switch>
        <Redirect exact from="/" to="/home"></Redirect>
        <Route path='/home' component={Home}/>
        <Route path="/list" component={List} />
      </Switch>
    )
  }
}

export default App;
