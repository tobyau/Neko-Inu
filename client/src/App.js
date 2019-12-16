import React, { Component } from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import ProfilePage from './components/ProfilePage'
import HomePage from './components/HomePage'
import PetListPage from './components/PetListPage'

import "./index.css"

import { GlobalContextProvider } from './contexts/GlobalContext'

class App extends Component {
  render() {
    return (
      <GlobalContextProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/list-page" component={PetListPage} />
            <Route exact path="/pet-profile" component={ProfilePage} />
          </Switch>
        </Router>
      </GlobalContextProvider>
    );
  }
}
  
export default App;