import React, { Component } from 'react';
import './App.css';
import Grid from './Grid';
import FBLoginButton from '../components/FBLoginButton';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid />
        <FBLoginButton />
      </div>
    );
  }
}

export default App;
