import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Grid from '../Grid/Grid';
import Panel from '../Panel/Panel';
import { connect } from 'react-redux';
import axios from 'axios';
import './Main.css'

class Main extends Component {
  componentDidMount = async () => {
    if (localStorage.getItem('token')) {
      await axios.get('http://192.168.1.241:3631/getUser', {headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}`}})
        .then(res => this.props.updateUserData({name: res.data.user.displayName, id: res.data.user.fbUserId, grids: res.data.user.grids}));
    }
    if (this.props.location.pathname !== '/') { 
      let code = this.props.location.pathname.replace('/', '');
      await axios.get(`http://192.168.1.241:3631/getGrid/${code}`, {headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}`}})
        .then(res => this.props.updateStreams(res.data.videos))
    }
  }
  render() {
    return (
      <div>
      <Navbar />
        <div className='main' style={{display: 'flex'}}>
          <Panel/>
          <Grid/>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateUserData: (user) => dispatch({
    type: 'USER_DATA',
    userdata: user
  }),
  updateStreams: (streams) => dispatch({
    type: 'VISITOR_STREAMS',
    visitorstreams: streams
  })
});

export default connect(null, mapDispatchToProps)(Main);
