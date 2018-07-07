import React, { Component } from 'react';
import Stream from './Stream';
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
    let streams = this.state.streams;
    streams.push(<Stream addStream={this.addStream}/>)
    this.setState({streams: streams})
  }

  render () {
    return (
      <div className='Grid' style={{
        height: '95vh',
        width: '100%',
        background: 'black',
        position: 'relative',
      }}>
        {this.state.streams}
      </div>
    )
  }
}

export default Grid;