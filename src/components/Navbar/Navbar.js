import React, { Component } from 'react';
import FBLoginButton from '../FbLoginButton/FBLoginButton';
import SaveButton from '../SaveButton/SaveButton';
import './Navbar.css'

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: true,
    }
  }
  componentDidMount = async () => {
    if (localStorage.getItem('token')) {
      await this.setState({token: false})
    }
  }

  showFacebookButton = () => {
    if (this.state.token) {
      return <FBLoginButton />
    }
  }
  render() {
    return (
      <div className='Wrapper'>
        <p className='logo'>GRID.TV</p>
        <SaveButton />
        {this.showFacebookButton()}
      </div>
    );
  }
}

export default Navbar;
