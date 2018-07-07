import React, { Component } from 'react';
import Main from '../Main/Main';
import { Switch, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' pathname="/main" component={Main}/>
          <Route path='/:id' pathname="/main" component={Main}/>
        </Switch>
      </div>
    );
  }
}

export default App;
