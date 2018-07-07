import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Stream.css';

class Stream extends Component {

  constructor (props) {
    super(props);
    this.state = {
      stream: '',
      type: '',
      showTypes: false,
      showForm: false,
      value: '',
    }
  }

  componentDidMount() {
    if (this.props.channel) {
      this.setState({stream: this.props.channel, type: this.props.type})
    }
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleSubmit = async (event) => {
    await event.preventDefault();
    await this.setState({stream: this.state.value});

    // await this.setState({streams: [...this.state.streams, `http://player.twitch.tv/?channel=${this.state.value}`] });
    await this.props.updateStreams({type: this.state.type, linkURL: this.state.stream});
  }

  renderStream = () => {
    return (
      <iframe
        src={"http://player.twitch.tv/?channel=" + this.state.stream}
        height="300"
        width="450"
        frameborder="<frameborder>"
        scrolling="no"
        allowfullscreen="true">
      </iframe>
    )
    
  }

  renderLogic = () => {
    if (this.state.stream === '') {
      return this.renderAdd()
    } else {
      if (this.props.addStream) this.props.addStream();
      return this.renderStream();
    }
  }

  renderAdd = () => {
    if (this.state.showForm) {
      if (this.state.type === 'twitch') return (
        <form className='renderAddForm' onSubmit={this.handleSubmit}>
          <label className='renderAddLabel'>
            <p>Channel</p>
            <input type="text" value={this.state.value} onChange={this.handleChange} autoFocus/>
          </label>
          <input className='renderAddInput' type="submit" value="Save"/>
        </form>
      )      
    }

    if (!this.state.showTypes && !this.state.showForm) return (
      <div className='logolist'>
        <i onClick={() => this.setState({showTypes: true})} className="renderAddLogo fas fa-plus"></i>;
      </div>
    )
    if (this.state.showTypes) return (
      <div className='logolist' style={{display: 'flex', justifyContent: 'space-around', fontSize: '70px', paddingTop: '100px'}}> 
        <i className="fab fa-twitch" onClick={() => this.setState({type: 'twitch', showForm: 'true'})}></i>
        <i className="fab fa-youtube" onClick={() => this.setState({type: 'youtube', showForm: 'true'})}></i>
        <i className="fab fa-facebook" onClick={() => this.setState({type: 'facebook', showForm: 'true'})}></i>
      </div>
    )
    
  }


  render () {
    return (
      <div className='streamContainer'>
        {this.renderLogic()}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  updateStreams: (stream) => dispatch({
    type: 'SAVE_STREAMS',
    streamsdata: stream,
  })
});

export default connect(mapStateToProps, mapDispatchToProps)(Stream);