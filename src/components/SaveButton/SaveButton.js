import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import './SaveButton.css';


class SaveButton extends Component {
  getStreams = () => {
    console.log(this.props.streamsdata);
    console.log(this.props.userdata);
    let data = {streams: this.props.streamsdata, user: this.props.userdata};
    console.log(data);
    // axios.post('http://...', JSON.parse(data))
    //   .then(res => console.log(res.data))
    //   .catch(err => console.log(err.message))
  }

  shareStreams = () => {
    let data = {streams: this.props.streamsdata, user: this.props.userdata};
    // axios.post('http://...', JSON.parse(data))
    //   .then(res => console.log(res.data))
    //   .catch(err => console.log(err.message))
  }

  render() {
    return (
      <div>
        <button onClick={this.getStreams}>Save Your Grid</button>
        <button onClick={this.shareStreams}>Share Your Grid</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  streamsdata: state.streamsdata,
  userdata: state.userdata,
})

// const mapDispatchToProps = (dispatch) => ({

// })
export default connect(mapStateToProps, null)(SaveButton);

