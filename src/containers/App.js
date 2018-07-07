import React, { Component } from 'react';
import Grid from './Grid';
import { Switch, Route } from 'react-router-dom';

import Navbar from './Navbar';
import Panel from './Panel';
import Chat from './Chat';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' pathname="/grid" component={Grid}/>
          <Route path='/:id' pathname="/grid" component={Grid}/>
        </Switch>
      </div>
    );
  }
}

export default App;
