import React, { Component } from 'react';
import FBLoginButton from '../FbLoginButton/FBLoginButton';
import SaveButton from '../SaveButton/SaveButton';
import EditButton from '../EditButton/EditButton';
import './Navbar.css'
import logo from './logo.png'

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
        <img src={logo} className="navbar-logo" />
        <EditButton />
        <SaveButton />
        {this.showFacebookButton()}
      </div>
    );
  }
}

export default Navbar;
