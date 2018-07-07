import React, { Component } from 'react';
import FBLoginButton from '../FbLoginButton/FBLoginButton';
import SaveButton from '../SaveButton/SaveButton';
import './Navbar.css'

export default class Navbar extends Component {
  render() {
    return (
      <div className='Wrapper'>
        <p className='logo'>GRID.TV</p>
        <SaveButton />
        <FBLoginButton />
      </div>
    );
  }
}
