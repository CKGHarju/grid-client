import React, { Component } from 'react';
import Grid from './Grid';
import { Switch, Route } from 'react-router-dom';


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
