import React, { Component } from 'react';
import Grid from './Grid';
import Navbar from './Navbar';
import Panel from './Panel';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Navbar />
        <div style={{display: 'flex'}}>
          <Panel/>
          <Grid/>
        </div>

        
      </div>
    );
  }
}

export default App;
