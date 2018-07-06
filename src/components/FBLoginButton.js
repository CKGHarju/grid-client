import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

class FBLoginButton extends Component {
  responseFacebook(response) {
    console.log(response);
  }

  render() {
    return (
      <FacebookLogin
        appId="315535472320068"
        autoLoad
        fields="name,email,picture"
        callback={this.responseFacebook}
      />
    );
  }
}

export default FBLoginButton;
