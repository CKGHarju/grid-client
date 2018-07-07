import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Grid from '../Grid/Grid';
import Panel from '../Panel/Panel';
import './Main.css'

class Main extends Component {
  render() {
    return (
      <div>
      <Navbar />
        <div className='main' style={{display: 'flex'}}>
          <Panel/>
          <Grid/>
        </div>
      </div>
    );
  }
}

export default Main;
