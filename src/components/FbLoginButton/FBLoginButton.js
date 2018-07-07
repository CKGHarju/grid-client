import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import './FBLoginButton.css';
import { connect } from 'react-redux';
import axios from 'axios';

class FBLoginButton extends Component {
  responseFacebook = async (response) => {
    let user = {name: response.name, id: response.id, email: response.email, token: response.accessToken}
    await console.log(user);
    await this.props.updateUserData(user);
    await axios.get('http://192.168.1.241:3631/auth/facebook', { headers: { "Authorization" : `Bearer ${response.accessToken}`}})
      //.then(res => res.json())
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <FacebookLogin
        appId="1137338516406399"
        autoLoad={true}
        fields="name,email,picture"
        callback={this.responseFacebook}
        cssClass="facebookLoginButton"
        version="3.0"
      />
    );
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
  updateUserData: (user) => dispatch({
    type: 'USER_DATA',
    userdata: user
  })
});

export default connect(mapStateToProps, mapDispatchToProps)(FBLoginButton);