import React, { Component } from 'react';
import Stream from '../Stream/Stream';
import { connect } from 'react-redux';
import './Grid.css';

class Grid extends Component {

  constructor (props) {
    super(props);
    this.state = {
      streams: [],
    }
  }

  componentDidMount() {
    //let mockdata = ["Alderiate", "imaqtpie", "ElmiilloR", "Yelo", "SolaryFortnite"];
    let mockdata = [];
  //this.props.streams.forEach(element => {
    mockdata.forEach(element => {
      let streams = this.state.streams;
      streams.push(<Stream channel={element}/>)
      this.setState({streams: streams})
    });
    let streams = this.state.streams;
    streams.push(<Stream addStream={this.addStream}/>)
    this.setState({streams: streams})


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

export default connect(mapStateToProps, null)(Grid);