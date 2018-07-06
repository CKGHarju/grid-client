import React, { Component } from 'react';
import FBLoginButton from '../components/FBLoginButton';

class App extends Component {
  render() {
    return (
      <div className="App">
        <React.Fragment>
          <FBLoginButton />
        </React.Fragment>
      </div>
    );
  }
}

export default App;
