import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Grid from '../Grid/Grid';
import Panel from '../Panel/Panel';
import { connect } from 'react-redux';
import axios from 'axios';
import './Main.css'
import SERVER_URL from '../../config';

class Main extends Component {
  state = {
    code: 'noCode'
  }
  componentDidMount = async () => {
    console.log('Server', SERVER_URL);
    if (localStorage.getItem('token')) {
      await axios.get(SERVER_URL +'/getUser', {headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}`}})
        .then(res => this.props.updateUserData({name: res.data.user.displayName, id: res.data.user.fbUserId, grids: res.data.user.grids}));
    }
    if (this.props.location.pathname !== '/') { 
      let code = this.props.location.pathname.replace('/', '');
      await this.setState({code: code})
      await axios.get(SERVER_URL + `/getGrid/${code}`, {headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}`}})
        .then(res => this.props.updateStreams(res.data.videos))
    }
    await console.log('streamdata!!: ', this.props.streamsdata);
  }
  render() {
    if (this.state.code == 'noCode') {
      return (
        <div>
        <Navbar />
          <div className='main' style={{display: 'flex'}}>
            <Panel/>
            <Grid/>
          </div>
        </div>
      );
    } else if (this.state.code !== 'noCode' && this.props.streamsdata[0]) {
      return (
        <div>
        <Navbar />
          <div className='main' style={{display: 'flex'}}>
            <Panel/>
            <Grid/>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <h2>Loading...</h2>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => ({
  streamsdata: state.streamsdata,
  userdata: state.userdata,
})

const mapDispatchToProps = (dispatch) => ({
  
  updateUserData: (user) => dispatch({
    type: 'USER_DATA',
    userdata: user
  }),

  updateStreams: (streams) => dispatch({
    type: 'SAVE_STREAMS',
    streamsdata: streams
  })
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
