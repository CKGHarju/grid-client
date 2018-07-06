import React, { Component } from 'react';
import './App.css';
import Grid from './Grid';
import FBLoginButton from './FBLoginButton';
import Navbar from './Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Grid />
        <FBLoginButton />
      </div>
    );
  }
}

export default App;
