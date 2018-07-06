import React, { Component } from 'react';

import FBLoginButton from './FBLoginButton';
import Navbar from './Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <FBLoginButton />
      </div>
    );
  }
}

export default App;
