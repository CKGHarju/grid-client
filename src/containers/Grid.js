import React, { Component } from 'react';
import Stream from './Stream';
import Navbar from './Navbar';
import { connect } from 'react-redux';
import '../styles/Grid.css';

class Grid extends Component {

  constructor (props) {
    super(props);
    this.state = {
      streams: [],
      
    }
  }

  componentDidMount() {
    this.setState({streams: [<Stream addStream={this.addStream}/>]})

  }

  addStream = () => {
    if (this.state.streams.length === 9) return;
    let streams = this.state.streams;
    streams.push(<Stream addStream={this.addStream}/>)
    this.setState({streams: streams})
  }

  render () {
    return (
      <div className='Grid'>
      {this.state.streams}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  streams: state.streamsdata
});

const mapDispatchToProps = (dispatch) => ({
  updateStreams: (streams) => dispatch({
    type: 'SAVE_STREAMS',
    streamsdata: streams,
  })
});

export default connect(mapStateToProps, mapDispatchToProps)(Grid);