import React, { Component } from 'react';
import Navbar from './Navbar';
import Grid from './Grid';
import Panel from './Panel';

class Main extends Component {
  render() {
    return (
      <div>
      <Navbar />
        <div style={{display: 'flex'}}>
          <Panel/>
          <Grid/>
        </div>
      </div>
    );
  }
}

export default Main;
