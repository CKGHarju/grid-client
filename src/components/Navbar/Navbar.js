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
        <div>
          <p style={{color: 'white', fontSize: '14px'}}>Grids Ninja has entered the competition! #Facebook Community Challenge 2018</p>
          <p style={{color: 'white', fontSize: '14px'}}>Server currently offline, will be back online in a few days</p>
        </div>
        
        <div className='NavButtonContainer'>
          <EditButton />
          <SaveButton />
        </div>
        
        {this.showFacebookButton()}
      </div>
    );
  }
}

export default Navbar;
