import React, { Component } from 'react';
import Grid from './Grid';
import Navbar from './Navbar';
import Chat from './Chat';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div style={{display: 'flex'}}>
          <Chat/>
          <Grid />
        </div>
      </div>
    );
  }
}

export default App;
