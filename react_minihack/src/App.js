import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import {Container} from 'reactstrap' 
import './App.css'

import Header from './components/Header'
import CreateScreen from './pages/CreateScreen'
import PlayScreen from './pages/PlayScreen'
import GameList from './components/GameList'

class App extends Component {
  render() {
    return (
      <Router>
        <Container style={{marginTop: '2rem', marginBottom: '3.5rem'}}>
          <Header/>
          <Route exact path="/" component={CreateScreen}/>
          <Route path="/:title" component={PlayScreen}/>
          <GameList/>
        </Container>
      </Router>
    );
  }
}

export default App;
