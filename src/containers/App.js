import React, { Component } from 'react';
import Grid from './Grid';
import Navbar from './Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div style={{display: 'flex'}}>
          <div>
            LISTS
          </div>
          <Grid />
          <div>
            CHAT
          </div>
        </div>
      </div>
    );
  }
}

export default App;
