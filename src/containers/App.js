import React, { Component } from 'react';
import Grid from './Grid';
import Navbar from './Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div style={{display: 'flex'}}>
          <div style={{fontSize: '20px', width: '300px'}}>
            Popular / New / Chat
          </div>
          <Grid />
          <div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
