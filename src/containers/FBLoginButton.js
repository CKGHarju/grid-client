import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import '../styles/FBLoginButton.css';

class FBLoginButton extends Component {
  responseFacebook(response) {
    console.log(response);
  }

  render() {
    return (
      <FacebookLogin
        appId="315535472320068"
        autoLoad={true}
        fields="name,email,picture"
        callback={this.responseFacebook}
        cssClass="facebookLoginButton"
        version="3.0"
      />
    );
  }
}

export default FBLoginButton;
