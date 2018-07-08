import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import './FBLoginButton.css';
import axios from 'axios';
import SERVER_URL from '../../config';

class FBLoginButton extends Component {
  responseFacebook = async (response) => {
    //let user = {name: response.name, id: response.id, email: response.email, token: response.accessToken}
    //await console.log(user);
    //await this.props.updateUserData(user);
    await axios.get(SERVER_URL + '/auth/facebook', { headers: { "Authorization" : `Bearer ${response.accessToken}`}})
      .then(res => localStorage.setItem('token', res.data.jwt))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <FacebookLogin
        appId="1137338516406399"
        autoLoad={true}
        fields="name,email,picture"
        textButton="Login"
        callback={this.responseFacebook}
        cssClass="facebookLoginButton"
        version="3.0"
      />
    );
  }
}

export default FBLoginButton;
